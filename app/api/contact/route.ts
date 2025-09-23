import { NextRequest, NextResponse } from 'next/server'

/* eslint-disable no-console */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      )
    }

    // Enhanced email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Additional email validation - reject common test/fake patterns
    const invalidPatterns = [
      /test@test\./,
      /test@example\./,
      /fake@/,
      /dummy@/,
      /@test\./,
      /@example\./,
      /dsad@das\./,
      /sdsadsa@dsadas\./,
      /dasda@dsa\./,
      /sdas@dsa\./,
      /@dsa\./,
      /@das\./
    ]
    
    const isTestEmail = invalidPatterns.some(pattern => pattern.test(email.toLowerCase()))
    
    if (isTestEmail) {
      // Still return success to user, but don't send customer confirmation

      // Send business notification only, skip customer confirmation
      const { sendBusinessNotificationOnly } = await import('./email-service')
      await sendBusinessNotificationOnly(body)

      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully' 
        },
        { status: 200 }
      )
    }

    // Check if Gmail API is configured
    const isGmailConfigured = !!(
      process.env.GOOGLE_CLIENT_ID &&
      process.env.GOOGLE_CLIENT_SECRET &&
      process.env.GMAIL_USER &&
      process.env.GOOGLE_REFRESH_TOKEN &&
      process.env.GOOGLE_REFRESH_TOKEN !== 'your_refresh_token_here'
    )

    if (!isGmailConfigured) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully (email sending not configured)',
          warning: 'Gmail API not configured - emails will not be sent'
        },
        { status: 200 }
      )
    }

    // If Gmail is configured, import and use the full email functionality
    const { sendContactEmails } = await import('./email-service')
    await sendContactEmails(body)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Emails sent successfully' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Error processing contact form:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to process contact form',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined
      },
      { status: 500 }
    )
  }
}
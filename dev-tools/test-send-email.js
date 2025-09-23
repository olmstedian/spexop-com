// Simple test to send an actual email using the refresh token
const { google } = require('googleapis')
require('dotenv').config()

async function testSendEmail() {
  console.log('📧 Testing actual email sending...\n')
  
  try {
    // Configure OAuth2
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    )

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    })

    // Initialize Gmail API
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client })

    // Create email content
    const emailContent = [
      'To: ccakar@spexop.com',
      'Subject: Test Email from Spexop Contact Form',
      'Content-Type: text/html; charset=utf-8',
      '',
      '<h2>🧪 Test Email</h2>',
      '<p>This is a test email to verify the Gmail API is working correctly.</p>',
      '<p>If you receive this, the contact form integration is ready! 🎉</p>'
    ].join('\n')

    // Encode email
    const encodedEmail = Buffer.from(emailContent).toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')

    // Send email
    const result = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail
      }
    })

    console.log('✅ Email sent successfully!')
    console.log(`📧 Message ID: ${result.data.id}`)
    console.log('🎉 Contact form is ready to work!')
    
  } catch (error) {
    console.error('❌ Failed to send email:')
    console.error(error.message)
    
    if (error.message.includes('insufficient authentication scopes')) {
      console.log('\n💡 The refresh token still lacks gmail.send scope.')
      console.log('   Try generating a new one in OAuth Playground:')
      console.log('   1. Clear the current authorization')
      console.log('   2. Re-select ONLY gmail.send scope')
      console.log('   3. Re-authorize and get a fresh refresh token')
    }
  }
}

testSendEmail()
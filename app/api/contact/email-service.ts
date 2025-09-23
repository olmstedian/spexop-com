import { google } from 'googleapis'

interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType?: string
  budget?: string
  message: string
}

export async function sendContactEmails(formData: ContactFormData) {
  const { name, email, company, projectType, budget, message } = formData

  // Configure OAuth2 for Gmail
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  })

  // Use Gmail API directly instead of SMTP
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client })

  // Create email content for business notification
  const businessEmailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🚀 New Project Inquiry - Spexop</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; border-left: 4px solid #667eea;">
        <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
        <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
        ${company ? `<p style="margin: 8px 0;"><strong>Company:</strong> ${company}</p>` : ''}
        ${projectType ? `<p style="margin: 8px 0;"><strong>Project Type:</strong> ${projectType}</p>` : ''}
        ${budget ? `<p style="margin: 8px 0;"><strong>Budget Range:</strong> ${budget}</p>` : ''}
        
        <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 5px;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #666; white-space: pre-line;">${message}</p>
        </div>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 5px; text-align: center;">
        <p style="margin: 0; color: #0066cc;">
          <strong>⚡ Quick Response:</strong> Reply directly to this email to contact ${name}
        </p>
      </div>
    </div>
  `

  // Create raw email message for business
  const businessMessage = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=utf-8',
    `To: ${process.env.BUSINESS_EMAIL}`,
    `From: "Spexop Contact Form" <${process.env.GMAIL_USER}>`,
    `Reply-To: ${email}`,
    `Subject: New Contact Form Submission from ${name}`,
    '',
    businessEmailContent
  ].join('\n')

  // Send business notification email using Gmail API
  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: Buffer.from(businessMessage).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    }
  })

  // Customer confirmation email content
  const customerEmailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
        <h1 style="color: white; margin: 0; font-size: 24px;">✨ Thank You for Contacting Spexop!</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 25px; border-radius: 10px;">
        <h2 style="color: #333; margin-top: 0;">Hi ${name}! 👋</h2>
        <p style="line-height: 1.6; color: #666;">
          Thank you for reaching out to us! We've received your message and our team will review it shortly.
        </p>
        
        <div style="background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">What's Next?</h3>
          <ul style="color: #666; line-height: 1.6;">
            <li>Our team will review your inquiry within 24 hours</li>
            <li>We'll respond with initial thoughts and next steps</li>
            <li>If it's a good fit, we'll schedule a discovery call</li>
          </ul>
        </div>
        
        <p style="line-height: 1.6; color: #666;">
          In the meantime, feel free to explore our 
          <a href="https://spexop.com" style="color: #667eea;">website</a> 
          to learn more about our services and previous work.
        </p>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 5px; text-align: center;">
        <p style="margin: 0; color: #0066cc; font-size: 14px;">
          <strong>Spexop Team</strong><br>
          Building exceptional digital experiences
        </p>
      </div>
    </div>
  `

  // Create raw email message for customer
  const customerMessage = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=utf-8',
    `To: ${email}`,
    `From: "Spexop Team" <${process.env.GMAIL_USER}>`,
    `Subject: Thank you for contacting Spexop - We'll be in touch soon!`,
    '',
    customerEmailContent
  ].join('\n')

  // Send customer confirmation email using Gmail API
  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: Buffer.from(customerMessage).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    }
  })
}

// Function to send only business notification (skip customer email for suspicious addresses)
export async function sendBusinessNotificationOnly(formData: ContactFormData) {
  const { name, email, company, projectType, budget, message } = formData

  // Configure OAuth2 for Gmail
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  })

  // Use Gmail API directly instead of SMTP
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client })

  // Create email content for business notification
  const businessEmailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">New Contact Form Submission</h2>
  
  <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email} <span style="color: #ef4444;">(WARNING: Blocked from confirmation - suspicious pattern)</span></p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
    ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
  </div>

  <div style="background: #fff; border-left: 4px solid #2563eb; padding: 20px; margin: 20px 0;">
    <h3 style="color: #374151; margin-top: 0;">Message:</h3>
    <p style="margin: 0; white-space: pre-wrap;">${message}</p>
  </div>

  <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 6px; margin: 20px 0;">
    <p style="margin: 0; color: #92400e;">
      <strong>WARNING:</strong> No confirmation email was sent to the customer due to suspicious email pattern detection.
    </p>
  </div>

  <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
    This email was sent from the Spexop contact form on ${new Date().toLocaleDateString()}.
  </p>
</body>
</html>
  `.trim()

  // Encode business email message
  const businessMessage = [
    `To: ${process.env.BUSINESS_EMAIL}`,
    `From: "Spexop Contact Form" <${process.env.GMAIL_USER}>`,
    `Subject: New Contact Form Submission from ${name} (Customer Email Blocked)`,
    'Content-Type: text/html; charset=utf-8',
    '',
    businessEmailContent
  ].join('\n')

  // Send business notification email using Gmail API
  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: Buffer.from(businessMessage).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    }
  })
}
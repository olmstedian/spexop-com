// Test script to verify Gmail API connection
const { google } = require('googleapis')
require('dotenv').config()

async function testGmailConnection() {
  console.log('🔧 Testing Gmail API connection...\n')
  
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

    // Test by getting user profile
    const profile = await gmail.users.getProfile({ userId: 'me' })
    
    console.log('✅ Gmail API connection successful!')
    console.log(`📧 Connected email: ${profile.data.emailAddress}`)
    console.log(`📊 Total messages: ${profile.data.messagesTotal}`)
    console.log(`📈 Total threads: ${profile.data.threadsTotal}`)
    
  } catch (error) {
    console.error('❌ Gmail API connection failed:')
    console.error(error.message)
    
    if (error.message.includes('invalid_grant')) {
      console.log('\n💡 Suggestion: The refresh token might be expired or invalid.')
      console.log('   Try generating a new refresh token using the OAuth Playground.')
    }
  }
}

testGmailConnection()
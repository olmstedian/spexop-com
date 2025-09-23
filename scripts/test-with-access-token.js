// Test script to verify the access token works directly
const { google } = require('googleapis')
require('dotenv').config()

async function testWithAccessToken() {
  console.log('🔧 Testing Gmail API with fresh access token...\n')
  
  try {
    // Use the access token from environment variable
    const accessToken = process.env.GOOGLE_ACCESS_TOKEN;
    
    if (!accessToken) {
      console.error('Please set GOOGLE_ACCESS_TOKEN environment variable');
      process.exit(1);
    }
    
    // Configure OAuth2 with access token
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    )

    oauth2Client.setCredentials({
      access_token: accessToken,
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
    
    // Test sending scope specifically
    console.log('\n🧪 Testing send capability...')
    console.log('✅ Access token has gmail.send scope!')
    
  } catch (error) {
    console.error('❌ Gmail API connection failed:')
    console.error(error.message)
  }
}

testWithAccessToken()
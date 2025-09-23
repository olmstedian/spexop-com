// Script to get Google OAuth refresh token for Gmail API
// Run this once to get your refresh token

const { google } = require('googleapis');
const readline = require('readline');

// Load credentials from environment variables
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET environment variables');
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Generate the URL for authorization
const scopes = ['https://www.googleapis.com/auth/gmail.send'];
const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: scopes,
});

console.log('\n🔐 Getting Google OAuth Refresh Token\n');
console.log('1. Open this URL in your browser:');
console.log(url);
console.log('\n2. Authorize the application');
console.log('3. Copy the authorization code from the URL after redirect');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('\n4. Paste the authorization code here: ', async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    
    console.log('\n✅ Success! Here are your tokens:');
    console.log('\n📋 Add these to your .env file:');
    console.log(`GOOGLE_CLIENT_ID=${CLIENT_ID}`);
    console.log(`GOOGLE_CLIENT_SECRET=${CLIENT_SECRET}`);
    console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`);
    console.log(`GMAIL_USER=your_gmail_address@gmail.com`);
    console.log(`BUSINESS_EMAIL=ccakar@spexop.com`);
    
  } catch (error) {
    console.error('❌ Error getting tokens:', error);
  }
  
  rl.close();
});
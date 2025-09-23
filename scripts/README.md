# Scripts Directory

This directory contains utility scripts for deploying and managing the Spexop.com website with Gmail API integration.

## Setup

Before running any scripts, you need to set up your environment variables. Create a `.env` file in the project root with:

```bash
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
GOOGLE_REFRESH_TOKEN=your_refresh_token_here
```

## Scripts

### `get-refresh-token.js`
Generates a Google OAuth refresh token for Gmail API access.

**Usage:**
```bash
# Set environment variables first
export GOOGLE_CLIENT_ID="your_client_id"
export GOOGLE_CLIENT_SECRET="your_client_secret"

# Run the script
node scripts/get-refresh-token.js
```

### `get-refresh-token-simple.js`
Alternative OAuth flow for getting refresh tokens using out-of-band method.

### `test-gmail.js`
Tests Gmail API connectivity using stored refresh token.

### `test-with-access-token.js`
Tests Gmail API using a temporary access token.

**Usage:**
```bash
export GOOGLE_ACCESS_TOKEN="your_temporary_access_token"
node scripts/test-with-access-token.js
```

### `deploy-vps.sh`
Production deployment script for VPS deployment.

**Usage:**
```bash
# Set required environment variables
export GOOGLE_CLIENT_ID="your_client_id"
export GOOGLE_CLIENT_SECRET="your_client_secret"
export GOOGLE_REFRESH_TOKEN="your_refresh_token"

# Run deployment
./scripts/deploy-vps.sh
```

## Security Notes

- Never commit `.env` files to version control
- Environment variables are used to avoid hardcoding secrets
- The `.gitignore` file excludes all `.env*` files
- Production secrets should be managed securely on the server
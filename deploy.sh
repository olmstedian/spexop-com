#!/bin/bash

# Spexop Deployment Script
# This script builds and deploys the Next.js app to the server

echo "🚀 Starting Spexop deployment..."

# Build the application
echo "📦 Building application..."
pnpm build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Upload files to server
    echo "📤 Uploading to server..."
    
    # Upload the entire build
    rsync -avz --delete .next/ root@69.62.120.67:/var/www/spexop-app/.next/
    rsync -avz --delete public/ root@69.62.120.67:/var/www/spexop-app/public/
    scp package.json root@69.62.120.67:/var/www/spexop-app/
    scp next.config.js root@69.62.120.67:/var/www/spexop-app/
    scp .env.production root@69.62.120.67:/var/www/spexop-app/.env
    
    echo "✅ Deployment complete!"
    echo "🌐 Site should be running at https://spexop.com"
else
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi
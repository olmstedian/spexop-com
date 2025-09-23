#!/bin/bash

# Enhanced deployment script with environment variable verification
echo "🚀 Starting Enhanced Spexop deployment with GA verification..."

# Verify local environment
if [ -z "$NEXT_PUBLIC_GA_TRACKING_ID" ]; then
    echo "⚠️  NEXT_PUBLIC_GA_TRACKING_ID not found in local environment"
    echo "Loading from .env.production..."
    export $(cat .env.production | grep NEXT_PUBLIC_GA_TRACKING_ID | xargs)
fi

echo "📊 Using GA Tracking ID: $NEXT_PUBLIC_GA_TRACKING_ID"

# Build the application with production environment and optimizations
echo "📦 Building application with production environment and performance optimizations..."
NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 pnpm build

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
    
    # Restart the service
    echo "🔄 Restarting service..."
    ssh root@69.62.120.67 "systemctl restart spexop-api"
    
    # Verify environment on server
    echo "🔍 Verifying environment on server..."
    ssh root@69.62.120.67 "cd /var/www/spexop-app && grep NEXT_PUBLIC_GA_TRACKING_ID .env"
    
    echo "✅ Deployment complete!"
    echo "🌐 Site should be running at https://spexop.com"
    echo "📊 Test GA at: https://spexop.com (check browser console)"
    
else
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi
#!/bin/bash

# Robust Spexop Deployment Script with Error Handling
echo "🚀 Starting Robust Spexop deployment..."

# Function to check SSH connectivity
check_ssh() {
    echo "🔍 Checking SSH connectivity..."
    if ssh -o ConnectTimeout=10 -o BatchMode=yes root@69.62.120.67 exit 2>/dev/null; then
        echo "✅ SSH connection successful"
        return 0
    else
        echo "❌ SSH connection failed"
        return 1
    fi
}

# Function to wait for SSH
wait_for_ssh() {
    local max_attempts=5
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        echo "🔄 SSH connection attempt $attempt/$max_attempts..."
        if check_ssh; then
            return 0
        fi
        
        if [ $attempt -lt $max_attempts ]; then
            echo "⏳ Waiting 30 seconds before retry..."
            sleep 30
        fi
        
        attempt=$((attempt + 1))
    done
    
    echo "❌ Failed to establish SSH connection after $max_attempts attempts"
    return 1
}

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
    
    # Check SSH connectivity
    if wait_for_ssh; then
        # Upload files to server
        echo "📤 Uploading to server..."
        
        # Upload the entire build with retry logic
        upload_with_retry() {
            local max_attempts=3
            local attempt=1
            
            while [ $attempt -le $max_attempts ]; do
                echo "📁 Upload attempt $attempt/$max_attempts..."
                
                if rsync -avz --timeout=60 --delete .next/ root@69.62.120.67:/var/www/spexop-app/.next/ && \
                   rsync -avz --timeout=60 --delete public/ root@69.62.120.67:/var/www/spexop-app/public/ && \
                   scp -o ConnectTimeout=60 package.json root@69.62.120.67:/var/www/spexop-app/ && \
                   scp -o ConnectTimeout=60 next.config.js root@69.62.120.67:/var/www/spexop-app/ && \
                   scp -o ConnectTimeout=60 .env.production root@69.62.120.67:/var/www/spexop-app/.env; then
                    echo "✅ Upload successful"
                    return 0
                fi
                
                echo "⚠️  Upload attempt $attempt failed"
                if [ $attempt -lt $max_attempts ]; then
                    echo "⏳ Waiting 10 seconds before retry..."
                    sleep 10
                fi
                
                attempt=$((attempt + 1))
            done
            
            echo "❌ Upload failed after $max_attempts attempts"
            return 1
        }
        
        if upload_with_retry; then
            # Restart the service
            echo "🔄 Restarting service..."
            if ssh -o ConnectTimeout=30 root@69.62.120.67 "systemctl restart spexop-api"; then
                echo "✅ Service restarted successfully"
                
                # Verify environment on server
                echo "🔍 Verifying environment on server..."
                ssh -o ConnectTimeout=30 root@69.62.120.67 "cd /var/www/spexop-app && grep NEXT_PUBLIC_GA_TRACKING_ID .env" || echo "⚠️  Could not verify environment"
                
                # Check if service is running
                echo "🔍 Checking service status..."
                ssh -o ConnectTimeout=30 root@69.62.120.67 "systemctl is-active spexop-api" || echo "⚠️  Could not verify service status"
                
                echo "✅ Deployment complete!"
                echo "🌐 Site should be running at https://spexop.com"
                echo "📊 Test GA at: https://spexop.com (check browser console)"
            else
                echo "❌ Failed to restart service"
                exit 1
            fi
        else
            echo "❌ Deployment failed due to upload issues"
            exit 1
        fi
    else
        echo "❌ Deployment aborted due to SSH connectivity issues"
        echo "💡 Try again later or check server status"
        exit 1
    fi
else
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi
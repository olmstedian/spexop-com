#!/bin/bash

# SSL Setup Script for arguseyes.net
# This script sets up Let's Encrypt SSL certificates and configures nginx

set -e

echo "🔒 Setting up SSL certificates for arguseyes.net..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   print_error "This script must be run as root (use sudo)"
   exit 1
fi

# Update system packages
print_status "Updating system packages..."
apt update

# Install required packages
print_status "Installing required packages..."
apt install -y nginx certbot python3-certbot-nginx ufw

# Stop nginx temporarily
print_status "Stopping nginx temporarily..."
systemctl stop nginx

# Generate DH parameters if they don't exist
if [[ ! -f /etc/nginx/dhparam.pem ]]; then
    print_status "Generating DH parameters (this may take a while)..."
    openssl dhparam -out /etc/nginx/dhparam.pem 2048
fi

# Obtain SSL certificate from Let's Encrypt
print_status "Obtaining SSL certificate from Let's Encrypt..."
certbot certonly --standalone \
    --preferred-challenges http \
    --email admin@arguseyes.net \
    --agree-tos \
    --no-eff-email \
    -d arguseyes.net \
    -d www.arguseyes.net

# Check if certificate was obtained successfully
if [[ ! -f /etc/letsencrypt/live/arguseyes.net/fullchain.pem ]]; then
    print_error "Failed to obtain SSL certificate"
    exit 1
fi

# Copy nginx configuration
print_status "Copying nginx configuration..."
cp /var/www/spexop/nginx-arguseyes.conf /etc/nginx/sites-available/arguseyes.net

# Create symbolic link to enable site
print_status "Enabling site..."
ln -sf /etc/nginx/sites-available/arguseyes.net /etc/nginx/sites-enabled/

# Remove default nginx site if it exists
if [[ -f /etc/nginx/sites-enabled/default ]]; then
    print_status "Removing default nginx site..."
    rm /etc/nginx/sites-enabled/default
fi

# Test nginx configuration
print_status "Testing nginx configuration..."
nginx -t

if [[ $? -eq 0 ]]; then
    print_status "Nginx configuration is valid"
else
    print_error "Nginx configuration is invalid"
    exit 1
fi

# Start and enable nginx
print_status "Starting nginx..."
systemctl start nginx
systemctl enable nginx

# Set up firewall rules
print_status "Configuring firewall..."
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# Set up automatic certificate renewal
print_status "Setting up automatic certificate renewal..."
# Add cron job for certificate renewal
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -

# Test the renewal process
print_status "Testing certificate renewal..."
certbot renew --dry-run

print_status "✅ SSL setup complete!"
print_status "Your site should now be accessible at https://arguseyes.net"
print_status "Certificate will be automatically renewed every 90 days"

# Show SSL certificate info
print_status "SSL Certificate Information:"
certbot certificates

# Test the HTTPS connection
print_status "Testing HTTPS connection..."
curl -I https://arguseyes.net || print_warning "HTTPS test failed - check if your Next.js app is running on port 3001"

echo ""
print_status "🎉 Setup complete! Your site is now secured with SSL."
print_status "Remember to:"
print_status "1. Start your Next.js application on port 3001"
print_status "2. Ensure your domain DNS points to this server"
print_status "3. Check the nginx logs if you encounter issues: sudo tail -f /var/log/nginx/error.log"
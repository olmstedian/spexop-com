#!/bin/bash
# Quick SSL fix for arguseyes.net
# Run this on your server as root

# Install certbot if not installed
apt update && apt install -y certbot python3-certbot-nginx

# Get SSL certificate and configure nginx automatically
certbot --nginx -d arguseyes.net -d www.arguseyes.net --non-interactive --agree-tos --email admin@arguseyes.net

# Restart nginx
systemctl restart nginx

echo "SSL should now be working for arguseyes.net"
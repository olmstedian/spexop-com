#!/bin/bash

# Production deployment script for spexop.com VPS
# This will run Next.js as a server instead of static files

echo "🚀 Deploying Spexop.com with Next.js Server..."

# Build the application
echo "📦 Building application..."
pnpm run build

# Create production environment file
echo "🔧 Setting up production environment..."
cat > .env.production << EOF
# Gmail API Configuration
GOOGLE_CLIENT_ID=\${GOOGLE_CLIENT_ID}
GOOGLE_CLIENT_SECRET=\${GOOGLE_CLIENT_SECRET}
GOOGLE_REDIRECT_URI=https://developers.google.com/oauthplayground
GOOGLE_REFRESH_TOKEN=\${GOOGLE_REFRESH_TOKEN}
GMAIL_USER=ccakar@spexop.com
BUSINESS_EMAIL=ccakar@spexop.com
EOF

# Create systemd service for Next.js
echo "⚙️ Creating systemd service..."
sudo tee /etc/systemd/system/spexop.service > /dev/null << EOF
[Unit]
Description=Spexop Next.js Application
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/var/www/spexop
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/node server.js
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# Create server.js file
echo "🖥️ Creating server file..."
cat > server.js << EOF
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(\`> Ready on http://\${hostname}:\${port}\`)
  })
})
EOF

echo "📁 Copying files to server..."
echo "Run these commands on your VPS:"
echo ""
echo "# 1. Copy files to VPS"
echo "scp -r .next package.json pnpm-lock.yaml server.js .env.production root@69.62.120.67:/var/www/spexop/"
echo ""
echo "# 2. Install dependencies on VPS"
echo "ssh root@69.62.120.67 'cd /var/www/spexop && pnpm install --prod'"
echo ""
echo "# 3. Update nginx config"
echo "# 4. Start the service"
echo "ssh root@69.62.120.67 'systemctl enable spexop && systemctl start spexop'"
#!/usr/bin/env node

const { execSync } = require('child_process')
const { mkdirSync, existsSync } = require('fs')
const { join } = require('path')

const certsDir = join(__dirname, '..', 'certs')

console.log('🔐 Generating SSL certificates for HTTPS development...\n')

// Create certs directory if it doesn't exist
if (!existsSync(certsDir)) {
  mkdirSync(certsDir, { recursive: true })
  console.log('✅ Created certs directory')
}

try {
  // Generate private key
  console.log('🔑 Generating private key...')
  execSync(`openssl genrsa -out ${join(certsDir, 'server.key')} 2048`, { stdio: 'inherit' })
  
  // Generate certificate
  console.log('📜 Generating self-signed certificate...')
  const certCommand = `openssl req -new -x509 -key ${join(certsDir, 'server.key')} -out ${join(certsDir, 'server.crt')} -days 365 -subj "/C=US/ST=Development/L=Local/O=SpexOp/OU=Development/CN=localhost"`
  execSync(certCommand, { stdio: 'inherit' })
  
  console.log('\n✅ SSL certificates generated successfully!')
  console.log(`📁 Certificates saved to: ${certsDir}`)
  console.log('🔐 Private key: server.key')
  console.log('📜 Certificate: server.crt')
  console.log('\n🚀 You can now run the server with HTTPS support!')
  console.log('📝 Note: Your browser will show a security warning for self-signed certificates.')
  console.log('   Click "Advanced" and "Proceed to localhost" to access the site.')
  
} catch (error) {
  console.error('❌ Error generating certificates:', error.message)
  console.log('\n💡 Make sure OpenSSL is installed on your system:')
  console.log('   macOS: brew install openssl')
  console.log('   Ubuntu/Debian: sudo apt-get install openssl')
  console.log('   Windows: Download from https://slproweb.com/products/Win32OpenSSL.html')
  process.exit(1)
}
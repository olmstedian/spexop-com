const { createServer } = require('http')
const { createServer: createHttpsServer } = require('https')
const { readFileSync } = require('fs')
const { parse } = require('url')
const { join } = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3001
const httpsPort = process.env.HTTPS_PORT || 3443

// Initialize Next.js app
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

// Function to check if SSL certificates exist
function certificatesExist() {
  try {
    const keyPath = join(__dirname, 'certs', 'server.key')
    const certPath = join(__dirname, 'certs', 'server.crt')
    readFileSync(keyPath)
    readFileSync(certPath)
    return true
  } catch (err) {
    return false
  }
}

// Load SSL certificates if they exist
function loadSSLCertificates() {
  const keyPath = join(__dirname, 'certs', 'server.key')
  const certPath = join(__dirname, 'certs', 'server.crt')
  
  return {
    key: readFileSync(keyPath),
    cert: readFileSync(certPath)
  }
}

app.prepare().then(() => {
  const requestHandler = async (req, res) => {
    try {
      // Parse URL
      const parsedUrl = parse(req.url, true)
      
      // Handle the request with Next.js
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }

  // Start HTTP server
  createServer(requestHandler)
    .listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://${hostname}:${port}`)
    })

  // Start HTTPS server if certificates exist
  if (certificatesExist()) {
    const httpsOptions = loadSSLCertificates()
    createHttpsServer(httpsOptions, requestHandler)
      .listen(httpsPort, (err) => {
        if (err) throw err
        console.log(`> Ready on https://${hostname}:${httpsPort}`)
      })
  } else {
    console.log(`> HTTPS not available (no certificates found in ./certs/)`)
    console.log(`> Run 'npm run generate-certs' to create self-signed certificates for development`)
  }
})
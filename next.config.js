/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily disable static export for API routes to work in development
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages deployment
  // Note: This disables API routes for the static build
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

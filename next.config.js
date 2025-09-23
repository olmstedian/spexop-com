/** @type {import('next').NextConfig} */
const nextConfig = {
  // For server deployment with API routes
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable compression
  compress: true,
  // Generate standalone output for better performance
  output: 'export',
  // Optimize for production
  poweredByHeader: false,
  // Optimize chunk loading
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  // Optimize redirects
  async redirects() {
    return [
      // Add any necessary redirects here
    ]
  },
}

module.exports = nextConfig

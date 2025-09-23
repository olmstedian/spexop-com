import type { Metadata } from 'next'
import './globals.css'
import Analytics from '@/components/Analytics'
import StructuredData from '@/components/StructuredData'
import PreloadResources from '@/components/PreloadResources'

export const metadata: Metadata = {
  title: {
    default: 'Spexop - Smart, Scalable Software Built Fast',
    template: '%s | Spexop'
  },
  description: 'We design and develop modern web apps, mobile apps, and backend systems that help businesses scale faster. Expert software development services in Estonia with React, Next.js, and cloud technologies.',
  keywords: [
    'software development',
    'web app development',
    'mobile app development', 
    'backend development',
    'React development',
    'Next.js development',
    'custom software solutions',
    'MVP development',
    'Estonia software company',
    'business automation',
    'cloud development',
    'API development'
  ],
  authors: [{ name: 'Spexop', url: 'https://spexop.com' }],
  creator: 'Spexop',
  publisher: 'Spexop',
  metadataBase: new URL('https://spexop.com'),
  alternates: {
    canonical: 'https://spexop.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/icon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ]
  },
  openGraph: {
    title: 'Spexop - Smart, Scalable Software Built Fast',
    description: 'We design and develop modern web apps, mobile apps, and backend systems that help businesses scale faster. Expert software development services in Estonia.',
    url: 'https://spexop.com',
    siteName: 'Spexop',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image',
        width: 1200,
        height: 630,
        alt: 'Spexop - Software Development Company',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spexop - Smart, Scalable Software Built Fast',
    description: 'We design and develop modern web apps, mobile apps, and backend systems that help businesses scale faster.',
    images: ['/og-image'], // Same image as OG
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code
  },
  category: 'Software Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <PreloadResources />
      </head>
      <body className="antialiased">
        <StructuredData />
        <Analytics />
        {children}
      </body>
    </html>
  )
}

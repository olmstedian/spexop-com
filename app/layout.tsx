import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spexop - Smart, Scalable Software Built Fast',
  description: 'We design and develop modern apps, web platforms, and backends that help businesses move faster.',
  keywords: 'software development, web apps, mobile apps, backend development, Estonia, React, Next.js, NestJS',
  authors: [{ name: 'Spexop' }],
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
    description: 'We design and develop modern apps, web platforms, and backends that help businesses move faster.',
    url: 'https://spexop.com',
    siteName: 'Spexop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spexop - Smart, Scalable Software Built Fast',
    description: 'We design and develop modern apps, web platforms, and backends that help businesses move faster.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

import { Suspense } from 'react'

export default function PreloadResources() {
  return (
    <Suspense fallback={null}>
      {/* Only preconnect to external domains to avoid blocking rendering */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Only preload truly critical resources that are used immediately */}
      {/* Removed unnecessary preloads to prevent unused resource warnings */}
    </Suspense>
  )
}
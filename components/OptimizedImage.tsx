'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fallback?: string
  eager?: boolean
}

export default function OptimizedImage({ 
  src, 
  alt, 
  fallback, 
  eager = false,
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  // For above-the-fold images, use priority
  // For others, use lazy loading
  const shouldPrioritize = eager || props.priority

  if (hasError && fallback) {
    return (
      <Image
        {...props}
        src={fallback}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
      />
    )
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      priority={shouldPrioritize}
      loading={shouldPrioritize ? 'eager' : 'lazy'}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        ...props.style,
        opacity: isLoaded ? 1 : 0.8,
        transition: 'opacity 0.2s ease-in-out'
      }}
    />
  )
}
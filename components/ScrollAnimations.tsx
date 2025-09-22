'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn'
  delay?: number
  threshold?: number
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add('animate-in')
            }
          }, delay)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const animationClasses = {
    fadeInUp: 'opacity-0 translate-y-8 animate-in:opacity-100 animate-in:translate-y-0',
    fadeInLeft: 'opacity-0 -translate-x-8 animate-in:opacity-100 animate-in:translate-x-0',
    fadeInRight: 'opacity-0 translate-x-8 animate-in:opacity-100 animate-in:translate-x-0',
    fadeIn: 'opacity-0 animate-in:opacity-100',
    scaleIn: 'opacity-0 scale-95 animate-in:opacity-100 animate-in:scale-100'
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  )
}

// Hook for scroll-based animations
export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

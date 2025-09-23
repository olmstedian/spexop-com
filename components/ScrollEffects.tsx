'use client'

import { useEffect, useCallback, useRef } from 'react'

export default function ScrollEffects() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const animatedElementsRef = useRef<Set<Element>>(new Set())

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const element = entry.target
      
      if (entry.isIntersecting && !animatedElementsRef.current.has(element)) {
        // Add a small delay before animation for smoother effect
        requestAnimationFrame(() => {
          element.classList.add('animate-in')
          animatedElementsRef.current.add(element)
        })
      }
    })
  }, [])

  useEffect(() => {
    // Enhanced observer options for better performance and smoother animations
    const observerOptions: IntersectionObserverInit = {
      threshold: [0, 0.1, 0.2, 0.3],
      rootMargin: '0px 0px -10% 0px'
    }

    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions)

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    // Add scroll-triggered parallax effects
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateParallaxElements()
          updateScrollProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleIntersection])

  return null
}

// Enhanced scroll progress with smooth animations
export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateProgress = () => {
      if (!progressRef.current) return
      
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100)
      
      progressRef.current.style.transform = `scaleX(${scrollPercent / 100})`
    }

    const handleScroll = () => {
      requestAnimationFrame(updateProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50 overflow-hidden">
      <div 
        ref={progressRef}
        className="h-full w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 origin-left transform scale-x-0 transition-transform duration-75 ease-out"
      />
    </div>
  )
}

// Enhanced parallax with performance optimizations
export function ParallaxElement({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'vertical'
}: { 
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: 'vertical' | 'horizontal'
}) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset
          const rate = scrolled * -speed

          if (direction === 'vertical') {
            element.style.transform = `translateY(${rate}px)`
          } else {
            element.style.transform = `translateX(${rate}px)`
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])

  return (
    <div ref={elementRef} className={`parallax-element ${className}`}>
      {children}
    </div>
  )
}

// Utility functions for scroll effects
function updateParallaxElements() {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll('.parallax-bg')
  
  parallaxElements.forEach(element => {
    const rect = element.getBoundingClientRect()
    const speed = parseFloat(element.getAttribute('data-speed') || '0.5')
    
    // Only animate elements that are in or near the viewport
    if (rect.bottom >= -100 && rect.top <= window.innerHeight + 100) {
      const yPos = scrolled * speed
      ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
    }
  })
}

function updateScrollProgress() {
  const elements = document.querySelectorAll('.scroll-progress-trigger')
  elements.forEach(element => {
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const elementTop = rect.top
    const elementHeight = rect.height
    
    // Calculate visibility percentage
    const visibleTop = Math.max(0, windowHeight - elementTop)
    const visibleBottom = Math.min(elementHeight, visibleTop)
    const visibilityRatio = Math.max(0, Math.min(1, visibleBottom / elementHeight))
    
    // Apply dynamic styling based on scroll progress
    if (visibilityRatio > 0) {
      element.classList.add('in-view')
      element.setAttribute('data-scroll-progress', visibilityRatio.toString())
    } else {
      element.classList.remove('in-view')
    }
  })
}

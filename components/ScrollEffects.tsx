'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    // Add scroll-based animations using CSS classes
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}

// Scroll progress indicator
export function ScrollProgress() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      const progressBar = document.getElementById('scroll-progress')
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`
      }
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        id="scroll-progress"
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  )
}

// Parallax scroll effect
export function ParallaxElement({ children, speed = 0.5, className = '' }: { 
  children: React.ReactNode, 
  speed?: number, 
  className?: string 
}) {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax')
      
      parallaxElements.forEach(element => {
        const elementSpeed = parseFloat(element.getAttribute('data-speed') || '0.5')
        const yPos = -(scrolled * elementSpeed)
        element.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`parallax ${className}`} data-speed={speed}>
      {children}
    </div>
  )
}

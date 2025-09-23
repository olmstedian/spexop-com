'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight, Globe, Sparkles, Zap } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100 // Account for fixed header and scroll progress bar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 pt-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating orbs with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl animate-float"
          style={{ 
            animationDelay: '-3s',
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)` 
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"
          style={{ 
            animationDelay: '-1.5s',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` 
          }}
        />
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse-glow"
            style={{
              top: `${(i * 5) % 100}%`,
              left: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-6 py-3 mb-8 transform transition-all duration-1000 delay-100 ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/90">Crafting Digital Excellence</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Main heading */}
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-8 transform transition-all duration-1000 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <span className="block text-white mb-4">
              Transform Ideas Into
            </span>
            <span className="block gradient-text text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Digital Reality
            </span>
          </h1>

          {/* Subheading */}
          <p 
            className={`text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            We design and develop stunning websites and applications that captivate users, 
            drive engagement, and accelerate your business growth in the digital age.
          </p>

          {/* CTA buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transform transition-all duration-1000 delay-400 ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative btn-primary text-lg px-8 py-4 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="group glass hover:bg-white/20 text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 border border-white/20"
            >
              <span className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                Explore Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

        </div>

      </div>

      {/* Modern gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-5" />
    </section>
  )
}
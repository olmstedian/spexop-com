'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { Menu, X, ArrowUp, Sparkles, Code2, ChevronDown, Home, Briefcase, Palette, Settings, Users, Mail } from 'lucide-react'
import { event } from '@/lib/analytics'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const navItems = useMemo(() => [
    { name: 'Home', id: 'hero', icon: Home },
    { name: 'Services', id: 'services', icon: Briefcase },
    { name: 'Portfolio', id: 'portfolio', icon: Palette },
    { name: 'Process', id: 'process', icon: Settings },
    { name: 'About', id: 'about', icon: Users },
    { name: 'Contact', id: 'contact', icon: Mail }
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Update scroll states
      setScrolled(scrollPosition > 50)
      setShowScrollTop(scrollPosition > 500)
      
      // Calculate scroll progress
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100
      setScrollProgress(scrollPercentage)
      
      // Update active section
      const sections = navItems.map(item => item.id)
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (sectionId: string) => {
    // Track navigation clicks
    event('navigation_click', 'navigation', sectionId)
    
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
      setIsOpen(false)
    }
  }

  const scrollToTop = () => {
    event('scroll_to_top', 'navigation', 'scroll_top_button')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-slate-200/20">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className={`
        fixed top-0 left-0 right-0 z-[100] transition-all duration-500
        ${scrolled 
          ? 'pt-1 bg-white/98 dark:bg-slate-900/98 backdrop-blur-2xl shadow-2xl border-b border-slate-300/60 dark:border-slate-600/60' 
          : 'pt-1 bg-transparent'
        }
      `}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => scrollToSection('hero')}
                className="group relative hover:scale-105 transition-transform duration-300"
              >
                                <Image 
                  src="/logo-alt.svg" 
                  alt="Spexop Logo" 
                  width={144}
                  height={48}
                  className={`h-12 w-auto transition-all duration-300 ${
                    scrolled ? '' : 'brightness-0 invert'
                  }`}
                  style={{ width: 'auto', height: 'auto' }}
                />
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {/* Nav items with modern pills design */}
              <div className={`
                flex items-center gap-2 px-4 py-2 rounded-full
                ${scrolled ? 'bg-white/95 dark:bg-slate-800/95 border border-slate-200/60 shadow-sm' : 'bg-white/10'} 
                backdrop-blur-lg
              `}>
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        relative px-4 py-2 rounded-full font-medium text-sm
                        transition-all duration-300
                        ${activeSection === item.id 
                          ? scrolled
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                            : 'bg-white/20 text-white backdrop-blur-lg'
                          : scrolled 
                            ? 'text-slate-400 hover:text-slate-500 hover:bg-slate-200/90' 
                            : 'text-white/90 hover:text-white hover:bg-white/30'
                        }
                      `}
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        {item.name}
                      </span>
                      {activeSection === item.id && (
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-current rounded-full animate-ping" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* CTA Button */}
              <div className="ml-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`
                    relative group px-6 py-3 rounded-xl font-semibold text-sm
                    overflow-hidden transition-all duration-300
                    ${scrolled 
                      ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl' 
                      : 'glass text-white hover:bg-white/20'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Get Started
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                lg:hidden relative p-3 rounded-xl transition-all duration-300
                ${scrolled 
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-900' 
                  : 'glass text-white hover:bg-white/20'
                }
              `}
            >
              <div className="relative w-6 h-6">
                <span className={`
                  absolute inset-0 flex items-center justify-center transition-all duration-300
                  ${isOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}
                `}>
                  <Menu className="w-6 h-6" />
                </span>
                <span className={`
                  absolute inset-0 flex items-center justify-center transition-all duration-300
                  ${isOpen ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}
                `}>
                  <X className="w-6 h-6" />
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with modern slide animation */}
        <div className={`
          lg:hidden transition-all duration-500 overflow-hidden
          ${isOpen ? 'max-h-screen' : 'max-h-0'}
        `}>
          <div className={`
            ${scrolled ? 'bg-white/98 dark:bg-slate-900/98' : 'bg-slate-900/98'} 
            backdrop-blur-2xl border-t
            ${scrolled ? 'border-slate-300/60' : 'border-white/10'}
          `}>
            <div className="container-custom py-6">
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        w-full text-left px-6 py-3 rounded-xl font-medium
                        transition-all duration-300 transform
                        ${activeSection === item.id 
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg translate-x-2' 
                          : scrolled 
                            ? 'text-slate-400 hover:bg-slate-100 hover:translate-x-2' 
                            : 'text-white/90 hover:bg-white/20 hover:text-white hover:translate-x-2'
                        }
                      `}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        {item.name}
                        {activeSection === item.id && (
                          <div className="ml-auto">
                            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                          </div>
                        )}
                      </span>
                    </button>
                  )
                })}
                
                <div className="pt-4 mt-4 border-t border-slate-200/20">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full btn-primary py-3"
                  >
                    <Code2 className="w-5 h-5" />
                    Start Your Project
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-40 group
          w-14 h-14 rounded-2xl shadow-2xl
          bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600
          text-white overflow-hidden
          transition-all duration-500 transform
          ${showScrollTop 
            ? 'translate-y-0 opacity-100 hover:scale-110' 
            : 'translate-y-20 opacity-0 pointer-events-none'
          }
        `}
      >
        <span className="relative z-10 flex items-center justify-center h-full">
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      {/* Floating contact widget */}
      <div className={`
        fixed bottom-8 left-8 z-40
        transition-all duration-500 transform
        ${scrolled && showScrollTop
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0 pointer-events-none'
        }
      `}>
        <button 
          onClick={() => scrollToSection('contact')}
          className="group flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-slate-700">We're Online</span>
          <Sparkles className="w-4 h-4 text-yellow-500 group-hover:animate-spin-slow" />
        </button>
      </div>
    </>
  )
}
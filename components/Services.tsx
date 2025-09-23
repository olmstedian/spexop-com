'use client'

import React, { useState } from 'react'
import { Globe, Smartphone, Server, Zap, ArrowRight, CheckCircle, Code2, Shield, TrendingUp, Layers, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Apps',
    description: 'Modern, responsive business platforms accessible anywhere.',
    features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'Cloud Deployment'],
    gradient: 'from-indigo-600 via-blue-600 to-cyan-600',
    shadowColor: 'shadow-indigo-500/25',
    popular: false,
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'iOS & Android apps that bring your service into your customer\'s pocket.',
    features: ['Flutter Cross-Platform', 'Native iOS/Android', 'Push Notifications', 'Offline Support'],
    gradient: 'from-violet-600 via-purple-600 to-indigo-600',
    shadowColor: 'shadow-violet-500/25',
    popular: true,
  },
  {
    icon: Server,
    title: 'Backend Systems',
    description: 'Secure APIs & dashboards to streamline your operations.',
    features: ['REST & GraphQL APIs', 'Database Design', 'Authentication', 'Monitoring'],
    gradient: 'from-orange-600 via-amber-600 to-yellow-600',
    shadowColor: 'shadow-orange-500/25',
    popular: false,
  },
  {
    icon: Zap,
    title: 'MVP Development',
    description: 'Launch-ready prototypes so you can validate ideas without big costs.',
    features: ['Rapid Prototyping', 'User Testing', 'Iterative Design', 'Quick Launch'],
    gradient: 'from-pink-600 via-rose-600 to-red-600',
    shadowColor: 'shadow-pink-500/25',
    popular: false,
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Modern, responsive websites that convert visitors into customers with exceptional user experience.',
    features: ['Custom Design', 'Mobile-First', 'SEO Optimized', 'Fast Loading'],
    gradient: 'from-emerald-600 via-green-600 to-teal-600',
    shadowColor: 'shadow-emerald-500/25',
    popular: false,
  },
  {
    icon: Layers,
    title: 'Website with CMS',
    description: 'Content-managed websites with powerful authoring tools for easy content updates and management.',
    features: ['Headless CMS', 'Easy Editing', 'Multi-user', 'Version Control'],
    gradient: 'from-purple-600 via-pink-600 to-rose-600',
    shadowColor: 'shadow-purple-500/25',
    popular: false,
  }
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 100 // Account for fixed header
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
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Our Services
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-6">
            Solutions That
            <span className="block gradient-text mt-2">Drive Success</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From stunning websites to complex applications, we deliver cutting-edge digital solutions 
            tailored to your business needs
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                {/* Card */}
                <div className={`
                  relative h-full bg-white rounded-3xl p-8 
                  transition-all duration-500 transform
                  ${isHovered ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0'}
                  ${service.popular ? 'ring-2 ring-indigo-500 shadow-2xl' : 'shadow-lg hover:shadow-2xl'}
                  ${service.shadowColor}
                `}>
                  {/* Gradient overlay on hover */}
                  <div 
                    className={`
                      absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} 
                      opacity-0 group-hover:opacity-5 transition-opacity duration-500
                    `} 
                  />
                  
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className={`
                      inline-flex items-center justify-center w-16 h-16 rounded-2xl
                      bg-gradient-to-br ${service.gradient} shadow-lg
                      transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                    `}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6">
                      <Sparkles className={`w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'animate-spin-slow' : ''}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>


                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`
                          flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} 
                          flex items-center justify-center transform transition-all duration-300
                          ${isHovered ? 'scale-110' : 'scale-100'}
                        `}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <button 
                    onClick={scrollToContact}
                    className={`
                      w-full py-3 px-6 rounded-xl font-semibold
                      flex items-center justify-center gap-2
                      transition-all duration-300 group/btn
                      ${service.popular 
                        ? 'bg-gradient-to-r ' + service.gradient + ' text-white shadow-lg hover:shadow-xl' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                      }
                    `}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-20 text-center">
          <div className="card-modern max-w-4xl mx-auto p-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your unique requirements and create a tailored solution that perfectly fits your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="btn-primary px-8 py-4"
              >
                <Shield className="w-5 h-5" />
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('portfolio')
                  if (element) {
                    const offset = 100
                    const bodyRect = document.body.getBoundingClientRect().top
                    const elementRect = element.getBoundingClientRect().top
                    const elementPosition = elementRect - bodyRect
                    const offsetPosition = elementPosition - offset
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    })
                  }
                }}
                className="btn-secondary px-8 py-4"
              >
                <TrendingUp className="w-5 h-5" />
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
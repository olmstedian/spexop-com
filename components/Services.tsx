import React from 'react'
import { Globe, Smartphone, Server, Zap, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Modern, responsive websites that convert visitors into customers with exceptional user experience.',
    features: ['Custom Design', 'Mobile-First', 'SEO Optimized', 'Fast Loading'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    emoji: '🌐'
  },
  {
    icon: Server,
    title: 'Website with CMS',
    description: 'Content-managed websites with powerful authoring tools for easy content updates and management.',
    features: ['Headless CMS', 'Easy Editing', 'Multi-user', 'Version Control'],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    emoji: '📝'
  },
  {
    icon: Globe,
    title: 'Custom Web Apps',
    description: 'Scalable, responsive, and modern applications using React, Next.js, and Tailwind.',
    features: ['React & Next.js', 'Tailwind CSS', 'TypeScript', 'Performance'],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    emoji: '⚛️'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'iOS and Android apps for startups and businesses — built with speed and reliability.',
    features: ['Cross-Platform', 'Native Performance', 'Push Notifications', 'Offline Support'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    emoji: '📱'
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    description: 'Robust NestJS + PostgreSQL backends, optimized for performance and security.',
    features: ['NestJS Framework', 'PostgreSQL', 'REST & GraphQL', 'Cloud Ready'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    emoji: '🚀'
  },
  {
    icon: Zap,
    title: 'MVP & Prototype Builds',
    description: 'Turn your idea into a working demo in weeks, not months.',
    features: ['Rapid Development', 'User Testing', 'Iterative Design', 'Go-to-Market'],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
    emoji: '⚡'
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 section-padding">
      <div className="container-custom">
        <div className="scroll-animate text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" />
            Web Development Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              Digital Solutions
            </span> That Drive Results
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From stunning websites to complex web applications, we deliver cutting-edge solutions 
            that help your business thrive in the digital landscape
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                className={`scroll-animate scale-in delay-${(index + 1) * 100} group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden`}
              >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Service icon */}
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  
                  {/* Service emoji */}
                  <div className="absolute top-6 right-6 text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    {service.emoji}
                  </div>
                  
                  {/* Service content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Learn more button */}
                    <div className="pt-4 border-t border-gray-100">
                      <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
            )
          })}
        </div>
        
        {/* Call to action section */}
        <div className="scroll-animate delay-200 text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a roadmap to bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Get Started Today
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                View Our Work
              </a>
            </div>
          </div>
      </div>
    </section>
  )
}
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
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on any device.',
    features: ['iOS & Android', 'React Native', 'App Store Ready', 'Push Notifications'],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    emoji: '📱'
  },
  {
    icon: Zap,
    title: 'Custom Web Apps',
    description: 'Scalable web applications with advanced functionality, perfect for SaaS products and enterprise solutions.',
    features: ['React & Next.js', 'Real-time Data', 'User Auth', 'API Integration'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    emoji: '⚡'
  },
  {
    icon: Globe,
    title: 'Backend & API Development',
    description: 'Robust server-side solutions and APIs that power your applications with security and performance.',
    features: ['Node.js & NestJS', 'Database Design', 'API Security', 'Cloud Deploy'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    emoji: '🔧'
  },
  {
    icon: CheckCircle,
    title: 'MVP & Prototype Development',
    description: 'Transform your ideas into working prototypes quickly to validate concepts and secure funding.',
    features: ['Rapid Development', 'Core Features', 'User Testing', 'Investor Ready'],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
    emoji: '🚀'
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-br from-gray-50 to-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-20">
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
                className="group relative bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 card-hover"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800">
                          {service.title}
                        </h3>
                        <span className="text-2xl">{service.emoji}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Features list */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 ${service.iconColor}`} />
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Call to action */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-500 text-sm">Starting from consultation</span>
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
        <div className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              <span className="text-xl">💬</span>
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#portfolio" 
              className="bg-primary-500 hover:bg-primary-400 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              <span className="text-xl">👀</span>
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

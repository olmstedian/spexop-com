import React from 'react'
import { ExternalLink, Github, Star, Users, Calendar, TrendingUp, Code2, Database, Smartphone } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce website with advanced shopping features, payment integration, and inventory management for growing businesses.',
    fullDescription: 'Full-featured online store with Stripe payments, real-time inventory, order tracking, and customer analytics dashboard.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Prisma'],
    category: 'E-Commerce Website',
    demoUrl: '#',
    githubUrl: '#',
    status: 'Live',
    stats: {
      users: '15k+',
      rating: '4.9',
      completion: '100%'
    },
    features: ['Stripe Payments', 'Inventory Management', 'Order Tracking', 'Analytics Dashboard'],
    gradient: 'from-emerald-600 via-green-700 to-teal-700',
    icon: Database,
    emoji: '🛒'
  },
  {
    title: 'Corporate Website',
    description: 'A professional corporate website with CMS integration, multi-language support, and advanced SEO optimization.',
    fullDescription: 'Enterprise-level website with headless CMS, dynamic content management, and exceptional performance scores.',
    tech: ['React', 'Next.js', 'Contentful CMS', 'GraphQL', 'TypeScript', 'Tailwind'],
    category: 'Corporate Website',
    demoUrl: '#',
    githubUrl: '#',
    status: 'Live',
    stats: {
      users: '50k+',
      rating: '4.8',
      completion: '100%'
    },
    features: ['Headless CMS', 'Multi-language', 'SEO Optimized', 'Fast Loading'],
    gradient: 'from-blue-600 via-indigo-700 to-purple-700',
    icon: Code2,
    emoji: '🏢'
  },
  {
    title: 'SaaS Web Application',
    description: 'A comprehensive SaaS platform with user authentication, subscription billing, and real-time collaboration features.',
    fullDescription: 'Full-stack SaaS solution with tenant isolation, advanced analytics, and scalable architecture for thousands of users.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'WebSocket'],
    category: 'SaaS Platform',
    demoUrl: '#',
    githubUrl: '#',
    status: 'Live',
    stats: {
      users: '8k+',
      rating: '4.7',
      completion: '100%'
    },
    features: ['User Authentication', 'Subscription Billing', 'Real-time Sync', 'Team Collaboration'],
    gradient: 'from-violet-600 via-purple-700 to-pink-700',
    icon: TrendingUp,
    emoji: '⚡'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gradient-to-br from-slate-50 via-white to-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-blue-100 text-primary-700 text-sm font-semibold mb-6">
            🎨 Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            <span className="gradient-text">Featured</span> Projects
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing our expertise through innovative solutions and cutting-edge technology implementations
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isEven = index % 2 === 0
            
            return (
              <div 
                key={index}
                className={`group grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Project Image/Visual */}
                <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    {/* Background with gradient */}
                    <div className={`h-80 lg:h-96 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                      {/* Animated background elements */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl floating-animation"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl floating-animation" style={{animationDelay: '-2s'}}></div>
                      </div>
                      
                      {/* Main icon */}
                      <div className="relative z-10 text-center text-white">
                        <div className="text-8xl mb-4">{project.emoji}</div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium">
                          <Icon className="w-5 h-5" />
                          {project.status}
                        </div>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex gap-4">
                            <a 
                              href={project.demoUrl}
                              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-2"
                            >
                              <ExternalLink className="w-5 h-5" />
                              View Demo
                            </a>
                            <a 
                              href={project.githubUrl}
                              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-2"
                            >
                              <Github className="w-5 h-5" />
                              Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                      <Calendar className="w-4 h-4" />
                      {project.category}
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-2">
                      {project.description}
                    </p>
                    
                    <p className="text-gray-500 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>
                  
                  {/* Project Stats */}
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-yellow-500 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-semibold text-gray-900">{project.stats.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-blue-500 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="font-semibold text-gray-900">{project.stats.users}</span>
                      </div>
                      <div className="text-xs text-gray-500">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-500 mb-1">
                        <span className="font-semibold text-gray-900">{project.stats.completion}</span>
                      </div>
                      <div className="text-xs text-gray-500">Complete</div>
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg font-medium transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <a 
                      href={project.demoUrl}
                      className="btn-primary px-6 py-3"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="btn-secondary px-6 py-3"
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Impressed by Our Work?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing for your business. Every project starts with a conversation.
          </p>
          <a 
            href="#contact" 
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            <span className="text-xl">🚀</span>
            Start Your Project
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

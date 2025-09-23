'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, TrendingUp, ArrowUpRight, Sparkles, Award } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Argus Eyes',
    subtitle: 'Signal Intelligence Systems Website',
    description: 'Professional corporate website for advanced signal intelligence systems designed for government and defense entities.',
    fullDescription: 'Built a secure, high-performance website showcasing Argus Eyes\' specialized signal intelligence solutions including real-time threat detection, secure command consoles, and modular architecture for various operational environments.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'Nginx'],
    category: 'Intelligence Systems',
    demoUrl: 'https://arguseyes.net',
    githubUrl: 'https://github.com/olmstedian/argus-eyes-website',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'Live',
    stats: {
      loadTime: '0.8s',
      security: 'Military-grade',
      compliance: 'Regulatory',
      uptime: '99.9%'
    },
    features: ['Responsive Design', 'Service Portfolio', 'Contact Form', 'Blog Section', 'Docker Deployment'],
    gradient: 'from-slate-600 to-gray-800',
    accentColor: 'slate',
    featured: true,
    client: 'Argus Eyes',
    year: '2024'
  },
  {
    id: 2,
    title: 'NGC 315 Defence Technologies',
    subtitle: 'Defense Technology Solutions Website',
    description: 'Professional website for cutting-edge defense technologies and military defense systems serving government and defense clients.',
    fullDescription: 'Developed a comprehensive corporate website for NGC 315 Defence Technologies, showcasing their innovative defense solutions, specialized services from drone propeller repair to cyber security systems, and their commitment to protecting critical assets and countering emerging threats.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Web Applications',
    demoUrl: 'https://ngc315.com/en',
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    status: 'Live',
    stats: {
      loadTime: '1.2s',
      security: 'Defense-grade',
      innovation: 'Next-gen',
      reliability: 'Proven'
    },
    features: ['Fields of Activity', 'Service Portfolio', 'About Us', 'Contact Integration', 'Multi-language Support'],
    gradient: 'from-blue-600 to-indigo-800',
    accentColor: 'blue',
    featured: false,
    client: 'NGC 315 Defence Technologies',
    year: '2024'
  },
  {
    id: 3,
    title: 'MDS 16 Defence & Space',
    subtitle: 'Military Defence & Space Solutions',
    description: 'Advanced defense technologies website for integrated solutions in military defense systems and space technologies.',
    fullDescription: 'Built a professional corporate website for MDS 16 Military Defence & Space, featuring their comprehensive defense solutions, specialized services from aircraft engine maintenance to cyber security systems, and their commitment to maintaining global peace through advanced defense technologies.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Web Applications',
    demoUrl: 'https://mds16.com/en',
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    status: 'Live',
    stats: {
      loadTime: '1.1s',
      security: 'Military-grade',
      innovation: 'Advanced',
      reliability: 'Trusted'
    },
    features: ['Fields of Activity', 'Service Portfolio', 'About Us', 'Contact Integration', 'Multi-language Support'],
    gradient: 'from-emerald-600 to-teal-800',
    accentColor: 'emerald',
    featured: false,
    client: 'MDS 16 Military Defence & Space',
    year: '2024'
  },
  {
    id: 4,
    title: 'Argus Eyes Dashboard V3',
    subtitle: 'Enterprise SIGINT Platform',
    description: 'Comprehensive real-time Signal Intelligence platform for advanced signal analysis, target tracking, and intelligence operations designed for enterprise security organizations.',
    fullDescription: 'Developed an enterprise-grade SIGINT platform providing real-time signal intelligence, automated correlation, geographic intelligence, and advanced case management capabilities. Built with modern enterprise architecture patterns, it offers sophisticated analysis of mobile device signals, target tracking, and complex intelligence workflows at scale with 100K+ daily signal processing capability.',
    tech: ['TypeScript', 'JavaScript', 'PLpgSQL', 'Shell', 'CSS', 'Python'],
    category: 'Intelligence Systems',
    demoUrl: '#',
    githubUrl: 'https://github.com/olmstedian/AE-Dashboard-V3',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'Confidential',
    stats: {
      signals: '100K+/day',
      latency: '<5s',
      security: 'Enterprise-grade',
      scalability: 'High-availability'
    },
    features: ['Real-time SIGINT', 'Geographic Intelligence', 'Target Tracking', 'Case Management', 'Advanced Analytics', 'Multi-platform Support'],
    gradient: 'from-purple-600 to-indigo-800',
    accentColor: 'purple',
    featured: true,
    client: 'Confidential',
    year: '2025'
  },
  {
    id: 5,
    title: 'AEDSS',
    subtitle: 'Advanced Electronic Device Surveillance System',
    description: 'Production-ready surveillance system with real-time triangulation simulation, MSSQL to PostgreSQL data synchronization, and comprehensive monitoring dashboard.',
    fullDescription: 'Built a complete full-stack surveillance system featuring real-time triangulation simulation with 4 simulated interceptors and 5 moving targets, MSSQL to PostgreSQL data synchronization with 180k+ records, and a professional React dashboard for electronic device surveillance and tracking. Includes TCP bridge architecture for device communication and real-time monitoring capabilities.',
    tech: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'MSSQL', 'Knex.js'],
    category: 'Surveillance Platforms',
    demoUrl: '#',
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2125&q=80',
    status: 'Production Ready',
    stats: {
      scans: '86+',
      syncInterval: '15s',
      health: '92/100',
      targets: '5 Active'
    },
    features: ['Triangulation Simulation', 'Real-time Sync', 'Professional Dashboard', 'TCP Bridge', 'Performance Monitoring', 'Multi-database Support'],
    gradient: 'from-orange-600 to-red-700',
    accentColor: 'orange',
    featured: false,
    client: 'Confidential',
    year: '2024'
  },
  {
    id: 6,
    title: 'AE-TCP-Listener',
    subtitle: 'High-Performance TCP Frame Ingestion Service',
    description: 'Lightweight Node.js service that listens for TCP frames and stores them in multiple databases with comprehensive observability and real-time VPS synchronization.',
    fullDescription: 'Developed a high-performance TCP frame ingestion service designed for device telemetry data. Accepts raw text frames over TCP, parses them according to single-line format specifications, and stores data in multiple database sinks (PostgreSQL, MS Access, Remote VPS PostgreSQL) with at-least-once guarantees. Features comprehensive observability with structured logging, Prometheus metrics, health monitoring, and real-time VPS synchronization.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'MS Access', 'MSSQL', 'Prometheus'],
    category: 'Data Processing',
    demoUrl: '#',
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'Production Ready',
    stats: {
      throughput: '1000+/sec',
      latency: '<100ms',
      uptime: '99.9%',
      databases: '4 Integrated'
    },
    features: ['TCP Frame Ingestion', 'Multi-Database Sync', 'Real-time VPS Sync', 'Comprehensive Observability', 'Jet 12 Engine Support', 'Health Monitoring'],
    gradient: 'from-teal-600 to-cyan-700',
    accentColor: 'teal',
    featured: false,
    client: 'Confidential',
    year: '2024'
  }
]

const categories = ['All', 'Intelligence Systems', 'Surveillance Platforms', 'Data Processing', 'Web Applications']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const scrollToContact = () => {
    const element = document.getElementById('contact')
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


  const viewProject = (projectUrl: string) => {
    if (projectUrl && projectUrl !== '#') {
      window.open(projectUrl, '_blank', 'noopener,noreferrer')
    } else {
      alert('Project demo coming soon!')
    }
  }

  const viewGitHub = (githubUrl: string) => {
    if (githubUrl && githubUrl !== '#') {
      window.open(githubUrl, '_blank', 'noopener,noreferrer')
    } else {
      alert('GitHub repository coming soon!')
    }
  }


  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Portfolio Showcase
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-6">
            Our Latest
            <span className="block gradient-text mt-2">Masterpieces</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Explore our portfolio of innovative digital solutions that have transformed businesses 
            and delighted users worldwide
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-50 shadow-md hover:shadow-lg hover:scale-105'
                  }
                `}
              >
                {category}
                {category === 'All' && (
                  <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {projects.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid with masonry layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative ${project.featured ? 'md:row-span-2' : ''}`}
            >
              <div className={`
                relative overflow-hidden rounded-3xl bg-white shadow-xl 
                hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2
                ${project.featured ? 'h-full' : ''}
              `}>
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Status badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className={`
                    flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold shadow-lg
                    ${project.status === 'Live' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-white'
                    }
                  `}>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    {project.status}
                  </div>
                </div>

                {/* Project image/preview */}
                <div className={`
                  relative overflow-hidden 
                  ${project.featured ? 'h-80' : 'h-64'}
                `}>
                  <Image 
                    src={project.imageUrl} 
                    alt={`${project.title} website screenshot`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Hover overlay with quick actions */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                    flex items-end justify-center pb-8
                    opacity-0 group-hover:opacity-100 transition-all duration-500
                  `}>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => viewProject(project.demoUrl)}
                        className="px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Live Site
                      </button>
                      <button className="p-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white/30 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project details */}
                <div className={`p-8 ${project.featured ? 'space-y-6' : 'space-y-4'}`}>
                  {/* Title and category */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`
                        px-2 py-1 rounded-lg text-xs font-semibold
                        bg-${project.accentColor}-100 text-${project.accentColor}-700
                      `}>
                        {project.category}
                      </span>
                      <span className="text-slate-400 text-xs">•</span>
                      <span className="text-slate-500 text-xs">
                        {project.tech.length} Technologies
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {project.featured ? project.fullDescription : project.description}
                  </p>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(project.stats).slice(0, project.featured ? 4 : 2).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-slate-50 rounded-xl">
                        <div className="text-lg font-bold text-slate-900">{value}</div>
                        <div className="text-xs text-slate-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, project.featured ? 6 : 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 text-xs rounded-lg font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > (project.featured ? 6 : 4) && (
                      <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs rounded-lg">
                        +{project.tech.length - (project.featured ? 6 : 4)} more
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <button 
                      onClick={() => viewProject(project.demoUrl)}
                      className={`
                        flex-1 py-3 px-4 rounded-xl font-semibold text-sm
                        bg-gradient-to-r ${project.gradient} text-white
                        hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2
                      `}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </button>
                    <button 
                      onClick={() => viewGitHub(project.githubUrl)}
                      className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="card-modern max-w-4xl mx-auto p-12 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join our growing list of successful projects. Let's turn your vision into a digital masterpiece.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Start Your Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import React from 'react'
import { ArrowRight, Code2, Globe, Monitor, Layers } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white section-padding min-h-screen flex items-center overflow-hidden">
      {/* Code-inspired background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating code elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '-3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '-1.5s'}}></div>
      </div>
      
      {/* Code editor inspired grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }}></div>
      </div>

      {/* Floating code snippets */}
      <div className="absolute top-32 right-20 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-emerald-500/30 floating-animation hidden lg:block">
        <div className="text-emerald-400 text-xs font-mono">
          <div className="text-blue-400">const</div>
          <div className="ml-2 text-white">website = {`{`}</div>
          <div className="ml-4 text-emerald-400">modern: true,</div>
          <div className="ml-4 text-emerald-400">responsive: true</div>
          <div className="ml-2 text-white">{`}`}</div>
        </div>
      </div>

      <div className="absolute bottom-40 left-20 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30 floating-animation hidden lg:block" style={{animationDelay: '-2s'}}>
        <div className="text-blue-400 text-xs font-mono">
          <div className="text-violet-400">{'<div'} className=</div>
          <div className="ml-2 text-emerald-300">"perfect-website"</div>
          <div className="text-violet-400">{'>'}</div>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="text-left">
            {/* Professional badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-sm font-semibold mb-8 fade-in-up">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-100">Expert Web Development</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight fade-in-up-delay-1">
              Crafting Digital
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Experiences
              </span>
              That Convert
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl fade-in-up-delay-2">
              We build high-performance websites and web applications that not only look stunning 
              but drive real business results. From concept to launch, we handle it all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 fade-in-up-delay-2">
              <a 
                href="#contact" 
                className="btn-primary text-lg px-8 py-4 group"
              >
                <Globe className="w-5 h-5 mr-2" />
                Start Your Website
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#portfolio" 
                className="btn-secondary text-lg px-8 py-4 group border-2 border-white/20 hover:border-emerald-400/40"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-3 fade-in-up-delay-2">
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10">
                React & Next.js
              </div>
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10">
                TypeScript
              </div>
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10">
                Tailwind CSS
              </div>
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10">
                Node.js
              </div>
            </div>
          </div>
          
          {/* Right side - Browser mockup */}
          <div className="relative fade-in-up-delay-1">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 flex-1 bg-white/5 rounded-lg px-4 py-2 text-sm text-gray-400">
                  https://your-amazing-website.com
                </div>
              </div>
              
              {/* Browser content */}
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="h-4 bg-gradient-to-r from-white/20 to-transparent rounded w-32 mb-2"></div>
                      <div className="h-3 bg-gradient-to-r from-white/10 to-transparent rounded w-24"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg mb-3"></div>
                      <div className="h-3 bg-white/10 rounded w-20 mb-2"></div>
                      <div className="h-2 bg-white/5 rounded w-16"></div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg mb-3"></div>
                      <div className="h-3 bg-white/10 rounded w-20 mb-2"></div>
                      <div className="h-2 bg-white/5 rounded w-16"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl h-12 flex items-center justify-center">
                    <div className="text-white font-semibold text-sm">Get Started Today</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl shadow-2xl flex items-center justify-center floating-animation">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-blue-400 to-violet-400 rounded-2xl shadow-2xl flex items-center justify-center floating-animation" style={{animationDelay: '-1s'}}>
              <Code2 className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
        
        {/* Modern scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-12 border-2 border-emerald-400/50 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
            <div className="w-2 h-4 bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

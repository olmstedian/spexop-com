import React from 'react'
import { ArrowRight, Sparkles, Rocket, Target } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white section-padding min-h-screen flex items-center overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '-3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '-1.5s'}}></div>
      </div>
      
      {/* Modern grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Modern badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-8 fade-in-up">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Premium Software Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight fade-in-up-delay-1">
            Build The Future With{' '}
            <span className="gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Smart Software
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto fade-in-up-delay-2">
            We create exceptional digital experiences through cutting-edge web applications, 
            mobile solutions, and enterprise software that drives real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in-up-delay-2">
            <a 
              href="#contact" 
              className="btn-primary text-lg px-10 py-5 group relative overflow-hidden"
            >
              <Rocket className="w-6 h-6 mr-2 group-hover:translate-y-[-2px] transition-transform duration-300" />
              Start Your Project
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a 
              href="#portfolio" 
              className="btn-secondary text-lg px-10 py-5 group border-2 border-white/20 hover:border-white/40"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          
          {/* Modern stats/features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto fade-in-up-delay-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">Precision</div>
              <div className="text-gray-400 text-sm">Tailored solutions that hit the mark</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">Speed</div>
              <div className="text-gray-400 text-sm">Rapid development without compromise</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">Innovation</div>
              <div className="text-gray-400 text-sm">Cutting-edge tech and creative solutions</div>
            </div>
          </div>
        </div>
        
        {/* Modern scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
            <div className="w-2 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

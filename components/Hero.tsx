import { ArrowRight, Code, Zap, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white section-padding min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '-3s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '-1.5s'}}></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.02"><circle cx="30" cy="30" r="1"/></g></g></svg>')] opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating icons */}
          <div className="hidden lg:block absolute -top-12 -left-16 p-3 glass-effect rounded-2xl floating-animation">
            <Code className="w-8 h-8 text-primary-400" />
          </div>
          <div className="hidden lg:block absolute -top-8 -right-20 p-3 glass-effect rounded-2xl floating-animation" style={{animationDelay: '-2s'}}>
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="hidden lg:block absolute top-1/2 -left-24 p-3 glass-effect rounded-2xl floating-animation" style={{animationDelay: '-4s'}}>
            <Globe className="w-8 h-8 text-green-400" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm font-medium mb-6 fade-in-up">
            🇪🇪 <span>Made in Estonia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-shadow-lg fade-in-up-delay-1">
            Smart, Scalable Software —{' '}
            <span className="gradient-text">Built Fast.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto text-shadow fade-in-up-delay-2">
            We design and develop modern apps, web platforms, and backends that help businesses move faster. 
            <span className="block mt-2 text-lg text-primary-300">From concept to deployment in record time.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 fade-in-up-delay-2">
            <a 
              href="#contact" 
              className="btn-primary text-lg px-10 py-5 group"
            >
              <span className="text-2xl mr-2">🚀</span>
              Let&apos;s Work Together
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a 
              href="#portfolio" 
              className="btn-secondary text-lg px-10 py-5 group"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          
          {/* Stats or features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto fade-in-up-delay-2">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">⚡</div>
              <div className="text-lg font-semibold">Fast Delivery</div>
              <div className="text-gray-400 text-sm">Weeks, not months</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">🎯</div>
              <div className="text-lg font-semibold">Modern Tech</div>
              <div className="text-gray-400 text-sm">Latest frameworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">📈</div>
              <div className="text-lg font-semibold">Scalable</div>
              <div className="text-gray-400 text-sm">Grows with you</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-12 border-2 border-primary-400/50 rounded-full flex justify-center glass-effect">
            <div className="w-2 h-4 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

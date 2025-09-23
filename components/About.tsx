import React from 'react'
import { Users, Zap } from 'lucide-react'


export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate fade-in-up text-center mb-16">
            <div className="scroll-animate scale-in delay-100 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-100 to-blue-100 text-gray-700 text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              About Our Team
            </div>
            <h2 className="scroll-animate fade-in-up delay-200 text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">Spexop</span>
            </h2>
            <p className="scroll-animate fade-in-up delay-300 text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re specialized developers who deliver enterprise-grade solutions across all industries, from simple websites to complex intelligence systems.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Content */}
            <div className="scroll-animate fade-in-left space-y-8">
              <div className="scroll-animate fade-in-up delay-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Specialized Expertise Across Industries
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Spexop delivers enterprise-grade solutions</strong> across all industries, from e-commerce platforms to specialized intelligence systems. We combine deep technical expertise with industry-specific knowledge to deliver solutions that meet your unique requirements.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our approach focuses on <strong>scalable architecture, security-first design, and performance optimization</strong> to create robust solutions that handle high data volumes, ensure data protection, and deliver exceptional user experiences.
                </p>
              </div>

              {/* Key differentiators */}
              <div className="scroll-animate scale-in delay-200 grid grid-cols-2 gap-6">
                <div className="scroll-animate scale-in delay-300 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">🏗️</div>
                  <h4 className="font-bold text-gray-900 mb-2">Enterprise Architecture</h4>
                  <p className="text-gray-600 text-sm">Scalable solutions built for high performance</p>
                </div>
                <div className="scroll-animate scale-in delay-400 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">🔒</div>
                  <h4 className="font-bold text-gray-900 mb-2">Security-First</h4>
                  <p className="text-gray-600 text-sm">Enterprise-grade security and compliance</p>
                </div>
                <div className="scroll-animate scale-in delay-500 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-bold text-gray-900 mb-2">High Performance</h4>
                  <p className="text-gray-600 text-sm">Optimized for speed and reliability</p>
                </div>
                <div className="scroll-animate scale-in delay-600 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">🌐</div>
                  <h4 className="font-bold text-gray-900 mb-2">Multi-Industry</h4>
                  <p className="text-gray-600 text-sm">Expertise across all business sectors</p>
                </div>
              </div>
              
          </div>
            
            {/* Visual Element - Team/Technology showcase */}
            <div className="scroll-animate fade-in-right delay-200 relative">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl shadow-2xl p-8 overflow-hidden relative">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                    backgroundImage: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className="scroll-animate scale-in delay-400 text-center text-white mb-8">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold mb-2">Enterprise Tech Stack</h3>
                    <p className="text-blue-200">Proven technologies for scalable solutions</p>
                  </div>

                  {/* Tech stack visualization */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="scroll-animate scale-in delay-500 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl mb-2">⚛️</div>
                      <div className="text-white font-semibold text-sm">React & Next.js</div>
                    </div>
                    <div className="scroll-animate scale-in delay-600 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl mb-2">💎</div>
                      <div className="text-white font-semibold text-sm">TypeScript</div>
                    </div>
                    <div className="scroll-animate scale-in delay-700 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl mb-2">🐍</div>
                      <div className="text-white font-semibold text-sm">Django & Python</div>
                    </div>
                    <div className="scroll-animate scale-in delay-800 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl mb-2">🔧</div>
                      <div className="text-white font-semibold text-sm">Node.js & NestJS</div>
                    </div>
                    <div className="scroll-animate scale-in delay-900 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl mb-2">📱</div>
                      <div className="text-white font-semibold text-sm">Flutter</div>
                    </div>
                    <div className="scroll-animate scale-in delay-1000 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl mb-2">🍎</div>
                      <div className="text-white font-semibold text-sm">Xcode & Swift</div>
                    </div>
                    <div className="scroll-animate scale-in delay-1100 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl mb-2">🗄️</div>
                      <div className="text-white font-semibold text-sm">PostgreSQL</div>
                    </div>
                    <div className="scroll-animate scale-in delay-1200 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-white font-semibold text-sm">Express.js</div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl shadow-lg flex items-center justify-center text-2xl rotate-12 floating-animation">
                  💻
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl shadow-lg flex items-center justify-center text-lg -rotate-12 floating-animation" style={{animationDelay: '-1s'}}>
                  ✨
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Build Your Next Solution?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you build scalable, secure, and high-performance solutions for your business needs.
            </p>
            <a 
              href="#contact" 
              className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Your Project Today
              <Zap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

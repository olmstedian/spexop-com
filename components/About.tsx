import React from 'react'
import { MapPin, Users, Zap } from 'lucide-react'


export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-50 to-white section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-100 to-blue-100 text-gray-700 text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              About Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">Spexop</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re not just developers – we&apos;re digital strategists who understand business goals and user needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expertise That Delivers Results
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Spexop is a specialized web development studio</strong> with years of experience crafting high-performance websites and applications. We combine technical excellence with creative problem-solving to deliver solutions that exceed expectations.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our approach blends <strong>modern development practices with proven business strategies</strong> to create digital experiences that not only look great but drive measurable results for your business.
                </p>
              </div>

              {/* Key differentiators */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-bold text-gray-900 mb-2">Fast Delivery</h4>
                  <p className="text-gray-600 text-sm">Projects completed in weeks, not months</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-bold text-gray-900 mb-2">Goal-Focused</h4>
                  <p className="text-gray-600 text-sm">Every feature serves your business objectives</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h4 className="font-bold text-gray-900 mb-2">Future-Proof</h4>
                  <p className="text-gray-600 text-sm">Built with scalability and maintenance in mind</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">🤝</div>
                  <h4 className="font-bold text-gray-900 mb-2">Partnership</h4>
                  <p className="text-gray-600 text-sm">We work as an extension of your team</p>
                </div>
              </div>
              
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-600 mb-2">5+</div>
                <div className="text-gray-600 text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-600 mb-2">98%</div>
                <div className="text-gray-600 text-sm font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm font-medium">Support Available</div>
              </div>
            </div>
          </div>
            
            {/* Visual Element - Team/Technology showcase */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl shadow-2xl p-8 overflow-hidden relative">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                    backgroundImage: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className="text-center text-white mb-8">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold mb-2">Modern Tech Stack</h3>
                    <p className="text-blue-200">Cutting-edge tools & frameworks</p>
                  </div>

                  {/* Tech stack visualization */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl mb-2">⚛️</div>
                      <div className="text-white font-semibold text-sm">React & Next.js</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl mb-2">💎</div>
                      <div className="text-white font-semibold text-sm">TypeScript</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl mb-2">🎨</div>
                      <div className="text-white font-semibold text-sm">Tailwind CSS</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl mb-2">🗄️</div>
                      <div className="text-white font-semibold text-sm">PostgreSQL</div>
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
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your business goals through exceptional web development.
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

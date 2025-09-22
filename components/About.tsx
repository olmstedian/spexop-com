import React from 'react'
import { MapPin, Users, Zap } from 'lucide-react'

const highlights = [
  {
    icon: MapPin,
    text: 'Global reach'
  },
  {
    icon: Users,
    text: 'Expert team'
  },
  {
    icon: Zap,
    text: 'Fast delivery'
  }
]

export default function About() {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Spexop
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Spexop is a modern software development studio</strong> focused on delivering exceptional digital solutions. We specialize in creating practical, scalable applications for businesses of all sizes.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our approach combines <strong>cutting-edge technology with strategic thinking</strong> to build software that drives real business results. We believe in transparent communication and collaborative partnerships.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              From startups to established companies, we help organizations transform their ideas into powerful digital experiences that engage users and accelerate growth.
            </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon
                  return (
                    <div key={index} className="text-center p-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{highlight.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">💡</div>
                  <p className="text-xl font-semibold">Innovation Driven</p>
                  <p className="text-blue-200">Quality & Excellence</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl shadow-lg flex items-center justify-center text-2xl rotate-12">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl shadow-lg flex items-center justify-center text-xl -rotate-12">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

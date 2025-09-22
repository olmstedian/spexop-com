import React from 'react'
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and technical requirements through detailed consultation.",
    details: ["Requirements analysis", "User research", "Technical planning", "Timeline & budget"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Lightbulb,
    title: "Design & Planning", 
    description: "Our design team creates wireframes, prototypes, and visual designs that align with your brand and user experience goals.",
    details: ["UI/UX design", "Wireframing", "Prototyping", "Design system"],
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: Code,
    title: "Development",
    description: "We build your website using modern technologies and best practices, ensuring performance, security, and scalability.",
    details: ["Frontend development", "Backend architecture", "Database design", "API integration"],
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: CheckCircle,
    title: "Testing & QA",
    description: "Comprehensive testing across devices and browsers ensures your website works flawlessly for all users.",
    details: ["Cross-browser testing", "Mobile responsiveness", "Performance optimization", "Security audits"],
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We handle the deployment and provide ongoing support to keep your website running smoothly and up-to-date.",
    details: ["Deployment setup", "Performance monitoring", "Regular updates", "Ongoing support"],
    color: "from-rose-500 to-orange-600"
  }
]

export default function Process() {
  return (
    <section id="process" className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
            <Rocket className="w-4 h-4 text-orange-400" />
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            From Concept to{' '}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Launch
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our proven 5-step process ensures your project is delivered on time, within budget, 
            and exceeds expectations every step of the way.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} space-y-6`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-black text-white/20">
                        0{index + 1}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
                          <span className="text-gray-400 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} relative`}>
                    <div className={`aspect-square bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden`}>
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="h-full w-full" style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                          backgroundSize: '30px 30px'
                        }}></div>
                      </div>
                      
                      <div className="relative z-10 text-center text-white">
                        <Icon className="w-20 h-20 mb-4 mx-auto" />
                        <div className="text-2xl font-bold">Step {index + 1}</div>
                      </div>

                      {/* Floating decorations */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-xl rotate-12 floating-animation"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/20 rounded-lg -rotate-12 floating-animation" style={{animationDelay: '-1s'}}></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a roadmap to bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="btn-primary text-lg px-8 py-4"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
              <a 
                href="#portfolio" 
                className="btn-secondary text-lg px-8 py-4 border-2 border-white/20 hover:border-white/40"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

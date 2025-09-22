import { Globe, Smartphone, Server, Zap } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Custom Web Apps',
    description: 'Scalable, responsive, and modern applications using React, Next.js, and Tailwind.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'iOS and Android apps for startups and businesses — built with speed and reliability.'
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    description: 'Robust NestJS + PostgreSQL backends, optimized for performance and security.'
  },
  {
    icon: Zap,
    title: 'MVP & Prototype Builds',
    description: 'Turn your idea into a working demo in weeks, not months.'
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive software development services to help your business thrive
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

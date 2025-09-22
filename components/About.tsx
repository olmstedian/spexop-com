import { MapPin, Users, Zap } from 'lucide-react'

const highlights = [
  {
    icon: MapPin,
    text: 'Estonian-based studio'
  },
  {
    icon: Users,
    text: 'Startups & SMEs focus'
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
                <strong>Spexop is an independent Estonian-based software development studio.</strong> We focus on practical, modern, and reliable solutions for startups and SMEs.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our approach is simple: <strong>clear communication, fast delivery, and long-term scalability.</strong> We believe in building useful tools that solve real problems.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Founded by an engineer with a passion for building useful tools that solve real problems, we combine technical expertise with business understanding to deliver solutions that actually work.
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
              <div className="aspect-square bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">🇪🇪</div>
                  <p className="text-xl font-semibold">Made in Estonia</p>
                  <p className="text-primary-200">Quality & Innovation</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl shadow-lg flex items-center justify-center text-2xl rotate-12">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-2xl shadow-lg flex items-center justify-center text-xl -rotate-12">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup Inc",
    company: "TechStartup Inc",
    content: "Spexop delivered an exceptional website that exceeded our expectations. The attention to detail and technical expertise was outstanding.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Michael Chen",
    role: "Founder, Digital Agency",
    company: "Digital Agency",
    content: "Working with Spexop was a game-changer. They built us a scalable web application that handles thousands of users effortlessly.",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "E-commerce Plus",
    content: "The team's expertise in modern web technologies and user experience design helped us increase conversions by 150%.",
    rating: 5,
    avatar: "👩‍🎨"
  }
]

const companies = [
  "TechFlow", "WebCorp", "DigitalFirst", "StartupHub", "InnovateLab", "CodeCraft"
]

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white section-padding">
      <div className="container-custom">
        {/* Client logos */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm font-semibold mb-8 tracking-wide uppercase">
            Trusted by forward-thinking companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-current" />
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Our <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business leaders say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Star, Quote, CheckCircle } from 'lucide-react'

const testimonials = [
  {
    name: "Security Director",
    role: "Director of Operations",
    company: "Argus Eyes",
    project: "Argus Eyes Dashboard V3",
    content: "The Argus Eyes Dashboard V3 SIGINT platform delivered exceeded all expectations. The real-time processing capabilities and advanced analytics have significantly enhanced our operational effectiveness. The system handles 100K+ signals daily with exceptional reliability.",
    rating: 5,
    avatar: "SD",
    highlight: "100K+ signals processed daily",
    bgColor: "from-slate-600 to-gray-800"
  },
  {
    name: "Technical Lead",
    role: "Senior Systems Engineer",
    company: "Argus Eyes",
    project: "AEDSS",
    content: "The AEDSS surveillance system integration was flawless. The triangulation simulation and real-time monitoring capabilities provide unprecedented operational insights. The team's expertise in handling sensitive data while maintaining security standards was outstanding.",
    rating: 5,
    avatar: "TL",
    highlight: "Zero security incidents",
    bgColor: "from-orange-600 to-red-700"
  },
  {
    name: "Operations Manager",
    role: "Head of Technical Operations",
    company: "Argus Eyes",
    project: "AE-TCP-Listener",
    content: "The AE-TCP-Listener data processing infrastructure has revolutionized our workflow. The multi-database synchronization and comprehensive observability features ensure we never miss critical information. The system's performance under high load is exceptional.",
    rating: 5,
    avatar: "OM",
    highlight: "99.9% uptime achieved",
    bgColor: "from-teal-600 to-cyan-700"
  }
]

const companies = [
  { name: "Argus Eyes", logo: "AE" },
  { name: "NGC 315 Defense Technologies", logo: "NGC" },
  { name: "MDS 16 Defense & Space", logo: "MDS" },
  { name: "Intelligence Services", logo: "IS" },
  { name: "Defense Solutions", logo: "DS" },
  { name: "Security Systems", logo: "SS" }
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
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-bold bg-gradient-to-br from-slate-600 to-slate-800 bg-clip-text text-transparent">
                    {company.logo}
                  </span>
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {company.name}
                </span>
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
              Trusted by security and intelligence professionals worldwide. Here's what industry leaders say about our specialized solutions.
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

                {/* Highlight metric */}
                {testimonial.highlight && (
                  <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-700">
                      {testimonial.highlight}
                    </span>
                  </div>
                )}

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</div>
                    {testimonial.project && (
                      <div className="text-blue-600 text-xs font-medium mt-1">
                        Project: {testimonial.project}
                      </div>
                    )}
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

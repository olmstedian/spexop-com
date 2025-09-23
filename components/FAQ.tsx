'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "What industries and types of projects do you work with?",
    answer: "We work across all industries including e-commerce, healthcare, finance, education, government, defense, and more. Our projects range from simple business websites to complex enterprise applications, data processing systems, surveillance platforms, and specialized intelligence solutions. We adapt our approach to meet each client's unique requirements."
  },
  {
    question: "What technologies and frameworks do you use?",
    answer: "We use modern, enterprise-grade technologies including React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, Redis, and various cloud platforms. Our tech stack is chosen based on project requirements, scalability needs, and industry best practices. We stay current with the latest technologies while ensuring proven reliability."
  },
  {
    question: "How do you ensure security and data protection?",
    answer: "Security is fundamental to all our projects. We implement industry-standard security measures including authentication, authorization, data encryption, secure APIs, and compliance with relevant regulations (GDPR, HIPAA, SOC 2, etc.). For sensitive projects, we follow enhanced security protocols and confidentiality agreements."
  },
  {
    question: "What is your experience with high-performance applications?",
    answer: "We have extensive experience building scalable applications that handle high data volumes and concurrent users. Our solutions include real-time data processing, advanced caching strategies, database optimization, and comprehensive monitoring. We've built systems processing 100K+ operations daily with sub-5-second response times."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support packages tailored to your needs. This includes regular updates, security monitoring, performance optimization, bug fixes, feature enhancements, and technical support. We provide both basic maintenance and enterprise-level support with SLA guarantees."
  },
  {
    question: "Can you work with existing systems and integrate new solutions?",
    answer: "Absolutely. We specialize in integrating with existing infrastructure including databases, APIs, third-party services, and legacy systems. Our solutions are designed for seamless integration while maintaining data integrity and system stability. We can work with various platforms and technologies."
  },
  {
    question: "What is your development process and timeline?",
    answer: "Our development process includes requirements analysis, architecture design, iterative development, testing, and deployment. Timelines vary based on project complexity: simple websites (2-4 weeks), complex web applications (8-16 weeks), enterprise systems (3-6 months). We provide detailed project plans and regular updates throughout development."
  },
  {
    question: "Do you offer specialized solutions for sensitive industries?",
    answer: "Yes, we have extensive experience with sensitive projects including government, defense, healthcare, and financial applications. We follow strict confidentiality protocols, implement enhanced security measures, and comply with industry-specific regulations. Our team is experienced in handling classified and confidential information."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Got <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are answers to the most common questions about our development services, from simple websites to complex enterprise applications across all industries.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(index)
              
              return (
                <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 flex items-center justify-between group"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-all duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We'd love to help!
            </p>
            <a 
              href="#contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

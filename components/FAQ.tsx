import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Project timelines vary based on complexity. A simple business website typically takes 2-4 weeks, while complex web applications can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "What's included in your web development service?",
    answer: "Our service includes custom design, responsive development, content management system, SEO optimization, performance optimization, security setup, testing across devices, and 30 days of post-launch support."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer various maintenance packages including regular updates, security monitoring, performance optimization, content updates, and technical support. We can discuss the best option for your needs."
  },
  {
    question: "Can you help with existing website redesign?",
    answer: "Absolutely! We specialize in redesigning existing websites to improve performance, user experience, and modern design standards. We can work with your current content and enhance your online presence."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern technologies including React, Next.js, TypeScript, Node.js, PostgreSQL, and cloud hosting platforms. We choose the best tech stack based on your specific requirements and goals."
  },
  {
    question: "How much does a website cost?",
    answer: "Costs vary based on project scope and requirements. Simple websites start from $5,000, while complex web applications can range from $15,000+. We provide detailed quotes after understanding your specific needs."
  },
  {
    question: "Do you provide hosting and domain services?",
    answer: "We can help you choose the best hosting solution and set it up, though we typically recommend clients own their hosting accounts. We'll guide you through the process and ensure optimal performance."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes, all our websites are built with a mobile-first approach and are fully responsive across all devices. We test thoroughly on various screen sizes and browsers to ensure perfect functionality."
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
              Here are answers to the most common questions about our web development process and services.
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

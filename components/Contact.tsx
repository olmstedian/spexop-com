'use client'

import React, { useState } from 'react'
import { Mail, Github, Linkedin, Send, MessageCircle, Phone, MapPin, Clock, CheckCircle2, User, AtSign } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', projectType: '', budget: '', message: '' })
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const projectTypes = [
    'Business Website',
    'E-commerce Store',
    'Web Application',
    'Website Redesign',
    'CMS Website',
    'Landing Page',
    'Portfolio Site',
    'Other'
  ]

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    'Over $50,000',
    'Let&apos;s discuss'
  ]

  return (
    <section id="contact" className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 section-padding">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-blue-100 text-primary-700 text-sm font-semibold mb-6">
              💬 Let's Talk
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Have a <span className="gradient-text">Project</span> in Mind?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s turn your vision into reality. We&apos;re here to help you build something amazing.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
                {!isSubmitted ? (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Start Your Project
                        </h3>
                        <p className="text-gray-600">Tell us about your vision</p>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email Address *
                          </label>
                          <div className="relative">
                            <AtSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="Your Company"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700">
                            Project Type *
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-700">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                          Project Description *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        />
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="text-blue-600 mt-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-blue-800 text-sm font-medium">We typically respond within 24 hours</p>
                          <p className="text-blue-700 text-sm mt-1">Your information is secure and will never be shared with third parties.</p>
                        </div>
                      </div>

                      {/* Error message */}
                      {error && (
                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                          <div className="text-red-600 mt-1">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-2-9a1 1 0 000 2v4a1 1 0 102 0V7a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-red-800 text-sm font-medium">Error sending message</p>
                            <p className="text-red-700 text-sm mt-1">{error}</p>
                          </div>
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full btn-primary text-lg py-5 justify-center group relative ${
                          isLoading ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                            Send Message
                          </>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-600 text-lg mb-4">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <p className="text-gray-500 text-sm">
                      You should receive a confirmation email shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Enhanced Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Let's Connect
                </h3>
                <p className="text-primary-100 text-lg leading-relaxed mb-8">
                  Ready to bring your ideas to life? We&apos;re excited to hear about your project and discuss how we can help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Response Time</p>
                      <p className="text-primary-100">Within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-primary-100">Remote & Global</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Consultation</p>
                      <p className="text-primary-100">Free initial call</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-6">Connect With Us</h4>
                <div className="space-y-4">
                  <a 
                    href="mailto:contact@spexop.com" 
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600 text-sm">contact@spexop.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">LinkedIn</p>
                      <p className="text-gray-600 text-sm">Professional network</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">GitHub</p>
                      <p className="text-gray-600 text-sm">Open source work</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

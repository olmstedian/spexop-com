import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary-400">Spexop</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Smart, scalable software built fast. We help businesses move faster with modern apps and reliable backends.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:contact@spexop.com"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Web Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Backend Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">MVP & Prototypes</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Spexop. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with passion ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}

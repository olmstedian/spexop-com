import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Spexop Subscriptions',
    description: 'A SaaS module for tracking business software subscriptions. Built with React + NestJS.',
    tech: ['React', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
    image: '/api/placeholder/600/400',
    demoUrl: '#',
    githubUrl: '#',
    status: 'Demo'
  },
  {
    title: 'TaskFlow',
    description: 'A lightweight task management app. Simple, intuitive, and fast.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'SQLite'],
    image: '/api/placeholder/600/400',
    demoUrl: '#',
    githubUrl: '#',
    status: 'Demo'
  },
  {
    title: 'Business Dashboard Demo',
    description: 'A clean admin dashboard with analytics and reporting.',
    tech: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
    image: '/api/placeholder/600/400',
    demoUrl: '#',
    githubUrl: '#',
    status: 'Demo'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recent projects and demos showcasing our capabilities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🚀</div>
                  <div className="text-sm font-medium">{project.status}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3">
                  <a 
                    href={project.demoUrl}
                    className="flex-1 btn-primary justify-center text-sm py-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="btn-secondary text-sm py-2 px-4"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

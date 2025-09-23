# Spexop.com - My Developer Portfolio

> Smart, Scalable Software — Built Fast.

Welcome to my company website! I'm Cüneyt Çakar, director of Spexop. I built this modern, responsive site to showcase what I do best - creating efficient, scalable software solutions. The site itself is built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 What I've Built Here

- **Clean Design**: I focused on a professional look with smooth animations that don't get in the way
- **Mobile-First**: Works perfectly on any device - I test everything thoroughly
- **Lightning Fast**: Using Next.js because I believe speed matters for user experience
- **SEO Ready**: Proper meta tags and semantic HTML - I want people to find my work
- **Accessible**: Following WCAG guidelines because good software works for everyone

## 📋 What You'll Find Here

### 🎯 Hero Section

The first thing visitors see - my elevator pitch with a clear call-to-action and a subtle scroll indicator to guide them through my work.

### 🛠 Services I Offer

I specialize in mission-critical systems and enterprise solutions:
  - **Intelligence Systems**: Signal intelligence platforms, surveillance systems, and defense technologies
  - **Enterprise Web Applications**: Professional corporate websites and secure platforms for government/defense
  - **Data Processing & Synchronization**: High-performance TCP services, multi-database sync, and real-time monitoring
  - **Backend & Infrastructure**: Node.js/NestJS backends, PostgreSQL databases, and scalable system architecture
  - **Consulting & Strategy**: Technical consulting, system architecture design, and project planning
  - **Custom Solutions**: Tailored software to meet unique business needs
  - **MVP Development**: Rapid prototyping to validate ideas quickly
  - **Maintenance & Support**: Ongoing support to keep systems running smoothly
  - **Training & Workshops**: Empowering teams with the skills they need
  - **Security & Compliance**: Ensuring systems meet industry standards and regulations
  - **Cloud Integration**: Leveraging cloud services for scalability and reliability
  - **DevOps & CI/CD**: Streamlining development and deployment processes
  - **UI/UX Design**: Creating intuitive and engaging user experiences
  - **API Development**: Building robust and scalable APIs for seamless integration
  - **Performance Optimization**: Enhancing system performance for better user experience
  - **Legacy System Modernization**: Updating and improving existing systems for better performance and maintainability
  - **Project Management**: Overseeing projects to ensure timely and successful delivery
  - **Quality Assurance**: Rigorous testing to ensure software reliability and performance
  - **Research & Development**: Exploring new technologies and methodologies to stay ahead of the curve
  - **Collaboration & Partnerships**: Working with other experts to deliver comprehensive solutions
  - **Documentation & Training Materials**: Providing clear and comprehensive documentation for users and developers
  - **Open Source Contributions**: Giving back to the community through open source projects

### 🎨 My Work

Six projects that showcase my expertise in defense, intelligence, and enterprise systems:
  - **Argus Eyes**: Signal Intelligence Systems website for government and defense entities (Live: arguseyes.net)
  - **NGC 315 Defence Technologies**: Professional defense technology solutions website (Live: ngc315.com)
  - **MDS 16 Defence & Space**: Military defense and space technologies platform (Live: mds16.com)
  - **Argus Eyes Dashboard V3**: Enterprise SIGINT platform with real-time signal analysis and target tracking
  - **AEDSS**: Advanced Electronic Device Surveillance System with triangulation simulation and multi-database sync
  - **AE-TCP-Listener**: High-performance TCP frame ingestion service with real-time VPS synchronization

### ℹ️ About Me

Where I share my story, what drives me as a developer, and why I believe in fast delivery, clear communication, and building for the future.

### 📞 Get In Touch

A working contact form (yes, it actually sends emails!) plus all my contact details and social links.

## 🚀 My Tech Stack

Here's what I chose and why:

- **Framework**: Next.js 14 with App Router (the future of React development)
- **Language**: TypeScript (because I like catching errors before they become problems)
- **Styling**: Tailwind CSS (rapid development without sacrificing design quality)
- **Icons**: Lucide React (clean, consistent, and lightweight)
- **Fonts**: Inter from Google Fonts (readable and professional)
- **Package Manager**: pnpm (faster than npm, more reliable than yarn)

## 🛠 Running This Locally

Want to see how it works? Here's how to get it running:

### What You'll Need

- Node.js 18 or newer
- pnpm (I recommend it, but npm works too)

### Get It Running

```bash
# Grab the code
git clone <repository-url>
cd spexop-com

# Install everything
pnpm install

# Fire it up
pnpm dev
```

### Commands I Use

```bash
pnpm dev       # Development server (http://localhost:3000)
pnpm build     # Production build
pnpm start     # Run production build locally
pnpm lint      # Check code quality
```

Visit [http://localhost:3000](http://localhost:3000) and you'll see it live!

## 📁 How I Organized Everything

I kept the structure clean and logical:

``` text
spexop-com/
├── app/
│   ├── globals.css          # My global styles and Tailwind imports
│   ├── layout.tsx           # Main layout with SEO metadata
│   └── page.tsx             # The home page that brings it all together
├── components/
│   ├── Hero.tsx             # The attention-grabbing top section
│   ├── Services.tsx         # What I offer
│   ├── Portfolio.tsx        # Examples of my work
│   ├── About.tsx            # My story and approach
│   ├── Contact.tsx          # Working contact form
│   └── Footer.tsx           # Simple, clean footer
├── public/                  # Logos, icons, and images
├── package.json
├── tailwind.config.js       # My Tailwind customizations
├── tsconfig.json           # TypeScript setup
└── README.md               # You're reading it!
```

## 🎨 My Design Choices

I kept the design clean and professional:

### Colors

- **Primary**: Blue palette (I think it conveys trust and professionalism)
- **Background**: Clean whites and light grays
- **Text**: Dark grays for great readability

### Typography

- **Font**: Inter from Google Fonts (clean and readable across all devices)
- **Headings**: Bold weights for impact
- **Body**: Regular weight for easy reading

### UI Elements

- **Buttons**: Simple primary and secondary styles that actually look clickable
- **Cards**: Subtle rounded corners with hover effects that provide feedback
- **Forms**: Clean inputs with proper focus states (form UX matters!)

## 🚀 Going Live

I built this to be deployment-ready:

```bash
pnpm build
```

### Where I'd Host This

- **Vercel**: My top choice - connect the repo and it deploys automatically
- **Netlify**: Also great - drag and drop the build folder
- **GitHub Pages**: Simple and free for static sites
- **Your Own Server**: Just serve the build folder with any web server

## 📝 Making It Your Own

Want to customize this for your own portfolio? Here's what to change:

### Content Updates

- **Services**: Edit what you offer in `components/Services.tsx`
- **Portfolio**: Swap in your projects in `components/Portfolio.tsx`
- **About**: Tell your story in `components/About.tsx`
- **Contact**: Update your details in `components/Contact.tsx` and `components/Footer.tsx`

### Adding Your Projects

1. Open `components/Portfolio.tsx`
2. Update the `projects` array with your work
3. Add project screenshots to the `public/` folder
4. Include tech stacks, descriptions, and live links

## 🔧 Design Customization

### Want Different Colors?

Update the primary colors in `tailwind.config.js` under `extend.colors.primary`.

### Different Font?

Change the font imports in `app/globals.css` and update the font family in `tailwind.config.js`.

### Layout Changes?

Each component handles its own spacing and layout - modify them directly.

## 📈 Performance Notes

I care about performance, so I built this with speed in mind:

- **Lighthouse Scores**: Consistently 90+ across all categories
- **Core Web Vitals**: Optimized for real-world usage
- **Images**: Next.js handles optimization automatically
- **Code Splitting**: Only load what's needed, when it's needed

## 🐛 What's Still On My Todo List

- The contact form works great, but I'm planning to add some advanced features
- Portfolio project links are currently demos - will update with live projects
- Need to add my actual social media profiles

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About Me

**Cüneyt Çakar**  
Director, Spexop  

I built this with ❤️ because I believe great software should be fast, accessible, and beautiful. If you like what you see, let's work together!

---

## 🔄 What I've Built So Far

- [x] Solid foundation with Next.js + TypeScript + Tailwind
- [x] Hero section that grabs attention
- [x] Services showcase highlighting what I do best
- [x] Portfolio with three representative projects
- [x] About section telling my story
- [x] Working contact form with email integration
- [x] Clean, professional footer
- [x] Fully responsive design that works everywhere
- [x] SEO optimization for discoverability
- [ ] Adding more portfolio projects as I complete them
- [ ] Setting up proper analytics
- [ ] Performance monitoring and optimization
- [ ] Maybe a blog section for sharing insights

# Spexop.com - Company Website

> Smart, Scalable Software — Built Fast.

A modern, responsive company website for Spexop, an Estonian-based software development studio. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first approach, works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels

## 📋 Sections

### 🎯 Hero Section
- Compelling headline and sub-headline
- Call-to-action button with smooth scroll
- Animated scroll indicator

### 🛠 Services Section
- 4 service offerings with icons:
  - Custom Web Apps (React, Next.js, Tailwind)
  - Mobile Apps (iOS & Android)
  - Backend & API Development (NestJS + PostgreSQL)
  - MVP & Prototype Builds

### 🎨 Portfolio Section
- 3 demo projects showcasing capabilities:
  - **Spexop Subscriptions**: SaaS subscription tracker
  - **TaskFlow**: Lightweight task management
  - **Business Dashboard**: Analytics and reporting dashboard

### ℹ️ About Section
- Company background and philosophy
- Estonian origin highlight
- Key differentiators (fast delivery, clear communication, scalability)

### 📞 Contact Section
- Interactive contact form
- Direct contact information
- Social media links (Email, LinkedIn, GitHub)

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Package Manager**: pnpm

## 🛠 Development

### Prerequisites
- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd spexop-com

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

### Development Server
Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
spexop-com/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services section
│   ├── Portfolio.tsx        # Portfolio/showcase section
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact form & info
│   └── Footer.tsx           # Site footer
├── public/                  # Static assets
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Blue palette (50-900)
- **Background**: White and gray-50
- **Text**: Gray-900, gray-700, gray-600

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, various sizes
- **Body**: Regular weight

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Rounded with hover effects
- **Forms**: Modern inputs with focus states

## 🚀 Deployment

### Static Export
The site is configured for static export:

```bash
pnpm build
```

### Hosting Options
- **GitHub Pages**: Push to `gh-pages` branch
- **Vercel**: Connect repository for automatic deployments
- **Netlify**: Drag and drop the `out/` folder
- **Custom Server**: Serve the `out/` folder

## 📝 Content Management

### Updating Content
- **Services**: Edit `components/Services.tsx`
- **Portfolio**: Edit `components/Portfolio.tsx`
- **About**: Edit `components/About.tsx`
- **Contact**: Update email and social links in `components/Contact.tsx` and `components/Footer.tsx`

### Adding New Projects
1. Add project data to the `projects` array in `components/Portfolio.tsx`
2. Include: title, description, tech stack, and links
3. Update project images in the `public/` folder

## 🔧 Customization

### Brand Colors
Update colors in `tailwind.config.js` under the `extend.colors.primary` section.

### Fonts
Change fonts in `app/globals.css` and `tailwind.config.js`.

### Layout
Modify spacing and layout in the respective component files.

## 📈 Performance

- **Lighthouse Score**: 90+ across all categories
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic with Next.js

## 🐛 Known Issues

- Contact form needs backend integration for email sending
- Portfolio project links are placeholders
- Social media links need to be updated with actual profiles

## 📄 License

This project is private and proprietary to Spexop.

## 👨‍💻 Author

Built with ❤️ by Spexop team

---

## 🔄 Development Progress

- [x] Project setup with Next.js + TypeScript + Tailwind
- [x] Hero section with compelling messaging
- [x] Services section with 4 key offerings
- [x] Portfolio section with 3 demo projects
- [x] About section with company story
- [x] Contact section with form and info
- [x] Footer with social links
- [x] Responsive design implementation
- [x] SEO optimization
- [ ] Contact form backend integration
- [ ] Portfolio project deployments
- [ ] Social media profile setup
- [ ] Domain setup and SSL
- [ ] Analytics integration
- [ ] Performance optimization review

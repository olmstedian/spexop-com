# Deployment Guide

This document outlines the deployment process for the Spexop.com website.

## 🏗 Build Process

The website is configured for static export, making it compatible with various hosting platforms.

### Build Command
```bash
pnpm build
```

This generates a static site in the `out/` directory.

## 🚀 Hosting Options

### 1. GitHub Pages (Recommended)

**Setup:**
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions
4. Use the following workflow:

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v2
        id: deployment
```

### 2. Vercel

**Setup:**
1. Import repository to Vercel
2. Framework preset: Next.js
3. Build command: `pnpm build`
4. Output directory: `out`
5. Install command: `pnpm install`

**Vercel Configuration:**
Create `vercel.json`:
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "out",
  "installCommand": "pnpm install",
  "framework": "nextjs"
}
```

### 3. Netlify

**Option A: Drag & Drop**
1. Run `pnpm build` locally
2. Drag `out/` folder to Netlify

**Option B: Git Integration**
1. Connect repository to Netlify
2. Build command: `pnpm build`
3. Publish directory: `out`
4. Base directory: (leave empty)

Create `netlify.toml`:
```toml
[build]
  command = "pnpm build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"
```

### 4. Custom Server

Upload the `out/` folder contents to your web server root directory.

## 🌐 Domain Setup

### Custom Domain Configuration
1. **DNS Setup**: Point your domain to hosting provider
   - GitHub Pages: Create CNAME record pointing to `username.github.io`
   - Vercel: Add domain in project settings
   - Netlify: Add domain in site settings

2. **SSL Certificate**: Most platforms provide automatic SSL

### Domain Examples
- **Development**: `localhost:3000`
- **Staging**: `spexop-staging.netlify.app`
- **Production**: `spexop.com`

## 📊 Analytics Setup

### Google Analytics
1. Create GA4 property
2. Add tracking code to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// Add to layout
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
  `}
</Script>
```

### Plausible Analytics (Privacy-friendly alternative)
```tsx
<Script
  defer
  data-domain="spexop.com"
  src="https://plausible.io/js/script.js"
/>
```

## 📧 Contact Form Backend

### Option 1: Netlify Forms
Add to contact form in `components/Contact.tsx`:
```tsx
<form onSubmit={handleSubmit} data-netlify="true" name="contact">
  <input type="hidden" name="form-name" value="contact" />
  {/* existing form fields */}
</form>
```

### Option 2: Formspree
1. Sign up at formspree.io
2. Update form action:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Custom API
Deploy a simple API endpoint (Vercel Functions, Netlify Functions, or separate backend).

## 🔒 Security Headers

### Netlify
Create `_headers` file in `public/`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### Vercel
Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 📈 Performance Optimization

### Before Deployment
- [ ] Run Lighthouse audit
- [ ] Optimize images
- [ ] Minify CSS/JS (handled by Next.js)
- [ ] Enable compression
- [ ] Set up CDN if needed

### Post-Deployment
- [ ] Test all sections and links
- [ ] Verify contact form submission
- [ ] Check mobile responsiveness
- [ ] Test page load speeds
- [ ] Verify SEO meta tags

## 🔍 SEO Checklist

- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Meta descriptions added
- [ ] Open Graph tags set
- [ ] Schema.org markup (optional)
- [ ] Google Search Console setup

## 🐛 Troubleshooting

### Common Issues

**Build Fails:**
- Check Node.js version (18+)
- Verify pnpm lockfile integrity
- Review TypeScript errors

**Images Not Loading:**
- Ensure images are in `public/` directory
- Check image paths (absolute vs relative)

**CSS Not Applied:**
- Verify Tailwind build process
- Check for CSS conflicts

**404 Errors:**
- Verify routing configuration
- Check static export settings

## 📝 Deployment Checklist

### Pre-Deployment
- [ ] Code review completed
- [ ] All tests passing
- [ ] Build process successful
- [ ] Performance optimized
- [ ] SEO tags verified

### Deployment
- [ ] Environment variables set
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics installed
- [ ] Contact form functional

### Post-Deployment
- [ ] All pages loading correctly
- [ ] Forms working properly
- [ ] Analytics tracking
- [ ] Performance metrics good
- [ ] SEO verification completed

---

## 📞 Support

For deployment issues or questions, refer to:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Platform-specific guides](hosting provider documentation)

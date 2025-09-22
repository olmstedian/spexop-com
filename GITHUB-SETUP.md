# GitHub Repository Setup Guide

This guide will help you set up a public GitHub repository for the Spexop.com website and configure automated deployments.

## 📋 Prerequisites

- GitHub account
- Git installed locally
- Project files ready (completed above)

---

## 🚀 Step-by-Step Setup

### 1. Create GitHub Repository

#### Option A: Using GitHub Web Interface
1. Go to [GitHub.com](https://github.com)
2. Click "New repository" (+ icon in top right)
3. Fill in repository details:
   - **Repository name**: `spexop-com`
   - **Description**: `Official website for Spexop - Estonian software development studio`
   - **Visibility**: ✅ Public
   - **Initialize**: ❌ Don't add README, .gitignore, or license (we already have these)
4. Click "Create repository"

#### Option B: Using GitHub CLI (if installed)
```bash
gh repo create spexop-com --public --description "Official website for Spexop - Estonian software development studio"
```

### 2. Connect Local Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Complete Spexop.com website

- Next.js 14 with TypeScript and Tailwind CSS
- Responsive design with modern UI/UX
- Hero, Services, Portfolio, About, and Contact sections
- SEO optimized with proper meta tags
- Ready for static export and deployment"

# Add remote origin (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/spexop-com.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Repository Settings Configuration

#### Branch Protection (Recommended)
1. Go to repository → Settings → Branches
2. Click "Add rule"
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging

#### Pages Setup
1. Go to repository → Settings → Pages
2. Source: "GitHub Actions"
3. This will allow the deployment workflow to publish the site

### 4. Automated Deployment Setup

Create GitHub Actions workflow for automatic deployment:

```bash
mkdir -p .github/workflows
```

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Spexop.com to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'pnpm'
          
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
        
      - name: Build website
        run: pnpm build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Commit and push the workflow:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

### 5. Repository Features Configuration

#### Topics/Tags (for discoverability)
Add these topics in repository Settings → General:
- `nextjs`
- `typescript`
- `tailwindcss`
- `website`
- `portfolio`
- `estonia`
- `software-development`
- `company-website`

#### About Section
- Website: `https://username.github.io/spexop-com` (replace with actual URL)
- Topics: (added above)
- Include in the home page: ✅

#### Issues Templates
Create `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
assignees: ''
---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- Browser [e.g. chrome, safari]
- Device [e.g. iPhone6, Desktop]
- OS [e.g. iOS, macOS, Windows]

**Additional context**
Add any other context about the problem here.
```

Create `.github/ISSUE_TEMPLATE/feature_request.md`:

```markdown
---
name: Feature request
about: Suggest an idea for this project
title: '[FEATURE] '
labels: enhancement
assignees: ''
---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

### 6. Security Setup

#### Dependabot (Automated dependency updates)
Create `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
    commit-message:
      prefix: "chore:"
      include: "scope"
```

#### Security Policy
Create `SECURITY.md`:

```markdown
# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | ✅ Yes             |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please send an email to [contact@spexop.com](mailto:contact@spexop.com).

Please include the following information:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We take security seriously and will respond within 48 hours.
```

---

## 📊 Repository Status Checks

After setup, verify these items:

### ✅ Repository Checklist
- [ ] Repository is public and accessible
- [ ] README.md displays properly with formatting
- [ ] All source files are committed and pushed
- [ ] .gitignore is working (node_modules not tracked)
- [ ] GitHub Actions workflow is configured
- [ ] Pages deployment is enabled
- [ ] Branch protection rules are set

### ✅ Deployment Checklist
- [ ] First deployment action completed successfully
- [ ] Website is accessible at GitHub Pages URL
- [ ] All pages load correctly
- [ ] Images and assets load properly
- [ ] Responsive design works on mobile
- [ ] Contact form displays correctly

---

## 🌐 Access URLs

After successful deployment:

- **Repository**: `https://github.com/USERNAME/spexop-com`
- **Live Website**: `https://USERNAME.github.io/spexop-com`
- **Actions**: `https://github.com/USERNAME/spexop-com/actions`

Replace `USERNAME` with your actual GitHub username.

---

## 🔧 Ongoing Maintenance

### Regular Tasks
1. **Dependency Updates**: Review and merge Dependabot PRs
2. **Content Updates**: Keep portfolio and services current
3. **Performance**: Monitor Core Web Vitals and optimize
4. **Security**: Review security alerts and update packages

### Monitoring
- GitHub Actions for deployment status
- GitHub Issues for bug reports and features
- GitHub Insights for repository analytics
- Website analytics (after implementation)

---

## 🚀 Next Steps

1. **Custom Domain** (optional): Configure custom domain in Pages settings
2. **Analytics**: Implement Google Analytics or Plausible
3. **SEO**: Submit to Google Search Console
4. **Social**: Share repository and website on social media
5. **Portfolio**: Start building real portfolio projects

---

## 🆘 Troubleshooting

### Common Issues

**Deployment Fails:**
- Check GitHub Actions logs
- Verify pnpm-lock.yaml is committed
- Ensure build command succeeds locally

**Pages Not Loading:**
- Verify Pages source is set to "GitHub Actions"
- Check if deployment action completed successfully
- Ensure index.html exists in build output

**Assets Not Loading:**
- Verify asset paths are relative
- Check Next.js configuration for static export
- Ensure images are in public/ directory

### Support Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

---

*Once completed, your Spexop.com website will be live and automatically deployed on every push to the main branch!*

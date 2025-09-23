import { test, expect } from '@playwright/test'

test.describe('Spexop Homepage', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/')
    
    // Check that the page loads
    await expect(page).toHaveTitle(/Spexop/)
    
    // Check main heading is visible
    await expect(page.getByText('Transform Ideas Into')).toBeVisible()
    await expect(page.getByText('Digital Reality')).toBeVisible()
  })

  test('should have proper SEO metadata', async ({ page }) => {
    await page.goto('/')
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute('content', /design and develop modern web apps/)
    
    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]')
    await expect(ogTitle).toHaveAttribute('content', /Spexop/)
    
    const ogDescription = page.locator('meta[property="og:description"]')
    await expect(ogDescription).toHaveAttribute('content', /design and develop modern web apps/)
  })

  test('should navigate to sections when clicking menu items', async ({ page }) => {
    await page.goto('/')
    
    // Click on Services menu item
    await page.getByText('Services').click()
    
    // Should scroll to services section
    await expect(page.locator('#services')).toBeInViewport()
  })

  test('should display all service cards', async ({ page }) => {
    await page.goto('/')
    
    // Navigate to services section
    await page.getByText('Services').click()
    
    // Check all service cards are visible
    await expect(page.getByText('Web Apps')).toBeVisible()
    await expect(page.getByText('Mobile Apps')).toBeVisible()
    await expect(page.getByText('Backend Systems')).toBeVisible()
    await expect(page.getByText('MVP Development')).toBeVisible()
  })

  test('should have working contact form', async ({ page }) => {
    await page.goto('/')
    
    // Navigate to contact section
    await page.getByText('Contact').click()
    
    // Fill out the form
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('textarea[name="message"]', 'This is a test message')
    
    // Form should be ready to submit (we won't actually submit in tests)
    const submitButton = page.getByRole('button', { name: /send message/i })
    await expect(submitButton).toBeVisible()
    await expect(submitButton).toBeEnabled()
  })

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Check mobile navigation menu
    const menuButton = page.getByRole('button', { name: /menu/i })
    await expect(menuButton).toBeVisible()
    
    // Main heading should still be visible
    await expect(page.getByText('Transform Ideas Into')).toBeVisible()
  })
})
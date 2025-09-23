import { test, expect } from '@playwright/test'

test.describe('SEO and Performance', () => {
  test('should have correct robots.txt', async ({ page }) => {
    const response = await page.goto('/robots.txt')
    expect(response?.status()).toBe(200)
    
    const content = await page.textContent('body')
    expect(content).toContain('User-agent: *')
    expect(content).toContain('Allow: /')
    expect(content).toContain('Sitemap: https://spexop.com/sitemap.xml')
  })

  test('should have working sitemap.xml', async ({ page }) => {
    const response = await page.goto('/sitemap.xml')
    expect(response?.status()).toBe(200)
    
    const content = await page.textContent('body')
    expect(content).toContain('<?xml')
    expect(content).toContain('https://spexop.com')
  })

  test('should have structured data', async ({ page }) => {
    await page.goto('/')
    
    // Check for JSON-LD structured data
    const structuredData = page.locator('script[type="application/ld+json"]')
    await expect(structuredData).toHaveCount(3) // Organization, LocalBusiness, Service schemas
    
    // Check first structured data contains organization info
    const firstSchema = await structuredData.first().textContent()
    expect(firstSchema).toContain('"@type":"Organization"')
    expect(firstSchema).toContain('Spexop')
  })

  test('should load fast enough', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    
    // Wait for main content to be visible
    await expect(page.getByText('Transform Ideas Into')).toBeVisible()
    
    const loadTime = Date.now() - startTime
    expect(loadTime).toBeLessThan(3000) // Should load in under 3 seconds
  })

  test('should not have console errors', async ({ page }) => {
    const errors: string[] = []
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })
    
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Filter out known acceptable errors (if any)
    const criticalErrors = errors.filter(error => 
      !error.includes('favicon') && // Ignore favicon errors
      !error.includes('preload') // Ignore preload warnings for this test
    )
    
    expect(criticalErrors).toHaveLength(0)
  })

  test('should have proper Open Graph image', async ({ page }) => {
    const response = await page.goto('/og-image')
    expect(response?.status()).toBe(200)
    
    const contentType = response?.headers()['content-type']
    expect(contentType).toContain('image/')
  })
})
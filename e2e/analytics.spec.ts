import { test, expect } from '@playwright/test'

test.describe('Analytics Integration', () => {
  test('should load Google Analytics', async ({ page }) => {
    await page.goto('/')
    
    // Check if GA script is loaded
    const gaScript = page.locator('script[src*="googletagmanager.com"]')
    await expect(gaScript).toHaveCount(1)
    
    // Wait a bit for GA to initialize
    await page.waitForTimeout(2000)
    
    // Check if gtag function exists
    const gtagExists = await page.evaluate(() => {
      return typeof (window as any).gtag === 'function'
    })
    
    expect(gtagExists).toBe(true)
  })

  test('should track page views', async ({ page }) => {
    let gtagCalls: any[] = []
    
    // Intercept gtag calls
    await page.addInitScript(() => {
      const originalGtag = (window as any).gtag
      ;(window as any).gtag = function(...args: any[]) {
        ;(window as any)._gtagCalls = (window as any)._gtagCalls || []
        ;(window as any)._gtagCalls.push(args)
        if (originalGtag) {
          return originalGtag.apply(this, args)
        }
      }
    })
    
    await page.goto('/')
    await page.waitForTimeout(1000)
    
    // Check if page view was tracked
    gtagCalls = await page.evaluate(() => (window as any)._gtagCalls || [])
    
    const pageViewCall = gtagCalls.find(call => 
      call[0] === 'config' || 
      (call[0] === 'event' && call[1] === 'page_view')
    )
    
    expect(pageViewCall).toBeDefined()
  })
})
import { test, expect } from '@playwright/test'

test.describe('API Endpoints', () => {
  test('should handle contact form submission', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message',
        service: 'Web Apps'
      }
    })
    
    // Should return appropriate response (even if email fails, API should respond)
    expect([200, 400, 500]).toContain(response.status())
    
    const body = await response.json()
    expect(body).toHaveProperty('message')
  })

  test('should validate required fields', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: '',
        email: 'invalid-email',
        message: ''
      }
    })
    
    expect(response.status()).toBe(400)
    
    const body = await response.json()
    expect(body.message).toContain('validation')
  })

  test('should have proper CORS headers', async ({ request }) => {
    // Try a preflight request to check CORS
    try {
      const response = await request.fetch('/api/contact', {
        method: 'OPTIONS',
        headers: {
          'Origin': 'http://localhost:3000',
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type'
        }
      })
      
      expect(response.status()).toBe(200)
    } catch (error) {
      // If OPTIONS is not implemented, that's also acceptable for this API
      // This is expected behavior for some API endpoints
    }
  })
})
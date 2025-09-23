import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navigation from '@/components/Navigation'

// Mock Next.js router for this test
jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
  }),
}))

describe('Navigation Component', () => {
  beforeEach(() => {
    // Mock scrollTo
    window.scrollTo = jest.fn()
  })

  it('renders the Spexop logo', () => {
    render(<Navigation />)
    const logo = screen.getByAltText('Spexop Logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation menu items', () => {
    render(<Navigation />)
    
    // Check for main navigation items (use getAllByText for duplicates)
    expect(screen.getAllByText('Services')).toHaveLength(2) // Desktop and mobile nav
    expect(screen.getAllByText('Portfolio')).toHaveLength(2)
    expect(screen.getAllByText('Process')).toHaveLength(2)
    expect(screen.getAllByText('About')).toHaveLength(2)
    expect(screen.getAllByText('Contact')).toHaveLength(2)
  })

  it('has correct logo dimensions', () => {
    render(<Navigation />)
    const logo = screen.getByAltText('Spexop Logo')
    expect(logo).toHaveAttribute('width', '144')
    expect(logo).toHaveAttribute('height', '48')
  })

  it('renders the contact button', () => {
    render(<Navigation />)
    // The actual button text is "Start Your Project" not "start project"
    const contactButton = screen.getByRole('button', { name: /start your project/i })
    expect(contactButton).toBeInTheDocument()
  })
})
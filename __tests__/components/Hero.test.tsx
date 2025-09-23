import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  beforeEach(() => {
    // Mock scrollTo
    window.scrollTo = jest.fn()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    
    expect(screen.getByText('Transform Ideas Into')).toBeInTheDocument()
    expect(screen.getByText('Digital Reality')).toBeInTheDocument()
  })

  it('renders the subheading text', () => {
    render(<Hero />)
    
    const subheading = screen.getByText(/We design and develop stunning websites/i)
    expect(subheading).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Hero />)
    
    const startButton = screen.getByRole('button', { name: /start your project/i })
    const exploreButton = screen.getByRole('button', { name: /explore our work/i })
    
    expect(startButton).toBeInTheDocument()
    expect(exploreButton).toBeInTheDocument()
  })

  it('renders the badge with correct text', () => {
    render(<Hero />)
    
    expect(screen.getByText('Crafting Digital Excellence')).toBeInTheDocument()
  })

  it('has proper heading hierarchy', () => {
    render(<Hero />)
    
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toBeInTheDocument()
  })
})
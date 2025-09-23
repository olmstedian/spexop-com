import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Services from '@/components/Services'

describe('Services Component', () => {
  it('renders the main services heading', () => {
    render(<Services />)
    
    const heading = screen.getByRole('heading', { name: /solutions that drive success/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders all service cards', () => {
    render(<Services />)
    
    // Check for all service types
    expect(screen.getByText('Web Apps')).toBeInTheDocument()
    expect(screen.getByText('Mobile Apps')).toBeInTheDocument()
    expect(screen.getByText('Backend Systems')).toBeInTheDocument()
    expect(screen.getByText('MVP Development')).toBeInTheDocument()
    expect(screen.getByText('Website Development')).toBeInTheDocument()
  })

  it('displays service descriptions', () => {
    render(<Services />)
    
    expect(screen.getByText(/Modern, responsive business platforms/i)).toBeInTheDocument()
    expect(screen.getByText(/iOS & Android apps/i)).toBeInTheDocument()
    expect(screen.getByText(/Secure APIs & dashboards/i)).toBeInTheDocument()
  })

  it('shows service features', () => {
    render(<Services />)
    
    expect(screen.getByText('React & Next.js')).toBeInTheDocument()
    expect(screen.getByText('Flutter Cross-Platform')).toBeInTheDocument()
    expect(screen.getByText('REST & GraphQL APIs')).toBeInTheDocument()
  })

  it('marks popular service correctly', () => {
    render(<Services />)
    
    // Mobile Apps should be marked as popular (text is "MOST POPULAR" in all caps)
    const popularBadges = screen.getAllByText('MOST POPULAR')
    expect(popularBadges).toHaveLength(1)
  })
})
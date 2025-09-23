import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

// Mock Next.js router for all tests
const mockRouter = {
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
  push: jest.fn(),
  pop: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
}

jest.mock('next/router', () => ({
  useRouter: () => mockRouter,
}))

// Custom render function that includes common providers
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, {
    // Add any providers here if needed in the future
    ...options,
  })
}

// Test utilities - no tests needed here

export * from '@testing-library/react'
export { customRender as render }
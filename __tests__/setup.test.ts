/**
 * Basic test to verify Jest setup is working
 */
describe('Test Setup', () => {
  it('should be able to run tests', () => {
    expect(true).toBe(true)
  })

  it('should have access to DOM matchers', () => {
    const div = document.createElement('div')
    div.textContent = 'Hello World'
    document.body.appendChild(div)
    
    expect(div).toBeInTheDocument()
    expect(div).toHaveTextContent('Hello World')
  })
})
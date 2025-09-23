/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

/* eslint-disable no-unused-vars */
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveAttribute(attr: string, value?: string): R
      toBeVisible(): R
      toHaveClass(className: string): R
      toHaveTextContent(text: string | RegExp): R
      toBeDisabled(): R
      toBeEnabled(): R
      toHaveValue(value: string | string[] | number): R
      toHaveLength(length: number): R
    }
  }
}

export {}
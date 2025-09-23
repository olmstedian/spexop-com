'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">500</h1>
        <h2 className="text-2xl mb-8">Something went wrong!</h2>
        <p className="text-gray-300 mb-8">An unexpected error occurred.</p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors mr-4"
        >
          Try again
        </button>
        <a
          href="/"
          className="bg-gray-600 hover:bg-gray-700 px-8 py-4 rounded-lg font-semibold transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
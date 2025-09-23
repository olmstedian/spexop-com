import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Spexop - Smart, Scalable Software Built Fast'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Spexop
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Smart, Scalable Software Built Fast
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 30,
            opacity: 0.9,
            textAlign: 'center',
          }}
        >
          Web Apps • Mobile Apps • Backend Systems
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
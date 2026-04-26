import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Repasta — Servis Laptop & PC Profesional di Padang'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f1d2e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 56,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, #3b6ea5, #274472)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <span style={{ fontSize: 28, fontWeight: 700, color: '#f1f1f1' }}>Repasta</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {['Repaste', 'Deep Clean', 'Upgrade'].map((tag) => (
              <span key={tag} style={{ fontSize: 13, fontWeight: 600, color: '#94a3b8', background: '#1e3a5f', borderRadius: 20, padding: '4px 12px' }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 800, color: '#f1f1f1', lineHeight: 1.1, margin: 0 }}>
            Servis Laptop & PC<br />
            <span style={{ color: '#60a5fa' }}>Profesional Padang</span>
          </h1>
          <p style={{ fontSize: 20, color: '#94a3b8', margin: 0 }}>
            Garansi 6 bulan · Harga transparan
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 16, color: '#64748b' }}>repasta.in</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#f1f1f1', background: '#1e3a5f', borderRadius: 8, padding: '8px 14px' }}>
            wa.me/621919423939
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
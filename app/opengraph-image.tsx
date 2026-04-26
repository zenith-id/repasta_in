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
          background: '#112D4E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute', inset: 0, opacity: 0.08,
            backgroundImage: 'linear-gradient(hsl(213 47% 47%) 1px, transparent 1px), linear-gradient(90deg, hsl(213 47% 47%) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Orb */}
        <div style={{ position: 'absolute', top: -120, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'hsl(213 47% 47% / 0.22)', filter: 'blur(100px)' }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, zIndex: 1 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg, hsl(213 47% 55%), hsl(213 47% 38%))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <span style={{ fontSize: 32, fontWeight: 800, color: '#F9F7F7', letterSpacing: '-0.5px' }}>Repasta</span>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, zIndex: 1, maxWidth: 700 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Repaste Thermal Paste', 'Deep Clean', 'Upgrade SSD/RAM'].map((tag) => (
              <span key={tag} style={{ fontSize: 14, fontWeight: 600, color: 'hsl(213 47% 80%)', background: 'hsl(213 47% 47% / 0.2)', border: '1px solid hsl(213 47% 47% / 0.35)', borderRadius: 999, padding: '6px 16px' }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 800, color: '#F9F7F7', lineHeight: 1.1, margin: 0, letterSpacing: '-1px' }}>
            Servis Laptop & PC<br />
            <span style={{ color: 'hsl(213 47% 65%)' }}>Profesional di Padang</span>
          </h1>
          <p style={{ fontSize: 22, color: 'hsl(219 38% 72%)', margin: 0, lineHeight: 1.5 }}>
            Diagnosa gratis · Garansi 6 bulan · Harga transparan
          </p>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', zIndex: 1 }}>
          <span style={{ fontSize: 18, color: 'hsl(219 38% 55%)' }}>repasta.in · Padang, Sumatera Barat</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'hsl(213 47% 47% / 0.2)', border: '1px solid hsl(213 47% 47% / 0.4)', borderRadius: 12, padding: '10px 20px' }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#F9F7F7' }}>wa.me/621919423939</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

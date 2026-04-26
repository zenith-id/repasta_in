'use client'

import { motion, type Variants, useInView, animate } from 'framer-motion'
import { ArrowRight, MessageCircle, Wrench } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

/* ── CountUp hook ──────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1.6) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target, duration])

  return { count, ref }
}

/* ── Stat item ──────────────────────────────────────────────────── */
function StatItem({
  label, target, prefix = '', suffix = '', delay = 0,
}: { label: string; target: number; prefix?: string; suffix?: string; delay?: number }) {
  const { count, ref } = useCountUp(target, 1.5)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="space-y-1 text-center"
    >
      <div className="text-[10px] uppercase tracking-[0.28em] text-foreground/45 font-medium">
        {label}
      </div>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="text-2xl sm:text-3xl font-bold text-foreground font-poppins tabular-nums"
      >
        {prefix}{count}{suffix}
      </div>
    </motion.div>
  )
}

/* ── Wave canvas types ─────────────────────────────────────────── */
type Point = { x: number; y: number }
interface WaveConfig {
  offset: number; amplitude: number; frequency: number; color: string; opacity: number
}

const highlightPills = ['Diagnosa Gratis', 'Garansi 6 Bulan', 'Servis < 2 Jam'] as const

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.12 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<Point>({ x: 0, y: 0 })
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const computeThemeColors = () => {
      const rootStyles = getComputedStyle(document.documentElement)
      const resolveColor = (variables: string[], alpha = 1) => {
        const tempEl = document.createElement('div')
        tempEl.style.cssText = 'position:absolute;visibility:hidden;width:1px;height:1px'
        document.body.appendChild(tempEl)
        let color = `rgba(255,255,255,${alpha})`
        for (const variable of variables) {
          const value = rootStyles.getPropertyValue(variable).trim()
          if (value) {
            tempEl.style.backgroundColor = `var(${variable})`
            const computed = getComputedStyle(tempEl).backgroundColor
            if (computed && computed !== 'rgba(0, 0, 0, 0)') {
              if (alpha < 1) {
                const m = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
                color = m ? `rgba(${m[1]},${m[2]},${m[3]},${alpha})` : computed
              } else {
                color = computed
              }
              break
            }
          }
        }
        document.body.removeChild(tempEl)
        return color
      }
      return {
        backgroundTop: resolveColor(['--background'], 1),
        backgroundBottom: resolveColor(['--muted', '--background'], 0.97),
        wavePalette: [
          { offset: 0,              amplitude: 65,  frequency: 0.003,  color: resolveColor(['--primary'], 0.65), opacity: 0.42 },
          { offset: Math.PI / 2,   amplitude: 85,  frequency: 0.0026, color: resolveColor(['--primary'], 0.5),  opacity: 0.28 },
          { offset: Math.PI,       amplitude: 55,  frequency: 0.0034, color: resolveColor(['--foreground'], 0.15), opacity: 0.20 },
          { offset: Math.PI * 1.5, amplitude: 75,  frequency: 0.0022, color: resolveColor(['--primary'], 0.38), opacity: 0.22 },
          { offset: Math.PI * 2,   amplitude: 50,  frequency: 0.004,  color: resolveColor(['--foreground'], 0.10), opacity: 0.16 },
        ] satisfies WaveConfig[],
      }
    }

    let themeColors = computeThemeColors()
    const observer = new MutationObserver(() => { themeColors = computeThemeColors() })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouseInfluence  = prefersReducedMotion ? 10 : 60
    const influenceRadius = prefersReducedMotion ? 160 : 300
    const smoothing       = prefersReducedMotion ? 0.04 : 0.1

    const resizeCanvas   = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    const recenterMouse  = () => { const c = { x: canvas.width / 2, y: canvas.height / 2 }; mouseRef.current = c; targetMouseRef.current = c }
    const handleResize   = () => { resizeCanvas(); recenterMouse() }
    const handleMouseMove = (e: MouseEvent) => { targetMouseRef.current = { x: e.clientX, y: e.clientY } }
    const handleMouseLeave = () => recenterMouse()

    resizeCanvas(); recenterMouse()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const drawWave = (wave: WaveConfig) => {
      ctx.save(); ctx.beginPath()
      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x
        const dy = canvas.height / 2 - mouseRef.current.y
        const influence = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / influenceRadius)
        const mouseEffect = influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset)
        const y = canvas.height / 2
          + Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude
          + Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45)
          + mouseEffect
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.lineWidth = 2.5; ctx.strokeStyle = wave.color
      ctx.globalAlpha = wave.opacity; ctx.shadowBlur = 28; ctx.shadowColor = wave.color
      ctx.stroke(); ctx.restore()
    }

    const animate_ = () => {
      time++
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, themeColors.backgroundTop)
      gradient.addColorStop(1, themeColors.backgroundBottom)
      ctx.fillStyle = gradient; ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1; ctx.shadowBlur = 0
      themeColors.wavePalette.forEach(drawWave)
      animationId = requestAnimationFrame(animate_)
    }
    animationId = requestAnimationFrame(animate_)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId)
      } else {
        animationId = requestAnimationFrame(animate_)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(animationId)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-28 text-center md:px-8 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/65 backdrop-blur-sm"
          >
            <Wrench className="h-3.5 w-3.5 text-primary" />
            Servis Terpercaya · Padang
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-5 font-bold tracking-tight text-foreground font-poppins"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 3.75rem)', lineHeight: 1.15 }}
          >
            Laptop Panas & Lemot?{' '}
            <span className="bg-gradient-to-r from-primary via-primary/70 to-foreground/60 bg-clip-text text-transparent">
              Kami Solusinya
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-9 max-w-2xl text-base sm:text-lg text-foreground/60 leading-relaxed"
          >
            Layanan repaste, deep clean, dan perawatan laptop/PC profesional langsung di depan Anda —
            cepat, transparan, bergaransi.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="https://wa.me/621919423939?text=Halo%20Repasta!%20Saya%20ingin%20konsultasi%20servis%20laptop."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Chat via WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background/60 px-7 py-3.5 text-sm font-semibold text-foreground/70 backdrop-blur hover:border-primary/50 hover:text-primary hover:bg-background/80 transition-all"
            >
              Lihat Layanan Kami
            </a>
          </motion.div>

          {/* Highlight Pills */}
          <motion.ul
            variants={itemVariants}
            className="mb-11 flex flex-wrap items-center justify-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-foreground/55"
          >
            {highlightPills.map((pill) => (
              <li key={pill} className="rounded-full border border-border/50 bg-background/60 px-4 py-1.5 backdrop-blur">
                {pill}
              </li>
            ))}
          </motion.ul>

          {/* Stats with counter animation */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border/40 bg-border/30 backdrop-blur-sm"
          >
            {[
              { label: 'Pelanggan Puas',  target: 500, suffix: '+',    prefix: '',   delay: 0.55 },
              { label: 'Tingkat Sukses',  target: 98,  suffix: '%',    prefix: '',   delay: 0.63 },
              { label: 'Waktu Diagnosa',  target: 2,   suffix: ' Jam', prefix: '< ', delay: 0.71 },
              { label: 'Garansi Kerja',   target: 6,   suffix: ' Bln', prefix: '',   delay: 0.79 },
            ].map((s, i) => (
              <div key={i} className="bg-background/80 p-5">
                <StatItem {...s} />
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
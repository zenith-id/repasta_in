'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Wrench, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useLenis } from '@/components/lenis-provider'

import { primaryNav, mobileNav, WHATSAPP_LINK } from '@/constants/navbar'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-9 h-9" />
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
      className="w-9 h-9 flex items-center justify-center rounded-xl text-foreground/50 hover:text-foreground hover:bg-muted transition-colors"
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeId, setActiveId]         = useState('')
  const lenis = useLenis()

  /* scroll state */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* active section via IntersectionObserver */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { threshold: 0.35, rootMargin: '-80px 0px -35% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileOpen(false)
    if (lenis) {
      lenis.scrollTo(href, { offset: -80, duration: 1.4 })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.nav
        className="fixed z-50 left-0 right-0"
        animate={{ top: isScrolled ? '1rem' : '0' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ top: 0 }}
      >
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'max-w-2xl mx-auto bg-background/92 backdrop-blur-xl border border-border shadow-xl shadow-foreground/5 rounded-2xl px-5 py-3'
              : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5'
          }`}
        >
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all group-hover:shadow-lg group-hover:shadow-primary/30"
                style={{
                  background: 'linear-gradient(135deg, hsl(213 47% 55%), hsl(213 47% 38%))',
                  boxShadow: '0 3px 10px hsl(213 47% 47% / 0.28)',
                }}
              >
                <Wrench size={16} className="text-white" />
              </div>
              <span className="font-poppins font-bold text-lg text-foreground">Repasta</span>
            </Link>

            {/* Desktop nav — 3 links with active indicator */}
            <div className="hidden md:flex items-center gap-1">
              {primaryNav.map((item) => {
                const isActive = activeId === item.id
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'text-primary bg-primary/8'
                        : 'text-foreground/60 hover:text-primary hover:bg-primary/6'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href={WHATSAPP_LINK('Halo Repasta! Saya ingin konsultasi servis.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                Pesan Sekarang
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 rounded-xl text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Buka menu"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="md:hidden mt-2 max-w-sm mx-4 bg-background/96 backdrop-blur-xl border border-border shadow-2xl rounded-2xl overflow-hidden"
            >
<div className="p-3 flex flex-col gap-0.5">
                  {mobileNav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                      activeId === item.id
                        ? 'text-primary bg-primary/8'
                        : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2 border-t border-border mt-1 space-y-1.5">
                  <Link
                    href="/layanan"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Lihat Semua Layanan →
                  </Link>
                  <a
                    href={WHATSAPP_LINK('Halo Repasta! Saya ingin konsultasi servis.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors text-sm"
                  >
                    Pesan via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

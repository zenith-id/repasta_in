'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import Lenis from 'lenis'

const LenisContext = createContext<Lenis | null>(null)

export function useLenis() {
  return useContext(LenisContext)
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
    })

    const raf = (time: number) => {
      instance.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    setLenis(instance)

    return () => instance.destroy()
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

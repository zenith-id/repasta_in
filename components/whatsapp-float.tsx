'use client'

import { MessageCircle } from 'lucide-react'

import { WHATSAPP_CONFIG } from '@/constants/whatsapp-float'

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Pulse ring — fades on hover, respects reduced-motion */}
      <span
        className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-primary/40 motion-safe:animate-ping group-hover:opacity-0 transition-opacity duration-200 pointer-events-none"
        aria-hidden="true"
      />

      <a
        href={WHATSAPP_CONFIG.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="relative flex items-center h-14 px-4 rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
      >
        <MessageCircle size={22} className="flex-shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[8rem] group-hover:ml-2.5 transition-all duration-300 text-sm font-semibold">
          {WHATSAPP_CONFIG.label}
        </span>
      </a>
    </div>
  )
}

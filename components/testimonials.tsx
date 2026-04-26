'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { testimonials, col1, col2, col3, header, type Testimonial } from '@/constants/testimonials'

function TestimonialsColumn({
  className,
  items,
  duration = 14,
}: {
  className?: string
  items: Testimonial[]
  duration?: number
}) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="flex flex-col gap-5 pb-5 list-none m-0 p-0"
      >
        {[0, 1].map((pass) => (
          <React.Fragment key={pass}>
            {items.map((t, i) => (
              <motion.li
                key={`${pass}-${i}`}
                aria-hidden={pass === 1 ? 'true' : 'false'}
                tabIndex={pass === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  transition: { type: 'spring', stiffness: 380, damping: 18 },
                }}
                className="p-7 rounded-2xl border border-border bg-background shadow-md shadow-foreground/5 max-w-xs w-full cursor-default select-none group"
              >
                <blockquote className="m-0 p-0">
                  <p className="text-foreground/70 leading-relaxed text-sm m-0">
                    "{t.text}"
                  </p>
                  <footer className="flex items-center gap-3 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={t.image}
                      alt={`Avatar ${t.name}`}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/40 transition-all duration-300"
                    />
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-foreground text-sm font-poppins">
                        {t.name}
                      </cite>
                      <span className="text-xs leading-5 text-muted-foreground mt-0.5">
                        {t.role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimoni"
      aria-labelledby="testimoni-heading"
      className="bg-card py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="container px-4 z-10 mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto mb-16">
          <div className="section-tag mb-5">
            {header.title}
          </div>
          <h2
            id="testimoni-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mt-2 text-center text-foreground font-poppins"
          >
            {header.title}
          </h2>
          <p className="text-center mt-4 text-muted-foreground text-lg leading-relaxed max-w-sm">
            {header.subtitle}
          </p>
        </div>

        {/* Scrolling columns */}
        <div
          className="flex justify-center gap-5 mt-10 max-h-[740px] overflow-hidden"
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)' }}
          role="region"
          aria-label="Testimoni pelanggan"
        >
          <TestimonialsColumn items={col1} duration={16} />
          <TestimonialsColumn items={col2} className="hidden md:block" duration={21} />
          <TestimonialsColumn items={col3} className="hidden lg:block" duration={18} />
        </div>
      </motion.div>
    </section>
  )
}

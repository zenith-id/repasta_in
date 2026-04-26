'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Laptop, Monitor, Star, MessageCircle } from 'lucide-react'

import { laptopServices, pcServices, servicesHeader, note, tabsData, WHATSAPP_LINK } from '@/constants/services'

function ServiceRow({ name, desc, price, popular, index }: {
  name: string; desc: string; price: string; popular: boolean; index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group flex items-center justify-between gap-4 py-4 px-5 border-b border-border/60 last:border-0 hover:bg-primary/4 transition-colors rounded-xl"
    >
      <div className="flex items-start gap-3 min-w-0">
        {popular && (
          <span className="flex-shrink-0 mt-0.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wider">
            <Star size={8} className="fill-white" />
            POPULER
          </span>
        )}
        <div className="min-w-0">
          <p className="font-semibold text-foreground text-sm font-poppins truncate">{name}</p>
          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5 line-clamp-2">{desc}</p>
        </div>
      </div>
      <span className={`flex-shrink-0 font-bold text-sm font-poppins whitespace-nowrap ${
        price === 'Hubungi Kami' ? 'text-foreground/60' : 'text-primary'
      }`}>
        {price}
      </span>
    </motion.div>
  )
}

export function Services() {
  const [active, setActive] = useState<'laptop' | 'pc'>('laptop')

  return (
    <section id="layanan" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mb-4 mx-auto w-fit">
            {servicesHeader.tag}
          </div>
          <h2 className="text-balance-title mb-4 font-poppins">
            {servicesHeader.title.split(',')[0]},<br className="hidden sm:block" />
            {servicesHeader.title.split(',')[1]}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {servicesHeader.subtitle}
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-2xl bg-card border border-border gap-1">
            {tabsData.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === id
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'text-foreground/60 hover:text-foreground hover:bg-background/60'
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Service List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="rounded-2xl border border-border bg-card overflow-hidden"
          >
            {/* List header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-foreground/3">
              <span className="text-xs font-bold text-foreground/50 uppercase tracking-widest">Layanan</span>
              <span className="text-xs font-bold text-foreground/50 uppercase tracking-widest">Harga</span>
            </div>

            <div className="p-2">
              {(active === 'laptop' ? laptopServices : pcServices).map((svc, i) => (
                <ServiceRow key={svc.name} {...svc} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Note + CTA */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-primary/6 border border-primary/15"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-foreground/70 text-center sm:text-left">
            {note.text}
            <span className="text-foreground font-medium">{note.highlight}</span> {note.detail}
          </p>
          <a
            href={WHATSAPP_LINK(note.cta.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl text-sm hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 transition-all"
          >
            <MessageCircle size={15} />
            {note.cta.text}
          </a>
        </motion.div>

      </div>
    </section>
  )
}

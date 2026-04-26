'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Laptop, Monitor, Star, MessageCircle } from 'lucide-react'

const laptopServices = [
  {
    name: 'Repaste Regular',
    desc: 'Pasta termal cair (CryoFuze 5 / Arctic MX-6) — solusi cepat & efisien',
    price: 'Rp 150.000',
    popular: false,
  },
  {
    name: 'Repaste Phase Change',
    desc: 'Bahan premium PTM 7950 / ID-Cooling PTM2 — tahan lama, konduktivitas tinggi',
    price: 'Rp 180.000',
    popular: false,
  },
  {
    name: 'Repaste Liquid Metal',
    desc: 'Konduktivitas 128 W/mK — pendinginan ekstrem untuk gaming & workstation',
    price: 'Rp 200.000',
    popular: false,
  },
  {
    name: 'Repaste VRAM / VRM',
    desc: 'Thermal putty untuk area VRAM & VRM — mencegah throttling GPU',
    price: 'Rp 50.000',
    popular: false,
  },
  {
    name: 'Cleaning Keyboard Eksternal',
    desc: 'Bersih kerak pada keycaps & plate keyboard — seperti baru lagi',
    price: 'Rp 80.000',
    popular: false,
  },
  {
    name: 'Deepclean Phase Change',
    desc: 'Cleaning komprehensif seluruh laptop + repaste PTM 7950 — paket terlengkap',
    price: 'Rp 230.000',
    popular: true,
  },
  {
    name: 'Deepclean Liquid Metal',
    desc: 'Cleaning keyboard, layar, palmrest + liquid metal — performa puncak',
    price: 'Rp 250.000',
    popular: false,
  },
  {
    name: 'Special Request',
    desc: 'Layanan kustom sesuai kebutuhan spesifik Anda — konsultasi dulu',
    price: 'Hubungi Kami',
    popular: false,
  },
]

const pcServices = [
  {
    name: 'PC Repaste',
    desc: 'Penggantian pasta termal untuk PC desktop — semua brand & socket',
    price: 'Rp 220.000',
    popular: false,
  },
  {
    name: 'Instal Ulang OS',
    desc: 'Instalasi sistem operasi bersih + driver — Windows 10/11 atau Linux',
    price: 'Rp 75.000',
    popular: false,
  },
  {
    name: 'Jasa Rakit PC',
    desc: 'Perakitan PC dari komponen yang Anda sediakan — oleh teknisi berpengalaman',
    price: 'Rp 150.000',
    popular: false,
  },
]

type Tab = 'laptop' | 'pc'

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
  const [active, setActive] = useState<Tab>('laptop')

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
            Layanan & Harga
          </div>
          <h2 className="text-balance-title mb-4 font-poppins">
            Harga <span className="text-primary">Transparan</span>,<br className="hidden sm:block" />
            Tanpa Biaya Tersembunyi
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Semua harga dikonfirmasi sebelum pengerjaan. Anda tahu persis berapa yang dibayar.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-2xl bg-card border border-border gap-1">
            {([
              { id: 'laptop' as Tab, label: 'Laptop', icon: Laptop },
              { id: 'pc' as Tab,     label: 'PC Desktop', icon: Monitor },
            ] as { id: Tab; label: string; icon: typeof Laptop }[]).map(({ id, label, icon: Icon }) => (
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
            Tidak yakin butuh layanan apa?{' '}
            <span className="text-foreground font-medium">Diagnosa gratis</span> — kami bantu cari tahu.
          </p>
          <a
            href="https://wa.me/621919423939?text=Halo%20Repasta!%20Saya%20ingin%20tanya%20layanan%20yang%20sesuai."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl text-sm hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 transition-all"
          >
            <MessageCircle size={15} />
            Konsultasi Gratis
          </a>
        </motion.div>

      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const problems = [
  {
    num: '01',
    emoji: '🔥',
    title: 'Laptop Overheat & Mati Mendadak',
    desc: 'Pasta termal mengering membuat suhu prosesor melonjak — laptop melambat, lag, bahkan shutdown sendiri tanpa peringatan.',
  },
  {
    num: '02',
    emoji: '🐌',
    title: 'Performa Melambat Drastis',
    desc: 'Meski RAM dan storage masih cukup, laptop terasa sangat berat? Debu menumpuk di heatsink jadi penyebab utama yang sering diabaikan.',
  },
  {
    num: '03',
    emoji: '💸',
    title: 'Takut Servis Tidak Transparan',
    desc: 'Khawatir biaya tiba-tiba membengkak? Atau komponen diganti diam-diam tanpa sepengetahuan Anda? Pengalaman buruk ini nyata.',
  },
  {
    num: '04',
    emoji: '⏳',
    title: 'Tidak Ada Waktu Antri Lama',
    desc: 'Service center resmi bisa minta waktu 3–7 hari. Mahasiswa dan pekerja tidak bisa menunggu selama itu.',
  },
]

export function ProblemAwareness() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header — left-aligned for editorial feel */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag mb-5 w-fit">Masalah Umum</div>
            <h2 className="text-balance-title font-poppins">
              Apakah Anda{' '}
              <span className="text-primary">Mengalami Ini?</span>
            </h2>
          </motion.div>
          <motion.p
            className="text-muted-foreground max-w-xs lg:text-right text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Masalah yang dibiarkan justru memperparah kerusakan dan biaya servis.
          </motion.p>
        </div>

        {/* 2×2 Grid — numbered cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/35 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              {/* Giant background number */}
              <span
                className="absolute top-3 right-4 text-6xl font-black text-foreground/4 font-poppins select-none leading-none"
                aria-hidden="true"
              >
                {p.num}
              </span>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/2 transition-colors duration-300 rounded-2xl pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                <span className="text-2xl mb-3 block">{p.emoji}</span>
                <h3 className="font-bold text-foreground mb-2 font-poppins leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resolution tagline */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 rounded-2xl bg-foreground text-background"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm leading-relaxed max-w-lg opacity-90">
            <span className="font-bold text-base block mb-0.5">Kami punya solusinya.</span>
            Pasta termal mengering & debu menumpuk adalah penyebab utama — dan kami
            selesaikan dalam <strong>1–2 jam, di depan Anda, bergaransi.</strong>
          </p>
          <a
            href="#cara-pesan"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-background/30 text-background font-semibold rounded-xl text-sm hover:bg-background/10 transition-all whitespace-nowrap"
          >
            Cara Pesan
            <ArrowRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

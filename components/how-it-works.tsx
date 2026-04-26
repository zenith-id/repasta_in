'use client'

import { motion } from 'framer-motion'
import { MessageCircle, CalendarDays, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Hubungi Kami',
    desc: 'Chat via WhatsApp — ceritakan masalah laptop/PC Anda. Kami respon dalam hitungan menit, konsultasi gratis tanpa komitmen.',
    badge: 'Respon < 5 menit',
  },
  {
    num: '02',
    icon: CalendarDays,
    title: 'Jadwalkan Kunjungan',
    desc: 'Teknisi datang ke rumah, kost, kampus, atau kantor Anda. Atau bawa langsung ke outlet kami di Padang — pilih yang paling mudah.',
    badge: 'Home visit tersedia',
  },
  {
    num: '03',
    icon: CheckCircle2,
    title: 'Selesai & Bergaransi',
    desc: 'Perangkat kembali optimal dalam 1–2 jam, dikerjakan transparan di depan Anda. Garansi 6 bulan untuk setiap layanan.',
    badge: 'Garansi 6 bulan',
  },
]

export function HowItWorks() {
  return (
    <section id="cara-pesan" className="py-24 px-4 sm:px-6 lg:px-8 bg-card overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mb-5 w-fit">Cara Pesan</div>
          <h2 className="text-balance-title font-poppins mb-4">
            3 Langkah <span className="text-primary">Mudah & Cepat</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tidak perlu antri lama. Servis profesional langsung hadir untuk Anda.
          </p>
        </motion.div>

        {/* Steps — editorial stacked layout */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isLast = i === steps.length - 1
            return (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Vertical connector */}
                {!isLast && (
                  <div className="absolute left-[2.35rem] top-[5.5rem] bottom-0 w-px bg-border z-0" />
                )}

                <div className="relative z-10 flex gap-6 pb-10">
                  {/* Left: number + icon stack */}
                  <div className="flex flex-col items-center gap-0 flex-shrink-0">
                    {/* Giant step number */}
                    <span
                      className="block text-[3.5rem] leading-none font-black text-primary/15 font-poppins select-none tabular-nums"
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>
                    {/* Icon circle */}
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/25 flex items-center justify-center -mt-1">
                      <Icon size={20} className="text-primary" />
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="pt-4 flex-1">
                    <div className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <h3 className="text-lg font-bold text-foreground font-poppins">{step.title}</h3>
                        <span className="text-[11px] font-bold text-primary bg-primary/8 border border-primary/15 px-3 py-1 rounded-full whitespace-nowrap">
                          ✓ {step.badge}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
        >
          <a
            href="https://wa.me/621919423939?text=Halo%20Repasta!%20Saya%20ingin%20pesan%20servis%20laptop."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all text-sm"
          >
            <MessageCircle size={18} />
            Mulai Pesan via WhatsApp
          </a>
          <p className="text-xs text-muted-foreground">Senin–Jumat 09.00–18.00 · Sabtu 10.00–15.00</p>
        </motion.div>

      </div>
    </section>
  )
}

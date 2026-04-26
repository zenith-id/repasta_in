'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Diagnosa',
    price: 'Gratis',
    priceNote: 'tanpa biaya',
    description: 'Pengecekan kondisi lengkap tanpa komitmen',
    features: [
      'Diagnosa menyeluruh',
      'Identifikasi masalah',
      'Estimasi biaya perbaikan',
      'Konsultasi teknisi',
      'Tanpa syarat apapun',
    ],
    highlighted: false,
    badge: null,
    cta: 'Daftar Sekarang',
    ctaMsg: 'Halo%20Repasta!%20Saya%20ingin%20diagnosa%20gratis.',
  },
  {
    name: 'Paket Standar',
    price: 'Rp 150.000',
    priceNote: 'sekali servis',
    description: 'Perawatan rutin untuk laptop tetap prima',
    features: [
      'Bersih internal menyeluruh',
      'Ganti pasta thermal premium',
      'Cek kipas & airflow',
      'Verifikasi performa sistem',
      'Garansi 3 bulan',
    ],
    highlighted: true,
    badge: 'Paling Populer',
    cta: 'Pilih Paket Ini',
    ctaMsg: 'Halo%20Repasta!%20Saya%20ingin%20Paket%20Standar.',
  },
  {
    name: 'Paket Premium',
    price: 'Rp 300.000+',
    priceNote: 'tergantung kerusakan',
    description: 'Perbaikan tuntas untuk kerusakan serius',
    features: [
      'Diagnosa + Perbaikan penuh',
      'Spare part berkualitas',
      'Tenaga teknisi senior',
      'Garansi 6 bulan',
      'Prioritas antrian servis',
    ],
    highlighted: false,
    badge: null,
    cta: 'Konsultasi Dulu',
    ctaMsg: 'Halo%20Repasta!%20Saya%20ingin%20tanya%20Paket%20Premium.',
  },
]

export function Pricing() {
  return (
    <section id="harga" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mb-4">
            <Zap size={14} />
            Biaya Servis
          </div>
          <h2 className="text-balance-title mb-4">
            Harga Jelas,{' '}
            <span className="text-primary">Tanpa Kejutan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami percaya transparansi adalah fondasi kepercayaan. Semua harga dikonfirmasi
            sebelum pekerjaan dimulai.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-foreground text-background border-2 border-primary shadow-2xl shadow-primary/20 ring-4 ring-primary/10'
                  : 'bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Popular Badge — foreground (navy) */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg shadow-primary/25">
                    <Star size={10} className="fill-white" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name + desc */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold font-poppins mb-1 ${plan.highlighted ? 'text-background' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-card/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-3xl sm:text-4xl font-bold font-poppins ${plan.highlighted ? 'text-background' : 'text-primary'}`}>
                  {plan.price}
                </span>
                <p className={`text-xs mt-1 ${plan.highlighted ? 'text-card/70' : 'text-muted-foreground'}`}>
                  {plan.priceNote}
                </p>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/621919423939?text=${plan.ctaMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-xl font-semibold text-center mb-6 transition-all ${
                  plan.highlighted
                    ? 'bg-background text-foreground hover:bg-card shadow-md'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25'
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <div className="space-y-3 flex-1">
                {plan.features.map((feature, fi) => (
                  <div key={fi} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.highlighted ? 'bg-card/20' : 'bg-primary/10'
                    }`}>
                      <Check size={12} className={plan.highlighted ? 'text-background' : 'text-primary'} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-card/90' : 'text-foreground/80'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">
            Kerusakan khusus atau ingin harga terbaik?
          </p>
          <a
            href="https://wa.me/621919423939?text=Halo%20Repasta!%20Saya%20ingin%20minta%20estimasi%20harga."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/5 transition-colors"
          >
            Minta Estimasi Khusus
          </a>
        </motion.div>
      </div>
    </section>
  )
}

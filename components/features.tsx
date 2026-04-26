'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Clock, Wrench, CheckCircle, Zap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const avatars = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=64&h=64',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=64&h=64',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=64&h=64',
]

export function Features() {
  return (
    <section id="keunggulan" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mb-4 mx-auto w-fit">
            <CheckCircle size={14} />
            Keunggulan Kami
          </div>
          <h2 className="text-balance-title mb-4">
            Kenapa Pilih{' '}
            <span className="text-primary">Repasta?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Standar profesional yang mengutamakan kejujuran, kecepatan, dan kualitas kerja.
          </p>
        </motion.div>

        <div className="relative z-10 grid grid-cols-6 gap-3">

          <motion.div
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="col-span-full lg:col-span-2"
          >
            <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
              <CardContent className="relative flex flex-col items-center justify-center pt-8 pb-6 text-center">
                <div className="relative flex h-24 w-56 items-center mb-2">
                  <span className="mx-auto block w-fit text-5xl font-bold text-primary font-poppins relative z-10">
                    GRATIS
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-poppins text-foreground">Diagnosa Gratis</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-[200px]">
                  Cek kondisi laptop tanpa biaya, tanpa syarat apapun.
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="col-span-full sm:col-span-3 lg:col-span-2"
          >
            <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
              <CardContent className="pt-8 text-center">
                <div className="relative mx-auto flex aspect-square size-28 rounded-full border border-border items-center justify-center
                  before:absolute before:-inset-2 before:rounded-full before:border before:border-border/40">
                  <Shield className="m-auto h-12 w-12 text-primary" strokeWidth={1.5} />
                </div>
                <div className="mt-7 space-y-1.5">
                  <h3 className="text-lg font-bold text-foreground font-poppins">Garansi 6 Bulan</h3>
                  <p className="text-sm text-muted-foreground">
                    Setiap pekerjaan dan spare part dilindungi garansi penuh. Tenang tanpa risiko.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-28 h-28 bg-primary/6 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="col-span-full sm:col-span-3 lg:col-span-2"
          >
            <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
              <CardContent className="pt-8 text-center">
                <div className="px-4 pb-2">
                  <div className="flex items-end justify-center gap-1.5 h-20">
                    {[30, 50, 40, 70, 55, 90, 75, 100, 85].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-5 rounded-t-md bg-primary/20"
                        style={{ height: `${h}%` }}
                        initial={{ scaleY: 0, originY: 1 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                      >
                        {i === 7 && (
                          <div className="w-full h-full rounded-t-md bg-primary" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-2 text-[10px] text-muted-foreground/60 font-medium">
                    <span>Masuk</span><span>Diagnosa</span><span>Selesai</span>
                  </div>
                </div>
                <div className="mt-5 space-y-1.5">
                  <h3 className="text-lg font-bold text-foreground font-poppins">Proses &lt; 2 Jam</h3>
                  <p className="text-sm text-muted-foreground">
                    Diagnosa cepat dalam hitungan jam. Anda tahu kondisi perangkat hari itu juga.
                  </p>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-20 bg-primary/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="col-span-full lg:col-span-3"
          >
            <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
              <CardContent className="grid sm:grid-cols-2 gap-6 pt-8 h-full">
                <div className="relative z-10 flex flex-col justify-between gap-8">
                  <div className="relative flex aspect-square size-12 rounded-full border border-border items-center justify-center
                    before:absolute before:-inset-2 before:rounded-full before:border before:border-border/40">
                    <Wrench className="m-auto size-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-poppins mb-1.5">Layanan Lengkap</h3>
                    <p className="text-sm text-muted-foreground">Satu tempat untuk semua kebutuhan servis laptop dan PC Anda.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 justify-center">
                  {[
                    { icon: Wrench, label: 'Bersih & Pasta Thermal' },
                    { icon: Zap, label: 'Upgrade RAM & SSD' },
                    { icon: Shield, label: 'Perbaikan Hardware' },
                    { icon: CheckCircle, label: 'Instal & Optimasi OS' },
                  ].map((s, i) => {
                    const Icon = s.icon
                    return (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60 hover:border-primary/30 transition-colors"
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.07 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={15} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{s.label}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="col-span-full lg:col-span-3"
          >
            <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
              <CardContent className="grid sm:grid-cols-2 gap-6 pt-8 h-full">
                <div className="relative z-10 flex flex-col justify-between gap-8">
                  <div className="relative flex aspect-square size-12 rounded-full border border-border items-center justify-center
                    before:absolute before:-inset-2 before:rounded-full before:border before:border-border/40">
                    <Users className="m-auto size-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-poppins mb-1.5">500+ Pelanggan Puas</h3>
                    <p className="text-sm text-muted-foreground">Dipercaya ratusan pelanggan di Padang sejak kami berdiri.</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <div className="flex items-center justify-center">
                    <div className="relative size-28">
                      <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--card))" strokeWidth="10" />
                        <motion.circle
                          cx="50" cy="50" r="40" fill="none"
                          stroke="hsl(var(--primary))" strokeWidth="10"
                          strokeLinecap="round"
                          strokeDasharray="251.2"
                          initial={{ strokeDashoffset: 251.2 }}
                          whileInView={{ strokeDashoffset: 251.2 * 0.02 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-foreground font-poppins">98%</span>
                        <span className="text-[10px] text-muted-foreground">Sukses</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2.5">
                      {avatars.map((src, i) => (
                        <Image
                          key={i}
                          src={src}
                          alt="avatar pelanggan"
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full ring-2 ring-background object-cover"
                        />
                      ))}
                      <div className="w-8 h-8 rounded-full ring-2 ring-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                        +
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">& ratusan lainnya</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
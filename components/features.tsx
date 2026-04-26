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

/* Pelanggan avatar stack */
const avatars = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=64&h=64',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=64&h=64',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=64&h=64',
]

/* Mini service list untuk card besar */
const services = [
  { icon: Wrench,      label: 'Bersih & Pasta Thermal' },
  { icon: Zap,         label: 'Upgrade RAM & SSD'       },
  { icon: Shield,      label: 'Perbaikan Hardware'       },
  { icon: CheckCircle, label: 'Instal & Optimasi OS'     },
]

export function Features() {
  return (
    <section id="keunggulan" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">

        {/* Header */}
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

        {/* Bento Grid */}
        <div className="relative z-10 grid grid-cols-6 gap-3">

          {/* ── Card 1 — Diagnosa Gratis ── */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="col-span-full lg:col-span-2"
          >
            <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
              <CardContent className="relative flex flex-col items-center justify-center pt-8 pb-6 text-center">
                {/* Wave SVG behind number */}
                <div className="relative flex h-24 w-56 items-center mb-2">
                  <svg className="text-muted-foreground/20 absolute inset-0 size-full" viewBox="0 0 254 104" fill="none">
                    <path d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992 153.151 0.1347 177.013 2.9425C197.672 5.2321 218.04 9.0172 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.3666 157.558 7.5217C129.914 5.7077 102.154 8.0679 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z" fill="currentColor"/>
                  </svg>
                  <span className="mx-auto block w-fit text-5xl font-bold text-primary font-poppins relative z-10">
                    GRATIS
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-poppins text-foreground">Diagnosa Gratis</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-[200px]">
                  Cek kondisi laptop tanpa biaya, tanpa syarat apapun.
                </p>
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </CardContent>
            </Card>
          </motion.div>

          {/* ── Card 2 — Garansi 6 Bulan ── */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="col-span-full sm:col-span-3 lg:col-span-2"
          >
            <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
              <CardContent className="pt-8 text-center">
                {/* Shield ring visual */}
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

          {/* ── Card 3 — Proses Cepat ── */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="col-span-full sm:col-span-3 lg:col-span-2"
          >
            <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
              <CardContent className="pt-8 text-center">
                {/* Speed bar chart */}
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

          {/* ── Card 4 — Layanan Lengkap (wide) ── */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="col-span-full lg:col-span-3"
          >
            <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
              <CardContent className="grid sm:grid-cols-2 gap-6 pt-8 h-full">
                <div className="relative z-10 flex flex-col justify-between gap-8">
                  {/* Icon */}
                  <div className="relative flex aspect-square size-12 rounded-full border border-border items-center justify-center
                    before:absolute before:-inset-2 before:rounded-full before:border before:border-border/40">
                    <Wrench className="m-auto size-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-poppins mb-1.5">Layanan Lengkap</h3>
                    <p className="text-sm text-muted-foreground">Satu tempat untuk semua kebutuhan servis laptop dan PC Anda.</p>
                  </div>
                </div>
                {/* Service list */}
                <div className="flex flex-col gap-2.5 justify-center">
                  {services.map((s, i) => {
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

          {/* ── Card 5 — 500+ Pelanggan + 98% Sukses ── */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="col-span-full lg:col-span-3"
          >
            <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
              <CardContent className="grid sm:grid-cols-2 gap-6 pt-8 h-full">
                <div className="relative z-10 flex flex-col justify-between gap-8">
                  {/* Icon */}
                  <div className="relative flex aspect-square size-12 rounded-full border border-border items-center justify-center
                    before:absolute before:-inset-2 before:rounded-full before:border before:border-border/40">
                    <Users className="m-auto size-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-poppins mb-1.5">500+ Pelanggan Puas</h3>
                    <p className="text-sm text-muted-foreground">Dipercaya ratusan pelanggan di Padang sejak kami berdiri.</p>
                  </div>
                </div>

                {/* Stats + Avatar */}
                <div className="flex flex-col justify-between gap-4">
                  {/* Circular progress 98% */}
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

                  {/* Avatar stack */}
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

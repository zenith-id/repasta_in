"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Wrench, Users } from "lucide-react";
import { FeatureCard, IconCircle, StatText } from "@/components/common/features";
import {
  avatars,
  chartData,
  chartHighlightIndex,
  servicesData,
} from "@/constants/sections/features";

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
            Kenapa Pilih <span className="text-primary">Repasta?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Standar profesional yang mengutamakan kejujuran, kecepatan, dan
            kualitas kerja.
          </p>
        </motion.div>

        <div className="relative z-10 grid grid-cols-6 gap-3">
          {/* Diagnosa — small centered */}
          <FeatureCard index={0} span="col-span-full lg:col-span-2" centered>
            <span className="text-5xl font-bold text-primary font-poppins mb-3">
              GRATIS
            </span>
            <h3 className="text-2xl font-bold font-poppins text-foreground">
              Diagnosa Gratis
            </h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-[200px]">
              Cek kondisi laptop tanpa biaya, tanpa syarat apapun.
            </p>
          </FeatureCard>

          {/* Garansi — small with icon */}
          <FeatureCard index={1} span="col-span-full sm:col-span-3 lg:col-span-2">
            <IconCircle icon={Shield} size="lg" />
            <StatText
              title="Garansi 6 Bulan"
              desc="Setiap pekerjaan dan spare part dilindungi garansi penuh."
            />
          </FeatureCard>

          {/* Proses — small with chart */}
          <FeatureCard index={2} span="col-span-full sm:col-span-3 lg:col-span-2">
            <div className="px-4 pb-2">
              <div className="flex items-end justify-center gap-1.5 h-20">
                {chartData.map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-5 rounded-t-md bg-primary/20"
                    style={{ height: `${h}%` }}
                    initial={{ scaleY: 0, originY: 1 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                  >
                    {i === chartHighlightIndex && (
                      <div className="w-full h-full rounded-t-md bg-primary" />
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-2 text-[10px] text-muted-foreground/60 font-medium">
                <span>Masuk</span>
                <span>Diagnosa</span>
                <span>Selesai</span>
              </div>
            </div>
            <StatText
              title="Proses < 2 Jam"
              desc="Diagnosa cepat dalam hitungan jam. Anda tahu kondisi perangkat hari itu juga."
            />
          </FeatureCard>

          {/* Layanan — large */}
          <FeatureCard index={3} span="col-span-full lg:col-span-3" variant="large">
            <div className="relative z-10 flex flex-col justify-between gap-8">
              <IconCircle icon={Wrench} size="sm" />
              <StatText
                title="Layanan Lengkap"
                desc="Satu tempat untuk semua kebutuhan servis laptop dan PC Anda."
              />
            </div>
            <div className="flex flex-col gap-2.5 justify-center">
              {servicesData.map((s, i) => {
                const Icon = s.icon;
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
                    <span className="text-sm font-medium text-foreground">
                      {s.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </FeatureCard>

          {/* Pelanggan — large */}
          <FeatureCard index={4} span="col-span-full lg:col-span-3" variant="large">
            <div className="relative z-10 flex flex-col justify-between gap-8">
              <IconCircle icon={Users} size="sm" />
              <StatText
                title="500+ Pelanggan Puas"
                desc="Dipercaya ratusan pelanggan di Bandung sejak kami berdiri."
              />
            </div>
            <div className="flex flex-col justify-between gap-4">
              {/* Success ring */}
              <div className="flex items-center justify-center">
                <div className="relative size-28">
                  <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--card))" strokeWidth="10" />
                    <motion.circle
                      cx="50" cy="50" r="40"
                      fill="none" stroke="hsl(var(--primary))" strokeWidth="10"
                      strokeLinecap="round" strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 * 0.02 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
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
                      key={i} src={src} alt="avatar pelanggan"
                      width={32} height={32}
                      className="w-8 h-8 rounded-full ring-2 ring-background object-cover"
                      loading="lazy" decoding="async"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full ring-2 ring-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                    +
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">& ratusan lainnya</span>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

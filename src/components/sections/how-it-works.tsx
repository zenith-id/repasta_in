"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  CalendarDays,
  CheckCircle2,
  Info,
  Check,
} from "lucide-react";
import { SectionHeader } from "@/components/common/layout";
import { steps, WHATSAPP_LINK } from "@/constants/sections/how-it-works";

export function HowItWorks() {
  return (
    <section
      id="cara-pesan"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Cara Pesan"
          titlePrefix="3 Langkah "
          titleHighlight="Mudah & Cepat"
          desc="Tidak perlu antri lama. Servis profesional langsung hadir untuk Anda."
          variant={1}
          align="center"
          mb="mb-16"
        />

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {!isLast && (
                  <div className="absolute left-[2.35rem] top-[5.5rem] bottom-0 w-px bg-border z-0" />
                )}

                <div className="relative z-10 flex gap-6 pb-10">
                  <div className="flex flex-col items-center gap-0 flex-shrink-0">
                    <span
                      className="block text-[3.5rem] leading-none font-black text-primary/15 font-poppins select-none tabular-nums"
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/25 flex items-center justify-center -mt-1">
                      <Icon size={20} className="text-primary" />
                    </div>
                  </div>

                  <div className="pt-4 flex-1">
                    {i === 1 ? (
                      <div className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-left">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                          <h3 className="text-lg font-bold text-foreground font-poppins">
                            {step.title}
                          </h3>
                          <span className="text-[11px] font-bold text-primary bg-primary/8 border border-primary/15 px-3 py-1 rounded-full whitespace-nowrap">
                            ✓ {step.badge}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {step.desc}
                        </p>

                        <div className="border-t border-dashed border-border/80 my-6" />

                        <div className="space-y-4">
                          <h4 className="text-[11px] font-bold tracking-[0.15em] text-foreground/50 uppercase font-poppins">
                            Jangkauan & Biaya Akomodasi
                          </h4>

                          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-green-500/20 bg-green-500/5 text-green-700 dark:text-green-400 dark:bg-green-500/10 text-sm font-semibold">
                            <Check
                              className="size-4 text-green-700 dark:text-green-400 shrink-0"
                              strokeWidth={3}
                            />
                            <span>
                              Area{" "}
                              <span className="font-bold">Bojongsoang</span> —{" "}
                              <span className="font-bold text-green-800 dark:text-green-300">
                                GRATIS
                              </span>{" "}
                              ongkos
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl border border-border/60 bg-card/25 dark:bg-muted/15 flex flex-col justify-between gap-2.5">
                              <span className="text-[9px] font-bold tracking-wider text-muted-foreground uppercase leading-none">
                                15 KM PERTAMA (LUAR AREA)
                              </span>
                              <span className="text-xl font-bold text-foreground font-poppins">
                                Rp 50.000
                              </span>
                            </div>

                            <div className="p-4 rounded-xl border border-border/60 bg-card/25 dark:bg-muted/15 flex flex-col justify-between gap-2.5">
                              <span className="text-[9px] font-bold tracking-wider text-muted-foreground uppercase leading-none">
                                SELANJUTNYA
                              </span>
                              <span className="text-xl font-bold text-foreground font-poppins">
                                +Rp 10.000{" "}
                                <span className="text-sm font-normal text-muted-foreground">
                                  /km
                                </span>
                              </span>
                            </div>
                          </div>

                          <div className="space-y-3 pt-2">
                            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                              <Info className="size-4 text-primary shrink-0 mt-0.5" />
                              <p>
                                Di luar area Bojongsoang{" "}
                                <span className="font-semibold text-foreground">
                                  hanya tersedia paket Deep Clean
                                </span>
                                .
                              </p>
                            </div>
                            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                              <Check
                                className="size-4 text-primary shrink-0 mt-0.5"
                                strokeWidth={2.8}
                              />
                              <p>
                                Total akomodasi dikonfirmasi sebelum kunjungan —
                                transparan, tanpa biaya kejutan.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <h3 className="text-lg font-bold text-foreground font-poppins">
                            {step.title}
                          </h3>
                          <span className="text-[11px] font-bold text-primary bg-primary/8 border border-primary/15 px-3 py-1 rounded-full whitespace-nowrap">
                            ✓ {step.badge}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
        >
          <a
            href={WHATSAPP_LINK(
              "Halo Repasta! Saya ingin pesan servis laptop.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all text-sm"
          >
            <MessageCircle size={18} />
            Mulai Pesan via WhatsApp
          </a>
          <p className="text-xs text-muted-foreground">
            Senin–Jumat 09.00–18.00 · Sabtu 10.00–15.00
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Clock, MapPin } from "lucide-react";

import { WHATSAPP_LINK, ctaContent } from "@/constants/sections/cta";

export function CTA() {
  const { badge, headline, subtext, cta: ctaItem, hours } = ctaContent;

  return (
    <section id="kontak" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-foreground">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border bg-primary/15 border-primary/30 text-card">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {badge.text}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-background mb-6 leading-tight">
            {headline.prefix}
            <br className="hidden sm:block" />
            <span className="text-primary">{headline.highlight}</span>
          </h2>

          <p className="text-lg text-card/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtext}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href={WHATSAPP_LINK(ctaItem.primary.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground font-semibold rounded-xl hover:bg-background/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-background/15 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              {ctaItem.primary.text}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href={ctaItem.secondary.href}
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-card font-semibold rounded-xl hover:border-primary hover:bg-primary/10 transition-all w-full sm:w-auto justify-center"
            >
              {ctaItem.secondary.text}
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-0 px-6 py-3.5 rounded-2xl border bg-primary/5 border-primary/10 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            <div className="flex items-center gap-2 sm:pr-6 text-card/85">
              <Clock size={16} className="text-primary shrink-0" />
              <span>
                <strong className="font-semibold text-card">Jam:</strong> Sen–Jum 09–18 · Sab 10–15
              </span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-primary/20" />
            <div className="flex items-center gap-2 sm:pl-6 text-card/85">
              <MapPin size={16} className="text-primary shrink-0" />
              <span>
                <strong className="font-semibold text-card">Bojongsoang, Bandung</strong>
              </span>
              <a
                href="https://maps.app.goo.gl/6wkYfFzpS8EjyJ4p8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-2 inline-flex items-center gap-0.5 whitespace-nowrap"
              >
                Lihat di Maps ↗
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

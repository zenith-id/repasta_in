"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useWaveCanvas } from "@/hooks/use-wave-canvas";
import { StatItem } from "@/components/common/layout";
import {
  heroContent,
  containerVariants,
  itemVariants,
  statsData,
} from "@/constants/layout/hero";
import { HeroStatusBadge } from "@/components/common/hero/hero-status-badge";

export function Hero() {
  const canvasRef = useWaveCanvas();
  const { headline, subtext, cta, highlightPills } = heroContent;

  return (
    <section id="hero" className="relative min-h-[95vh] w-full overflow-hidden flex items-center justify-center">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />

      {/* Noise */}
      <div
        className="absolute inset-0 z-1 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 blur-[140px] rounded-full opacity-30 animate-pulse-glow z-0 pointer-events-none" />

      {/* Content */}
      <div className="container-section relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <HeroStatusBadge kicker={highlightPills.join(" • ")} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 font-extrabold tracking-tight text-foreground font-poppins"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
              lineHeight: 1.05,
            }}
          >
            {headline.prefix}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-primary to-foreground bg-clip-text text-transparent drop-shadow-sm">
                {headline.highlight}
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 h-1.5 w-full bg-primary/20 rounded-full blur-sm"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-foreground/65 leading-relaxed font-medium px-4"
          >
            {subtext.prefix}
            <span className="text-foreground">{subtext.highlight}</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={cta.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-1 active:translate-y-0 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <MessageCircle className="h-5 w-5 relative z-10" />
              <span className="relative z-10">{cta.primary.text}</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={cta.secondary.href}
              className="inline-flex items-center gap-2 rounded-2xl border border-foreground/10 bg-background/40 px-8 py-4 text-sm font-bold text-foreground/80 backdrop-blur-md hover:bg-background/80 hover:border-primary/40 hover:text-primary transition-all active:scale-95"
            >
              {cta.secondary.text}
            </a>
          </motion.div>


          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/10 backdrop-blur-md"
          >
            {statsData.map((s, i) => (
              <div
                key={i}
                className="bg-background/70 p-6 sm:p-8 hover:bg-background/50 transition-colors group border-b md:border-b-0 last:border-0 border-foreground/5"
              >
                <StatItem {...s} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

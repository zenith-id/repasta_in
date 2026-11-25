"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useWaveCanvas } from "@/hooks/use-wave-canvas";
import { StatItem } from "@/components/shared";
import { heroContent, statsData } from "@/constants/layout/hero";
import { HeroStatusBadge } from "@/components/common/hero/hero-status-badge";
import { trackWhatsAppClick } from "@/lib/analytics";

export function Hero() {
  const canvasRef = useWaveCanvas();
  const { headline, subtext, cta, highlightPills } = heroContent;

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] w-full overflow-hidden flex items-center justify-center"
    >
    

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 blur-[140px] rounded-full opacity-30 animate-pulse-glow z-0 pointer-events-none" />

      {/* Content */}
      <div className="container-section relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Status Badge */}
          <div className="flex justify-center">
            <HeroStatusBadge kicker={highlightPills.join(" • ")} />
          </div>

          {/* Headline — plain h1, no motion variants (SSR must be visible for SEO) */}
          <h1
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
              <motion.span
                className="absolute -bottom-2 left-0 h-1.5 w-full bg-primary/20 rounded-full blur-sm"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-foreground/75 leading-relaxed font-medium px-4">
            {subtext.prefix}
            <span className="text-foreground">{subtext.highlight}</span>
          </p>

          {/* CTA */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={cta.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ location: "hero" })}
              className="group relative inline-flex items-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-1 active:translate-y-0 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <MessageCircle className="h-5 w-5 relative z-10" />
              <span className="relative z-10">{cta.primary.text}</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href={cta.secondary.href}
              className="inline-flex items-center gap-2 rounded-2xl border border-foreground/10 bg-background/40 px-8 py-4 text-sm font-bold text-foreground/80 backdrop-blur-md hover:bg-background/80 hover:border-primary/40 hover:text-primary transition-all active:scale-95"
            >
              {cta.secondary.text}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-px rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/10 backdrop-blur-md">
            {statsData.map((s, i) => (
              <div
                key={i}
                className="bg-background/70 p-3 sm:p-8 flex items-center justify-center hover:bg-background/50 transition-colors group"
              >
                <StatItem {...s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

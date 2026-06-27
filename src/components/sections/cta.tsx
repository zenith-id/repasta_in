"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion/animations";
import { CTABadge, CTAButtons, CTAInfo } from "@/components/common/cta";
import { ctaContent } from "@/constants/sections/cta";

export function CTA() {
  const { badge, headline, subtext, cta, hours, location } = ctaContent;

  return (
    <section
      id="kontak"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-foreground"
    >
      {/* Background grid */}
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

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CTABadge text={badge.text} />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-background mb-6 leading-tight">
            {headline.prefix}
            <br className="hidden sm:block" />
            <span className="text-primary">{headline.highlight}</span>
          </h2>

          <p className="text-lg text-card/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtext}
          </p>

          <CTAButtons text={cta.text} href={cta.href} />

          <CTAInfo hours={hours} location={location} />
        </motion.div>
      </div>
    </section>
  );
}

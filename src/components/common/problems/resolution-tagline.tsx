"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/motion/animations";
import { resolutionTagline } from "@/constants/sections/problem-awareness";

export function ResolutionTagline() {
  const { heading, description, highlight, ctaLabel, ctaHref } =
    resolutionTagline;

  return (
    <motion.div
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 rounded-2xl bg-foreground text-background"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <p className="text-sm leading-relaxed max-w-lg opacity-90">
        <span className="font-bold text-base block mb-0.5">{heading}</span>
        {description} <strong>{highlight}</strong>
      </p>
      <a
        href={ctaHref}
        className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-background/30 text-background font-semibold rounded-xl text-sm hover:bg-background/10 transition-all whitespace-nowrap"
      >
        {ctaLabel}
        <ArrowRight size={14} />
      </a>
    </motion.div>
  );
}

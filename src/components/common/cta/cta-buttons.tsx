"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ctaButtonsVariants } from "@/lib/motion/animations";

interface CTAButtonsProps {
  primary: {
    text: string;
    href: string;
  };
  secondary: {
    text: string;
    href: string;
  };
}

export function CTAButtons({ primary, secondary }: CTAButtonsProps) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
      variants={ctaButtonsVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <a
        href={primary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground font-semibold rounded-xl hover:bg-background/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-background/15 w-full sm:w-auto justify-center"
      >
        <MessageCircle size={20} />
        {primary.text}
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>

      <a
        href={secondary.href}
        className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-card font-semibold rounded-xl hover:border-primary hover:bg-primary/10 transition-all w-full sm:w-auto justify-center"
      >
        {secondary.text}
        <ArrowRight size={16} />
      </a>
    </motion.div>
  );
}

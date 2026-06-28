"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/motion/animations";

interface CTAButtonsProps {
  text: string;
  href: string;
}

export function CTAButtons({ text, href }: CTAButtonsProps) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground font-semibold rounded-xl hover:bg-background/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-background/15 w-full sm:w-auto justify-center"
      >
        <MessageCircle size={20} />
        {text}
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </motion.div>
  );
}

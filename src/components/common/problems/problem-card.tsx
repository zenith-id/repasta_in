"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion/animations";

interface ProblemCardProps {
  num: string;
  emoji: string;
  title: string;
  desc: string;
  index: number;
}

export function ProblemCard({ num, emoji, title, desc, index }: ProblemCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.09 }}
      className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/35 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
    >
      {/* Giant background number */}
      <span
        className="absolute top-3 right-4 text-6xl font-black text-foreground/4 font-poppins select-none leading-none"
        aria-hidden="true"
      >
        {num}
      </span>

      {/* Hover glow */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/2 transition-colors duration-300 rounded-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <span className="text-2xl mb-3 block">{emoji}</span>
        <h3 className="font-bold text-foreground mb-2 font-poppins leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

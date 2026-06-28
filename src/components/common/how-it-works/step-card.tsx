"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { staggeredFadeUp } from "@/lib/motion/animations";

interface StepCardProps {
  num: string;
  icon: LucideIcon;
  index: number;
  isLast: boolean;
  children: React.ReactNode;
}

export function StepCard({
  num,
  icon: Icon,
  index,
  isLast,
  children,
}: StepCardProps) {
  return (
    <motion.div
      className="relative"
      custom={index}
      variants={staggeredFadeUp({ y: 32, duration: 0.6, stagger: 0.15 })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-[2.35rem] top-[5.5rem] bottom-0 w-px bg-border z-0" />
      )}

      <div className="relative z-10 flex gap-6 pb-10">
        {/* Step number + icon */}
        <div className="flex flex-col items-center gap-0 flex-shrink-0">
          <span
            className="block text-[3.5rem] leading-none font-black text-primary/15 font-poppins select-none tabular-nums"
            aria-hidden="true"
          >
            {num}
          </span>
          <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/25 flex items-center justify-center -mt-1">
            <Icon size={20} className="text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="pt-4 flex-1">{children}</div>
      </div>
    </motion.div>
  );
}

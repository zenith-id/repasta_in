"use client";

import { motion } from "framer-motion";
import { serviceRowVariants } from "@/lib/motion/animations";

interface ServiceRowProps {
  name: string;
  desc: string;
  price: string;
  popular: boolean;
  index: number;
}

export function ServiceRow({
  name,
  desc,
  price,
  popular,
  index,
}: ServiceRowProps) {
  return (
    <motion.div
      custom={index}
      variants={serviceRowVariants}
      initial="hidden"
      animate="visible"
      className="group flex items-center justify-between gap-4 py-5 px-6 hover:bg-primary/2 transition-colors"
    >
      <div className="flex flex-col min-w-0 text-left">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-bold text-foreground text-sm sm:text-base font-poppins">
            {name}
          </p>
          {popular && (
            <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded bg-primary text-primary-foreground text-[9px] font-extrabold tracking-wider uppercase">
              POPULER
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1">
          {desc}
        </p>
      </div>
      <span
        className={`shrink-0 font-bold text-sm sm:text-base font-poppins whitespace-nowrap ${
          price === "Hubungi Kami" ? "text-foreground/60" : "text-primary"
        }`}
      >
        {price}
      </span>
    </motion.div>
  );
}

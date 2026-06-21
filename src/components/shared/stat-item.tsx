"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";

interface StatItemProps {
  label: string;
  target: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

export function StatItem({
  label,
  target,
  prefix = "",
  suffix = "",
  delay = 0,
}: StatItemProps) {
  const { count, ref } = useCountUp(target, 1.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="space-y-1 text-center"
    >
      <div className="text-[10px] uppercase tracking-[0.28em] text-foreground/45 font-medium">
        {label}
      </div>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="text-2xl sm:text-3xl font-bold text-foreground font-poppins tabular-nums"
      >
        {prefix}
        {count}
        {suffix}
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { speedCard } from "@/constants/sections/features";
import { barGrowVariants } from "@/lib/motion/animations";
import { FeatureCard } from "./feature-card";

export function SpeedCard() {
  const { icon: Icon, tag, title, desc, bars, chartLabels } = speedCard;

  return (
    <FeatureCard
      index={1}
      span="col-span-full md:col-span-1"
      className="p-6 md:p-8 h-full flex flex-col text-left"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-primary mb-4">
            <Icon className="size-4" strokeWidth={2.2} />
            <span>{tag}</span>
          </div>
          <h3 className="text-xl font-bold font-poppins text-foreground mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>

        <div className="mt-8">
          <div className="flex items-end gap-1.5 h-20">
            {bars.map((h, i) => {
              const isLast = i === bars.length - 1;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={barGrowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`flex-1 rounded-t-md ${
                    isLast
                      ? "bg-primary shadow-md shadow-primary/20"
                      : "bg-primary/20 hover:bg-primary/30 transition-colors"
                  }`}
                  style={{ height: `${h}%` }}
                />
              );
            })}
          </div>
          <div className="flex justify-between text-[11px] font-medium text-muted-foreground/60 mt-2">
            {chartLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </FeatureCard>
  );
}

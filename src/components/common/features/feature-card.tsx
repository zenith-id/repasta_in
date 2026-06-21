"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { featureFadeUp } from "@/lib/motion/animations";
import type { ReactNode } from "react";

interface FeatureCardProps {
  index: number;
  span: string;
  variant?: "small" | "large";
  centered?: boolean;
  children: ReactNode;
  glowClass?: string;
  className?: string;
}

export function FeatureCard({
  index,
  span,
  variant = "small",
  centered,
  children,
  glowClass = "top-0 right-0 w-32 h-32",
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      custom={index}
      variants={featureFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={span}
    >
      <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
        <CardContent
          className={
            className ||
            (variant === "large"
              ? "grid sm:grid-cols-2 gap-6 pt-8 h-full"
              : "flex flex-col items-center pt-8 text-center")
          }
        >
          {children}
        </CardContent>
        <div
          className={`${glowClass} bg-primary/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none absolute`}
        />
      </Card>
    </motion.div>
  );
}

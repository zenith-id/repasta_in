"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/constants/sections/features";
import type { LucideIcon, ReactNode } from "lucide-react";

/* ── FeatureCard ──────────────────────────────────────────── */

interface FeatureCardProps {
  index: number;
  span: string;
  variant?: "small" | "large";
  centered?: boolean;
  children: ReactNode;
  glowClass?: string;
}

export function FeatureCard({
  index,
  span,
  variant = "small",
  centered,
  children,
  glowClass = "top-0 right-0 w-32 h-32",
}: FeatureCardProps) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={span}
    >
      <Card className="relative overflow-hidden h-full border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group">
        <CardContent
          className={
            variant === "large"
              ? "grid sm:grid-cols-2 gap-6 pt-8 h-full"
              : "flex flex-col items-center pt-8 text-center"
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

/* ── Small variant building blocks ────────────────────────── */

interface IconCircleProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
}

const circleDims = { sm: "size-12", md: "size-20", lg: "size-28" } as const;
const iconDims = { sm: "size-5", md: "size-8", lg: "h-12 w-12" } as const;

export function IconCircle({ icon: Icon, size = "md" }: IconCircleProps) {
  return (
    <div
      className={`relative mx-auto flex aspect-square ${circleDims[size]} rounded-full border border-border items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border before:border-border/40`}
    >
      <Icon
        className={`m-auto ${iconDims[size]} text-primary`}
        strokeWidth={1.5}
      />
    </div>
  );
}

interface StatTextProps {
  title: string;
  desc: string;
}

export function StatText({ title, desc }: StatTextProps) {
  return (
    <div className="space-y-1.5 mt-7">
      <h3 className="text-lg font-bold text-foreground font-poppins">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

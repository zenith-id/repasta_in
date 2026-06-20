"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { avatars, socialProofCard } from "@/constants/sections/features";
import { FeatureCard } from "./feature-card";

export function SocialProofCard() {
  const { icon: Icon, tag, title, quote, successRate, successLabel, ctaLabel } =
    socialProofCard;

  return (
    <FeatureCard
      index={3}
      span="col-span-full"
      className="p-6 md:p-8 h-full flex flex-col justify-center text-left"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
        {/* Ring */}
        <div className="relative size-32 shrink-0 flex items-center justify-center">
          <svg className="size-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--background))" strokeWidth="10" />
            <motion.circle
              cx="50" cy="50" r="40"
              fill="none" stroke="hsl(var(--primary))" strokeWidth="10"
              strokeLinecap="round" strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              whileInView={{ strokeDashoffset: 251.2 * (1 - successRate / 100) }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold text-foreground font-poppins tracking-tight">
              {successRate}%
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
              {successLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-primary mb-3">
            <Icon className="size-4" strokeWidth={2.2} />
            <span>{tag}</span>
          </div>
          <h3 className="text-2xl font-bold font-poppins text-foreground mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-foreground/80 italic border-l-3 border-primary pl-4 my-4 leading-relaxed font-medium">
            &ldquo;{quote}&rdquo;
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <div className="flex -space-x-2.5">
              {avatars.map((src, i) => (
                <Image
                  key={i} src={src} alt="avatar pelanggan"
                  width={38} height={38}
                  className="w-[38px] h-[38px] rounded-full ring-2 ring-card object-cover"
                  loading="lazy" decoding="async"
                />
              ))}
              <div className="w-[38px] h-[38px] rounded-full ring-2 ring-card bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground select-none">
                +
              </div>
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              {ctaLabel}
            </span>
          </div>
        </div>
      </div>
    </FeatureCard>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star, MapPin, CheckCircle2 } from "lucide-react";
import { googleReviewCard } from "@/constants/sections/testimonials";
import { googleCardVariants } from "@/lib/motion/animations";

export function GoogleReviewCard() {
  const {
    badge,
    rating,
    ratingText,
    copywriting,
    writeReviewUrl,
    viewReviewsUrl,
  } = googleReviewCard;

  return (
    <motion.div
      variants={googleCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-4xl mx-auto mt-16 p-8 sm:p-10 bg-background border border-border/80 rounded-[32px] shadow-lg shadow-foreground/5 relative overflow-hidden text-center z-10"
    >
      {/* Top Badge */}
      <div className="section-tag mb-8">
        <CheckCircle2 size={14} className="shrink-0" />
        {badge}
      </div>

      {/* Google Rating Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
        <div className="flex items-center gap-3">
          <span className="font-poppins font-bold text-4xl tracking-tight select-none">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
          <span className="text-4xl font-extrabold font-poppins text-foreground">
            {rating}
          </span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-[#FBBF24] text-[#FBBF24] shrink-0"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground mt-1 font-medium">
            {ratingText}
          </span>
        </div>
      </div>

      {/* Copywriting */}
      <p className="text-base text-foreground/75 max-w-2xl mx-auto leading-relaxed">
        {copywriting.prefix}
        <strong className="font-semibold text-foreground">
          {copywriting.highlight1}
        </strong>
        {copywriting.middle}
        <strong className="font-semibold text-foreground">
          {copywriting.highlight2}
        </strong>
        .
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <a
          href={writeReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/95 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all text-sm cursor-pointer"
        >
          <Star size={16} className="shrink-0" />
          Tulis Ulasan di Google
        </a>

        <a
          href={viewReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-foreground/10 bg-background/50 hover:bg-background text-foreground/80 hover:text-primary hover:border-primary/40 font-bold rounded-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm cursor-pointer"
        >
          <MapPin size={16} className="shrink-0" />
          Lihat Semua Ulasan
        </a>
      </div>
    </motion.div>
  );
}

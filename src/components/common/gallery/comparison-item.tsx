"use client";

import { motion } from "framer-motion";
import { ImageComparison } from "@/components/ui/image-comparison-slider";
import { staggeredFadeUp } from "@/lib/motion/animations";
import { galleryComparisons } from "@/constants/sections/gallery";

interface ComparisonItemProps {
  comparison: (typeof galleryComparisons)[number];
  index: number;
}

export function ComparisonItem({ comparison, index }: ComparisonItemProps) {
  return (
    <motion.div
      custom={index}
      variants={staggeredFadeUp({ y: 24, duration: 0.5, stagger: 0.15 })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p className="text-center text-sm font-semibold text-muted-foreground mb-4">
        {comparison.label}
      </p>
      <ImageComparison
        beforeImage={comparison.before}
        afterImage={comparison.after}
        altBefore={`${comparison.label} — Before`}
        altAfter={`${comparison.label} — After`}
      />
    </motion.div>
  );
}

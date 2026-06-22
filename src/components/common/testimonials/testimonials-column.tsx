"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "./testimonial-card";
import type { Testimonial } from "@/constants/sections/testimonials";

interface TestimonialsColumnProps {
  className?: string;
  items: readonly Testimonial[];
  duration?: number;
}

export function TestimonialsColumn({
  className,
  items,
  duration = 30,
}: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5 list-none m-0 p-0"
      >
        {[0, 1].map((pass) => (
          <React.Fragment key={pass}>
            {items.map((t, i) => (
              <TestimonialCard
                key={`${pass}-${i}`}
                testimonial={t}
                isDuplicate={pass === 1}
              />
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
}

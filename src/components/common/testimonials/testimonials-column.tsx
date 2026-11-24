"use client";

import React, { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "./testimonial-card";
import type { Testimonial } from "@/constants/sections/testimonials";

interface TestimonialsColumnProps {
  className?: string;
  items: readonly Testimonial[];
  duration?: number;
}

function subscribe(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

export function TestimonialsColumn({
  className,
  items,
  duration = 30,
}: TestimonialsColumnProps) {
  const reducedMotion = useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  if (reducedMotion) {
    return (
      <div className={className}>
        <ul className="flex flex-col gap-5 pb-5 list-none m-0 p-0">
          {items.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </ul>
      </div>
    );
  }

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

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonialCardHover } from "@/lib/motion/animations";
import type { Testimonial } from "@/constants/sections/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  isDuplicate?: boolean;
}

export function TestimonialCard({
  testimonial,
  isDuplicate = false,
}: TestimonialCardProps) {
  return (
    <motion.li
      aria-hidden={isDuplicate ? "true" : "false"}
      tabIndex={isDuplicate ? -1 : 0}
      {...testimonialCardHover}
      className="p-7 rounded-2xl border border-border bg-background shadow-md shadow-foreground/5 max-w-xs w-full cursor-default select-none group"
    >
      <blockquote className="m-0 p-0">
        <p className="text-foreground/70 leading-relaxed text-sm m-0">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <footer className="flex items-center gap-3 mt-5">
          <Image
            width={40}
            height={40}
            src={testimonial.image}
            alt={`Avatar ${testimonial.name}`}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/40 transition-all duration-300"
            loading="lazy"
            decoding="async"
          />
          <div className="flex flex-col">
            <cite className="font-semibold not-italic tracking-tight leading-5 text-foreground text-sm font-poppins">
              {testimonial.name}
            </cite>
            {testimonial.role && (
              <span className="text-xs leading-5 text-muted-foreground mt-0.5">
                {testimonial.role}
              </span>
            )}
          </div>
        </footer>
      </blockquote>
    </motion.li>
  );
}

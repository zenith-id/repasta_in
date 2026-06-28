"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import {
  TestimonialsColumn,
  GoogleReviewCard,
} from "@/components/common/testimonials";
import { testimonialsSectionVariants } from "@/lib/motion/animations";
import { col1, col2, col3, header } from "@/constants/sections/testimonials";

export function Testimonials() {
  return (
    <section
      id="testimoni"
      aria-labelledby="testimoni-heading"
      className="bg-card py-24 relative overflow-hidden"
    >
      <motion.div
        variants={testimonialsSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="container px-4 z-10 mx-auto"
      >
        {/* Header */}
        <SectionHeader
          badge="Testimoni"
          titlePrefix="Kata Pelanggan "
          titleHighlight="Kami"
          desc={header.subtitle}
          variant={2}
          animate={false}
          id="testimoni-heading"
          mb="mb-16"
        />

        {/* Scrolling columns */}
        <div
          className="flex justify-center gap-5 mt-10 max-h-[740px] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
          }}
          role="region"
          aria-label="Testimoni pelanggan"
        >
          <TestimonialsColumn items={col1} duration={60} />
          <TestimonialsColumn
            items={col2}
            className="hidden md:block"
            duration={45}
          />
          <TestimonialsColumn
            items={col3}
            className="hidden lg:block"
            duration={45}
          />
        </div>

        {/* Google Reviews Card */}
        <GoogleReviewCard />
      </motion.div>
    </section>
  );
}

"use client";

import { useRef, type RefObject } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { ComparisonItem, GalleryTrail } from "@/components/common/gallery";
import { ImageGallery } from "@/components/ui/image-gallery";
import { WHATSAPP_LINK } from "@/constants/contact";
import {
  galleryHeader,
  galleryCta,
  galleryMasonryItems,
  galleryComparisons,
} from "@/constants/sections/gallery";
import { fadeIn } from "@/lib/motion/animations";

export function Gallery() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="galeri"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with ImageTrail */}
        <div ref={containerRef} className="relative mb-16">
          <GalleryTrail
            containerRef={containerRef as RefObject<HTMLElement>}
          />
          <SectionHeader
            badge={galleryHeader.tag}
            titlePrefix={galleryHeader.titlePrefix}
            titleHighlight={galleryHeader.titleHighlight}
            desc={galleryHeader.subtitle}
            variant={2}
          />
        </div>

        {/* Masonry Gallery */}
        <div className="mb-16">
          <ImageGallery items={galleryMasonryItems} />
        </div>

        {/* Before/After Comparisons */}
        <div className="space-y-8">
          {galleryComparisons.map((comp, i) => (
            <ComparisonItem key={comp.id} comparison={comp} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.p
          className="text-center mt-12 text-muted-foreground text-sm"
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryCta.prefix}
          <a
            href={WHATSAPP_LINK(galleryCta.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline underline-offset-4"
          >
            {galleryCta.linkText}
          </a>
        </motion.p>
      </div>
    </section>
  );
}

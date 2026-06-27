"use client";

import { type RefObject } from "react";
import { ImageTrail } from "@/components/ui/image-trail";
import { galleryTrailImages } from "@/constants/sections/gallery";

interface GalleryTrailProps {
  containerRef: RefObject<HTMLElement>;
}

export function GalleryTrail({ containerRef }: GalleryTrailProps) {
  return (
    <ImageTrail containerRef={containerRef} interval={120}>
      {galleryTrailImages.map((src, i) => (
        <div
          key={i}
          className="w-24 h-28 sm:w-32 sm:h-36 rounded-xl overflow-hidden"
        >
          <img
            src={src}
            alt={`trail-${i}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </ImageTrail>
  );
}

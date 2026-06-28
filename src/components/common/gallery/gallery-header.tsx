"use client";

import { type RefObject } from "react";
import dynamic from "next/dynamic";

const ImageTrail = dynamic(
  () => import("@/components/ui/image-trail").then((m) => m.ImageTrail)
);
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

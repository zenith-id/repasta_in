"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { GalleryItem } from "@/constants/sections/gallery";

interface ImageGalleryProps {
  items: GalleryItem[];
  className?: string;
}

export function ImageGallery({ items, className }: ImageGalleryProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleCount = showAll ? items.length : Math.ceil(items.length / 2);
  const visibleItems = items.slice(0, visibleCount);

  const ratios = useMemo(
    () => visibleItems.map((_, i) => (i % 3 === 0 ? 9 / 16 : 16 / 9)),
    [visibleItems.length],
  );

  const cols: GalleryItem[][] = [[], [], []];
  visibleItems.forEach((img, i) => {
    cols[i % 3].push(img);
  });

  return (
    <div className={cn("space-y-8", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cols.map((col, colIdx) => (
          <div key={colIdx} className="grid gap-4">
            {col.map((item, imgIdx) => {
              const globalIdx =
                colIdx * visibleItems.length +
                (visibleItems.indexOf(item) % visibleItems.length);
              return (
                <AnimatedImage
                  key={`${colIdx}-${imgIdx}`}
                  item={item}
                  ratio={ratios[globalIdx % ratios.length]}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="btn-secondary"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

interface AnimatedImageProps {
  item: GalleryItem;
  ratio: number;
}

function AnimatedImage({ item, ratio }: AnimatedImageProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [loaded, setLoaded] = React.useState(false);

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className="bg-accent relative size-full overflow-hidden rounded-xl border border-border group"
    >
      <Image
        alt={item.label}
        src={item.src}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={cn(
          "object-cover transition-all duration-700 ease-out",
          isInView && loaded ? "opacity-100 scale-100" : "opacity-0 scale-95",
        )}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        decoding="async"
      />
      {(!isInView || !loaded) && (
        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent" />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

      <p className="absolute bottom-3 left-3 right-3 text-background text-sm font-semibold leading-tight z-10 drop-shadow">
        {item.label}
      </p>
    </AspectRatio>
  );
}

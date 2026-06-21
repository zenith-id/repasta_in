"use client";

import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { ctaInfoVariants } from "@/lib/motion/animations";

interface CTAInfoProps {
  hours: {
    weekday: string;
    saturday: string;
  };
  location: {
    area: string;
    mapsUrl: string;
  };
}

export function CTAInfo({ hours, location }: CTAInfoProps) {
  return (
    <motion.div
      className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-0 px-6 py-3.5 rounded-2xl border bg-primary/5 border-primary/10 text-sm"
      variants={ctaInfoVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 sm:pr-6 text-card/85">
        <Clock size={16} className="text-primary shrink-0" />
        <span>
          <strong className="font-semibold text-card">Jam:</strong>{" "}
          {hours.weekday} · {hours.saturday}
        </span>
      </div>
      <div className="hidden sm:block h-4 w-px bg-primary/20" />
      <div className="flex items-center gap-2 sm:pl-6 text-card/85">
        <MapPin size={16} className="text-primary shrink-0" />
        <span>
          <strong className="font-semibold text-card">{location.area}</strong>
        </span>
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline ml-2 inline-flex items-center gap-0.5 whitespace-nowrap"
        >
          Lihat di Maps ↗
        </a>
      </div>
    </motion.div>
  );
}

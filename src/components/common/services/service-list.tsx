"use client";

import { motion, AnimatePresence } from "framer-motion";
import { tabContentVariants } from "@/lib/motion/animations";
import { ServiceRow } from "./service-row";

interface ServiceItem {
  name: string;
  desc: string;
  price: string;
  popular: boolean;
}

interface ServiceListProps {
  activeKey: string;
  services: readonly ServiceItem[];
}

export function ServiceList({ activeKey, services }: ServiceListProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        initial={tabContentVariants.initial}
        animate={tabContentVariants.animate}
        exit={tabContentVariants.exit}
        transition={tabContentVariants.transition}
        className="rounded-2xl border border-border bg-white dark:bg-card overflow-hidden shadow-sm"
      >
        {/* List header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-border bg-card dark:bg-muted/40">
          <span className="text-xs font-bold text-foreground/50 uppercase tracking-widest font-poppins">
            Layanan
          </span>
          <span className="text-xs font-bold text-foreground/50 uppercase tracking-widest font-poppins">
            Harga
          </span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-border/60">
          {services.map((svc, i) => (
            <ServiceRow key={svc.name} {...svc} index={i} />
          ))}
        </div>

        {/* Footnote */}
        <div className="flex flex-col gap-2.5 px-6 py-5 bg-card/45 dark:bg-muted/20 border-t border-border/60 text-left">
          <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed">
            <span className="text-primary font-bold shrink-0">✓</span>
            <p>
              <span className="font-semibold">*</span> Setiap layanan{" "}
              <span className="font-bold text-foreground">repaste</span> sudah
              termasuk{" "}
              <span className="font-bold text-foreground">
                cleaning bagian kipas
              </span>
              .
            </p>
          </div>
          <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed">
            <span className="text-primary font-bold shrink-0">✓</span>
            <p>
              Setiap layanan{" "}
              <span className="font-bold text-foreground">
                repaste & deep clean
              </span>{" "}
              sudah termasuk{" "}
              <span className="font-bold text-foreground">
                checkup device
              </span>{" "}
              menyeluruh.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Monitor, Star, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/common/layout";

import {
  laptopServices,
  paketLaptopServices,
  pcServices,
  servicesHeader,
  note,
  tabsData,
  WHATSAPP_LINK,
} from "@/constants/sections/services";

function ServiceRow({
  name,
  desc,
  price,
  popular,
  index,
}: {
  name: string;
  desc: string;
  price: string;
  popular: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group flex items-center justify-between gap-4 py-5 px-6 hover:bg-primary/2 transition-colors"
    >
      <div className="flex flex-col min-w-0 text-left">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-bold text-foreground text-sm sm:text-base font-poppins">
            {name}
          </p>
          {popular && (
            <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded bg-primary text-primary-foreground text-[9px] font-extrabold tracking-wider uppercase">
              POPULER
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1">
          {desc}
        </p>
      </div>
      <span
        className={`shrink-0 font-bold text-sm sm:text-base font-poppins whitespace-nowrap ${
          price === "Hubungi Kami" ? "text-foreground/60" : "text-primary"
        }`}
      >
        {price}
      </span>
    </motion.div>
  );
}

export function Services() {
  const [active, setActive] = useState<"laptop" | "paket_laptop" | "pc">(
    "laptop",
  );

  return (
    <section
      id="layanan"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background content-visibility-auto"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <SectionHeader
          badge={servicesHeader.tag}
          titlePrefix="Harga Transparan, "
          titleHighlight="Tanpa Biaya Tersembunyi"
          desc={servicesHeader.subtitle}
          variant={1}
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-2xl bg-card border border-border gap-1">
            {tabsData.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === id
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "text-foreground/60 hover:text-foreground hover:bg-background/60"
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Service List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
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

            <div className="divide-y divide-border/60">
              {(active === "laptop"
                ? laptopServices
                : active === "paket_laptop"
                  ? paketLaptopServices
                  : pcServices
              ).map((svc, i) => (
                <ServiceRow key={svc.name} {...svc} index={i} />
              ))}
            </div>

            {/* Footnote */}
            <div className="flex flex-col gap-2.5 px-6 py-5 bg-card/45 dark:bg-muted/20 border-t border-border/60 text-left">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                <span className="text-primary font-bold shrink-0">✓</span>
                <p>
                  <span className="font-semibold">*</span> Setiap layanan{" "}
                  <span className="font-bold text-foreground">repaste</span> sudah termasuk{" "}
                  <span className="font-bold text-foreground">cleaning bagian kipas</span>.
                </p>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                <span className="text-primary font-bold shrink-0">✓</span>
                <p>
                  Setiap layanan{" "}
                  <span className="font-bold text-foreground">repaste & deep clean</span> sudah termasuk{" "}
                  <span className="font-bold text-foreground">checkup device</span> menyeluruh.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Note + CTA */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-primary/6 border border-primary/15"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-foreground/70 text-center sm:text-left">
            {note.text}
            <span className="text-foreground font-medium">
              {note.highlight}
            </span>{" "}
            {note.detail}
          </p>
          <a
            href={WHATSAPP_LINK(note.cta.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl text-sm hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 transition-all"
          >
            <MessageCircle size={15} />
            {note.cta.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeader } from "@/components/common/layout";
import { faqs } from "@/constants/sections/faq";

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.06 }}
      className="border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-background hover:bg-card/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground pr-4 font-poppins text-sm sm:text-base">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={18}
            className={open ? "text-primary" : "text-muted-foreground"}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/50 bg-card/30">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          icon={HelpCircle}
          badge="FAQ"
          titlePrefix="Pertanyaan yang"
          titleHighlight="Sering Ditanyakan"
          desc="Tidak menemukan jawaban? Tanya langsung via WhatsApp."
          variant={3}
        />

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

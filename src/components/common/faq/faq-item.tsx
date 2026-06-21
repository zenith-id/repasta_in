"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  faqItemVariants,
  faqExpandVariants,
  faqChevronVariants,
} from "@/lib/motion/animations";

interface FAQItemProps {
  q: string;
  a: string;
  index: number;
}

export function FAQItem({ q, a, index }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={faqItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
          animate={open ? "expanded" : "collapsed"}
          variants={faqChevronVariants}
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
            initial={faqExpandVariants.collapsed}
            animate={faqExpandVariants.expanded}
            exit={faqExpandVariants.collapsed}
            transition={faqExpandVariants.transition}
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

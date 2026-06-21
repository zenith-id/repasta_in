"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { howItWorksCTAVariants } from "@/lib/motion/animations";
import { WHATSAPP_LINK } from "@/constants/sections/how-it-works";

export function HowItWorksCTA() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full"
      variants={howItWorksCTAVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <a
        href={WHATSAPP_LINK(
          "Halo Repasta! Saya ingin pesan servis laptop.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all text-sm"
      >
        <MessageCircle size={18} />
        Mulai Pesan via WhatsApp
      </a>
      <p className="text-xs text-muted-foreground">
        Senin–Jumat 09.00–18.00 · Sabtu 10.00–15.00
      </p>
    </motion.div>
  );
}

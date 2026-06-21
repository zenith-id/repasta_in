"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { serviceNoteVariants } from "@/lib/motion/animations";
import { note, WHATSAPP_LINK } from "@/constants/sections/services";

export function ServiceCTA() {
  return (
    <motion.div
      className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-primary/6 border border-primary/15"
      variants={serviceNoteVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p className="text-sm text-foreground/70 text-center sm:text-left">
        {note.text}
        <span className="text-foreground font-medium">{note.highlight}</span>{" "}
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
  );
}

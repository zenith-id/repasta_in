"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { fadeInUp } from "@/lib/motion/animations";

interface FooterBrandProps {
  name: string;
  desc: string;
  waConsultLink: string;
}

export function FooterBrand({
  name,
  desc,
  waConsultLink,
}: FooterBrandProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center">
          <Image
            src="/assets/logo/logo-512.webp"
            alt="Logo"
            width={24}
            height={24}
          />
        </div>
        <span className="font-poppins font-bold text-xl text-white">
          {name}
        </span>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
        {desc}
      </p>
      <a
        href={waConsultLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 text-slate-200 text-sm font-semibold hover:bg-slate-900 transition-colors"
      >
        <MessageCircle size={15} />
        Chat WhatsApp
      </a>
    </motion.div>
  );
}

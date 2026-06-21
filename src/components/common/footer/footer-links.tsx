"use client";

import { motion } from "framer-motion";
import { footerColumnVariants } from "@/lib/motion/animations";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinksProps {
  columns: readonly {
    title: string;
    links: readonly FooterLink[];
  }[];
}

export function FooterLinks({ columns }: FooterLinksProps) {
  return (
    <>
      {columns.map((col, ci) => (
        <motion.div
          key={ci}
          custom={ci}
          variants={footerColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4 className="font-poppins font-bold text-slate-100 mb-4 text-sm tracking-wide">
            {col.title}
          </h4>
          <ul className="space-y-2.5">
            {col.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </>
  );
}

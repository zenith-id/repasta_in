"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  Clock,
  Wrench,
  Instagram,
  Facebook,
} from "lucide-react";
import { cols, brand, contact } from "@/constants/footer";
import Image from "next/image";
import Link from "next/link";
import packageJson from "@/package.json";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center">
                <Image src="/logo.png" alt="Logo" width={24} height={24} />
              </div>
              <span className="font-poppins font-bold text-xl text-background">
                Repasta
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-xs">
              {brand.desc}
            </p>
            <a
              href={contact.waConsultLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-background/20 text-background text-sm font-semibold hover:bg-background/10 transition-colors"
            >
              <MessageCircle size={15} />
              Chat WhatsApp
            </a>
          </motion.div>

          {/* Link columns */}
          {cols.map((col, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 + ci * 0.06 }}
            >
              <h4 className="font-poppins font-bold text-background mb-4 text-sm tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/55 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-poppins font-bold text-background mb-4 text-sm tracking-wide">
              Kontak
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5">
                <MessageCircle
                  size={14}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <a
                  href={contact.waLink}
                  className="text-background/60 hover:text-primary transition-colors text-sm"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span className="text-background/60 text-sm">
                  {contact.location}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock
                  size={14}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <div className="text-background/60 text-sm space-y-0.5">
                  <p>{contact.hours.weekday}</p>
                  <p>{contact.hours.saturday}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href={contact.ig}
                aria-label="Instagram Repasta"
                className="w-9 h-9 rounded-lg border border-background/20 flex items-center justify-center text-background/50 hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Instagram size={16} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-background/35 text-xs">
            © {year} Repasta. Semua hak dilindungi. · v{packageJson.version} · hello@repasta.in
          </p>
          <p className="text-background/25 text-xs">
            Servis Laptop & PC Profesional — Bandung, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}

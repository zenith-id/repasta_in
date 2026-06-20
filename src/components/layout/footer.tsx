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
import { cols, brand, contact } from "@/constants/sections/footer";
import Image from "next/image";
import Link from "next/link";
import packageJson from "../../../package.json";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080f19] text-slate-400 border-t border-slate-900">
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
                <Image
                  src="/assets/logo/logo-512.webp"
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </div>
              <span className="font-poppins font-bold text-xl text-white">
                Repasta
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              {brand.desc}
            </p>
            <a
              href={contact.waConsultLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 text-slate-200 text-sm font-semibold hover:bg-slate-900 transition-colors"
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

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-poppins font-bold text-slate-100 mb-4 text-sm tracking-wide">
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
                  className="text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <a
                  href={contact.gmaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  {contact.location}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock
                  size={14}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <div className="text-slate-400 text-sm space-y-0.5">
                  <p>{contact.hours.weekday}</p>
                  <p>{contact.hours.saturday}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href={contact.ig}
                aria-label="Instagram Repasta"
                className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Instagram size={16} />
              </Link>
              <a
                href={contact.gmaps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Repasta"
                className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/40 transition-colors"
              >
                <MapPin size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/60" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {year} Repasta. Semua hak dilindungi. · v{packageJson.version} ·
            hello@repasta.in
          </p>
          <p className="text-slate-600 text-xs">
            Servis Laptop & PC Profesional — Bandung, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}

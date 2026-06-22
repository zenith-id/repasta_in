"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { footerContactVariants } from "@/lib/motion/animations";

interface FooterContactProps {
  contact: {
    phone: string;
    email: string;
    emailLink: string;
    waLink: string;
    location: string;
    gmaps: string;
    ig: string;
    hours: {
      weekday: string;
      saturday: string;
    };
  };
}

export function FooterContact({ contact }: FooterContactProps) {
  return (
    <motion.div
      variants={footerContactVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
          <Mail
            size={14}
            className="text-primary mt-0.5 flex-shrink-0"
          />
          <a
            href={contact.emailLink}
            className="text-slate-400 hover:text-primary transition-colors text-sm"
          >
            {contact.email}
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
          href={contact.emailLink}
          aria-label="Email Repasta"
          className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/40 transition-colors"
        >
          <Mail size={16} />
        </a>
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
  );
}

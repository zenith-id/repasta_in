"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/constants/contact";
import { trackWhatsAppClick } from "@/lib/analytics";

interface WaCtaProps {
  location: string;
  serviceName?: string;
  text: string;
  big?: boolean;
}

export function WaCta({ location, serviceName, text, big }: WaCtaProps) {
  const msg = serviceName
    ? `Halo Repastain, mau tanya layanan ${serviceName}.`
    : "Halo Repastain, mau tanya servis laptop.";
  return (
    <a
      href={WHATSAPP_LINK(msg)}
      target="_blank"
      rel="noopener noreferrer"
      data-wa-cta={location}
      onClick={() => trackWhatsAppClick({ location, serviceName })}
      className={
        big
          ? "inline-flex items-center gap-3 px-8 py-4 bg-background dark:bg-primary text-foreground dark:text-primary-foreground font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg"
          : "inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
      }
    >
      <MessageCircle size={big ? 20 : 15} />
      {text}
    </a>
  );
}

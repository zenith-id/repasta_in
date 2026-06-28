"use client";

import { HelpCircle } from "lucide-react";
import { SectionHeader } from "@/components/shared";
import { FAQItem } from "@/components/common/faq";
import { faqs } from "@/constants/sections/faq";

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-card content-visibility-auto">
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
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

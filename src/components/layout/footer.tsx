"use client";

import {
  FooterBrand,
  FooterLinks,
  FooterContact,
  FooterBottom,
} from "@/components/common/footer";
import { cols, brand, contact } from "@/constants/sections/footer";

export function Footer() {
  return (
    <footer className="bg-[#080f19] text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-12">
          <FooterBrand
            name={brand.name}
            desc={brand.desc}
            waConsultLink={contact.waConsultLink}
          />

          <FooterLinks columns={cols} />

          <FooterContact contact={contact} />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}

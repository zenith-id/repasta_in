"use client";

import dynamic from "next/dynamic";
import { SectionSkeleton } from "@/components/skeleton-wrapper";
import { LenisProvider } from "@/components/lenis-provider";

export { LenisProvider };

// Client-only components: need browser APIs / no SSR
export const Footer = dynamic(
  () => import("@/components/layout/footer").then((m) => m.Footer),
  { ssr: false, loading: () => <SectionSkeleton name="footer" /> }
);

export const WhatsAppFloat = dynamic(
  () =>
    import("@/components/sections/whatsapp-float").then((m) => m.WhatsAppFloat),
  { ssr: false, loading: () => <SectionSkeleton name="whatsapp-float" /> }
);

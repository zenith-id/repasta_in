"use client";

import dynamic from "next/dynamic";
import { SectionSkeleton } from "@/components/skeleton-wrapper";
import { LenisProvider } from "@/components/lenis-provider";

export { LenisProvider };

export const Footer = dynamic(
  () => import("@/components/layout/footer").then((m) => m.Footer),
  { ssr: false, loading: () => <SectionSkeleton height={360} /> }
);

export const WhatsAppFloat = dynamic(
  () =>
    import("@/components/sections/whatsapp-float").then((m) => m.WhatsAppFloat),
  { ssr: false, loading: () => null }
);

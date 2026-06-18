"use client";

import { LenisProvider } from "@/components/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import { ProblemAwareness } from "@/components/sections/problem-awareness";
import { Services } from "@/components/sections/services";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Pricing } from "@/components/sections/pricing";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/sections/whatsapp-float";

export default function Home() {
  return (
    <LenisProvider>
      <Navbar />
      <main>
        <Hero />
        <ProblemAwareness />
        <Services />
        <Features />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LenisProvider>
  );
}

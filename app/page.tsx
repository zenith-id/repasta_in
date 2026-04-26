"use client";

import { LenisProvider } from "@/components/lenis-provider";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemAwareness } from "@/components/problem-awareness";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

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
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LenisProvider>
  );
}

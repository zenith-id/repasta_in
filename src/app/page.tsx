import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import { SkeletonWrapper } from "@/components/skeleton-wrapper";

// Client boundary for Lenis smooth scroll
const LenisProvider = dynamic(
  () => import("@/components/lenis-provider").then((m) => m.LenisProvider)
);

// Below-fold sections — code-split into separate chunks
const ProblemAwareness = dynamic(
  () =>
    import("@/components/sections/problem-awareness").then(
      (m) => m.ProblemAwareness
    )
);
const Services = dynamic(
  () => import("@/components/sections/services").then((m) => m.Services)
);
const Features = dynamic(
  () => import("@/components/sections/features").then((m) => m.Features)
);
const HowItWorks = dynamic(
  () => import("@/components/sections/how-it-works").then((m) => m.HowItWorks)
);
const Gallery = dynamic(
  () => import("@/components/sections/gallery").then((m) => m.Gallery)
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/testimonials").then((m) => m.Testimonials)
);
const FAQ = dynamic(
  () => import("@/components/sections/faq").then((m) => m.FAQ)
);
const CTA = dynamic(
  () => import("@/components/sections/cta").then((m) => m.CTA)
);
const Footer = dynamic(
  () => import("@/components/layout/footer").then((m) => m.Footer)
);
const WhatsAppFloat = dynamic(
  () =>
    import("@/components/sections/whatsapp-float").then(
      (m) => m.WhatsAppFloat
    )
);

export default function Home() {
  return (
    <LenisProvider>
      <Navbar />
      <main>
        <SkeletonWrapper name="hero">
          <Hero />
        </SkeletonWrapper>
        <SkeletonWrapper name="problem-awareness">
          <ProblemAwareness />
        </SkeletonWrapper>
        <SkeletonWrapper name="services">
          <Services />
        </SkeletonWrapper>
        <SkeletonWrapper name="features">
          <Features />
        </SkeletonWrapper>
        <SkeletonWrapper name="how-it-works">
          <HowItWorks />
        </SkeletonWrapper>
        <SkeletonWrapper name="gallery">
          <Gallery />
        </SkeletonWrapper>
        <SkeletonWrapper name="testimonials">
          <Testimonials />
        </SkeletonWrapper>
        <SkeletonWrapper name="faq">
          <FAQ />
        </SkeletonWrapper>
        <SkeletonWrapper name="cta">
          <CTA />
        </SkeletonWrapper>
      </main>
      <Footer />
      <WhatsAppFloat />
    </LenisProvider>
  );
}

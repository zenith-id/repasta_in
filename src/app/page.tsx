import { SectionSkeleton } from "@/components/skeleton-wrapper";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import {
  LenisProvider,
  Footer,
  WhatsAppFloat,
} from "@/components/client-sections";

// Below-fold sections — code-split into separate chunks
const ProblemAwareness = dynamic(
  () =>
    import("@/components/sections/problem-awareness").then(
      (m) => m.ProblemAwareness
    ),
  { loading: () => <SectionSkeleton name="problem-awareness" /> }
);
const Services = dynamic(
  () => import("@/components/sections/services").then((m) => m.Services),
  { loading: () => <SectionSkeleton name="services" /> }
);
const Features = dynamic(
  () => import("@/components/sections/features").then((m) => m.Features),
  { loading: () => <SectionSkeleton name="features" /> }
);
const HowItWorks = dynamic(
  () => import("@/components/sections/how-it-works").then((m) => m.HowItWorks),
  { loading: () => <SectionSkeleton name="how-it-works" /> }
);
const Gallery = dynamic(
  () => import("@/components/sections/gallery").then((m) => m.Gallery),
  { loading: () => <SectionSkeleton name="gallery" /> }
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/testimonials").then((m) => m.Testimonials),
  { loading: () => <SectionSkeleton name="testimonials" /> }
);
const FAQ = dynamic(
  () => import("@/components/sections/faq").then((m) => m.FAQ),
  { loading: () => <SectionSkeleton name="faq" /> }
);
const CTA = dynamic(
  () => import("@/components/sections/cta").then((m) => m.CTA),
  { loading: () => <SectionSkeleton name="cta" /> }
);

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

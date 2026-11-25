import dynamic from "next/dynamic";
import { SectionSkeleton } from "@/components/skeleton-wrapper";
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
  { loading: () => <SectionSkeleton height={800} /> }
);
const Services = dynamic(
  () => import("@/components/sections/services").then((m) => m.Services),
  { loading: () => <SectionSkeleton height={900} /> }
);
const Features = dynamic(
  () => import("@/components/sections/features").then((m) => m.Features),
  { loading: () => <SectionSkeleton height={700} /> }
);
const HowItWorks = dynamic(
  () => import("@/components/sections/how-it-works").then((m) => m.HowItWorks),
  { loading: () => <SectionSkeleton height={800} /> }
);
const Gallery = dynamic(
  () => import("@/components/sections/gallery").then((m) => m.Gallery),
  { loading: () => <SectionSkeleton height={900} /> }
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/testimonials").then((m) => m.Testimonials),
  { loading: () => <SectionSkeleton height={600} /> }
);
const FAQ = dynamic(
  () => import("@/components/sections/faq").then((m) => m.FAQ),
  { loading: () => <SectionSkeleton height={600} /> }
);
const CTA = dynamic(
  () => import("@/components/sections/cta").then((m) => m.CTA),
  { loading: () => <SectionSkeleton height={400} /> }
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

"use client";

import { Skeleton } from "boneyard-js/react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <Skeleton name="hero" loading={true} />
      <Skeleton name="problem-awareness" loading={true} />
      <Skeleton name="services" loading={true} />
      <Skeleton name="features" loading={true} />
      <Skeleton name="how-it-works" loading={true} />
      <Skeleton name="gallery" loading={true} />
      <Skeleton name="testimonials" loading={true} />
      <Skeleton name="faq" loading={true} />
      <Skeleton name="cta" loading={true} />
    </div>
  );
}

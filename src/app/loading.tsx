"use client";

import { Skeleton } from "boneyard-js/react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <Skeleton name="hero" loading={true}><div /></Skeleton>
      <Skeleton name="problem-awareness" loading={true}><div /></Skeleton>
      <Skeleton name="services" loading={true}><div /></Skeleton>
      <Skeleton name="features" loading={true}><div /></Skeleton>
      <Skeleton name="how-it-works" loading={true}><div /></Skeleton>
      <Skeleton name="gallery" loading={true}><div /></Skeleton>
      <Skeleton name="testimonials" loading={true}><div /></Skeleton>
      <Skeleton name="faq" loading={true}><div /></Skeleton>
      <Skeleton name="cta" loading={true}><div /></Skeleton>
    </div>
  );
}

"use client";

import { SectionHeader } from "@/components/shared";
import { ProblemCard } from "@/components/common/problems/problem-card";
import { ResolutionTagline } from "@/components/common/problems/resolution-tagline";
import { problems } from "@/constants/sections/problem-awareness";

export function ProblemAwareness() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Masalah Umum"
          titlePrefix="Apakah Anda "
          titleHighlight="Mengalami Ini?"
          desc="Masalah yang dibiarkan justru memperparah kerusakan dan biaya servis."
          variant={1}
          align="center"
          mb="mb-14"
        />

        {/* 2×2 Grid — numbered cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {problems.map((p, i) => (
            <ProblemCard
              key={i}
              num={p.num}
              emoji={p.emoji}
              title={p.title}
              desc={p.desc}
              index={i}
            />
          ))}
        </div>

        {/* Resolution tagline */}
        <ResolutionTagline />
      </div>
    </section>
  );
}

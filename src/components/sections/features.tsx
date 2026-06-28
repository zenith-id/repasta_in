"use client";

import { CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/shared";
import {
  HonestyCard,
  SpeedCard,
  QualityCard,
  SocialProofCard,
} from "@/components/common/features";

export function Features() {
  return (
    <section id="keunggulan" className="py-20 md:py-32 bg-background content-visibility-auto">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <SectionHeader
          icon={CheckCircle}
          badge="Keunggulan Kami"
          titlePrefix="Kenapa Pilih "
          titleHighlight="Repasta?"
          desc="Standar profesional yang mengutamakan kejujuran, kecepatan, dan kualitas kerja."
          variant={2}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          <HonestyCard />
          <SpeedCard />
          <QualityCard />
          <SocialProofCard />
        </div>
      </div>
    </section>
  );
}

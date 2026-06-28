"use client";

import { SectionHeader } from "@/components/shared";
import {
  StepCard,
  StepCardContent,
  StepCardAccommodation,
  HowItWorksCTA,
} from "@/components/common/how-it-works";
import { steps } from "@/constants/sections/how-it-works";

export function HowItWorks() {
  return (
    <section
      id="cara-pesan"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card overflow-hidden content-visibility-auto"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Cara Pesan"
          titlePrefix="3 Langkah "
          titleHighlight="Mudah & Cepat"
          desc="Tidak perlu antri lama. Servis profesional langsung hadir untuk Anda."
          variant={1}
          align="center"
          mb="mb-16"
        />

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            const isAccommodation = i === 1;

            return (
              <StepCard
                key={i}
                num={step.num}
                icon={step.icon}
                index={i}
                isLast={isLast}
              >
                {isAccommodation ? (
                  <StepCardAccommodation
                    title={step.title}
                    desc={step.desc}
                    badge={step.badge}
                  />
                ) : (
                  <StepCardContent
                    title={step.title}
                    desc={step.desc}
                    badge={step.badge}
                  />
                )}
              </StepCard>
            );
          })}
        </div>

        <HowItWorksCTA />
      </div>
    </section>
  );
}

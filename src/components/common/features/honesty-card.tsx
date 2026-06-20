import { Check } from "lucide-react";
import { honestyCard } from "@/constants/sections/features";
import { FeatureCard } from "./feature-card";

export function HonestyCard() {
  const { icon: Icon, tag, title, desc, points } = honestyCard;

  return (
    <FeatureCard
      index={0}
      span="col-span-full md:col-span-1"
      className="p-6 md:p-8 h-full flex flex-col text-left"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-primary mb-4">
            <Icon className="size-4" strokeWidth={2.2} />
            <span>{tag}</span>
          </div>
          <h3 className="text-xl font-bold font-poppins text-foreground mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>

        <div className="flex flex-col gap-2 mt-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-card/40 border border-border/40 rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80"
            >
              <span>{point}</span>
              <Check className="size-4 text-primary shrink-0" strokeWidth={3} />
            </div>
          ))}
        </div>
      </div>
    </FeatureCard>
  );
}

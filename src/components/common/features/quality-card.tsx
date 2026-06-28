import { Check } from "lucide-react";
import { qualityCard } from "@/constants/sections/features";
import { FeatureCard } from "./feature-card";

export function QualityCard() {
  const { icon: Icon, tag, title, desc, materials, warranty } = qualityCard;

  return (
    <FeatureCard
      index={2}
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
          <p className="text-sm text-muted-foreground leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-2">
            {materials.map((mat, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-card/40 border border-border/40 rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80"
              >
                <span>{mat.name}</span>
                <span className="text-[11px] font-semibold text-primary bg-primary/10 border border-primary/20 rounded-md px-2 py-0.5">
                  {mat.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FeatureCard>
  );
}

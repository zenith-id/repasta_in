import { Check, Info } from "lucide-react";
import { accommodationData } from "@/constants/sections/how-it-works";

interface StepCardAccommodationProps {
  title: string;
  desc: string;
  badge: string;
}

export function StepCardAccommodation({
  title,
  desc,
  badge,
}: StepCardAccommodationProps) {
  const { freeZone, pricing, notes } = accommodationData;

  return (
    <div className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-left">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h3 className="text-lg font-bold text-foreground font-poppins">
          {title}
        </h3>
        <span className="text-[11px] font-bold text-primary bg-primary/8 border border-primary/15 px-3 py-1 rounded-full whitespace-nowrap">
          ✓ {badge}
        </span>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {desc}
      </p>

      <div className="border-t border-dashed border-border/80 my-6" />

      <div className="space-y-4">
        <h4 className="text-[11px] font-bold tracking-[0.15em] text-foreground/50 uppercase font-poppins">
          Jangkauan & Biaya Akomodasi
        </h4>

        {/* Free zone badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-green-500/20 bg-green-500/5 text-green-700 dark:text-green-400 dark:bg-green-500/10 text-sm font-semibold">
          <Check
            className="size-4 text-green-700 dark:text-green-400 shrink-0"
            strokeWidth={3}
          />
          <span>
            Area <span className="font-bold">{freeZone.area}</span> —{" "}
            <span className="font-bold text-green-800 dark:text-green-300">
              {freeZone.label}
            </span>{" "}
            ongkos
          </span>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pricing.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-border/60 bg-card/25 dark:bg-muted/15 flex flex-col justify-between gap-2.5"
            >
              <span className="text-[9px] font-bold tracking-wider text-muted-foreground uppercase leading-none">
                {item.label}
              </span>
              <span className="text-xl font-bold text-foreground font-poppins">
                {item.value}
                {item.suffix && (
                  <span className="text-sm font-normal text-muted-foreground">
                    {item.suffix}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="space-y-3 pt-2">
          {notes.map((note, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed"
            >
              {note.type === "info" ? (
                <Info className="size-4 text-primary shrink-0 mt-0.5" />
              ) : (
                <Check
                  className="size-4 text-primary shrink-0 mt-0.5"
                  strokeWidth={2.8}
                />
              )}
              <p>
                {note.highlight ? (
                  <>
                    {note.text.split(note.highlight)[0]}
                    <span className="font-semibold text-foreground">
                      {note.highlight}
                    </span>
                    {note.text.split(note.highlight)[1]}
                  </>
                ) : (
                  note.text
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

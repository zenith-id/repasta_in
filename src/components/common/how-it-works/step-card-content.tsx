interface StepCardContentProps {
  title: string;
  desc: string;
  badge: string;
}

export function StepCardContent({
  title,
  desc,
  badge,
}: StepCardContentProps) {
  return (
    <div className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-bold text-foreground font-poppins">
          {title}
        </h3>
        <span className="text-[11px] font-bold text-primary bg-primary/8 border border-primary/15 px-3 py-1 rounded-full whitespace-nowrap">
          ✓ {badge}
        </span>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

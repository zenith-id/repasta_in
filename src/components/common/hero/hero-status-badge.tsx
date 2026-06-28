type HeroStatusBadgeProps = {
  kicker: string;
};

export function HeroStatusBadge({ kicker }: HeroStatusBadgeProps) {
  return (
    <div className="status-badge z-20 mb-8 flex select-none items-center gap-2 rounded-full px-4 py-1.5">
      <span className="text-sm">✨</span>
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
        {kicker}
      </span>
    </div>
  );
}

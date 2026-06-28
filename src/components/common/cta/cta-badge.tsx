import { Sparkles } from "lucide-react";

interface CTABadgeProps {
  text: string;
}

export function CTABadge({ text }: CTABadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border bg-primary/15 border-primary/30 text-card">
      <Sparkles size={14} className="text-primary shrink-0 animate-pulse" />
      {text}
    </div>
  );
}

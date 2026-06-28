"use client";

import type { LucideIcon } from "lucide-react";

export type TabId = "laptop" | "paket_laptop" | "pc";

interface TabItem {
  id: TabId;
  label: string;
  icon: LucideIcon;
}

interface TabSwitcherProps {
  tabs: readonly TabItem[];
  active: TabId;
  onChange: (id: TabId) => void;
}

export function TabSwitcher({ tabs, active, onChange }: TabSwitcherProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex p-1 rounded-2xl bg-card border border-border gap-1">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              active === id
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : "text-foreground/60 hover:text-foreground hover:bg-background/60"
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

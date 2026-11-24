"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared";
import {
  TabSwitcher,
  ServiceList,
  ServiceCTA,
  type TabId,
} from "@/components/common/services";
import {
  laptopServices,
  laptopAddons,
  paketLaptopServices,
  pcServices,
  allServices,
  servicesHeader,
  tabsData,
} from "@/constants/sections/services";

const serviceMap: Record<
  TabId,
  readonly { name: string; desc: string; price: string; popular: boolean; category?: string }[]
> = {
  all: allServices,
  laptop: laptopServices,
  paket_laptop: paketLaptopServices,
  pc: pcServices,
};

export function Services() {
  const [active, setActive] = useState<TabId>("all");

  return (
    <section
      id="layanan"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background content-visibility-auto"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <SectionHeader
          badge={servicesHeader.tag}
          titlePrefix="Harga Transparan, "
          titleHighlight="Tanpa Biaya Tersembunyi"
          desc={servicesHeader.subtitle}
          variant={1}
        />

        {/* Tab Switcher */}
        <TabSwitcher tabs={tabsData} active={active} onChange={setActive} />

        {/* Service List */}
        <ServiceList activeKey={active} services={serviceMap[active]} />

        {/* Addons (laptop only) */}
        {active === "laptop" && laptopAddons.length > 0 && (
          <div className="mt-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-5">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
              Add-on
            </p>
            {laptopAddons.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between gap-4"
              >
                <div>
                  <p className="font-bold text-foreground text-sm font-poppins">
                    {addon.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {addon.desc}
                  </p>
                </div>
                <span className="shrink-0 font-bold text-sm text-primary font-poppins">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Note + CTA */}
        <ServiceCTA />
      </div>
    </section>
  );
}

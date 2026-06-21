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
  paketLaptopServices,
  pcServices,
  servicesHeader,
  tabsData,
} from "@/constants/sections/services";

const serviceMap: Record<
  TabId,
  readonly { name: string; desc: string; price: string; popular: boolean }[]
> = {
  laptop: laptopServices,
  paket_laptop: paketLaptopServices,
  pc: pcServices,
};

export function Services() {
  const [active, setActive] = useState<TabId>("laptop");

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

        {/* Note + CTA */}
        <ServiceCTA />
      </div>
    </section>
  );
}

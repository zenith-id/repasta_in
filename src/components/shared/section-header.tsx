"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon?: LucideIcon;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  desc: string;
  variant?: 1 | 2 | 3;
  animate?: boolean;
  align?: "center" | "left";
  id?: string;
  mb?: string;
}

export function SectionHeader({
  icon: Icon,
  badge,
  titlePrefix,
  titleHighlight,
  desc,
  variant = 1,
  animate = true,
  align = "center",
  id,
  mb = "mb-14",
}: SectionHeaderProps) {
  const isLeft = align === "left";

  const content = (
    <>
      <div className={`section-tag mb-4 w-fit ${isLeft ? "" : "mx-auto"}`}>
        {Icon && <Icon size={14} />}
        {badge}
      </div>
      <h2 id={id} className="text-balance-title mb-4 font-poppins">
        {variant === 3 ? (
          <>
            <span className="text-foreground">{titlePrefix}</span>{" "}
            <span className="text-primary">{titleHighlight}</span>
          </>
        ) : (
          <>
            {titlePrefix}
            <span className="text-primary">{titleHighlight}</span>
          </>
        )}
      </h2>
      <p
        className={`text-lg text-muted-foreground max-w-xl ${isLeft ? "" : "mx-auto"}`}
      >
        {desc}
      </p>
    </>
  );

  if (!animate)
    return (
      <div className={`${isLeft ? "text-left" : "text-center"} ${mb}`}>
        {content}
      </div>
    );

  return (
    <motion.div
      className={`${isLeft ? "text-left" : "text-center"} ${mb}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
}

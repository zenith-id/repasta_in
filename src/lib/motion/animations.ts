import { type Variants } from "framer-motion";

/* ── Base ────────────────────────────────────────────────── */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** Indexed fade-up: pass `custom={index}` to each motion element. */
export const staggeredFadeUp = ({
  y = 20,
  duration = 0.5,
  delay = 0,
  stagger = 0.1,
}: {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
} = {}): Variants => ({
  hidden: { opacity: 0, y },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration, delay: delay + i * stagger, ease: "easeOut" },
  }),
});

/** Simple opacity fade with a delay. */
export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay } },
});

/* ── Hero ───────────────────────────────────────────────── */

export const heroContainerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.12 },
  },
};

/* ── Services ───────────────────────────────────────────── */

export const serviceRowVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, delay: index * 0.05 },
  }),
};

export const tabContentVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.22 },
};

/* ── Features ───────────────────────────────────────────── */

export const barGrowVariants: Variants = {
  hidden: { scaleY: 0, originY: 1 },
  visible: (index: number) => ({
    scaleY: 1,
    transition: { delay: 0.2 + index * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export const progressRingVariants: Variants = {
  hidden: { strokeDashoffset: 251.2 },
  visible: (rate: number) => ({
    strokeDashoffset: 251.2 * (1 - rate / 100),
    transition: { duration: 1.4, delay: 0.3, ease: "easeOut" },
  }),
};

/* ── FAQ ────────────────────────────────────────────────── */

export const faqExpandVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto", opacity: 1 },
  transition: { duration: 0.25, ease: "easeInOut" as const },
};

export const faqChevronVariants = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 180 },
  transition: { duration: 0.25 },
};

/* ── Testimonials ───────────────────────────────────────── */

export const testimonialsSectionVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotate: -1 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export const testimonialCardHover = {
  whileHover: {
    scale: 1.03,
    y: -6,
    transition: { type: "spring" as const, stiffness: 380, damping: 18 },
  },
};

export const googleCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

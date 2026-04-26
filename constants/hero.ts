import { type Variants } from "framer-motion";

export const highlightPills = [
  "Diagnosa Gratis",
  "Garansi 6 Bulan",
  "Servis < 2 Jam",
] as const;

export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.12 },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const statsData = [
  {
    label: "Pelanggan Puas",
    target: 500,
    suffix: "+",
    prefix: "",
    delay: 0.55,
  },
  {
    label: "Tingkat Sukses",
    target: 98,
    suffix: "%",
    prefix: "",
    delay: 0.63,
  },
  {
    label: "Waktu Diagnosa",
    target: 2,
    suffix: " Jam",
    prefix: "< ",
    delay: 0.71,
  },
] as const;

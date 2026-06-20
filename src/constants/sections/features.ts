import type { Variants } from "framer-motion";
import { Eye, Zap, Shield, Users } from "lucide-react";

/* ── Animation ────────────────────────────────────────────── */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

/* ── Avatars ──────────────────────────────────────────────── */

export const avatars = [
  "/assets/avatars/person_1.avif",
  "/assets/avatars/person_2.avif",
  "/assets/avatars/person_3.avif",
  "/assets/avatars/person_5.avif",
];

/* ── Honesty Card ─────────────────────────────────────────── */

export const honestyCard = {
  icon: Eye,
  tag: "Kejujuran",
  title: "Dikerjakan di Depan Anda",
  desc: "Setiap proses transparan — tidak ada part ditukar diam-diam. Anda lihat sendiri dari awal sampai selesai.",
  points: [
    "Estimasi biaya di awal",
    "Tanpa biaya tersembunyi",
    "Part lama dikembalikan",
  ],
};

/* ── Speed Card ───────────────────────────────────────────── */

export const speedCard = {
  icon: Zap,
  tag: "Kecepatan",
  title: "Selesai 1–2 Jam",
  desc: "Diagnosa cepat & home visit area Bandung. Perangkat Anda balik di hari yang sama.",
  bars: [40, 55, 48, 70, 62, 100],
  chartLabels: ["Masuk", "Diagnosa", "Selesai"],
};

/* ── Quality Card ─────────────────────────────────────────── */

export const qualityCard = {
  icon: Shield,
  tag: "Kualitas",
  title: "Material Premium",
  desc: "Hanya pakai thermal compound kelas atas, bukan pasta abal-abal.",
  materials: [
    { name: "CryoFuze 5", type: "Regular" },
    { name: "PTM7950", type: "Phase Change" },
    { name: "Liquid Metal", type: "128 W/mK" },
  ],
  warranty: "Bergaransi hingga 7 hari",
};

/* ── Social Proof Card ────────────────────────────────────── */

export const socialProofCard = {
  icon: Users,
  tag: "Dipercaya",
  title: "500+ Pelanggan Puas di Bandung",
  quote:
    "Laptop gaming saya overheat parah, sehari langsung beres dan adem lagi. Prosesnya ditunjukin di depan saya.",
  successRate: 98,
  successLabel: "Sukses",
  ctaLabel: "& ratusan pelanggan lainnya",
};

import { Eye, Zap, Shield, Users } from "lucide-react";

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
  desc: "Semua proses kelihatan. Nggak ada part yang diganti diam-diam — Anda lihat sendiri dari awal sampai beres.",
  points: [
    "Biaya dijelaskan di awal",
    "Nggak ada biaya tersembunyi",
    "Part lama dikembalikan",
  ],
};

/* ── Speed Card ───────────────────────────────────────────── */

export const speedCard = {
  icon: Zap,
  tag: "Kecepatan",
  title: "Selesai 1–2 Jam",
  desc: "Diagnosa cepat, bisa home visit di area Bandung. Perangkat balik di hari yang sama.",
  bars: [40, 55, 48, 70, 62, 100],
  chartLabels: ["Masuk", "Diagnosa", "Selesai"],
};

/* ── Quality Card ─────────────────────────────────────────── */

export const qualityCard = {
  icon: Shield,
  tag: "Kualitas",
  title: "Material Premium",
  desc: "Pakai thermal compound kelas atas, bukan pasta asal-asalan.",
  materials: [
    { name: "CryoFuze 5", type: "Premium" },
    { name: "PTM7950", type: "Phase Change" },
    { name: "Liquid Metal", type: "128 W/mK" },
  ],
  warranty: "Garansi hingga 7 hari",
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
  ctaLabel: "dan ratusan pelanggan lainnya",
};

export const SEO = {
  title: "Repastain — Servis Laptop & PC Profesional di Bandung",
  description:
    "Repastain menyediakan servis laptop dan PC profesional di Bandung. Repaste thermal paste, deep clean, upgrade SSD/RAM. Diagnosa gratis, teknisi berpengalaman, harga transparan, garansi 7 hari.",
  keywords: [
    "servis laptop Bandung",
    "repaste laptop Bandung",
    "cleaning laptop Bandung",
    "ganti thermal paste laptop",
    "teknisi laptop panggilan Bandung",
    "deepclean laptop Bandung",
    "upgrade SSD laptop Bandung",
    "servis PC Bandung",
  ],
  author: "Repastain",
  siteName: "Repastain",
  locale: "id_ID",
};

export const getAppUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  if (process.env.NEXT_PUBLIC_SECONDARY_APP_URL) {
    return process.env.NEXT_PUBLIC_SECONDARY_APP_URL;
  }
  return "https://www.repastain.my.id";
};

export const SEO = {
  title: "Repastain (Repasta.in) | Servis Laptop & PC Profesional di Bandung",
  description:
    "Servis laptop & PC di Bandung dan Padang: repaste, deep clean, upgrade SSD/RAM. Diagnosa gratis, harga jelas, garansi 7 hari.",
  keywords: [
    "servis laptop Bandung",
    "servis laptop Padang",
    "repaste laptop Bandung",
    "repaste laptop Padang",
    "cleaning laptop Bandung",
    "ganti thermal paste laptop",
    "teknisi laptop panggilan Bandung",
    "teknisi laptop panggilan Padang",
    "deepclean laptop Bandung",
    "deepclean laptop Padang",
    "upgrade SSD laptop Bandung",
    "servis PC Bandung",
    "servis PC Padang",
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
  return "https://repastain.my.id";
};

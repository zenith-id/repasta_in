import { TestimonialData } from "./testimonials-data-const";
export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role?: string;
}

export const testimonials = TestimonialData;

export const col1 = testimonials.slice(0, 14);
export const col2 = testimonials.slice(14, 28);
export const col3 = testimonials.slice(28, 42);

export const header = {
  title: "Kata Pelanggan Kami",
  subtitle:
    "Lebih dari 500 pelanggan di Bandung telah mempercayakan servis laptop mereka kepada kami.",
} as const;

export const googleReviewCard = {
  badge: "Ulasan Terverifikasi Google",
  rating: "5,0",
  ratingText: "Berdasarkan 35+ ulasan di Google Maps",
  copywriting: {
    prefix: "Lebih dari ",
    highlight1: "35 pelanggan",
    middle:
      " telah membagikan pengalaman nyata mereka bersama kami. Baca ulasan selengkapnya atau bagikan cerita Anda langsung di ",
    highlight2: "Google Maps",
  },
  writeReviewUrl: "https://maps.app.goo.gl/6wkYfFzpS8EjyJ4p8",
  viewReviewsUrl: "https://maps.app.goo.gl/6wkYfFzpS8EjyJ4p8",
} as const;

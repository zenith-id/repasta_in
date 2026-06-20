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

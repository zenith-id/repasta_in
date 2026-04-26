"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import { galleryItems, tagColors, WHATSAPP_LINK } from "@/constants/gallery";

export function Gallery() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(
    null,
  );

  return (
    <section id="galeri" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mb-4 mx-auto w-fit">
            Galeri Portofolio
          </div>
          <h2 className="text-balance-title font-poppins mb-4">
            Hasil Kerja <span className="text-primary">Nyata</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Setiap pekerjaan dikerjakan dengan presisi. Ini sebagian dokumentasi
            layanan kami.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="break-inside-avoid"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <button
                onClick={() => setSelected(item as any)}
                className="group relative w-full overflow-hidden rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 block"
                aria-label={`Lihat ${item.label}`}
              >
                <div
                  className={`relative w-full ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={item.thumb}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-end p-4">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between w-full">
                    <div className="text-left">
                      <p className="text-background font-semibold text-sm font-poppins">
                        {item.label}
                      </p>
                      <span
                        className={`mt-1 inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${tagColors[item.tag]}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <ZoomIn size={14} className="text-background" />
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-10 text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Punya proyek servis laptop atau PC?{" "}
          <a
            href={WHATSAPP_LINK("Halo Repasta! Saya ingin konsultasi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline underline-offset-4"
          >
            Hubungi kami sekarang →
          </a>
        </motion.p>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.label}
                width={1200}
                height={900}
                className="w-full rounded-2xl object-cover shadow-2xl max-h-[80vh]"
                style={{ height: "auto" }}
                priority
              />
              <div className="absolute bottom-4 left-4 right-12">
                <p className="text-background font-bold font-poppins drop-shadow">
                  {selected.label}
                </p>
                <span className="text-background/70 text-xs">
                  {selected.tag}
                </span>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-foreground/60 backdrop-blur-sm flex items-center justify-center text-background hover:bg-foreground/80 transition-colors"
                aria-label="Tutup"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

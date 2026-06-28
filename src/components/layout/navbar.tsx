"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLenis } from "@/components/lenis-provider";
// import { ThemeToggle } from "@/components/common/layout";
import {
  primaryNav,
  mobileNav,
  WHATSAPP_LINK,
} from "@/constants/layout/navbar";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const lenis = useLenis();

  /* active section via IntersectionObserver */
  useEffect(() => {
    const navIds = new Set<string>([
      ...primaryNav.map((n) => n.id),
      ...mobileNav.map((n) => n.id),
    ]);

    const observed = new Set<Element>();
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (!navIds.has(id)) return;
          if (entry.isIntersecting) visible.add(id);
          else visible.delete(id);
        });
        const match = [...navIds].find((id) => visible.has(id));
        setActiveId(match ?? "");
      },
      { threshold: 0, rootMargin: "-80px 0px -40% 0px" },
    );

    const observe = (el: Element) => {
      if (el instanceof HTMLElement && el.id && navIds.has(el.id) && !observed.has(el)) {
        observed.add(el);
        io.observe(el);
      }
    };

    // Observe all matching sections, retrying until every navId is found
    const tryObserve = () => {
      document.querySelectorAll("section[id]").forEach(observe);
      const allFound = [...navIds].every((id) => observed.has(document.getElementById(id)!));
      if (!allFound) requestAnimationFrame(tryObserve);
    };
    tryObserve();

    return () => io.disconnect();
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    if (lenis) {
      lenis.scrollTo(href, { offset: -80, duration: 1.4 });
    } else {
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, "#hero")}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className=" flex items-center justify-center transition-all ">
              <Image src="/icon.svg" alt="Logo" width={24} height={24} />
            </div>
            <span className="font-poppins font-bold text-lg text-foreground">
              Repasta In
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {primaryNav.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-primary bg-primary/8"
                      : "text-foreground/60 hover:text-primary hover:bg-primary/6"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* <ThemeToggle /> */}
            <a
              href="#kontak"
              onClick={(e) => scrollTo(e, "#kontak")}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer"
            >
              Pesan Sekarang
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-xl text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Buka menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t border-border bg-background/96 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
              {mobileNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    activeId === item.id
                      ? "text-primary bg-primary/8"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-border mt-1 space-y-1.5">
                <Link
                  href="/layanan"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  Lihat Semua Layanan →
                </Link>
                <a
                  href={WHATSAPP_LINK(
                    "Halo Repasta! Saya ingin konsultasi servis.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors text-sm"
                >
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

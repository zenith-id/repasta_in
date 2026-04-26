"use client";

import { motion, type Variants, useInView, animate } from "framer-motion";
import { ArrowRight, MessageCircle, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ── CountUp hook ──────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1.6) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-60px",
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return { count, ref };
}

/* ── Stat item ──────────────────────────────────────────────────── */
function StatItem({
  label,
  target,
  prefix = "",
  suffix = "",
  delay = 0,
}: {
  label: string;
  target: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}) {
  const { count, ref } = useCountUp(target, 1.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="space-y-1 text-center"
    >
      <div className="text-[10px] uppercase tracking-[0.28em] text-foreground/45 font-medium">
        {label}
      </div>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="text-2xl sm:text-3xl font-bold text-foreground font-poppins tabular-nums"
      >
        {prefix}
        {count}
        {suffix}
      </div>
    </motion.div>
  );
}

/* ── Wave canvas types ─────────────────────────────────────────── */
type Point = { x: number; y: number };
interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

import {
  highlightPills,
  containerVariants,
  itemVariants,
  statsData,
} from "@/constants/hero";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const computeThemeColors = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const resolveColor = (variables: string[], alpha = 1) => {
        const tempEl = document.createElement("div");
        tempEl.style.cssText =
          "position:absolute;visibility:hidden;width:1px;height:1px";
        document.body.appendChild(tempEl);
        let color = `rgba(255,255,255,${alpha})`;
        for (const variable of variables) {
          const value = rootStyles.getPropertyValue(variable).trim();
          if (value) {
            tempEl.style.backgroundColor = `var(${variable})`;
            const computed = getComputedStyle(tempEl).backgroundColor;
            if (computed && computed !== "rgba(0, 0, 0, 0)") {
              if (alpha < 1) {
                const m = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                color = m ? `rgba(${m[1]},${m[2]},${m[3]},${alpha})` : computed;
              } else {
                color = computed;
              }
              break;
            }
          }
        }
        document.body.removeChild(tempEl);
        return color;
      };

      const isDark = document.documentElement.classList.contains("dark");

      return {
        backgroundTop: resolveColor(["--background"], 1),
        backgroundBottom: isDark 
          ? resolveColor(["--navy-light", "--background"], 1)
          : resolveColor(["--muted", "--background"], 0.95),
        wavePalette: [
          {
            offset: 0,
            amplitude: 80,
            frequency: 0.0035,
            color: resolveColor(["--primary"], 1), 
            opacity: isDark ? 0.25 : 0.7, 
          },
          {
            offset: Math.PI / 2,
            amplitude: 100,
            frequency: 0.0028,
            color: resolveColor(["--primary"], 0.8),
            opacity: isDark ? 0.15 : 0.4,
          },
          {
            offset: Math.PI,
            amplitude: 70,
            frequency: 0.0042,
            color: resolveColor(["--primary"], 0.6),
            opacity: isDark ? 0.1 : 0.25,
          },
        ],
      };
    };

    let themeColors = computeThemeColors();
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      themeColors = computeThemeColors();
    };
    window.addEventListener("resize", resize);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      targetMouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    const drawWave = (cfg: WaveConfig) => {
      ctx.beginPath();
      const mouseInfluence =
        (mouseRef.current.x / canvas.width - 0.5) * 60 * cfg.frequency * 100;
      for (let x = 0; x <= canvas.width; x += 10) {
        const y =
          canvas.height * 0.75 +
          Math.sin(x * cfg.frequency + time + cfg.offset + mouseInfluence) *
            cfg.amplitude *
            (1 + (mouseRef.current.y / canvas.height - 0.5) * 0.4);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      
      const isDark = document.documentElement.classList.contains("dark");
      
      // Fill
      ctx.fillStyle = cfg.color;
      ctx.globalAlpha = cfg.opacity;
      ctx.fill();

      // No stroke for cleaner aesthetic, relying on increased fill opacity
    };

    const animate_ = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const smoothing = 0.08;
      mouseRef.current.x +=
        (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y +=
        (targetMouseRef.current.y - mouseRef.current.y) * smoothing;
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, themeColors.backgroundTop);
      gradient.addColorStop(1, themeColors.backgroundBottom);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      themeColors.wavePalette.forEach(drawWave);
      animationId = requestAnimationFrame(animate_);
    };
    animationId = requestAnimationFrame(animate_);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animationId = requestAnimationFrame(animate_);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new MutationObserver(() => {
      themeColors = computeThemeColors();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden flex items-center justify-center">
      {/* Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-1 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Ffilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 blur-[140px] rounded-full opacity-30 animate-pulse-glow z-0 pointer-events-none" />

      <div className="container-section relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 backdrop-blur-md shadow-inner"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary leading-none">
              Servis Terpercaya · Bandung
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 font-extrabold tracking-tight text-foreground font-poppins text-balance"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
              lineHeight: 1.05,
            }}
          >
            Laptop Panas & Lemot?{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-primary to-foreground bg-clip-text text-transparent drop-shadow-sm">
                Kami Solusinya
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 h-1.5 w-full bg-primary/20 rounded-full blur-sm"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-foreground/65 leading-relaxed font-medium px-4"
          >
            Layanan repaste, deep clean, dan perawatan laptop/PC profesional
            langsung di depan Anda —{" "}
            <span className="text-foreground">
              cepat, transparan, bergaransi.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="https://wa.me/621919423939?text=Halo%20Repasta!%20Saya%20ingin%20konsultasi%20servis%20laptop."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-1 active:translate-y-0 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <MessageCircle className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Chat via WhatsApp</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center gap-2 rounded-2xl border border-foreground/10 bg-background/40 px-8 py-4 text-sm font-bold text-foreground/80 backdrop-blur-md hover:bg-background/80 hover:border-primary/40 hover:text-primary transition-all active:scale-95"
            >
              Lihat Layanan Kami
            </a>
          </motion.div>

          {/* Highlight Pills */}
          <motion.ul
            variants={itemVariants}
            className="mb-14 flex flex-wrap items-center justify-center gap-3"
          >
            {highlightPills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-foreground/5 bg-foreground/[0.03] px-5 py-2 backdrop-blur-sm text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/60 shadow-sm transition-colors hover:border-primary/20 hover:text-primary"
              >
                {pill}
              </li>
            ))}
          </motion.ul>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/10 backdrop-blur-md"
          >
            {statsData.map((s, i) => (
              <div
                key={i}
                className="bg-background/70 p-6 sm:p-8 hover:bg-background/50 transition-colors group border-b md:border-b-0 last:border-0 border-foreground/5"
              >
                <StatItem {...s} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

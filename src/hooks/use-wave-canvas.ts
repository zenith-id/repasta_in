"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

interface ThemeColors {
  backgroundTop: string;
  backgroundBottom: string;
  wavePalette: WaveConfig[];
}

function resolveColor(variables: string[], alpha = 1): string {
  const tempEl = document.createElement("div");
  tempEl.style.cssText =
    "position:absolute;visibility:hidden;width:1px;height:1px";
  document.body.appendChild(tempEl);
  let color = `rgba(255,255,255,${alpha})`;
  for (const variable of variables) {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(variable)
      .trim();
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
}

function computeThemeColors(): ThemeColors {
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
}

export function useWaveCanvas() {
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
      ctx.fillStyle = cfg.color;
      ctx.globalAlpha = cfg.opacity;
      ctx.fill();
    };

    const frame = () => {
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
      animationId = requestAnimationFrame(frame);
    };
    animationId = requestAnimationFrame(frame);

    const onVisibilityChange = () => {
      if (document.hidden) cancelAnimationFrame(animationId);
      else animationId = requestAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const observer = new MutationObserver(
      () => (themeColors = computeThemeColors()),
    );
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return canvasRef;
}

import { useEffect, useRef } from "react";
import { useComputedColorScheme } from "@mantine/core";

type Particle = {
  nx: number;
  ny: number;
  vx: number;
  vy: number;
  radius: number;
  baseOpacity: number;
  phase: number;
  pulseSpeed: number;
};

const CONTENT_WIDTH = 950;
const FADE_MARGIN = 80;
const FADE_MIN = 0.12;
const TAU = Math.PI * 2;

const THEME = {
  dark: {
    lineColor: "140, 160, 220",
    glowColor: "140, 170, 255",
    midColor: "80, 110, 220",
    coreColor: "180, 200, 255",
    lineAlpha: 0.28,
    glowMult: 0.7,
    midMult: 0.25,
    coreMult: 0.85,
  },
  light: {
    lineColor: "30, 50, 180",
    glowColor: "30, 50, 180",
    midColor: "40, 60, 200",
    coreColor: "30, 50, 180",
    lineAlpha: 0.35,
    glowMult: 0.9,
    midMult: 0.35,
    coreMult: 1.0,
  },
};

function centerFade(px: number, viewportW: number): number {
  const contentLeft = (viewportW - CONTENT_WIDTH) / 2;
  const contentRight = contentLeft + CONTENT_WIDTH;

  if (px < contentLeft - FADE_MARGIN || px > contentRight + FADE_MARGIN)
    return 1;
  if (px > contentLeft + FADE_MARGIN && px < contentRight - FADE_MARGIN)
    return FADE_MIN;

  if (px <= contentLeft + FADE_MARGIN) {
    const t = (px - (contentLeft - FADE_MARGIN)) / (FADE_MARGIN * 2);
    return 1 - t * (1 - FADE_MIN);
  }
  const t = (px - (contentRight - FADE_MARGIN)) / (FADE_MARGIN * 2);
  return FADE_MIN + t * (1 - FADE_MIN);
}

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorScheme = useComputedColorScheme("dark");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];
    const particleCount = 65;
    const connectionDistance = 0.082;
    let time = 0;

    const syncSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
    };

    syncSize();

    // distribute particles on a jittered grid for even spacing
    const cols = Math.ceil(Math.sqrt(particleCount * 1.5));
    const rows = Math.ceil(particleCount / cols);
    const cellW = 1 / cols;
    const cellH = 1 / rows;
    let count = 0;
    for (let r = 0; r < rows && count < particleCount; r++) {
      for (let c = 0; c < cols && count < particleCount; c++) {
        particles.push({
          nx: (c + 0.2 + Math.random() * 0.6) * cellW,
          ny: (r + 0.2 + Math.random() * 0.6) * cellH,
          vx: (Math.random() - 0.5) * 0.00025,
          vy: (Math.random() - 0.5) * 0.00025,
          radius: Math.random() * 2 + 1,
          baseOpacity: Math.random() * 0.4 + 0.2,
          phase: Math.random() * TAU,
          pulseSpeed: Math.random() * 0.015 + 0.005,
        });
        count++;
      }
    }

    const animate = () => {
      syncSize();
      time++;

      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const connDist = connectionDistance * Math.sqrt(w * w + h * h);
      const t = THEME[colorScheme === "dark" ? "dark" : "light"];

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.nx += p.vx;
        p.ny += p.vy;

        if (p.nx < -0.02) p.nx = 1.02;
        if (p.nx > 1.02) p.nx = -0.02;
        if (p.ny < -0.02) p.ny = 1.02;
        if (p.ny > 1.02) p.ny = -0.02;
      }

      // draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const ax = particles[i].nx * w;
        const ay = particles[i].ny * h;
        for (let j = i + 1; j < particles.length; j++) {
          const bx = particles[j].nx * w;
          const by = particles[j].ny * h;
          const dx = ax - bx;
          const dy = ay - by;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connDist) {
            const fade = Math.min(centerFade(ax, w), centerFade(bx, w));
            const alpha = (1 - dist / connDist) * t.lineAlpha * fade;
            if (alpha < 0.003) continue;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${t.lineColor}, ${alpha})`;
            const mx = (ax + bx) / 2;
            const my = (ay + by) / 2 + Math.sin(time * 0.008 + i) * 8;
            ctx.moveTo(ax, ay);
            ctx.quadraticCurveTo(mx, my, bx, by);
            ctx.stroke();
          }
        }
      }

      // draw particles
      for (const p of particles) {
        const px = p.nx * w;
        const py = p.ny * h;
        const pulse = Math.sin(time * p.pulseSpeed + p.phase) * 0.3 + 0.7;
        const opacity = p.baseOpacity * pulse * centerFade(px, w);

        if (opacity < 0.005) continue;

        const glowRadius = p.radius * 4;
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, glowRadius);
        gradient.addColorStop(0, `rgba(${t.glowColor}, ${opacity * t.glowMult})`);
        gradient.addColorStop(0.4, `rgba(${t.midColor}, ${opacity * t.midMult})`);
        gradient.addColorStop(1, `rgba(${t.midColor}, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, glowRadius, 0, TAU);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, TAU);
        ctx.fillStyle = `rgba(${t.coreColor}, ${opacity * t.coreMult})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [colorScheme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default AnimatedBackground;

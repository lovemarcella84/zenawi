import { useEffect, useRef, type CSSProperties } from 'react';

interface ParticleFieldProps {
  className?: string;
  style?: CSSProperties;
  variant?: 'hero' | 'web';
}

/**
 * Animated node network — web formation with fading light particles.
 */
export default function ParticleField({ className, style, variant = 'web' }: ParticleFieldProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const isWeb = variant === 'web';
    let w = 0, h = 0;
    let points: {
      bx: number; by: number; x: number; y: number;
      phase: number; speed: number; amp: number; r: number; pulse: number;
    }[] = [];
    let raf = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      w = canvas!.width = rect.width * dpr;
      h = canvas!.height = rect.height * dpr;
      build();
    }

    function build() {
      points = [];
      const spacing = isWeb ? 120 : 150;
      const cols = Math.max(8, Math.round(w / (spacing * dpr)));
      const rows = Math.max(7, Math.round(h / (spacing * dpr)));
      const cw = w / cols, ch = h / rows;
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const bx = i * cw, by = j * ch;
          points.push({
            bx, by, x: bx, y: by,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.5,
            amp: cw * (isWeb ? 0.28 : 0.22),
            r: (isWeb ? 2 : 1) + Math.random() * (isWeb ? 2 : 1.1),
            pulse: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, w, h);
      for (const p of points) {
        if (!reduceMotion) {
          p.x = p.bx + Math.cos(t * 0.00022 * p.speed + p.phase) * p.amp;
          p.y = p.by + Math.sin(t * 0.00028 * p.speed + p.phase) * p.amp;
        }
      }

      const maxDist = w / (isWeb ? 7.5 : 9);
      ctx!.lineWidth = (isWeb ? 1.2 : 1) * dpr;
      for (let a = 0; a < points.length; a++) {
        for (let b = a + 1; b < points.length; b++) {
          const dx = points[a].x - points[b].x, dy = points[a].y - points[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isWeb ? 0.14 : 0.1);
            ctx!.strokeStyle = isWeb
              ? `rgba(31,66,105,${alpha.toFixed(3)})`
              : `rgba(227,182,94,${alpha.toFixed(3)})`;
            ctx!.beginPath();
            ctx!.moveTo(points[a].x, points[a].y);
            ctx!.lineTo(points[b].x, points[b].y);
            ctx!.stroke();
          }
        }
      }

      for (const p of points) {
        const glow = 0.45 + 0.55 * Math.sin(t * 0.0011 * p.speed + p.pulse);
        const coreAlpha = isWeb ? 0.16 + glow * 0.24 : 0.08 + glow * 0.1;
        const glowRadius = p.r * dpr * (isWeb ? 6 : 4);

        const grad = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        if (isWeb) {
          grad.addColorStop(0, `rgba(240,211,145,${(coreAlpha * 0.95).toFixed(3)})`);
          grad.addColorStop(0.35, `rgba(227,182,94,${(coreAlpha * 0.45).toFixed(3)})`);
          grad.addColorStop(1, 'rgba(227,182,94,0)');
        } else {
          grad.addColorStop(0, `rgba(255,248,220,${(coreAlpha * 0.9).toFixed(3)})`);
          grad.addColorStop(0.4, `rgba(240,211,145,${(coreAlpha * 0.35).toFixed(3)})`);
          grad.addColorStop(1, 'rgba(240,211,145,0)');
        }
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = isWeb
          ? `rgba(255,248,220,${(0.28 + glow * 0.22).toFixed(3)})`
          : `rgba(240,211,145,${(0.12 + glow * 0.18).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r * dpr, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }

    resize();
    draw(0);
    const onResize = () => { cancelAnimationFrame(raf); resize(); if (reduceMotion) draw(0); };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, [variant]);

  return <canvas ref={ref} className={className} style={style} aria-hidden="true" />;
}

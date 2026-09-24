import type { CSSProperties } from 'react';
import ParticleField from './ParticleField';

export default function HeroBackground() {
  return (
    <div className="hero-bg-layers" aria-hidden="true">
      <div className="hero-pattern-grid" />
      <svg className="hero-pattern-lines" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hero-line-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(227,182,94,0)" />
            <stop offset="50%" stopColor="rgba(227,182,94,0.16)" />
            <stop offset="100%" stopColor="rgba(227,182,94,0)" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={i}
            x1={-100 + i * 220}
            y1={800}
            x2={300 + i * 220}
            y2={0}
            stroke="url(#hero-line-grad)"
            strokeWidth="1.2"
            className={`hero-line hero-line-${i}`}
          />
        ))}
        <path
          className="hero-curve"
          d="M0,520 Q300,420 600,480 T1200,440 L1200,800 L0,800 Z"
          fill="rgba(227,182,94,0.02)"
        />
        <path
          className="hero-curve hero-curve-2"
          d="M0,600 Q400,500 800,560 T1200,520 L1200,800 L0,800 Z"
          fill="rgba(240,211,145,0.015)"
        />
      </svg>
      <ParticleField variant="hero" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      <div className="hero-float-dots">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="hero-dot" style={{ '--i': i } as CSSProperties} />
        ))}
      </div>
    </div>
  );
}

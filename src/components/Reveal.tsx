import { useEffect, useRef, useState, type ReactNode, type ElementType, type CSSProperties } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  variant?: 'fade' | 'slide';
}

export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  style,
  variant = 'fade',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setVisible(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { setVisible(true); io.unobserve(entry.target); }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = variant === 'slide' ? 'reveal-slide' : 'reveal';

  return (
    <Tag
      ref={ref}
      className={`${base}${visible ? ' in-view' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </Tag>
  );
}

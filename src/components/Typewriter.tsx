import { useEffect, useRef, useState, type ElementType } from 'react';

interface TypewriterProps {
  text: string;
  as?: ElementType;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function Typewriter({
  text,
  as: Tag = 'span',
  className = '',
  speed = 12,
  delay = 0,
}: TypewriterProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setDisplayed(text);
      setDone(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -30px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text]);

  useEffect(() => {
    if (!started) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }
    let cancelled = false;
    let interval = 0;
    const startTimer = window.setTimeout(() => {
      let i = 0;
      interval = window.setInterval(() => {
        if (cancelled) return;
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, delay * 1000);
    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);
      window.clearInterval(interval);
    };
  }, [started, text, speed, delay]);

  return (
    <Tag ref={ref} className={`typewriter${done ? ' done' : ''} ${className}`.trim()}>
      {displayed}
      {!done && started && <span className="typewriter-cursor" aria-hidden="true">|</span>}
    </Tag>
  );
}

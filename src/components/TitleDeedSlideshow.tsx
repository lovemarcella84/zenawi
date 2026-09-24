import { useEffect, useRef, useState } from 'react';

export interface DeedSlide {
  src: string;
  alt: string;
}

interface TitleDeedSlideshowProps {
  slides: DeedSlide[];
  intervalMs?: number;
}

/** Auto-advancing photo slideshow — pauses on hover/focus, respects reduced-motion. */
export default function TitleDeedSlideshow({ slides, intervalMs = 4200 }: TitleDeedSlideshowProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || paused) return;
    timerRef.current = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(timerRef.current);
  }, [paused, slides.length, intervalMs]);

  if (slides.length === 0) return null;

  return (
    <div
      className="deed-slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="deed-slideshow-frame">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`deed-slide${i === active ? ' active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      {slides.length > 1 && (
        <div className="deed-slideshow-dots" role="tablist" aria-label="Title deed photos">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show photo ${i + 1}`}
              className={`deed-dot${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

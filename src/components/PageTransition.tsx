import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];
const easeIn: [number, number, number, number] = [0.4, 0, 1, 1];

const variants: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: easeIn } },
};

/** Thin gold sweep across the very top of the viewport on each route change. */
function RouteSweep() {
  const location = useLocation();
  const [key, setKey] = useState(0);
  useEffect(() => setKey((k) => k + 1), [location.pathname]);
  return (
    <AnimatePresence>
      <motion.div
        key={key}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 200,
          transformOrigin: 'left',
          background: 'linear-gradient(90deg, var(--gold-400), var(--gold-600))',
          pointerEvents: 'none',
        }}
      />
    </AnimatePresence>
  );
}

/** SVG wave curtain that sweeps across the viewport on route changes. */
function RouteSvgCurtain() {
  const location = useLocation();
  const [key, setKey] = useState(0);
  useEffect(() => setKey((k) => k + 1), [location.pathname]);

  return (
    <AnimatePresence>
      <motion.div
        key={key}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.85, delay: 0.35, ease: easeOut }}
        style={{
          position: 'fixed', inset: 0, zIndex: 50, pointerEvents: 'none',
        }}
      >
        <motion.svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%' }}
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <defs>
            <linearGradient id="route-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0b1c33" />
              <stop offset="45%" stopColor="#163256" />
              <stop offset="100%" stopColor="#1f4269" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#route-grad)"
            initial={{ d: 'M0,0 L1440,0 L1440,900 L0,900 Z' }}
            animate={{ d: 'M0,0 L1440,0 L1440,620 Q1080,720 720,660 T0,740 L0,0 Z' }}
            transition={{ duration: 0.55, ease: easeOut }}
          />
          <motion.path
            d="M-40,680 Q360,580 720,640 T1520,600"
            stroke="rgba(240,211,145,0.55)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: easeOut }}
          />
          <motion.path
            d="M-60,760 Q400,660 800,720 T1560,680"
            stroke="rgba(227,182,94,0.4)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
          />
        </motion.svg>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, [location.pathname]);
  return (
    <>
      <RouteSweep />
      <RouteSvgCurtain />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

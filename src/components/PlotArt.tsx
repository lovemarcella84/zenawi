function hashSeed(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface PlotArtProps {
  id: string;
  sold?: boolean;
  className?: string;
}

/**
 * A generated "survey plot" illustration used when we don't yet have a real
 * photo for a listing — deterministic per property id so it stays stable,
 * and varied enough that cards don't look identical.
 */
export default function PlotArt({ id, sold, className }: PlotArtProps) {
  const rand = mulberry32(hashSeed(id));
  const cols = 3 + Math.floor(rand() * 2);
  const rows = 3 + Math.floor(rand() * 2);
  const cellW = 300 / cols;
  const cellH = 200 / rows;
  const gold = sold ? '#7c8899' : '#e3b65e';
  const goldSoft = sold ? '#8b96a5' : '#f0d391';

  const parcels: { x: number; y: number; w: number; h: number; fill: string }[] = [];
  const highlightIdx = Math.floor(rand() * cols * rows);
  let idx = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const inset = 2.2;
      const isHi = idx === highlightIdx && !sold;
      parcels.push({
        x: c * cellW + inset,
        y: r * cellH + inset,
        w: cellW - inset * 2,
        h: cellH - inset * 2,
        fill: isHi ? gold : 'rgba(255,255,255,0.05)',
      });
      idx++;
    }
  }

  return (
    <svg
      viewBox="0 0 300 200"
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={sold ? '#1c2b3d' : '#163256'} />
          <stop offset="100%" stopColor={sold ? '#0b1220' : '#0b1c33'} />
        </linearGradient>
      </defs>
      <rect width="300" height="200" fill={`url(#bg-${id})`} />
      {parcels.map((p, i) => (
        <rect
          key={i}
          x={p.x} y={p.y} width={p.w} height={p.h}
          fill={p.fill}
          stroke={sold ? 'rgba(255,255,255,0.14)' : 'rgba(227,182,94,0.35)'}
          strokeWidth="1"
          rx="2"
        />
      ))}
      {/* location pin */}
      <g transform="translate(150,100)" opacity={sold ? 0.55 : 0.9}>
        <path
          d="M0 -22c-9 0-16 7-16 16 0 12 16 28 16 28s16-16 16-28c0-9-7-16-16-16z"
          fill={goldSoft}
        />
        <circle cx="0" cy="-6" r="6" fill={sold ? '#1c2b3d' : '#0e2340'} />
      </g>
      {sold && (
        <text x="150" y="182" textAnchor="middle" fontSize="11" letterSpacing="2"
          fill="rgba(255,255,255,0.55)" fontFamily="Inter, sans-serif" fontWeight={700}>
          SOLD OUT
        </text>
      )}
    </svg>
  );
}

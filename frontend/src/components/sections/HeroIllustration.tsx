'use client';

import { motion } from 'framer-motion';

/* ─── Orbit ring data ─────────────────────────────────────────── */
const RINGS = [
  { size: 460, border: 'rgba(34,211,238,0.07)',  shadow: 'rgba(34,211,238,0.04)',  dur: 18, ccw: false },
  { size: 380, border: 'rgba(59,130,246,0.10)',  shadow: 'rgba(59,130,246,0.05)',  dur: 14, ccw: true  },
  { size: 300, border: 'rgba(34,211,238,0.13)',  shadow: 'rgba(34,211,238,0.07)',  dur: 10, ccw: false },
  { size: 220, border: 'rgba(59,130,246,0.18)',  shadow: 'rgba(59,130,246,0.09)',  dur: 7,  ccw: true  },
];

/* ─── Orbit node data (dots on rings) ─────────────────────────── */
const NODES = [
  { ring: 460, angle: 30,  size: 5, color: 'rgba(34,211,238,0.9)' },
  { ring: 460, angle: 200, size: 3, color: 'rgba(59,130,246,0.7)' },
  { ring: 380, angle: 110, size: 4, color: 'rgba(59,130,246,0.9)' },
  { ring: 380, angle: 290, size: 3, color: 'rgba(34,211,238,0.6)' },
  { ring: 300, angle: 60,  size: 3, color: 'rgba(34,211,238,0.8)' },
  { ring: 300, angle: 240, size: 4, color: 'rgba(59,130,246,0.8)' },
];

/* ─── Circuit line segments ───────────────────────────────────── */
const CIRCUITS = [
  { x1: 250, y1: 170, x2: 250, y2: 80,  x3: 310, y3: 80  },
  { x1: 330, y1: 250, x2: 420, y2: 250, x3: 420, y3: 190 },
  { x1: 250, y1: 330, x2: 250, y2: 420, x3: 190, y3: 420 },
  { x1: 170, y1: 250, x2: 80,  y2: 250, x3: 80,  y3: 310 },
  { x1: 310, y1: 190, x2: 370, y2: 130, x3: 400, y3: 130 },
  { x1: 190, y1: 310, x2: 130, y2: 370, x3: 100, y3: 370 },
];

/* ─── Floating particles ──────────────────────────────────────── */
const PARTICLES = [
  { x: 60,  y: 80,  s: 2.5, dur: 3.2, delay: 0    },
  { x: 420, y: 60,  s: 2,   dur: 4.1, delay: 0.6  },
  { x: 460, y: 340, s: 3,   dur: 3.7, delay: 1.2  },
  { x: 40,  y: 380, s: 2,   dur: 4.5, delay: 0.3  },
  { x: 200, y: 30,  s: 1.5, dur: 3.9, delay: 1.8  },
  { x: 460, y: 180, s: 2,   dur: 3.4, delay: 0.9  },
  { x: 30,  y: 220, s: 1.5, dur: 4.8, delay: 2.1  },
  { x: 380, y: 450, s: 2.5, dur: 3.6, delay: 0.5  },
  { x: 120, y: 460, s: 2,   dur: 4.2, delay: 1.5  },
  { x: 340, y: 20,  s: 1.5, dur: 3.1, delay: 2.4  },
];

/* ─── Floating data chips ─────────────────────────────────────── */
const CHIPS = [
  { label: 'AI / ML',      x: 20,  y: 120, dur: 5.2, delay: 0   },
  { label: 'IoT',          x: 370, y: 90,  dur: 4.8, delay: 0.8 },
  { label: 'Cybersec',     x: 380, y: 360, dur: 5.5, delay: 1.4 },
  { label: '24 hrs',       x: 10,  y: 340, dur: 4.6, delay: 0.4 },
];

/* ─── Helper: position on ring circumference ──────────────────── */
function nodePos(ringSize: number, angleDeg: number) {
  const r = ringSize / 2;
  const rad = (angleDeg * Math.PI) / 180;
  return {
    cx: 250 + r * Math.cos(rad),
    cy: 250 + r * Math.sin(rad),
  };
}

export default function HeroIllustration({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="flex items-center justify-center w-full h-full"
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Outer wrapper — sets the illustration size */}
      <div style={{ position: 'relative', width: '500px', height: '500px', flexShrink: 0 }}>

        {/* ── Bloom / ambient glow ── */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(34,211,238,0.11) 0%, rgba(59,130,246,0.07) 40%, transparent 70%)',
          filter: 'blur(2px)',
          pointerEvents: 'none',
        }} />

        {/* ── SVG canvas ── */}
        <svg
          viewBox="0 0 500 500"
          width="500" height="500"
          style={{ position: 'absolute', inset: 0, overflow: 'visible' }}
          aria-hidden="true"
        >
          <defs>
            {/* Radial glow filter */}
            <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="glow-strong" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            {/* Gradient for circuit lines */}
            <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34,211,238,0.6)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
            </linearGradient>
            {/* Core glass gradient */}
            <linearGradient id="cube-face" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34,211,238,0.12)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.06)" />
            </linearGradient>
            <linearGradient id="cube-edge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34,211,238,0.9)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.6)" />
            </linearGradient>
            {/* Holographic ring gradient */}
            <linearGradient id="holo-ring" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34,211,238,0)" />
              <stop offset="30%" stopColor="rgba(34,211,238,0.5)" />
              <stop offset="70%" stopColor="rgba(59,130,246,0.5)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </linearGradient>
          </defs>

          {/* ── Holographic base rings ── */}
          {RINGS.map((ring, i) => (
            <motion.circle
              key={`ring-${i}`}
              cx={250} cy={250} r={ring.size / 2}
              fill="none"
              stroke={ring.border}
              strokeWidth={i === 2 ? 1.5 : 1}
              style={{ filter: `drop-shadow(0 0 6px ${ring.shadow})` }}
              animate={{ scale: [1, 1.015, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: ring.dur * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            />
          ))}

          {/* ── Orbit nodes (dots on rings) ── */}
          {NODES.map((n, i) => {
            const { cx, cy } = nodePos(n.ring, n.angle);
            return (
              <motion.circle
                key={`node-${i}`}
                cx={cx} cy={cy} r={n.size / 2}
                fill={n.color}
                filter="url(#glow-cyan)"
                animate={{ opacity: [0.6, 1, 0.6], r: [n.size / 2, n.size / 2 + 0.5, n.size / 2] }}
                transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              />
            );
          })}

          {/* ── Circuit lines ── */}
          {CIRCUITS.map((c, i) => (
            <motion.polyline
              key={`circuit-${i}`}
              points={`${c.x1},${c.y1} ${c.x2},${c.y2} ${c.x3},${c.y3}`}
              fill="none"
              stroke="url(#circuit-grad)"
              strokeWidth={0.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: 'easeOut' }}
            />
          ))}

          {/* Circuit endpoint dots */}
          {CIRCUITS.map((c, i) => (
            <motion.circle
              key={`cdot-${i}`}
              cx={c.x3} cy={c.y3} r={2.5}
              fill="rgba(34,211,238,0.7)"
              filter="url(#glow-cyan)"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: [0.5, 1, 0.5], scale: 1 } : {}}
              transition={{ duration: 2, delay: 1.2 + i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          {/* ── Geometric floating layers (outer hexagonal frame) ── */}
          {/* Outer rotated square layer 1 */}
          <motion.rect
            x={250 - 105} y={250 - 105} width={210} height={210}
            rx={18} ry={18}
            fill="rgba(34,211,238,0.025)"
            stroke="rgba(34,211,238,0.18)"
            strokeWidth={1}
            style={{ transformOrigin: '250px 250px' }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />
          {/* Outer rotated square layer 2 */}
          <motion.rect
            x={250 - 88} y={250 - 88} width={176} height={176}
            rx={14} ry={14}
            fill="rgba(59,130,246,0.02)"
            stroke="rgba(59,130,246,0.14)"
            strokeWidth={0.8}
            style={{ transformOrigin: '250px 250px' }}
            animate={{ rotate: [45, 405] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />

          {/* ── Core glass cube (main 3D-ish box) ── */}
          {/* Back face (depth illusion) */}
          <motion.rect
            x={250 - 52 + 10} y={250 - 52 - 10} width={104} height={104}
            rx={10} ry={10}
            fill="rgba(59,130,246,0.04)"
            stroke="rgba(59,130,246,0.25)"
            strokeWidth={1}
            style={{ transformOrigin: '250px 250px' }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Depth connector lines */}
          {[
            [250 - 52, 250 - 52, 250 - 52 + 10, 250 - 52 - 10],
            [250 + 52, 250 - 52, 250 + 52 + 10, 250 - 52 - 10],
            [250 + 52, 250 + 52, 250 + 52 + 10, 250 + 52 - 10],
            [250 - 52, 250 + 52, 250 - 52 + 10, 250 + 52 - 10],
          ].map(([x1, y1, x2, y2], i) => (
            <motion.line
              key={`depth-${i}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="rgba(59,130,246,0.3)"
              strokeWidth={0.8}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
          {/* Front face */}
          <motion.rect
            x={250 - 52} y={250 - 52} width={104} height={104}
            rx={10} ry={10}
            fill="url(#cube-face)"
            stroke="url(#cube-edge)"
            strokeWidth={1.5}
            filter="url(#glow-strong)"
            style={{ transformOrigin: '250px 250px' }}
            animate={{ y: [0, -6, 0], rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Inner face */}
          <motion.rect
            x={250 - 34} y={250 - 34} width={68} height={68}
            rx={7} ry={7}
            fill="rgba(34,211,238,0.04)"
            stroke="rgba(34,211,238,0.3)"
            strokeWidth={0.8}
            animate={{ y: [0, -6, 0], rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Corner accent dots on front face */}
          {[
            [250 - 52, 250 - 52],
            [250 + 52, 250 - 52],
            [250 + 52, 250 + 52],
            [250 - 52, 250 + 52],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={`corner-${i}`}
              cx={cx} cy={cy} r={3.5}
              fill="rgba(34,211,238,0.95)"
              filter="url(#glow-cyan)"
              animate={{ y: [0, -6, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
            />
          ))}

          {/* ── Floating particles ── */}
          {PARTICLES.map((p, i) => (
            <motion.circle
              key={`particle-${i}`}
              cx={p.x} cy={p.y} r={p.s / 2}
              fill={i % 2 === 0 ? 'rgba(34,211,238,0.85)' : 'rgba(59,130,246,0.85)'}
              filter="url(#glow-cyan)"
              animate={{ cy: [p.y, p.y - 10, p.y], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
            />
          ))}
        </svg>

        {/* ── Code symbol </> — HTML overlay for font rendering ── */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-mono)',
            fontSize: '26px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'rgba(34,211,238,0.95)',
            textShadow: '0 0 16px rgba(34,211,238,0.9), 0 0 40px rgba(34,211,238,0.5), 0 0 80px rgba(34,211,238,0.2)',
            userSelect: 'none',
            zIndex: 10,
            whiteSpace: 'nowrap',
          }}
          animate={{ y: [0, -6, 0], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {'</>'}
        </motion.div>

        {/* ── Floating data chips ── */}
        {CHIPS.map((chip, i) => (
          <motion.div
            key={`chip-${i}`}
            style={{
              position: 'absolute',
              left: chip.x,
              top: chip.y,
              padding: '5px 10px',
              borderRadius: '8px',
              background: 'rgba(13,20,36,0.75)',
              border: '1px solid rgba(34,211,238,0.22)',
              backdropFilter: 'blur(10px)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: 'rgba(34,211,238,0.85)',
              whiteSpace: 'nowrap',
              boxShadow: '0 0 12px rgba(34,211,238,0.1)',
              zIndex: 20,
            }}
            animate={{ y: [0, -7, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: chip.dur, repeat: Infinity, ease: 'easeInOut', delay: chip.delay }}
          >
            {chip.label}
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}

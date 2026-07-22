'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: '24h', label: 'Build Duration' },
  { value: '10+', label: 'Problem Domains' },
  { value: '11', label: 'Committees' },
  { value: '2–4', label: 'Members per Team' },
];

export default function StatsBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative py-10 border-y border-white/[0.06] bg-[var(--color-surface-1)]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="stat-card text-center"
            >
              <div
                className="font-display font-bold text-white mb-1.5"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

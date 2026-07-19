'use client';

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const stats = [
  { value: '24', label: 'Hours', suffix: 'hr', color: '#00d4ff', delay: 0 },
  { value: '105', label: 'Teams Expected', suffix: '+', color: '#8b5cf6', delay: 0.1 },
  { value: '3', label: 'IEEE Tracks', suffix: '', color: '#f59e0b', delay: 0.2 },
  { value: '35', label: 'Max Teams/Track', suffix: '', color: '#6366f1', delay: 0.3 },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: stat.delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center py-8 px-6"
    >
      {/* Vertical divider (not on last) */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/5" />

      <div className="flex items-baseline gap-1 mb-2">
        <motion.span
          className="font-display font-800 text-4xl sm:text-5xl"
          style={{ color: stat.color }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
        >
          {stat.value}
        </motion.span>
        {stat.suffix && (
          <span className="font-display font-600 text-2xl" style={{ color: stat.color }}>
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="text-sm font-medium text-white/40 text-center">{stat.label}</p>

      {/* Glow dot */}
      <div
        className="absolute bottom-4 w-1.5 h-1.5 rounded-full animate-pulse-glow"
        style={{ background: stat.color }}
      />
    </motion.div>
  );
}

export default function StatsBanner() {
  return (
    <section
      className="relative border-y border-white/5"
      style={{ background: 'var(--color-surface-0)' }}
      aria-label="Event statistics"
    >
      <div className="container">
        <div className={cn(
          'grid grid-cols-2 lg:grid-cols-4',
          'divide-x divide-white/5'
        )}>
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

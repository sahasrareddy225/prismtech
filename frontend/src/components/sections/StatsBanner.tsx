'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

const stats = [
  { value: 24, label: 'Hours', suffix: 'hr', color: 'var(--color-prism-cyan)', delay: 0 },
  { value: 105, label: 'Teams Expected', suffix: '+', color: 'var(--color-prism-violet)', delay: 0.1 },
  { value: 3, label: 'IEEE Tracks', suffix: '', color: 'var(--color-prism-gold)', delay: 0.2 },
  { value: 120, label: 'Total Hackers', suffix: '+', color: 'var(--color-ieee-blue-light)', delay: 0.3 },
];

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));
  
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: stat.delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center justify-center py-12 px-6 overflow-hidden group"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${stat.color}, transparent 60%)` }}
      />
      
      <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/5" />

      <div className="flex items-baseline gap-1 mb-2 relative z-10">
        <span
          className="font-display font-bold text-5xl sm:text-6xl"
          style={{ color: stat.color }}
        >
          <AnimatedCounter value={stat.value} />
        </span>
        {stat.suffix && (
          <span className="font-display font-semibold text-3xl" style={{ color: stat.color }}>
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="text-sm font-medium text-[var(--color-text-secondary)] text-center relative z-10 uppercase tracking-widest">{stat.label}</p>
    </motion.div>
  );
}

export default function StatsBanner() {
  return (
    <section className="relative border-y border-white/5 bg-[var(--color-surface-1)]">
      <div className="container max-w-7xl">
        <div className={cn('grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5')}>
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  align?: 'left' | 'center';
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = 'left',
}: PageHeroProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const isCenter = align === 'center';

  return (
    <section
      ref={ref}
      className={`relative pt-28 pb-12 border-b border-white/[0.05] overflow-hidden ${isCenter ? 'text-center' : ''}`}
      aria-label="Page hero"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,98,155,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container relative z-10">
        {eyebrow && (
          <motion.span
            className="eyebrow"
            style={{ justifyContent: isCenter ? 'center' : 'flex-start' }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          className="text-[var(--color-text-primary)] mt-2 mb-4"
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            className={`text-base text-[var(--color-text-secondary)] leading-relaxed ${isCenter ? 'mx-auto' : ''} max-w-xl mb-6`}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

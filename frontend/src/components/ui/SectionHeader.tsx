'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center';
  eyebrowId?: string;
  headingId?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  headingId,
  children,
  className = '',
}: SectionHeaderProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const isCenter = align === 'center';

  return (
    <div
      ref={ref}
      className={`mb-10 md:mb-12 ${isCenter ? 'flex flex-col items-center text-center' : 'flex flex-col items-start text-left'} ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3"
        >
          <span className="eyebrow">{eyebrow}</span>
        </motion.div>
      )}

      <motion.h2
        id={headingId}
        className="text-[var(--color-text-primary)] mb-4"
        style={{
          fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-0.025em',
        }}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="text-[var(--color-text-secondary)] leading-relaxed"
          style={{ fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)', maxWidth: '58ch' }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        >
          {description}
        </motion.p>
      )}

      {children && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

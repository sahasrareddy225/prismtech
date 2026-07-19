'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCountdownValues, EVENT_DATE } from '@/lib/utils';

interface TimeUnitProps {
  value: number;
  label: string;
  color: string;
}

function TimeUnit({ value, label, color }: TimeUnitProps) {
  const displayValue = String(value).padStart(2, '0');
  const digits = displayValue.split('');

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {digits.map((digit, i) => (
          <div
            key={i}
            className="relative w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 rounded-xl overflow-hidden glass"
            style={{ borderColor: `${color}20` }}
          >
            {/* Shine effect */}
            <div
              className="absolute inset-0 opacity-10"
              style={{ background: `linear-gradient(180deg, ${color}40 0%, transparent 50%)` }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={digit}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="font-display font-800 text-3xl sm:text-4xl md:text-5xl"
                  style={{ color }}
                >
                  {digit}
                </motion.span>
              </AnimatePresence>
            </div>
            {/* Divider line */}
            <div
              className="absolute left-0 right-0 top-1/2 h-px"
              style={{ background: `${color}15` }}
            />
          </div>
        ))}
      </div>
      <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-white/40">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [values, setValues] = useState(getCountdownValues(EVENT_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(getCountdownValues(EVENT_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (values.isExpired) {
    return (
      <div className="text-center py-4">
        <p className="font-display text-2xl font-700 text-gradient-prism">
          🚀 PRISMTECH 2026 is LIVE!
        </p>
      </div>
    );
  }

  const units = [
    { value: values.days, label: 'Days', color: '#00d4ff' },
    { value: values.hours, label: 'Hours', color: '#8b5cf6' },
    { value: values.minutes, label: 'Minutes', color: '#f59e0b' },
    { value: values.seconds, label: 'Seconds', color: '#6366f1' },
  ];

  return (
    <div
      className="flex items-end gap-3 sm:gap-5 md:gap-6"
      role="timer"
      aria-label="Countdown to PRISMTECH 2026"
      aria-live="polite"
    >
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-end gap-3 sm:gap-5 md:gap-6">
          <TimeUnit value={unit.value} label={unit.label} color={unit.color} />
          {i < units.length - 1 && (
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              className="font-display font-800 text-3xl sm:text-4xl text-white/20 mb-5 sm:mb-7"
              aria-hidden="true"
            >
              :
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}

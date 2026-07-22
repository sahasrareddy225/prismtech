'use client';

import { useState, useEffect } from 'react';

const REGISTRATION_DEADLINE = new Date('2026-09-21T23:59:59+05:30');

function TimeBlock({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="flex items-center justify-center"
        style={{
          width: 'clamp(64px, 9vw, 84px)',
          height: 'clamp(64px, 9vw, 84px)',
          background: 'var(--color-surface-2)',
          border: '1px solid rgba(255, 255, 255, 0.09)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }}
      >
        <span
          className="font-display font-bold tabular-nums text-[var(--color-text-primary)]"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', letterSpacing: '-0.03em' }}
          aria-label={`${formatted} ${label}`}
        >
          {formatted}
        </span>
      </div>
      <span
        className="font-medium uppercase text-[var(--color-text-muted)]"
        style={{ fontSize: '0.65rem', letterSpacing: '0.09em' }}
      >
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer({ deadline = REGISTRATION_DEADLINE }: { deadline?: Date }) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const calc = () => {
      const diff = Math.max(0, deadline.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  if (!mounted) {
    return (
      <div
        className="flex items-center justify-center gap-3 sm:gap-4"
        style={{ minHeight: '96px' }}
        aria-hidden="true"
      />
    );
  }

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Mins' },
    { value: timeLeft.seconds, label: 'Secs' },
  ];

  return (
    <div
      className="flex items-center justify-center gap-3 sm:gap-5"
      role="timer"
      aria-label="Countdown to registration deadline"
      aria-live="polite"
    >
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 sm:gap-5">
          <TimeBlock value={unit.value} label={unit.label} />
          {i < units.length - 1 && (
            <span
              className="font-display font-bold text-[var(--color-text-muted)] mb-4 select-none"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
              aria-hidden="true"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

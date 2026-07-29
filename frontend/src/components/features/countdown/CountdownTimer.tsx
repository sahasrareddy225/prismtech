'use client';

import { useState, useEffect } from 'react';

const REGISTRATION_DEADLINE = new Date('2026-09-09T23:59:59+05:30');

function TimeBlock({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative flex items-center justify-center w-[88px] h-[88px] cursor-default
                   transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.04]"
        style={{ borderRadius: '20px' }}
      >
        {/* Gradient border */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: '20px',
            padding: '1px',
            background: 'linear-gradient(145deg, rgba(34,211,238,0.45) 0%, rgba(14,165,233,0.10) 50%, rgba(34,211,238,0.30) 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
        {/* Glass fill */}
        <div
          className="absolute inset-[1px]"
          style={{
            borderRadius: '19px',
            background: 'linear-gradient(160deg, rgba(14,165,233,0.16) 0%, rgba(8,16,32,0.80) 100%)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.09), 0 0 28px rgba(14,165,233,0.14)',
          }}
        />
        {/* Top sheen */}
        <div
          className="absolute inset-[1px]"
          style={{
            borderRadius: '19px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, transparent 55%)',
          }}
        />
        <span
          className="relative font-display font-extrabold tabular-nums text-white"
          style={{ fontSize: '2.1rem', letterSpacing: '-0.04em' }}
          aria-label={`${formatted} ${label}`}
        >
          {formatted}
        </span>
      </div>
      <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-cyan-400/70">
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
        className="flex items-center justify-center"
        style={{ minHeight: '110px' }}
        aria-hidden="true"
      />
    );
  }

  const units = [
    { value: timeLeft.days,    label: 'Days' },
    { value: timeLeft.hours,   label: 'Hours' },
    { value: timeLeft.minutes, label: 'Mins' },
    { value: timeLeft.seconds, label: 'Secs' },
  ];

  return (
    <div
      className="flex items-center justify-center gap-6"
      role="timer"
      aria-label="Countdown to registration deadline"
      aria-live="polite"
    >
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-6">
          <TimeBlock value={unit.value} label={unit.label} />
          {i < units.length - 1 && (
            <span
              className="font-display font-semibold text-cyan-400/35 mb-7 select-none"
              style={{ fontSize: '1.5rem' }}
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

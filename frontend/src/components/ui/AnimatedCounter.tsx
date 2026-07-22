'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (inView && !startedRef.current) {
      startedRef.current = true;
      const startTime = performance.now();
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(easeOutQuart(progress) * target));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(tick);
    }
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${target}${suffix}`}>
      {prefix}{count}{suffix}
    </span>
  );
}

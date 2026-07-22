'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Target, Wrench, MonitorSmartphone, Mic, BarChart3 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const CRITERIA = [
  { icon: Lightbulb, label: 'Innovation', weight: 20, desc: 'Originality of the idea and creative problem-solving approach.' },
  { icon: Target, label: 'Feasibility', weight: 20, desc: 'Practicality, technical soundness, and real-world implementability.' },
  { icon: BarChart3, label: 'Impact', weight: 20, desc: 'Social, environmental, or business value the solution creates.' },
  { icon: Wrench, label: 'Technical Depth', weight: 20, desc: 'Quality of the code, architecture decisions, and implementation.' },
  { icon: MonitorSmartphone, label: 'UX & Design', weight: 10, desc: 'User experience, interface quality, and accessibility.' },
  { icon: Mic, label: 'Pitch Quality', weight: 10, desc: 'Clarity, confidence, and effectiveness of the final presentation.' },
];

export default function JudgingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section
      id="judging"
      ref={ref}
      className="section bg-[var(--color-surface-0)]"
      aria-labelledby="judging-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Intro */}
          <div>
            <SectionHeader
              eyebrow="Evaluation"
              title={<>How your work will be <span className="text-gradient-ieee">judged.</span></>}
              description="Projects are evaluated across six dimensions by a diverse jury of industry professionals, IEEE experts, and faculty members. Each criterion is weighted to reward both technical excellence and real-world impact."
              align="left"
            />

            {/* Summary table */}
            <motion.div
              className="glass-card p-5"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">Score Breakdown</div>
              <div className="space-y-2.5">
                {CRITERIA.map(c => (
                  <div key={c.label} className="flex items-center gap-3">
                    <div className="text-xs text-[var(--color-text-secondary)] w-28 shrink-0">{c.label}</div>
                    <div className="flex-1 h-1 bg-white/06 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-[var(--color-ieee-blue)]"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${c.weight * 5}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <div className="text-xs font-bold text-[var(--color-text-secondary)] w-8 text-right tabular-nums">
                      {c.weight}%
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/06 flex items-center justify-between">
                <span className="text-xs text-[var(--color-text-muted)]">Total</span>
                <span className="text-sm font-bold text-white">100%</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Criteria detail cards */}
          <div className="space-y-3">
            {CRITERIA.map((c, i) => (
              <motion.div
                key={c.label}
                className="glass-card p-4 flex gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.12 + i * 0.065, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[var(--color-surface-3)] border border-white/08">
                  <c.icon className="text-[var(--color-ieee-blue-light)]" style={{ width: '16px', height: '16px' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-sm text-[var(--color-text-primary)]">{c.label}</span>
                    <span className="text-xs font-bold text-[var(--color-ieee-blue-light)] tabular-nums shrink-0">{c.weight}%</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

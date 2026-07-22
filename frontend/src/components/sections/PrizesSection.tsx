'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Star, Download } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const PRIZES = [
  {
    rank: 'Winner',
    icon: Trophy,
    items: ['Trophy & cash award', 'IEEE spotlight feature', 'Mentor access program', 'Track winner certification'],
    highlight: true,
  },
  {
    rank: 'Runner-Up',
    icon: Medal,
    items: ['Trophy & cash award', 'Sponsor recognition', 'IEEE participation certificate'],
    highlight: false,
  },
];

const SPECIAL = [
  { title: 'Best Social Impact' },
  { title: 'Best First-Time Team' },
  { title: 'Best Technical Execution' },
];

const RULES = [
  'Eligible students must carry institutional ID and register once only.',
  'Submissions must include project summary, presentation, GitHub link, and demo link.',
  'Judging criteria: innovation, feasibility, impact, technical depth, UX, and pitch quality.',
  'Code of conduct violations, plagiarism, or disruptive behavior can lead to disqualification.',
  'Teams retain intellectual property; shared sponsor datasets must follow stated license terms.',
];

const JUDGING = [
  { label: 'Innovation', weight: 20 },
  { label: 'Feasibility', weight: 20 },
  { label: 'Impact', weight: 20 },
  { label: 'Technical Depth', weight: 20 },
  { label: 'UX & Design', weight: 10 },
  { label: 'Pitch Quality', weight: 10 },
];

export default function PrizesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section id="prizes" className="section bg-[var(--color-surface-1)]" ref={ref} aria-labelledby="prizes-heading">
      <div className="container">

        <SectionHeader
          eyebrow="Rules and Guidelines"
          title={<>Clear rules for <span className="text-gradient-ieee">fair innovation.</span></>}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: Prizes */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-5">Prizes & Recognition</h3>

            <div className="space-y-3 mb-7">
              {PRIZES.map((prize) => (
                <div
                  key={prize.rank}
                  className={`glass-card p-5 flex gap-4 ${prize.highlight ? 'border-[var(--color-ieee-blue)]/25' : ''}`}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[var(--color-surface-3)] border border-white/08">
                    <prize.icon
                      style={{ width: '18px', height: '18px', color: prize.highlight ? 'var(--color-prism-gold)' : 'var(--color-text-secondary)' }}
                    />
                  </div>
                  <div>
                    <div
                      className="font-bold text-sm mb-2"
                      style={{ color: prize.highlight ? 'var(--color-prism-gold)' : 'var(--color-text-primary)' }}
                    >
                      {prize.rank}
                    </div>
                    <ul className="space-y-1">
                      {prize.items.map(item => (
                        <li key={item} className="text-xs text-[var(--color-text-secondary)] flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-3">Special Awards</h4>
              <div className="flex flex-wrap gap-2">
                {SPECIAL.map(award => (
                  <div
                    key={award.title}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--color-surface-3)] border border-white/07 text-[var(--color-text-secondary)]"
                  >
                    <Star style={{ width: '12px', height: '12px', color: 'var(--color-prism-gold)' }} />
                    {award.title}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Rules + Judging */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Rules */}
            <div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-4">Participation Rules</h3>
              <ul className="space-y-3">
                {RULES.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-surface-3)] border border-white/08 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[9px] font-bold text-[var(--color-ieee-blue-light)]">{i + 1}</span>
                    </div>
                    {rule}
                  </li>
                ))}
              </ul>
              <a
                href="/downloads/rulebook.pdf"
                download
                className="btn-magnetic btn-secondary mt-5 inline-flex text-sm"
              >
                <Download style={{ width: '14px', height: '14px' }} />
                Download Rulebook
              </a>
            </div>

            {/* Judging */}
            <div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-4">Judging Criteria</h3>
              <div className="space-y-3">
                {JUDGING.map(c => (
                  <div key={c.label} className="flex items-center gap-3">
                    <div className="text-xs text-[var(--color-text-secondary)] w-28 shrink-0">{c.label}</div>
                    <div className="flex-1 h-1 bg-white/06 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-[var(--color-ieee-blue)]"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${c.weight}%` } : {}}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <div className="text-xs font-semibold text-[var(--color-text-secondary)] w-8 text-right tabular-nums">
                      {c.weight}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export const SCHEDULE = [
  { time: '08:15', title: 'Check-in & Kit Distribution', desc: 'College ID verification; teams receive Prism Packs (badges, Wi-Fi codes, swag).', phase: 'Pre-Hackathon', day: 'Day 1' },
  { time: '09:00', title: 'Opening Ceremony', desc: 'High-energy kickoff, IEEE society intros, and problem statement release.', phase: 'Pre-Hackathon', day: 'Day 1' },
  { time: '10:00', title: 'Hacking Commences', desc: 'The 24-hour build clock starts. Round 1: Blueprint Phase begins.', phase: 'Round 1', day: 'Day 1' },
  { time: '12:30', title: 'Round 1 Results', desc: 'Teams advancing to Round 2 announced, followed by networking lunch.', phase: 'Round 1', day: 'Day 1' },
  { time: '15:00', title: 'Round 2: Technical Deep Dive', desc: 'Qualified teams present architecture and progress to a senior jury.', phase: 'Round 2', day: 'Day 1' },
  { time: '23:00', title: 'Round 3', desc: 'Qualified teams present updated work to the jury.', phase: 'Round 3', day: 'Day 1' },
  { time: '00:00', title: 'The Graveyard Shift', desc: 'Focus time with quiet zones active; coffee and tea served through 06:30.', phase: 'Overnight', day: 'Day 2' },
  { time: '06:00', title: 'Round 4: Finalists Circle', desc: 'Final evaluation round to select teams for the grand pitch.', phase: 'Round 4', day: 'Day 2' },
  { time: '09:00', title: 'Hacking Ends + Grand Pitch', desc: 'All code pushed to repositories; top teams present on the main stage.', phase: 'Finals', day: 'Day 2' },
  { time: '10:15', title: 'Awards Ceremony', desc: 'Prizes for track winners, runners-up, and the PrismTech Overall Champion.', phase: 'Closing', day: 'Day 2' },
];

// Simplified phase labeling — no per-phase neon colors
const PHASE_BADGE: Record<string, string> = {
  'Pre-Hackathon': 'badge-blue',
  'Round 1': 'badge-violet',
  'Round 2': 'badge-gold',
  'Round 3': 'badge-gold',
  'Overnight': 'badge-neutral',
  'Round 4': 'badge-cyan',
  'Finals': 'badge-neutral',
  'Closing': 'badge-gold',
};

export default function SchedulePreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  const previewItems = SCHEDULE.slice(0, 5);

  return (
    <section id="schedule" className="section bg-[var(--color-surface-1)]" ref={ref} aria-labelledby="schedule-heading">
      <div className="container">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10 md:mb-12">
          <SectionHeader
            eyebrow="Hackathon Schedule"
            title={<>From check-in to <span className="text-gradient-ieee">prize distribution.</span></>}
            align="left"
            className="mb-0"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0"
          >
            <Link href="/schedule" className="btn-magnetic btn-secondary text-sm group">
              Full Schedule
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div
            className="absolute top-5 bottom-5"
            style={{
              left: '15px',
              width: '1px',
              background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.08) 15%, rgba(255,255,255,0.08) 85%, transparent)',
            }}
          />

          <div className="space-y-3">
            {previewItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6"
              >
                {/* Dot */}
                <div className="flex flex-col items-center shrink-0 pt-[22px]">
                  <div
                    className="w-[7px] h-[7px] rounded-full bg-[var(--color-ieee-blue-light)] relative z-10"
                    style={{ boxShadow: '0 0 0 2px var(--color-surface-1)' }}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 glass-card p-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-sm font-bold text-white/90 tabular-nums">{item.time}</span>
                    <span className={`badge ${PHASE_BADGE[item.phase] || 'badge-neutral'}`}>{item.phase}</span>
                    <span className="text-[10px] text-[var(--color-text-muted)] ml-auto">{item.day}</span>
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-8 pl-[31px]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.55 }}
        >
          <p className="text-xs text-[var(--color-text-muted)] mb-4">
            + {SCHEDULE.length - 5} more events in the full schedule
          </p>
          <Link href="/schedule" className="btn-magnetic btn-primary text-sm">
            View Full Schedule
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

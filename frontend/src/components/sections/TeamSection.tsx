'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const TEAM = [
  { initials: 'SGC', role: 'Student General Chair', org: 'IEEE KLH Student Branch, Aziz Nagar' },
  { initials: 'VC', role: 'Vice Chair – Technical', org: 'IEEE KLH Student Branch' },
  { initials: 'VC', role: 'Vice Chair – Operations', org: 'IEEE KLH Student Branch' },
  { initials: 'SSG', role: 'Dr. Sai Sudha Gadde', org: 'Branch Counselor, IEEE KLH SB Aziz Nagar' },
  { initials: 'MJ', role: 'Mentors & Judges', org: 'Industry, academia, and IEEE experts' },
];

const COMMITTEES = [
  'Technical', 'Registration', 'Hospitality', 'Sponsorship',
  'Publicity & Media', 'Event Operations', 'Logistics',
  'Participant Engagement', 'Mentor & Judge Coordination', 'Finance', 'Photography',
];

const STREAMS = [
  { name: 'Optic Stream', sub: 'IEEE Photonics Society' },
  { name: 'Neural Stream', sub: 'IEEE Computer Society' },
  { name: 'Social Stream', sub: 'Women in Engineering (WIE)' },
];

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section id="people" className="section bg-[var(--color-surface-0)]" ref={ref} aria-labelledby="team-heading">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10 md:mb-12">
          <SectionHeader
            eyebrow="Organizing Committee"
            title={<>People powering <span className="text-gradient-ieee">PRISMTECH.</span></>}
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
            <Link href="/team" className="btn-magnetic btn-secondary text-sm group">
              View Full Team
              <ExternalLink style={{ width: '13px', height: '13px' }} />
            </Link>
          </motion.div>
        </div>

        {/* People cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {TEAM.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-5 flex flex-col items-center text-center gap-3"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold font-display bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue)]/20 text-[var(--color-ieee-blue-light)]"
              >
                {person.initials}
              </div>
              <div>
                <div className="text-xs font-semibold text-[var(--color-text-primary)] leading-tight mb-1">{person.role}</div>
                <div className="text-[10px] text-[var(--color-text-muted)] leading-snug">{person.org}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Streams */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-8"
        >
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">Event Streams</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            PRISMTECH is organized across three streams, supported by dedicated coordination teams.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {STREAMS.map(stream => (
              <div key={stream.name} className="glass-card p-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-ieee-blue-light)] mb-3" />
                <div className="font-semibold text-sm text-[var(--color-text-primary)]">{stream.name}</div>
                <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">{stream.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Committee tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <h3 className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-text-muted)] mb-3">Committees</h3>
          <div className="flex flex-wrap gap-2">
            {COMMITTEES.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.25, delay: 0.55 + i * 0.03 }}
                className="badge badge-neutral"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, BookOpen, Users, Globe, Rocket, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';

const REASONS = [
  {
    icon: Trophy,
    title: 'Win Exciting Prizes',
    desc: 'Compete for cash awards, trophies, and IEEE spotlight recognition. Track winners and special category awards await top performers.',
    stat: 'Prizes',
  },
  {
    icon: BookOpen,
    title: 'Earn IEEE Certificates',
    desc: 'All eligible teams receive official IEEE participation certificates — a distinguished credential recognized across the industry.',
    stat: 'Certified',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    desc: 'Get guidance from industry professionals, IEEE mentors, and faculty experts throughout the 24-hour sprint.',
    stat: 'Live Support',
  },
  {
    icon: Globe,
    title: 'Real-World Impact',
    desc: 'Your prototype could address real challenges in AI, cybersecurity, healthcare, or sustainability — build tech that matters.',
    stat: '6 Domains',
  },
  {
    icon: Rocket,
    title: 'Portfolio Projects',
    desc: 'Walk away with a credible prototype and experience that strengthens your resume and GitHub portfolio.',
    stat: '24h Sprint',
  },
  {
    icon: Star,
    title: 'IEEE Networking',
    desc: 'Connect with innovators, judges, sponsors, and fellow students from across the region at this flagship IEEE event.',
    stat: 'Network',
  },
];

export default function WhyParticipateSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section
      id="why"
      ref={ref}
      className="section bg-[var(--color-surface-1)]"
      aria-labelledby="why-heading"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Why Participate?"
          title={<>Six reasons to <span className="text-gradient-ieee">build with us.</span></>}
          description="PRISMTECH is more than a hackathon — it's a launchpad for student innovators who want to solve real problems, build meaningful technology, and grow alongside a driven community."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 + i * 0.065, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-surface-3)] border border-white/08">
                  <reason.icon className="text-[var(--color-ieee-blue-light)]" style={{ width: '17px', height: '17px' }} />
                </div>
                <span className="badge badge-blue text-[10px]">{reason.stat}</span>
              </div>

              <h3 className="font-bold text-[var(--color-text-primary)] text-sm mb-2 tracking-tight">{reason.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.55 }}
        >
          <Link href="#" className="btn-magnetic btn-primary text-sm">
            Register Your Team
          </Link>
          <Link href="/about" className="btn-magnetic btn-ghost text-sm group">
            Learn More About PRISMTECH
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

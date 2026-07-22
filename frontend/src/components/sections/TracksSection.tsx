'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Brain, Shield, Cpu, HeartPulse, Leaf, Sparkles, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export const TRACKS = [
  {
    id: 'ai',
    tag: 'AI / ML',
    icon: Brain,
    title: 'AI Campus Copilot',
    desc: 'Build an intelligent assistant for student services, events, academic support, and accessibility.',
    deliverable: 'Working prototype + responsible AI notes',
    stream: 'Neural Stream',
  },
  {
    id: 'cyber',
    tag: 'Cybersecurity',
    icon: Shield,
    title: 'Phishing Shield',
    desc: 'Detect suspicious messages and train users through explainable risk signals.',
    deliverable: 'Detection flow + dashboard',
    stream: 'Optic Stream',
  },
  {
    id: 'iot',
    tag: 'IoT',
    icon: Cpu,
    title: 'Smart Energy Lab',
    desc: 'Monitor and optimize electricity usage in campus laboratories.',
    deliverable: 'Sensor model + savings insight',
    stream: 'Optic Stream',
  },
  {
    id: 'health',
    tag: 'Healthcare',
    icon: HeartPulse,
    title: 'Healthcare Track',
    desc: 'Problem statement will be released during the opening ceremony.',
    deliverable: 'Requirements pending',
    stream: 'Social Stream',
    comingSoon: true,
  },
  {
    id: 'sustain',
    tag: 'Sustainability',
    icon: Leaf,
    title: 'Sustainable Cities',
    desc: 'Design solutions for energy, water, mobility, or waste management challenges.',
    deliverable: 'Prototype + impact assessment',
    stream: 'Social Stream',
    comingSoon: true,
  },
  {
    id: 'open',
    tag: 'Open Domain',
    icon: Sparkles,
    title: 'Open Innovation',
    desc: 'Have a groundbreaking idea that does not fit existing tracks? Build it here.',
    deliverable: 'End-to-end solution + pitch',
    stream: 'Neural Stream',
    comingSoon: true,
  },
];

export default function TracksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section id="tracks" className="section bg-[var(--color-surface-0)]" ref={ref} aria-labelledby="tracks-heading">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10 md:mb-12">
          <SectionHeader
            eyebrow="Problem Statements"
            title={<>Choose a domain. <span className="text-gradient-prism">Build with intent.</span></>}
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
            <Link href="/tracks" className="btn-magnetic btn-secondary text-sm group">
              View All Tracks
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRACKS.map((track, i) => (
            <motion.article
              key={track.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 flex flex-col"
            >
              {/* Top: icon + tags */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-surface-3)] border border-white/08 shrink-0">
                  <track.icon className="text-[var(--color-ieee-blue-light)]" style={{ width: '17px', height: '17px' }} />
                </div>
                <div className="flex items-center gap-2">
                  {track.comingSoon && (
                    <span className="badge badge-neutral">Soon</span>
                  )}
                  <span className="badge badge-blue">{track.tag}</span>
                </div>
              </div>

              <h3 className="font-bold text-[var(--color-text-primary)] text-base mb-2">{track.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1">{track.desc}</p>

              <div className="pt-3.5 border-t border-white/[0.06]">
                <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mb-1 font-medium">Expected Deliverable</div>
                <div className="text-xs font-semibold text-[var(--color-text-secondary)]">{track.deliverable}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

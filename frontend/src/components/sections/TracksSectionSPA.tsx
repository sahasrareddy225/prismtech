'use client';



import { Brain, Shield, Cpu, HeartPulse, Leaf, Sparkles, Globe, Target, Clock, FileText } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const STREAM_COLORS: Record<string, { accent: string; glow: string }> = {
  'Neural Stream': { accent: 'rgba(99,102,241,1)',  glow: 'rgba(99,102,241,0.18)'  },
  'Optic Stream':  { accent: 'rgba(34,211,238,1)',  glow: 'rgba(34,211,238,0.18)'  },
  'Social Stream': { accent: 'rgba(52,211,153,1)',  glow: 'rgba(52,211,153,0.18)'  },
};

const TRACKS = [
  {
    id: 'ai',
    tag: 'AI / ML',
    icon: Brain,
    title: 'AI Campus Copilot',
    desc: 'Build an intelligent assistant for student services, events, academic support, and accessibility.',
    deliverable: 'Working prototype + responsible AI notes',
    stream: 'Neural Stream',
    comingSoon: false,
  },
  {
    id: 'cyber',
    tag: 'Cybersecurity',
    icon: Shield,
    title: 'Phishing Shield',
    desc: 'Detect suspicious messages and train users through explainable risk signals.',
    deliverable: 'Detection flow + dashboard',
    stream: 'Optic Stream',
    comingSoon: false,
  },
  {
    id: 'iot',
    tag: 'IoT',
    icon: Cpu,
    title: 'Smart Energy Lab',
    desc: 'Monitor and optimize electricity usage in campus laboratories.',
    deliverable: 'Sensor model + savings insight',
    stream: 'Optic Stream',
    comingSoon: false,
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

const STREAMS = [
  { label: 'Optic Stream',  sub: 'IEEE Photonics Society',          accent: 'rgba(34,211,238,0.8)'  },
  { label: 'Neural Stream', sub: 'IEEE Computer Society',           accent: 'rgba(99,102,241,0.8)'  },
  { label: 'Social Stream', sub: 'IEEE Women in Engineering (WIE)', accent: 'rgba(52,211,153,0.8)'  },
];

export default function TracksSection() {
  const heroRef  = useRef(null);
  const cardsRef = useRef(null);
  const heroInView  = useInView(heroRef,  { once: true });
  const cardsInView = useInView(cardsRef, { once: true, margin: '-40px' });

  return (
    <>
      
      <section id="tracks" className="min-h-screen" style={{ background: 'var(--color-surface-0)', position: 'relative' }}>

        {/* ── Full-page background ── */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
          <div style={{ position: 'absolute', top: '8%', left: '25%', width: '700px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(0,136,204,0.11) 0%, rgba(14,165,233,0.05) 35%, transparent 70%)', borderRadius: '50%', transform: 'translateX(-50%)' }} />
          <div style={{ position: 'absolute', top: '-5%', right: '-8%', width: '520px', height: '520px', background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 65%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,98,155,0.05) 0%, transparent 50%, rgba(34,211,238,0.03) 100%)' }} />
        </div>

        {/* ── Hero ── */}
        <section ref={heroRef} style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '64px' }}>
          <div className="container">

            {/* Eyebrow */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.85)' }}>Problem Statements</span>
              <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
            </motion.div>

            {/* Heading */}
            <motion.h1
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', maxWidth: '700px', marginBottom: '20px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <span className="text-white">Choose a domain.</span>{' '}
              <span className="text-gradient-ieee">Build with intent.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '40px' }}
              initial={{ opacity: 0, y: 14 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              PRISMTECH offers problem statements across high-impact domains. All statements will be officially released at the opening ceremony.
            </motion.p>

            {/* Stream legend pills */}
            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.28 }}
            >
              {STREAMS.map(s => (
                <div
                  key={s.label}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '12px',
                    padding: '10px 20px', borderRadius: '999px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.accent, flexShrink: 0, boxShadow: `0 0 8px ${s.accent}` }} />
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'rgba(241,245,249,0.9)' }}>{s.label}</span>
                  <span style={{ fontSize: '14px', color: 'rgba(139,158,192,0.6)' }}>· {s.sub}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ── Track Cards ── */}
        <section ref={cardsRef} style={{ position: 'relative', zIndex: 1, paddingBottom: '80px' }}>
          <div className="container">



            {/* CTA banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                marginTop: '48px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(0,136,204,0.08) 0%, rgba(8,16,32,0.6) 100%)',
                border: '1px solid rgba(0,136,204,0.18)',
                backdropFilter: 'blur(20px)',
                padding: '28px 32px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                flexWrap: 'wrap',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Left glow */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, rgba(34,211,238,0.7), rgba(59,130,246,0.3), transparent)', borderRadius: '0 2px 2px 0' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0,136,204,0.12)', border: '1px solid rgba(0,136,204,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock style={{ width: '20px', height: '20px', color: 'rgba(34,211,238,0.85)' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', color: 'var(--color-text-primary)', letterSpacing: '-0.01em', marginBottom: '4px' }}>
                    Full Problem Statements
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    Detailed PDFs will be officially released at the opening ceremony on <span style={{ color: 'rgba(241,245,249,0.8)', fontWeight: 600 }}>19 September 2026</span>.
                  </p>
                </div>
              </div>

              <Link
                href="/resources"
                className="btn-magnetic btn-secondary"
                style={{ fontSize: '0.875rem', padding: '12px 28px', borderRadius: '12px', border: '1px solid rgba(34,211,238,0.2)', boxShadow: '0 0 16px rgba(34,211,238,0.06)', flexShrink: 0 }}
              >
                View Resources
              </Link>
            </motion.div>

          </div>
        </section>

      </section>
      
    </>
  );
}

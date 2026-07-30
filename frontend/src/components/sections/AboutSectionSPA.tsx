'use client';



import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CheckCircle2,
  Brain, Shield, Cpu, HeartPulse, Leaf, Sparkles, Globe, Target, Clock,
  Zap, Users
} from 'lucide-react';
import Link from 'next/link';
import HeroIllustration from '@/components/sections/HeroIllustration';

const STATS = [
  { value: '105', suffix: '+', label: 'Expected Teams',     sub: 'Registered participants' },
  { value: '75',  suffix: '',  label: 'Round 1 Qualified',  sub: 'Blueprint phase teams'   },
  { value: '45',  suffix: '',  label: 'Round 2 Qualified',  sub: 'Technical deep-dive'     },
  { value: '4',   suffix: '',  label: 'Grand Pitch Teams',  sub: 'Main stage finalists'    },
];

const FEATURE_CARDS = [
  {
    icon: Zap,
    title: 'Innovation',
    desc: 'Pushing boundaries with cutting-edge technology and creative problem-solving across every domain.',
  },
  {
    icon: Target,
    title: 'Impact',
    desc: 'Building solutions that create measurable, real-world change for communities and industries.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'Uniting diverse minds — engineers, designers, and thinkers — to build something greater together.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'Designing with the future in mind, ensuring technology serves both people and the planet.',
  },
];

const DOMAINS = [
  { icon: Brain,     label: 'AI / Machine Learning',      sub: 'Models, inference & intelligent systems' },
  { icon: Shield,    label: 'Cybersecurity',               sub: 'Threat detection, privacy & resilience'  },
  { icon: Cpu,       label: 'IoT & Smart Systems',         sub: 'Embedded, edge & connected devices'      },
  { icon: HeartPulse,label: 'Healthcare Technology',       sub: 'Diagnostics, wearables & digital health' },
  { icon: Leaf,      label: 'Sustainability & Green Tech', sub: 'Clean energy, climate & eco-systems'     },
  { icon: Globe,     label: 'FinTech & EdTech',            sub: 'Finance, learning & access platforms'    },
  { icon: Target,    label: 'Accessibility Solutions',     sub: 'Inclusive design for every user'         },
  { icon: Sparkles,  label: 'Open Innovation',             sub: 'Any domain, any bold idea'               },
];

const STREAMS = [
  { name: 'Optic Stream',  sub: 'IEEE Photonics Society',            desc: 'Hardware-focused challenges exploring light-based computing, sensors, and photonic systems.',                          accent: 'rgba(34,211,238,1)',   glow: 'rgba(34,211,238,0.15)',  tag: 'Hardware' },
  { name: 'Neural Stream', sub: 'IEEE Computer Society',             desc: 'Software and AI challenges — from machine learning systems to security and smart applications.',                      accent: 'rgba(99,102,241,1)',   glow: 'rgba(99,102,241,0.15)',  tag: 'Software & AI' },
  { name: 'Social Stream', sub: 'IEEE Women in Engineering (WIE)',   desc: 'Impact-first challenges focused on education, accessibility, sustainability, and social equity.',                    accent: 'rgba(52,211,153,1)',   glow: 'rgba(52,211,153,0.15)',  tag: 'Social Impact' },
];

export default function AboutSection() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const domainsRef = useRef(null);
  const streamsRef = useRef(null);
  const benefitsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const missionInView = useInView(missionRef, { once: true, margin: '-40px' });
  const domainsInView = useInView(domainsRef, { once: true, margin: '-40px' });
  const streamsInView = useInView(streamsRef, { once: true, margin: '-40px' });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-40px' });

  return (
    <>
      
      <section id="about" style={{ position: 'relative' }}>

        {/* ── Single full-page background — covered by layout.tsx ── */}

        {/* ── Hero + Stats unified zone ── */}
        <div ref={heroRef} className="relative" style={{ zIndex: 1 }}>

          {/* Hero content */}
          <div className="relative z-10 w-full mx-auto" style={{ maxWidth: '1280px', paddingTop: 'clamp(32px, 6vw, 80px)', paddingLeft: 'clamp(24px, 6vw, 96px)', paddingRight: 'clamp(24px, 6vw, 96px)', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

              {/* ── LEFT COLUMN ── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

                {/* Eyebrow badge */}
                <motion.div
                  style={{ marginBottom: '28px' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4 }}
                >
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '6px 14px', borderRadius: '999px',
                    background: 'rgba(34,211,238,0.08)',
                    border: '1px solid rgba(34,211,238,0.2)',
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(34,211,238,0.9)', boxShadow: '0 0 6px rgba(34,211,238,0.6)', flexShrink: 0 }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.85)' }}>
                      About IEEE PRISMTECH
                    </span>
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, fontSize: 'clamp(1.75rem, 6vw, 3.75rem)', margin: 0, marginBottom: '24px' }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.08 }}
                >
                  <span style={{ display: 'block', color: '#ffffff' }}>Building Technology.</span>
                  <span className="text-gradient-prism" style={{ display: 'block' }}>Creating Impact.</span>
                </motion.h1>

                {/* Thin divider */}
                <motion.div
                  style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, rgba(34,211,238,0.7), rgba(99,102,241,0.4))', borderRadius: '2px', marginBottom: '24px' }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={heroInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.22 }}
                />

                {/* Description */}
                <motion.p
                  style={{ fontSize: 'clamp(13px, 3.5vw, 15.5px)', color: 'var(--color-text-secondary)', lineHeight: 1.85, margin: 0, marginBottom: '28px', maxWidth: '480px' }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  A 24-hour IEEE hackathon where student teams prototype solutions across AI, cybersecurity,
                  sustainability, healthcare, and smart infrastructure — guided by mentors and industry experts.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.3 }}
                >
                  <Link
                    href="#"
                    className="btn-magnetic btn-primary"
                    style={{ fontSize: '13.5px', fontWeight: 600, padding: '12px 28px', borderRadius: '10px', letterSpacing: '0.01em' }}
                  >
                    Register Your Team
                  </Link>
                  <Link
                    href="/tracks"
                    className="btn-magnetic btn-secondary"
                    style={{ fontSize: '13.5px', fontWeight: 600, padding: '12px 28px', borderRadius: '10px', letterSpacing: '0.01em' }}
                  >
                    Explore Domains
                  </Link>
                </motion.div>

              </div>

              {/* ── RIGHT COLUMN — Premium Hero Illustration ── */}
              <div className="hidden lg:flex items-center justify-center">
                <HeroIllustration inView={heroInView} />
              </div>

            </div>
          </div>

          {/* Stats cards — same background zone, no gap */}
          <div className="relative z-10 w-full mx-auto" style={{ maxWidth: '1280px', paddingTop: '36px', paddingBottom: '48px', paddingLeft: 'clamp(24px, 6vw, 96px)', paddingRight: 'clamp(24px, 6vw, 96px)', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.38 + i * 0.09 }}
                  whileHover={{ y: -3, boxShadow: '0 0 32px rgba(0,136,204,0.18), 0 8px 24px rgba(0,0,0,0.35)' }}
                  style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(160deg, rgba(14,165,233,0.08) 0%, rgba(8,16,32,0.6) 100%)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(20px)',
                    padding: 'clamp(14px, 3vw, 24px) clamp(12px, 3vw, 24px) clamp(12px, 3vw, 20px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                  }}
                >
                  {/* Top cyan accent bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: '24px', right: '24px', height: '2px',
                    background: 'linear-gradient(90deg, rgba(34,211,238,0.7), rgba(59,130,246,0.4), transparent)',
                    borderRadius: '0 0 2px 2px',
                  }} />

                  {/* Value */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '8px' }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.05em',
                      lineHeight: 1,
                      color: '#ffffff',
                    }}>
                      {s.value}
                    </span>
                    {s.suffix && (
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'rgba(34,211,238,0.8)', letterSpacing: '-0.02em' }}>
                        {s.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'rgba(241,245,249,0.85)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    marginBottom: '6px',
                  }}>
                    {s.label}
                  </span>

                  {/* Sub-label */}
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'rgba(139,158,192,0.7)',
                    letterSpacing: '0.01em',
                  }}>
                    {s.sub}
                  </span>

                  {/* Bottom divider line */}
                  <div style={{
                    marginTop: '16px',
                    height: '1px',
                    background: 'linear-gradient(90deg, rgba(34,211,238,0.15), rgba(59,130,246,0.08), transparent)',
                  }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Smooth fade into next section */}
        </div>
        {/* ── end hero+stats zone ── */}

        {/* ── Mobile-only intro card ── */}
        <div className="block lg:hidden" style={{ padding: '0 24px 48px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.4 }}
            style={{
              borderRadius: '24px',
              background: 'linear-gradient(160deg, rgba(10,18,36,0.95) 0%, rgba(6,12,26,0.98) 100%)',
              border: '1px solid rgba(34,211,238,0.15)',
              padding: '36px 28px 32px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(34,211,238,0.06), 0 0 48px rgba(34,211,238,0.08), 0 20px 48px rgba(0,0,0,0.5)',
            }}
          >
            {/* Top cyan glow line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.9) 40%, rgba(99,102,241,0.6) 70%, transparent)' }} />
            {/* Ambient corner glow */}
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.45 }}
              style={{ marginBottom: '22px' }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 14px', borderRadius: '999px',
                background: 'rgba(34,211,238,0.07)',
                border: '1px solid rgba(34,211,238,0.22)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(34,211,238,1)', boxShadow: '0 0 8px rgba(34,211,238,0.8)', flexShrink: 0 }} />
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.9)' }}>About IEEE PRISMTECH</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: '18px' }}
            >
              <span style={{ display: 'block', fontSize: 'clamp(1.75rem, 8vw, 2.25rem)', color: '#ffffff' }}>Building Technology.</span>
              <span className="text-gradient-prism" style={{ display: 'block', fontSize: 'clamp(1.75rem, 8vw, 2.25rem)' }}>Creating Impact.</span>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={heroInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.56 }}
              style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, rgba(34,211,238,0.9), rgba(99,102,241,0.5))', borderRadius: '2px', marginBottom: '18px' }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.58 }}
              style={{ fontSize: '13.5px', color: 'rgba(139,158,192,0.9)', lineHeight: 1.85, margin: 0, marginBottom: '24px' }}
            >
              A 24-hour IEEE hackathon where student teams prototype solutions across AI, cybersecurity,
              sustainability, healthcare, and smart infrastructure — guided by mentors and industry experts.
            </motion.p>

            {/* Divider line */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(34,211,238,0.12), rgba(99,102,241,0.08), transparent)', marginBottom: '24px' }} />

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.62 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
            >
              <Link href="#" className="btn-magnetic btn-primary" style={{ fontSize: '13px', fontWeight: 600, padding: '11px 26px', borderRadius: '12px', letterSpacing: '0.01em' }}>Register Your Team</Link>
              <Link href="/tracks" className="btn-magnetic btn-secondary" style={{ fontSize: '13px', fontWeight: 600, padding: '11px 26px', borderRadius: '12px', letterSpacing: '0.01em' }}>Explore Domains</Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission */}
        <section ref={missionRef} className="section" aria-labelledby="mission-heading" style={{ position: 'relative', zIndex: 1, paddingTop: '32px', paddingBottom: '48px' }}>
          <div className="container" style={{ paddingLeft: 'clamp(24px, 6vw, 24px)', paddingRight: 'clamp(24px, 6vw, 24px)' }}>

            {/* Section header */}
            <div className="text-center mb-8 lg:mb-20">
              <motion.div
                className="inline-flex items-center gap-2 mb-5"
                initial={{ opacity: 0, y: 10 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
              >
                <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.85)' }}>Our Mission</span>
                <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
              </motion.div>
              <motion.h2
                id="mission-heading"
                className="text-[var(--color-text-primary)] mb-5"
                style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 16 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                Why We Do It
              </motion.h2>
              <motion.p
                style={{ fontSize: '15px', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto', color: 'var(--color-text-secondary)' }}
                initial={{ opacity: 0, y: 12 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.16 }}
              >
                PRISMTECH bridges the gap between classroom learning and real-world impact — giving students a
                structured, mentor-guided environment to build, validate, and present technology solutions.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start" style={{ paddingTop: '32px' }}>

              {/* Left — about + eligibility */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                {/* About block */}
                <div style={{
                  borderRadius: '14px',
                  background: 'rgba(26,34,53,0.55)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '24px 28px',
                  marginBottom: '16px',
                }}>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.85, margin: 0 }}>
                    Organized by the <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>IEEE KLH Student Branch</span> (Aziz Nagar campus),
                    PRISMTECH unites the Optic Stream (Photonics), Neural Stream (Computer Society), and Social
                    Stream (WIE) into a single 24-hour multidisciplinary hackathon — evaluated across four
                    structured rounds by industry and IEEE expert juries.
                  </p>
                </div>

                {/* Eligibility list */}
                <div style={{
                  borderRadius: '14px',
                  background: 'rgba(26,34,53,0.55)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '20px 28px',
                }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.7)', marginBottom: '14px' }}>Eligibility &amp; Format</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      'Open to UG and PG students from any recognized institution',
                      'Teams of 2–4 members with one designated leader',
                      'Hybrid-ready — in-person event at KLH Hyderabad',
                      '4-round evaluation by industry and IEEE expert jury',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={missionInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                      >
                        <CheckCircle2 style={{ width: '14px', height: '14px', color: 'var(--color-ieee-blue-light)', flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right — evaluation timeline */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.7)', marginBottom: '16px' }}>Evaluation Schedule</p>
                <div style={{ position: 'relative' }}>
                  {/* Vertical connector line */}
                  <div style={{ position: 'absolute', left: '15px', top: '24px', bottom: '24px', width: '1px', background: 'linear-gradient(to bottom, rgba(0,136,204,0.5), rgba(0,136,204,0.15))' }} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {[
                      { round: 'R1', name: 'Blueprint Phase',    desc: 'Problem approach, research, and initial architecture.', time: '10:00 – 12:30', day: 'Day 1', finale: false },
                      { round: 'R2', name: 'Technical Deep Dive', desc: 'Architecture progress reviewed by senior technical jury.', time: '15:00',         day: 'Day 1', finale: false },
                      { round: 'R3', name: 'Progress Evaluation', desc: 'Updated, working features presented to the jury.',       time: '23:00',         day: 'Day 1', finale: false },
                      { round: 'R4', name: 'Finalists Circle',    desc: 'Selection of teams for the grand main-stage pitch.',    time: '06:00',         day: 'Day 2', finale: false },
                      { round: '★',  name: 'Grand Finale',        desc: 'Top teams pitch live to the full jury and audience.',   time: '09:00',         day: 'Day 2', finale: true  },
                    ].map((r, i) => (
                      <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '14px 16px 14px 0' }}>
                        {/* Node */}
                        <div style={{
                          width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
                          background: r.finale ? 'rgba(34,211,238,0.15)' : 'rgba(0,136,204,0.12)',
                          border: r.finale ? '1.5px solid rgba(34,211,238,0.6)' : '1px solid rgba(0,136,204,0.35)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: r.finale ? '13px' : '10px',
                          fontWeight: 700,
                          color: r.finale ? 'rgba(34,211,238,0.95)' : 'rgba(0,136,204,0.9)',
                          fontFamily: 'var(--font-display)',
                          boxShadow: r.finale ? '0 0 12px rgba(34,211,238,0.2)' : 'none',
                          zIndex: 1,
                        }}>
                          {r.round}
                        </div>
                        {/* Content */}
                        <div style={{ flex: 1, paddingTop: '3px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '13px', fontWeight: 700, color: r.finale ? 'rgba(241,245,249,0.95)' : 'var(--color-text-primary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{r.name}</span>
                            <span style={{ fontSize: '10px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                              <Clock style={{ width: '9px', height: '9px' }} />
                              {r.day} · {r.time}
                            </span>
                          </div>
                          <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>



        {/* Streams */}
        <section ref={streamsRef} className="section" aria-labelledby="streams-heading" style={{ position: 'relative', zIndex: 1, paddingTop: '40px' }}>
          <div className="container" style={{ paddingLeft: 'clamp(24px, 6vw, 24px)', paddingRight: 'clamp(24px, 6vw, 24px)' }}>

            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={streamsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
              >
                <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.85)' }}>Event Streams</span>
                <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
              </motion.div>
              <motion.h2
                id="streams-heading"
                className="text-[var(--color-text-primary)]"
                style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 16 }}
                animate={streamsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                Three streams, <span className="text-gradient-ieee">one mission.</span>
              </motion.h2>
            </div>

            {/* Stream cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginTop: '28px' }}>
              {STREAMS.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={streamsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: `0 0 32px ${s.glow}, 0 8px 32px rgba(0,0,0,0.35)` }}
                  style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(145deg, rgba(14,20,36,0.8) 0%, rgba(8,16,32,0.6) 100%)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(20px)',
                    padding: '28px 28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                    cursor: 'default',
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: `linear-gradient(90deg, ${s.accent}, transparent)`,
                  }} />

                  {/* Tag */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', alignSelf: 'flex-start',
                    padding: '3px 10px', borderRadius: '999px',
                    background: `${s.glow}`,
                    border: `1px solid ${s.accent}30`,
                    fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: s.accent,
                  }}>
                    {s.tag}
                  </div>

                  {/* Name + society */}
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-text-primary)', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                      {s.name}
                    </h3>
                    <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: s.accent, opacity: 0.8 }}>
                      {s.sub}
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

                  {/* Description */}
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.75, margin: 0 }}>
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Feature Cards */}
        <section ref={benefitsRef} className="section" aria-labelledby="features-heading" style={{ position: 'relative', zIndex: 1, paddingTop: '40px' }}>
          <div className="container" style={{ paddingLeft: 'clamp(24px, 6vw, 24px)', paddingRight: 'clamp(24px, 6vw, 24px)' }}>

            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
              >
                <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.85)' }}>What Drives Us</span>
                <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
              </motion.div>
              <motion.h2
                id="features-heading"
                className="text-[var(--color-text-primary)]"
                style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 16 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                More than just <span className="text-gradient-ieee">a hackathon.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" style={{ marginTop: '32px' }}>
              {FEATURE_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.08 }}
                  whileHover={{ y: -4, boxShadow: '0 0 32px rgba(0,136,204,0.2), 0 8px 32px rgba(0,0,0,0.35)', borderColor: 'rgba(34,211,238,0.2)' }}
                  style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(145deg, rgba(14,165,233,0.07) 0%, rgba(8,16,32,0.6) 100%)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(20px)',
                    padding: '28px 24px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
                    cursor: 'default',
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, rgba(34,211,238,0.6), rgba(59,130,246,0.3), transparent)',
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'rgba(0,136,204,0.12)',
                    border: '1px solid rgba(0,136,204,0.22)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 16px rgba(0,136,204,0.12)',
                  }}>
                    <card.icon style={{ width: '20px', height: '20px', color: 'rgba(34,211,238,0.9)' }} />
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

                  {/* Title */}
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.0625rem', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
                    {card.title}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.75, margin: 0 }}>
                    {card.desc}
                  </p>

                  {/* Bottom shimmer */}
                  <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(34,211,238,0.1), rgba(59,130,246,0.05), transparent)', marginTop: 'auto' }} />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="flex justify-center"
              style={{ marginTop: '72px' }}
              initial={{ opacity: 0, y: 10 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Link
                href="#"
                className="btn-magnetic btn-primary"
                style={{
                  fontSize: '0.9375rem',
                  padding: '14px 40px',
                  borderRadius: '14px',
                  boxShadow: '0 0 24px rgba(0,136,204,0.25)',
                  transition: 'all 0.25s ease',
                }}
              >
                Register Today
              </Link>
            </motion.div>

          </div>
        </section>

      </section>
      
    </>
  );
}

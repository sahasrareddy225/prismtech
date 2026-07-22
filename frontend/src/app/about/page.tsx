'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CheckCircle2, Award, BookOpen, Users, Lightbulb,
  Brain, Shield, Cpu, HeartPulse, Leaf, Sparkles, Globe, Target, Clock
} from 'lucide-react';
import Link from 'next/link';

const STATS = [
  { value: '105', label: 'Expected Teams' },
  { value: '75', label: 'Round 1 Qualified' },
  { value: '45', label: 'Round 2 Qualified' },
  { value: '4', label: 'Grand Pitch Teams' },
];

const DOMAINS = [
  { icon: Brain, label: 'AI / Machine Learning' },
  { icon: Shield, label: 'Cybersecurity' },
  { icon: Cpu, label: 'IoT & Smart Systems' },
  { icon: HeartPulse, label: 'Healthcare Technology' },
  { icon: Leaf, label: 'Sustainability & Green Tech' },
  { icon: Globe, label: 'FinTech & EdTech' },
  { icon: Target, label: 'Accessibility Solutions' },
  { icon: Sparkles, label: 'Open Innovation' },
];

const BENEFITS = [
  { icon: Award, title: 'Portfolio Projects', desc: 'Walk away with a credible prototype and hands-on experience that strengthens your resume and GitHub profile.' },
  { icon: BookOpen, title: 'IEEE Certificates', desc: 'All eligible teams receive official IEEE participation certificates — a globally recognized credential.' },
  { icon: Users, title: 'Expert Mentorship', desc: 'Real-time technical and ideation support from IEEE mentors, faculty, and industry professionals.' },
  { icon: Lightbulb, title: 'Industry Interaction', desc: "Direct engagement with companies and organizations shaping India's technology landscape." },
];

const STREAMS = [
  { name: 'Optic Stream', sub: 'IEEE Photonics Society', desc: 'Hardware-focused challenges exploring light-based computing, sensors, and photonic systems.' },
  { name: 'Neural Stream', sub: 'IEEE Computer Society', desc: 'Software and AI challenges — from machine learning systems to security and smart applications.' },
  { name: 'Social Stream', sub: 'IEEE Women in Engineering (WIE)', desc: 'Impact-first challenges focused on education, accessibility, sustainability, and social equity.' },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const missionRef = useRef(null);
  const domainsRef = useRef(null);
  const streamsRef = useRef(null);
  const benefitsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true, margin: '-40px' });
  const missionInView = useInView(missionRef, { once: true, margin: '-40px' });
  const domainsInView = useInView(domainsRef, { once: true, margin: '-40px' });
  const streamsInView = useInView(streamsRef, { once: true, margin: '-40px' });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-40px' });

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[var(--color-surface-0)]">

        {/* Hero */}
        <section ref={heroRef} className="relative pt-28 pb-12 border-b border-white/[0.05] overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,98,155,0.09) 0%, transparent 70%)' }}
          />
          <div className="container relative z-10 flex flex-col items-center text-center">
            <motion.span
              className="eyebrow justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              About PRISMTECH 2026
            </motion.span>

            <motion.h1
              className="text-[var(--color-text-primary)] mt-2 mb-4 max-w-3xl"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              A 24-hour IEEE hackathon for{' '}
              <span className="text-gradient-prism">practical innovation.</span>
            </motion.h1>

            <motion.p
              className="text-base text-[var(--color-text-secondary)] max-w-xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 14 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              Teams prototype solutions across AI, cybersecurity, sustainability, healthcare, smart infrastructure,
              and human-centered education — with guidance from mentors, faculty, and industry experts.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.24 }}
            >
              <Link href="/auth/register" className="btn-magnetic btn-primary text-sm">
                Register Your Team
              </Link>
              <Link href="/tracks" className="btn-magnetic btn-secondary text-sm">
                Explore Domains
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section ref={statsRef} className="py-10 bg-[var(--color-surface-1)] border-b border-white/[0.05]" aria-label="Key facts">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="stat-card text-center"
                  initial={{ opacity: 0, y: 16 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div
                    className="font-bold text-white font-display mb-1.5"
                    style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-widest font-medium">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section ref={missionRef} className="section" aria-labelledby="mission-heading">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="eyebrow">Our Mission</span>
                <h2
                  id="mission-heading"
                  className="text-[var(--color-text-primary)] mt-2 mb-4"
                  style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15 }}
                >
                  Transform ideas into{' '}
                  <span className="text-gradient-ieee">credible prototypes.</span>
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  PRISMTECH's objective is to help students transform raw ideas into credible prototypes with
                  social, technical, and entrepreneurial value. Participants work through a structured 4-round
                  evaluation process supported by dedicated mentors and faculty advisors.
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Organized by the IEEE KLH Student Branch (Aziz Nagar campus), PRISMTECH brings together the
                  Optic Stream (Photonics), Neural Stream (Computer Society), and Social Stream (WIE) to create
                  a truly multidisciplinary experience.
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Open to UG and PG students from any recognized institution',
                    'Teams of 2–4 members with one designated leader',
                    'Hybrid-ready format with in-person event at KLH Hyderabad',
                    '4-round evaluation by industry and IEEE expert jury',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                      initial={{ opacity: 0, x: -12 }}
                      animate={missionInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, delay: 0.25 + i * 0.06 }}
                    >
                      <CheckCircle2 className="text-[var(--color-ieee-blue-light)] shrink-0 mt-0.5" style={{ width: '15px', height: '15px' }} />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Format timeline */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, x: 20 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {[
                  { round: 'Round 1', name: 'Blueprint Phase', desc: 'Teams present their problem approach, research, and initial architecture.', time: '10:00 – 12:30', day: 'Day 1' },
                  { round: 'Round 2', name: 'Technical Deep Dive', desc: 'Qualified teams showcase architecture progress to a senior technical jury.', time: '15:00', day: 'Day 1' },
                  { round: 'Round 3', name: 'Progress Evaluation', desc: 'Teams present updated, working features to the jury.', time: '23:00', day: 'Day 1' },
                  { round: 'Round 4', name: 'Finalists Circle', desc: 'Final round to select teams for the grand main-stage pitch.', time: '06:00', day: 'Day 2' },
                  { round: 'Grand Finale', name: 'Main Stage Pitch', desc: 'Top teams present to the full jury and audience on the main stage.', time: '09:00', day: 'Day 2' },
                ].map((r, i) => (
                  <div key={i} className="glass-card p-4 flex gap-4">
                    <div className="w-0.5 rounded-full bg-[var(--color-ieee-blue)] shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[var(--color-ieee-blue-light)]">{r.round}</span>
                        <span className="text-[10px] text-[var(--color-text-muted)] flex items-center gap-1">
                          <Clock style={{ width: '10px', height: '10px' }} />
                          {r.day} · {r.time}
                        </span>
                      </div>
                      <div className="font-semibold text-sm text-[var(--color-text-primary)]">{r.name}</div>
                      <div className="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">{r.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Domains */}
        <section ref={domainsRef} className="section bg-[var(--color-surface-1)]" aria-labelledby="domains-heading">
          <div className="container">
            <div className="text-center mb-10">
              <motion.span className="eyebrow justify-center" initial={{ opacity: 0, y: 12 }} animate={domainsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
                Problem Domains
              </motion.span>
              <motion.h2
                id="domains-heading"
                className="text-[var(--color-text-primary)] mt-2"
                style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15 }}
                initial={{ opacity: 0, y: 16 }}
                animate={domainsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                Build across <span className="text-gradient-ieee">high-impact areas.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {DOMAINS.map((d, i) => (
                <motion.div
                  key={d.label}
                  className="glass-card p-4 flex flex-col items-center text-center gap-3"
                  initial={{ opacity: 0, y: 16 }}
                  animate={domainsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-surface-3)] border border-white/08">
                    <d.icon className="text-[var(--color-ieee-blue-light)]" style={{ width: '17px', height: '17px' }} />
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-secondary)] leading-snug">{d.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/tracks" className="btn-magnetic btn-secondary text-sm">
                View Full Problem Statements
              </Link>
            </div>
          </div>
        </section>

        {/* Streams */}
        <section ref={streamsRef} className="section" aria-labelledby="streams-heading">
          <div className="container">
            <div className="text-center mb-10">
              <motion.span className="eyebrow justify-center" initial={{ opacity: 0, y: 12 }} animate={streamsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
                Event Streams
              </motion.span>
              <motion.h2
                id="streams-heading"
                className="text-[var(--color-text-primary)] mt-2"
                style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15 }}
                initial={{ opacity: 0, y: 16 }}
                animate={streamsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                Three streams,{' '}
                <span className="text-gradient-ieee">one mission.</span>
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STREAMS.map((s, i) => (
                <motion.div
                  key={s.name}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={streamsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-ieee-blue-light)] mb-4" />
                  <h3 className="font-bold text-[var(--color-text-primary)] text-base mb-1">{s.name}</h3>
                  <div className="text-xs font-semibold mb-3 text-[var(--color-ieee-blue-light)]">{s.sub}</div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="section bg-[var(--color-surface-1)]" aria-labelledby="benefits-heading">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-72 shrink-0">
                <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={benefitsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
                  Participant Benefits
                </motion.span>
                <motion.h2
                  id="benefits-heading"
                  className="text-[var(--color-text-primary)] mt-2 mb-4"
                  style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15 }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.08 }}
                >
                  More than just a hackathon.
                </motion.h2>
                <motion.p
                  className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={benefitsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.45, delay: 0.16 }}
                >
                  PRISMTECH is a launchpad for student careers. Walk away with projects, connections, and credentials that last a lifetime.
                </motion.p>
                <Link href="/auth/register" className="btn-magnetic btn-primary text-sm">
                  Register Today
                </Link>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BENEFITS.map((b, i) => (
                  <motion.div
                    key={b.title}
                    className="glass-card p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.08 + i * 0.07 }}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 bg-[var(--color-surface-3)] border border-white/08">
                      <b.icon className="text-[var(--color-ieee-blue-light)]" style={{ width: '17px', height: '17px' }} />
                    </div>
                    <h3 className="font-bold text-sm text-[var(--color-text-primary)] mb-2">{b.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{b.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

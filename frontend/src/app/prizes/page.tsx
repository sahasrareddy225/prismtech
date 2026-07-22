'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Trophy, Medal, Star, Award, Download, CheckCircle2,
  Cpu, Leaf, HeartPulse, Zap
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';

const PRIZES = [
  {
    rank: '1st Place — Overall Champion',
    icon: Trophy,
    gradient: 'from-[var(--color-prism-gold)] to-yellow-300',
    color: 'var(--color-prism-gold)',
    scale: 'lg:scale-105',
    items: [
      'Trophy & cash award',
      'IEEE spotlight feature',
      'Mentor access program',
      'Track winner certification',
      'IEEE KLH Hall of Fame',
    ],
  },
  {
    rank: '2nd Place — Runner Up',
    icon: Medal,
    gradient: 'from-gray-300 to-gray-100',
    color: '#CBD5E1',
    scale: '',
    items: [
      'Trophy & cash award',
      'Sponsor recognition',
      'IEEE participation certificate',
    ],
  },
  {
    rank: '3rd Place — Second Runner Up',
    icon: Award,
    gradient: 'from-amber-700 to-amber-500',
    color: '#B45309',
    scale: '',
    items: [
      'Trophy',
      'IEEE participation certificate',
      'Sponsor recognition',
    ],
  },
];

const SPECIAL_AWARDS = [
  { icon: Cpu, title: 'Best Technical Execution', sub: 'Strongest implementation and code quality', color: 'var(--color-prism-green)' },
  { icon: Leaf, title: 'Best Social Impact', sub: 'Greatest positive real-world contribution', color: 'var(--color-prism-cyan)' },
  { icon: HeartPulse, title: 'Best First-Time Team', sub: 'Most impressive debut hackathon performance', color: '#a78bfa' },
];

const TRACK_PRIZES = [
  { track: 'Optic Stream', sub: 'IEEE Photonics', color: 'var(--color-prism-cyan)' },
  { track: 'Neural Stream', sub: 'IEEE Computer Society', color: '#a78bfa' },
  { track: 'Social Stream', sub: 'IEEE WIE', color: 'var(--color-prism-gold)' },
];

export default function PrizesPage() {
  const heroRef = useRef(null);
  const prizesRef = useRef(null);
  const specialRef = useRef(null);
  const certRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const prizesInView = useInView(prizesRef, { once: true, margin: '-60px' });
  const specialInView = useInView(specialRef, { once: true, margin: '-60px' });
  const certInView = useInView(certRef, { once: true, margin: '-60px' });

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[var(--color-surface-0)]">

        {/* Hero */}
        <section ref={heroRef} className="relative pt-28 pb-12 border-b border-white/[0.05] overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,98,155,0.08) 0%, transparent 70%)' }}
          />
          <div className="container relative z-10 text-center">
            <span className="eyebrow justify-center">Prizes & Recognition</span>
            <h1
              className="text-[var(--color-text-primary)] mt-2 mb-4 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Build bold. <span className="text-gradient-ieee">Win big.</span>
            </h1>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed mb-6">
              Cash prizes, trophies, IEEE certifications, special category awards, and track-level recognition await the top performers at PRISMTECH 2026.
            </p>
            <Link href="/auth/register" className="btn-magnetic btn-primary mt-2">
              <Zap className="w-4 h-4" fill="currentColor" />
              Register to Compete
            </Link>
          </div>
        </section>

        <div className="section">
          <div className="container space-y-24">

            {/* Main Prizes */}
            <section ref={prizesRef} aria-labelledby="prizes-heading">
              <div className="text-center mb-14">
                <motion.span className="eyebrow justify-center" initial={{ opacity: 0, y: 16 }} animate={prizesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                  Main Awards
                </motion.span>
                <motion.h2
                  id="prizes-heading"
                  className="text-[var(--color-text-primary)] mt-2"
                  style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={prizesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  The podium awaits.
                </motion.h2>
              </div>

            {/* Prize Amount TBA note */}
            <motion.div
              className="glass-card p-4 text-center mb-10 max-w-xl mx-auto border-[var(--color-prism-gold)]/20"
              initial={{ opacity: 0, y: 12 }}
              animate={prizesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p className="text-sm text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-prism-gold)] font-bold">💰 Cash prize amounts</span> will be announced once sponsorship details are finalized. Follow our social channels for updates.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
              {[PRIZES[1], PRIZES[0], PRIZES[2]].map((prize, i) => (
                <motion.div
                  key={prize.rank}
                  className={`glass-card p-7 relative overflow-hidden group ${prize.scale}`}
                  style={{ borderColor: `${prize.color}25` }}
                  initial={{ opacity: 0, y: i === 1 ? 0 : 30 }}
                  animate={prizesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at top, ${prize.color}08, transparent 60%)` }} />
                  <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${prize.color}60, transparent)` }} />

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${prize.gradient}`} style={{ opacity: 0.9 }}>
                    <prize.icon className="w-7 h-7 text-[var(--color-surface-0)]" />
                  </div>

                  <h3 className="font-bold text-white text-base mb-4 leading-snug">{prize.rank}</h3>

                  <ul className="space-y-2.5 mb-5">
                    {prize.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: prize.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5 border-t border-white/05 flex items-center gap-2">
                    <span className="text-xs font-bold" style={{ color: prize.color }}>Cash Amount</span>
                    <span className="badge text-[10px]" style={{ color: prize.color, background: `${prize.color}12`, border: `1px solid ${prize.color}25` }}>TBA</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Track Prizes */}
          <section aria-labelledby="track-prizes-heading">
            <div className="text-center mb-12">
              <span className="eyebrow justify-center">Track Awards</span>
              <h2 id="track-prizes-heading" className="text-display-lg text-white mt-2">
                Stream-level recognition.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TRACK_PRIZES.map((t, i) => (
                <div
                  key={t.track}
                  className="glass-card p-7 text-center group relative overflow-hidden"
                  style={{ borderColor: `${t.color}15` }}
                >
                  <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${t.color}50, transparent)` }} />
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${t.color}15`, border: `1px solid ${t.color}20` }}>
                    <Trophy className="w-6 h-6" style={{ color: t.color }} />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-1">{t.track}</h3>
                  <div className="text-xs font-semibold mb-3" style={{ color: t.color }}>{t.sub}</div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Best project in the {t.track} track receives a dedicated track-winner trophy and citation.</p>
                </div>
              ))}
            </div>
          </section>

          {/* Special Awards */}
          <section ref={specialRef} aria-labelledby="special-heading">
            <div className="text-center mb-12">
              <motion.span className="eyebrow justify-center" initial={{ opacity: 0, y: 16 }} animate={specialInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                Special Categories
              </motion.span>
              <motion.h2
                id="special-heading"
                className="text-[var(--color-text-primary)] mt-2"
                style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15 }}
                initial={{ opacity: 0, y: 20 }}
                animate={specialInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Awards beyond the podium.
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SPECIAL_AWARDS.map((award, i) => (
                <motion.div
                  key={award.title}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={specialInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center mb-4">
                    <award.icon className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
                  </div>
                  <h3 className="font-bold text-[var(--color-text-primary)] mb-2">{award.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{award.sub}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certificates for all */}
          <section ref={certRef} aria-labelledby="cert-heading">
            <motion.div
              className="glass-card p-10 sm:p-14 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={certInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px]" style={{ background: 'radial-gradient(ellipse at center, rgba(0,98,155,0.08) 0%, transparent 70%)' }} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[var(--color-ieee-blue-light)]" />
                </div>
                <h2
                  id="cert-heading"
                  className="text-[var(--color-text-primary)] mb-4"
                  style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15 }}
                >
                  IEEE Certificates for All
                </h2>
                <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed mb-8">
                  Every participant who successfully checks in and submits a project will receive a verified{' '}
                  <strong className="text-[var(--color-text-primary)]">Certificate of Participation</strong> from IEEE KLH Student Branch — 
                  a globally recognized credential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/auth/register" className="btn-magnetic btn-primary text-sm">
                    <Zap className="w-4 h-4" fill="currentColor" />
                    Register Your Team
                  </Link>
                  <a href="/downloads/rulebook.pdf" download className="btn-magnetic btn-secondary text-sm">
                    <Download className="w-4 h-4" />
                    Download Rulebook
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

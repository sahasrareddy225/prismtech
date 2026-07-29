'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Camera, Link2, Share2, Image as ImageIcon, Clapperboard, Clock } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';

const SOCIAL_LINKS = [
  { icon: Camera, label: 'Instagram', handle: '@ieee_prismtech', href: 'https://www.instagram.com/ieee_prismtech?igsh=YWp4c2Jhb3IzYjVt', color: '#E1306C' },
  { icon: Link2, label: 'LinkedIn', handle: 'IEEE KLH SB', href: 'https://www.linkedin.com/in/ieee-prismtech-klh-2a35b3422?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: '#0A66C2' },
  { icon: Share2, label: 'YouTube', handle: 'IEEE PRISMTECH', href: '#', color: '#FF0000' },
];

const TIMELINE_PREVIEWS = [
  { time: 'Day 1 — 08:15', label: 'Check-in & Registration', desc: 'Team arrival, badge collection, and Prism Pack distribution.' },
  { time: 'Day 1 — 09:00', label: 'Opening Ceremony', desc: 'Live coverage: IEEE society intros and problem statement release.' },
  { time: 'Day 1 — 10:00', label: 'Hacking Begins!', desc: 'Real-time build stream begins. Follow along on our socials.' },
  { time: 'Day 2 — 09:00', label: 'Grand Pitch', desc: 'Top teams present to the main stage jury.' },
  { time: 'Day 2 — 10:15', label: 'Awards Ceremony', desc: 'Prize distribution, trophy handover, and celebration.' },
];

export default function GalleryPage() {
  const heroRef = useRef(null);
  const liveRef = useRef(null);
  const socialRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const liveInView = useInView(liveRef, { once: true, margin: '-60px' });
  const socialInView = useInView(socialRef, { once: true, margin: '-60px' });

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
            <span className="eyebrow justify-center">Gallery & Media</span>
            <h1
              className="text-[var(--color-text-primary)] mt-2 mb-4 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Moments from <span className="text-gradient-ieee">PRISMTECH 2026.</span>
            </h1>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
              Photos, videos, social updates, and media coverage from the hackathon will appear here during and after the event.
            </p>
          </div>
        </section>

        <div className="section">
          <div className="container space-y-24">

          {/* Gallery Coming Soon State */}
          <section aria-labelledby="gallery-status-heading">
            <motion.div
              className="glass-card overflow-hidden relative"
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Decorative grid of placeholder frames */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 h-full opacity-[0.03]">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-white/40 aspect-square" />
                  ))}
                </div>
              </div>

              <div className="relative z-10 py-24 px-8 text-center flex flex-col items-center">
                {/* Animated camera icon */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-3xl bg-[var(--color-surface-2)] border border-white/08 flex items-center justify-center">
                    <Camera className="w-10 h-10 text-white/30" />
                  </div>
                  <div className="absolute -top-1 -right-1 flex gap-1">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[var(--color-prism-rose)]"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </div>

                <h2 id="gallery-status-heading" className="text-3xl font-black font-display text-[var(--color-text-primary)] mb-3">
                  Gallery Opens on Event Day
                </h2>
                <p className="text-[var(--color-text-secondary)] max-w-md mb-4 leading-relaxed">
                  The media gallery will go live on <strong className="text-[var(--color-text-primary)]">September 19, 2026</strong>. 
                  Check back during the event for live team photos, project demos, and the closing ceremony.
                </p>
                <p className="text-sm text-[var(--color-text-muted)] mb-10">
                  Until then, follow our social channels for updates and announcements.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] hover:bg-[var(--color-glass-hover)] transition-all text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    >
                      <s.icon className="w-4 h-4" />
                      {s.handle}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* What to Expect */}
          <section ref={liveRef} aria-labelledby="expect-heading">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center">
                <Clapperboard className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
              </div>
              <h2 id="expect-heading" className="text-2xl font-bold text-[var(--color-text-primary)]">What to Expect</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
              {[
                { icon: ImageIcon, label: 'Team Photos', desc: '200+ participants in action — candid moments and team portraits.' },
                { icon: Clapperboard, label: 'Project Demos', desc: 'Short clips of each team presenting their prototype.' },
                { icon: Share2, label: 'After Movie', desc: 'A cinematic highlight reel of the full 24-hour experience.' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={liveInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[var(--color-ieee-blue-light)]" />
                  </div>
                  <h3 className="font-bold text-[var(--color-text-primary)] mb-2">{item.label}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Live Coverage Timeline */}
          <section aria-labelledby="coverage-heading">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
              </div>
              <h2 id="coverage-heading" className="text-2xl font-bold text-[var(--color-text-primary)]">Live Coverage Schedule</h2>
            </div>
            <div className="relative max-w-2xl">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-ieee-blue-light)]/20 to-transparent" />
              <div className="space-y-4">
                {TIMELINE_PREVIEWS.map((t, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center shrink-0 pt-4">
                      <div
                        className="w-2.5 h-2.5 rounded-full relative z-10"
                        style={{ background: 'var(--color-ieee-blue-light)' }}
                      />
                    </div>
                    <div className="flex-1 glass-card p-4 mb-0 border-[var(--color-glass-border)]">
                      <div className="text-xs font-bold text-[var(--color-ieee-blue-light)] mb-1">{t.time}</div>
                      <div className="font-semibold text-[var(--color-text-primary)] text-sm">{t.label}</div>
                      <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Social CTA */}
          <section ref={socialRef}>
            <motion.div
              className="glass-card p-8 sm:p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={socialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-3">Follow the Action Live</h2>
              <p className="text-[var(--color-text-secondary)] max-w-md mx-auto mb-8 text-sm leading-relaxed">
                Can't make it in person? Follow our social channels for live updates, behind-the-scenes coverage, and results as they happen.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="btn-magnetic btn-secondary flex items-center gap-2"
                  >
                    <s.icon className="w-4 h-4" style={{ color: s.color }} />
                    {s.label}
                  </a>
                ))}
                <a href="#" className="btn-magnetic btn-secondary flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-white/60" />
                  Media Kit
                </a>
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

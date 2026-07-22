'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { Download, Building2, Sparkles, Mail, ArrowRight, Star, Zap, Globe, Users } from 'lucide-react';
import Link from 'next/link';

const TIERS = [
  {
    id: 'title',
    label: 'Title Sponsor',
    size: 'large',
    count: 1,
    perks: ['Primary logo on all materials', 'Stage time during opening & closing', 'Dedicated booth at venue', 'Access to participant resumes', 'Social media feature'],
  },
  {
    id: 'gold',
    label: 'Gold Partner',
    size: 'medium',
    count: 2,
    perks: ['Logo on banners & website', 'Booth at venue', 'Problem statement track naming', 'Social media mention'],
  },
  {
    id: 'cloud',
    label: 'Cloud Partner',
    size: 'medium',
    count: 2,
    perks: ['Cloud credits for participants', 'Logo on website & materials', 'Social media mention'],
  },
  {
    id: 'community',
    label: 'Community Partner',
    size: 'small',
    count: 4,
    perks: ['Logo on website', 'Social media mention', 'Swag bag inclusion'],
  },
];

const WHY_SPONSOR = [
  { icon: Users, label: '200+ Students', desc: 'Direct access to the top engineering talent from institutions across Hyderabad.' },
  { icon: Zap, label: 'Brand Exposure', desc: 'Logo on all event materials, website, and social media for maximum visibility.' },
  { icon: Globe, label: 'IEEE Network', desc: 'Partnership with IEEE KLH Student Branch and the wider IEEE professional network.' },
  { icon: Star, label: 'Problem Statements', desc: 'Shape the hackathon tracks to solve challenges relevant to your industry.' },
];

export default function SponsorsPage() {
  const heroRef = useRef(null);
  const tiersRef = useRef(null);
  const whyRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const tiersInView = useInView(tiersRef, { once: true, margin: '-60px' });
  const whyInView = useInView(whyRef, { once: true, margin: '-60px' });

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[var(--color-surface-0)]">

        {/* Hero */}
        {/* Hero */}
        <section ref={heroRef} className="relative pt-28 pb-12 border-b border-white/[0.05] overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,98,155,0.08) 0%, transparent 70%)' }}
          />
          <div className="container relative z-10 text-center">
            <span className="eyebrow justify-center">Sponsors & Partners</span>
            <h1
              className="text-[var(--color-text-primary)] mt-2 mb-4 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Power the next generation <span className="text-gradient-ieee">of builders.</span>
            </h1>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed mb-8">
              Partner with IEEE PRISMTECH 2026 to connect with 200+ driven students building the future of AI, cybersecurity, sustainability, and smart infrastructure at KLH Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#sponsor-prospectus" className="btn-magnetic btn-primary">
                <Download className="w-4 h-4" /> Download Prospectus
              </a>
              <a href="/contact" className="btn-magnetic btn-secondary">
                Discuss Partnership
              </a>
            </div>
          </div>
        </section>

        {/* Current Sponsors */}
        <section ref={tiersRef} className="section">
          <div className="container">
            <div className="text-center mb-16">
              <motion.span
                className="eyebrow justify-center"
                initial={{ opacity: 0, y: 16 }}
                animate={tiersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                Our Partners
              </motion.span>
              <motion.h2
                className="text-display-lg text-[var(--color-text-primary)] mt-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={tiersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Sponsor announcements{' '}
                <span className="text-gradient-ieee">coming soon.</span>
              </motion.h2>
              <motion.p
                className="text-[var(--color-text-secondary)] max-w-lg mx-auto"
                initial={{ opacity: 0 }}
                animate={tiersInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We are proud to build partnerships with organizations driving innovation across India. Stay tuned for announcements.
              </motion.p>
            </div>

            <div className="space-y-12">
              {TIERS.map((tier, ti) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={tiersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + ti * 0.08 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1 max-w-8 bg-[var(--color-ieee-blue-light)]/40" />
                    <span
                      className="text-xs font-bold tracking-widest uppercase text-[var(--color-ieee-blue-light)]"
                    >
                      {tier.label}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-ieee-blue-light)]/40 to-transparent" />
                  </div>

                  <div className={`grid gap-4 ${
                    tier.size === 'large'
                      ? 'grid-cols-1'
                      : tier.size === 'medium'
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : 'grid-cols-2 sm:grid-cols-4'
                  }`}>
                    {Array.from({ length: tier.count }).map((_, i) => (
                      <div
                        key={i}
                        className={`glass-card flex items-center justify-center border-dashed border-[var(--color-glass-border)] ${
                          tier.size === 'large' ? 'h-32' : tier.size === 'medium' ? 'h-24' : 'h-20'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2 text-center">
                          <Building2 className="w-5 h-5 text-[var(--color-text-muted)]" />
                          <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                            {tier.label} — TBA
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Sponsor */}
        <section ref={whyRef} className="section bg-[var(--color-surface-1)]" aria-labelledby="why-sponsor-heading">
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <motion.span
                  className="eyebrow"
                  initial={{ opacity: 0, y: 16 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  Partnership Benefits
                </motion.span>
                <motion.h2
                  id="why-sponsor-heading"
                  className="text-display-lg text-[var(--color-text-primary)] mt-2 mb-6"
                  initial={{ opacity: 0, y: 24 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Why partner with{' '}
                  <span className="text-gradient-ieee">PRISMTECH?</span>
                </motion.h2>
                <motion.p
                  className="text-[var(--color-text-secondary)] leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  PRISMTECH offers sponsors a unique opportunity to engage with talented students, showcase their brand, and shape the next generation of technology builders.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link href="/contact" className="btn-magnetic btn-primary">
                    <Mail className="w-4 h-4" />
                    Contact Sponsorship Team
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_SPONSOR.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="glass-card p-6"
                    initial={{ opacity: 0, y: 24 }}
                    animate={whyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
                    </div>
                    <h3 className="font-bold text-[var(--color-text-primary)] mb-1.5">{item.label}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers Card */}
        <section className="section" aria-labelledby="tiers-heading">
          <div className="container">
            <div className="glass-card p-8 sm:p-12">
              <div className="text-center mb-10">
                <h2 id="tiers-heading" className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">Sponsorship Tiers</h2>
                <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto text-sm">
                  Choose the partnership level that fits your goals. Contact us for a custom sponsorship package.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {TIERS.map((tier) => (
                  <div
                    key={tier.id}
                    className="rounded-2xl p-5 border bg-[var(--color-surface-2)] border-[var(--color-glass-border)]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-[var(--color-ieee-blue-light)]" />
                      <span className="font-bold text-sm text-[var(--color-text-primary)]">{tier.label}</span>
                    </div>
                    <ul className="space-y-2">
                      {tier.perks.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                          <span className="w-1 h-1 rounded-full shrink-0 mt-1.5 bg-[var(--color-ieee-blue-light)]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link href="/contact" className="btn-magnetic btn-primary">
                  <Mail className="w-4 h-4" />
                  Get Sponsorship Package
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

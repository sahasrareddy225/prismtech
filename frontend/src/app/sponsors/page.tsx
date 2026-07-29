'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, Users, Zap, Globe, Star, Building2, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const TIERS = [
  {
    id: 'title',
    label: 'Title Sponsor',
    accent: 'rgba(250,204,21,1)',
    glow: 'rgba(250,204,21,0.12)',
    count: 1,
    perks: [
      'Primary logo on all materials',
      'Stage time during opening & closing',
      'Dedicated booth at venue',
      'Access to participant resumes',
      'Social media feature',
    ],
  },
  {
    id: 'gold',
    label: 'Gold Partner',
    accent: 'rgba(251,146,60,1)',
    glow: 'rgba(251,146,60,0.10)',
    count: 2,
    perks: [
      'Logo on banners & website',
      'Booth at venue',
      'Problem statement track naming',
      'Social media mention',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Partner',
    accent: 'rgba(34,211,238,1)',
    glow: 'rgba(34,211,238,0.10)',
    count: 2,
    perks: [
      'Cloud credits for participants',
      'Logo on website & materials',
      'Social media mention',
    ],
  },
  {
    id: 'community',
    label: 'Community Partner',
    accent: 'rgba(52,211,153,1)',
    glow: 'rgba(52,211,153,0.10)',
    count: 4,
    perks: [
      'Logo on website',
      'Social media mention',
      'Swag bag inclusion',
    ],
  },
];

const WHY_SPONSOR = [
  { icon: Users, label: '200+ Students', desc: 'Direct access to top engineering talent from institutions across Hyderabad.', accent: 'rgba(34,211,238,1)' },
  { icon: Zap, label: 'Brand Exposure', desc: 'Logo on all event materials, website, and social media for maximum visibility.', accent: 'rgba(250,204,21,1)' },
  { icon: Globe, label: 'IEEE Network', desc: 'Partnership with IEEE KLH Student Branch and the wider IEEE professional network.', accent: 'rgba(99,102,241,1)' },
  { icon: Star, label: 'Problem Statements', desc: 'Shape hackathon tracks to solve challenges relevant to your industry.', accent: 'rgba(52,211,153,1)' },
];

const BG = (
  <div className="fixed inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,98,155,0.18) 0%, transparent 70%)' }} />
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 80% 60%, rgba(88,28,220,0.08) 0%, transparent 60%)' }} />
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,98,155,0.04) 0%, transparent 50%, rgba(88,28,220,0.04) 100%)' }} />
  </div>
);

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <div style={{ width: '20px', height: '1px', background: 'rgba(0,136,204,0.6)' }} />
      <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,136,204,0.9)' }}>{children}</span>
      <div style={{ width: '20px', height: '1px', background: 'rgba(0,136,204,0.6)' }} />
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      {BG}
      <main id="main-content" className="min-h-screen" style={{ position: 'relative', zIndex: 1 }}>

        {/* Hero */}
        <section style={{ position: 'relative', zIndex: 1, paddingTop: '112px', paddingBottom: '80px' }}>
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Sponsors &amp; Partners</SectionLabel>
              <h1
                className="text-gradient-ieee"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '20px' }}
              >
                Power the next generation<br />of builders.
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', maxWidth: '560px', margin: '0 auto 36px', lineHeight: 1.7 }}>
                Partner with IEEE PRISMTECH 2026 to connect with 200+ driven students building the future of AI, cybersecurity, sustainability, and smart infrastructure at KLH Hyderabad.
              </p>

            </motion.div>
          </div>
        </section>

        {/* Current Partners */}
        <section style={{ position: 'relative', zIndex: 1, paddingTop: '40px', paddingBottom: '80px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <SectionLabel>Our Partners</SectionLabel>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
                Sponsor announcements{' '}
                <span className="text-gradient-ieee">coming soon.</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0 auto', fontSize: '0.9rem', lineHeight: 1.6 }}>
                We are proud to build partnerships with organizations driving innovation across India. Stay tuned for announcements.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {TIERS.map((tier, ti) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: ti * 0.07 }}
                >
                  {/* Tier label row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: tier.accent, boxShadow: `0 0 8px ${tier.accent}` }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: tier.accent }}>{tier.label}</span>
                    <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, ${tier.accent}40, transparent)` }} />
                  </div>

                  <div style={{
                    display: 'grid',
                    gap: '12px',
                    gridTemplateColumns: tier.count === 1 ? '1fr' : tier.count === 2 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                  }}>
                    {Array.from({ length: tier.count }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))',
                          border: `1px dashed rgba(255,255,255,0.08)`,
                          borderRadius: '12px',
                          backdropFilter: 'blur(20px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: tier.count === 1 ? '120px' : '88px',
                          gap: '10px',
                          flexDirection: 'column',
                        }}
                      >
                        <Building2 style={{ width: '18px', height: '18px', color: 'rgba(255,255,255,0.2)' }} />
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{tier.label} — TBA</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Sponsor */}
        <section style={{ position: 'relative', zIndex: 1, paddingTop: '40px', paddingBottom: '80px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="lg-two-col">
              {/* Left */}
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <SectionLabel>Partnership Benefits</SectionLabel>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '16px', lineHeight: 1.2 }}>
                  Why partner with{' '}
                  <span className="text-gradient-ieee">PRISMTECH?</span>
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '32px', fontSize: '0.9rem' }}>
                  PRISMTECH offers sponsors a unique opportunity to engage with talented students, showcase their brand, and shape the next generation of technology builders.
                </p>

              </motion.div>

              {/* Right — benefit cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {WHY_SPONSOR.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -4, boxShadow: `0 8px 32px ${item.accent}18` }}
                    style={{
                      background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '14px',
                      backdropFilter: 'blur(20px)',
                      padding: '20px',
                      borderTop: `2px solid ${item.accent}`,
                      transition: 'box-shadow 0.3s',
                    }}
                  >
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      background: `${item.accent}15`,
                      border: `1px solid ${item.accent}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '14px',
                    }}>
                      <item.icon style={{ width: '16px', height: '16px', color: item.accent }} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-primary)', marginBottom: '6px' }}>{item.label}</h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section style={{ position: 'relative', zIndex: 1, paddingTop: '40px', paddingBottom: '96px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>Sponsorship Tiers</SectionLabel>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '10px' }}>
                Choose your <span className="text-gradient-ieee">partnership level.</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '440px', margin: '0 auto', fontSize: '0.875rem' }}>
                Contact us for a custom sponsorship package tailored to your goals.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {TIERS.map((tier, ti) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: ti * 0.08 }}
                  whileHover={{ y: -6, boxShadow: `0 12px 40px ${tier.glow}` }}
                  style={{
                    background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(20px)',
                    overflow: 'hidden',
                    transition: 'box-shadow 0.3s',
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{ height: '3px', background: tier.accent, boxShadow: `0 0 12px ${tier.accent}` }} />
                  <div style={{ padding: '24px 20px' }}>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                      <div style={{
                        width: '32px', height: '32px', borderRadius: '8px',
                        background: `${tier.accent}15`,
                        border: `1px solid ${tier.accent}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Star style={{ width: '14px', height: '14px', color: tier.accent }} />
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>{tier.label}</span>
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '16px' }} />

                    {/* Perks */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {tier.perks.map((p) => (
                        <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <CheckCircle2 style={{ width: '13px', height: '13px', color: tier.accent, marginTop: '2px', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                marginTop: '48px',
                background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))',
                border: '1px solid rgba(255,255,255,0.07)',
                borderLeft: '3px solid rgba(0,136,204,0.8)',
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                padding: '28px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px' }}>Ready to partner with PRISMTECH?</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="btn-magnetic btn-primary"
                style={{ boxShadow: '0 0 24px rgba(0,136,204,0.2)', whiteSpace: 'nowrap' }}
              >
                <Mail className="w-4 h-4" />
                Become a Sponsor
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Download, ExternalLink, FileText, CheckCircle2,
  BookOpen, ShieldCheck, FileImage, Code2, Play, Lock, Info, ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';

const DOWNLOADS = [
  {
    title: 'Official Rulebook',
    desc: 'Complete guidelines, eligibility criteria, code of conduct, and participation rules for PRISMTECH 2026.',
    icon: ShieldCheck,
    accent: 'rgba(34,211,238,1)',   glow: 'rgba(34,211,238,0.12)',
    size: 'PDF • ~2.5 MB', available: false, badge: 'Coming Soon',
  },
  {
    title: 'Problem Statements',
    desc: 'Detailed breakdown of all problem domains. Released officially at the opening ceremony on September 26.',
    icon: BookOpen,
    accent: 'rgba(99,102,241,1)',   glow: 'rgba(99,102,241,0.12)',
    size: 'PDF • ~4 MB',   available: false, badge: 'Released at Opening',
  },
  {
    title: 'Judging Rubric',
    desc: 'Scoring sheet and evaluation criteria used by judges across all six dimensions.',
    icon: FileText,
    accent: 'rgba(245,158,11,1)',   glow: 'rgba(245,158,11,0.12)',
    size: 'PDF • ~1 MB',   available: false, badge: 'Coming Soon',
  },
  {
    title: 'Registration Guide',
    desc: 'Step-by-step walkthrough for team registration, profile setup, and dashboard access.',
    icon: FileImage,
    accent: 'rgba(52,211,153,1)',   glow: 'rgba(52,211,153,0.12)',
    size: 'PDF • ~1.2 MB', available: false, badge: 'Coming Soon',
  },
];

const LINKS = [
  {
    title: 'GitHub Organization',
    desc: 'Submit your project repository here. Official submission guidelines will be shared closer to the event.',
    icon: Code2,
    accent: 'rgba(34,211,238,1)', glow: 'rgba(34,211,238,0.1)',
    label: 'github.com/prismtech2026', href: '#',
  },
  {
    title: 'Sponsor API Documentation',
    desc: 'Documentation for datasets and APIs provided by our technology partners. Access details shared with registered teams.',
    icon: ExternalLink,
    accent: 'rgba(251,113,133,1)', glow: 'rgba(251,113,133,0.1)',
    label: 'Available after registration', href: '#',
  },
  {
    title: 'YouTube — Past Highlights',
    desc: 'Watch highlights, project demos, and ceremony recordings from previous IEEE events.',
    icon: Play,
    accent: 'rgba(245,158,11,1)', glow: 'rgba(245,158,11,0.1)',
    label: 'Watch on YouTube', href: '#',
  },
];

const CHECKLIST = [
  { item: 'Laptop and charger',                                    required: true  },
  { item: 'Valid institutional ID card',                           required: true  },
  { item: 'All required software pre-installed (IDEs, SDKs, etc.)',required: true  },
  { item: 'Backup internet access (mobile hotspot recommended)',   required: false },
  { item: 'GitHub account set up and ready to push',              required: false },
  { item: 'Team problem domain decided in advance',               required: false },
  { item: 'Comfortable clothing for a 24-hour stay',              required: false },
  { item: 'Any personal medication or medical supplies',          required: false },
];

function SectionLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
      <div style={{ width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0, background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon style={{ width: '17px', height: '17px', color: 'rgba(34,211,238,0.85)' }} />
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', color: 'rgba(241,245,249,0.93)', letterSpacing: '-0.02em', margin: 0 }}>
        {label}
      </h2>
    </div>
  );
}

export default function ResourcesPage() {
  const heroRef      = useRef(null);
  const dlRef        = useRef(null);
  const linksRef     = useRef(null);
  const checkRef     = useRef(null);

  const heroInView  = useInView(heroRef,  { once: true });
  const dlInView    = useInView(dlRef,    { once: true, margin: '-40px' });
  const linksInView = useInView(linksRef, { once: true, margin: '-40px' });
  const checkInView = useInView(checkRef, { once: true, margin: '-40px' });

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen" style={{ background: 'var(--color-surface-0)', position: 'relative' }}>

        {/* Full-page background */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
          <div style={{ position: 'absolute', top: '8%', left: '25%', width: '700px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(0,136,204,0.11) 0%, rgba(14,165,233,0.05) 35%, transparent 70%)', borderRadius: '50%', transform: 'translateX(-50%)' }} />
          <div style={{ position: 'absolute', top: '-5%', right: '-8%', width: '520px', height: '520px', background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 65%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,98,155,0.05) 0%, transparent 50%, rgba(34,211,238,0.03) 100%)' }} />
        </div>

        {/* ── Hero ── */}
        <section ref={heroRef} style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '64px' }}>
          <div className="container">
            <motion.div className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
              <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.85)' }}>Downloads & Resources</span>
              <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
            </motion.div>
            <motion.h1
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', marginBottom: '16px' }}
              initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.08 }}>
              <span className="text-white">Everything you need to</span>{' '}
              <span className="text-gradient-ieee">prepare and build.</span>
            </motion.h1>
            <motion.p
              style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: '560px' }}
              initial={{ opacity: 0, y: 14 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.18 }}>
              Official rulebooks, problem statements, judging rubrics, sponsor APIs, and participant checklists — all in one place.
            </motion.p>
          </div>
        </section>

        {/* ── Body ── */}
        <section style={{ position: 'relative', zIndex: 1, paddingBottom: '80px' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>

            {/* Official Documents */}
            <div ref={dlRef}>
              <SectionLabel icon={Download} label="Official Documents" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {DOWNLOADS.map((doc, i) => (
                  <motion.div key={doc.title}
                    initial={{ opacity: 0, y: 20 }} animate={dlInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -3, boxShadow: `0 0 28px ${doc.glow}, 0 8px 24px rgba(0,0,0,0.3)` }}
                    style={{ borderRadius: '16px', background: 'linear-gradient(145deg, rgba(14,20,36,0.92), rgba(8,16,32,0.68))', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', padding: '24px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'box-shadow 0.25s ease, transform 0.25s ease', cursor: 'default' }}>
                    {/* Top accent */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${doc.accent}, transparent)` }} />

                    {/* Header row */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: doc.glow, border: `1px solid ${doc.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <doc.icon style={{ width: '18px', height: '18px', color: doc.accent }} />
                      </div>
                      <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '999px', background: doc.glow, border: `1px solid ${doc.accent}30`, color: doc.accent }}>
                        {doc.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '15px', color: 'rgba(241,245,249,0.93)', letterSpacing: '-0.02em', marginBottom: '8px' }}>{doc.title}</div>
                    <p style={{ fontSize: '13px', color: 'rgba(139,158,192,0.65)', lineHeight: 1.75, margin: '0 0 auto', flexGrow: 1 }}>{doc.desc}</p>

                    {/* Footer row */}
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '16px 0 14px' }} />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(139,158,192,0.4)', letterSpacing: '0.02em' }}>{doc.size}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'rgba(139,158,192,0.4)' }}>
                        <Lock style={{ width: '11px', height: '11px' }} />
                        <span>Not yet available</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Links & Platforms */}
            <div ref={linksRef}>
              <SectionLabel icon={ExternalLink} label="Links & Platforms" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {LINKS.map((link, i) => (
                  <motion.a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -16 }} animate={linksInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.08 }}
                    style={{ borderRadius: '14px', background: 'linear-gradient(145deg, rgba(14,20,36,0.92), rgba(8,16,32,0.68))', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', padding: '18px 22px', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', position: 'relative', overflow: 'hidden', transition: 'all 0.22s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${link.accent}25`; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${link.accent}, transparent)` }} />
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0, background: link.glow, border: `1px solid ${link.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <link.icon style={{ width: '17px', height: '17px', color: link.accent }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', color: 'rgba(241,245,249,0.9)', letterSpacing: '-0.01em', marginBottom: '3px' }}>{link.title}</div>
                      <div style={{ fontSize: '12.5px', color: 'rgba(139,158,192,0.6)', lineHeight: 1.6, marginBottom: '4px' }}>{link.desc}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: `${link.accent}70`, letterSpacing: '0.02em' }}>{link.label}</div>
                    </div>
                    <ArrowUpRight style={{ width: '16px', height: '16px', color: 'rgba(139,158,192,0.3)', flexShrink: 0 }} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Participant Checklist */}
            <div ref={checkRef}>
              <SectionLabel icon={CheckCircle2} label="Participant Checklist" />
              <div style={{ borderRadius: '16px', background: 'linear-gradient(145deg, rgba(14,20,36,0.92), rgba(8,16,32,0.68))', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', overflow: 'hidden' }}>
                <div style={{ height: '2px', background: 'linear-gradient(90deg, rgba(34,211,238,0.6), rgba(99,102,241,0.3), transparent)' }} />
                <div style={{ padding: '24px 28px' }}>
                  <p style={{ fontSize: '13px', color: 'rgba(139,158,192,0.55)', lineHeight: 1.75, marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    Make sure you bring everything you need. Items marked <span style={{ color: 'rgba(34,211,238,0.7)', fontWeight: 600 }}>Required</span> are mandatory for check-in.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '0' }}>
                    {CHECKLIST.map((item, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, y: 10 }} animate={checkInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.35, delay: 0.05 + i * 0.05 }}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 0', borderBottom: i < CHECKLIST.length - (CHECKLIST.length % 2 === 0 ? 2 : 1) ? '1px solid rgba(255,255,255,0.04)' : 'none', paddingRight: i % 2 === 0 ? '24px' : '0' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, background: item.required ? 'rgba(34,211,238,0.1)' : 'rgba(255,255,255,0.04)', border: item.required ? '1px solid rgba(34,211,238,0.3)' : '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.required ? 'rgba(34,211,238,0.8)' : 'rgba(255,255,255,0.2)' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: '13px', color: item.required ? 'rgba(241,245,249,0.85)' : 'rgba(139,158,192,0.65)', fontWeight: item.required ? 600 : 400, lineHeight: 1.6 }}>{item.item}</span>
                          {item.required && (
                            <span style={{ marginLeft: '8px', fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: '999px', background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: 'rgba(34,211,238,0.75)' }}>Required</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Info note */}
                  <div style={{ marginTop: '20px', borderRadius: '12px', background: 'rgba(0,136,204,0.05)', border: '1px solid rgba(0,136,204,0.15)', padding: '14px 18px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Info style={{ width: '13px', height: '13px', color: 'rgba(34,211,238,0.65)' }} />
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'rgba(139,158,192,0.6)', lineHeight: 1.75, margin: 0 }}>
                      Meals, breaks, first-aid, and sick-room support are planned. Accommodation depends on availability and will be communicated to registered teams closer to the event.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={checkInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
              style={{ borderRadius: '16px', background: 'linear-gradient(135deg, rgba(0,136,204,0.08), rgba(8,16,32,0.6))', border: '1px solid rgba(0,136,204,0.18)', backdropFilter: 'blur(20px)', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, rgba(34,211,238,0.7), rgba(59,130,246,0.3), transparent)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Download style={{ width: '20px', height: '20px', color: 'rgba(34,211,238,0.85)' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: 'rgba(241,245,249,0.93)', letterSpacing: '-0.015em', marginBottom: '4px' }}>Ready to compete?</div>
                  <div style={{ fontSize: '13px', color: 'rgba(139,158,192,0.6)' }}>Register your team before September 21, 2026.</div>
                </div>
              </div>
              <Link href="/auth/register" className="btn-magnetic btn-primary"
                style={{ fontSize: '0.9375rem', padding: '13px 32px', borderRadius: '12px', boxShadow: '0 0 24px rgba(0,136,204,0.2)', flexShrink: 0 }}>
                Register Your Team
              </Link>
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

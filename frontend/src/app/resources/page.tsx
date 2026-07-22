'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, ExternalLink, Link2, FileText, CheckCircle2, ChevronRight, BookOpen, Presentation, AlertCircle, FileImage, ShieldCheck, Code2, Play, Lock, Info } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Link from 'next/link';

const DOWNLOADS = [
  {
    title: 'Official Rulebook',
    desc: 'Complete guidelines, eligibility criteria, code of conduct, and participation rules for PRISMTECH 2026.',
    icon: ShieldCheck,
    color: 'var(--color-prism-cyan)',
    href: '/downloads/rulebook.pdf',
    size: 'PDF • ~2.5 MB',
    available: false,
    badge: 'Coming Soon',
  },
  {
    title: 'Problem Statements',
    desc: 'Detailed breakdown of all problem domains. Released officially at the opening ceremony on September 26.',
    icon: BookOpen,
    color: '#a78bfa',
    href: '/downloads/problem-statements.pdf',
    size: 'PDF • ~4 MB',
    available: false,
    badge: 'Released at Opening',
  },
  {
    title: 'Judging Rubric',
    desc: 'Scoring sheet and evaluation criteria used by judges across all six dimensions.',
    icon: FileText,
    color: 'var(--color-prism-gold)',
    href: '/downloads/judging-rubric.pdf',
    size: 'PDF • ~1 MB',
    available: false,
    badge: 'Coming Soon',
  },
  {
    title: 'Registration Guide',
    desc: 'Step-by-step walkthrough for team registration, profile setup, and dashboard access.',
    icon: FileImage,
    color: 'var(--color-prism-green)',
    href: '/downloads/registration-guide.pdf',
    size: 'PDF • ~1.2 MB',
    available: false,
    badge: 'Coming Soon',
  },
];

const LINKS = [
  {
    title: 'GitHub Organization',
    desc: 'Submit your project repository here. Official submission guidelines will be shared closer to the event.',
    icon: Code2,
    color: 'var(--color-ieee-blue-light)',
    href: '#',
    label: 'github.com/prismtech2026',
  },
  {
    title: 'Sponsor API Documentation',
    desc: 'Documentation for datasets and APIs provided by our technology partners. Access details shared with registered teams.',
    icon: ExternalLink,
    color: 'var(--color-prism-rose)',
    href: '#',
    label: 'Available after registration',
  },
  {
    title: 'YouTube — Past Highlights',
    desc: 'Watch highlights, project demos, and ceremony recordings from previous IEEE events.',
    icon: Play,
    color: '#ff4444',
    href: '#',
    label: 'Watch on YouTube',
  },
];

const CHECKLIST = [
  { item: 'Laptop and charger (mandatory)', important: true },
  { item: 'Valid institutional ID card', important: true },
  { item: 'All required software pre-installed (IDEs, SDKs, etc.)', important: true },
  { item: 'Backup internet access (mobile hotspot recommended)', important: false },
  { item: 'GitHub account set up and ready to push', important: false },
  { item: 'Team problem domain decided in advance', important: false },
  { item: 'Comfortable clothing for a 24-hour stay', important: false },
  { item: 'Any personal medication or medical supplies', important: false },
];

export default function ResourcesPage() {
  const heroRef = useRef(null);
  const downloadsRef = useRef(null);
  const linksRef = useRef(null);
  const checklistRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const downloadsInView = useInView(downloadsRef, { once: true, margin: '-60px' });
  const linksInView = useInView(linksRef, { once: true, margin: '-60px' });
  const checklistInView = useInView(checklistRef, { once: true, margin: '-60px' });

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
          <div className="container relative z-10">
            <span className="eyebrow">Downloads & Resources</span>
            <h1
              className="text-[var(--color-text-primary)] mt-2 mb-4 max-w-3xl"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Everything you need to <span className="text-gradient-ieee">prepare and build.</span>
            </h1>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
              Official rulebooks, problem statements, judging rubrics, sponsor APIs, and participant checklists — all in one place.
            </p>
          </div>
        </section>

        <div className="section">
          <div className="container space-y-20">

            {/* Downloads */}
            <section ref={downloadsRef} aria-labelledby="downloads-heading">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center">
                  <Download className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
                </div>
                <h2 id="downloads-heading" className="text-2xl font-bold text-[var(--color-text-primary)]">Official Documents</h2>
              </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {DOWNLOADS.map((doc, i) => (
                <motion.div
                  key={doc.title}
                  className="glass-card p-7 group flex flex-col h-full relative overflow-hidden"
                  style={{ borderColor: `${doc.color}12` }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={downloadsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {/* Color accent */}
                  <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${doc.color}50, transparent)` }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at top left, ${doc.color}05, transparent 60%)` }} />

                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: `${doc.color}15`, border: `1px solid ${doc.color}20` }}
                    >
                      <doc.icon className="w-5 h-5" style={{ color: doc.color }} />
                    </div>
                    <span
                      className="badge text-[10px]"
                      style={{ color: doc.color, background: `${doc.color}12`, border: `1px solid ${doc.color}20` }}
                    >
                      {doc.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-lg mb-2">{doc.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-grow">{doc.desc}</p>

                  <div className="flex items-center justify-between pt-5 border-t border-white/05">
                    <span className="text-xs text-[var(--color-text-muted)]">{doc.size}</span>
                    {doc.available ? (
                      <a
                        href={doc.href}
                        download
                        className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
                        style={{ color: doc.color }}
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    ) : (
                      <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
                        <Lock className="w-3.5 h-3.5" />
                        Not yet available
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

            {/* External Links */}
            <section ref={linksRef} aria-labelledby="links-heading">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
                </div>
                <h2 id="links-heading" className="text-2xl font-bold text-[var(--color-text-primary)]">Links & Platforms</h2>
              </div>
            <div className="space-y-4">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="glass-card p-5 flex items-start sm:items-center gap-4 group cursor-pointer hover:scale-[1.005] transition-transform duration-300 block"
                  style={{ borderColor: `${link.color}12` }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={linksInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${link.color}15`, border: `1px solid ${link.color}20` }}
                  >
                    <link.icon className="w-5 h-5" style={{ color: link.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{link.title}</div>
                    <div className="text-sm text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">{link.desc}</div>
                    <div className="text-xs mt-1.5 font-mono" style={{ color: `${link.color}80` }}>{link.label}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors shrink-0 hidden sm:block" />
                </motion.a>
              ))}
            </div>
          </section>

            {/* Participant Checklist */}
            <section ref={checklistRef} aria-labelledby="checklist-heading">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
                </div>
                <h2 id="checklist-heading" className="text-2xl font-bold text-[var(--color-text-primary)]">Participant Checklist</h2>
              </div>
            <div className="glass-card p-7 sm:p-10">
              <p className="text-[var(--color-text-secondary)] text-sm mb-8 leading-relaxed">
                Make sure you bring everything you need. Items marked as important are mandatory for check-in.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CHECKLIST.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl"
                    style={{ background: item.important ? 'rgba(0,212,255,0.04)' : 'transparent' }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={checklistInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center mt-0.5 shrink-0 ${
                      item.important
                        ? 'bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/30'
                        : 'bg-white/05 border border-white/10'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${item.important ? 'bg-[var(--color-ieee-blue-light)]' : 'bg-white/20'}`} />
                    </div>
                    <span className={`text-sm leading-relaxed ${item.important ? 'text-white font-medium' : 'text-[var(--color-text-secondary)]'}`}>
                      {item.item}
                      {item.important && (
                        <span className="ml-2 text-[10px] bg-[var(--color-ieee-blue-light)]/10 text-[var(--color-ieee-blue-light)] border border-[var(--color-ieee-blue-light)]/20 px-1.5 py-0.5 rounded-full">Required</span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-[var(--color-surface-2)] border border-white/06">
                <Info className="w-5 h-5 text-[var(--color-ieee-blue-light)] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Meals, breaks, first-aid, and sick-room support are planned. Accommodation depends on availability and will be communicated to registered teams closer to the event.
                </p>
              </div>
            </div>
          </section>

              {/* CTA */}
              <div className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-5 mt-10">
                <div>
                  <h3 className="font-semibold text-sm text-[var(--color-text-primary)] mb-1">Ready to compete?</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">Register your team before September 21, 2026.</p>
                </div>
                <Link href="/auth/register" className="btn-magnetic btn-primary text-sm shrink-0">
                  Register Your Team
                </Link>
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

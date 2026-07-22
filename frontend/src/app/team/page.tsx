'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Mail, Link2, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';

const LEADERSHIP = [
  {
    role: 'Student General Chair',
    name: 'Name Pending',
    org: 'IEEE KLH Student Branch, Aziz Nagar',
    initials: 'SGC',
    socials: { linkedin: '#', email: 'mailto:chair@prismtech.klhieee.com' },
    pending: true,
  },
  {
    role: 'Vice Chair — Technical',
    name: 'Name Pending',
    org: 'IEEE KLH Student Branch',
    initials: 'VCT',
    socials: { linkedin: '#', email: 'mailto:technical@prismtech.klhieee.com' },
    pending: true,
  },
  {
    role: 'Vice Chair — Operations',
    name: 'Name Pending',
    org: 'IEEE KLH Student Branch',
    initials: 'VCO',
    socials: { linkedin: '#', email: 'mailto:operations@prismtech.klhieee.com' },
    pending: true,
  },
  {
    role: 'Branch Counselor',
    name: 'Dr. Sai Sudha Gadde',
    org: 'IEEE KLH SB Aziz Nagar',
    initials: 'SSG',
    socials: { linkedin: '#', email: 'mailto:counselor@prismtech.klhieee.com' },
    pending: false,
  },
];

const STREAMS = [
  { name: 'Optic Stream', sub: 'IEEE Photonics Society', desc: 'Hardware-focused innovations in photonics and sensor technology.' },
  { name: 'Neural Stream', sub: 'IEEE Computer Society', desc: 'AI, ML, cybersecurity, and software-centric problem statements.' },
  { name: 'Social Stream', sub: 'IEEE Women in Engineering', desc: 'Challenges in sustainability, accessibility, education, and social impact.' },
];

const COMMITTEES = [
  'Technical', 'Registration', 'Hospitality', 'Sponsorship',
  'Publicity & Media', 'Event Operations', 'Logistics',
  'Participant Engagement', 'Mentor & Judge Coordination', 'Finance', 'Photography',
];

const MENTORS = [
  { label: 'Industry Experts', desc: 'Professionals from AI, cybersecurity, IoT, and startup ecosystems.' },
  { label: 'Faculty Advisors', desc: 'IEEE-affiliated faculty from KLH and partner institutions.' },
  { label: 'IEEE Members', desc: 'Active IEEE members from regional sections and technical committees.' },
];

export default function TeamPage() {
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const streamsRef = useRef(null);
  const committeesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const teamInView = useInView(teamRef, { once: true, margin: '-60px' });
  const streamsInView = useInView(streamsRef, { once: true, margin: '-60px' });
  const committeesInView = useInView(committeesRef, { once: true, margin: '-60px' });

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
            <span className="eyebrow justify-center">The People</span>
            <h1
              className="text-[var(--color-text-primary)] mt-2 mb-4 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Meet the organizing <span className="text-gradient-ieee">committee.</span>
            </h1>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
              PRISMTECH 2026 is powered by a dedicated team of IEEE student volunteers, faculty mentors, and industry judges working across 11 specialized committees.
            </p>
          </div>
        </section>

        <div className="section">
          <div className="container space-y-24">

          {/* Leadership Cards */}
          <section ref={teamRef} aria-labelledby="leadership-heading">
            <motion.span className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={teamInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              Leadership
            </motion.span>
            <motion.h2 id="leadership-heading" className="text-display-lg text-[var(--color-text-primary)] mt-2 mb-12" initial={{ opacity: 0, y: 20 }} animate={teamInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
              Organizing committee chairs.
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {LEADERSHIP.map((person, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-7 flex flex-col items-center text-center group relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Top color accent */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ieee-blue-light)]/40 to-transparent" />
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at top, rgba(0, 98, 155, 0.05), transparent 60%)' }} />

                  {/* Avatar */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black font-display mb-5 relative bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 text-[var(--color-ieee-blue-light)]"
                  >
                    {person.initials}
                    {person.pending && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white/20 border-2 border-[var(--color-surface-2)]" title="Name to be announced" />
                    )}
                  </div>

                  {/* Role */}
                  <div
                    className="badge mb-3 text-xs"
                    style={{ color: 'var(--color-ieee-blue-light)', background: 'rgba(0, 98, 155, 0.1)', border: '1px solid rgba(0, 98, 155, 0.2)' }}
                  >
                    {person.role}
                  </div>

                  <h3 className="font-bold text-[var(--color-text-primary)] text-base mb-0.5">
                    {person.pending ? (
                      <span className="italic text-white/40">To Be Announced</span>
                    ) : (
                      person.name
                    )}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mb-5">{person.org}</p>

                  {/* Socials */}
                  <div className="flex items-center gap-2 mt-auto">
                    {person.socials.linkedin && (
                      <a
                        href={person.socials.linkedin}
                        className="w-8 h-8 rounded-lg bg-white/04 border border-white/08 flex items-center justify-center hover:border-[var(--color-ieee-blue-light)]/40 hover:text-[var(--color-ieee-blue-light)] transition-all text-white/40"
                        aria-label="LinkedIn"
                      >
                        <Link2 className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {person.socials.email && (
                      <a
                        href={person.socials.email}
                        className="w-8 h-8 rounded-lg bg-white/04 border border-white/08 flex items-center justify-center hover:border-[var(--color-prism-cyan)]/40 hover:text-[var(--color-prism-cyan)] transition-all text-white/40"
                        aria-label="Email"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note about pending names */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-[var(--color-surface-2)] border border-white/06 max-w-lg">
              <div className="w-2 h-2 rounded-full bg-[var(--color-ieee-blue-light)] shrink-0 mt-1.5" />
              <p className="text-xs text-[var(--color-text-secondary)]">
                Committee chair names marked with an indicator will be updated as the organizing committee is formally constituted. Follow our social channels for announcements.
              </p>
            </div>
          </section>

          {/* Mentors & Judges */}
          <section aria-labelledby="mentors-heading">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow">Mentors & Judges</span>
                <h2 id="mentors-heading" className="text-display-lg text-[var(--color-text-primary)] mt-2 mb-5">
                  Guided by{' '}
                  <span className="text-gradient-ieee">industry experts.</span>
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  PRISMTECH's mentor and jury panels are drawn from industry, academia, and IEEE's professional network. 
                  Mentors are available throughout the 24-hour sprint to provide technical guidance, ideation support, 
                  and pitch coaching.
                </p>
                <Link href="/contact" className="btn-magnetic btn-secondary">
                  <ExternalLink className="w-4 h-4" />
                  Join as a Mentor or Judge
                </Link>
              </div>
              <div className="space-y-4">
                {MENTORS.map((m, i) => (
                  <div key={i} className="glass-card p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
                    </div>
                    <div>
                      <div className="font-bold text-[var(--color-text-primary)] mb-1">{m.label}</div>
                      <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Streams */}
          <section ref={streamsRef} aria-labelledby="streams-heading">
            <motion.span className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={streamsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              Event Streams
            </motion.span>
            <motion.h2 id="streams-heading" className="text-display-lg text-[var(--color-text-primary)] mt-2 mb-10" initial={{ opacity: 0, y: 20 }} animate={streamsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
              Three streams, one event.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {STREAMS.map((s, i) => (
                <motion.div
                  key={s.name}
                  className="glass-card p-7 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 24 }}
                  animate={streamsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ieee-blue-light)]/40 to-transparent" />
                  <div className="w-3 h-3 rounded-full mb-5 bg-[var(--color-ieee-blue-light)] shadow-sm" />
                  <h3 className="font-bold text-[var(--color-text-primary)] text-lg mb-1">{s.name}</h3>
                  <div className="text-xs font-bold tracking-wider mb-4 text-[var(--color-ieee-blue-light)]">{s.sub}</div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Committees */}
          <section ref={committeesRef} aria-labelledby="committees-heading">
            <motion.span className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={committeesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              Committees
            </motion.span>
            <motion.h2 id="committees-heading" className="text-display-lg text-[var(--color-text-primary)] mt-2 mb-8" initial={{ opacity: 0, y: 20 }} animate={committeesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
              11 teams, one vision.
            </motion.h2>
            <motion.p
              className="text-[var(--color-text-secondary)] max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={committeesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              PRISMTECH is organized across 11 specialized coordination teams, each handling a critical area of the event lifecycle.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              animate={committeesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {COMMITTEES.map((c, i) => (
                <motion.span
                  key={c}
                  className="badge badge-neutral"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={committeesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.03 }}
                >
                  {c}
                </motion.span>
              ))}
            </motion.div>
          </section>

          {/* Join CTA */}
          <div className="glass-card p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-[var(--color-ieee-blue-light)]" fill="currentColor" />
              </div>
              <div>
                <div className="font-bold text-[var(--color-text-primary)] text-lg">Ready to be part of PRISMTECH?</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Register your team before September 21, 2026.</div>
              </div>
            </div>
            <Link href="/auth/register" className="btn-magnetic btn-primary shrink-0">
              Register Now
            </Link>
          </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

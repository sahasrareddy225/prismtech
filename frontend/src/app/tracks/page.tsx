import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations/FadeIn';
import Link from 'next/link';
import { ArrowRight, Eye, Cpu, Heart, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tracks',
  description: 'Explore the three PRISMTECH tracks — Optic Stream (Photonics), Neural Stream (AI & Software), and Social Stream (WIE & Social Impact).',
};

const tracks = [
  {
    slug: 'optic-stream',
    name: 'The Optic Stream',
    subtitle: 'IEEE Photonics Society',
    icon: Eye,
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(0, 212, 255, 0.03) 100%)',
    border: 'rgba(0, 212, 255, 0.2)',
    description:
      'The Optic Stream challenges teams to push the boundaries of photonics and hardware. Build systems where photons carry the solution — from basic light sensing to complex photonic circuits.',
    focus: 'Hardware & Photonics',
    tags: ['Photonics', 'Hardware', 'Embedded Systems', 'LEDs & LDRs', 'Arduinos', 'Sensors'],
    facilities: ['Hardware Lab', 'Arduino Kits', 'Resistors & LEDs', 'LDR Sensors', '2x Power Sockets'],
    criteria: [
      'Technical Innovation in Hardware Design',
      'Effective Use of Photonic Components',
      'System Functionality & Stability',
      'Presentation & Documentation Quality',
      'Real-world Applicability',
    ],
    winnerTitle: 'Optic Stream Champion',
  },
  {
    slug: 'neural-stream',
    name: 'The Neural Stream',
    subtitle: 'IEEE Computer Society',
    icon: Cpu,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.03) 100%)',
    border: 'rgba(139, 92, 246, 0.2)',
    description:
      'The Neural Stream is where software meets intelligence. Build AI/ML models, full-stack applications, APIs, and systems that think, learn, and solve real problems at scale.',
    focus: 'AI & Software',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Web Development', 'Data Science', 'APIs', 'Cloud'],
    facilities: ['High-speed Wi-Fi', '2x Power Sockets', 'Cloud Guidance', 'API Resources'],
    criteria: [
      'Technical Depth & Code Quality',
      'AI/ML Model Performance',
      'User Experience & Design',
      'Scalability & Architecture',
      'Real-world Impact Potential',
    ],
    winnerTitle: 'Neural Stream Champion',
  },
  {
    slug: 'social-stream',
    name: 'The Social Stream',
    subtitle: 'IEEE WIE Affinity Group',
    icon: Heart,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.03) 100%)',
    border: 'rgba(245, 158, 11, 0.2)',
    description:
      'The Social Stream challenges teams to engineer for equity. Build technology that creates real social impact — for communities, accessibility, gender equity, and a fairer world.',
    focus: 'Social Impact & Equity',
    tags: ['Social Impact', 'Accessibility', 'Gender Equity', 'Community Tech', 'Sustainability', 'Healthcare'],
    facilities: ['High-speed Wi-Fi', '2x Power Sockets', 'Impact Mentors', 'Research Support'],
    criteria: [
      'Depth of Social Impact',
      'Problem Identification & Research',
      'Feasibility & Implementation Plan',
      'Inclusivity & Accessibility of Solution',
      'Community Engagement Potential',
    ],
    winnerTitle: 'Social Stream Champion',
  },
];

export default function TracksPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">
        {/* Page Hero */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: 'var(--color-surface-0)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
            }}
          />
          <div className="container relative z-10 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                Three Streams
              </div>
              <h1 className="font-display font-800 text-5xl sm:text-6xl text-white mb-5">
                Choose Your{' '}
                <span className="text-gradient-prism">Spectrum</span>
              </h1>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                PRISMTECH runs across three distinct tracks — each powered by a unique IEEE society.
                Hardware, Software, and Social Impact. Where does your passion lie?
              </p>
            </FadeIn>

            {/* Track quick-nav */}
            <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 mt-8">
              {tracks.map((t) => (
                <a
                  key={t.slug}
                  href={`#${t.slug}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass border text-sm font-medium text-white/70 hover:text-white transition-colors"
                  style={{ borderColor: `${t.color}25` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                  {t.name}
                </a>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* Track Detail Sections */}
        <div style={{ background: 'var(--color-surface-1)' }}>
          {tracks.map((track, i) => {
            const Icon = track.icon;
            const isEven = i % 2 === 0;
            return (
              <section
                key={track.slug}
                id={track.slug}
                className="section border-t border-white/5"
                style={{ background: isEven ? 'var(--color-surface-1)' : 'var(--color-surface-0)' }}
              >
                <div className="container">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Left: Info */}
                    <FadeIn direction={isEven ? 'left' : 'right'}>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{ background: `${track.color}20`, border: `2px solid ${track.color}30` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: track.color }} />
                        </div>
                        <div>
                          <span
                            className="text-xs font-medium px-3 py-1 rounded-full"
                            style={{ color: track.color, background: `${track.color}15` }}
                          >
                            {track.subtitle}
                          </span>
                          <p className="text-xs text-white/30 mt-1">{track.focus}</p>
                        </div>
                      </div>

                      <h2
                        className="font-display font-800 text-3xl sm:text-4xl mb-4"
                        style={{ color: track.color }}
                      >
                        {track.name}
                      </h2>

                      <p className="text-white/55 text-[15px] leading-relaxed mb-7">
                        {track.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {track.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1.5 rounded-lg font-medium text-white/60"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/auth/register"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                        style={{ background: `linear-gradient(135deg, ${track.color} 0%, ${track.color}bb 100%)` }}
                      >
                        Register for {track.name.split(' ')[2]}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </FadeIn>

                    {/* Right: Cards */}
                    <FadeIn direction={isEven ? 'right' : 'left'} delay={0.15}>
                      <div className="space-y-4">
                        {/* Facilities */}
                        <div
                          className="p-5 rounded-2xl border"
                          style={{ background: track.gradient, borderColor: track.border }}
                        >
                          <h3 className="font-display font-700 text-sm text-white/80 uppercase tracking-wider mb-4">
                            ⚡ Facilities Provided
                          </h3>
                          <ul className="space-y-2.5">
                            {track.facilities.map((f) => (
                              <li key={f} className="flex items-center gap-2.5 text-sm text-white/65">
                                <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: track.color }} />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Evaluation Criteria */}
                        <div className="p-5 rounded-2xl glass border border-white/5">
                          <h3 className="font-display font-700 text-sm text-white/80 uppercase tracking-wider mb-4">
                            🎯 Evaluation Criteria
                          </h3>
                          <ul className="space-y-2.5">
                            {track.criteria.map((c, ci) => (
                              <li key={c} className="flex items-start gap-2.5 text-sm text-white/60">
                                <span
                                  className="w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                                  style={{ background: `${track.color}20`, color: track.color }}
                                >
                                  {ci + 1}
                                </span>
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Winner Badge */}
                        <div
                          className="p-4 rounded-xl border flex items-center gap-3"
                          style={{ background: `${track.color}08`, borderColor: `${track.color}20` }}
                        >
                          <span className="text-2xl">🏆</span>
                          <div>
                            <p className="text-xs text-white/30">Top Award</p>
                            <p className="text-sm font-medium" style={{ color: track.color }}>
                              {track.winnerTitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA Banner */}
        <section
          className="section border-t border-white/5"
          style={{ background: 'var(--color-surface-0)' }}
        >
          <div className="container">
            <FadeIn className="text-center">
              <h2 className="font-display font-800 text-3xl sm:text-4xl text-white mb-4">
                Ready to Sprint?
              </h2>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">
                Problem statements are revealed at the Opening Ceremony. Choose your stream and start hacking!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/auth/register"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)' }}
                >
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-white/70 glass border border-white/10 hover:text-white transition-all"
                >
                  View Schedule
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

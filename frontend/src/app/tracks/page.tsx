import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Brain, Shield, Cpu, HeartPulse, Leaf, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tracks & Problem Domains | PRISMTECH 2026',
  description: 'Explore the problem domains for PRISMTECH 2026: AI, Cybersecurity, IoT, Healthcare, Sustainability, and Open Innovation.',
};

const TRACKS = [
  {
    id: 'ai',
    tag: 'AI / ML',
    icon: Brain,
    title: 'AI Campus Copilot',
    desc: 'Build an intelligent assistant for student services, events, academic support, and accessibility.',
    deliverable: 'Working prototype + responsible AI notes',
    stream: 'Neural Stream',
  },
  {
    id: 'cyber',
    tag: 'Cybersecurity',
    icon: Shield,
    title: 'Phishing Shield',
    desc: 'Detect suspicious messages and train users through explainable risk signals.',
    deliverable: 'Detection flow + dashboard',
    stream: 'Optic Stream',
  },
  {
    id: 'iot',
    tag: 'IoT',
    icon: Cpu,
    title: 'Smart Energy Lab',
    desc: 'Monitor and optimize electricity usage in campus laboratories.',
    deliverable: 'Sensor model + savings insight',
    stream: 'Optic Stream',
  },
  {
    id: 'health',
    tag: 'Healthcare',
    icon: HeartPulse,
    title: 'Healthcare Track',
    desc: 'Problem statement will be released during the opening ceremony.',
    deliverable: 'Requirements pending',
    stream: 'Social Stream',
    comingSoon: true,
  },
  {
    id: 'sustain',
    tag: 'Sustainability',
    icon: Leaf,
    title: 'Sustainable Cities',
    desc: 'Design solutions for energy, water, mobility, or waste management challenges.',
    deliverable: 'Prototype + impact assessment',
    stream: 'Social Stream',
    comingSoon: true,
  },
  {
    id: 'open',
    tag: 'Open Domain',
    icon: Sparkles,
    title: 'Open Innovation',
    desc: 'Have a groundbreaking idea that does not fit existing tracks? Build it here.',
    deliverable: 'End-to-end solution + pitch',
    stream: 'Neural Stream',
    comingSoon: true,
  },
];

export default function TracksPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[var(--color-surface-0)]">

        {/* Hero */}
        <section className="relative pt-28 pb-12 border-b border-white/[0.05] overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,98,155,0.08) 0%, transparent 70%)' }}
          />
          <div className="container relative z-10">
            <span className="eyebrow">Problem Statements</span>
            <h1
              className="text-[var(--color-text-primary)] mt-2 mb-4 max-w-2xl"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Choose a domain. <span className="text-gradient-ieee">Build with intent.</span>
            </h1>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
              PRISMTECH offers problem statements across high-impact domains. All statements will be officially released at the opening ceremony.
            </p>
          </div>
        </section>

        {/* Main content */}
        <div className="section">
          <div className="container">

            {/* Stream legend */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { label: 'Optic Stream – Photonics' },
                { label: 'Neural Stream – Computer Society' },
                { label: 'Social Stream – WIE' },
              ].map(s => (
                <div key={s.label} className="badge badge-blue">
                  <div className="w-1 h-1 rounded-full bg-current" />
                  {s.label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {TRACKS.map((track) => (
                <article key={track.id} className="glass-card p-6 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-surface-3)] border border-white/08 shrink-0">
                      <track.icon className="text-[var(--color-ieee-blue-light)]" style={{ width: '17px', height: '17px' }} />
                    </div>
                    <div className="flex items-center gap-2">
                      {track.comingSoon && <span className="badge badge-neutral">TBA</span>}
                      <span className="badge badge-blue">{track.tag}</span>
                    </div>
                  </div>

                  <div className="text-[10px] font-medium text-[var(--color-text-muted)] mb-2">{track.stream}</div>
                  <h2 className="text-base font-bold text-[var(--color-text-primary)] mb-2">{track.title}</h2>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1">{track.desc}</p>

                  <div className="pt-3.5 border-t border-white/[0.06]">
                    <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1 font-medium">Expected Deliverable</div>
                    <div className="text-xs font-semibold text-[var(--color-text-secondary)]">{track.deliverable}</div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <h3 className="font-semibold text-sm text-[var(--color-text-primary)] mb-1">Full Problem Statements</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Detailed PDFs will be released during the opening ceremony on 26 September 2026.</p>
              </div>
              <a href="/resources" className="btn-magnetic btn-secondary text-sm shrink-0">View Resources</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Download, CheckCircle2, XCircle, BookOpen, Scale, Shield, Lightbulb, Mic, MonitorSmartphone, Target, Wrench, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Rules & Guidelines | PRISMTECH 2026',
  description: 'Complete rules, code of conduct, submission requirements, and judging criteria for IEEE PRISMTECH Hackathon 2026.',
};

const ELIGIBILITY = [
  'Open to undergraduate and postgraduate students from recognized institutions.',
  'Each participant must carry a valid institutional ID for check-in.',
  'Teams of 2 to 4 members. One member must act as team leader.',
  'Each student may register with only one team.',
  'Remote participation is not permitted — this is an in-person event.',
];

const SUBMISSION = [
  'A brief written project summary (max 500 words)',
  'Presentation slides (PDF or PPTX)',
  'Working GitHub repository link with a descriptive README',
  'Live demo link or demonstration video (2–5 minutes)',
  'All code must be committed before the hacking end time (09:00 on Day 2)',
];

const DO = [
  'Use openly available datasets, APIs, and libraries — with proper attribution',
  'Seek help from mentors during designated mentoring sessions',
  'Respect your teammates, volunteers, organizers, and fellow participants',
  'Keep your workspace clean and return borrowed equipment',
  'Ensure your idea is original to this hackathon',
];

const DONT = [
  'Start coding before the official hacking start time (10:00 Day 1)',
  'Submit work created entirely before the event',
  "Plagiarize or use another team's existing solution",
  "Violate any sponsor's dataset license terms",
  'Engage in disruptive, offensive, or unsafe behavior',
];

const JUDGING = [
  { icon: Lightbulb, label: 'Innovation', weight: '20%', color: 'var(--color-prism-cyan)', desc: 'Originality of the concept and creativity in approach' },
  { icon: Target, label: 'Feasibility', weight: '20%', color: '#a78bfa', desc: 'Technical practicality and real-world implementability' },
  { icon: BarChart3, label: 'Impact', weight: '20%', color: 'var(--color-prism-gold)', desc: 'Social, environmental, or business value created' },
  { icon: Wrench, label: 'Technical Depth', weight: '20%', color: 'var(--color-prism-green)', desc: 'Code quality, architecture, and technical soundness' },
  { icon: MonitorSmartphone, label: 'UX & Design', weight: '10%', color: 'var(--color-prism-rose)', desc: 'User experience, accessibility, and interface quality' },
  { icon: Mic, label: 'Pitch Quality', weight: '10%', color: 'var(--color-ieee-blue-light)', desc: 'Clarity, storytelling, and conviction in final presentation' },
];

export default function RulesPage() {
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
          <div className="container relative z-10 text-center">
            <span className="eyebrow justify-center">Rules & Guidelines</span>
            <h1
              className="text-[var(--color-text-primary)] mt-2 mb-4 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Clear rules for <span className="text-gradient-ieee">fair innovation.</span>
            </h1>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed mb-6">
              Read the complete rules before registering. These guidelines ensure a fair, safe, and rewarding experience for all participants.
            </p>
            <a
              href="/downloads/rulebook.pdf"
              download
              className="btn-magnetic btn-primary inline-flex"
            >
              <Download className="w-4 h-4" />
              Download Official Rulebook
            </a>
          </div>
        </section>

        <div className="section">
          <div className="container space-y-20">

            {/* Eligibility */}
            <section aria-labelledby="eligibility-heading">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
                </div>
                <h2 id="eligibility-heading" className="text-2xl font-bold text-[var(--color-text-primary)]">Eligibility & Team Rules</h2>
              </div>
            <div className="glass-card p-7">
              <ul className="space-y-4">
                {ELIGIBILITY.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-ieee-blue-glow)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-[var(--color-ieee-blue-light)]">{i + 1}</span>
                    </div>
                    <span className="text-[var(--color-text-secondary)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

            {/* Submission */}
            <section aria-labelledby="submission-heading">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
                </div>
                <h2 id="submission-heading" className="text-2xl font-bold text-[var(--color-text-primary)]">Submission Requirements</h2>
              </div>
            <div className="glass-card p-7">
              <p className="text-sm text-[var(--color-text-secondary)] mb-5">
                Every team must submit the following before the hacking deadline. Incomplete submissions will be disqualified from evaluation.
              </p>
              <ul className="space-y-3">
                {SUBMISSION.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-prism-cyan)] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

            {/* Do / Don't */}
            <section aria-labelledby="conduct-heading">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
                </div>
                <h2 id="conduct-heading" className="text-2xl font-bold text-[var(--color-text-primary)]">Code of Conduct</h2>
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-7 border-[var(--color-prism-green)]/10">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-prism-green)]" />
                  <h3 className="font-bold text-white">You Should</h3>
                </div>
                <ul className="space-y-3">
                  {DO.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-prism-green)] shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-7 border-[var(--color-prism-rose)]/10">
                <div className="flex items-center gap-2 mb-5">
                  <XCircle className="w-5 h-5 text-[var(--color-prism-rose)]" />
                  <h3 className="font-bold text-white">You Must Not</h3>
                </div>
                <ul className="space-y-3">
                  {DONT.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-prism-rose)] shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 glass-card p-5 border-[var(--color-prism-rose)]/10 bg-[var(--color-prism-rose)]/05">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                <strong className="text-white">Disqualification:</strong>{' '}
                Violations of the code of conduct, plagiarism, safety violations, or disruptive behavior may result in immediate disqualification. The organizing committee's decision is final.
              </p>
            </div>
          </section>

          {/* Judging Criteria */}
          <section aria-labelledby="judging-heading-rules">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center">
                <Scale className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
              </div>
              <h2 id="judging-heading-rules" className="text-2xl font-bold text-white">Judging Criteria</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {JUDGING.map((c) => (
                <div key={c.label} className="glass-card p-5" style={{ borderColor: `${c.color}15` }}>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `${c.color}15`, border: `1px solid ${c.color}20` }}
                    >
                      <c.icon className="w-4 h-4" style={{ color: c.color }} />
                    </div>
                    <span className="text-2xl font-black font-display" style={{ color: c.color }}>{c.weight}</span>
                  </div>
                  <h3 className="font-bold text-white mb-1">{c.label}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* IP */}
          <section>
            <div className="glass-card p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Intellectual Property</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
                  Teams retain all intellectual property rights over their projects. Shared sponsor datasets or APIs must be used in accordance with their respective license terms as communicated at the event.
                </p>
              </div>
              <Link href="/auth/register" className="btn-magnetic btn-primary shrink-0">
                Register Now
              </Link>
            </div>
          </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

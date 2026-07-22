import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  ArrowRight, Calendar, Clock, MapPin, Users, Trophy, Star,
  CheckCircle2, Zap, BookOpen, Award, ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Register | PRISMTECH 2026 — IEEE KLH Hackathon',
  description: 'Register your team for IEEE PRISMTECH 2026 — a 24-hour hackathon at KLH Hyderabad on September 26–27, 2026.',
};

const KEY_DETAILS = [
  { icon: Calendar, label: 'Event Date', value: 'September 26–27, 2026' },
  { icon: Clock, label: 'Duration', value: '24 Hours' },
  { icon: MapPin, label: 'Venue', value: 'KLH Aziz Nagar, Hyderabad' },
  { icon: Users, label: 'Team Size', value: '2 – 4 Members' },
];

const STEPS = [
  { step: '01', title: 'Fill Team Details', desc: 'Enter your team name, institution, and chosen problem domain.' },
  { step: '02', title: 'Add Team Leader', desc: 'Provide contact and academic details for the team leader.' },
  { step: '03', title: 'Add Members', desc: 'Add up to 3 additional team members with their details.' },
  { step: '04', title: 'Review & Submit', desc: 'Confirm details, agree to rules, and complete your registration.' },
];

const BENEFITS = [
  { icon: Trophy, label: 'Win Prizes', color: 'var(--color-prism-gold)' },
  { icon: Award, label: 'IEEE Certificate', color: 'var(--color-prism-cyan)' },
  { icon: Star, label: 'Special Awards', color: '#a78bfa' },
  { icon: BookOpen, label: 'Expert Mentors', color: 'var(--color-prism-green)' },
];

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[var(--color-surface-0)]">

        {/* Hero */}
        <section className="relative pt-28 pb-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(0,98,155,0.08) 0%, transparent 70%)' }} />
            <div className="absolute inset-0 grid-pattern opacity-[0.12] pointer-events-none" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <SectionHeader
                eyebrow="Registration"
                title={<>Join the innovation sprint. <span className="text-gradient-prism">Register today.</span></>}
                description="PRISMTECH 2026 is a 24-hour hackathon by IEEE KLH Student Branch — open to UG and PG students from recognized institutions. Build real solutions, win prizes, and earn IEEE certification."
                align="left"
              >
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Link href="/auth/register" className="btn-magnetic btn-primary text-base px-8 py-4">
                    <Zap className="w-5 h-5" fill="currentColor" />
                    Start Registration
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/rules" className="btn-magnetic btn-secondary py-4 px-8">
                    Read Rules First
                  </Link>
                </div>
              </SectionHeader>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 section-divider" />
        </section>

        <div className="container py-20 space-y-20">

          {/* Key Details */}
          <section aria-label="Event key details">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {KEY_DETAILS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="glass-card p-5 flex flex-col items-center text-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-ieee-blue-glow)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">{label}</div>
                    <div className="font-bold text-white text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Registration Steps */}
          <section aria-labelledby="steps-heading">
            <div className="text-center mb-14">
              <span className="eyebrow justify-center">How It Works</span>
              <h2 id="steps-heading" className="text-display-lg text-white mt-2">
                Register in four steps.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {STEPS.map((step, i) => (
                <div key={step.step} className="glass-card p-7 relative group">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ieee-blue-light)]/30 to-transparent" />
                  <div className="text-5xl font-black font-display text-white/05 mb-4 leading-none">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{step.desc}</p>
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-white/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/auth/register" className="btn-magnetic btn-primary">
                <Zap className="w-4 h-4" fill="currentColor" />
                Begin Registration
              </Link>
            </div>
          </section>

          {/* Benefits */}
          <section className="glass-card p-10 sm:p-14" aria-labelledby="benefits-heading">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow">Why Register?</span>
                <h2 id="benefits-heading" className="text-display-lg text-white mt-2 mb-5">
                  More than just a hackathon.
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  PRISMTECH is a launchpad for student careers. Every registered participant gets access to 
                  expert mentors, a 24-hour build environment, and the opportunity to win prizes and earn 
                  globally recognized IEEE certifications.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {BENEFITS.map((b) => (
                    <div key={b.label} className="flex items-center gap-3 p-3.5 rounded-xl border border-white/05 bg-white/02">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${b.color}15`, border: `1px solid ${b.color}20` }}
                      >
                        <b.icon className="w-4.5 h-4.5" style={{ color: b.color }} />
                      </div>
                      <span className="text-sm font-semibold text-white">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-white text-lg mb-5">Eligibility Checklist</h3>
                {[
                  'Enrolled UG or PG student at a recognized institution',
                  'Valid institutional ID available for physical check-in',
                  'Team of 2–4 members with a designated leader',
                  'Each student registered in only one team',
                  'Commitment to attend in-person at KLH Aziz Nagar',
                  'Agreement to IEEE Code of Conduct and hackathon rules',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl border border-white/05 bg-white/02">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-prism-green)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Important Dates */}
          <section aria-labelledby="dates-heading">
            <div className="text-center mb-12">
              <span className="eyebrow justify-center">Important Dates</span>
              <h2 id="dates-heading" className="text-display-lg text-white mt-2">Mark your calendar.</h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-3">
              {[
                { date: '21 September 2026', label: 'Registration Deadline', color: 'var(--color-prism-rose)', important: true },
                { date: '22–25 September 2026', label: 'Final Communication to Registered Teams', color: 'var(--color-prism-gold)', important: false },
                { date: '26 September 2026, 08:15', label: 'Check-in & Kit Distribution Opens', color: 'var(--color-prism-cyan)', important: false },
                { date: '26 September 2026, 09:00', label: 'Opening Ceremony & Problem Statement Release', color: 'var(--color-prism-cyan)', important: false },
                { date: '26 September 2026, 10:00', label: 'Hacking Begins — 24-Hour Sprint Starts', color: 'var(--color-prism-green)', important: true },
                { date: '27 September 2026, 09:00', label: 'Hacking Ends — Grand Pitch Begins', color: '#a78bfa', important: false },
                { date: '27 September 2026, 10:15', label: 'Awards Ceremony & Prize Distribution', color: 'var(--color-prism-gold)', important: false },
              ].map((d, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${d.important ? 'bg-white/03' : ''}`}
                  style={{ borderColor: d.important ? `${d.color}25` : 'rgba(255,255,255,0.05)' }}
                >
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: d.color, boxShadow: d.important ? `0 0 8px ${d.color}` : 'none' }} />
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className={`text-sm font-medium ${d.important ? 'text-white' : 'text-[var(--color-text-secondary)]'}`}>{d.label}</span>
                    <span className="text-xs font-mono" style={{ color: `${d.color}80` }}>{d.date}</span>
                  </div>
                  {d.important && (
                    <span className="badge text-[10px] shrink-0" style={{ color: d.color, background: `${d.color}12`, border: `1px solid ${d.color}25` }}>
                      Key Date
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section>
            <div className="glass-card p-12 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[var(--color-ieee-blue)] rounded-full blur-[100px] opacity-[0.06]" />
              </div>
              <div className="relative z-10">
                <h2 className="text-display-xl text-white mb-4">
                  Ready to build the future?
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto mb-10 leading-relaxed">
                  Registration closes on <strong className="text-white">September 21, 2026</strong>. 
                  Spots are limited. Secure your team's place today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/auth/register" className="btn-magnetic btn-primary text-base px-10 py-4">
                    <Zap className="w-5 h-5" fill="currentColor" />
                    Register Your Team Now
                  </Link>
                  <Link href="/contact" className="btn-magnetic btn-secondary">
                    Need Help? Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

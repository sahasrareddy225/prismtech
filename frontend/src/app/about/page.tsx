import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Info, Users, Clock, Award, Target, BookOpen, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | PRISMTECH 2026',
  description: 'Objective, format, eligibility, and participant benefits for the IEEE PRISMTECH Hackathon.',
};

const benefits = [
  { icon: Award, title: 'Portfolio Projects', desc: 'Build credible prototypes.' },
  { icon: Users, title: 'IEEE Exposure', desc: 'Connect with a global network.' },
  { icon: Target, title: 'Leadership', desc: 'Opportunities for personal growth.' },
  { icon: Lightbulb, title: 'Industry Interaction', desc: 'Mentorship from experts.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        
        {/* Page Hero */}
        <div className="container relative z-10 pt-10 pb-16 border-b border-white/5">
          <Badge variant="outline" className="mb-6 border-[var(--color-prism-cyan)]/30 text-[var(--color-prism-cyan)]">About the Hackathon</Badge>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-6">
            Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-ieee-blue-light)] to-[var(--color-prism-cyan)] pb-2 px-1">Innovation</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
            Objective, format, eligibility, and participant benefits. The objective is to transform student ideas into credible prototypes with social, technical, and entrepreneurial value.
          </p>
        </div>

        <div className="container py-16 space-y-16">
          {/* Domains */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[var(--color-prism-violet)]/10 flex items-center justify-center border border-[var(--color-prism-violet)]/20">
                <BookOpen className="w-5 h-5 text-[var(--color-prism-violet)]" />
              </div>
              <h2 className="text-2xl font-display font-bold text-white">Problem Domains</h2>
            </div>
            <Card variant="glass" className="border-white/5">
              <CardContent className="p-8">
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Participants may choose from domains including <strong className="text-white">AI/ML, cybersecurity, IoT, fintech, sustainability, healthcare, accessibility, education technology, and smart cities.</strong>
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Rules & Format Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="glass" className="border-white/5 hover:border-[var(--color-prism-cyan)]/20 transition-colors">
              <CardContent className="p-8 flex flex-col gap-4">
                <Users className="w-8 h-8 text-[var(--color-prism-cyan)]" />
                <h3 className="text-xl font-bold text-white">Eligibility & Teams</h3>
                <ul className="space-y-3 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-prism-cyan)] mt-1">•</span>
                    Open to undergraduate and postgraduate students from recognized institutions.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-prism-cyan)] mt-1">•</span>
                    Teams of 2-4 members; one participant acts as team leader.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass" className="border-white/5 hover:border-[var(--color-prism-violet)]/20 transition-colors">
              <CardContent className="p-8 flex flex-col gap-4">
                <Clock className="w-8 h-8 text-[var(--color-prism-violet)]" />
                <h3 className="text-xl font-bold text-white">Format</h3>
                <ul className="space-y-3 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-prism-violet)] mt-1">•</span>
                    Hybrid-ready 24-hour build sprint.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-prism-violet)] mt-1">•</span>
                    Includes mentoring, evaluation, final pitch, and demo.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-8">Participant Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <benefit.icon className="w-6 h-6 text-[var(--color-prism-gold)] mb-4" />
                  <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

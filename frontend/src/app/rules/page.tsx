import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations/FadeIn';
import { Shield, Users, Code, Scale } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rules & Eligibility',
  description: 'Eligibility criteria, team rules, and coding guidelines for PRISMTECH 2026.',
};

const ruleSections = [
  {
    title: 'Eligibility',
    icon: Users,
    color: '#00d4ff',
    rules: [
      'Participants must be currently enrolled in an engineering degree program (B.Tech/B.E or equivalent).',
      'Valid college ID is mandatory for check-in on Day 1.',
      'Participants from any engineering college or university are welcome.',
      'There is no restriction on the year of study (1st to 4th year students can participate).',
    ]
  },
  {
    title: 'Team Formation',
    icon: Users,
    color: '#8b5cf6',
    rules: [
      'Teams must consist of a minimum of 2 and a maximum of 4 members.',
      'Multi-college teams are permitted and encouraged.',
      'A participant can only be part of one team.',
      'Team names must be appropriate and professional. The organizing committee reserves the right to request a name change.',
    ]
  },
  {
    title: 'Code & Hardware Conduct',
    icon: Code,
    color: '#f59e0b',
    rules: [
      'All code and hardware designs must be created during the 24-hour hackathon period.',
      'Use of open-source libraries, frameworks, and public APIs is allowed and encouraged, provided they are attributed properly.',
      'Pre-existing code snippets are allowed only if they are publicly available to everyone (e.g., standard boilerplate code).',
      'Hardware teams must ensure safe usage of electrical components. Short-circuiting or unsafe practices will lead to immediate disqualification.',
    ]
  },
  {
    title: 'Evaluation & Fair Play',
    icon: Scale,
    color: '#6366f1',
    rules: [
      'Plagiarism of any form (copying another team\'s code or presenting an existing project as new) will result in immediate disqualification.',
      'The decision of the judges is final and binding.',
      'Teams must respect the venue, organizers, mentors, and fellow participants. Any form of harassment or unprofessional behavior will not be tolerated.',
      'Disqualified teams are allowed to stay at the venue and attend non-competitive sessions (like panel talks).',
    ]
  },
];

export default function RulesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: 'var(--color-surface-0)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)',
            }}
          />
          <div className="container relative z-10 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                Guidelines
              </div>
              <h1 className="font-display font-800 text-5xl sm:text-6xl text-white mb-5">
                Rules & <span className="text-gradient-prism">Eligibility</span>
              </h1>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Please read the following rules carefully. These guidelines ensure a fair, safe,
                and competitive environment for everyone.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="section border-t border-white/5" style={{ background: 'var(--color-surface-1)' }}>
          <div className="container max-w-4xl">
            <StaggerChildren className="space-y-8">
              {ruleSections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <StaggerItem key={idx}>
                    <div className="p-6 sm:p-8 rounded-2xl glass border border-white/5">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: `${section.color}15`, border: `1px solid ${section.color}30` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: section.color }} />
                        </div>
                        <h2 className="font-display font-700 text-2xl text-white">
                          {section.title}
                        </h2>
                      </div>
                      <ul className="space-y-4">
                        {section.rules.map((rule, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: section.color }} />
                            <span className="text-white/70 leading-relaxed text-[15px]">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>

            <FadeIn className="mt-12 p-6 rounded-2xl border" style={{ background: 'rgba(245,158,11,0.05)', borderColor: 'rgba(245,158,11,0.2)' }}>
              <h3 className="font-display font-700 text-xl text-white mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#f59e0b]" />
                Code of Conduct
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                PRISMTECH is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of hackathon participants in any form.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

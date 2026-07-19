import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Shield, Users, Code, Scale } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rules & Eligibility | PRISMTECH 2026',
  description: 'Eligibility criteria, team rules, and coding guidelines for PRISMTECH 2026.',
};

const ruleSections = [
  {
    title: 'Eligibility',
    icon: Users,
    color: 'var(--color-prism-cyan)',
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
    color: 'var(--color-prism-violet)',
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
    color: 'var(--color-prism-gold)',
    rules: [
      'All code and hardware designs must be created during the 24-hour hackathon period.',
      'Use of open-source libraries, frameworks, and public APIs is allowed and encouraged, provided they are attributed properly.',
      'Pre-existing code snippets are allowed only if they are publicly available to everyone (e.g., standard boilerplate code).',
      'Hardware teams must ensure safe usage of electrical components. Short-circuiting or unsafe practices will lead to immediate disqualification.',
    ]
  },
  {
    title: 'Fair Innovation & Evaluation',
    icon: Scale,
    color: 'var(--color-ieee-blue-light)',
    rules: [
      "Plagiarism of any form (copying another team's code or presenting an existing project as new) will result in immediate disqualification.",
      'The decision of the judges is final and binding.',
      'Qualification rounds and project submissions will take place online via the portal.',
      'Disqualified teams will be taken offline and lose access to the submission portal, but are allowed to stay at the venue.',
    ]
  },
];

export default function RulesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        
        {/* Page Hero */}
        <div className="container relative z-10 pt-10 pb-16 border-b border-white/5">
          <Badge variant="outline" className="mb-6">Guidelines</Badge>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-6">
            Rules & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-ieee-blue-light)] to-[var(--color-prism-violet)] pb-2 px-1">Eligibility</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl">
            Please read the following rules carefully. These guidelines ensure a fair, safe, and competitive environment for everyone.
          </p>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
            {ruleSections.map((section, idx) => (
              <Card key={idx} variant="glass" className="hover:border-white/10 transition-colors h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-surface-1)] shadow-inner border border-white/5">
                      <section.icon className="w-5 h-5" style={{ color: section.color }} />
                    </div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {section.rules.map((rule, ruleIdx) => (
                      <li key={ruleIdx} className="flex items-start gap-3 text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: section.color }} />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-5xl">
            <Card variant="solid" className="border-[var(--color-prism-gold)]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-prism-gold)]/10 to-transparent pointer-events-none" />
              <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-prism-gold)]/10 border border-[var(--color-prism-gold)]/20 flex items-center justify-center shrink-0">
                  <Shield className="w-8 h-8 text-[var(--color-prism-gold)]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Code of Conduct</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    PRISMTECH is dedicated to providing a harassment-free experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of participants in any form.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

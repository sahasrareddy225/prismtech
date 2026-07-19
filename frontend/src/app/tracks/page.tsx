import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Lightbulb, Code, HeartHandshake, Download, FileText, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tracks & Problems | PRISMTECH 2026',
  description: 'Explore the domains and detailed problem statements for the PRISMTECH Hackathon.',
};

const domains = [
  {
    name: 'Optic Stream',
    subtitle: 'IEEE Photonics Society',
    icon: Lightbulb,
    color: 'var(--color-prism-cyan)',
    description: 'Hardware, Embedded Systems, and Light-based solutions.',
  },
  {
    name: 'Neural Stream',
    subtitle: 'IEEE Computer Society',
    icon: Code,
    color: 'var(--color-prism-violet)',
    description: 'Artificial Intelligence, Full-Stack Apps, and Algorithms.',
  },
  {
    name: 'Social Stream',
    subtitle: 'IEEE WIE',
    icon: HeartHandshake,
    color: 'var(--color-prism-gold)',
    description: 'Tech for Social Good, Accessibility, and Equity.',
  }
];

const problems = [
  {
    id: 'PS-01',
    title: 'AI Campus Copilot',
    track: 'Neural Stream',
    color: 'var(--color-prism-violet)',
    description: 'Build an assistant for student services, events, academic support, and accessibility.',
    tags: ['Artificial Intelligence', 'NLP', 'Education'],
  },
  {
    id: 'PS-02',
    title: 'Phishing Shield',
    track: 'Neural & Social Stream',
    color: 'var(--color-prism-cyan)',
    description: 'Detect suspicious messages and train users through explainable risk signals.',
    tags: ['Cybersecurity', 'Machine Learning', 'Social Impact'],
  },
  {
    id: 'PS-03',
    title: 'Smart Energy Lab',
    track: 'Optic Stream',
    color: 'var(--color-prism-gold)',
    description: 'Monitor and optimize electricity usage in campus laboratories.',
    tags: ['IoT', 'Hardware', 'Sustainability'],
  },
  {
    id: 'PS-04',
    title: 'Healthcare Track',
    track: 'Optic & Neural Stream',
    color: 'var(--color-ieee-blue-light)',
    description: 'Problem statement will be released during the opening ceremony.',
    tags: ['Healthcare', 'Hardware', 'AI'],
  }
];

export default function TracksPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        
        {/* Page Hero */}
        <div className="container relative z-10 pt-10 pb-16 border-b border-white/5">
          <Badge variant="outline" className="mb-6">The Challenges</Badge>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-6">
            Domains & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-prism-cyan)] to-[var(--color-prism-violet)] pb-2 px-1">Problems</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl">
            Choose a stream that aligns with your skills. Solve real-world problem statements provided by our industry partners and IEEE societies.
          </p>
        </div>

        <div className="container py-20 space-y-32">
          
          {/* Domains Section */}
          <section>
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display font-bold text-3xl text-white">The Three Streams</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {domains.map((domain) => (
                <Card key={domain.name} variant="glass" className="hover:border-white/20 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[var(--color-surface-1)] shadow-inner border border-white/5">
                      <domain.icon className="w-6 h-6" style={{ color: domain.color }} />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: domain.color }}>
                      {domain.subtitle}
                    </div>
                    <CardTitle className="text-2xl">{domain.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-[var(--color-text-secondary)]">
                      {domain.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Problem Statements Section */}
          <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <h2 className="font-display font-bold text-3xl text-white mb-2">Official Problem Statements</h2>
                <p className="text-[var(--color-text-secondary)]">Detailed briefs for the 24-hour sprint.</p>
              </div>
              <Button variant="outline" asChild>
                <Link href="https://ieee-prismtech.onrender.com/downloads/problem-statements.pdf" target="_blank">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full PDF
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {problems.map((problem) => (
                <div key={problem.id} className="group relative rounded-3xl bg-[var(--color-surface-1)] border border-white/5 overflow-hidden flex flex-col md:flex-row transition-all hover:border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                  
                  {/* Left Edge Color indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 opacity-50 group-hover:opacity-100 transition-opacity" style={{ background: problem.color }} />

                  <div className="p-8 md:p-10 flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary" className="font-mono">{problem.id}</Badge>
                      <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: problem.color }}>
                        {problem.track}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                      {problem.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8 max-w-4xl">
                      {problem.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {problem.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/5 text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="p-8 md:p-10 bg-[var(--color-surface-2)]/50 border-t md:border-t-0 md:border-l border-white/5 flex flex-col justify-center min-w-[250px]">
                    <Button variant="primary" className="w-full mb-3" asChild>
                      <Link href="#register">
                        Select this Problem
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full" asChild>
                      <Link href="https://ieee-prismtech.onrender.com/downloads/problem-statements.pdf" target="_blank">
                        <FileText className="w-4 h-4 mr-2" />
                        View Brief
                      </Link>
                    </Button>
                  </div>
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

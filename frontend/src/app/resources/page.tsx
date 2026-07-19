import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { FileText, Download, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | PRISMTECH 2026',
  description: 'Download rulebooks, problem statements, and APIs for PRISMTECH.',
};

const resources = [
  {
    title: 'Official Rulebook',
    desc: 'Complete guidelines, eligibility criteria, and code of conduct.',
    icon: ShieldCheck,
    color: 'var(--color-prism-cyan)',
    link: '#',
    type: 'PDF (2.4 MB)'
  },
  {
    title: 'Problem Statements',
    desc: 'Detailed breakdown of the challenges for all 3 streams.',
    icon: BookOpen,
    color: 'var(--color-prism-violet)',
    link: '#',
    type: 'PDF (4.1 MB)'
  },
  {
    title: 'Sponsor API Docs',
    desc: 'Documentation for datasets and APIs provided by our partners.',
    icon: ExternalLink,
    color: 'var(--color-prism-gold)',
    link: '#',
    type: 'External Link'
  }
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        <div className="container relative z-10 pt-10 pb-16 border-b border-white/5">
          <Badge variant="outline" className="mb-6">Downloads</Badge>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-6">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-prism-cyan)] to-[var(--color-prism-violet)] pb-2 px-1">Resources</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            Everything you need to prepare for the 24-hour sprint. Download the official problem statements, rulebook, and access sponsor APIs.
          </p>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res, i) => (
              <Card key={i} variant="glass" className="hover:border-white/20 transition-all group flex flex-col h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <res.icon className="w-6 h-6" style={{ color: res.color }} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">{res.title}</h3>
                  <p className="text-[var(--color-text-secondary)] mb-8 flex-grow">{res.desc}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-sm text-white/40">{res.type}</span>
                    <a href={res.link} className="flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: res.color }}>
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

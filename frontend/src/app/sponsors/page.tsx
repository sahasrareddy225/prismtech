import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Building2, Sparkles, Network } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors & Partners | PRISMTECH 2026',
  description: 'Industry and community partnerships powering the PRISMTECH hackathon.',
};

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        
        {/* Page Hero */}
        <div className="container relative z-10 pt-10 pb-16 border-b border-white/5">
          <Badge variant="outline" className="mb-6 border-[var(--color-prism-gold)]/30 text-[var(--color-prism-gold)]">Sponsors & Partners</Badge>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-6">
            Industry & Community <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-prism-gold)] to-[var(--color-prism-violet)] pb-2 px-1">Partnership</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
            We are proud to partner with industry leaders and community organizations to bring PRISMTECH to life. 
            Sponsor announcements will be made leading up to the event.
          </p>
        </div>

        <div className="container py-16 space-y-16 text-center">
          
          <div className="flex flex-col items-center justify-center py-20 px-4 border border-dashed border-white/10 rounded-3xl bg-[var(--color-surface-1)]">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <Sparkles className="w-10 h-10 text-[var(--color-text-muted)]" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Sponsors TBA</h2>
            <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">
              We are finalizing our partnerships for 2026. Check back soon for the official sponsor lineup, or contact us to become a partner.
            </p>
            <a href="/contact" className="mt-8 inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors">
              Become a Sponsor
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card variant="glass" className="border-white/5">
              <CardContent className="p-8">
                <Building2 className="w-8 h-8 text-[var(--color-prism-cyan)] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Industry Partners</h3>
                <p className="text-[var(--color-text-secondary)]">Providing cutting-edge tools, APIs, and mentorship to our participants during the 24-hour sprint.</p>
              </CardContent>
            </Card>
            
            <Card variant="glass" className="border-white/5">
              <CardContent className="p-8">
                <Network className="w-8 h-8 text-[var(--color-prism-violet)] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Community Partners</h3>
                <p className="text-[var(--color-text-secondary)]">Supporting social equity, diversity in tech, and accessible education throughout the event.</p>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

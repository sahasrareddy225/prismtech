import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PrizesSection from '@/components/sections/PrizesSection';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prizes & Recognition',
  description: 'Discover the awards, certificates, and recognition opportunities at PRISMTECH 2026.',
};

export default function PrizesPage() {
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
              background: 'radial-gradient(ellipse at 50% 0%, rgba(245, 158, 11, 0.12) 0%, transparent 60%)',
            }}
          />
          <div className="container relative z-10 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                Awards
              </div>
              <h1 className="font-display font-800 text-5xl sm:text-6xl text-white mb-5">
                Beyond <span className="text-gradient-violet-gold">Trophies</span>
              </h1>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                PRISMTECH is about building solutions that matter. We reward innovation with recognition,
                networking, and opportunities that last long after the hackathon ends.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Reuse the PrizesSection from the landing page, but without the header since we have a page header */}
        <div className="pb-20" style={{ background: 'var(--color-surface-1)' }}>
          <PrizesSection />
        </div>

        <section className="py-20 border-t border-white/5" style={{ background: 'var(--color-surface-0)' }}>
           <div className="container max-w-3xl text-center">
             <FadeIn>
                <h2 className="font-display font-700 text-3xl text-white mb-4">Certificates for All</h2>
                <p className="text-white/60 mb-8">
                  Every participant who successfully checks in and submits a project at the end of the hackathon
                  will receive a verified Certificate of Participation from IEEE KLH Student Branch.
                </p>
             </FadeIn>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQSection from '@/components/sections/FAQSection';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about PRISMTECH 2026.',
};

export default function FAQPage() {
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
              background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
            }}
          />
          <div className="container relative z-10 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                Support
              </div>
              <h1 className="font-display font-800 text-5xl sm:text-6xl text-white mb-5">
                Frequently Asked <span className="text-gradient-cyan-violet">Questions</span>
              </h1>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Got a question? We've got answers. If you can't find what you're looking for,
                feel free to reach out to us directly.
              </p>
            </FadeIn>
          </div>
        </section>

        <div className="pb-20" style={{ background: 'var(--color-surface-1)' }}>
          <FAQSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

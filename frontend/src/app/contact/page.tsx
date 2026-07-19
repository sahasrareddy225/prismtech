import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/sections/ContactSection';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the PRISMTECH 2026 organizing team.',
};

export default function ContactPage() {
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
                Get in Touch
              </div>
              <h1 className="font-display font-800 text-5xl sm:text-6xl text-white mb-5">
                Contact <span className="text-gradient-violet-gold">Us</span>
              </h1>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Whether you have a question about registration, tracks, or sponsorship,
                our team is here to help. Reach out anytime.
              </p>
            </FadeIn>
          </div>
        </section>

        <div className="pb-20" style={{ background: 'var(--color-surface-1)' }}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

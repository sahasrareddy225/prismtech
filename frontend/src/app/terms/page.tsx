import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | PRISMTECH 2026',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 pb-12 bg-[var(--color-surface-0)] min-h-screen">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <span className="eyebrow">Legal</span>
            <h1 className="text-display-lg text-[var(--color-text-primary)] mt-3 mb-4">Terms & Conditions</h1>
            <p className="text-[var(--color-text-secondary)]">Last updated: September 2026</p>
          </div>
          
          <div className="prose-custom space-y-10 text-[var(--color-text-secondary)]">
            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed text-sm">By registering for the IEEE PRISMTECH Hackathon, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not participate in the event.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">2. Eligibility</h2>
              <p className="leading-relaxed text-sm">Participation is open to undergraduate and postgraduate students from recognized institutions. Participants must carry a valid institutional ID to the physical venue. Registration must be completed accurately.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">3. Code of Conduct</h2>
              <p className="leading-relaxed text-sm">We are committed to providing a safe, inclusive, and harassment-free environment. Any form of harassment, discrimination, or disruptive behavior will lead to immediate disqualification and removal from the venue. Plagiarism is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">4. Intellectual Property</h2>
              <p className="leading-relaxed text-sm">Teams retain full intellectual property rights to the software or hardware they develop during the hackathon. However, any sponsor-provided datasets or proprietary hardware must be used under their specific licenses.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">5. Liability</h2>
              <p className="leading-relaxed text-sm">IEEE KLH Student Branch, the organizers, and the venue are not liable for any personal injury, loss, or damage to personal property (including laptops and hardware) during the event.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

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
      <main className="pt-32 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        <div className="container max-w-4xl">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Terms & Conditions</h1>
          <p className="text-[var(--color-text-secondary)] mb-12">Last updated: September 2026</p>
          
          <div className="prose prose-invert prose-lg max-w-none prose-a:text-[var(--color-prism-cyan)] prose-headings:font-display">
            <h2>1. Acceptance of Terms</h2>
            <p>By registering for the IEEE PRISMTECH Hackathon, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not participate in the event.</p>
            
            <h2>2. Eligibility</h2>
            <p>Participation is open to undergraduate and postgraduate students from recognized institutions. Participants must carry a valid institutional ID to the physical venue. Registration must be completed accurately.</p>

            <h2>3. Code of Conduct</h2>
            <p>We are committed to providing a safe, inclusive, and harassment-free environment. Any form of harassment, discrimination, or disruptive behavior will lead to immediate disqualification and removal from the venue. Plagiarism is strictly prohibited.</p>

            <h2>4. Intellectual Property</h2>
            <p>Teams retain full intellectual property rights to the software or hardware they develop during the hackathon. However, any sponsor-provided datasets or proprietary hardware must be used under their specific licenses.</p>

            <h2>5. Liability</h2>
            <p>IEEE KLH Student Branch, the organizers, and the venue are not liable for any personal injury, loss, or damage to personal property (including laptops and hardware) during the event.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

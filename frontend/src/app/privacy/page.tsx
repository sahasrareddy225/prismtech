import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | PRISMTECH 2026',
  description: 'Privacy policy for the IEEE PRISMTECH 2026 Hackathon website.',
};

const SECTIONS = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly when you register for PRISMTECH 2026. This includes:
    • Full name, email address, and phone number
    • Institutional affiliation, roll number, year, and branch
    • Team name, selected problem domain, and team member details
    • Messages submitted through our contact form

    We do not collect sensitive personal data such as financial information, government IDs, or biometric data through this website.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `Your information is used solely for the purposes of:
    • Processing your hackathon registration and communicating event details
    • Sending schedule updates, announcements, and important notifications
    • Verifying team eligibility at check-in
    • Issuing IEEE participation certificates
    • Contacting team leaders for coordination during the event

    We do not use your information for advertising or sell it to third parties.`,
  },
  {
    title: '3. Data Sharing',
    content: `We may share your registration details with:
    • Sponsors and partners who are directly involved in running the event (for problem domain coordination, API access, or prize distribution)
    • IEEE KLH Student Branch faculty advisors and organizing committee members
    • Venue and logistics coordinators

    Any data shared is limited to what is strictly necessary for event operations.`,
  },
  {
    title: '4. Photography & Media',
    content: `By attending PRISMTECH 2026, you consent to being photographed or filmed at the event. 
    Photos and videos may be used for event documentation, social media, and future promotional materials by IEEE KLH Student Branch. 
    If you have concerns about specific images, please contact our team.`,
  },
  {
    title: '5. Data Retention',
    content: `Registration and participation data is retained for up to 2 years after the event for record-keeping, certification issuance, and reporting to IEEE. 
    Contact form submissions are retained for up to 90 days. You may request deletion of your data by emailing us.`,
  },
  {
    title: '6. Cookies',
    content: `This website may use minimal cookies for session management and analytics. 
    We do not use tracking cookies for advertising. Analytics data is anonymized and used only to improve the website experience.`,
  },
  {
    title: '7. Your Rights',
    content: `You have the right to:
    • Request access to the personal data we hold about you
    • Request correction of inaccurate data
    • Request deletion of your data (subject to our retention obligations)
    • Withdraw consent for non-essential communications

    To exercise these rights, please contact us at prismtech@ieee.example.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this privacy policy from time to time. Significant changes will be communicated to registered participants via email. 
    Continued use of the website or participation in the event constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[var(--color-surface-0)] pt-28 pb-12">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <span className="eyebrow">Legal</span>
            <h1 className="text-display-lg text-[var(--color-text-primary)] mt-3 mb-4">Privacy Policy</h1>
            <p className="text-[var(--color-text-secondary)]">
              Last updated: September 2026 · Applies to ieee-prismtech.com and all PRISMTECH 2026 registration systems.
            </p>
          </div>

          <div className="glass-card p-4 sm:p-6 mb-12 border-[var(--color-glass-border)] bg-[var(--color-surface-2)]">
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              IEEE PRISMTECH 2026 is organized by the IEEE KLH Student Branch, Aziz Nagar, Hyderabad. 
              We are committed to protecting the privacy of all participants, visitors, and contributors. 
              This policy explains how we collect, use, and safeguard your information.
            </p>
          </div>

          <div className="prose-custom space-y-10">
            {SECTIONS.map((section) => (
              <section key={section.title} aria-labelledby={section.title}>
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">{section.title}</h2>
                <div className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line text-sm">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-white/05 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="font-semibold text-[var(--color-text-primary)] mb-1">Questions about this policy?</div>
              <div className="text-sm text-[var(--color-text-secondary)]">Reach us at prismtech@ieee.example</div>
            </div>
            <Link href="/contact" className="btn-magnetic btn-secondary shrink-0">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

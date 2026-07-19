import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | PRISMTECH 2026',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        <div className="container max-w-4xl">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Privacy Policy</h1>
          <p className="text-[var(--color-text-secondary)] mb-12">Last updated: September 2026</p>
          
          <div className="prose prose-invert prose-lg max-w-none prose-a:text-[var(--color-prism-cyan)] prose-headings:font-display">
            <h2>1. Information Collection</h2>
            <p>During registration for the IEEE PRISMTECH Hackathon, we collect standard participant details including name, college/university, roll number, email address, and phone number. This information is required for verifying eligibility, team formation, and venue security.</p>
            
            <h2>2. Data Usage</h2>
            <p>Your data will solely be used for the administration of the event. We may use your email to send critical updates, schedule changes, and sponsor announcements directly related to the hackathon.</p>

            <h2>3. Third-Party Sharing</h2>
            <p>We do not sell your personal data. We may share basic profile information (Name, College, Department) with our official sponsors solely for the purpose of recruitment or distributing special sponsor prizes. You can opt out of this sharing during registration.</p>

            <h2>4. Media Consent</h2>
            <p>By attending the event, you consent to being photographed and recorded. Media will be used for IEEE promotional materials, our official gallery, and sponsor press releases.</p>

            <h2>5. Contact Us</h2>
            <p>If you wish to have your data removed after the event concludes, please contact us at <a href="mailto:contact@ieee-prismtech.com">contact@ieee-prismtech.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

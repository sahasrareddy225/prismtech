import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VenueSection from '@/components/sections/VenueSectionSPA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venue & Directions | PRISMTECH 2026',
  description: 'How to reach KL University (KLH) Hyderabad Off-Campus in Aziz Nagar for PRISMTECH 2026.',
};

export default function VenuePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-[var(--color-surface-0)]">
        <VenueSection />
      </main>
      <Footer />
    </>
  );
}

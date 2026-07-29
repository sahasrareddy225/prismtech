'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TracksSection from '@/components/sections/TracksSectionSPA';

export default function TracksSectionPage() {
  return (
    <>
      <Navbar />
      <TracksSection />
      <Footer />
    </>
  );
}

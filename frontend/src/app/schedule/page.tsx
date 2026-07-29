'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScheduleSection from '@/components/sections/ScheduleSectionSPA';

export default function ScheduleSectionPage() {
  return (
    <>
      <Navbar />
      <ScheduleSection />
      <Footer />
    </>
  );
}

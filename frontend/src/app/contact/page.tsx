'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
const ContactSection = dynamic(() => import('@/components/sections/ContactSectionSPA'), { ssr: false });

export default function ContactSectionPage() {
  return (
    <>
      <Navbar />
      <ContactSection />
      <Footer />
    </>
  );
}

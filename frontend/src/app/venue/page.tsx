import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Navigation, Car, Bus, Plane, Train } from 'lucide-react';
import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Venue & Directions | PRISMTECH 2026',
  description: 'How to reach KL University (KLH) Hyderabad Off-Campus in Aziz Nagar for PRISMTECH 2026.',
};

const transportModes = [
  {
    mode: 'By Air',
    icon: Plane,
    details: 'Rajiv Gandhi International Airport (HYD) is approximately 30-40 minutes away by cab. You can book an Airport Taxi or use Ola/Uber directly to the campus.',
  },
  {
    mode: 'By Train',
    icon: Train,
    details: 'Secunderabad Junction (SC) and Hyderabad Deccan (HYB) are the major railway stations. From there, take a cab (45-60 mins) or Metro to MGBS, followed by a bus/cab.',
  },
  {
    mode: 'By Bus',
    icon: Bus,
    details: 'TSRTC buses ply towards Moinabad (e.g., 288 series from Mehdipatnam). Get down at the Aziz Nagar/VIF College stop. The campus is a short walk from the main road.',
  },
  {
    mode: 'By Car / Cab',
    icon: Car,
    details: 'Search for "KL University Hyderabad" on Google Maps. The campus is located on Moinabad Road, near TS Police Academy. Ample parking space is available.',
  },
];

export default function VenuePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[var(--color-surface-0)]">
        
        {/* Hero */}
        <section className="relative pt-28 pb-12 border-b border-white/[0.05] overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,98,155,0.08) 0%, transparent 70%)' }}
          />
          <div className="container relative z-10 text-center">
            <span className="eyebrow justify-center">Location</span>
            <h1
              className="text-[var(--color-text-primary)] mt-2 mb-4 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              The <span className="text-gradient-ieee">Venue.</span>
            </h1>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
              Join us at the state-of-the-art KL University (KLH) Hyderabad campus in Aziz Nagar. Equipped with modern labs, high-speed Wi-Fi, and 24/7 facilities.
            </p>
          </div>
        </section>

        <div className="section">
          <div className="container space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              
              {/* Left: Map & Address (Sticky on Desktop) */}
              <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-32">
                <div className="glass-card overflow-hidden">
                {/* Actual Map Embed */}
                <div className="h-64 w-full bg-[var(--color-surface-2)] relative border-b border-white/5">
                  <iframe 
                    src="https://maps.google.com/maps?q=KL+University+(KLH)+Hyderabad+%E2%80%93+Off+Campus,+R.V.S.+Nagar,+Moinabad+Road,+Aziz+Nagar,+Hyderabad+%E2%80%93+500075,+Telangana,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                  <div className="p-8">
                    <h2 className="font-display font-bold text-2xl text-[var(--color-text-primary)] mb-4">KL University (KLH) Hyderabad – Off Campus</h2>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                      R.V.S. Nagar, Moinabad Road,<br />
                      Aziz Nagar, Hyderabad – 500075,<br />
                      Telangana, India.
                    </p>
                    <Link href="https://maps.google.com" target="_blank" className="btn-magnetic btn-primary w-full text-center flex justify-center">
                      <Navigation className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Transport Modes Bento Grid */}
              <div className="lg:col-span-3">
                <h2 className="font-display font-bold text-3xl text-[var(--color-text-primary)] mb-8">Getting Here</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {transportModes.map((transport, idx) => (
                    <div key={idx} className="glass-card p-8 flex flex-col h-full hover:border-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 mb-6">
                        <transport.icon className="w-6 h-6 text-[var(--color-ieee-blue-light)]" />
                      </div>
                      <h3 className="font-display font-semibold text-xl text-[var(--color-text-primary)] mb-3">{transport.mode}</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed mt-auto">
                        {transport.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

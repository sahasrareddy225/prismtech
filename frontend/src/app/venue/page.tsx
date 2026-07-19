import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Navigation, Car, Bus, Plane, Train } from 'lucide-react';
import type { Metadata } from 'next';
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
    color: 'var(--color-prism-cyan)',
  },
  {
    mode: 'By Train',
    icon: Train,
    details: 'Secunderabad Junction (SC) and Hyderabad Deccan (HYB) are the major railway stations. From there, take a cab (45-60 mins) or Metro to MGBS, followed by a bus/cab.',
    color: 'var(--color-prism-violet)',
  },
  {
    mode: 'By Bus',
    icon: Bus,
    details: 'TSRTC buses ply towards Moinabad (e.g., 288 series from Mehdipatnam). Get down at the Aziz Nagar/VIF College stop. The campus is a short walk from the main road.',
    color: 'var(--color-prism-gold)',
  },
  {
    mode: 'By Car / Cab',
    icon: Car,
    details: 'Search for "KL University Hyderabad" on Google Maps. The campus is located on Moinabad Road, near TS Police Academy. Ample parking space is available.',
    color: 'var(--color-ieee-blue-light)',
  },
];

export default function VenuePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        
        {/* Page Hero */}
        <div className="container relative z-10 pt-10 pb-16 border-b border-white/5">
          <Badge variant="outline" className="mb-6">Location</Badge>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-prism-cyan)] to-[var(--color-prism-violet)] pb-2 px-1">Venue</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl">
            Join us at the state-of-the-art KL University (KLH) Hyderabad campus in Aziz Nagar. Equipped with modern labs, high-speed Wi-Fi, and 24/7 facilities.
          </p>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            
            {/* Left: Map & Address (Sticky on Desktop) */}
            <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-32">
              <Card variant="glass" className="overflow-hidden border-[var(--color-prism-cyan)]/20">
                {/* Actual Map Embed */}
                <div className="h-64 w-full bg-[var(--color-surface-2)] relative border-b border-white/5">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.1171804791336!2d78.3305417!3d17.3486307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbba81e7d23f7%3A0xdaebcc168ccfa497!2sK.L.%20Deemed%20to%20be%20University%2C%20Hyderabad%20Off-Campus!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <CardContent className="p-8">
                  <h2 className="font-display font-bold text-2xl text-white mb-4">KL University (KLH)</h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                    R.V.S Nagar, Moinabad Road,<br />
                    Near TS Police Academy,<br />
                    Aziz Nagar, Hyderabad,<br />
                    Telangana - 500075, India.
                  </p>
                  <Button variant="primary" className="w-full" asChild>
                    <Link href="https://maps.google.com" target="_blank">
                      <Navigation className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right: Transport Modes Bento Grid */}
            <div className="lg:col-span-3">
              <h2 className="font-display font-bold text-3xl text-white mb-8">Getting Here</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {transportModes.map((transport, idx) => (
                  <Card key={idx} variant="glass" className="hover:border-white/10 transition-colors h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-surface-1)] shadow-inner border border-white/5 mb-6">
                        <transport.icon className="w-6 h-6" style={{ color: transport.color }} />
                      </div>
                      <h3 className="font-display font-semibold text-xl text-white mb-3">{transport.mode}</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed mt-auto">
                        {transport.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

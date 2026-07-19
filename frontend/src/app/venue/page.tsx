import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations/FadeIn';
import { MapPin, Navigation, Car, Bus, Plane, Train } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venue',
  description: 'How to reach KL University (KLH) Hyderabad Off-Campus in Aziz Nagar for PRISMTECH 2026.',
};

const transportModes = [
  {
    mode: 'By Air',
    icon: Plane,
    details: 'Rajiv Gandhi International Airport (HYD) is approximately 30-40 minutes away by cab. You can book an Airport Taxi or use Ola/Uber directly to the campus.',
    color: '#00d4ff',
  },
  {
    mode: 'By Train',
    icon: Train,
    details: 'Secunderabad Junction (SC) and Hyderabad Deccan (HYB) are the major railway stations. From there, you can take a cab (approx. 45-60 mins) or the Metro to MGBS, followed by a bus/cab.',
    color: '#8b5cf6',
  },
  {
    mode: 'By Bus',
    icon: Bus,
    details: 'TSRTC buses ply towards Moinabad (e.g., 288 series from Mehdipatnam). Get down at the Aziz Nagar/VIF College stop. The campus is a short walk from the main road.',
    color: '#f59e0b',
  },
  {
    mode: 'By Car / Cab',
    icon: Car,
    details: 'Search for "KL University Hyderabad" on Google Maps. The campus is located on the Moinabad Road, near TS Police Academy. Ample parking space is available.',
    color: '#6366f1',
  },
];

export default function VenuePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: 'var(--color-surface-0)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.12) 0%, transparent 60%)',
            }}
          />
          <div className="container relative z-10 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                Location
              </div>
              <h1 className="font-display font-800 text-5xl sm:text-6xl text-white mb-5">
                The <span className="text-gradient-cyan-violet">Venue</span>
              </h1>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Join us at the state-of-the-art KL University (KLH) Hyderabad campus in Aziz Nagar.
                Equipped with modern labs, high-speed Wi-Fi, and 24/7 facilities.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="section border-t border-white/5" style={{ background: 'var(--color-surface-1)' }}>
          <div className="container max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left: Map & Address */}
              <div className="lg:col-span-2 space-y-6">
                <FadeIn>
                  <div className="p-6 rounded-2xl glass border border-white/5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#00d4ff]/10 border border-[#00d4ff]/20 mb-4">
                      <MapPin className="w-6 h-6 text-[#00d4ff]" />
                    </div>
                    <h2 className="font-display font-700 text-xl text-white mb-2">KL University (KLH)</h2>
                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                      R.V.S Nagar, Moinabad Road,<br />
                      Near TS Police Academy,<br />
                      Aziz Nagar, Hyderabad,<br />
                      Telangana - 500075, India.
                    </p>
                    <a
                      href="https://goo.gl/maps/xyz" // Replace with actual Google Maps link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      Open in Google Maps
                    </a>
                  </div>
                </FadeIn>
              </div>

              {/* Right: Directions */}
              <div className="lg:col-span-3">
                <FadeIn>
                  <h2 className="font-display font-700 text-2xl text-white mb-6">How to Reach</h2>
                </FadeIn>
                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {transportModes.map((mode, i) => {
                    const Icon = mode.icon;
                    return (
                      <StaggerItem key={i}>
                        <div className="p-5 rounded-2xl border border-white/5 bg-white/3 h-full">
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center"
                              style={{ background: `${mode.color}15`, border: `1px solid ${mode.color}30` }}
                            >
                              <Icon className="w-4 h-4" style={{ color: mode.color }} />
                            </div>
                            <h3 className="font-display font-600 text-white">{mode.mode}</h3>
                          </div>
                          <p className="text-sm text-white/50 leading-relaxed">{mode.details}</p>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </StaggerChildren>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

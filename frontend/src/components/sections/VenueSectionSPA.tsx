'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, Car, Bus } from 'lucide-react';

const card: React.CSSProperties = {
  background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '14px',
  backdropFilter: 'blur(20px)',
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <div style={{ width: '20px', height: '1px', background: 'rgba(0,136,204,0.6)' }} />
      <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,136,204,0.9)' }}>{children}</span>
      <div style={{ width: '20px', height: '1px', background: 'rgba(0,136,204,0.6)' }} />
    </div>
  );
}

export default function VenueSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-40px' });

  return (
    <section id="venue" ref={sectionRef} style={{ position: 'relative', zIndex: 1, paddingBottom: '96px', background: 'var(--color-surface-0)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
        <div style={{ position: 'absolute', bottom: '0%', left: '50%', width: '800px', height: '600px', background: 'radial-gradient(ellipse at bottom, rgba(0,136,204,0.06) 0%, transparent 60%)', borderRadius: '50%', transform: 'translateX(-50%)' }} />
      </div>

      <div className="container relative z-10">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px', paddingTop: '64px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Venue</SectionLabel>
            <h2
              className="text-gradient-ieee"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '18px' }}
            >
              Where the magic happens.
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              Join us at the state-of-the-art KLH University Aziz Nagar campus for an unforgettable 24 hours of innovation.
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-8 items-stretch">
          
          {/* Left: Address and details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ ...card, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                <MapPin style={{ width: '22px', height: '22px', color: 'rgba(34,211,238,0.9)' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>KLH University</h3>
                <div style={{ fontSize: '0.95rem', color: 'rgba(139,158,192,0.9)', fontWeight: 600, marginBottom: '4px' }}>Aziz Nagar Campus</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  R.V.S Nagar, Moinabad Road, <br/>
                  Near TS Police Academy, <br/>
                  Hyderabad, Telangana 500075
                </p>
              </div>
              <a 
                href="https://maps.app.goo.gl/FXJBcJc5AUpTXkYu9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-magnetic btn-primary"
                style={{ marginTop: '12px', padding: '12px', width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
              >
                <Navigation style={{ width: '16px', height: '16px' }} />
                Open in Google Maps
              </a>
            </div>

            <div style={{ ...card, padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.7)' }}>
                Transportation
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                KLH provides a comprehensive bus network. Download the full route schedule below.
              </p>
              <a 
                href="/klh-bus-routes.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-magnetic"
                style={{ 
                  marginTop: '8px', padding: '12px 20px', width: '100%', justifyContent: 'center', fontSize: '0.9rem',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-primary)', textDecoration: 'none', transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
              >
                <Bus style={{ width: '16px', height: '16px', color: 'rgba(34,211,238,0.8)' }} />
                View KLH Bus Routes
              </a>
            </div>
          </motion.div>

          {/* Right: Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ height: '100%' }}
          >
            <div style={{ ...card, padding: '8px', height: '100%', minHeight: '400px', display: 'flex' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '10px', overflow: 'hidden', background: '#0a0a0a', position: 'relative' }}>
                {/* Fallback loading state underneath iframe */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}>
                  Loading Map...
                </div>
                <iframe 
                  src="https://maps.google.com/maps?q=KLH%20University%20Aziz%20Nagar&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, position: 'relative', zIndex: 1, minHeight: '400px' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KLH University Aziz Nagar Map"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

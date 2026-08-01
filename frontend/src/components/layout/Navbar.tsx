'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/tracks', label: 'Tracks' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/rules', label: 'Rules' },
  { href: '/team', label: 'Team' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/contact', label: 'Contact' },
  { href: '/venue', label: 'Venue' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar w-full" role="banner" aria-label="Event announcement">
        <div className="container flex items-center justify-center gap-3 text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ieee-blue-light)] animate-pulse-dot" />
          <span className="text-xs">
            Registration closes{' '}
            <strong className="text-white/95">9 September 2026</strong>
            {' '}· KLH Aziz Nagar, Hyderabad
          </span>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScJSw2IPcAiEdoWePMIQgvDRIEj--MUkn_cqCbgNuMzMcfqzA/viewform?usp=dialog"
            className="text-xs font-semibold text-[var(--color-ieee-blue-light)] hover:text-white transition-colors underline underline-offset-2"
          >
            Register →
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(13, 20, 36, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottomColor: scrolled ? 'rgba(255,255,255,0.07)' : 'transparent',
        }}
        transition={{ duration: 0.25 }}
        className="sticky top-0 z-50 border-b w-full"
        role="banner"
      >
        <nav className="w-full max-w-full px-4 lg:px-16 flex items-center h-[64px] lg:h-[96px] gap-4" aria-label="Primary navigation">

          {/* Logo & Title */}
          <div className="flex items-center shrink-0 group flex-1 lg:flex-none lg:mr-6">
            <Link href="/" className="flex items-center gap-2 lg:gap-5" aria-label="PRISMTECH 2026 Home">
              <div className="flex items-center gap-2 lg:gap-4">
                <div className="bg-white px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg lg:rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-300 flex items-center justify-center">
                  <Image src="/klh-logo.png" alt="KLH Logo" width={140} height={60} className="object-contain h-8 lg:h-[42px] w-auto" />
                </div>
                <div className="relative transition-transform duration-300">
                  <div className="absolute -inset-1 bg-cyan-400/20 blur-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image src="/ieee-logo.png" alt="IEEE Logo" width={60} height={60} className="object-contain rounded-md relative z-10 drop-shadow-[0_0_12px_rgba(34,211,238,0.3)] h-8 lg:h-[42px] w-auto" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[16px] lg:text-[28px] font-bold text-white tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">PRISMTECH</div>
                <div className="text-[9px] lg:text-[13px] text-cyan-400 font-semibold tracking-[0.2em] uppercase">IEEE KLH · 2026</div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 text-[13px] font-medium tracking-wider uppercase transition-all duration-300 group ${
                    isActive ? 'text-cyan-400' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full ${
                    isActive ? 'w-full shadow-[0_0_8px_rgba(34,211,238,0.6)]' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-7 ml-auto">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScJSw2IPcAiEdoWePMIQgvDRIEj--MUkn_cqCbgNuMzMcfqzA/viewform?usp=dialog" className="btn-magnetic btn-primary text-sm py-2.5 px-6 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              Register Your Team
            </Link>
          </div>

          {/* Mobile hamburger — lg:hidden only */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] hover:border-cyan-400/40 hover:bg-cyan-400/[0.07] transition-all duration-200"
            style={{ marginLeft: 'auto', marginRight: '4px', flexShrink: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
          >
            {isOpen
              ? <X style={{ width: '15px', height: '15px', color: 'rgba(34,211,238,0.95)' }} />
              : <Menu style={{ width: '15px', height: '15px', color: 'rgba(255,255,255,0.75)' }} />
            }
          </button>
        </nav>
      </motion.header>

      {/* ── MOBILE DRAWER — lg:hidden, pure CSS transition, slides from RIGHT ── */}

      {/* Backdrop — always in DOM, opacity toggled */}
      <div
        className="lg:hidden"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 998,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(3px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.28s ease',
        }}
      />

      {/* Drawer panel — always in DOM, translateX toggled */}
      <div
        className="lg:hidden"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          width: '72vw',
          maxWidth: '290px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(160deg, rgba(10,16,30,0.99) 0%, rgba(7,12,24,1) 100%)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderLeft: '1px solid rgba(34,211,238,0.13)',
          boxShadow: '-12px 0 48px rgba(0,0,0,0.7)',
          overflowY: 'auto',
          overflowX: 'hidden',
          /* KEY: translateX(100%) = hidden off right edge, translateX(0) = visible */
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.32s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Top cyan glow line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.8) 50%, transparent)' }} />

        {/* Drawer header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 20px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          flexShrink: 0,
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>PRISMTECH</div>
            <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.7)', marginTop: '2px' }}>IEEE KLH · 2026</div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            style={{
              width: '32px', height: '32px', borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', flexShrink: 0,
            }}
          >
            <X style={{ width: '14px', height: '14px', color: 'rgba(34,211,238,0.9)' }} />
          </button>
        </div>

        {/* Nav links */}
        <div style={{ padding: '16px 16px 0', flex: 1 }}>
          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', paddingLeft: '2px' }}>
            <div style={{ width: '14px', height: '1px', background: 'rgba(34,211,238,0.45)' }} />
            <span style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.55)' }}>Navigation</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.04)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.52)',
                    background: isActive ? 'rgba(34,211,238,0.07)' : 'transparent',
                    border: isActive ? '1px solid rgba(34,211,238,0.16)' : '1px solid transparent',
                    transition: 'all 0.15s ease',
                    letterSpacing: '0.01em',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '3px', height: '13px', borderRadius: '2px', flexShrink: 0,
                      background: isActive ? 'rgba(34,211,238,0.9)' : 'rgba(255,255,255,0.08)',
                      boxShadow: isActive ? '0 0 6px rgba(34,211,238,0.5)' : 'none',
                    }} />
                    {link.label}
                  </div>
                  {isActive && (
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(34,211,238,0.9)', boxShadow: '0 0 5px rgba(34,211,238,0.6)', flexShrink: 0 }} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA footer */}
        <div style={{
          padding: '16px 16px 32px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          marginTop: '16px',
          display: 'flex', flexDirection: 'column', gap: '10px',
          flexShrink: 0,
        }}>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScJSw2IPcAiEdoWePMIQgvDRIEj--MUkn_cqCbgNuMzMcfqzA/viewform?usp=dialog"
            className="btn-magnetic btn-primary"
            style={{ display: 'flex', justifyContent: 'center', fontSize: '12.5px', padding: '11px 0', borderRadius: '11px', width: '100%' }}
          >
            Register Your Team
          </Link>
          <p style={{ textAlign: 'center', fontSize: '9.5px', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.06em', margin: 0 }}>
            IEEE KLH Student Branch · Hyderabad
          </p>
        </div>
      </div>
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <>
      {/* Announcement Bar */}
      <div
        className="announcement-bar"
        role="banner"
        aria-label="Event announcement"
      >
        <div className="container flex items-center justify-center gap-3 text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ieee-blue-light)] animate-pulse-dot" />
          <span className="text-xs">
            Registration closes{' '}
            <strong className="text-white/95">9 September 2026</strong>
            {' '}· KLH Aziz Nagar, Hyderabad
          </span>
          <Link
            href="#"
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
        className="sticky top-0 z-50 border-b"
        role="banner"
      >
        <nav className="w-full px-16 flex items-center h-[96px] gap-8" aria-label="Primary navigation">

          {/* Logo & Title */}
          <div className="flex items-center shrink-0 group mr-6">
            <Link href="/" className="flex items-center gap-5" aria-label="PRISMTECH 2026 Home">
              <div className="flex items-center gap-4">
                <div className="bg-white px-3 py-1.5 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-300 flex items-center justify-center">
                  <Image src="/klh-logo.png" alt="KLH Logo" width={140} height={60} className="object-contain" style={{ width: 'auto', height: '48px' }} />
                </div>
                <div className="relative transition-transform duration-300">
                  <div className="absolute -inset-1 bg-cyan-400/20 blur-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image src="/ieee-logo.png" alt="IEEE Logo" width={60} height={60} className="object-contain rounded-md relative z-10 drop-shadow-[0_0_12px_rgba(34,211,238,0.3)]" style={{ width: 'auto', height: '48px' }} />
                </div>
              </div>
              <div className="flex flex-col justify-center ml-1">
                <div className="text-[28px] font-bold text-white tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">PRISMTECH</div>
                <div className="text-[13px] text-cyan-400 font-semibold tracking-[0.2em] uppercase mt-1">IEEE KLH · 2026</div>
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
                    isActive
                      ? 'text-cyan-400'
                      : 'text-white/50 hover:text-white'
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

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-7 ml-auto">
            <Link href="#" className="btn-magnetic btn-primary text-sm py-2.5 px-6 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              Register Your Team
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden ml-auto w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/06 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white/70" />}
          </button>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden border-t border-white/06"
              style={{ background: 'rgba(13, 20, 36, 0.97)', backdropFilter: 'blur(20px)' }}
            >
              <div className="container py-4 flex flex-col gap-0.5">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-white bg-[var(--color-ieee-blue-dark)]'
                        : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-white/05'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 mt-2 border-t border-white/06 flex flex-col gap-2">

                  <Link href="#" className="btn-magnetic btn-primary w-full justify-center text-sm">
                    Register Your Team
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

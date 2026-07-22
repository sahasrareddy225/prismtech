'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
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
            <strong className="text-white/95">21 September 2026</strong>
            {' '}· KLH Aziz Nagar, Hyderabad
          </span>
          <Link
            href="/auth/register"
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
        <nav className="container flex items-center h-[60px] gap-8" aria-label="Primary navigation">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="PRISMTECH 2026 Home">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-ieee-blue)] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white" aria-hidden="true">
                <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" stroke="currentColor" strokeWidth="2" fill="rgba(255,255,255,0.15)" />
                <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" />
                <line x1="2" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                <line x1="2" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              </svg>
            </div>
            <div className="leading-none">
              <div className="text-sm font-bold text-white tracking-tight font-display">PRISMTECH</div>
              <div className="text-[9px] text-white/40 font-medium tracking-widest uppercase">IEEE KLH · 2026</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/08'
                      : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-white/04'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
            <Link href="/auth/login" className="btn-magnetic btn-ghost text-sm py-2 px-4">
              Sign In
            </Link>
            <Link href="/auth/register" className="btn-magnetic btn-primary text-sm py-2 px-4">
              Register Now
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
                  <Link href="/auth/login" className="btn-magnetic btn-secondary w-full justify-center text-sm">
                    Sign In
                  </Link>
                  <Link href="/auth/register" className="btn-magnetic btn-primary w-full justify-center text-sm">
                    Register Now
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

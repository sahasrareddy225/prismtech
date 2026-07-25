'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, UserCircle, User, Settings, LogOut, ChevronDown } from 'lucide-react';

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
  const [username, setUsername] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    setDropdownOpen(false);
    router.push('/');
  };

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
        <nav className="w-full px-16 flex items-center h-[60px] gap-8" aria-label="Primary navigation">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="PRISMTECH 2026 Home">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-ieee-blue)] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white" aria-hidden="true">
                <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" stroke="currentColor" strokeWidth="2" fill="rgba(255,255,255,0.15)" />
                <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" />
                <line x1="2" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                <line x1="2" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              </svg>
            </div>
            <div className="leading-none">
              <div className="text-xl font-bold text-white tracking-tight font-display">PRISMTECH</div>
              <div className="text-[11px] text-white/40 font-medium tracking-widest uppercase">IEEE KLH · 2026</div>
            </div>
          </Link>

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
          <div className="hidden lg:flex items-center gap-2 ml-auto mr-16">
            {!username && (
              <Link href="/auth/login" className="btn-magnetic btn-ghost text-sm py-2 px-4">
                Sign In
              </Link>
            )}
            <Link href="/auth/register" className="btn-magnetic btn-primary text-sm py-2 px-4">
              Register Your Team
            </Link>
            {username && (
              <div className="relative" ref={dropdownRef}>

                {/* Trigger button */}
                <button
                  onClick={() => setDropdownOpen((o) => !o)}
                  className={`flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-xl border transition-all duration-200 ${
                    dropdownOpen
                      ? 'border-cyan-500/40 bg-cyan-500/10 shadow-[0_0_16px_rgba(34,211,238,0.12)]'
                      : 'border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.25)]">
                    <span className="text-[11px] font-bold text-white uppercase">{username?.charAt(0)}</span>
                  </div>
                  <span className="text-[13px] font-semibold text-white/80 capitalize max-w-[80px] truncate">{username}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute right-0 mt-2.5 w-[280px] z-50 overflow-hidden"
                      style={{
                        borderRadius: '18px',
                        background: 'linear-gradient(160deg, rgba(10,16,32,0.99) 0%, rgba(6,11,22,0.99) 100%)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 0 0 1px rgba(0,136,204,0.08), 0 24px 56px rgba(0,0,0,0.75), 0 8px 24px rgba(0,0,0,0.4)',
                        backdropFilter: 'blur(28px)',
                      }}
                    >
                      {/* ── Header ── */}
                      <div style={{ position: 'relative', padding: '18px 18px 16px', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        {/* decorative glow */}
                        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,136,204,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
                        <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

                        {/* online badge */}
                        <div style={{ position: 'absolute', top: '14px', right: '14px', display: 'flex', alignItems: 'center', gap: '5px', padding: '3px 8px', borderRadius: '999px', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px rgba(52,211,153,0.9)', display: 'block' }} />
                          <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(52,211,153,0.85)' }}>Active</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                          {/* avatar */}
                          <div style={{ position: 'relative', flexShrink: 0 }}>
                            <div style={{
                              width: '48px', height: '48px', borderRadius: '14px',
                              background: 'linear-gradient(135deg, #22d3ee 0%, #2563eb 100%)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              boxShadow: '0 0 0 2px rgba(34,211,238,0.2), 0 0 20px rgba(34,211,238,0.2)',
                            }}>
                              <span style={{ fontSize: '18px', fontWeight: 800, color: '#fff', textTransform: 'uppercase' }}>{username?.charAt(0)}</span>
                            </div>
                          </div>
                          {/* info */}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontSize: '14px', fontWeight: 700, color: '#f1f5f9', textTransform: 'capitalize', letterSpacing: '-0.02em', margin: '0 0 5px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{username}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: '5px', background: 'rgba(0,136,204,0.15)', border: '1px solid rgba(0,136,204,0.3)', color: 'rgba(34,211,238,0.9)' }}>Participant</span>
                              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}>IEEE KLH · 2026</span>
                            </div>
                          </div>
                        </div>

                        {/* stat strip */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '14px' }}>
                          {[
                            { label: 'Event', value: 'PRISMTECH' },
                            { label: 'Status', value: 'Registered' },
                          ].map(({ label, value }) => (
                            <div key={label} style={{ padding: '7px 10px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                              <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', margin: '0 0 2px' }}>{label}</p>
                              <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(241,245,249,0.8)', margin: 0, letterSpacing: '-0.01em' }}>{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* ── Menu Items ── */}
                      <div style={{ padding: '8px' }}>
                        {[
                          { icon: User,     label: 'My Profile',  sub: 'View your account details',  hoverBg: 'rgba(34,211,238,0.07)',  hoverBorder: 'rgba(34,211,238,0.15)',  iconHover: '#22d3ee' },
                          { icon: Settings, label: 'Settings',    sub: 'Preferences & notifications', hoverBg: 'rgba(99,102,241,0.07)', hoverBorder: 'rgba(99,102,241,0.15)', iconHover: '#818cf8' },
                        ].map(({ icon: Icon, label, sub, hoverBg, hoverBorder, iconHover }) => (
                          <button
                            key={label}
                            className="group w-full"
                            style={{ display: 'flex', alignItems: 'center', gap: '11px', width: '100%', padding: '9px 10px', borderRadius: '11px', background: 'transparent', border: '1px solid transparent', cursor: 'pointer', transition: 'all 0.15s', textAlign: 'left' }}
                            onMouseEnter={e => { e.currentTarget.style.background = hoverBg; e.currentTarget.style.borderColor = hoverBorder; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
                          >
                            <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.15s' }}>
                              <Icon style={{ width: '14px', height: '14px', color: 'rgba(255,255,255,0.35)', transition: 'color 0.15s' }} />
                            </div>
                            <div>
                              <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(241,245,249,0.8)', margin: '0 0 1px', letterSpacing: '-0.01em' }}>{label}</p>
                              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)', margin: 0 }}>{sub}</p>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* ── Sign Out ── */}
                      <div style={{ padding: '0 8px 8px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '8px' }}>
                        <button
                          onClick={handleLogout}
                          style={{ display: 'flex', alignItems: 'center', gap: '11px', width: '100%', padding: '9px 10px', borderRadius: '11px', background: 'transparent', border: '1px solid transparent', cursor: 'pointer', transition: 'all 0.15s', textAlign: 'left' }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.07)'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.18)'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
                        >
                          <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <LogOut style={{ width: '14px', height: '14px', color: 'rgba(239,68,68,0.7)' }} />
                          </div>
                          <div>
                            <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(239,68,68,0.8)', margin: '0 0 1px', letterSpacing: '-0.01em' }}>Sign Out</p>
                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>End your current session</p>
                          </div>
                        </button>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
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

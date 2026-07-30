'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { CountdownTimer } from '@/components/features/countdown/CountdownTimer';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-[90vh] pt-24 pb-20"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg)]" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(14,165,233,0.12) 0%, transparent 65%)' }}
      />

      {/* ── MOBILE HERO — lg:hidden ── */}
      <div className="lg:hidden relative z-10 w-full flex flex-col pt-16 pb-10 gap-6" style={{ paddingLeft: '32px', paddingRight: '20px' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-cyan-400/25 bg-cyan-400/[0.07] text-cyan-300/90">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-dot shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            Official IEEE KLH Student Branch Event
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          className="flex flex-col gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <span
            className="font-display font-extrabold text-white/80 leading-[1.1] tracking-[0.14em] uppercase"
            style={{ fontSize: '0.75rem' }}
          >
            IEEE PRISMTECH
          </span>
          <span
            className="font-display font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.4rem, 11vw, 3.2rem)' }}
          >
            Hackathon 2026
          </span>
        </motion.div>

        {/* Thin accent divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.18, transformOrigin: 'left' }}
          style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, rgba(34,211,238,0.9), rgba(99,102,241,0.5))', borderRadius: '2px' }}
        />

        {/* Tagline */}
        <motion.p
          className="text-[13.5px] text-white/55 leading-[1.85]"
          style={{ maxWidth: '300px' }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          A 24-hour sprint to build bold, ethical technology for smarter campuses, safer communities, and sustainable futures.
        </motion.p>

        {/* Meta pills */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white/65 text-[12px] w-fit">
            <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            September 19–20, 2026
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white/65 text-[12px] w-fit">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            KLH Aziz Nagar Campus, Hyderabad
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34 }}
        >
          <Link href="#" className="btn-magnetic btn-primary text-[13px] font-semibold px-6 py-2.5 rounded-xl">
            Register Your Team
          </Link>
          <Link href="/tracks" className="btn-magnetic btn-ghost text-[13px] group px-4 py-2.5">
            Explore Domains
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Mobile Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          style={{ marginTop: '8px' }}
        >
          <div style={{
            borderRadius: '20px',
            background: 'linear-gradient(160deg, rgba(10,20,40,0.92) 0%, rgba(6,14,28,0.96) 100%)',
            border: '1px solid rgba(34,211,238,0.14)',
            padding: '24px 20px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 0 1px rgba(34,211,238,0.08), 0 0 40px rgba(34,211,238,0.1), 0 16px 48px rgba(0,0,0,0.5)',
          }}>
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-400/30" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-dot shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-300/90 whitespace-nowrap">Registration Closes In</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-dot shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-400/30" />
            </div>

            {/* Timer */}
            <div className="flex justify-center">
              <CountdownTimer />
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── DESKTOP LAYOUT — hidden on mobile ── */}
      <div className="hidden lg:flex relative z-10 w-full justify-center">
      <div className="w-full max-w-[1440px] flex flex-row items-center justify-between gap-24 px-36">

        {/* Left — Content */}
        <div className="flex flex-col gap-8 w-[45%] max-w-[640px]">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.22em] uppercase border border-cyan-500/20 bg-cyan-500/8 text-cyan-400/90">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-dot" />
              Official IEEE KLH Student Branch Event
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="font-display font-extrabold text-white/90 leading-[1.1] whitespace-nowrap"
              style={{ fontSize: 'clamp(0.7rem, 3vw, 1.4rem)', letterSpacing: '0.12em' }}
            >
              IEEE PRISMTECH
            </span>
            <span
              className="font-display font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-[1.05] tracking-[-0.03em] whitespace-nowrap"
              style={{ fontSize: 'clamp(1.8rem, 8vw, 5rem)' }}
            >
              Hackathon 2026
            </span>
          </motion.div>

          <motion.p
            className="text-[15px] text-white/50 leading-[1.8] max-w-[480px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            A 24-hour sprint to build bold, ethical technology for smarter campuses, safer communities, and sustainable futures.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-white/60 text-[13px]">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              September 19–20, 2026
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-white/60 text-[13px]">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              KLH Aziz Nagar Campus, Hyderabad
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="#" className="btn-magnetic btn-primary px-8 py-3 text-[13px] font-semibold">
              Register Your Team
            </Link>
            <Link href="/tracks" className="btn-magnetic btn-ghost text-[13px] group px-6 py-3">
              Explore Domains
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

        </div>

        {/* Right — Countdown */}
        <motion.div
          className="flex flex-col items-center gap-7 shrink-0 px-14 py-14 rounded-[28px] relative overflow-hidden self-center max-w-[680px]"
          style={{
            background: 'linear-gradient(160deg, rgba(10,20,40,0.92) 0%, rgba(6,14,28,0.96) 100%)',
            boxShadow: [
              '0 0 0 1px rgba(34,211,238,0.14)',
              '0 0 48px rgba(34,211,238,0.16)',
              '0 0 100px rgba(14,165,233,0.10)',
              '0 24px 64px rgba(0,0,0,0.55)',
              'inset 0 0 56px rgba(14,165,233,0.05)',
            ].join(', '),
            backdropFilter: 'blur(32px)',
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <div className="absolute inset-0 rounded-[28px] pointer-events-none" style={{ padding: '1px', background: 'linear-gradient(145deg, rgba(34,211,238,0.50) 0%, rgba(14,165,233,0.08) 40%, rgba(34,211,238,0.25) 100%)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <div className="absolute -top-10 -left-10 w-48 h-48 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)' }} />
          <div className="flex flex-col items-center gap-3 relative z-10 w-full">
            <div className="flex items-center gap-4 w-full">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-400/40" />
              <div className="flex items-center gap-2.5 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-dot shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cyan-300/90 whitespace-nowrap">Registration Closes In</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-dot shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-400/40" />
            </div>
          </div>
          <div className="relative z-10"><CountdownTimer /></div>
        </motion.div>

      </div>
      </div>
    </section>
  );
}

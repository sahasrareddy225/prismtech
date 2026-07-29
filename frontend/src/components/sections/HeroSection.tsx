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
      <div className="absolute inset-0 grid-pattern opacity-[0.10] pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(14,165,233,0.12) 0%, transparent 65%)' }}
      />

      {/* Outer row: stacks on mobile, side-by-side on lg+ */}
      <div className="relative z-10 w-full flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-24 px-20 sm:px-28 lg:px-36">

        {/* Left — Content */}
        <div className="flex flex-col gap-8 w-full lg:w-[45%] lg:max-w-[640px]">

          {/* Badge */}
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

          {/* Headline — locked to two lines, scales responsively */}
          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="font-display font-extrabold text-white/90 leading-[1.1] whitespace-nowrap"
              style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.4rem)', letterSpacing: '0.12em' }}
            >
              IEEE PRISMTECH
            </span>
            <span
              className="font-display font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-[1.05] tracking-[-0.03em] whitespace-nowrap"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)' }}
            >
              Hackathon 2026
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-[15px] text-white/50 leading-[1.8] max-w-[480px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            A 24-hour sprint to build bold, ethical technology for smarter campuses, safer communities, and sustainable futures.
          </motion.p>

          {/* Meta */}
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

          {/* CTAs */}
          <motion.div
            className="flex items-center gap-4"
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
          className="flex flex-col items-center gap-7 shrink-0 px-14 pt-14 pb-14 rounded-[28px] relative overflow-hidden lg:self-center"
          style={{
            minWidth: '680px',
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
          {/* Gradient border overlay */}
          <div
            className="absolute inset-0 rounded-[28px] pointer-events-none"
            style={{
              padding: '1px',
              background: 'linear-gradient(145deg, rgba(34,211,238,0.50) 0%, rgba(14,165,233,0.08) 40%, rgba(34,211,238,0.25) 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          {/* Animated top border glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
          {/* Bottom border glow */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          {/* Ambient inner glow top-left */}
          <div
            className="absolute -top-10 -left-10 w-48 h-48 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)' }}
          />

          {/* Title */}
          <div className="flex flex-col items-center gap-3 relative z-10 w-full">
            <div className="flex items-center gap-4 w-full">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-400/40" />
              <div className="flex items-center gap-2.5 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-dot shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cyan-300/90 whitespace-nowrap">
                  Registration Closes In
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-dot shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-400/40" />
            </div>
          </div>
          <div className="relative z-10">
            <CountdownTimer />
          </div>
        </motion.div>

      </div>
      </div>
    </section>
  );
}

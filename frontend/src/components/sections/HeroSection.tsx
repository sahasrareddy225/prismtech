'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { CountdownTimer } from '@/components/features/countdown/CountdownTimer';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center pt-28 pb-20 min-h-[82vh]"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg)]" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-[0.12] pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 98, 155, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full container flex flex-col items-center text-center">

        {/* IEEE Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-[var(--color-ieee-blue)]/40 bg-[var(--color-ieee-blue)]/10 text-[var(--color-ieee-blue-light)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ieee-blue-light)] animate-pulse-dot" />
            Official IEEE KLH Student Branch Event
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display font-bold text-[var(--color-text-primary)] mb-5 tracking-tight max-w-4xl mx-auto"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          IEEE PRISMTECH{' '}
          <span className="text-gradient-ieee">Hackathon 2026</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          A 24-hour sprint to build bold, ethical technology for smarter campuses, safer communities, and sustainable futures.
        </motion.p>

        {/* Event Meta */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 text-sm text-[var(--color-text-secondary)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[var(--color-ieee-blue-light)]" />
            <span>September 26–27, 2026</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/15" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[var(--color-ieee-blue-light)]" />
            <span>KLH Aziz Nagar Campus, Hyderabad</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/auth/register"
            className="btn-magnetic btn-primary px-7 py-2.5 text-sm"
          >
            Register Your Team
          </Link>
          <Link
            href="/tracks"
            className="btn-magnetic btn-ghost text-sm group"
          >
            Explore Domains
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Countdown */}
        <motion.div
          className="w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="border-t border-white/[0.06] pt-8">
            <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-text-muted)] mb-5 text-center">
              Registration Closes In
            </p>
            <CountdownTimer />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

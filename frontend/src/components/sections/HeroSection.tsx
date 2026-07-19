'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, ChevronDown } from 'lucide-react';
import CountdownTimer from '@/components/features/countdown/CountdownTimer';

const PrismParticleBackground = dynamic(
  () => import('@/components/animations/PrismParticleBackground'),
  { ssr: false }
);

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-surface-0)' }}
      aria-label="Hero section"
    >
      {/* Particle Background */}
      <PrismParticleBackground />

      {/* Prism Light Beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Cyan beam */}
        <div
          className="absolute top-0 left-1/4 w-px h-full opacity-20 animate-pulse-glow"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #00d4ff 30%, transparent 100%)',
            filter: 'blur(2px)',
          }}
        />
        {/* Violet beam */}
        <div
          className="absolute top-0 left-1/2 w-px h-full opacity-15 animate-pulse-glow"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #8b5cf6 40%, transparent 100%)',
            filter: 'blur(3px)',
            animationDelay: '1s',
          }}
        />
        {/* Gold beam */}
        <div
          className="absolute top-0 left-3/4 w-px h-full opacity-15 animate-pulse-glow"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #f59e0b 50%, transparent 100%)',
            filter: 'blur(2px)',
            animationDelay: '2s',
          }}
        />

        {/* Radial glow center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, rgba(0, 212, 255, 0.04) 40%, transparent 70%)',
          }}
        />

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background:
              'linear-gradient(to bottom, transparent, var(--color-surface-1))',
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center text-center pt-28 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 max-w-5xl w-full"
        >
          {/* Event Badge */}
          <motion.div variants={item}>
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border text-sm font-medium"
              style={{ borderColor: 'rgba(139, 92, 246, 0.3)', color: 'rgba(255,255,255,0.8)' }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#8b5cf6' }}
              />
              IEEE KLH Aziz Nagar · September 26–27, 2026
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={item} className="space-y-2">
            <h1 className="font-display font-900 text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none">
              <span className="text-white">PRISM</span>
              <span className="text-gradient-prism">TECH</span>
            </h1>
            <p
              className="font-display font-400 text-lg sm:text-xl md:text-2xl"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              A 24-Hour Sprint across the Tech Spectrum
            </p>
          </motion.div>

          {/* Three Tracks */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: 'The Optic Stream', subtitle: 'Photonics', color: '#00d4ff' },
              { name: 'The Neural Stream', subtitle: 'AI & Software', color: '#8b5cf6' },
              { name: 'The Social Stream', subtitle: 'WIE', color: '#f59e0b' },
            ].map((track) => (
              <div
                key={track.name}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass border"
                style={{ borderColor: `${track.color}25` }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: track.color }}
                />
                <span className="text-sm font-medium text-white/70">{track.name}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: `${track.color}15`,
                    color: track.color,
                  }}
                >
                  {track.subtitle}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Meta Info */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#8b5cf6]" />
              <span>September 26–27, 2026</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00d4ff]" />
              <span>KLH Hyderabad, Aziz Nagar</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-[#f59e0b]">⚡</span>
              <span>105+ Teams Expected</span>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div variants={item} className="py-4">
            <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-5 text-center">
              Hackathon Begins In
            </p>
            <CountdownTimer />
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/auth/register"
              id="hero-register-cta"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-medium text-white text-base overflow-hidden transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]"
              style={{ background: 'var(--color-surface-2)' }}
            >
              <span className="relative z-10">Register Your Team</span>
              <ArrowRight className="relative z-10 w-4.5 h-4.5 group-hover:translate-x-1 transition-transform text-[#00d4ff]" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(100px circle at center, rgba(0,212,255,0.15), transparent)',
                }}
              />
            </Link>

            <Link
              href="/tracks"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-medium text-white/70 text-base hover:bg-white/5 hover:text-white transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]"
            >
              Explore Tracks
              <ArrowRight className="w-4.5 h-4.5 opacity-60" />
            </Link>
          </motion.div>

          {/* Society Logos / Attribution */}
          <motion.div variants={item} className="mt-4">
            <p className="text-xs text-white/25 text-center mb-3">
              Organized by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { name: 'IEEE KLH SB', color: '#006fba' },
                { name: 'Photonics Society', color: '#00d4ff' },
                { name: 'Computer Society', color: '#8b5cf6' },
                { name: 'WIE', color: '#f59e0b' },
              ].map((org) => (
                <span
                  key={org.name}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg"
                  style={{
                    color: org.color,
                    background: `${org.color}10`,
                    border: `1px solid ${org.color}20`,
                  }}
                >
                  {org.name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs text-white/25 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-white/25" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Calendar, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import CountdownTimer from '@/components/features/countdown/CountdownTimer';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-surface-0)]"
    >
      {/* 1. Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      {/* 2. Aurora & Spotlight Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Spotlight following mouse */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 98, 155, 0.15) 0%, transparent 70%)',
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
          }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
        />
        
        {/* Animated Aurora Orbs */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, var(--color-ieee-blue-light) 0%, transparent 60%)' }}
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(circle, var(--color-prism-cyan) 0%, transparent 60%)' }}
        />
      </div>

      {/* 3. Main Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="container relative z-10 flex flex-col items-center text-center mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <Badge variant="outline" className="px-4 py-1.5 backdrop-blur-md bg-white/5 border-white/10 text-white/80">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-prism-cyan)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-prism-cyan)]"></span>
              </span>
              Registration opens August 1st, 2026
            </span>
          </Badge>
        </motion.div>

        {/* Massive Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 drop-shadow-sm pb-2 px-1"
        >
          Build the future at <br /> IEEE PRISM<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-prism-cyan)] via-[var(--color-ieee-blue-light)] to-[var(--color-prism-violet)] pb-2">TECH</span> Hackathon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl lg:text-2xl text-[var(--color-text-secondary)] max-w-3xl mb-12 font-medium"
        >
          Build bold, ethical technology for smarter campuses, safer communities, and sustainable futures.
        </motion.p>

        {/* Event Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-16 text-sm sm:text-base text-white/80"
        >
          <div className="flex items-center gap-2.5 bg-white/5 px-4 py-2 rounded-2xl backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
            <Calendar className="w-5 h-5 text-[var(--color-ieee-blue-light)]" />
            <span>September 26–27, 2026</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white/5 px-4 py-2 rounded-2xl backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
            <MapPin className="w-5 h-5 text-[var(--color-prism-cyan)]" />
            <span>KLH Hyderabad, Aziz Nagar</span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 w-full max-w-4xl"
        >
          <CountdownTimer />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button variant="magnetic" size="lg" asChild className="w-full sm:w-auto">
            <Link href="/auth/register">
              <Zap className="w-4 h-4 mr-1 text-[var(--color-ieee-blue)]" fill="currentColor" />
              Register Your Team
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
            <Link href="/tracks">
              Explore Tracks
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30 font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-12 rounded-full border border-white/10 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5"
        >
          <motion.div 
            animate={{ height: ['20%', '60%', '20%'], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

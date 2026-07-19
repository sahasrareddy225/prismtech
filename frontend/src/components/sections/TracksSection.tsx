'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Code, HeartHandshake, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const tracks = [
  {
    slug: 'optic',
    name: 'Optic Stream',
    subtitle: 'IEEE Photonics',
    icon: Lightbulb,
    color: 'var(--color-prism-cyan)',
    glow: 'rgba(0, 212, 255, 0.4)',
    description: 'Hardware, Embedded Systems, and Light-based solutions.',
    tags: ['IoT', 'Arduino', 'Optics'],
  },
  {
    slug: 'neural',
    name: 'Neural Stream',
    subtitle: 'IEEE Computer Society',
    icon: Code,
    color: 'var(--color-prism-violet)',
    glow: 'rgba(124, 58, 237, 0.4)',
    description: 'Artificial Intelligence, Full-Stack Apps, and Algorithms.',
    tags: ['AI/ML', 'Web3', 'Software'],
  },
  {
    slug: 'social',
    name: 'Social Stream',
    subtitle: 'IEEE WIE',
    icon: HeartHandshake,
    color: 'var(--color-prism-gold)',
    glow: 'rgba(245, 158, 11, 0.4)',
    description: 'Tech for Social Good, Accessibility, and Equity.',
    tags: ['Accessibility', 'Impact', 'Health'],
  },
];

export default function TracksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const transforms = [y1, y2, y3];

  return (
    <section id="tracks" className="section relative bg-[var(--color-surface-0)] overflow-hidden" ref={containerRef}>
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-ieee-blue)]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <Badge variant="outline" className="mb-6">The Spectrum</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            Choose Your Track
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            Three distinct engineering challenges. Three IEEE societies. Pick your domain and build the future.
          </p>
        </div>

        {/* Parallax Bento Grid for Desktop, Stack for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tracks.map((track, i) => (
            <motion.div
              key={track.slug}
              style={{ y: typeof window !== 'undefined' && window.innerWidth >= 768 ? transforms[i] : 0 }}
              className="group"
            >
              <Link href={`/tracks`} className="block h-full">
                <div className="relative h-full rounded-3xl bg-[var(--color-surface-2)] shadow-[inset_0_0_0_1px_var(--color-surface-4)] p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col">
                  
                  {/* Dynamic Glow Background */}
                  <div 
                    className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-20 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
                    style={{ background: track.color }}
                  />

                  {/* Header */}
                  <div className="flex justify-between items-start mb-12">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 shadow-inner backdrop-blur-md"
                    >
                      <track.icon className="w-7 h-7" style={{ color: track.color }} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 duration-300" />
                  </div>

                  {/* Content */}
                  <div className="mt-auto">
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: track.color }}>
                      {track.subtitle}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {track.name}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                      {track.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {track.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-black/40 text-white/70 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SponsorsSection() {
  // We'll create two rows of placeholders for the infinite marquee
  const sponsorPlaceholders = Array.from({ length: 8 }).map((_, i) => `Sponsor 0${i + 1}`);

  return (
    <section id="sponsors" className="section bg-[var(--color-surface-1)] overflow-hidden relative">
      <div className="container relative z-10 mb-16">
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-6">Our Partners</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            Powered By <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-prism-cyan)] to-[var(--color-prism-violet)]">Leaders</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mb-10">
            PRISMTECH is made possible by organizations that believe in the next generation of engineers and innovators.
          </p>
          <Button variant="magnetic" asChild>
            <Link href="mailto:ieeeaziznagarklh@gmail.com?subject=PRISMTECH 2026 Sponsorship Inquiry">
              <ExternalLink className="w-4 h-4 mr-2 text-[var(--color-ieee-blue)]" />
              Become a Sponsor
            </Link>
          </Button>
        </div>
      </div>

      {/* Infinite Marquees */}
      <div className="relative w-full flex flex-col gap-6 pt-10 pb-20">
        
        {/* Fading edges for marquee */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-surface-1)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-surface-1)] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Moves Left */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 min-w-max pr-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...sponsorPlaceholders, ...sponsorPlaceholders].map((name, i) => (
              <div
                key={`row1-${i}`}
                className="w-48 h-24 rounded-2xl bg-[var(--color-surface-2)] shadow-[inset_0_0_0_1px_var(--color-surface-4)] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]"
              >
                <span className="font-display font-bold text-xl text-white/20">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 min-w-max pr-6"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {[...sponsorPlaceholders, ...sponsorPlaceholders].map((name, i) => (
              <div
                key={`row2-${i}`}
                className="w-48 h-24 rounded-2xl bg-[var(--color-surface-2)] shadow-[inset_0_0_0_1px_var(--color-surface-4)] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]"
              >
                <span className="font-display font-bold text-xl text-white/20">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Eye, Heart } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations/FadeIn';

const tracks = [
  {
    slug: 'optic-stream',
    name: 'The Optic Stream',
    subtitle: 'IEEE Photonics Society',
    icon: Eye,
    color: '#00d4ff',
    tagColor: 'rgba(0, 212, 255, 0.10)',
    borderColor: 'rgba(0, 212, 255, 0.08)',
    description:
      'Push the boundaries of photonics and hardware. Build with light — LEDs, LDRs, Arduinos, and beyond. Create systems where photons carry the solution.',
    tags: ['Photonics', 'Hardware', 'Embedded Systems', 'LEDs & LDRs'],
    facilities: ['Hardware Lab', 'Arduino Kits', 'Sensor Components'],
  },
  {
    slug: 'neural-stream',
    name: 'The Neural Stream',
    subtitle: 'IEEE Computer Society',
    icon: Cpu,
    color: '#8b5cf6',
    tagColor: 'rgba(139, 92, 246, 0.10)',
    borderColor: 'rgba(139, 92, 246, 0.08)',
    description:
      'Where software meets intelligence. Build AI/ML models, full-stack applications, and systems that think, learn, and solve real problems at scale.',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Web Dev', 'Data Science'],
    facilities: ['Cloud Credits', 'GPU Access', 'API Datasets'],
  },
  {
    slug: 'social-stream',
    name: 'The Social Stream',
    subtitle: 'IEEE WIE Affinity Group',
    icon: Heart,
    color: '#f59e0b',
    tagColor: 'rgba(245, 158, 11, 0.10)',
    borderColor: 'rgba(245, 158, 11, 0.08)',
    description:
      'Engineer for equity. Build technology that creates real social impact — for communities, for accessibility, for a better and more inclusive world.',
    tags: ['Social Impact', 'Accessibility', 'Equity', 'Community Tech'],
    facilities: ['Impact Mentors', 'NGO Datasets', 'UX Tools'],
  },
];

export default function TracksSection() {
  return (
    <section
      className="section"
      style={{ background: 'var(--color-surface-1)' }}
      aria-labelledby="tracks-heading"
    >
      <div className="container">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 bg-white/5 mb-5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
            Three Streams
          </div>
          <h2
            id="tracks-heading"
            className="font-display font-800 text-4xl sm:text-5xl text-white mb-4"
          >
            Choose Your{' '}
            <span className="text-gradient-prism">Spectrum</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            PRISMTECH runs across three distinct tracks — each representing a unique convergence
            of light, logic, and equity.
          </p>
        </FadeIn>

        {/* Track Cards */}
        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <StaggerItem key={track.slug}>
                <Link
                  href={`/tracks/${track.slug}`}
                  className="group relative flex flex-col h-full p-7 rounded-2xl card-hover bg-[#111111]"
                  style={{ boxShadow: `inset 0 0 0 1px ${track.borderColor}, 0 4px 24px rgba(0,0,0,0.4)` }}
                  aria-label={`Learn more about ${track.name}`}
                >
                  {/* Glow background */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${track.color}08 0%, transparent 60%)`,
                    }}
                  />

                  {/* Top: Icon + Society */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: track.tagColor, border: `1px solid ${track.borderColor}` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: track.color }} />
                    </div>
                    <span
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        color: track.color,
                        background: track.tagColor,
                        border: `1px solid ${track.borderColor}`,
                      }}
                    >
                      {track.subtitle}
                    </span>
                  </div>

                  {/* Track Name */}
                  <div className="relative z-10 mb-4">
                    <h3
                      className="font-display font-700 text-xl text-white mb-2 group-hover:text-gradient-prism transition-all"
                      style={{ color: track.color }}
                    >
                      {track.name}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">{track.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="relative z-10 flex flex-wrap gap-2 mb-6">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg text-white/50"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Facilities */}
                  <div className="relative z-10 mt-auto pt-5 border-t border-white/5">
                    <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">
                      Provided
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {track.facilities.map((f) => (
                        <span
                          key={f}
                          className="text-xs px-2.5 py-1 rounded-lg font-medium"
                          style={{ color: track.color, background: track.tagColor }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow CTA */}
                  <div
                    className="relative z-10 flex items-center gap-2 mt-5 text-sm font-medium"
                    style={{ color: track.color }}
                  >
                    <span>Explore track</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {/* CTA */}
        <FadeIn className="text-center mt-12">
          <Link
            href="/tracks"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/70 glass border border-white/10 hover:text-white hover:bg-white/5 transition-all"
          >
            Compare All Tracks
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

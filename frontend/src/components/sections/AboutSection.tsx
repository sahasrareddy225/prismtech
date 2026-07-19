'use client';

import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations/FadeIn';
import { Users, Globe, BookOpen } from 'lucide-react';

const societies = [
  {
    name: 'IEEE Photonics Society',
    focus: 'Hardware & Light',
    icon: '🔆',
    color: '#00d4ff',
    description: 'Advancing the understanding and applications of photonics and optoelectronics.',
  },
  {
    name: 'IEEE Computer Society',
    focus: 'Software & AI',
    icon: '💻',
    color: '#8b5cf6',
    description: 'Inspiring the global community through technology and innovation in computing.',
  },
  {
    name: 'IEEE WIE',
    focus: 'Social Impact',
    icon: '⚡',
    color: '#f59e0b',
    description: 'Facilitating the global recruitment and retention of women in technical disciplines.',
  },
];

const highlights = [
  { icon: Users, text: '105+ Registered Teams', color: '#00d4ff' },
  { icon: Globe, text: 'Multi-College Participation', color: '#8b5cf6' },
  { icon: BookOpen, text: '3 IEEE Societies Collaborating', color: '#f59e0b' },
];

export default function AboutSection() {
  return (
    <section
      className="section"
      style={{ background: 'var(--color-surface-1)' }}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <FadeIn direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
              About PRISMTECH
            </div>
            <h2
              id="about-heading"
              className="font-display font-800 text-4xl sm:text-5xl text-white mb-6 leading-tight"
            >
              Where Light, Logic &{' '}
              <span className="text-gradient-prism">Equity Converge</span>
            </h2>
            <div className="space-y-4 text-white/55 text-[15px] leading-relaxed mb-8">
              <p>
                PRISMTECH is a <strong className="text-white/80 font-medium">multidisciplinary 24-hour hackathon</strong> organized by 
                the KLH Aziz Nagar IEEE Student Branch in collaboration with three powerful IEEE 
                societies — bringing together the best minds in hardware, software, and social impact.
              </p>
              <p>
                Open to all engineering students across colleges, PRISMTECH challenges participants 
                to build solutions that matter — whether that&apos;s bending light, training intelligence, 
                or engineering a fairer world.
              </p>
              <p>
                From the <strong className="text-white/80 font-medium">Blueprint Phase</strong> to the{' '}
                <strong className="text-white/80 font-medium">Final Grand Pitch</strong> — 24 hours,
                4 rounds, one champion.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.text} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${h.color}15` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: h.color }} />
                    </div>
                    <span className="text-sm font-medium text-white/70">{h.text}</span>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* Society Cards */}
          <div>
            <StaggerChildren className="space-y-4">
              {societies.map((society) => (
                <StaggerItem key={society.name}>
                  <div
                    className="flex items-start gap-5 p-5 rounded-2xl glass border border-white/5 group hover:border-white/10 transition-all card-hover"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background: `${society.color}15`,
                        border: `1px solid ${society.color}25`,
                      }}
                    >
                      {society.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-600 text-white text-sm">{society.name}</h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ color: society.color, background: `${society.color}15` }}
                        >
                          {society.focus}
                        </span>
                      </div>
                      <p className="text-xs text-white/45 leading-relaxed">{society.description}</p>
                    </div>
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: society.color }}
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* IEEE Badge */}
            <FadeIn delay={0.4} className="mt-6">
              <div
                className="flex items-center gap-4 p-4 rounded-2xl border"
                style={{
                  background: 'rgba(0, 111, 186, 0.08)',
                  borderColor: 'rgba(0, 111, 186, 0.2)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: 'rgba(0, 111, 186, 0.15)' }}
                >
                  🏛️
                </div>
                <div>
                  <p className="text-xs font-medium text-[#006fba] mb-0.5">Organized by</p>
                  <p className="text-sm font-medium text-white/80">
                    IEEE KLH Student Branch, Aziz Nagar, Hyderabad
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

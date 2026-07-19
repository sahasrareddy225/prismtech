'use client';

import Link from 'next/link';
import { Trophy, Star, Award, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations/FadeIn';

const prizes = [
  {
    title: 'PrismTech Overall Champion',
    subtitle: 'Best across all three streams',
    icon: Trophy,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 100%)',
    border: 'rgba(245,158,11,0.3)',
    rewards: [
      'IEEE PrismTech Champion Title',
      'Certificates of Excellence',
      'Featured on IEEE KLH Website',
      'LinkedIn Recognition + Badges',
      'Networking with IEEE Leaders',
    ],
    featured: true,
  },
  {
    title: 'Optic Stream Winner',
    subtitle: 'IEEE Photonics Society Award',
    icon: Star,
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, transparent 100%)',
    border: 'rgba(0,212,255,0.2)',
    rewards: [
      'Track Winner Certificate',
      'IEEE Photonics Recognition',
      'LinkedIn Endorsement',
      'Special Mention in Report',
    ],
    featured: false,
  },
  {
    title: 'Neural Stream Winner',
    subtitle: 'IEEE Computer Society Award',
    icon: Star,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, transparent 100%)',
    border: 'rgba(139,92,246,0.2)',
    rewards: [
      'Track Winner Certificate',
      'IEEE CS Recognition',
      'LinkedIn Endorsement',
      'Special Mention in Report',
    ],
    featured: false,
  },
  {
    title: 'Social Stream Winner',
    subtitle: 'IEEE WIE Affinity Award',
    icon: Star,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, transparent 100%)',
    border: 'rgba(245,158,11,0.2)',
    rewards: [
      'Track Winner Certificate',
      'IEEE WIE Recognition',
      'LinkedIn Endorsement',
      'Special Mention in Report',
    ],
    featured: false,
  },
  {
    title: 'Special Awards',
    subtitle: 'Best Pitch · Best Hardware · Most Innovative',
    icon: Award,
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, transparent 100%)',
    border: 'rgba(99,102,241,0.2)',
    rewards: [
      'Special Category Certificates',
      'Judge's Choice Recognition',
      'Highlighted in Event Report',
    ],
    featured: false,
  },
];

export default function PrizesSection() {
  const champion = prizes[0];
  const trackWinners = prizes.slice(1);

  return (
    <section
      className="section"
      style={{ background: 'var(--color-surface-1)' }}
      aria-labelledby="prizes-heading"
    >
      <div className="container">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            Recognition & Rewards
          </div>
          <h2
            id="prizes-heading"
            className="font-display font-800 text-4xl sm:text-5xl text-white mb-4"
          >
            Win the{' '}
            <span className="text-gradient-violet-gold">Spectrum</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            PRISMTECH celebrates innovation and impact. Winners receive recognition
            that lasts beyond the hackathon — certificates, IEEE endorsements, and opportunities
            that open doors.
          </p>
          <div
            className="inline-block mt-4 px-4 py-2 rounded-xl text-sm text-white/60 border"
            style={{ background: 'rgba(245, 158, 11, 0.05)', borderColor: 'rgba(245, 158, 11, 0.15)' }}
          >
            🎯 Recognition-based awards — the real prize is building something that matters.
          </div>
        </FadeIn>

        {/* Champion Prize — Featured */}
        <FadeIn className="mb-8" delay={0.1}>
          <div
            className="relative p-8 sm:p-10 rounded-2xl border overflow-hidden"
            style={{ background: champion.gradient, borderColor: champion.border }}
          >
            {/* Background glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(ellipse, ${champion.color}15 0%, transparent 70%)`,
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${champion.color}20`, border: `1px solid ${champion.border}` }}
                  >
                    <Trophy className="w-6 h-6" style={{ color: champion.color }} />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ color: champion.color, background: `${champion.color}15` }}
                  >
                    Top Prize
                  </span>
                </div>
                <h3
                  className="font-display font-800 text-2xl sm:text-3xl mb-2"
                  style={{ color: champion.color }}
                >
                  {champion.title}
                </h3>
                <p className="text-white/50 text-sm mb-6">{champion.subtitle}</p>
              </div>

              <div className="lg:w-80">
                <ul className="space-y-3">
                  {champion.rewards.map((reward) => (
                    <li key={reward} className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: champion.color }}
                      />
                      <span className="text-sm text-white/70">{reward}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Track Winner Cards */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trackWinners.map((prize) => {
            const Icon = prize.icon;
            return (
              <StaggerItem key={prize.title}>
                <div
                  className="p-6 rounded-2xl border h-full"
                  style={{ background: prize.gradient, borderColor: prize.border }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${prize.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: prize.color }} />
                    </div>
                  </div>
                  <h3 className="font-display font-700 text-lg text-white mb-1">
                    {prize.title}
                  </h3>
                  <p className="text-xs text-white/40 mb-5">{prize.subtitle}</p>
                  <ul className="space-y-2.5">
                    {prize.rewards.map((reward) => (
                      <li key={reward} className="flex items-start gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: prize.color }}
                        />
                        <span className="text-xs text-white/60">{reward}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {/* CTA */}
        <FadeIn className="text-center mt-10">
          <Link
            href="/prizes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/70 glass border border-white/10 hover:text-white hover:bg-white/5 transition-all"
          >
            View All Prizes & Recognition
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

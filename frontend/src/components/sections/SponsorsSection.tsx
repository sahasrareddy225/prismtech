'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const sponsorTiers = [
  {
    tier: 'Title Sponsor',
    color: '#f59e0b',
    sponsors: [],
    placeholder: true,
  },
  {
    tier: 'Platinum',
    color: '#e2e8f0',
    sponsors: [],
    placeholder: true,
  },
  {
    tier: 'Gold',
    color: '#f59e0b',
    sponsors: [],
    placeholder: true,
  },
  {
    tier: 'Silver',
    color: '#94a3b8',
    sponsors: [],
    placeholder: true,
  },
];

export default function SponsorsSection() {
  return (
    <section
      className="section"
      style={{ background: 'var(--color-surface-0)' }}
      aria-labelledby="sponsors-heading"
    >
      <div className="container">
        <FadeIn className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            Our Sponsors
          </div>
          <h2
            id="sponsors-heading"
            className="font-display font-800 text-4xl sm:text-5xl text-white mb-4"
          >
            Powered By{' '}
            <span className="text-gradient-violet-gold">Innovation Leaders</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            PRISMTECH is made possible by organizations that believe in the next generation
            of engineers.
          </p>
        </FadeIn>

        {/* Coming Soon Banner */}
        <FadeIn delay={0.1} className="mb-12">
          <div
            className="text-center py-12 rounded-2xl border border-dashed"
            style={{ borderColor: 'rgba(245, 158, 11, 0.2)', background: 'rgba(245, 158, 11, 0.03)' }}
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-display font-700 text-xl text-white/80 mb-2">
              Sponsorship Opportunities Open
            </h3>
            <p className="text-sm text-white/45 max-w-md mx-auto mb-6">
              Join us as a sponsor and connect with 400+ engineering students from across colleges.
              Multiple sponsorship tiers available.
            </p>
            <a
              href="mailto:ieeeaziznagarklh@gmail.com?subject=PRISMTECH 2026 Sponsorship Inquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white"
              style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}
            >
              <ExternalLink className="w-4 h-4" />
              Become a Sponsor
            </a>
          </div>
        </FadeIn>

        {/* Sponsor Tier Placeholders */}
        <div className="space-y-8">
          {sponsorTiers.slice(0, 2).map((tier) => (
            <FadeIn key={tier.tier}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="h-px flex-1"
                    style={{ background: `linear-gradient(90deg, ${tier.color}30, transparent)` }}
                  />
                  <span
                    className="text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ color: tier.color, background: `${tier.color}10` }}
                  >
                    {tier.tier}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ background: `linear-gradient(90deg, transparent, ${tier.color}30)` }}
                  />
                </div>
                <div
                  className="flex items-center justify-center h-20 rounded-xl border border-dashed text-white/20 text-sm"
                  style={{ borderColor: `${tier.color}15` }}
                >
                  To be announced
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn className="text-center mt-12">
          <Link
            href="/sponsors"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/70 glass border border-white/10 hover:text-white hover:bg-white/5 transition-all"
          >
            View All Sponsors & Tiers
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

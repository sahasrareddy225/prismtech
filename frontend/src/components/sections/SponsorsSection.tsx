'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const TIERS = [
  { label: 'Title Sponsor', placeholders: 1, large: true },
  { label: 'Cloud Partner', placeholders: 2 },
  { label: 'AI Partner', placeholders: 2 },
  { label: 'Community Partner', placeholders: 3 },
];

export default function SponsorsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section id="sponsors" className="section bg-[var(--color-surface-1)]" ref={ref} aria-labelledby="sponsors-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Sponsors & Partners"
          title={<>Industry & community <span className="text-gradient-ieee">partnership.</span></>}
          description="We are proud to partner with organizations driving innovation in India's technology ecosystem. Sponsor announcements coming soon."
          align="center"
        />

        <div className="space-y-8 mb-10">
          {TIERS.map((tier, ti) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + ti * 0.08 }}
            >
              <div className="text-[10px] font-bold tracking-widest uppercase mb-3 text-[var(--color-text-muted)]">
                {tier.label}
              </div>
              <div className="flex flex-wrap gap-3">
                {Array.from({ length: tier.placeholders }).map((_, i) => (
                  <div
                    key={i}
                    className="glass-card flex items-center justify-center"
                    style={{
                      flex: tier.large ? '1 1 100%' : '1 1 180px',
                      maxWidth: tier.large ? '100%' : '260px',
                      height: tier.large ? '100px' : '76px',
                    }}
                  >
                    <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-2">
                      <Building2 style={{ width: '14px', height: '14px' }} />
                      Sponsor TBA
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.45 }}
        >
          <div>
            <div className="font-semibold text-sm text-[var(--color-text-primary)] mb-1">Become a Sponsor</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Reach the next generation of innovators at this flagship IEEE event.</div>
          </div>
          <a href="/contact" className="btn-magnetic btn-primary text-sm shrink-0">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

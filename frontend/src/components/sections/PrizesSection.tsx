'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, Award, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';

const prizes = [
  {
    title: 'PrismTech Champion',
    subtitle: 'Best Overall Solution',
    icon: Trophy,
    color: 'var(--color-prism-gold)',
    rewards: [
      'IEEE PrismTech Champion Title',
      'Certificates of Excellence',
      'Featured on IEEE KLH Website',
      'LinkedIn Recognition + Badges',
    ],
  },
  {
    title: 'Optic Stream Winner',
    subtitle: 'IEEE Photonics Society',
    icon: Star,
    color: 'var(--color-prism-cyan)',
    rewards: [
      'Track Winner Certificate',
      'IEEE Photonics Recognition',
      'Special Mention in Report',
    ],
  },
  {
    title: 'Neural Stream Winner',
    subtitle: 'IEEE Computer Society',
    icon: Star,
    color: 'var(--color-prism-violet)',
    rewards: [
      'Track Winner Certificate',
      'IEEE CS Recognition',
      'Special Mention in Report',
    ],
  },
  {
    title: 'Social Stream Winner',
    subtitle: 'IEEE WIE Affinity',
    icon: Star,
    color: 'var(--color-prism-gold)',
    rewards: [
      'Track Winner Certificate',
      'IEEE WIE Recognition',
      'Special Mention in Report',
    ],
  },
];

export default function PrizesSection() {
  const champion = prizes[0];
  const tracks = prizes.slice(1);

  return (
    <section id="prizes" className="section bg-[var(--color-surface-0)] overflow-hidden">
      <div className="container max-w-6xl">
        
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <Badge variant="outline" className="mb-6">Rewards & Recognition</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            What&apos;s at Stake
          </h2>
        </div>

        <div className="space-y-8 lg:space-y-12">
          
          {/* Split Layout 1: The Champion (Image/Hero left, text right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square lg:aspect-auto lg:h-[400px] w-full rounded-3xl overflow-hidden bg-[var(--color-surface-1)] border border-white/5 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-prism-gold)]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <Trophy className="w-32 h-32 text-[var(--color-prism-gold)] drop-shadow-[0_0_40px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pl-8"
            >
              <Badge variant="gold" className="mb-4">{champion.subtitle}</Badge>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                {champion.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg mb-8">
                The ultimate accolade. Awarded to the team that demonstrates exceptional convergence of hardware, software, and social impact.
              </p>
              <ul className="space-y-4">
                {champion.rewards.map(reward => (
                  <li key={reward} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-prism-gold)] shrink-0" />
                    <span>{reward}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Grid Layout: Track Winners */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {tracks.map(track => (
              <Card key={track.title} variant="glass" className="hover:scale-[1.02] transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/5 border border-white/10">
                    <track.icon className="w-6 h-6" style={{ color: track.color }} />
                  </div>
                  <h4 className="font-display font-semibold text-xl text-white mb-2">{track.title}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: track.color }}>
                    {track.subtitle}
                  </p>
                  <ul className="space-y-3">
                    {track.rewards.map(reward => (
                      <li key={reward} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: track.color }} />
                        <span>{reward}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

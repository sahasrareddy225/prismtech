'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Linkedin } from '@/components/icons/BrandIcons';

const team = [
  {
    name: 'Dr. Sai Sudha Gadde',
    title: 'Branch Counselor',
    society: 'IEEE Student Branch',
    color: 'var(--color-ieee-blue-light)',
    bg: 'var(--color-surface-2)',
  },
  {
    name: 'Optic Lead',
    title: 'Track Head',
    society: 'IEEE Photonics',
    color: 'var(--color-prism-cyan)',
    bg: 'var(--color-surface-2)',
  },
  {
    name: 'Neural Lead',
    title: 'Track Head',
    society: 'IEEE CS',
    color: 'var(--color-prism-violet)',
    bg: 'var(--color-surface-2)',
  },
  {
    name: 'Social Lead',
    title: 'Track Head',
    society: 'IEEE WIE',
    color: 'var(--color-prism-gold)',
    bg: 'var(--color-surface-2)',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section bg-[var(--color-surface-0)] relative overflow-hidden">
      <div className="container">
        
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <Badge variant="outline" className="mb-6">The Brains Behind the Operation</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            Meet the Organizers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card variant="glass" className="h-full group hover:border-white/10 transition-colors">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div 
                    className="w-24 h-24 rounded-full mb-6 flex items-center justify-center text-3xl font-display font-bold text-white relative"
                  >
                    <div className="absolute inset-0 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-500" style={{ borderColor: member.color }} />
                    <div className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ background: member.color }} />
                    <span className="relative z-10">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">{member.title}</p>
                  
                  <div className="mt-auto flex flex-col items-center gap-4">
                    <span 
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded bg-black/40 border border-white/5"
                      style={{ color: member.color }}
                    >
                      {member.society}
                    </span>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

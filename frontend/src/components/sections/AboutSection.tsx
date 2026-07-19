'use client';

import { motion } from 'framer-motion';
import { Users, Globe, BookOpen, Lightbulb, Code, HeartHandshake } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

const societies = [
  {
    name: 'IEEE Photonics Society',
    focus: 'Hardware & Light',
    icon: Lightbulb,
    color: '#00d4ff',
    bg: 'var(--color-prism-cyan)',
    description: 'Advancing the understanding and applications of photonics and optoelectronics. Build with LEDs, LDRs, Arduinos, and optical systems.',
  },
  {
    name: 'IEEE Computer Society',
    focus: 'Software & AI',
    icon: Code,
    color: '#7c3aed',
    bg: 'var(--color-prism-violet)',
    description: 'Inspiring the global community through technology and innovation in computing. Focus on machine learning, full-stack, and intelligent systems.',
  },
  {
    name: 'IEEE WIE',
    focus: 'Social Impact',
    icon: HeartHandshake,
    color: '#f59e0b',
    bg: 'var(--color-prism-gold)',
    description: 'Facilitating the global recruitment and retention of women in technical disciplines. Engineer technology for equity and accessibility.',
  },
];

const highlights = [
  { icon: Users, text: '105+ Teams Expected', value: '105+' },
  { icon: Globe, text: 'Cross-College Event', value: 'Global' },
  { icon: BookOpen, text: '3 IEEE Societies', value: '3 Tracks' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section relative bg-[var(--color-surface-1)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Sticky Text (Storytelling) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <Badge variant="ghost" className="border border-white/10 px-3 py-1">
              About PRISMTECH
            </Badge>
            
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-[1.1]">
              What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-prism-cyan)] to-[var(--color-prism-violet)] pb-2">PRISMTECH?</span>
            </h2>
            
            <div className="space-y-6 text-lg text-[var(--color-text-secondary)]">
              <p>
                PRISMTECH is a 24-hour IEEE hackathon for practical innovation. Teams prototype solutions across AI, cybersecurity, sustainability, healthcare, smart infrastructure, and human-centered education with guidance from mentors, faculty, and industry experts.
              </p>
              <p>
                The objective is to transform student ideas into credible prototypes with social, technical, and entrepreneurial value.
              </p>
            </div>

            {/* Stats / Highlights inline */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
              {highlights.map((h, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="font-display text-3xl font-bold text-white">{h.value}</span>
                  <span className="text-sm font-medium text-[var(--color-text-muted)] flex items-center gap-2">
                    <h.icon className="w-4 h-4" /> {h.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Scrolling Visuals / Cards */}
          <div className="lg:col-span-7 space-y-6 pt-12 lg:pt-0">
            {societies.map((society, index) => (
              <motion.div
                key={society.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card variant="solid" className="group relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" 
                    style={{ background: `radial-gradient(circle at 50% 0%, ${society.color}, transparent 70%)` }}
                  />
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
                      style={{ background: `${society.color}15` }}
                    >
                      <society.icon className="w-6 h-6" style={{ color: society.color }} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{society.name}</CardTitle>
                      <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider bg-black/40">
                        {society.focus}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {society.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

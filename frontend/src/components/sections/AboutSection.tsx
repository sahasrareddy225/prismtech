'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Award, BookOpen, Users, Lightbulb } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const BENEFITS = [
  { icon: Award, label: 'Premium Prizes', desc: 'Winner, runner-up, and special category awards.' },
  { icon: BookOpen, label: 'Certificates', desc: 'Official IEEE participation certificates for all eligible teams.' },
  { icon: Users, label: 'Expert Mentors', desc: 'Technical and pitching support throughout the event.' },
  { icon: Lightbulb, label: 'Networking', desc: 'Connect with peers, judges, sponsors, and organizers.' },
];

const CHECK_ITEMS = [
  'Open to undergraduate and postgraduate students from recognized institutions.',
  'Teams of 2–4 members; one participant acts as team leader.',
  'Hybrid-ready 24-hour build sprint with mentoring, evaluation, final pitch, and demo.',
  'Benefits include portfolio projects, IEEE exposure, leadership opportunities, and industry interaction.',
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section id="about" className="section bg-[var(--color-surface-0)]" ref={ref} aria-labelledby="about-heading">
      <div className="container">

        <SectionHeader
          eyebrow="What is PRISMTECH?"
          title={<>A 24-hour IEEE hackathon for <span className="text-gradient-prism">practical innovation.</span></>}
          description="Teams prototype solutions across AI, cybersecurity, sustainability, healthcare, smart infrastructure, and human-centered education — with guidance from mentors, faculty, and industry experts."
          align="center"
        />

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {BENEFITS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 bg-[var(--color-surface-3)] border border-white/08">
                <item.icon className="w-4.5 h-4.5 text-[var(--color-ieee-blue-light)]" style={{ width: '18px', height: '18px' }} />
              </div>
              <h3 className="font-bold text-[var(--color-text-primary)] text-sm mb-1.5">{item.label}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Objective section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              eyebrow="About the Hackathon"
              title={<>Objective, format, eligibility, <span className="text-gradient-ieee">and participant benefits.</span></>}
              description="The objective is to transform student ideas into credible prototypes with social, technical, and entrepreneurial value. Participants may choose from domains including AI/ML, cybersecurity, IoT, fintech, sustainability, healthcare, accessibility, education technology, and smart cities."
              align="left"
            />
            <ul className="space-y-3">
              {CHECK_ITEMS.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-ieee-blue-light)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative h-full min-h-[340px] w-full glass-card overflow-hidden"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-ieee-blue)]/10 to-[var(--color-prism-violet)]/10" />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop')" }}
            />
            {/* Center caption */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="text-4xl font-display font-bold text-white mb-2">24h</div>
              <div className="text-sm text-white/60">Build Sprint</div>
              <div className="mt-4 text-xs font-bold tracking-widest uppercase text-[var(--color-ieee-blue-light)]">
                IEEE PRISMTECH 2026
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

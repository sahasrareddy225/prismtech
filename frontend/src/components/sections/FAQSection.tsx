'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations/FadeIn';

const faqs = [
  {
    category: 'Eligibility',
    q: 'Who can participate in PRISMTECH?',
    a: 'PRISMTECH is open to all engineering students across colleges. You need to bring a valid college ID for verification at check-in on Day 1.',
  },
  {
    category: 'Teams',
    q: 'How many members can be in a team?',
    a: 'Teams can have 2 to 4 members. You can register solo and find teammates through our Team Formation board on the platform.',
  },
  {
    category: 'Tracks',
    q: 'Can we switch tracks after registering?',
    a: 'Track selection is made during registration. Switching tracks after confirmation is not possible, so choose carefully based on your team\'s strengths.',
  },
  {
    category: 'Event Day',
    q: 'When are problem statements released?',
    a: 'Problem statements for all three tracks are released at the Opening Ceremony on September 26 at 9:00 AM. No statements will be shared beforehand.',
  },
  {
    category: 'Facilities',
    q: 'What hardware is provided for the Optic Stream?',
    a: 'The Hardware Lab provides basic resistors, LEDs, Arduinos, and LDRs for the Photonics track. All teams also get at least 2 power sockets and high-speed dedicated Wi-Fi.',
  },
  {
    category: 'Judging',
    q: 'How are teams evaluated?',
    a: 'Judging emphasizes fair innovation and evaluation. Criteria include creativity, technical execution, feasibility, and presentation quality. A senior jury conducts desk-side scrutiny in Round 1 and deeper technical reviews in subsequent rounds.',
  },
  {
    category: 'Eligibility',
    q: 'Can teams include members from different colleges?',
    a: 'Yes! Multi-college teams are allowed and encouraged. PRISMTECH celebrates collaboration across institutions.',
  },
  {
    category: 'Event Day',
    q: 'What happens if our team is disqualified?',
    a: 'Disqualified teams remain part of PRISMTECH! You can attend The Spectrum Panel, visit the LinkedIn Station for professional branding guidance, and get your CV reviewed at the Tech CV Clinic by IEEE senior members.',
  },
];

interface FAQItemProps {
  q: string;
  a: string;
  category: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ q, a, category, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div
      className="border border-white/5 rounded-xl overflow-hidden"
      style={{ background: isOpen ? 'rgba(255,255,255,0.03)' : 'transparent' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 text-left group"
        aria-expanded={isOpen}
        id={`faq-${index}-trigger`}
        aria-controls={`faq-${index}-content`}
      >
        <div
          className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors"
          style={{
            background: isOpen ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.04)',
            border: isOpen ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-[#8b5cf6]" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-white/40" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-md"
              style={{ color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.1)' }}
            >
              {category}
            </span>
          </div>
          <span
            className="text-base font-medium"
            style={{ color: isOpen ? '#fff' : 'rgba(255,255,255,0.75)' }}
          >
            {q}
          </span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            id={`faq-${index}-content`}
            role="region"
            aria-labelledby={`faq-${index}-trigger`}
          >
            <div className="px-5 pb-5 pl-[68px]">
              <p className="text-sm text-white/55 leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="section"
      style={{ background: 'var(--color-surface-0)' }}
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
              Common Questions
            </div>
            <h2
              id="faq-heading"
              className="font-display font-800 text-4xl sm:text-5xl text-white mb-4"
            >
              Got Questions?{' '}
              <span className="text-gradient-cyan-violet">We&apos;ve Got Answers</span>
            </h2>
            <p className="text-white/50">
              Everything you need to know about PRISMTECH 2026.
            </p>
          </FadeIn>

          <StaggerChildren className="space-y-3">
            {faqs.map((faq, i) => (
              <StaggerItem key={i}>
                <FAQItem
                  {...faq}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn className="text-center mt-10">
            <p className="text-sm text-white/40 mb-4">
              Still have questions?
            </p>
            <a
              href="mailto:ieeeaziznagarklh@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white glass border border-white/10 hover:bg-white/5 transition-all"
            >
              Email Us at ieeeaziznagarklh@gmail.com
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

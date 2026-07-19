'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

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
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-[var(--color-surface-1)]">
      <div className="container max-w-3xl">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-6">FAQ</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border border-white/5 bg-[var(--color-surface-2)] rounded-2xl overflow-hidden transition-colors hover:border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="hidden sm:inline-flex shrink-0">
                      {faq.category}
                    </Badge>
                    <span className={`font-medium text-lg transition-colors ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 ml-4 transition-colors"
                    style={{ background: isOpen ? 'var(--color-ieee-blue-light)' : 'transparent', borderColor: isOpen ? 'transparent' : '' }}
                  >
                    {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-white/50 group-hover:text-white" />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-[var(--color-text-secondary)] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

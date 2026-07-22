'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const FAQS = [
  { q: 'Is there a registration fee?', a: 'Fee details will be announced soon. Scholarships or waivers may be available for eligible participants.' },
  { q: 'Can I form a team after registering?', a: 'Yes, team details can be edited before the registration deadline of 21 September 2026.' },
  { q: 'Are food and accommodation provided?', a: 'Meals, breaks, first-aid, and sick-room support are planned. Accommodation depends on availability and will be communicated to registered teams.' },
  { q: 'What should participants bring?', a: 'Laptop, charger, institutional ID card, required software pre-installed, and backup internet access.' },
  { q: 'Who is eligible to participate?', a: 'Students from recognized colleges and universities with a valid institutional ID. Both undergraduate and postgraduate students can participate.' },
  { q: 'What is the refund policy?', a: 'Refund or cancellation terms will be published with the official rulebook before the registration deadline.' },
  { q: 'What is the team size?', a: 'Teams must have 2 to 4 members. One member acts as the team leader who handles primary communications.' },
  { q: 'Will there be mentors available during the hackathon?', a: 'Yes, experienced mentors from industry, academia, and IEEE will be available throughout the 24-hour sprint to provide technical and ideation support.' },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-colors duration-200 cursor-pointer ${
        isOpen
          ? 'border-[var(--color-ieee-blue)]/30 bg-[var(--color-surface-3)]'
          : 'border-white/[0.07] bg-[var(--color-surface-2)] hover:border-white/[0.12]'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`font-medium text-sm transition-colors leading-relaxed ${isOpen ? 'text-white' : 'text-[var(--color-text-secondary)]'}`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown
            className={`transition-colors ${isOpen ? 'text-[var(--color-ieee-blue-light)]' : 'text-[var(--color-text-muted)]'}`}
            style={{ width: '16px', height: '16px' }}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-5 pb-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-[var(--color-surface-1)]" ref={ref} aria-labelledby="faq-heading">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left: Header */}
          <div className="lg:w-72 shrink-0">
            <SectionHeader
              eyebrow="FAQ"
              title="Common participant questions."
              description="Can't find what you're looking for? Reach out to our team directly."
              align="left"
            />
          </div>

          {/* Right: Accordion */}
          <div className="flex-1 space-y-2">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

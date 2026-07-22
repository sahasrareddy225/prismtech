'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';

const FAQ_CATEGORIES = [
  {
    label: 'Registration',
    color: 'var(--color-prism-cyan)',
    faqs: [
      {
        q: 'Is there a registration fee?',
        a: 'Fee details will be announced soon. Scholarships or waivers may be available for eligible participants. Stay tuned to our social channels for the official announcement.',
      },
      {
        q: 'What is the team size requirement?',
        a: 'Teams must have a minimum of 2 and a maximum of 4 members. One member must serve as the team leader and acts as the primary point of contact.',
      },
      {
        q: 'Can I edit my team details after registration?',
        a: 'Yes, team details including member information and chosen domain can be edited before the registration deadline of 21 September 2026.',
      },
      {
        q: 'What is the registration deadline?',
        a: 'The official registration deadline is 21 September 2026. We strongly recommend registering early as spots are limited.',
      },
      {
        q: 'Can a student participate in multiple teams?',
        a: 'No. Each student can only be a part of one registered team. Duplicate registrations will be disqualified.',
      },
    ],
  },
  {
    label: 'Eligibility',
    color: '#a78bfa',
    faqs: [
      {
        q: 'Who is eligible to participate?',
        a: 'Students from recognized colleges and universities with a valid institutional ID. Both undergraduate (B.Tech, B.E., B.Sc.) and postgraduate (M.Tech, M.E., MCA) students can participate.',
      },
      {
        q: 'Do all team members need to be from the same college?',
        a: 'No, teams can be formed across different colleges and institutions. Cross-institutional teams are welcome and encouraged.',
      },
      {
        q: 'Is this event open to students outside Hyderabad?',
        a: 'Yes! Students from all recognized institutions across India can participate. However, the event is in-person only at KLH Aziz Nagar, Hyderabad.',
      },
    ],
  },
  {
    label: 'Event & Logistics',
    color: 'var(--color-prism-gold)',
    faqs: [
      {
        q: 'Are food and accommodation provided?',
        a: 'Meals, snacks, and beverages (including coffee and tea during the night shift) are planned. Accommodation availability depends on resources and will be communicated to registered teams closer to the event.',
      },
      {
        q: 'What should participants bring?',
        a: 'Laptop, charger, valid institutional ID, all required software pre-installed, and backup internet access (mobile hotspot recommended). A list of recommended items will be shared with registered participants.',
      },
      {
        q: 'Is there a first-aid and medical support facility?',
        a: 'Yes. First-aid and sick-room support are planned at the venue. Emergency contact details will be shared with all registered teams.',
      },
      {
        q: 'Will mentors be available during the hackathon?',
        a: 'Yes! Experienced mentors from industry, academia, and IEEE will be available throughout the 24-hour sprint to provide technical guidance and ideation support.',
      },
      {
        q: 'Where exactly is the venue?',
        a: 'KL University (KLH) Hyderabad Off-Campus, R.V.S Nagar, Moinabad Road, near TS Police Academy, Aziz Nagar, Hyderabad, Telangana 500075.',
      },
    ],
  },
  {
    label: 'Rules & Prizes',
    color: 'var(--color-prism-green)',
    faqs: [
      {
        q: 'When does coding officially start?',
        a: 'Hacking begins at 10:00 AM on September 26, 2026, after the opening ceremony and problem statement release. No code written before this time may be used.',
      },
      {
        q: 'What must be submitted for evaluation?',
        a: 'Teams must submit: a project summary (max 500 words), presentation slides, a public GitHub repository link with README, and a live demo or recorded demo video.',
      },
      {
        q: 'What are the prizes?',
        a: 'The winning team receives a trophy, cash award, IEEE spotlight feature, and mentor access program. The runner-up receives a trophy, cash award, and sponsor recognition. Special awards for Best Social Impact, Best First-Time Team, and Best Technical Execution are also given.',
      },
      {
        q: 'What is the refund policy?',
        a: 'Refund or cancellation terms will be published with the official rulebook. Please review the rulebook carefully before registering.',
      },
      {
        q: 'Can teams retain their intellectual property?',
        a: 'Yes. Teams retain all intellectual property rights over their projects. Shared sponsor datasets or APIs must be used in accordance with their respective license terms.',
      },
    ],
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer ${
        isOpen
          ? 'border-[var(--color-ieee-blue-light)]/25 bg-[var(--color-surface-2)]'
          : 'border-white/07 bg-[var(--color-surface-2)] hover:border-white/12 hover:bg-[var(--color-surface-3)]'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-sm sm:text-base leading-snug transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-[var(--color-ieee-blue-light)]' : 'text-white/25'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-6 pb-5 text-sm text-[var(--color-text-secondary)] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const heroRef = useRef(null);
  const faqRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const faqInView = useInView(faqRef, { once: true, margin: '-60px' });
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...FAQ_CATEGORIES.map((c) => c.label)];
  const visibleCategories = activeCategory === 'All'
    ? FAQ_CATEGORIES
    : FAQ_CATEGORIES.filter((c) => c.label === activeCategory);

  const totalFAQs = FAQ_CATEGORIES.reduce((sum, c) => sum + c.faqs.length, 0);

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[var(--color-surface-0)]">

        {/* Hero */}
        <section ref={heroRef} className="relative pt-28 pb-12 border-b border-white/[0.05] overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,98,155,0.08) 0%, transparent 70%)' }}
          />
          <div className="container relative z-10">
            <SectionHeader
              eyebrow="FAQ"
              title={<>Common participant <span className="text-gradient-ieee">questions.</span></>}
              description={
                <>
                  {totalFAQs} answers covering registration, eligibility, logistics, rules, and prizes. Can't find what you're looking for?{' '}
                  <Link href="/contact" className="text-[var(--color-ieee-blue-light)] hover:underline">Contact the team →</Link>
                </>
              }
              align="center"
            />
          </div>
          <div className="absolute bottom-0 inset-x-0 section-divider" />
        </section>

        <div ref={faqRef} className="container py-20">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {categories.map((cat) => {
              const catData = FAQ_CATEGORIES.find((c) => c.label === cat);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'text-[var(--color-text-primary)] border-[var(--color-ieee-blue-light)]/40 bg-[var(--color-surface-3)]'
                      : 'text-[var(--color-text-muted)] border-[var(--color-glass-border)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-ieee-blue-light)]/20 bg-[var(--color-surface-2)]'
                  }`}
                >
                  {cat}
                  <span className="ml-1.5 text-[10px] opacity-60">
                    {cat === 'All'
                      ? totalFAQs
                      : FAQ_CATEGORIES.find((c) => c.label === cat)?.faqs.length}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* FAQ Sections */}
          <div className="space-y-14">
            <AnimatePresence mode="wait">
              {visibleCategories.map((cat, ci) => (
                <motion.section
                  key={cat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: ci * 0.06 }}
                  aria-labelledby={`cat-${ci}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 max-w-8 bg-[var(--color-ieee-blue-light)]" />
                    <h2
                      id={`cat-${ci}`}
                      className="text-sm font-bold tracking-widest uppercase text-[var(--color-ieee-blue-light)]"
                    >
                      {cat.label}
                    </h2>
                    <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, var(--color-ieee-blue-light), transparent)` }} />
                  </div>

                  <div className="space-y-3">
                    {cat.faqs.map((faq, fi) => {
                      const key = `${ci}-${fi}`;
                      return (
                        <FAQItem
                          key={key}
                          q={faq.q}
                          a={faq.a}
                          isOpen={openItem === key}
                          onClick={() => setOpenItem(openItem === key ? null : key)}
                        />
                      );
                    })}
                  </div>
                </motion.section>
              ))}
            </AnimatePresence>
          </div>

          {/* Still have questions */}
          <div className="mt-20 glass-card p-8 sm:p-12 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/25 flex items-center justify-center mx-auto mb-5">
              <MessageSquare className="w-7 h-7 text-[var(--color-ieee-blue-light)]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-[var(--color-text-secondary)] max-w-sm mx-auto mb-7 text-sm leading-relaxed">
              Our team is happy to help. Reach out via email, Instagram, or WhatsApp for a quick response.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary">
              Contact the Team
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Share2, Link2, Camera, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'General Enquiry',
    value: 'ieeeaziznagarklh@gmail.com',
    sub: 'For registration, tracks, and general questions',
    href: 'mailto:ieeeaziznagarklh@gmail.com',
    color: 'var(--color-prism-cyan)',
  },
  {
    icon: Phone,
    label: 'WhatsApp Help Desk',
    value: '+91 97047 10888',
    sub: 'Available during business hours',
    href: 'https://wa.me/919704710888',
    color: 'var(--color-prism-green)',
  },
  {
    icon: Phone,
    label: 'Emergency Desk',
    value: '+91 97047 10888',
    sub: 'On-site emergency contact (event day only)',
    href: 'tel:+919704710888',
    color: 'var(--color-prism-rose)',
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: 'KLH Aziz Nagar Campus',
    sub: 'R.V.S Nagar, Moinabad Road, Hyderabad 500075',
    href: '/venue',
    color: '#a78bfa',
  },
];

const SOCIAL_LINKS = [
  { icon: Camera, label: 'Instagram', handle: '@ieee_prismtech', href: 'https://instagram.com/ieee_prismtech', color: '#E1306C' },
  { icon: Link2, label: 'LinkedIn', handle: 'IEEE PRISMTECH KLH', href: '#', color: '#0A66C2' },
];

const QUICK_LINKS = [
  { label: 'Registration guide', href: '/resources' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Rules & guidelines', href: '/rules' },
  { label: 'Problem domains', href: '/tracks' },
  { label: 'Event schedule', href: '/schedule' },
];

export default function ContactPage() {
  const heroRef = useRef(null);
  const mainRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const mainInView = useInView(mainRef, { once: true, margin: '-60px' });

  const [formState, setFormState] = useState({
    name: '', email: '', subject: 'general', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

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
          <div className="container relative z-10 text-center">
            <span className="eyebrow justify-center">Contact</span>
            <h1
              className="text-[var(--color-text-primary)] mt-2 mb-4 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Reach the <span className="text-gradient-ieee">PRISMTECH team.</span>
            </h1>
            <p className="text-base text-[var(--color-text-secondary)] max-w-md mx-auto leading-relaxed">
              Questions about registration, domains, or sponsorship? We respond within 24–48 hours.
            </p>
          </div>
        </section>

        <div ref={mainRef} className="container py-14">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: Contact info (2 cols) */}
            <motion.div
              className="lg:col-span-2 space-y-10"
              initial={{ opacity: 0, x: -30 }}
              animate={mainInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Direct contact */}
              <div>
                <h2 className="text-lg font-bold text-white mb-6">Direct Contact</h2>
                <div className="space-y-4">
                  {CONTACT_ITEMS.map(({ icon: Icon, label, value, sub, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="glass-card p-4 flex items-start gap-3 hover:border-white/[0.14] transition-colors group"
                    >
                      <div className="icon-container shrink-0">
                        <Icon style={{ width: '15px', height: '15px' }} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] text-[var(--color-text-muted)] font-medium uppercase tracking-wider mb-0.5">{label}</div>
                        <div className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-ieee-blue-light)] transition-colors truncate">{value}</div>
                        <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-lg font-bold text-white mb-5">Follow Us</h2>
                <div className="grid grid-cols-2 gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="flex items-center gap-2.5 p-3.5 rounded-xl border border-white/06 hover:border-white/14 bg-white/02 hover:bg-white/05 transition-all group"
                    >
                      <s.icon className="w-4 h-4 shrink-0" style={{ color: s.color }} />
                      <div>
                        <div className="text-xs font-semibold text-white">{s.label}</div>
                        <div className="text-[10px] text-[var(--color-text-muted)]">{s.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div>
                <h2 className="text-lg font-bold text-white mb-5">Quick Answers</h2>
                <div className="space-y-2">
                  {QUICK_LINKS.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-white/05 hover:border-white/12 bg-white/02 hover:bg-white/04 transition-all group text-sm text-white/70 hover:text-white"
                    >
                      {l.label}
                      <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form (3 cols) */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={mainInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {submitted ? (
                <motion.div
                  className="glass-card p-12 flex flex-col items-center justify-center text-center h-full min-h-[500px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-[var(--color-prism-green)]/15 border border-[var(--color-prism-green)]/30 flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <Send className="w-9 h-9 text-[var(--color-prism-green)]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-[var(--color-text-secondary)] max-w-sm leading-relaxed mb-8">
                    Thanks for reaching out. Our team will respond within 24–48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-magnetic btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-10 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">Send us a message</h2>
                    <p className="text-sm text-[var(--color-text-secondary)]">We'll get back to you within 24–48 hours.</p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-[var(--color-prism-rose)]/10 border border-[var(--color-prism-rose)]/25 text-sm text-[var(--color-prism-rose)]">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="form-label">
                        Full Name <span className="text-[var(--color-prism-rose)]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        className="form-input"
                        placeholder="Your full name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="form-label">
                        Email Address <span className="text-[var(--color-prism-rose)]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        className="form-input"
                        placeholder="you@college.edu"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="form-label">Subject</label>
                    <select
                      id="contact-subject"
                      className="form-input"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="registration">Registration Help</option>
                      <option value="sponsorship">Sponsorship Opportunity</option>
                      <option value="mentorship">Join as Mentor / Judge</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="form-label">
                      Message <span className="text-[var(--color-prism-rose)]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={6}
                      className="form-input resize-none"
                      placeholder="How can we help you?"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-magnetic btn-primary w-full justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[var(--color-text-muted)] text-center">
                    By submitting, you agree to our{' '}
                    <Link href="/privacy" className="text-[var(--color-prism-cyan)] hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

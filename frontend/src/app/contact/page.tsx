'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Mail, Phone, MapPin, Send, ArrowRight, Loader2,
  Camera, Link2, CheckCircle2, MessageSquare,
} from 'lucide-react';
import Link from 'next/link';

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'General Enquiry',
    value: 'ieeeaziznagarklh@gmail.com',
    sub: 'For registration, tracks, and general questions',
    href: 'mailto:ieeeaziznagarklh@gmail.com',
    accent: 'rgba(34,211,238,1)',
  },
  {
    icon: Phone,
    label: 'WhatsApp Help Desk',
    value: '+91 97047 10888',
    sub: 'Available during business hours',
    href: 'https://wa.me/919704710888',
    accent: 'rgba(52,211,153,1)',
  },
  {
    icon: Phone,
    label: 'Emergency Desk',
    value: '+91 97047 10888',
    sub: 'On-site emergency contact (event day only)',
    href: 'tel:+919704710888',
    accent: 'rgba(251,113,133,1)',
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: 'KLH Aziz Nagar Campus',
    sub: 'R.V.S Nagar, Moinabad Road, Hyderabad 500075',
    href: '/venue',
    accent: 'rgba(167,139,250,1)',
  },
];

const SOCIAL_LINKS = [
  { icon: Camera, label: 'Instagram', handle: '@ieee_prismtech', href: 'https://instagram.com/ieee_prismtech', accent: 'rgba(225,48,108,1)' },
  { icon: Link2, label: 'LinkedIn', handle: 'IEEE PRISMTECH KLH', href: '#', accent: 'rgba(10,102,194,1)' },
];

const QUICK_LINKS = [
  { label: 'Registration guide', href: '/resources' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Rules & guidelines', href: '/rules' },
  { label: 'Problem domains', href: '/tracks' },
  { label: 'Event schedule', href: '/schedule' },
];

const SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'registration', label: 'Registration Help' },
  { value: 'sponsorship', label: 'Sponsorship Opportunity' },
  { value: 'mentorship', label: 'Join as Mentor / Judge' },
  { value: 'media', label: 'Media & Press' },
  { value: 'other', label: 'Other' },
];

const BG = (
  <div className="fixed inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,98,155,0.18) 0%, transparent 70%)' }} />
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 80% 60%, rgba(88,28,220,0.08) 0%, transparent 60%)' }} />
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,98,155,0.04) 0%, transparent 50%, rgba(88,28,220,0.04) 100%)' }} />
  </div>
);

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <div style={{ width: '20px', height: '1px', background: 'rgba(0,136,204,0.6)' }} />
      <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,136,204,0.9)' }}>{children}</span>
      <div style={{ width: '20px', height: '1px', background: 'rgba(0,136,204,0.6)' }} />
    </div>
  );
}

const card: React.CSSProperties = {
  background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '14px',
  backdropFilter: 'blur(20px)',
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'general', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError('Please fill in all required fields.'); return; }
    setError('');
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      {BG}
      <main id="main-content" className="min-h-screen" style={{ position: 'relative', zIndex: 1 }}>

        {/* Hero */}
        <section style={{ paddingTop: '112px', paddingBottom: '72px', textAlign: 'center' }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Contact</SectionLabel>
              <h1
                className="text-gradient-ieee"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '18px' }}
              >
                Reach the PRISMTECH team.
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
                Questions about registration, domains, or sponsorship? We respond within 24–48 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main grid */}
        <section style={{ paddingBottom: '96px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '32px', alignItems: 'start' }}>

              {/* LEFT COLUMN */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
              >

                {/* Direct Contact */}
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '14px' }}>
                    Direct Contact
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {CONTACT_ITEMS.map(({ icon: Icon, label, value, sub, href, accent }) => (
                      <motion.a
                        key={label}
                        href={href}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          ...card,
                          borderLeft: `3px solid ${accent}`,
                          padding: '14px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          textDecoration: 'none',
                        }}
                      >
                        <div style={{
                          width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                          background: `${accent}15`, border: `1px solid ${accent}30`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <Icon style={{ width: '15px', height: '15px', color: accent }} />
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '2px' }}>{label}</div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>{sub}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Follow Us */}
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '14px' }}>
                    Follow Us
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {SOCIAL_LINKS.map((s) => (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        whileHover={{ y: -3, boxShadow: `0 8px 24px ${s.accent}20` }}
                        transition={{ duration: 0.2 }}
                        style={{
                          ...card,
                          borderTop: `2px solid ${s.accent}`,
                          padding: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          textDecoration: 'none',
                        }}
                      >
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                          background: `${s.accent}15`, border: `1px solid ${s.accent}30`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <s.icon style={{ width: '14px', height: '14px', color: s.accent }} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{s.label}</div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>{s.handle}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick Answers */}
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '14px' }}>
                    Quick Answers
                  </div>
                  <div style={{ ...card, overflow: 'hidden' }}>
                    {QUICK_LINKS.map((l, i) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 16px',
                          borderBottom: i < QUICK_LINKS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                          textDecoration: 'none',
                          color: 'var(--color-text-secondary)',
                          fontSize: '0.85rem',
                          transition: 'color 0.2s, background 0.2s',
                        }}
                        className="hover:text-white hover:bg-white/[0.03]"
                      >
                        {l.label}
                        <ArrowRight style={{ width: '13px', height: '13px', opacity: 0.4 }} />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT COLUMN — Form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ ...card, padding: '64px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      style={{
                        width: '72px', height: '72px', borderRadius: '20px',
                        background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px',
                      }}
                    >
                      <CheckCircle2 style={{ width: '32px', height: '32px', color: 'rgba(52,211,153,1)' }} />
                    </motion.div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '10px' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '340px', lineHeight: 1.7, marginBottom: '32px', fontSize: '0.9rem' }}>
                      Thanks for reaching out. Our team will respond within 24–48 hours.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-magnetic btn-secondary">
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ ...card, padding: '36px 32px' }}>
                    {/* Form header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '11px', flexShrink: 0,
                        background: 'rgba(0,136,204,0.12)', border: '1px solid rgba(0,136,204,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <MessageSquare style={{ width: '18px', height: '18px', color: 'rgba(0,136,204,0.9)' }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>Send us a message</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>We'll get back to you within 24–48 hours.</div>
                      </div>
                    </div>

                    {error && (
                      <div style={{
                        padding: '12px 16px', borderRadius: '10px', marginBottom: '20px',
                        background: 'rgba(251,113,133,0.08)', border: '1px solid rgba(251,113,133,0.25)',
                        fontSize: '0.85rem', color: 'rgba(251,113,133,1)',
                      }}>
                        {error}
                      </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <label htmlFor="c-name" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '7px', letterSpacing: '0.03em' }}>
                          Full Name <span style={{ color: 'rgba(251,113,133,1)' }}>*</span>
                        </label>
                        <input
                          id="c-name" type="text" required
                          className="form-input"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-email" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '7px', letterSpacing: '0.03em' }}>
                          Email Address <span style={{ color: 'rgba(251,113,133,1)' }}>*</span>
                        </label>
                        <input
                          id="c-email" type="email" required
                          className="form-input"
                          placeholder="you@college.edu"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label htmlFor="c-subject" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '7px', letterSpacing: '0.03em' }}>
                        Subject
                      </label>
                      <select
                        id="c-subject"
                        className="form-input"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      >
                        {SUBJECTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                      </select>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label htmlFor="c-message" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '7px', letterSpacing: '0.03em' }}>
                        Message <span style={{ color: 'rgba(251,113,133,1)' }}>*</span>
                      </label>
                      <textarea
                        id="c-message" required rows={6}
                        className="form-input"
                        style={{ resize: 'none' }}
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-magnetic btn-primary"
                      disabled={submitting}
                      style={{ width: '100%', justifyContent: 'center', boxShadow: '0 0 24px rgba(0,136,204,0.2)' }}
                    >
                      {submitting ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message</>
                      )}
                    </button>

                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '14px' }}>
                      By submitting, you agree to our{' '}
                      <Link href="/privacy" style={{ color: 'rgba(34,211,238,0.8)', textDecoration: 'none' }}>Privacy Policy</Link>.
                    </p>
                  </form>
                )}
              </motion.div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

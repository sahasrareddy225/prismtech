'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const CONTACT_ITEMS = [
  { icon: Mail, label: 'General Enquiry', value: 'ieeeaziznagarklh@gmail.com' },
  { icon: Phone, label: 'WhatsApp Help Desk', value: '+91 97047 10888' },
  { icon: Phone, label: 'Emergency Desk', value: '+91 97047 10888' },
  { icon: MapPin, label: 'Venue', value: 'KLH Aziz Nagar Campus, Hyderabad' },
  { icon: MessageSquare, label: 'Instagram', value: '@ieee_prismtech' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section bg-[var(--color-surface-0)]" ref={ref} aria-labelledby="contact-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              eyebrow="Contact"
              title={<>Reach the <span className="text-gradient-ieee">PRISMTECH team.</span></>}
              description="Have questions about registration, problem domains, or sponsorship? We'd love to hear from you."
              align="left"
            />

            <div className="space-y-3">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass-card p-4 flex items-center gap-3">
                  <div className="icon-container shrink-0">
                    <Icon style={{ width: '16px', height: '16px' }} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--color-text-muted)] font-medium uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="glass-card p-10 flex flex-col items-center justify-center text-center h-full min-h-[360px]">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-surface-3)] border border-white/08 flex items-center justify-center mb-5">
                  <Send className="text-[var(--color-ieee-blue-light)]" style={{ width: '22px', height: '22px' }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">We'll get back to you within 24–48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-7 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label" htmlFor="contact-name">Name</label>
                    <input id="contact-name" type="text" required className="form-input" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-email">Email</label>
                    <input id="contact-email" type="email" required className="form-input" placeholder="you@college.edu" />
                  </div>
                </div>
                <div>
                  <label className="form-label" htmlFor="contact-subject">Subject</label>
                  <select id="contact-subject" className="form-input">
                    <option value="general">General Inquiry</option>
                    <option value="registration">Registration Help</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button type="submit" className="btn-magnetic btn-primary w-full justify-center text-sm">
                  <Send style={{ width: '14px', height: '14px' }} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

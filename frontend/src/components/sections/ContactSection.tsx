'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Instagram, Linkedin, MapPin, CheckCircle } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ieeeaziznagarklh@gmail.com',
      href: 'mailto:ieeeaziznagarklh@gmail.com',
      color: '#8b5cf6',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 97047 10888',
      href: 'tel:+919704710888',
      color: '#00d4ff',
    },
    {
      icon: MapPin,
      label: 'Venue',
      value: 'KL University (KLH), Aziz Nagar, Hyderabad',
      href: '/venue',
      color: '#f59e0b',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@ieee_prismtech',
      href: 'https://instagram.com/ieee_prismtech',
      color: '#f59e0b',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'IEEE PRISMTECH KLH',
      href: 'https://www.linkedin.com/company/ieee-prismtech-klh',
      color: '#00d4ff',
    },
  ];

  return (
    <section
      className="section"
      style={{ background: 'var(--color-surface-1)' }}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            Contact
          </div>
          <h2
            id="contact-heading"
            className="font-display font-800 text-4xl sm:text-5xl text-white mb-4"
          >
            Get in{' '}
            <span className="text-gradient-violet-gold">Touch</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Have questions about PRISMTECH? Want to sponsor? We&apos;d love to hear from you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <FadeIn delay={0.1} className="space-y-6">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-xl glass border border-white/5 hover:border-white/10 hover:bg-white/3 transition-all group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-white/75 group-hover:text-white transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-3">
                Follow Us
              </p>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-white/10 transition-all group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${link.color}15`, border: `1px solid ${link.color}25` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: link.color }} />
                      </div>
                      <div>
                        <p className="text-xs text-white/30 mb-0.5">{link.label}</p>
                        <p className="text-sm font-medium text-white/75 group-hover:text-white transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <div className="p-7 rounded-2xl glass border border-white/5">
              <h3 className="font-display font-700 text-xl text-white mb-6">Send a Message</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-[#00d4ff] mb-4" />
                  <h4 className="font-display font-700 text-lg text-white mb-2">Message Sent!</h4>
                  <p className="text-sm text-white/50">
                    We&apos;ll get back to you at the earliest. Thanks for reaching out!
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-white/50 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs text-white/40 mb-1.5">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none focus:ring-1 transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-white/40 mb-1.5">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none focus:ring-1 transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs text-white/40 mb-1.5">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none focus:ring-1 transition-all appearance-none"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: form.subject ? 'white' : 'rgba(255,255,255,0.2)',
                      }}
                    >
                      <option value="" disabled>Select subject</option>
                      <option value="Registration Query">Registration Query</option>
                      <option value="Sponsorship">Sponsorship Inquiry</option>
                      <option value="Technical">Technical Query</option>
                      <option value="Media">Media / Press</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs text-white/40 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none focus:ring-1 transition-all resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-400">
                      Something went wrong. Please email us directly at ieeeaziznagarklh@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

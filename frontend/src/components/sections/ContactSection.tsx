'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { Instagram, Linkedin } from '@/components/icons/BrandIcons';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

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

  return (
    <section id="contact" className="section bg-[var(--color-surface-0)] relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-ieee-blue)]/10 blur-[120px] pointer-events-none rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <Badge variant="outline" className="mb-6">Reach Out</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            Have questions about PRISMTECH? Want to sponsor or partner with us? We&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">Contact Information</h3>
              <p className="text-[var(--color-text-secondary)]">Reach out directly via email or phone.</p>
            </div>
            
            <div className="space-y-6">
              <a href="mailto:ieeeaziznagarklh@gmail.com" className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-surface-2)] shadow-inner border border-white/5 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-[var(--color-prism-violet)]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">Email</div>
                  <div className="text-white font-medium group-hover:text-[var(--color-prism-violet)] transition-colors">ieeeaziznagarklh@gmail.com</div>
                </div>
              </a>

              <a href="tel:+919704710888" className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-surface-2)] shadow-inner border border-white/5 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-[var(--color-prism-cyan)]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">Phone</div>
                  <div className="text-white font-medium group-hover:text-[var(--color-prism-cyan)] transition-colors">+91 97047 10888</div>
                </div>
              </a>

              <div className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-surface-2)] shadow-inner border border-white/5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-[var(--color-prism-gold)]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">Location</div>
                  <div className="text-white font-medium">KL University (KLH), Aziz Nagar, Hyderabad</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <div className="flex gap-4">
                <a href="https://instagram.com/ieee_prismtech" className="w-12 h-12 rounded-xl bg-[var(--color-surface-2)] border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/ieee-prismtech-klh" className="w-12 h-12 rounded-xl bg-[var(--color-surface-2)] border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="glass" className="h-full">
              <CardContent className="p-8 lg:p-10">
                {status === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-ieee-blue-light)]/20 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-[var(--color-ieee-blue-light)]" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h3>
                    <p className="text-[var(--color-text-secondary)] mb-8">
                      Thank you for reaching out. We will get back to you shortly.
                    </p>
                    <Button variant="outline" onClick={() => setStatus('idle')}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ieee-blue-light)] focus:ring-1 focus:ring-[var(--color-ieee-blue-light)] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ieee-blue-light)] focus:ring-1 focus:ring-[var(--color-ieee-blue-light)] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-[var(--color-ieee-blue-light)] focus:ring-1 focus:ring-[var(--color-ieee-blue-light)] transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-[var(--color-surface-2)]">Select a topic...</option>
                        <option value="Sponsorship" className="bg-[var(--color-surface-2)]">Sponsorship Inquiry</option>
                        <option value="Partnership" className="bg-[var(--color-surface-2)]">Community Partnership</option>
                        <option value="General" className="bg-[var(--color-surface-2)]">General Question</option>
                        <option value="Support" className="bg-[var(--color-surface-2)]">Participant Support</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ieee-blue-light)] focus:ring-1 focus:ring-[var(--color-ieee-blue-light)] transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    {status === 'error' && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        Failed to send message. Please try again or use the email link.
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full h-12"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | PRISMTECH 2026',
  description: 'Reach the PRISMTECH team for any queries regarding the hackathon.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        
        {/* Page Hero */}
        <div className="container relative z-10 pt-10 pb-16 border-b border-white/5">
          <Badge variant="outline" className="mb-6">Get in Touch</Badge>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-6">
            Reach the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-ieee-blue-light)] to-[var(--color-prism-cyan)] pb-2 px-1">PRISMTECH Team</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            Have questions about registration, domains, or sponsorship? We are here to help. Drop us a message and our team will get back to you shortly.
          </p>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Form */}
            <div>
              <Card variant="glass" className="border-white/5 p-2">
                <CardContent className="p-6 sm:p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">First Name</label>
                        <input type="text" className="w-full bg-[var(--color-surface-1)] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-prism-cyan)] transition-colors" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Last Name</label>
                        <input type="text" className="w-full bg-[var(--color-surface-1)] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-prism-cyan)] transition-colors" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Email Address</label>
                      <input type="email" className="w-full bg-[var(--color-surface-1)] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-prism-cyan)] transition-colors" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Subject</label>
                      <select className="w-full bg-[var(--color-surface-1)] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-prism-cyan)] transition-colors appearance-none">
                        <option>General Inquiry</option>
                        <option>Registration Help</option>
                        <option>Sponsorship</option>
                        <option>Mentorship</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Message</label>
                      <textarea rows={5} className="w-full bg-[var(--color-surface-1)] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-prism-cyan)] transition-colors resize-none" placeholder="How can we help you?" />
                    </div>

                    <Button variant="magnetic" className="w-full mt-4">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[var(--color-prism-cyan)]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Email Us</h4>
                      <p className="text-[var(--color-text-secondary)] text-sm mb-1">For general queries</p>
                      <a href="mailto:contact@ieee-prismtech.com" className="text-[var(--color-prism-cyan)] hover:underline">contact@ieee-prismtech.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--color-prism-violet)]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Visit Us</h4>
                      <p className="text-[var(--color-text-secondary)] text-sm mb-1">KLH Aziz Nagar Campus</p>
                      <a href="/venue" className="text-[var(--color-prism-violet)] hover:underline">View map & directions</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-[var(--color-prism-gold)]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Social Media</h4>
                      <p className="text-[var(--color-text-secondary)] text-sm mb-1">Follow our updates</p>
                      <a href="#" className="text-[var(--color-prism-gold)] hover:underline">@ieee_prismtech</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[var(--color-surface-1)] to-[var(--color-surface-2)] border border-white/5">
                <h3 className="font-display text-xl font-bold text-white mb-2">Looking for quick answers?</h3>
                <p className="text-[var(--color-text-secondary)] mb-6">Check out our frequently asked questions for instant help regarding registration, eligibility, and rules.</p>
                <Button variant="outline" asChild>
                  <a href="/#faq">Read FAQ</a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Link from 'next/link';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import { Instagram, Linkedin } from '@/components/icons/BrandIcons';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const quickLinks = [
  { href: '/about', label: 'About PRISMTECH' },
  { href: '/tracks', label: 'Tracks & Themes' },
  { href: '/schedule', label: 'Event Schedule' },
  { href: '/rules', label: 'Rules & Eligibility' },
  { href: '/team', label: 'Organizer Team' },
  { href: '/sponsors', label: 'Sponsors & Partners' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/5 overflow-hidden"
      style={{ background: 'var(--color-surface-0)' }}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
        }}
      />

      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00d4ff] via-[#8b5cf6] to-[#f59e0b]" />
                <Zap className="relative z-10 w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <span className="font-display font-800 text-xl text-white tracking-tight">
                  PRISM<span className="text-gradient-cyan-violet">TECH</span>
                </span>
                <div className="text-[10px] text-white/40 font-medium tracking-widest uppercase leading-none">
                  IEEE · 2026
                </div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
              A multidisciplinary 24-hour hackathon where hardware (Light), software (Logic),
              and social impact (Equity) converge. Organized by IEEE KLH SB Aziz Nagar.
            </p>

            {/* IEEE Society Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="cyan">IEEE Photonics</Badge>
              <Badge variant="violet">Computer Society</Badge>
              <Badge variant="gold">IEEE WIE</Badge>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/ieee_prismtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-colors"
                aria-label="Follow PRISMTECH on Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-prismtech-klh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-colors"
                aria-label="Follow PRISMTECH on LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-600 text-sm text-white/80 uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-600 text-sm text-white/80 uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href="mailto:ieeeaziznagarklh@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#8b5cf6] group-hover:text-[#8b5cf6]" />
                  <span>ieeeaziznagarklh@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919704710888"
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#00d4ff] group-hover:text-[#00d4ff]" />
                  <span>+91 97047 10888</span>
                </a>
              </li>
              <li>
                <Link
                  href="/venue"
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#f59e0b] group-hover:text-[#f59e0b]" />
                  <span>KL University (KLH) Hyderabad, Aziz Nagar, Hyderabad – 500075</span>
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <Button variant="outline" size="md" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 IEEE KLH SB Aziz Nagar · PRISMTECH Hackathon. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const FOOTER_LINKS = {
  Event: [
    { label: 'About', href: '/about' },
    { label: 'Tracks', href: '/tracks' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Rules', href: '/rules' },
    { label: 'Prizes', href: '/prizes' },
  ],
  Participate: [
    { label: 'Register', href: '/auth/register' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Resources', href: '/resources' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
  ],
  Organization: [
    { label: 'Team', href: '/team' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

const CONTACT_INFO = [
  { icon: Mail, label: 'ieeeaziznagarklh@gmail.com' },
  { icon: Phone, label: '+91 97047 10888' },
  { icon: MapPin, label: 'KLH Aziz Nagar Campus, Hyderabad' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[var(--color-surface-0)]" role="contentinfo">

      {/* Main Footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="PRISMTECH 2026 Home">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-ieee-blue)] flex items-center justify-center shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-white" aria-hidden="true">
                  <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" stroke="currentColor" strokeWidth="2" fill="rgba(255,255,255,0.15)" />
                  <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                  <line x1="2" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                </svg>
              </div>
              <div className="leading-none">
                <div className="text-sm font-bold text-[var(--color-text-primary)] tracking-tight font-display">PRISMTECH 2026</div>
                <div className="text-[9px] text-[var(--color-text-muted)] font-medium tracking-widest uppercase">IEEE KLH Student Branch · Aziz Nagar</div>
              </div>
            </Link>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5 max-w-xs">
              A 24-hour sprint across the tech spectrum. Build bold, ethical technology for smarter campuses, safer communities, and sustainable futures.
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              {CONTACT_INFO.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)]">
                  <Icon className="text-[var(--color-text-muted)] shrink-0" style={{ width: '13px', height: '13px' }} />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-2 mt-5 flex-wrap">
              <a
                href="https://instagram.com/ieee_prismtech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-medium rounded-lg border border-white/08 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-white/18 transition-all"
              >
                @ieee_prismtech
              </a>
              <a
                href="#"
                className="px-3 py-1.5 text-xs font-medium rounded-lg border border-white/08 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-white/18 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-text-muted)] mb-4">{group}</h3>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <p>© {year} IEEE PRISMTECH Hackathon · IEEE KLH Student Branch, Aziz Nagar. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[var(--color-text-primary)] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--color-text-primary)] transition-colors">Terms</Link>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

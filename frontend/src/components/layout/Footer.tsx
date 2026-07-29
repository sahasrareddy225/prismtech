'use client';

import Link from 'next/link';
import { AtSign, ExternalLink, Mail, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

const NAV = [
  { label: 'About',    href: '/about'        },
  { label: 'Tracks',   href: '/tracks'       },
  { label: 'Schedule', href: '/schedule'     },
  { label: 'Register', href: '#'},
];

const RESOURCES = [
  { label: 'Problem Statements', href: '/tracks'          },
  { label: 'Evaluation Rounds',  href: '/about#mission'   },
  { label: 'Event Streams',      href: '/about#streams'   },
  { label: 'FAQ',                href: '/faq'             },
];

const SOCIALS = [
  { icon: AtSign,       label: 'Instagram',  sub: '@ieee_prismtech',        href: 'https://www.instagram.com/ieee_prismtech?igsh=YWp4c2Jhb3IzYjVt' },
  { icon: ExternalLink, label: 'LinkedIn',   sub: 'IEEE KLH Student Branch', href: 'https://www.linkedin.com/in/ieee-prismtech-klh-2a35b3422?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { icon: Mail,         label: 'Email Us',   sub: 'prismtech@ieee-klh.org',  href: 'mailto:prismtech@ieee-klh.org'       },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" style={{ position: 'relative', zIndex: 1, background: 'linear-gradient(180deg, rgba(7,12,24,0.99) 0%, rgba(4,8,18,1) 100%)' }}>

      {/* Top gradient accent */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.4) 30%, rgba(99,102,241,0.25) 60%, transparent 100%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-10 lg:gap-14 pt-8 lg:pt-5 pb-4 items-start">

          {/* Col 1 — Brand */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                background: 'linear-gradient(135deg, rgba(14,165,233,0.18) 0%, rgba(14,165,233,0.05) 100%)',
                border: '1px solid rgba(34,211,238,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(34,211,238,0.08)',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" stroke="rgba(34,211,238,0.85)" strokeWidth="1.8" fill="rgba(34,211,238,0.07)" />
                  <line x1="12" y1="2" x2="12" y2="22" stroke="rgba(34,211,238,0.55)" strokeWidth="1.4" />
                  <line x1="2" y1="7" x2="22" y2="7" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
                  <line x1="2" y1="17" x2="22" y2="17" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: 'rgba(241,245,249,0.92)', letterSpacing: '-0.025em', fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>
                  PRISMTECH 2026
                </div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(34,211,238,0.5)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '2px' }}>
                  IEEE KLH Student Branch
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p style={{ fontSize: '13px', color: 'rgba(139,158,192,0.55)', lineHeight: 1.8, maxWidth: '300px', margin: '0 0 20px' }}>
              A 24-hour multidisciplinary hackathon where student innovators build bold, ethical technology for smarter communities and sustainable futures.
            </p>

            {/* Location + date chips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <MapPin style={{ width: '12px', height: '12px', color: 'rgba(34,211,238,0.45)', flexShrink: 0 }} />
                <span style={{ fontSize: '11.5px', color: 'rgba(139,158,192,0.45)' }}>KLH University, Aziz Nagar, Hyderabad</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <Calendar style={{ width: '12px', height: '12px', color: 'rgba(34,211,238,0.45)', flexShrink: 0 }} />
                <span style={{ fontSize: '11.5px', color: 'rgba(139,158,192,0.45)' }}>2026 · 24-Hour Hackathon</span>
              </div>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.55)', marginBottom: '18px' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {NAV.map(l => (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{ fontSize: '13.5px', color: 'rgba(139,158,192,0.6)', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(241,245,249,0.88)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(139,158,192,0.6)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 — Resources */}
          <div>
            <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.55)', marginBottom: '18px' }}>
              Resources
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {RESOURCES.map(l => (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{ fontSize: '13.5px', color: 'rgba(139,158,192,0.6)', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(241,245,249,0.88)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(139,158,192,0.6)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 — Connect */}
          <div>
            <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.55)', marginBottom: '18px' }}>
              Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SOCIALS.map(({ icon: Icon, label, sub, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '10px 14px', borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.025)',
                    textDecoration: 'none',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(34,211,238,0.22)';
                    e.currentTarget.style.background = 'rgba(34,211,238,0.05)';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{
                    width: '30px', height: '30px', borderRadius: '7px', flexShrink: 0,
                    background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon style={{ width: '13px', height: '13px', color: 'rgba(34,211,238,0.8)' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '12.5px', fontWeight: 600, color: 'rgba(241,245,249,0.75)', lineHeight: 1.2 }}>{label}</div>
                    <div style={{ fontSize: '10.5px', color: 'rgba(139,158,192,0.45)', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub}</div>
                  </div>
                  <ArrowUpRight style={{ width: '12px', height: '12px', color: 'rgba(34,211,238,0.3)', flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center md:justify-between py-4 gap-4 text-center md:text-left">
          <p style={{ fontSize: '11.5px', color: 'rgba(139,158,192,0.35)', margin: 0, letterSpacing: '0.01em' }}>
            © {year} IEEE PRISMTECH Hackathon · IEEE KLH Student Branch, Aziz Nagar. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {(['Privacy Policy', 'Terms'] as const).map((label, i) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Link
                  href={label === 'Privacy Policy' ? '/privacy' : '/terms'}
                  style={{ fontSize: '11.5px', color: 'rgba(139,158,192,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(139,158,192,0.7)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(139,158,192,0.35)')}
                >
                  {label}
                </Link>
                {i === 0 && <span style={{ width: '1px', height: '11px', background: 'rgba(255,255,255,0.08)', display: 'inline-block' }} />}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

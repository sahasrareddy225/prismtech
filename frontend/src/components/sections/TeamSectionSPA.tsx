'use client';



import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Mail, Link2, Users, Zap, Info } from 'lucide-react';
import Link from 'next/link';

const LEADERSHIP = [
  { role: 'Faculty Coordinator',     name: 'Dr. Sai Sudha Gadde', org: 'IEEE KLH SB Aziz Nagar',         initials: 'SSG', pending: false, image: '/team-saisudha.png' },
  { role: 'Student General Chair',   name: 'A.Leena', org: 'IEEE KLH Student Branch, Aziz Nagar', initials: 'AL', pending: false, linkedin: 'https://www.linkedin.com/in/leena-adhimulam-7196b535a?utm_source=share_via&utm_content=profile&utm_medium=member_android', desc: 'Leads the overall planning, coordination, and execution of the hackathon by overseeing all committees, managing timelines, and ensuring the event runs successfully from start to finish.', image: '/team-leena.jpg' },
  { role: 'Vice Chair',              name: 'Chidurala Sai Pavani', org: 'IEEE KLH Student Branch',             initials: 'CSP', pending: false, linkedin: 'https://www.linkedin.com/in/sai-pavani-chidurala-4b2927317?utm_source=share_via&utm_content=profile&utm_medium=member_android', desc: 'Leads and coordinates the Technical, Publicity & Media, Design & Creative, Mentor & Judge Coordination, and Participant Engagement Committees, ensuring timely execution, smooth collaboration, and the successful delivery of PrismTech Hackathon.', image: '/team-pavani.jpg' },
  { role: 'Vice Chair — Operations', name: 'Shashank', org: 'IEEE KLH Student Branch', initials: 'S', pending: false, image: '/team-shashank.jpg' },
];

const STREAMS = [
  { name: 'Optic Stream',  sub: 'IEEE Photonics Society',       desc: 'Hardware-focused innovations in photonics and sensor technology.',                    accent: 'rgba(34,211,238,1)',  glow: 'rgba(34,211,238,0.12)' },
  { name: 'Neural Stream', sub: 'IEEE Computer Society',        desc: 'AI, ML, cybersecurity, and software-centric problem statements.',                     accent: 'rgba(99,102,241,1)',  glow: 'rgba(99,102,241,0.12)' },
  { name: 'Social Stream', sub: 'IEEE Women in Engineering',    desc: 'Challenges in sustainability, accessibility, education, and social impact.',           accent: 'rgba(52,211,153,1)',  glow: 'rgba(52,211,153,0.12)' },
];

const COMMITTEES = [
  'Technical', 'Registration', 'Hospitality', 'Sponsorship',
  'Publicity & Media', 'Event Operations', 'Logistics',
  'Participant Engagement', 'Mentor & Judge Coordination', 'Finance', 'Photography',
];

const MENTORS = [
  { label: 'Industry Experts', desc: 'Professionals from AI, cybersecurity, IoT, and startup ecosystems.' },
  { label: 'Faculty Advisors', desc: 'IEEE-affiliated faculty from KLH and partner institutions.'         },
  { label: 'IEEE Members',     desc: 'Active IEEE members from regional sections and technical committees.' },
];

function SectionHeading({ eyebrow, title, gradient, inView }: { eyebrow: string; title: string; gradient: string; inView: boolean }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <motion.div className="inline-flex items-center gap-2 mb-4"
        initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
        <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
        <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.85)' }}>{eyebrow}</span>
        <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
      </motion.div>
      <motion.h2
        style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0 }}
        initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }}>
        <span className="text-white">{title.split(' ').slice(0, -2).join(' ')} </span>
        <span className={gradient}>{title.split(' ').slice(-2).join(' ')}</span>
      </motion.h2>
    </div>
  );
}

export default function TeamSection() {
  const heroRef       = useRef(null);
  const leaderRef     = useRef(null);
  const mentorRef     = useRef(null);
  const streamsRef    = useRef(null);
  const committeeRef  = useRef(null);

  const heroInView      = useInView(heroRef,      { once: true });
  const leaderInView    = useInView(leaderRef,    { once: true, margin: '-40px' });
  const mentorInView    = useInView(mentorRef,    { once: true, margin: '-40px' });
  const streamsInView   = useInView(streamsRef,   { once: true, margin: '-40px' });
  const committeeInView = useInView(committeeRef, { once: true, margin: '-40px' });

  return (
    <>
      
      <section id="team" style={{ position: 'relative' }}>

        {/* Full-page background — covered by layout.tsx */}

        {/* ── Hero ── */}
        <section ref={heroRef} style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '64px' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <motion.div className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
              <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.85)' }}>The People</span>
              <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
            </motion.div>
            <motion.h1
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', marginBottom: '16px' }}
              initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.08 }}>
              <span className="text-white">Meet the organizing</span>{' '}
              <span className="text-gradient-ieee">committee.</span>
            </motion.h1>
            <motion.p
              style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto' }}
              initial={{ opacity: 0, y: 14 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.18 }}>
              PRISMTECH 2026 is powered by a dedicated team of IEEE student volunteers, faculty mentors, and industry judges working across 11 specialized committees.
            </motion.p>
          </div>
        </section>

        {/* ── Body ── */}
        <section style={{ position: 'relative', zIndex: 1, paddingBottom: '80px' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}>

            {/* Leadership */}
            <div ref={leaderRef}>
              <SectionHeading eyebrow="Leadership" title="Organizing committee chairs." gradient="text-gradient-ieee" inView={leaderInView} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {LEADERSHIP.map((person, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={leaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -4, boxShadow: '0 0 28px rgba(0,136,204,0.18), 0 8px 24px rgba(0,0,0,0.3)' }}
                    style={{
                      borderRadius: '16px',
                      background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))',
                      border: '1px solid rgba(255,255,255,0.07)',
                      backdropFilter: 'blur(20px)',
                      padding: '28px 20px 22px',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                      position: 'relative', overflow: 'hidden',
                      transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                    }}
                  >
                    {/* Top accent */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, rgba(0,136,204,0.6), rgba(34,211,238,0.3), transparent)' }} />

                    {/* Avatar */}
                    <div style={{
                      width: '86px', height: '86px', borderRadius: '20px', marginBottom: '18px',
                      background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800,
                      color: 'rgba(34,211,238,0.85)', letterSpacing: '0.04em',
                      boxShadow: '0 0 24px rgba(0,136,204,0.15)',
                      position: 'relative', overflow: 'hidden'
                    }}>
                      {(person as any).image ? (
                        <img src={(person as any).image} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        person.initials
                      )}
                      {person.pending && (
                        <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(245,158,11,0.8)', border: '2px solid rgba(8,14,28,1)', zIndex: 10 }} />
                      )}
                    </div>

                    {/* Role badge */}
                    <div style={{
                      fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                      padding: '3px 10px', borderRadius: '999px', marginBottom: '10px',
                      background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.22)',
                      color: 'rgba(34,211,238,0.8)',
                    }}>
                      {person.role}
                    </div>

                    {/* Name */}
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', color: person.pending ? 'rgba(139,158,192,0.4)' : 'rgba(241,245,249,0.9)', letterSpacing: '-0.01em', marginBottom: '4px', fontStyle: person.pending ? 'italic' : 'normal' }}>
                      {person.name}
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(139,158,192,0.45)', marginBottom: '12px' }}>{person.org}</div>

                    {/* Description */}
                    {(person as any).desc && (
                      <div style={{ fontSize: '11.5px', color: 'rgba(139,158,192,0.7)', lineHeight: 1.5, marginBottom: '16px' }}>
                        {(person as any).desc}
                      </div>
                    )}

                    {/* Social icons and Divider */}
                    {((person as any).linkedin || (person as any).email) && (
                      <>
                        <div style={{ height: '1px', width: '100%', background: 'rgba(255,255,255,0.05)', marginBottom: '14px' }} />
                        <div style={{ display: 'flex', gap: '8px' }}>
                          {[
                            { icon: Link2, label: 'LinkedIn', url: (person as any).linkedin },
                            { icon: Mail, label: 'Email', url: (person as any).email }
                          ].filter(s => s.url).map(({ icon: Icon, label, url }) => (
                            <a key={label} href={url as string} aria-label={label}
                              style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(139,158,192,0.4)', textDecoration: 'none', transition: 'all 0.2s', cursor: 'pointer' }}
                              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(34,211,238,0.8)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,0.2)'; }}
                              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(139,158,192,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}>
                              <Icon style={{ width: '13px', height: '13px' }} />
                            </a>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>


            </div>

            {/* Mentors & Judges */}
            <div ref={mentorRef}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <SectionHeading eyebrow="Mentors & Judges" title="Guided by industry experts." gradient="text-gradient-ieee" inView={mentorInView} />
                  <motion.p
                    style={{ fontSize: '14px', color: 'rgba(139,158,192,0.65)', lineHeight: 1.8, marginBottom: '28px' }}
                    initial={{ opacity: 0, y: 12 }} animate={mentorInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
                    PRISMTECH's mentor and jury panels are drawn from industry, academia, and IEEE's professional network. Mentors are available throughout the 24-hour sprint to provide technical guidance, ideation support, and pitch coaching.
                  </motion.p>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {MENTORS.map((m, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: 20 }} animate={mentorInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                      style={{ borderRadius: '14px', background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', padding: '18px 20px', display: 'flex', alignItems: 'flex-start', gap: '14px', overflow: 'hidden', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, rgba(0,136,204,0.5), transparent)' }} />
                      <div style={{ width: '36px', height: '36px', borderRadius: '9px', flexShrink: 0, background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Users style={{ width: '15px', height: '15px', color: 'rgba(34,211,238,0.8)' }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13.5px', color: 'rgba(241,245,249,0.9)', letterSpacing: '-0.01em', marginBottom: '4px' }}>{m.label}</div>
                        <div style={{ fontSize: '12.5px', color: 'rgba(139,158,192,0.6)', lineHeight: 1.65 }}>{m.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Streams */}
            <div ref={streamsRef}>
              <SectionHeading eyebrow="Event Streams" title="Three streams, one event." gradient="text-gradient-ieee" inView={streamsInView} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {STREAMS.map((s, i) => (
                  <motion.div key={s.name}
                    initial={{ opacity: 0, y: 20 }} animate={streamsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ y: -4, boxShadow: `0 0 28px ${s.glow}, 0 8px 24px rgba(0,0,0,0.3)` }}
                    style={{ borderRadius: '16px', background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', padding: '24px', position: 'relative', overflow: 'hidden', transition: 'box-shadow 0.25s ease, transform 0.25s ease', cursor: 'default' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${s.accent}, transparent)` }} />
                    <div style={{ display: 'inline-flex', alignItems: 'center', padding: '3px 10px', borderRadius: '999px', background: s.glow, border: `1px solid ${s.accent}30`, fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.accent, marginBottom: '14px' }}>
                      {s.sub}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.0625rem', color: 'rgba(241,245,249,0.93)', letterSpacing: '-0.02em', marginBottom: '10px' }}>{s.name}</h3>
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '10px' }} />
                    <p style={{ fontSize: '13px', color: 'rgba(139,158,192,0.65)', lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Committees */}
            <div ref={committeeRef}>
              <SectionHeading eyebrow="Committees" title="11 teams, one vision." gradient="text-gradient-ieee" inView={committeeInView} />
              <motion.p style={{ fontSize: '14px', color: 'rgba(139,158,192,0.6)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '28px' }}
                initial={{ opacity: 0, y: 10 }} animate={committeeInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.16 }}>
                PRISMTECH is organized across 11 specialized coordination teams, each handling a critical area of the event lifecycle.
              </motion.p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {COMMITTEES.map((c, i) => (
                  <motion.div key={c}
                    initial={{ opacity: 0, y: 10 }} animate={committeeInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                    style={{ padding: '7px 16px', borderRadius: '999px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '12.5px', fontWeight: 600, color: 'rgba(139,158,192,0.7)', letterSpacing: '0.01em' }}>
                    {c}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={committeeInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
              style={{ borderRadius: '16px', background: 'linear-gradient(135deg, rgba(0,136,204,0.08), rgba(8,16,32,0.6))', border: '1px solid rgba(0,136,204,0.18)', backdropFilter: 'blur(20px)', padding: '32px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, rgba(34,211,238,0.7), rgba(59,130,246,0.3), transparent)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Zap style={{ width: '20px', height: '20px', color: 'rgba(34,211,238,0.85)' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: 'rgba(241,245,249,0.93)', letterSpacing: '-0.015em', marginBottom: '4px' }}>Ready to be part of PRISMTECH?</div>
                  <div style={{ fontSize: '13px', color: 'rgba(139,158,192,0.6)' }}>Register your team before September 9, 2026.</div>
                </div>
              </div>
              <Link href="#" className="btn-magnetic btn-primary"
                style={{ fontSize: '0.9375rem', padding: '13px 32px', borderRadius: '12px', boxShadow: '0 0 24px rgba(0,136,204,0.2)', flexShrink: 0 }}>
                Register Now
              </Link>
            </motion.div>

          </div>
        </section>

      </section>
      
    </>
  );
}

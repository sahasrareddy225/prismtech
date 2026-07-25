'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Info, Timer, Users, Trophy } from 'lucide-react';

const PHASE_STYLE: Record<string, { accent: string; glow: string; label: string }> = {
  'Pre-Hackathon': { accent: 'rgba(0,136,204,1)',   glow: 'rgba(0,136,204,0.12)',  label: 'Pre-Hackathon' },
  'Round 1':       { accent: 'rgba(99,102,241,1)',  glow: 'rgba(99,102,241,0.12)', label: 'Round 1'       },
  'Round 2':       { accent: 'rgba(245,158,11,1)',  glow: 'rgba(245,158,11,0.12)', label: 'Round 2'       },
  'Round 3':       { accent: 'rgba(245,158,11,1)',  glow: 'rgba(245,158,11,0.12)', label: 'Round 3'       },
  'Overnight':     { accent: 'rgba(139,158,192,1)', glow: 'rgba(139,158,192,0.08)',label: 'Overnight'     },
  'Round 4':       { accent: 'rgba(34,211,238,1)',  glow: 'rgba(34,211,238,0.12)', label: 'Round 4'       },
  'Finals':        { accent: 'rgba(34,211,238,1)',  glow: 'rgba(34,211,238,0.12)', label: 'Grand Finale'  },
  'Closing':       { accent: 'rgba(52,211,153,1)',  glow: 'rgba(52,211,153,0.12)', label: 'Closing'       },
};

const SCHEDULE = [
  { time: '08:15', title: 'Check-in & Kit Distribution',  desc: 'College ID verification; teams receive Prism Packs — badges, Wi-Fi codes, and swag.', phase: 'Pre-Hackathon', day: 1 },
  { time: '09:00', title: 'Opening Ceremony',             desc: 'High-energy kickoff with IEEE society introductions and official problem statement release.', phase: 'Pre-Hackathon', day: 1 },
  { time: '10:00', title: 'Hacking Commences',            desc: 'The 24-hour build clock starts. Round 1 Blueprint Phase begins across all tracks.', phase: 'Round 1', day: 1 },
  { time: '12:30', title: 'Round 1 Results',              desc: 'Teams advancing to Round 2 announced. Networking lunch served for all participants.', phase: 'Round 1', day: 1 },
  { time: '15:00', title: 'Round 2: Technical Deep Dive', desc: 'Qualified teams present architecture and technical progress to a senior jury panel.', phase: 'Round 2', day: 1 },
  { time: '23:00', title: 'Round 3: Progress Evaluation', desc: 'Qualified teams demonstrate updated, working features to the evaluation jury.', phase: 'Round 3', day: 1 },
  { time: '00:00', title: 'The Graveyard Shift',          desc: 'Focused build time with quiet zones active. Coffee and tea served through 06:30.', phase: 'Overnight', day: 2 },
  { time: '06:00', title: 'Round 4: Finalists Circle',    desc: 'Final evaluation round to select the top teams for the grand main-stage pitch.', phase: 'Round 4', day: 2 },
  { time: '09:00', title: 'Hacking Ends + Grand Pitch',   desc: 'All code pushed to repositories. Top teams present live on the main stage to the full jury.', phase: 'Finals', day: 2 },
  { time: '10:15', title: 'Awards Ceremony',              desc: 'Prizes awarded to track winners, runners-up, and the PRISMTECH 2026 Overall Champion.', phase: 'Closing', day: 2 },
];

const day1 = SCHEDULE.filter(s => s.day === 1);
const day2 = SCHEDULE.filter(s => s.day === 2);

const HERO_STATS = [
  { icon: Timer,  value: '24', unit: 'hrs',    label: 'Build Time'     },
  { icon: Users,  value: '4',  unit: 'rounds', label: 'Evaluation'     },
  { icon: Trophy, value: '10', unit: 'events', label: 'Schedule Items' },
];

function DaySection({ items, dayLabel, dateLabel, inView }: {
  items: typeof SCHEDULE;
  dayLabel: string;
  dateLabel: string;
  inView: boolean;
}) {
  return (
    <div style={{ marginBottom: '52px' }}>

      {/* Day header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '7px 18px', borderRadius: '999px',
          background: 'linear-gradient(135deg, rgba(0,136,204,0.12), rgba(0,136,204,0.05))',
          border: '1px solid rgba(0,136,204,0.25)',
          boxShadow: '0 0 16px rgba(0,136,204,0.08)',
        }}>
          <Calendar style={{ width: '12px', height: '12px', color: 'rgba(34,211,238,0.75)' }} />
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.85)' }}>{dayLabel}</span>
        </div>
        <span style={{ fontSize: '12.5px', color: 'rgba(139,158,192,0.45)', fontWeight: 500 }}>{dateLabel}</span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.07), transparent)' }} />
      </div>

      {/* Timeline rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {items.map((item, i) => {
          const ps = PHASE_STYLE[item.phase] ?? PHASE_STYLE['Pre-Hackathon'];
          const isLast = i === items.length - 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{ display: 'flex', gap: '0', alignItems: 'stretch' }}
            >
              {/* Time column */}
              <div style={{
                width: '72px', flexShrink: 0,
                display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end',
                paddingRight: '18px', paddingTop: '22px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '12.5px', fontWeight: 700,
                  color: 'rgba(139,158,192,0.5)', letterSpacing: '0.04em', lineHeight: 1,
                }}>
                  {item.time}
                </span>
              </div>

              {/* Node + connector */}
              <div style={{ width: '28px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: '12px', height: '12px', borderRadius: '50%', flexShrink: 0,
                  background: ps.glow, border: `1.5px solid ${ps.accent}`,
                  boxShadow: `0 0 8px ${ps.glow}`,
                  marginTop: '24px', zIndex: 1,
                }} />
                {!isLast && (
                  <div style={{ flex: 1, width: '1px', minHeight: '20px', background: 'rgba(255,255,255,0.07)' }} />
                )}
              </div>

              {/* Card */}
              <div style={{ flex: 1, paddingLeft: '14px', paddingBottom: isLast ? '0' : '10px', paddingTop: '8px' }}>
                <div style={{
                  borderRadius: '14px',
                  background: 'linear-gradient(145deg, rgba(16,22,40,0.92) 0%, rgba(8,14,28,0.7) 100%)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(20px)',
                  overflow: 'hidden',
                }}>
                  {/* Top accent bar */}
                  <div style={{ height: '2px', background: `linear-gradient(90deg, ${ps.accent}, transparent)` }} />

                  <div style={{ padding: '14px 18px 16px' }}>
                    {/* Phase badge row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{
                        fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                        padding: '3px 10px', borderRadius: '999px',
                        background: ps.glow, border: `1px solid ${ps.accent}30`,
                        color: ps.accent,
                      }}>
                        {ps.label}
                      </span>
                    </div>

                    {/* Title */}
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px',
                      color: 'rgba(241,245,249,0.93)', letterSpacing: '-0.02em',
                      lineHeight: 1.25, marginBottom: '8px',
                    }}>
                      {item.title}
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '10px' }} />

                    {/* Description */}
                    <p style={{ fontSize: '13px', color: 'rgba(139,158,192,0.65)', lineHeight: 1.75, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function SchedulePage() {
  const heroRef    = useRef(null);
  const day1Ref    = useRef(null);
  const day2Ref    = useRef(null);
  const heroInView = useInView(heroRef,  { once: true });
  const day1InView = useInView(day1Ref,  { once: true, margin: '-40px' });
  const day2InView = useInView(day2Ref,  { once: true, margin: '-40px' });

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen" style={{ background: 'var(--color-surface-0)', position: 'relative' }}>

        {/* Full-page background */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
          <div style={{ position: 'absolute', top: '8%', left: '25%', width: '700px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(0,136,204,0.11) 0%, rgba(14,165,233,0.05) 35%, transparent 70%)', borderRadius: '50%', transform: 'translateX(-50%)' }} />
          <div style={{ position: 'absolute', top: '-5%', right: '-8%', width: '520px', height: '520px', background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 65%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,98,155,0.05) 0%, transparent 50%, rgba(34,211,238,0.03) 100%)' }} />
        </div>

        {/* Hero */}
        <section ref={heroRef} style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '56px' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

            <motion.div className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
              <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.85)' }}>26–27 September 2026</span>
              <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
            </motion.div>

            <motion.h1
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', marginBottom: '16px' }}
              initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.08 }}>
              <span className="text-white">Hackathon</span>{' '}
              <span className="text-gradient-ieee">Schedule.</span>
            </motion.h1>

            <motion.p
              style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: '520px', marginBottom: '36px' }}
              initial={{ opacity: 0, y: 14 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.18 }}>
              From check-in to prize distribution. Every moment counts in a 24-hour sprint.
            </motion.p>

            {/* Stats row */}
            <motion.div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
              initial={{ opacity: 0, y: 12 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.28 }}>
              {HERO_STATS.map((s, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '12px 20px', borderRadius: '14px',
                  background: 'linear-gradient(145deg, rgba(14,165,233,0.07), rgba(8,16,32,0.5))',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, rgba(34,211,238,0.4), transparent)' }} />
                  <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <s.icon style={{ width: '15px', height: '15px', color: 'rgba(34,211,238,0.8)' }} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(34,211,238,0.7)', letterSpacing: '0.02em' }}>{s.unit}</span>
                    </div>
                    <div style={{ fontSize: '10.5px', color: 'rgba(139,158,192,0.5)', marginTop: '2px', letterSpacing: '0.01em' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* Timeline */}
        <section style={{ position: 'relative', zIndex: 1, paddingBottom: '80px' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '760px' }}>

              <div ref={day1Ref}>
                <DaySection items={day1} dayLabel="Day 1" dateLabel="September 26, 2026" inView={day1InView} />
              </div>

              <div ref={day2Ref}>
                <DaySection items={day2} dayLabel="Day 2" dateLabel="September 27, 2026" inView={day2InView} />
              </div>

              {/* Note */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={day2InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                style={{
                  borderRadius: '14px',
                  background: 'linear-gradient(145deg, rgba(14,20,36,0.85), rgba(8,16,32,0.6))',
                  border: '1px solid rgba(34,211,238,0.12)',
                  backdropFilter: 'blur(16px)',
                  padding: '16px 20px',
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                  <Info style={{ width: '13px', height: '13px', color: 'rgba(34,211,238,0.65)' }} />
                </div>
                <p style={{ fontSize: '12.5px', color: 'rgba(139,158,192,0.6)', lineHeight: 1.75, margin: 0 }}>
                  <span style={{ color: 'rgba(241,245,249,0.8)', fontWeight: 600 }}>Schedule Notice — </span>
                  Timings are subject to minor adjustments. Final schedule will be communicated to registered teams via email and WhatsApp closer to the event date.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

'use client';



import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Download, CheckCircle2, XCircle, BookOpen, Scale,
  Shield, Lightbulb, Mic, MonitorSmartphone, Target,
  Wrench, BarChart3, AlertTriangle, Lock,
} from 'lucide-react';
import Link from 'next/link';

const ELIGIBILITY = [
  'Open to undergraduate and postgraduate students from recognized institutions.',
  'Each participant must carry a valid institutional ID for check-in.',
  'Teams of 2 to 4 members. One member must act as team leader.',
  'Each student may register with only one team.',
  'Remote participation is not permitted — this is an in-person event.',
];

const SUBMISSION = [
  'A brief written project summary (max 500 words)',
  'Presentation slides (PDF or PPTX)',
  'Working GitHub repository link with a descriptive README',
  'Live demo link or demonstration video (2–5 minutes)',
  'All code must be committed before the hacking end time (09:00 on Day 2)',
];

const DO = [
  'Use openly available datasets, APIs, and libraries — with proper attribution',
  'Seek help from mentors during designated mentoring sessions',
  'Respect your teammates, volunteers, organizers, and fellow participants',
  'Keep your workspace clean and return borrowed equipment',
  'Ensure your idea is original to this hackathon',
];

const DONT = [
  'Start coding before the official hacking start time (10:00 Day 1)',
  'Submit work created entirely before the event',
  "Plagiarize or use another team's existing solution",
  "Violate any sponsor's dataset license terms",
  'Engage in disruptive, offensive, or unsafe behavior',
];

const JUDGING = [
  { icon: Lightbulb,        label: 'Innovation',     weight: '20%', accent: 'rgba(34,211,238,1)',  glow: 'rgba(34,211,238,0.12)', desc: 'Originality of the concept and creativity in approach' },
  { icon: Target,           label: 'Feasibility',    weight: '20%', accent: 'rgba(99,102,241,1)',  glow: 'rgba(99,102,241,0.12)', desc: 'Technical practicality and real-world implementability' },
  { icon: BarChart3,        label: 'Impact',         weight: '20%', accent: 'rgba(245,158,11,1)',  glow: 'rgba(245,158,11,0.12)', desc: 'Social, environmental, or business value created' },
  { icon: Wrench,           label: 'Technical Depth',weight: '20%', accent: 'rgba(52,211,153,1)',  glow: 'rgba(52,211,153,0.12)', desc: 'Code quality, architecture, and technical soundness' },
  { icon: MonitorSmartphone,label: 'UX & Design',    weight: '10%', accent: 'rgba(251,113,133,1)', glow: 'rgba(251,113,133,0.12)',desc: 'User experience, accessibility, and interface quality' },
  { icon: Mic,              label: 'Pitch Quality',  weight: '10%', accent: 'rgba(0,136,204,1)',   glow: 'rgba(0,136,204,0.12)', desc: 'Clarity, storytelling, and conviction in final presentation' },
];

function SectionLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
      <div style={{
        width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
        background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.22)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 12px rgba(0,136,204,0.1)',
      }}>
        <Icon style={{ width: '17px', height: '17px', color: 'rgba(34,211,238,0.85)' }} />
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', color: 'rgba(241,245,249,0.93)', letterSpacing: '-0.02em', margin: 0 }}>
        {label}
      </h2>
    </div>
  );
}

export default function RulesSection() {
  const heroRef    = useRef(null);
  const bodyRef    = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const bodyInView = useInView(bodyRef, { once: true, margin: '-40px' });

  return (
    <>
      
      <section id="rules" style={{ position: 'relative' }}>

        {/* Full-page background — covered by layout.tsx */}

        {/* ── Hero ── */}
        <section ref={heroRef} style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '64px' }}>
          <div className="container" style={{ textAlign: 'center' }}>

            <motion.div className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
              <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.85)' }}>Rules & Guidelines</span>
              <div style={{ width: '20px', height: '1px', background: 'rgba(34,211,238,0.6)' }} />
            </motion.div>

            <motion.h1
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', marginBottom: '16px' }}
              initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.08 }}>
              <span className="text-white">Clear rules for</span>{' '}
              <span className="text-gradient-ieee">fair innovation.</span>
            </motion.h1>

            <motion.p
              style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 32px' }}
              initial={{ opacity: 0, y: 14 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.18 }}>
              Read the complete rules before registering. These guidelines ensure a fair, safe, and rewarding experience for all participants.
            </motion.p>



          </div>
        </section>

        {/* ── Body ── */}
        <section ref={bodyRef} style={{ position: 'relative', zIndex: 1, paddingBottom: '80px' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '900px', margin: '0 auto' }}>

              {/* Eligibility */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={bodyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                <SectionLabel icon={BookOpen} label="Eligibility & Team Rules" />
                <div style={{ borderRadius: '16px', background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', overflow: 'hidden' }}>
                  <div style={{ height: '2px', background: 'linear-gradient(90deg, rgba(0,136,204,0.7), rgba(34,211,238,0.3), transparent)' }} />
                  <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {ELIGIBILITY.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '14px 0', borderBottom: i < ELIGIBILITY.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0, background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'rgba(34,211,238,0.8)' }}>{i + 1}</span>
                        </div>
                        <span style={{ fontSize: '13.5px', color: 'rgba(139,158,192,0.75)', lineHeight: 1.7, paddingTop: '3px' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Submission */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={bodyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }}>
                <SectionLabel icon={Scale} label="Submission Requirements" />
                <div style={{ borderRadius: '16px', background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', overflow: 'hidden' }}>
                  <div style={{ height: '2px', background: 'linear-gradient(90deg, rgba(99,102,241,0.7), rgba(99,102,241,0.2), transparent)' }} />
                  <div style={{ padding: '24px 28px' }}>
                    <p style={{ fontSize: '13px', color: 'rgba(139,158,192,0.55)', lineHeight: 1.75, marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      Every team must submit the following before the hacking deadline. Incomplete submissions will be disqualified from evaluation.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                      {SUBMISSION.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 0', borderBottom: i < SUBMISSION.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                          <CheckCircle2 style={{ width: '15px', height: '15px', color: 'rgba(34,211,238,0.7)', flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '13.5px', color: 'rgba(139,158,192,0.75)', lineHeight: 1.7 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Code of Conduct */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={bodyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.16 }}>
                <SectionLabel icon={Shield} label="Code of Conduct" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                  {/* You Should */}
                  <div style={{ borderRadius: '16px', background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))', border: '1px solid rgba(52,211,153,0.12)', backdropFilter: 'blur(20px)', overflow: 'hidden' }}>
                    <div style={{ height: '2px', background: 'linear-gradient(90deg, rgba(52,211,153,0.7), transparent)' }} />
                    <div style={{ padding: '20px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <CheckCircle2 style={{ width: '16px', height: '16px', color: 'rgba(52,211,153,0.85)' }} />
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', color: 'rgba(241,245,249,0.9)', letterSpacing: '-0.01em' }}>You Should</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {DO.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(52,211,153,0.7)', flexShrink: 0, marginTop: '7px' }} />
                            <span style={{ fontSize: '12.5px', color: 'rgba(139,158,192,0.7)', lineHeight: 1.65 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* You Must Not */}
                  <div style={{ borderRadius: '16px', background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))', border: '1px solid rgba(251,113,133,0.12)', backdropFilter: 'blur(20px)', overflow: 'hidden' }}>
                    <div style={{ height: '2px', background: 'linear-gradient(90deg, rgba(251,113,133,0.7), transparent)' }} />
                    <div style={{ padding: '20px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <XCircle style={{ width: '16px', height: '16px', color: 'rgba(251,113,133,0.85)' }} />
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', color: 'rgba(241,245,249,0.9)', letterSpacing: '-0.01em' }}>You Must Not</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {DONT.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(251,113,133,0.7)', flexShrink: 0, marginTop: '7px' }} />
                            <span style={{ fontSize: '12.5px', color: 'rgba(139,158,192,0.7)', lineHeight: 1.65 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disqualification notice */}
                <div style={{ borderRadius: '14px', background: 'rgba(251,113,133,0.05)', border: '1px solid rgba(251,113,133,0.15)', padding: '14px 20px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: 'rgba(251,113,133,0.1)', border: '1px solid rgba(251,113,133,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <AlertTriangle style={{ width: '13px', height: '13px', color: 'rgba(251,113,133,0.8)' }} />
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'rgba(139,158,192,0.65)', lineHeight: 1.75, margin: 0 }}>
                    <span style={{ color: 'rgba(251,113,133,0.9)', fontWeight: 700 }}>Disqualification — </span>
                    Violations of the code of conduct, plagiarism, safety violations, or disruptive behavior may result in immediate disqualification. The organizing committee's decision is final.
                  </p>
                </div>
              </motion.div>

              {/* Judging Criteria */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={bodyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.24 }}>
                <SectionLabel icon={Scale} label="Judging Criteria" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {JUDGING.map((c, i) => (
                    <motion.div
                      key={c.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={bodyInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.38, delay: 0.28 + i * 0.06 }}
                      whileHover={{ y: -3, boxShadow: `0 0 28px ${c.glow}, 0 8px 24px rgba(0,0,0,0.3)` }}
                      style={{
                        borderRadius: '14px',
                        background: 'linear-gradient(145deg, rgba(14,20,36,0.9), rgba(8,16,32,0.65))',
                        border: '1px solid rgba(255,255,255,0.07)',
                        backdropFilter: 'blur(20px)',
                        padding: '20px',
                        position: 'relative', overflow: 'hidden',
                        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                        cursor: 'default',
                      }}>
                      <div style={{ height: '2px', position: 'absolute', top: 0, left: 0, right: 0, background: `linear-gradient(90deg, ${c.accent}, transparent)` }} />
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: c.glow, border: `1px solid ${c.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <c.icon style={{ width: '16px', height: '16px', color: c.accent }} />
                        </div>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: c.accent, letterSpacing: '-0.04em', lineHeight: 1 }}>{c.weight}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13.5px', color: 'rgba(241,245,249,0.9)', letterSpacing: '-0.01em', marginBottom: '6px' }}>{c.label}</div>
                      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '8px' }} />
                      <p style={{ fontSize: '12px', color: 'rgba(139,158,192,0.6)', lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>



            </div>
          </div>
        </section>

      </section>
      
    </>
  );
}

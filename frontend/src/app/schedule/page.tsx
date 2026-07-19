import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations/FadeIn';
import { Clock, MapPin, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule',
  description: 'The 48-hour timeline for PRISMTECH 2026. From the opening ceremony to the grand pitch and awards.',
};

const day1Schedule = [
  { time: '08:15 AM', title: 'Check-in & Kit Distribution', desc: 'Arrive at the venue, verify ID, and collect your participant kit and team badges.', color: '#00d4ff' },
  { time: '09:00 AM', title: 'Opening Ceremony', desc: 'Welcome address by IEEE leaders, rules overview, and the official release of Problem Statements.', color: '#8b5cf6' },
  { time: '10:00 AM', title: '🚀 Hacking Commences', desc: 'The 24-hour clock starts! Teams move to their designated hacking zones.', highlight: true, color: '#f59e0b' },
  { time: '12:00 PM', title: 'Round 1: Idea Scrutiny', desc: 'Mentors visit teams for a quick sanity check of your proposed solution architecture.', color: '#6366f1' },
  { time: '12:30 PM', title: 'Round 1 Results', desc: '75 teams advance to the next stage.', color: '#00d4ff' },
  { time: '01:00 PM', title: 'Lunch Break', desc: 'Refuel and recharge.', color: 'rgba(255,255,255,0.4)' },
  { time: '01:30 PM', title: 'The Spectrum Panel', desc: 'A 45-minute interactive panel with industry experts on the intersection of Hardware, Software, and Impact. (Open to all, including disqualified teams)', color: '#8b5cf6' },
  { time: '03:00 PM', title: 'Round 2: Technical Review', desc: 'Deep dive into your codebase and hardware schematics with technical mentors.', color: '#f59e0b' },
  { time: '03:45 PM', title: 'Round 2 Results', desc: '45 teams advance to continue hacking.', color: '#00d4ff' },
  { time: '07:30 PM', title: 'Dinner & Networking', desc: 'Dinner served at the venue.', color: 'rgba(255,255,255,0.4)' },
  { time: '09:00 PM', title: 'Round 3: Progress Check', desc: 'Late-night review of your MVP progress.', color: '#8b5cf6' },
  { time: '10:00 PM', title: 'Round 3 Results', desc: '15 teams advance to the final sprint.', color: '#f59e0b' },
];

const day2Schedule = [
  { time: '00:00 AM', title: 'The Graveyard Shift', desc: 'Deep focus time. Midnight snacks and coffee served.', color: '#8b5cf6' },
  { time: '06:00 AM', title: 'Round 4: Final Evaluation', desc: 'Jury evaluates the near-complete projects.', color: '#00d4ff' },
  { time: '07:10 AM', title: 'Finalists Announced', desc: 'The top 4 teams are selected for the Grand Pitch.', highlight: true, color: '#f59e0b' },
  { time: '07:30 AM', title: 'Breakfast', desc: 'Morning fuel for the final stretch.', color: 'rgba(255,255,255,0.4)' },
  { time: '09:00 AM', title: 'Code Freeze', desc: 'Hacking ends. No more commits or hardware modifications allowed.', color: '#6366f1' },
  { time: '09:15 AM', title: 'The Grand Pitch', desc: 'The top 4 teams pitch their solutions live to the grand jury and audience.', color: '#8b5cf6' },
  { time: '10:15 AM', title: '🏆 Awards Ceremony', desc: 'Winners announced, prizes distributed, and closing remarks.', highlight: true, color: '#f59e0b' },
  { time: '10:45 AM', title: 'Event Concludes', desc: 'See you next year!', color: 'rgba(255,255,255,0.4)' },
];

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: 'var(--color-surface-0)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.12) 0%, transparent 60%)',
            }}
          />
          <div className="container relative z-10 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                Event Timeline
              </div>
              <h1 className="font-display font-800 text-5xl sm:text-6xl text-white mb-5">
                The 48-Hour{' '}
                <span className="text-gradient-cyan-violet">Blueprint</span>
              </h1>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                A non-stop journey from ideation to execution. Four rounds of intense scrutiny,
                expert panels, and the ultimate test of endurance.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="section border-t border-white/5" style={{ background: 'var(--color-surface-1)' }}>
          <div className="container max-w-4xl">
            {/* Day 1 */}
            <div className="mb-16">
              <FadeIn className="flex items-center gap-4 mb-10 pb-4 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                  <span className="font-display font-700 text-[#00d4ff]">01</span>
                </div>
                <div>
                  <h2 className="font-display font-700 text-3xl text-white">Day 1: The Launch</h2>
                  <p className="text-sm text-white/50">September 26, 2026</p>
                </div>
              </FadeIn>

              <StaggerChildren className="space-y-6">
                {day1Schedule.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-6 relative">
                      {i !== day1Schedule.length - 1 && (
                        <div className="absolute left-[11px] top-8 bottom-[-24px] w-px bg-white/5" />
                      )}
                      <div
                        className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1 border-2"
                        style={{ borderColor: item.color, background: item.highlight ? item.color : 'transparent' }}
                      >
                        {item.highlight && (
                          <div className="absolute w-6 h-6 rounded-full animate-ping opacity-40" style={{ background: item.color }} />
                        )}
                      </div>
                      <div className="flex-1 pb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <time className="text-sm font-medium" style={{ color: item.color }}>
                            {item.time}
                          </time>
                        </div>
                        <h3 className="font-display font-700 text-lg text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>

            {/* Day 2 */}
            <div>
              <FadeIn className="flex items-center gap-4 mb-10 pb-4 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f59e0b]/10 border border-[#f59e0b]/20">
                  <span className="font-display font-700 text-[#f59e0b]">02</span>
                </div>
                <div>
                  <h2 className="font-display font-700 text-3xl text-white">Day 2: The Final Projection</h2>
                  <p className="text-sm text-white/50">September 27, 2026</p>
                </div>
              </FadeIn>

              <StaggerChildren className="space-y-6">
                {day2Schedule.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-6 relative">
                      {i !== day2Schedule.length - 1 && (
                        <div className="absolute left-[11px] top-8 bottom-[-24px] w-px bg-white/5" />
                      )}
                      <div
                        className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1 border-2"
                        style={{ borderColor: item.color, background: item.highlight ? item.color : 'transparent' }}
                      >
                        {item.highlight && (
                          <div className="absolute w-6 h-6 rounded-full animate-ping opacity-40" style={{ background: item.color }} />
                        )}
                      </div>
                      <div className="flex-1 pb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <time className="text-sm font-medium" style={{ color: item.color }}>
                            {item.time}
                          </time>
                        </div>
                        <h3 className="font-display font-700 text-lg text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </section>

        {/* Info Box */}
        <section className="py-12 border-t border-white/5" style={{ background: 'var(--color-surface-0)' }}>
          <div className="container max-w-4xl">
            <FadeIn>
              <div className="p-6 rounded-2xl glass border border-white/10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-[#8b5cf6]" />
                </div>
                <div>
                  <h3 className="font-display font-700 text-xl text-white mb-2">Notice for Disqualified Teams</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    If your team does not advance in a round, your journey doesn't end! You are encouraged to stay,
                    attend the Spectrum Panel, network with mentors, and visit the LinkedIn/CV Clinic station.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

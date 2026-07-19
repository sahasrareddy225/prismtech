import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule | PRISMTECH 2026',
  description: 'The complete 24-hour itinerary for PRISMTECH 2026. From the opening ceremony to the grand pitch and awards.',
};

const day1Schedule = [
  { time: '08:15 AM - 09:00 AM', title: 'Check-in & Kit Distribution', desc: 'Arrive at the venue, verify ID, and collect your participant kit and team badges.', color: 'var(--color-prism-cyan)' },
  { time: '09:00 AM - 10:00 AM', title: 'Opening Ceremony', desc: 'Welcome address by IEEE leaders, rules overview, and the official release of Problem Statements.', color: 'var(--color-prism-violet)' },
  { time: '10:00 AM onwards', title: '🚀 Hacking Commences', desc: 'The 24-hour clock starts! Teams move to their designated hacking zones.', highlight: true, color: 'var(--color-prism-gold)' },
  { time: '12:00 PM - 12:30 PM', title: 'Round 1: Idea Scrutiny', desc: 'Mentors visit teams for a quick sanity check of your proposed solution architecture.', color: 'var(--color-ieee-blue-light)' },
  { time: '12:30 PM - 01:00 PM', title: 'Round 1 Results', desc: 'Teams advancing to Round 2 announced.', color: 'var(--color-prism-cyan)' },
  { time: '01:00 PM - 01:30 PM', title: 'Lunch Break', desc: 'Refuel and recharge.', color: 'rgba(255,255,255,0.4)' },
  { time: '01:30 PM - 02:15 PM', title: 'The Spectrum Panel', desc: 'A 45-minute interactive panel with industry experts on the intersection of Hardware, Software, and Impact. Open to all participants.', color: 'var(--color-prism-violet)' },
  { time: '03:00 PM - 03:45 PM', title: 'Round 2: Technical Review', desc: 'Deep dive into your codebase and hardware schematics with technical mentors.', color: 'var(--color-prism-gold)' },
  { time: '03:45 PM - 04:00 PM', title: 'Round 2 Results', desc: 'Teams advancing to continue hacking.', color: 'var(--color-prism-cyan)' },
  { time: '07:30 PM - 08:30 PM', title: 'Dinner & Networking', desc: 'Dinner served at the venue.', color: 'rgba(255,255,255,0.4)' },
  { time: '09:00 PM - 10:00 PM', title: 'Round 3: Progress Check', desc: 'Late-night review of your MVP progress.', color: 'var(--color-prism-violet)' },
  { time: '10:00 PM - 10:30 PM', title: 'Round 3 Results', desc: 'Top teams advance to the final sprint.', color: 'var(--color-prism-gold)' },
];

const day2Schedule = [
  { time: '00:00 AM - 06:00 AM', title: 'The Graveyard Shift', desc: 'Deep focus time. Midnight snacks and coffee served continuously.', color: 'var(--color-prism-violet)' },
  { time: '06:00 AM - 07:10 AM', title: 'Round 4: Final Evaluation', desc: 'Jury evaluates the near-complete projects.', color: 'var(--color-prism-cyan)' },
  { time: '07:10 AM - 07:30 AM', title: 'Finalists Announced', desc: 'The top 4 teams are selected for the Grand Pitch.', highlight: true, color: 'var(--color-prism-gold)' },
  { time: '07:30 AM - 08:30 AM', title: 'Breakfast', desc: 'Morning fuel for the final stretch.', color: 'rgba(255,255,255,0.4)' },
  { time: '09:00 AM', title: 'Code Freeze', desc: 'Hacking ends. No more commits or hardware modifications allowed.', color: 'var(--color-ieee-blue-light)' },
  { time: '09:15 AM - 10:15 AM', title: 'The Grand Pitch', desc: 'The top 4 teams pitch their solutions live to the grand jury and audience.', color: 'var(--color-prism-violet)' },
  { time: '10:15 AM - 10:45 AM', title: '🏆 Awards Ceremony', desc: 'Winners announced, prizes distributed, and closing remarks.', highlight: true, color: 'var(--color-prism-gold)' },
  { time: '10:45 AM', title: 'Event Concludes', desc: 'See you next year!', color: 'rgba(255,255,255,0.4)' },
];

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-20 bg-[var(--color-surface-0)] min-h-screen">
        
        {/* Page Hero */}
        <div className="container relative z-10 pt-10 pb-16 border-b border-white/5">
          <Badge variant="outline" className="mb-6">The Itinerary</Badge>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-6">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-prism-cyan)] to-[var(--color-prism-violet)] pb-2 px-1">Schedule</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl">
            A non-stop 24-hour journey from ideation to execution. Four rounds of intense scrutiny, expert panels, and the ultimate test of endurance.
          </p>
        </div>

        <div className="container py-16 space-y-24">
          
          {/* Day 1 Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-prism-cyan)]/10 border border-[var(--color-prism-cyan)]/20 shadow-inner">
                <span className="font-display font-bold text-[var(--color-prism-cyan)]">01</span>
              </div>
              <div>
                <h2 className="font-display font-bold text-3xl text-white">Day 1: The Launch</h2>
                <p className="text-[var(--color-text-secondary)] font-medium tracking-wide">September 26, 2026</p>
              </div>
            </div>

            <div className="relative border-l border-white/5 ml-6 pl-8 space-y-10">
              {day1Schedule.map((item, i) => (
                <div key={i} className="relative group">
                  {/* Timeline Dot */}
                  <div 
                    className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 bg-[var(--color-surface-0)] z-10 transition-colors"
                    style={{ borderColor: item.color }}
                  >
                    {item.highlight && (
                      <div className="absolute inset-0 rounded-full animate-ping opacity-50" style={{ background: item.color }} />
                    )}
                  </div>

                  <Card variant="glass" className={`hover:border-white/10 transition-colors ${item.highlight ? 'border-[var(--color-prism-gold)]/20' : ''}`}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <h3 className={`font-display font-semibold text-xl ${item.highlight ? 'text-white' : 'text-white/90'}`}>
                          {item.title}
                        </h3>
                        <Badge variant="secondary" className="w-fit flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {item.time}
                        </Badge>
                      </div>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Day 2 Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-prism-gold)]/10 border border-[var(--color-prism-gold)]/20 shadow-inner">
                <span className="font-display font-bold text-[var(--color-prism-gold)]">02</span>
              </div>
              <div>
                <h2 className="font-display font-bold text-3xl text-white">Day 2: The Finale</h2>
                <p className="text-[var(--color-text-secondary)] font-medium tracking-wide">September 27, 2026</p>
              </div>
            </div>

            <div className="relative border-l border-white/5 ml-6 pl-8 space-y-10">
              {day2Schedule.map((item, i) => (
                <div key={i} className="relative group">
                  {/* Timeline Dot */}
                  <div 
                    className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 bg-[var(--color-surface-0)] z-10 transition-colors"
                    style={{ borderColor: item.color }}
                  >
                    {item.highlight && (
                      <div className="absolute inset-0 rounded-full animate-ping opacity-50" style={{ background: item.color }} />
                    )}
                  </div>

                  <Card variant="glass" className={`hover:border-white/10 transition-colors ${item.highlight ? 'border-[var(--color-prism-gold)]/20' : ''}`}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <h3 className={`font-display font-semibold text-xl ${item.highlight ? 'text-white' : 'text-white/90'}`}>
                          {item.title}
                        </h3>
                        <Badge variant="secondary" className="w-fit flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {item.time}
                        </Badge>
                      </div>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}

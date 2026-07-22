import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule | PRISMTECH 2026',
  description: 'Full timeline for PRISMTECH 2026: from check-in at 08:15 to the awards ceremony. 26–27 September 2026.',
};

const SCHEDULE = [
  { time: '08:15', title: 'Check-in & Kit Distribution', desc: 'College ID verification; teams receive Prism Packs (badges, Wi-Fi codes, swag).', phase: 'Pre-Hackathon', day: 'Day 1' },
  { time: '09:00', title: 'Opening Ceremony', desc: 'High-energy kickoff, IEEE society intros, and problem statement release.', phase: 'Pre-Hackathon', day: 'Day 1' },
  { time: '10:00', title: 'Hacking Commences', desc: 'The 24-hour build clock starts. Round 1: Blueprint Phase begins.', phase: 'Round 1', day: 'Day 1' },
  { time: '12:30', title: 'Round 1 Results', desc: 'Teams advancing to Round 2 announced, followed by networking lunch.', phase: 'Round 1', day: 'Day 1' },
  { time: '15:00', title: 'Round 2: Technical Deep Dive', desc: 'Qualified teams present architecture and progress to a senior jury.', phase: 'Round 2', day: 'Day 1' },
  { time: '23:00', title: 'Round 3', desc: 'Qualified teams present updated work to the jury.', phase: 'Round 3', day: 'Day 1' },
  { time: '00:00', title: 'The Graveyard Shift', desc: 'Focus time with quiet zones active; coffee and tea served through 06:30.', phase: 'Overnight', day: 'Day 2' },
  { time: '06:00', title: 'Round 4: Finalists Circle', desc: 'Final evaluation round to select teams for the grand pitch.', phase: 'Round 4', day: 'Day 2' },
  { time: '09:00', title: 'Hacking Ends + Grand Pitch', desc: 'All code pushed to repositories; top teams present on the main stage.', phase: 'Finals', day: 'Day 2' },
  { time: '10:15', title: 'Awards Ceremony', desc: 'Prizes for track winners, runners-up, and the PrismTech Overall Champion.', phase: 'Closing', day: 'Day 2' },
];

const PHASE_BADGE: Record<string, string> = {
  'Pre-Hackathon': 'badge-blue',
  'Round 1': 'badge-violet',
  'Round 2': 'badge-gold',
  'Round 3': 'badge-gold',
  'Overnight': 'badge-neutral',
  'Round 4': 'badge-cyan',
  'Finals': 'badge-neutral',
  'Closing': 'badge-gold',
};

// Group by day
const day1 = SCHEDULE.filter(s => s.day === 'Day 1');
const day2 = SCHEDULE.filter(s => s.day === 'Day 2');

function ScheduleGroup({ items, title }: { items: typeof SCHEDULE; title: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xs font-bold tracking-widest uppercase text-[var(--color-ieee-blue-light)]">{title}</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute top-5 bottom-5"
          style={{
            left: '15px',
            width: '1px',
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.07) 10%, rgba(255,255,255,0.07) 90%, transparent)',
          }}
        />

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex gap-5">
              {/* Dot */}
              <div className="flex flex-col items-center shrink-0 pt-[22px]">
                <div
                  className="w-[7px] h-[7px] rounded-full bg-[var(--color-ieee-blue-light)] relative z-10"
                  style={{ boxShadow: '0 0 0 2px var(--color-surface-0)' }}
                />
              </div>

              {/* Card */}
              <div className="flex-1 glass-card p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-mono text-sm font-bold text-white tabular-nums">{item.time}</span>
                  <span className={`badge ${PHASE_BADGE[item.phase] || 'badge-neutral'}`}>{item.phase}</span>
                </div>
                <h2 className="font-semibold text-[var(--color-text-primary)] text-sm mb-1.5">{item.title}</h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[var(--color-surface-0)]">

        {/* Page Hero */}
        <section className="pt-28 pb-12 border-b border-white/[0.05]">
          <div className="container">
            <span className="eyebrow">26–27 September 2026</span>
            <h1
              className="text-[var(--color-text-primary)] mt-2 mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Hackathon <span className="text-gradient-ieee">Schedule.</span>
            </h1>
            <p className="text-[var(--color-text-secondary)] text-base leading-relaxed max-w-xl">
              From check-in to prize distribution. Every moment counts in a 24-hour sprint.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <div className="section">
          <div className="container">
            <div className="max-w-2xl">
              <ScheduleGroup items={day1} title="Day 1 — September 26, 2026" />
              <ScheduleGroup items={day2} title="Day 2 — September 27, 2026" />
            </div>

            {/* Note */}
            <div className="max-w-2xl mt-4">
              <div className="glass-card p-4 border-[var(--color-ieee-blue)]/20">
                <p className="text-sm text-[var(--color-text-secondary)]">
                  <strong className="text-[var(--color-text-primary)]">Note:</strong> The schedule is subject to minor adjustments. Final timings will be communicated to registered teams via email and WhatsApp closer to the event date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

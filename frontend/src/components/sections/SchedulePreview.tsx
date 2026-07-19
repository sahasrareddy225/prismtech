'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const day1Highlights = [
  { time: '08:15 AM', title: 'Check-in & Kit Distribution', tag: 'Day 1', color: '#00d4ff' },
  { time: '09:00 AM', title: 'Opening Ceremony & Problem Statements Released', tag: 'Launch', color: '#8b5cf6' },
  { time: '10:00 AM', title: '🚀 Hacking Commences!', tag: 'Round 1', color: '#f59e0b', highlight: true },
  { time: '12:30 PM', title: 'Round 1 Results — 75 Teams Advance', tag: 'Results', color: '#00d4ff' },
  { time: '01:30 PM', title: 'The Spectrum Panel Talk', tag: 'Panel', color: '#8b5cf6' },
  { time: '03:45 PM', title: 'Round 2 Results — 45 Teams Advance', tag: 'Results', color: '#f59e0b' },
  { time: '07:30 PM', title: 'Dinner & Lightning Talks', tag: 'Social', color: '#6366f1' },
];

const day2Highlights = [
  { time: '00:00 AM', title: 'The Graveyard Shift — Deep Focus Zone', tag: 'Day 2', color: '#8b5cf6' },
  { time: '07:10 AM', title: 'Finalists Circle Announced — 4 Teams', tag: 'Round 4', color: '#f59e0b', highlight: true },
  { time: '09:00 AM', title: 'Hacking Ends — Code Freeze', tag: 'End', color: '#00d4ff' },
  { time: '10:15 AM', title: '🏆 Awards Ceremony', tag: 'Awards', color: '#f59e0b', highlight: true },
];

interface ScheduleItemProps {
  time: string;
  title: string;
  tag: string;
  color: string;
  highlight?: boolean;
  isLast?: boolean;
}

function ScheduleItem({ time, title, tag, color, highlight, isLast }: ScheduleItemProps) {
  return (
    <div className="flex gap-4 relative">
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-[11px] top-6 bottom-0 w-px"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        />
      )}

      {/* Dot */}
      <div
        className="relative mt-1 w-[23px] h-[23px] rounded-full flex-shrink-0 flex items-center justify-center border-2"
        style={{
          borderColor: color,
          background: highlight ? color : 'rgba(13, 17, 23, 0.8)',
        }}
      >
        {highlight && (
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-40"
            style={{ background: color }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-5">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-md"
            style={{ color, background: `${color}15` }}
          >
            {tag}
          </span>
          <time className="text-xs text-white/30 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {time}
          </time>
        </div>
        <p
          className="text-sm font-medium"
          style={{ color: highlight ? '#fff' : 'rgba(255,255,255,0.65)' }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default function SchedulePreview() {
  return (
    <section
      className="section"
      style={{ background: 'var(--color-surface-0)' }}
      aria-labelledby="schedule-heading"
    >
      <div className="container">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
            Timeline
          </div>
          <h2
            id="schedule-heading"
            className="font-display font-800 text-4xl sm:text-5xl text-white mb-4"
          >
            48 Hours,{' '}
            <span className="text-gradient-cyan-violet">4 Rounds</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From the opening ceremony to the final grand pitch — every moment of PRISMTECH is crafted
            for intensity, learning, and celebration.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Day 1 */}
          <FadeIn
            className="p-7 rounded-2xl glass border border-white/5"
            delay={0.1}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="flex-1">
                <h3 className="font-display font-700 text-lg text-white">Day 1</h3>
                <p className="text-sm text-white/40">The Launch & Scrutiny · Sept 26</p>
              </div>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
                10:00 AM Start
              </span>
            </div>

            <div>
              {day1Highlights.map((item, i) => (
                <ScheduleItem
                  key={item.time}
                  {...item}
                  isLast={i === day1Highlights.length - 1}
                />
              ))}
            </div>
          </FadeIn>

          {/* Day 2 */}
          <FadeIn
            className="p-7 rounded-2xl glass border border-white/5"
            delay={0.2}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="flex-1">
                <h3 className="font-display font-700 text-lg text-white">Day 2</h3>
                <p className="text-sm text-white/40">The Final Projection · Sept 27</p>
              </div>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
                10:45 AM End
              </span>
            </div>

            <div>
              {day2Highlights.map((item, i) => (
                <ScheduleItem
                  key={item.time}
                  {...item}
                  isLast={i === day2Highlights.length - 1}
                />
              ))}
            </div>

            {/* Special features box */}
            <div
              className="mt-6 p-4 rounded-xl border"
              style={{ background: 'rgba(139, 92, 246, 0.05)', borderColor: 'rgba(139, 92, 246, 0.15)' }}
            >
              <p className="text-xs font-medium text-[#8b5cf6] mb-2">💡 For Disqualified Teams</p>
              <p className="text-xs text-white/50 leading-relaxed">
                LinkedIn Station · Tech CV Clinic · Spectrum Panel — stay engaged, keep learning.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn className="text-center mt-10">
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/70 glass border border-white/10 hover:text-white hover:bg-white/5 transition-all"
          >
            View Full Schedule
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

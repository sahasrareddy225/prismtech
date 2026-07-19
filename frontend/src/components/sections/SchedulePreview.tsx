'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';

const scheduleData = [
  { time: '08:15 AM', title: 'Check-in & Kit Distribution', tag: 'Day 1', color: 'var(--color-prism-cyan)' },
  { time: '09:00 AM', title: 'Opening Ceremony & Problem Statements', tag: 'Launch', color: 'var(--color-prism-violet)' },
  { time: '10:00 AM', title: 'Hacking Commences!', tag: 'Round 1', color: 'var(--color-prism-gold)', highlight: true },
  { time: '12:30 PM', title: 'Round 1 Results — 75 Teams Advance', tag: 'Results', color: 'var(--color-prism-cyan)' },
  { time: '03:45 PM', title: 'Round 2 Results — 45 Teams Advance', tag: 'Results', color: 'var(--color-prism-violet)' },
  { time: '07:10 AM', title: 'Finalists Circle Announced', tag: 'Day 2', color: 'var(--color-prism-gold)', highlight: true },
  { time: '10:15 AM', title: 'Awards Ceremony', tag: 'Awards', color: 'var(--color-prism-cyan)', highlight: true },
];

export default function SchedulePreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="schedule" className="section relative bg-[var(--color-surface-1)]" ref={containerRef}>
      <div className="container max-w-4xl">
        
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <Badge variant="outline" className="mb-6">The 24-Hour Sprint</Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            Event Timeline
          </h2>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
          
          {/* Animated Glowing Line */}
          <motion.div 
            className="absolute left-[27px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[var(--color-prism-cyan)] via-[var(--color-prism-violet)] to-[var(--color-prism-gold)] -translate-x-1/2 shadow-[0_0_15px_rgba(124,58,237,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {scheduleData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[27px] md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-surface-1)] border-2 -translate-x-1/2 z-10" style={{ borderColor: item.color }}>
                    {item.highlight && (
                      <div className="absolute inset-0 rounded-full animate-ping opacity-50" style={{ background: item.color }} />
                    )}
                  </div>

                  {/* Empty space for desktop alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`md:${isEven ? 'pr-12' : 'pl-12'}`}
                    >
                      <Card variant={item.highlight ? 'solid' : 'glass'} className={`relative overflow-hidden ${item.highlight ? 'border-[var(--color-prism-gold)]/20' : ''}`}>
                        {item.highlight && (
                          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: `linear-gradient(135deg, transparent, ${item.color})` }} />
                        )}
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span 
                              className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-black/40 border border-white/5"
                              style={{ color: item.color }}
                            >
                              {item.tag}
                            </span>
                            <span className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1 font-medium">
                              <Clock className="w-3 h-3" />
                              {item.time}
                            </span>
                          </div>
                          <h3 className={`font-display font-semibold ${item.highlight ? 'text-xl text-white' : 'text-lg text-white/90'}`}>
                            {item.title}
                          </h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

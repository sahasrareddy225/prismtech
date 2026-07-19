'use client';

import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';
import { Instagram, Linkedin } from '@/components/icons/BrandIcons';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations/FadeIn';

const societyColors: Record<string, string> = {
  STUDENT_BRANCH: '#006fba',
  PHOTONICS: '#00d4ff',
  CS: '#8b5cf6',
  WIE: '#f59e0b',
};

const societyLabels: Record<string, string> = {
  STUDENT_BRANCH: 'IEEE Student Branch',
  PHOTONICS: 'IEEE Photonics',
  CS: 'IEEE Computer Society',
  WIE: 'IEEE WIE',
};

// Placeholder team data (replaced by API in Phase 2+)
const coreTeam = [
  {
    id: 1,
    name: 'Dr. Sai Sudha Gadde',
    title: 'Branch Counselor',
    society: 'STUDENT_BRANCH',
    isFeatured: true,
    college: 'KL University (KLH) Hyderabad',
    linkedinUrl: '#',
    instagramHandle: null,
  },
  {
    id: 2,
    name: 'Event Head',
    title: 'Event Coordinator',
    society: 'STUDENT_BRANCH',
    isFeatured: false,
    college: 'KL University (KLH)',
    linkedinUrl: '#',
    instagramHandle: null,
  },
  {
    id: 3,
    name: 'Photonics Lead',
    title: 'Track Head — Optic Stream',
    society: 'PHOTONICS',
    isFeatured: false,
    college: 'KL University (KLH)',
    linkedinUrl: '#',
    instagramHandle: null,
  },
  {
    id: 4,
    name: 'CS Lead',
    title: 'Track Head — Neural Stream',
    society: 'CS',
    isFeatured: false,
    college: 'KL University (KLH)',
    linkedinUrl: '#',
    instagramHandle: null,
  },
  {
    id: 5,
    name: 'WIE Lead',
    title: 'Track Head — Social Stream',
    society: 'WIE',
    isFeatured: false,
    college: 'KL University (KLH)',
    linkedinUrl: '#',
    instagramHandle: null,
  },
];

interface TeamCardProps {
  member: typeof coreTeam[0];
}

function TeamCard({ member }: TeamCardProps) {
  const color = societyColors[member.society];
  const label = societyLabels[member.society];

  return (
    <div
      className="group relative flex flex-col p-5 rounded-2xl glass border border-white/5 hover:border-white/10 card-hover transition-all"
    >
      {/* Avatar */}
      <div className="mb-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold"
          style={{ background: `${color}20`, border: `2px solid ${color}30`, color }}
        >
          {member.name.charAt(0)}
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-display font-700 text-base text-white mb-1">{member.name}</h3>
        <p className="text-xs text-white/50 mb-3">{member.title}</p>
        <span
          className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ color, background: `${color}15` }}
        >
          {label}
        </span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-colors"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        )}
        {member.instagramHandle && (
          <a
            href={`https://instagram.com/${member.instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-colors"
            aria-label={`${member.name}'s Instagram`}
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function TeamSection() {
  const featured = coreTeam.filter((m) => m.isFeatured);
  const others = coreTeam.filter((m) => !m.isFeatured);

  return (
    <section
      className="section"
      style={{ background: 'var(--color-surface-1)' }}
      aria-labelledby="team-heading"
    >
      <div className="container">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/50 glass border border-white/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
            The People Behind PRISMTECH
          </div>
          <h2
            id="team-heading"
            className="font-display font-800 text-4xl sm:text-5xl text-white mb-4"
          >
            Meet the{' '}
            <span className="text-gradient-cyan-violet">Organizers</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            PRISMTECH is built by passionate IEEE members dedicated to creating
            an unforgettable hackathon experience.
          </p>
        </FadeIn>

        {/* Featured (Branch Counselor) */}
        {featured.length > 0 && (
          <FadeIn className="flex justify-center mb-8">
            <div className="max-w-sm w-full">
              <div
                className="relative p-6 rounded-2xl glass border overflow-hidden"
                style={{ borderColor: 'rgba(0, 111, 186, 0.3)' }}
              >
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at top, rgba(0, 111, 186, 0.5) 0%, transparent 60%)',
                  }}
                />
                <div className="relative z-10 flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                    style={{ background: 'rgba(0, 111, 186, 0.2)', border: '2px solid rgba(0, 111, 186, 0.3)', color: '#006fba' }}
                  >
                    {featured[0].name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-lg text-white">{featured[0].name}</h3>
                    <p className="text-sm text-white/50">{featured[0].title}</p>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block"
                      style={{ color: '#006fba', background: 'rgba(0, 111, 186, 0.15)' }}
                    >
                      IEEE KLH Student Branch
                    </span>
                  </div>
                </div>
                <div className="relative z-10 flex gap-2">
                  <a
                    href={featured[0].linkedinUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-medium text-white/60 glass border border-white/10 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Team Grid */}
        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {others.map((member) => (
            <StaggerItem key={member.id}>
              <TeamCard member={member} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* CTA */}
        <FadeIn className="text-center mt-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/70 glass border border-white/10 hover:text-white hover:bg-white/5 transition-all"
            >
              <Users className="w-4 h-4" />
              Meet Full Team
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/participants"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/70 glass border border-white/10 hover:text-white hover:bg-white/5 transition-all"
            >
              View Participants
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

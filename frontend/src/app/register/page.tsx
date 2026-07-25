'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Member {
  fullName: string;
  email: string;
  rollNumber: string;
}

interface TeamInfo {
  teamName: string;
  teamSize: number;
}

const EMPTY_MEMBER: Member = { fullName: '', email: '', rollNumber: '' };

export default function RegisterPage() {
  const [step, setStep] = useState<'team-info' | 'members'>('team-info');
  const [teamInfo, setTeamInfo] = useState<TeamInfo>({ teamName: '', teamSize: 2 });
  const [members, setMembers] = useState<Member[]>([{ ...EMPTY_MEMBER }]);
  const [activeMember, setActiveMember] = useState(0);

  // Max additional members = teamSize - 1 (leader is separate)
  const maxMembers = teamInfo.teamSize - 1;
  const canAddMore = members.length < maxMembers;

  const addMember = () => {
    if (!canAddMore) return;
    setMembers(prev => [...prev, { ...EMPTY_MEMBER }]);
    setActiveMember(members.length);
  };

  const removeMember = (idx: number) => {
    setMembers(prev => prev.filter((_, i) => i !== idx));
    setActiveMember(prev => (prev >= idx && prev > 0 ? prev - 1 : prev));
  };

  const updateMember = (field: keyof Member, value: string) => {
    setMembers(prev => prev.map((m, i) => i === activeMember ? { ...m, [field]: value } : m));
  };

  const member = members[activeMember];

  // ── Step 1: Team Information ──────────────────────────
  if (step === 'team-info') {
    return (
      <>
        <Navbar />
        <main id="main-content" className="min-h-screen flex items-center justify-center py-16 px-4">
          <Card variant="solid" className="w-full max-w-md">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="font-display text-xl font-semibold text-white mb-1">Team Information</h2>
                <p className="text-sm text-[var(--color-text-secondary)]">Set up your team details before adding members.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="form-label">Team Name <span className="text-[var(--color-prism-rose)]">*</span></label>
                  <input
                    className="form-input"
                    placeholder="Your team name"
                    value={teamInfo.teamName}
                    onChange={e => setTeamInfo(p => ({ ...p, teamName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="form-label">Team Size <span className="text-[var(--color-prism-rose)]">*</span></label>
                  <select
                    className="form-input"
                    value={teamInfo.teamSize}
                    onChange={e => setTeamInfo(p => ({ ...p, teamSize: Number(e.target.value) }))}
                  >
                    {[2, 3, 4].map(n => (
                      <option key={n} value={n}>{n} members</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Button variant="primary" className="flex-1" onClick={() => setStep('members')} disabled={!teamInfo.teamName.trim()}>
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </>
    );
  }

  // ── Step 2: Team Members ──────────────────────────────
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-lg">

          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-6 px-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-surface-4)] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="var(--color-ieee-blue-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xs text-[var(--color-text-muted)] font-medium">Team Info</span>
            </div>
            <div className="flex-1 h-px bg-[var(--color-surface-4)]" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-ieee-blue-light)] flex items-center justify-center text-white text-[10px] font-bold">2</div>
              <span className="text-xs text-white font-medium">Team Members</span>
            </div>
          </div>

          <Card variant="solid" className="w-full">
            <CardContent className="p-8">

              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="font-display text-xl font-semibold text-white">Team Members</h2>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                    Add {maxMembers === 1 ? '1 more member' : `1–${maxMembers} more members`}{' '}
                    <span className="text-[var(--color-text-muted)]">(total team size: {teamInfo.teamSize})</span>
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-ieee-blue-glow)] text-[var(--color-ieee-blue-light)] border border-[rgba(0,136,204,0.2)] shrink-0">
                  {members.length}/{maxMembers}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-[var(--color-surface-4)] my-5" />

              {/* Member tabs row */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {members.map((m, i) => {
                  const filled = m.fullName.trim() !== '';
                  const isActive = activeMember === i;
                  return (
                    <div key={i} className="flex items-center gap-1">
                      <button
                        onClick={() => setActiveMember(i)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          isActive
                            ? 'bg-[var(--color-ieee-blue-light)] text-white shadow-[0_0_12px_rgba(0,136,204,0.3)]'
                            : 'bg-[var(--color-surface-3)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-4)] hover:text-white'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          filled ? 'bg-[var(--color-prism-green)]' : isActive ? 'bg-white/50' : 'bg-[var(--color-text-muted)]'
                        }`} />
                        Member {i + 2}
                      </button>
                      {members.length > 1 && (
                        <button
                          onClick={() => removeMember(i)}
                          className="w-5 h-5 flex items-center justify-center rounded-full text-[var(--color-text-muted)] hover:bg-[rgba(251,113,133,0.12)] hover:text-[var(--color-prism-rose)] transition-all text-[10px]"
                          aria-label={`Remove Member ${i + 2}`}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  );
                })}

                {canAddMore && (
                  <button
                    onClick={addMember}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-dashed border-[var(--color-surface-5)] text-[var(--color-text-muted)] hover:border-[var(--color-ieee-blue-light)] hover:text-[var(--color-ieee-blue-light)] hover:bg-[var(--color-ieee-blue-glow)] transition-all"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Add Member
                  </button>
                )}
              </div>

              {/* Active member form */}
              <div className="rounded-xl border border-[var(--color-surface-4)] bg-[var(--color-surface-1)] p-5">
                <p className="text-xs font-semibold text-[var(--color-ieee-blue-light)] uppercase tracking-widest mb-4">
                  Member {activeMember + 2}
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="form-label">Full Name <span className="text-[var(--color-prism-rose)]">*</span></label>
                    <input
                      className="form-input"
                      placeholder="Full name"
                      value={member.fullName}
                      onChange={e => updateMember('fullName', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address <span className="text-[var(--color-prism-rose)]">*</span></label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="member@college.edu"
                      value={member.email}
                      onChange={e => updateMember('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Roll Number <span className="text-[var(--color-prism-rose)]">*</span></label>
                    <input
                      className="form-input"
                      placeholder="Roll / Reg. No."
                      value={member.rollNumber}
                      onChange={e => updateMember('rollNumber', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <Button variant="secondary" className="flex-1" onClick={() => setStep('team-info')}>Back</Button>
                <Button variant="primary" className="flex-1">Continue</Button>
              </div>

            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}

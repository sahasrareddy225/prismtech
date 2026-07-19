import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Zap, Users, Target, Clock, FileUp, Bell, LogOut, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Mock Data
const teamInfo = {
  name: 'Binary Beasts',
  id: 'PRISM-2026-X7K9',
  track: 'Neural Stream',
  status: 'Approved',
  college: 'KL University',
};

const members = [
  { name: 'John Doe', role: 'Leader', email: 'john@example.com' },
  { name: 'Jane Smith', role: 'Member', email: 'jane@example.com' },
  { name: 'Alex Johnson', role: 'Member', email: 'alex@example.com' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface-0)] flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-[var(--color-surface-1)] flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-white/5 shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded bg-gradient-to-br from-[#00d4ff] via-[#8b5cf6] to-[#f59e0b] opacity-100" />
              <Zap className="relative z-10 w-3 h-3 text-white" fill="white" />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              PRISM<span className="text-[var(--color-prism-cyan)]">TECH</span>
            </span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-white/40 uppercase tracking-wider">Dashboard</div>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10 text-white font-medium transition-colors">
            <Target className="w-4 h-4 text-[var(--color-prism-cyan)]" />
            Overview
          </Link>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors">
            <Users className="w-4 h-4" />
            Team Members
          </Link>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors">
            <FileUp className="w-4 h-4" />
            Submissions
          </Link>
        </div>
        
        <div className="p-4 border-t border-white/5">
          <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-red-400 hover:bg-red-500/10" asChild>
            <Link href="/">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 md:px-8 border-b border-white/5 bg-[var(--color-surface-0)]/50 backdrop-blur-md sticky top-0 z-10">
          <h1 className="font-display font-bold text-xl text-white">Team Overview</h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-white/60 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--color-prism-gold)]" />
            </button>
            <div className="w-8 h-8 rounded-full bg-[var(--color-prism-violet)]/20 border border-[var(--color-prism-violet)]/30 flex items-center justify-center text-sm font-medium text-[var(--color-prism-violet)]">
              BB
            </div>
          </div>
        </header>

        <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-6">
          
          {/* Welcome & Status Banner */}
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[var(--color-surface-1)] to-[var(--color-surface-2)] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[var(--color-prism-cyan)]/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline" className="border-[var(--color-prism-cyan)]/30 text-[var(--color-prism-cyan)]">
                  {teamInfo.id}
                </Badge>
                <div className="flex items-center gap-1.5 text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {teamInfo.status}
                </div>
              </div>
              <h2 className="font-display font-bold text-3xl text-white mb-1">
                Welcome back, {teamInfo.name}!
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                You are registered for the <strong className="text-white">{teamInfo.track}</strong>.
              </p>
            </div>
            <div className="relative z-10">
              <Button variant="primary">
                Join Discord Server
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Countdown / Next Milestone */}
            <Card variant="glass" className="md:col-span-1 flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-white/60 uppercase tracking-wider flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--color-prism-gold)]" />
                  Next Milestone
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-center py-6">
                <div className="text-[var(--color-prism-gold)] text-sm font-medium mb-1">In 14 Days</div>
                <div className="font-display font-bold text-3xl text-white mb-2">Hackathon Check-in</div>
                <p className="text-sm text-[var(--color-text-secondary)]">Sept 26, 2026 • 08:15 AM</p>
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card variant="glass" className="md:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-sm font-medium text-white/60 uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-[var(--color-prism-cyan)]" />
                  Team Roster
                </CardTitle>
                <Button variant="outline" size="sm" className="h-8 text-xs">Manage Team</Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {members.map((member, i) => (
                    <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center text-white/60 font-medium">
                        {member.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-white truncate">{member.name}</div>
                        <div className="text-xs text-[var(--color-prism-cyan)]">{member.role}</div>
                      </div>
                    </div>
                  ))}
                  {members.length < 4 && (
                    <button className="p-4 rounded-xl bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center gap-2 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all h-full min-h-[72px]">
                      <Users className="w-5 h-5" />
                      <span className="text-xs font-medium">Add Member (Max 4)</span>
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Project Submission Area */}
            <Card variant="glass" className="md:col-span-3 border border-white/5 border-t-white/10">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center shrink-0 border border-white/5">
                  <FileUp className="w-8 h-8 text-white/40" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-white mb-2">Project Submission</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm max-w-xl">
                    Submissions are currently locked. You will be able to submit your GitHub repository, video pitch, and presentation deck once Round 4 begins.
                  </p>
                </div>
                <Button variant="secondary" disabled className="shrink-0">
                  Submissions Locked
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}

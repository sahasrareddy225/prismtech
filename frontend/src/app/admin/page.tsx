import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Zap, Users, Search, Activity, FileText, CheckCircle2, ShieldAlert, LogOut, ChevronRight, Settings } from 'lucide-react';
import Link from 'next/link';

// Mock Data
const stats = [
  { title: 'Total Teams', value: '35', change: '+5 this week', icon: Users, color: 'var(--color-prism-cyan)' },
  { title: 'Submissions', value: '35', change: 'Round 1 Active', icon: FileText, color: 'var(--color-prism-violet)' },
  { title: 'Disqualified', value: '4', change: 'Rule Violations', icon: ShieldAlert, color: '#ef4444' },
];

const teams = [
  { id: 'PRISM-2026-X7K9', name: 'Binary Beasts', track: 'Neural Stream', members: 4, status: 'Approved' },
  { id: 'PRISM-2026-M4L2', name: 'Quantum Coders', track: 'Optic Stream', members: 3, status: 'Pending' },
  { id: 'PRISM-2026-T9V1', name: 'Impact Builders', track: 'Social Stream', members: 4, status: 'Approved' },
  { id: 'PRISM-2026-W3R8', name: 'Null Pointers', track: 'Neural Stream', members: 2, status: 'Disqualified' },
  { id: 'PRISM-2026-P5N6', name: 'Photon Hackers', track: 'Optic Stream', members: 4, status: 'Approved' },
];

export default function AdminDashboardPage() {
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
              PRISM<span className="text-[var(--color-prism-cyan)]">ADMIN</span>
            </span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-white/40 uppercase tracking-wider">Management</div>
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10 text-white font-medium transition-colors">
            <Activity className="w-4 h-4 text-[var(--color-prism-cyan)]" />
            Overview
          </Link>
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors">
            <Users className="w-4 h-4" />
            Teams
          </Link>
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors">
            <FileText className="w-4 h-4" />
            Submissions
          </Link>
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors mt-8">
            <Settings className="w-4 h-4" />
            Event Settings
          </Link>
        </div>
        
        <div className="p-4 border-t border-white/5">
          <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-red-400 hover:bg-red-500/10" asChild>
            <Link href="/">
              <LogOut className="w-4 h-4 mr-2" />
              Exit Admin
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 md:px-8 border-b border-white/5 bg-[var(--color-surface-0)]/50 backdrop-blur-md sticky top-0 z-10">
          <h1 className="font-display font-bold text-xl text-white">Organizer Portal</h1>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Live Mode
            </div>
            <div className="w-8 h-8 rounded-full bg-[var(--color-prism-cyan)]/20 border border-[var(--color-prism-cyan)]/30 flex items-center justify-center text-sm font-medium text-[var(--color-prism-cyan)]">
              AD
            </div>
          </div>
        </header>

        <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <Card key={i} variant="glass">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-[var(--color-text-secondary)]">{stat.title}</div>
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-surface-1)] flex items-center justify-center border border-white/5">
                      <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                    </div>
                  </div>
                  <div className="font-display font-bold text-3xl text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Data Table Area */}
          <Card variant="glass" className="overflow-hidden">
            <CardHeader className="border-b border-white/5 p-6 bg-[var(--color-surface-1)]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-xl">Registered Teams</CardTitle>
                <div className="text-sm text-[var(--color-text-secondary)]">Manage all participating teams and their statuses.</div>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Search teams..." 
                  className="w-full sm:w-64 h-10 pl-9 pr-4 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-prism-cyan)] transition-colors"
                />
              </div>
            </CardHeader>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-black/20 text-xs font-semibold text-white/50 uppercase tracking-wider">
                    <th className="px-6 py-4">Team ID</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Track</th>
                    <th className="px-6 py-4">Members</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {teams.map((team, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-white/70">{team.id}</td>
                      <td className="px-6 py-4 font-medium text-white">{team.name}</td>
                      <td className="px-6 py-4 text-[var(--color-text-secondary)]">{team.track}</td>
                      <td className="px-6 py-4 text-[var(--color-text-secondary)]">{team.members}/4</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border
                          ${team.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : ''}
                          ${team.status === 'Pending' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : ''}
                          ${team.status === 'Disqualified' ? 'bg-red-500/10 text-red-400 border-red-500/20' : ''}
                        `}>
                          {team.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm" className="h-8">Manage</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-white/5 flex items-center justify-between text-sm text-[var(--color-text-secondary)]">
              <div>Showing 1 to 5 of 35 teams</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </Card>

        </div>
      </main>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, KeyRound, Mail, Zap, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[var(--color-surface-0)] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background gradients */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,98,155,0.08) 0%, transparent 70%)' }}
      />

      <div className="w-full max-w-md relative z-10">
        <Link href="/" className="inline-flex items-center text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 sm:p-10"
        >
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 mx-auto flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[var(--color-ieee-blue-light)]" />
            </div>
            <h1 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-2">Welcome Back</h1>
            <p className="text-[var(--color-text-secondary)] text-sm">Sign in to access your team dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-text-primary)]">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                <input 
                  type="email" 
                  required
                  className="w-full bg-[var(--color-surface-2)] border border-[var(--color-glass-border)] rounded-xl pl-12 pr-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-ieee-blue-light)] transition-colors placeholder:text-[var(--color-text-muted)]" 
                  placeholder="leader@college.edu" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-[var(--color-text-primary)]">Password</label>
                <a href="#" className="text-xs text-[var(--color-ieee-blue-light)] hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                <input 
                  type="password" 
                  required
                  className="w-full bg-[var(--color-surface-2)] border border-[var(--color-glass-border)] rounded-xl pl-12 pr-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-ieee-blue-light)] transition-colors placeholder:text-[var(--color-text-muted)]" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <Button type="submit" variant="magnetic" className="btn-primary w-full h-12 text-base font-medium mt-6" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-[var(--color-text-secondary)]">
            Don't have a team yet?{' '}
            <Link href="/auth/register" className="text-[var(--color-text-primary)] hover:text-[var(--color-ieee-blue-light)] font-medium transition-colors">
              Register now
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

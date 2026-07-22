'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldAlert, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-0)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,98,155,0.08) 0%, transparent 70%)' }}
      />

      <div className="w-full max-w-xl relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 rounded-3xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center mb-8"
        >
          <ShieldAlert className="w-12 h-12 text-[var(--color-ieee-blue-light)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-8xl md:text-9xl text-[var(--color-text-primary)] tracking-tighter mb-4"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-text-primary)] mb-4">Page Not Found</h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-md mx-auto mb-10">
            The endpoint you are looking for has been deprecated or moved. Please check the URL or return to base.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="magnetic" size="lg" asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

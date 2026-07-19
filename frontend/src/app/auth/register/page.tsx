'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const steps = [
  { id: 1, title: 'Team Info' },
  { id: 2, title: 'Leader Details' },
  { id: 3, title: 'Review' }
];

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    teamName: '',
    track: '',
    college: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0
    })
  };

  if (status === 'success') {
    return (
      <main className="min-h-screen bg-[var(--color-surface-0)] flex flex-col items-center justify-center p-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-prism-cyan)]/10 blur-[120px] rounded-full" />
        </div>
        <Card variant="glass" className="w-full max-w-md relative z-10 text-center">
          <CardContent className="p-10">
            <div className="w-20 h-20 rounded-full bg-[var(--color-prism-cyan)]/20 mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-[var(--color-prism-cyan)]" />
            </div>
            <h1 className="font-display font-bold text-3xl text-white mb-2">Registration Complete!</h1>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Your team <strong>{formData.teamName}</strong> has been successfully registered. Check your email for the confirmation details.
            </p>
            <Button variant="primary" className="w-full" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-surface-0)] flex flex-col">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-prism-violet)]/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-ieee-blue-light)]/10 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Simple Header */}
      <header className="absolute top-0 left-0 right-0 h-20 flex items-center px-6 md:px-12 z-20">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00d4ff] via-[#8b5cf6] to-[#f59e0b] opacity-80 group-hover:opacity-100 transition-opacity" />
            <Zap className="relative z-10 w-4 h-4 text-white" fill="white" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight hidden sm:block">
            PRISM<span className="text-[var(--color-prism-cyan)]">TECH</span>
          </span>
        </Link>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10 pt-20">
        
        <div className="w-full max-w-lg mb-8">
          {/* Progress Bar */}
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/10 -z-10 -translate-y-1/2" />
            <div 
              className="absolute left-0 top-1/2 h-0.5 bg-gradient-to-r from-[var(--color-prism-cyan)] to-[var(--color-prism-violet)] -z-10 -translate-y-1/2 transition-all duration-500 ease-out" 
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center gap-2">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                    currentStep >= step.id 
                      ? 'bg-[var(--color-surface-2)] text-white border border-[var(--color-prism-cyan)] shadow-[0_0_15px_rgba(0,212,255,0.3)]' 
                      : 'bg-[var(--color-surface-1)] text-white/40 border border-white/10'
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle2 className="w-4 h-4 text-[var(--color-prism-cyan)]" /> : step.id}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${currentStep >= step.id ? 'text-white' : 'text-white/40'}`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Card variant="glass" className="w-full max-w-lg overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <form onSubmit={handleSubmit}>
              <div className="relative min-h-[300px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    
                    {/* STEP 1 */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="font-display font-bold text-2xl text-white mb-1">Team Information</h2>
                          <p className="text-sm text-[var(--color-text-secondary)]">Let's start with the basics.</p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <label htmlFor="teamName" className="text-sm font-medium text-white/80">Team Name</label>
                            <input
                              id="teamName" name="teamName" type="text" required
                              value={formData.teamName} onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ieee-blue-light)] focus:ring-1 focus:ring-[var(--color-ieee-blue-light)] transition-colors"
                              placeholder="e.g. Binary Beasts"
                            />
                          </div>
                          
                          <div className="space-y-1.5">
                            <label htmlFor="track" className="text-sm font-medium text-white/80">Primary Track</label>
                            <select
                              id="track" name="track" required
                              value={formData.track} onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-[var(--color-ieee-blue-light)] focus:ring-1 focus:ring-[var(--color-ieee-blue-light)] transition-colors appearance-none"
                            >
                              <option value="" disabled className="bg-[var(--color-surface-2)]">Select a track...</option>
                              <option value="optic" className="bg-[var(--color-surface-2)]">Optic Stream (Photonics)</option>
                              <option value="neural" className="bg-[var(--color-surface-2)]">Neural Stream (AI & Software)</option>
                              <option value="social" className="bg-[var(--color-surface-2)]">Social Stream (WIE Impact)</option>
                            </select>
                          </div>

                          <div className="space-y-1.5">
                            <label htmlFor="college" className="text-sm font-medium text-white/80">College / University</label>
                            <input
                              id="college" name="college" type="text" required
                              value={formData.college} onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ieee-blue-light)] focus:ring-1 focus:ring-[var(--color-ieee-blue-light)] transition-colors"
                              placeholder="e.g. KL University"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2 */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="font-display font-bold text-2xl text-white mb-1">Leader Details</h2>
                          <p className="text-sm text-[var(--color-text-secondary)]">Primary contact person for the team.</p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <label htmlFor="leaderName" className="text-sm font-medium text-white/80">Full Name</label>
                            <input
                              id="leaderName" name="leaderName" type="text" required
                              value={formData.leaderName} onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ieee-blue-light)] focus:ring-1 focus:ring-[var(--color-ieee-blue-light)] transition-colors"
                              placeholder="John Doe"
                            />
                          </div>
                          
                          <div className="space-y-1.5">
                            <label htmlFor="leaderEmail" className="text-sm font-medium text-white/80">Email Address</label>
                            <input
                              id="leaderEmail" name="leaderEmail" type="email" required
                              value={formData.leaderEmail} onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ieee-blue-light)] focus:ring-1 focus:ring-[var(--color-ieee-blue-light)] transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label htmlFor="leaderPhone" className="text-sm font-medium text-white/80">Phone Number</label>
                            <input
                              id="leaderPhone" name="leaderPhone" type="tel" required
                              value={formData.leaderPhone} onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ieee-blue-light)] focus:ring-1 focus:ring-[var(--color-ieee-blue-light)] transition-colors"
                              placeholder="+91 9876543210"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3 */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="font-display font-bold text-2xl text-white mb-1">Review & Submit</h2>
                          <p className="text-sm text-[var(--color-text-secondary)]">Please verify your details.</p>
                        </div>

                        <div className="space-y-4">
                          <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-3">
                              <span className="text-sm text-white/50">Team Name</span>
                              <span className="text-sm font-medium text-white">{formData.teamName || '—'}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-3">
                              <span className="text-sm text-white/50">Track</span>
                              <span className="text-sm font-medium text-white capitalize">{formData.track || '—'}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-3">
                              <span className="text-sm text-white/50">College</span>
                              <span className="text-sm font-medium text-white">{formData.college || '—'}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-3">
                              <span className="text-sm text-white/50">Leader</span>
                              <span className="text-sm font-medium text-white">{formData.leaderName || '—'}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-3">
                              <span className="text-sm text-white/50">Email</span>
                              <span className="text-sm font-medium text-white">{formData.leaderEmail || '—'}</span>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-prism-gold)]/10 border border-[var(--color-prism-gold)]/20">
                            <AlertCircle className="w-5 h-5 text-[var(--color-prism-gold)] shrink-0 mt-0.5" />
                            <p className="text-xs text-[var(--color-prism-gold)]/80 leading-relaxed">
                              By submitting, you agree to the PRISMTECH Rules & Code of Conduct. You will be able to add additional team members from your dashboard after registration.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                {currentStep > 1 ? (
                  <Button type="button" variant="ghost" onClick={prevStep} disabled={status === 'loading'}>
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back
                  </Button>
                ) : (
                  <div /> /* Spacer */
                )}

                {currentStep < 3 ? (
                  <Button type="button" variant="primary" onClick={nextStep}>
                    Continue
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                ) : (
                  <Button type="submit" variant="magnetic" disabled={status === 'loading'}>
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Complete Registration'
                    )}
                  </Button>
                )}
              </div>

            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  ArrowLeft, ArrowRight, CheckCircle2, Users, User, Cpu, Zap,
  ChevronRight, Plus, Trash2, Loader2,
} from 'lucide-react';

// ---------- Types ----------
interface TeamMember {
  name: string;
  email: string;
  roll: string;
}

interface FormData {
  teamName: string;
  domain: string;
  collegeName: string;
  leaderName: string;
  leaderEmail: string;
  leaderPhone: string;
  leaderRoll: string;
  leaderBranch: string;
  leaderYear: string;
  members: TeamMember[];
  agreeRules: boolean;
  agreeIP: boolean;
}

const DOMAINS = [
  { id: 'ai', label: 'AI Campus Copilot', tag: 'AI / ML' },
  { id: 'cyber', label: 'Phishing Shield', tag: 'Cybersecurity' },
  { id: 'iot', label: 'Smart Energy Lab', tag: 'IoT' },
  { id: 'health', label: 'Healthcare Track', tag: 'Healthcare' },
  { id: 'sustain', label: 'Sustainable Cities', tag: 'Sustainability' },
  { id: 'open', label: 'Open Domain', tag: 'Innovation' },
];

const STEPS = [
  { label: 'Team Info', icon: Users },
  { label: 'Team Leader', icon: User },
  { label: 'Members', icon: Users },
  { label: 'Confirm', icon: CheckCircle2 },
];

// ---------- Sub-components ----------

function StepIndicator({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-10" role="list" aria-label="Registration steps">
      {STEPS.map((s, i) => {
        const Icon = s.icon;
        const isActive = i === step;
        const isDone = i < step;
        return (
          <div key={s.label} className="flex items-center" role="listitem">
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isDone
                    ? 'bg-[var(--color-ieee-blue-light)] text-[var(--color-surface-0)]'
                    : isActive
                    ? 'bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)] text-[var(--color-ieee-blue-light)]'
                    : 'bg-white/05 border border-white/10 text-[var(--color-text-muted)]'
                }`}
                layout
              >
                {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
              </motion.div>
              <span
                className={`text-[10px] font-semibold tracking-wide hidden sm:block ${
                  isActive ? 'text-[var(--color-text-primary)]' : isDone ? 'text-[var(--color-ieee-blue-light)]' : 'text-[var(--color-text-muted)]'
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < total - 1 && (
              <div
                className={`h-px mx-2 sm:mx-3 flex-1 min-w-[24px] sm:min-w-[40px] transition-colors duration-500 ${
                  i < step ? 'bg-[var(--color-ieee-blue-light)]/40' : 'bg-white/08'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function FormField({
  label, id, required, error, children,
}: {
  label: string; id: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label} {required && <span className="text-[var(--color-prism-rose)]">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-[var(--color-prism-rose)] mt-1.5">{error}</p>}
    </div>
  );
}

// ---------- Steps ----------

function Step1({ form }: { form: ReturnType<typeof useForm<FormData>> }) {
  const { register, watch, setValue, formState: { errors } } = form;
  const selectedDomain = watch('domain');

  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Team Information</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Choose your team name and hackathon domain.</p>
      </div>

      <FormField label="Team Name" id="teamName" required error={errors.teamName?.message}>
        <input
          id="teamName"
          {...register('teamName', { required: 'Team name is required', minLength: { value: 3, message: 'At least 3 characters' } })}
          className="form-input"
          placeholder="e.g. Team NeuralNinjas"
          autoFocus
        />
      </FormField>

      <FormField label="Institution / College" id="collegeName" required error={errors.collegeName?.message}>
        <input
          id="collegeName"
          {...register('collegeName', { required: 'College name is required' })}
          className="form-input"
          placeholder="e.g. KL University, Hyderabad"
        />
      </FormField>

      <div>
        <label className="form-label">
          Problem Domain <span className="text-[var(--color-prism-rose)]">*</span>
        </label>
        {errors.domain && <p className="text-xs text-[var(--color-prism-rose)] mb-2">{errors.domain.message}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DOMAINS.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setValue('domain', d.id, { shouldValidate: true })}
              className={`flex items-start gap-3 p-4 rounded-xl text-left border transition-all duration-200 ${
                selectedDomain === d.id
                  ? 'border-[var(--color-ieee-blue-light)]/50 bg-[var(--color-surface-3)]'
                  : 'border-[var(--color-glass-border)] bg-[var(--color-surface-2)] hover:border-white/15'
              }`}
              aria-pressed={selectedDomain === d.id}
            >
              <div
                className="w-2.5 h-2.5 rounded-full mt-1 shrink-0"
                style={{ background: selectedDomain === d.id ? 'var(--color-ieee-blue-light)' : 'rgba(255,255,255,0.15)' }}
              />
              <div>
                <div className="text-xs font-bold tracking-wider text-[var(--color-text-muted)] mb-0.5">{d.tag}</div>
                <div className={`text-sm font-semibold ${selectedDomain === d.id ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'}`}>
                  {d.label}
                </div>
              </div>
              {selectedDomain === d.id && (
                <CheckCircle2 className="w-4 h-4 ml-auto shrink-0 mt-0.5 text-[var(--color-ieee-blue-light)]" />
              )}
            </button>
          ))}
        </div>
        <input
          type="hidden"
          {...register('domain', { required: 'Please select a domain' })}
        />
      </div>
    </motion.div>
  );
}

function Step2({ form }: { form: ReturnType<typeof useForm<FormData>> }) {
  const { register, formState: { errors } } = form;
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'PG 1st Year', 'PG 2nd Year'];

  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Team Leader Details</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">The team leader is the primary point of contact.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name" id="leaderName" required error={errors.leaderName?.message}>
          <input
            id="leaderName"
            {...register('leaderName', { required: 'Name is required' })}
            className="form-input"
            placeholder="Full name as on ID"
            autoFocus
          />
        </FormField>

        <FormField label="Roll / Reg. Number" id="leaderRoll" required error={errors.leaderRoll?.message}>
          <input
            id="leaderRoll"
            {...register('leaderRoll', { required: 'Roll number is required' })}
            className="form-input"
            placeholder="e.g. 2100030001"
          />
        </FormField>

        <FormField label="Email Address" id="leaderEmail" required error={errors.leaderEmail?.message}>
          <input
            id="leaderEmail"
            type="email"
            {...register('leaderEmail', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
            })}
            className="form-input"
            placeholder="leader@college.edu"
          />
        </FormField>

        <FormField label="Phone (WhatsApp)" id="leaderPhone" required error={errors.leaderPhone?.message}>
          <input
            id="leaderPhone"
            type="tel"
            {...register('leaderPhone', {
              required: 'Phone is required',
              pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid 10-digit mobile number' },
            })}
            className="form-input"
            placeholder="9XXXXXXXXX"
          />
        </FormField>

        <FormField label="Branch / Specialization" id="leaderBranch" required error={errors.leaderBranch?.message}>
          <input
            id="leaderBranch"
            {...register('leaderBranch', { required: 'Branch is required' })}
            className="form-input"
            placeholder="e.g. CSE, ECE, IT"
          />
        </FormField>

        <FormField label="Year of Study" id="leaderYear" required error={errors.leaderYear?.message}>
          <select
            id="leaderYear"
            {...register('leaderYear', { required: 'Year is required' })}
            className="form-input"
          >
            <option value="">Select year</option>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </FormField>
      </div>

      <div className="glass-card p-4 border-[var(--color-ieee-blue-light)]/15 bg-[var(--color-surface-3)]">
        <p className="text-xs text-[var(--color-ieee-blue-light)] leading-relaxed">
          <strong>Note:</strong> The team leader will receive the registration confirmation, schedule updates, and all official communications via the email and WhatsApp number provided above.
        </p>
      </div>
    </motion.div>
  );
}

function Step3({ form }: { form: ReturnType<typeof useForm<FormData>> }) {
  const { register, watch, setValue, formState: { errors } } = form;
  const members = watch('members') || [];

  const addMember = () => {
    if (members.length < 3) {
      setValue('members', [...members, { name: '', email: '', roll: '' }]);
    }
  };

  const removeMember = (idx: number) => {
    setValue('members', members.filter((_, i) => i !== idx));
  };

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Team Members</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Add 1–3 more members (total team size: 2–4).</p>
        </div>
        <button
          type="button"
          onClick={addMember}
          disabled={members.length >= 3}
          className="btn-magnetic btn-secondary text-sm py-2 px-4 shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Plus className="w-4 h-4" />
          Add Member
        </button>
      </div>

      {members.length === 0 ? (
        <div className="glass-card p-8 text-center border-dashed border-white/10">
          <Users className="w-8 h-8 text-white/20 mx-auto mb-3" />
          <p className="text-sm text-[var(--color-text-muted)]">No additional members yet.</p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">You can participate solo or add up to 3 more members.</p>
          <button type="button" onClick={addMember} className="btn-magnetic btn-secondary text-sm mt-4 mx-auto">
            <Plus className="w-4 h-4" />
            Add First Member
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          {members.map((_, idx) => (
            <div key={idx} className="glass-card p-5 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-white">Member {idx + 2}</span>
                <button
                  type="button"
                  onClick={() => removeMember(idx)}
                  className="w-7 h-7 rounded-lg bg-[var(--color-prism-rose)]/10 hover:bg-[var(--color-prism-rose)]/20 flex items-center justify-center transition-colors"
                  aria-label={`Remove member ${idx + 2}`}
                >
                  <Trash2 className="w-3.5 h-3.5 text-[var(--color-prism-rose)]" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FormField label="Full Name" id={`member-${idx}-name`} required>
                  <input
                    id={`member-${idx}-name`}
                    {...register(`members.${idx}.name`, { required: true })}
                    className="form-input"
                    placeholder="Full name"
                  />
                </FormField>
                <FormField label="Email Address" id={`member-${idx}-email`} required>
                  <input
                    id={`member-${idx}-email`}
                    type="email"
                    {...register(`members.${idx}.email`, { required: true })}
                    className="form-input"
                    placeholder="member@college.edu"
                  />
                </FormField>
                <FormField label="Roll Number" id={`member-${idx}-roll`} required>
                  <input
                    id={`member-${idx}-roll`}
                    {...register(`members.${idx}.roll`, { required: true })}
                    className="form-input"
                    placeholder="Roll / Reg. No."
                  />
                </FormField>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function Step4({ form }: { form: ReturnType<typeof useForm<FormData>> }) {
  const { register, watch, formState: { errors } } = form;
  const data = watch();
  const domain = DOMAINS.find((d) => d.id === data.domain);

  return (
    <motion.div
      key="step4"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Review & Confirm</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Please review your details before submitting.</p>
      </div>

      {/* Summary */}
      <div className="glass-card p-6 space-y-5">
        <div>
          <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Team</div>
          <div className="font-bold text-white text-lg">{data.teamName || '—'}</div>
          <div className="text-sm text-[var(--color-text-secondary)] mt-0.5">{data.collegeName}</div>
        </div>

        {domain && (
          <div>
            <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Domain</div>
            <div className="flex items-center gap-2">
              <span className="badge text-xs" style={{ color: 'var(--color-ieee-blue-light)', background: 'rgba(0, 98, 155, 0.1)', border: '1px solid rgba(0, 98, 155, 0.2)' }}>
                {domain.tag}
              </span>
              <span className="text-[var(--color-text-primary)] font-medium">{domain.label}</span>
            </div>
          </div>
        )}

        <div>
          <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2">Team Leader</div>
          <div className="flex flex-col gap-1">
            <div className="text-white font-semibold">{data.leaderName}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">{data.leaderEmail} · {data.leaderPhone}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">{data.leaderBranch}, {data.leaderYear}</div>
          </div>
        </div>

        {data.members && data.members.length > 0 && (
          <div>
            <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2">
              Additional Members ({data.members.length})
            </div>
            <div className="space-y-2">
              {data.members.map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/05 border border-white/08 flex items-center justify-center text-xs text-white/60 font-bold">
                    {i + 2}
                  </div>
                  <div>
                    <div className="text-sm text-white">{m.name}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">{m.email}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Agreements */}
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register('agreeRules', { required: 'You must agree to the rules' })}
            className="mt-0.5 w-4 h-4 rounded accent-[var(--color-ieee-blue-light)] shrink-0"
          />
          <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors leading-relaxed">
            I have read and agree to the{' '}
            <Link href="/rules" className="text-[var(--color-ieee-blue-light)] hover:underline" target="_blank">
              PRISMTECH Rules & Guidelines
            </Link>{' '}
            and the IEEE Code of Conduct.
          </span>
        </label>
        {errors.agreeRules && <p className="text-xs text-[var(--color-prism-rose)] ml-7">{errors.agreeRules.message}</p>}

        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register('agreeIP', { required: 'You must confirm IP terms' })}
            className="mt-0.5 w-4 h-4 rounded accent-[var(--color-ieee-blue-light)] shrink-0"
          />
          <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors leading-relaxed">
            I understand that teams retain intellectual property over their projects, and sponsor datasets must follow stated license terms.
          </span>
        </label>
        {errors.agreeIP && <p className="text-xs text-[var(--color-prism-rose)] ml-7">{errors.agreeIP.message}</p>}
      </div>
    </motion.div>
  );
}

// ---------- Success Screen ----------

function SuccessScreen({ teamName, regId }: { teamName: string; regId: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="text-center py-8"
    >
      <motion.div
        className="w-20 h-20 rounded-2xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/30 flex items-center justify-center mx-auto mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
      >
        <CheckCircle2 className="w-10 h-10 text-[var(--color-ieee-blue-light)]" />
      </motion.div>

      <h2 className="text-3xl font-black font-display text-[var(--color-text-primary)] mb-2">You're Registered!</h2>
      <p className="text-[var(--color-text-secondary)] mb-6">
        Welcome to PRISMTECH 2026, <strong className="text-[var(--color-text-primary)]">{teamName}</strong>.
      </p>

      <div className="glass-card p-5 max-w-sm mx-auto mb-8 border-[var(--color-ieee-blue-light)]/20">
        <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Registration ID</div>
        <div className="font-mono text-xl font-bold text-[var(--color-ieee-blue-light)]">{regId}</div>
        <p className="text-xs text-[var(--color-text-muted)] mt-2">
          Save this ID. Confirmation details will be sent to the team leader's email.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/dashboard" className="btn-magnetic btn-primary">
          <Cpu className="w-4 h-4" />
          Go to Dashboard
        </Link>
        <Link href="/" className="btn-magnetic btn-secondary">
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
}

// ---------- Main Component ----------

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  const form = useForm<FormData>({
    defaultValues: {
      teamName: '',
      domain: '',
      collegeName: '',
      leaderName: '',
      leaderEmail: '',
      leaderPhone: '',
      leaderRoll: '',
      leaderBranch: '',
      leaderYear: '',
      members: [],
      agreeRules: false,
      agreeIP: false,
    },
    mode: 'onBlur',
  });

  const stepFields: (keyof FormData)[][] = [
    ['teamName', 'domain', 'collegeName'],
    ['leaderName', 'leaderEmail', 'leaderPhone', 'leaderRoll', 'leaderBranch', 'leaderYear'],
    ['members'],
    ['agreeRules', 'agreeIP'],
  ];

  const next = async () => {
    const valid = await form.trigger(stepFields[step] as (keyof FormData)[]);
    if (valid) setStep((s) => s + 1);
  };

  const prev = () => setStep((s) => s - 1);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    const id = 'PRT-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    setRegId(id);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const stepComponents = [
    <Step1 key="s1" form={form} />,
    <Step2 key="s2" form={form} />,
    <Step3 key="s3" form={form} />,
    <Step4 key="s4" form={form} />,
  ];

  return (
    <main className="min-h-screen bg-[var(--color-surface-0)] relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(0,98,155,0.08) 0%, transparent 60%)' }}
      />

      {/* Back link */}
      <div className="absolute top-6 left-4 sm:left-8 z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="container relative z-10 py-16 pt-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start min-h-screen">

        {/* Left: Info panel */}
        <motion.aside
          className="lg:sticky lg:top-24 lg:w-80 shrink-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-ieee-blue-light)]/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[var(--color-ieee-blue-light)]" fill="currentColor" />
            </div>
            <div>
              <div className="text-base font-bold text-[var(--color-text-primary)] font-display">PRISMTECH 2026</div>
              <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest">IEEE KLH Hackathon</div>
            </div>
          </div>

          <h1 className="text-display-lg text-[var(--color-text-primary)] mb-4">
            Register your<br />
            <span className="text-gradient-ieee">team today.</span>
          </h1>

          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-8">
            Join hundreds of students competing at KLH Aziz Nagar, Hyderabad on <strong className="text-white">September 26–27, 2026</strong> for a 24-hour innovation sprint.
          </p>

          <div className="space-y-3">
            {[
              { label: 'Team Size', value: '2 – 4 Members' },
              { label: 'Registration Deadline', value: '21 September 2026' },
              { label: 'Event Date', value: '26–27 September 2026' },
              { label: 'Venue', value: 'KLH Aziz Nagar, Hyderabad' },
              { label: 'Registration Fee', value: 'TBA — to be announced' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-[var(--color-prism-cyan)] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{label}</div>
                  <div className="text-sm text-white font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/05">
            <p className="text-xs text-[var(--color-text-muted)]">
              Already registered?{' '}
              <Link href="/auth/login" className="text-[var(--color-prism-cyan)] hover:underline">
                Sign in to your dashboard
              </Link>
            </p>
          </div>
        </motion.aside>

        {/* Right: Form */}
        <div className="flex-1 max-w-2xl w-full">
          <motion.div
            className="glass-card p-7 sm:p-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <SuccessScreen teamName={form.watch('teamName')} regId={regId} />
            ) : (
              <>
                <StepIndicator step={step} total={STEPS.length} />

                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <AnimatePresence mode="wait">
                    {stepComponents[step]}
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className={`flex gap-3 mt-8 ${step > 0 ? 'justify-between' : 'justify-end'}`}>
                    {step > 0 && (
                      <button type="button" onClick={prev} className="btn-magnetic btn-secondary">
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                    )}

                    {step < STEPS.length - 1 ? (
                      <button type="button" onClick={next} className="btn-magnetic btn-primary ml-auto">
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button type="submit" className="btn-magnetic btn-primary ml-auto" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            Complete Registration
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Progress */}
                  <p className="text-center text-xs text-[var(--color-text-muted)] mt-5">
                    Step {step + 1} of {STEPS.length}
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

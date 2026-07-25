'use client';

import React from 'react';
import Link from 'next/link';
import { Users, Calendar, MapPin, CreditCard, Clock, Zap, ArrowRight, ArrowLeft, User, Mail, Phone, Hash, BookOpen, GraduationCap } from 'lucide-react';

const INFO = [
  { icon: Users,      label: 'Team Size',            value: '2 \u2013 4 Members',            highlight: false },
  { icon: Clock,      label: 'Registration Deadline', value: '21 September 2026',         highlight: true  },
  { icon: Calendar,   label: 'Event Date',            value: '26 \u2013 27 September 2026',    highlight: false },
  { icon: MapPin,     label: 'Venue',                 value: 'KLH Aziz Nagar, Hyderabad', highlight: false },
  { icon: CreditCard, label: 'Registration Fee',      value: 'To be announced',           highlight: false },
];

const TRACKS = [
  { emoji: '🤖', category: 'AI / ML',        title: 'AI Campus Copilot'  },
  { emoji: '🛡️', category: 'Cybersecurity',  title: 'Phishing Shield'    },
  { emoji: '⚡',  category: 'IoT',            title: 'Smart Energy Lab'   },
  { emoji: '🏥', category: 'Healthcare',     title: 'Healthcare Track'   },
  { emoji: '🌱', category: 'Sustainability', title: 'Sustainable Cities' },
  { emoji: '💡', category: 'Innovation',     title: 'Open Domain'        },
];

const STEPS = ['Team Info', 'Team Leader', 'Members', 'Confirm'];

function isValid(value: string, type: string, label: string): boolean {
  if (!value.trim()) return false;
  if (label === 'Team Size') return /^[2-4]$/.test(value.trim());
  if (type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  if (type === 'tel') return /^[+]?[\d\s\-]{7,15}$/.test(value.trim());
  return value.trim().length >= 2;
}

function Field({
  icon: Icon, label, placeholder, type = 'text',
  value, onChange, error,
}: {
  icon: React.ElementType; label: string; placeholder: string;
  type?: string; value: string;
  onChange: (v: string) => void; error?: string;
}) {
  const touched = value.length > 0;
  const valid   = touched && isValid(value, type, label);
  const showError = error && !valid;

  const borderColor = showError
    ? 'rgba(251,113,133,0.55)'
    : valid
    ? 'rgba(0,136,204,0.7)'
    : 'rgba(255,255,255,0.09)';

  const bgColor = valid
    ? 'rgba(0,136,204,0.06)'
    : showError
    ? 'rgba(251,113,133,0.05)'
    : 'rgba(255,255,255,0.04)';

  const boxShadow = valid
    ? '0 0 0 3px rgba(0,136,204,0.12)'
    : showError
    ? '0 0 0 3px rgba(251,113,133,0.08)'
    : 'none';

  const iconColor = valid
    ? 'rgba(0,136,204,0.9)'
    : showError
    ? 'rgba(251,113,133,0.7)'
    : 'rgba(0,136,204,0.5)';

  return (
    <div>
      <label style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '5px', display: 'block' }}>
        {label} <span style={{ color: 'rgba(251,113,133,0.9)' }}>*</span>
      </label>
      <div style={{ position: 'relative' }}>
        <Icon style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '13px', height: '13px', color: iconColor, pointerEvents: 'none', transition: 'color 0.2s' }} />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%', padding: '9px 12px 9px 36px', borderRadius: '9px',
            background: bgColor,
            border: `1px solid ${borderColor}`,
            boxShadow: `${boxShadow}, 0 0 0 9999px ${valid ? 'rgba(0,136,204,0.06)' : showError ? 'rgba(251,113,133,0.05)' : 'rgba(20,30,50,0.98)'} inset`,
            color: '#f1f5f9', fontSize: '0.8125rem', outline: 'none', boxSizing: 'border-box',
            transition: 'border-color 0.2s, box-shadow 0.2s, background 0.2s',
            WebkitTextFillColor: '#f1f5f9',
          }}
        />
      </div>
      {showError && (
        <p style={{ fontSize: '0.68rem', color: 'rgba(251,113,133,0.9)', margin: '4px 0 0 2px' }}>
          {error}
        </p>
      )}
    </div>
  );
}

function TrackCard({ emoji, category, title, selected, onSelect }: {
  emoji: string; category: string; title: string; selected: boolean; onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px',
        padding: '12px', borderRadius: '12px',
        background: selected ? 'rgba(0,136,204,0.12)' : 'rgba(255,255,255,0.03)',
        border: selected ? '1px solid rgba(0,136,204,0.45)' : '1px solid rgba(255,255,255,0.08)',
        cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'left',
        boxShadow: selected ? '0 0 16px rgba(0,136,204,0.15)' : 'none', width: '100%',
      }}
    >
      <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{emoji}</span>
      <div>
        <div style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: selected ? 'rgba(0,170,238,0.9)' : 'rgba(255,255,255,0.35)', marginBottom: '2px' }}>{category}</div>
        <div style={{ fontSize: '0.7rem', fontWeight: 600, color: selected ? '#f1f5f9' : 'rgba(255,255,255,0.65)', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{title}</div>
      </div>
    </button>
  );
}

const backBtn: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: '6px',
  padding: '10px 18px', borderRadius: '10px',
  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
  color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: '0.8125rem', cursor: 'pointer',
};

const nextBtn: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: '7px',
  padding: '10px 22px', borderRadius: '10px',
  background: 'linear-gradient(135deg, #0088cc 0%, #0062a0 100%)',
  color: '#ffffff', fontWeight: 700, fontSize: '0.8125rem',
  letterSpacing: '-0.01em', border: '1px solid rgba(0,170,238,0.3)',
  boxShadow: '0 0 24px rgba(0,136,204,0.28), inset 0 1px 0 rgba(255,255,255,0.12)',
  cursor: 'pointer',
};

interface MemberData { fullName: string; email: string; rollNo: string; }
const EMPTY: MemberData = { fullName: '', email: '', rollNo: '' };

function MembersStep({ teamSize, members, setMembers, activeMember: active, setActiveMember: setActive, onBack, onContinue }: {
  teamSize: number;
  members: MemberData[];
  setMembers: React.Dispatch<React.SetStateAction<MemberData[]>>;
  activeMember: number;
  setActiveMember: React.Dispatch<React.SetStateAction<number>>;
  onBack: () => void;
  onContinue: () => void;
}) {
  const max = teamSize - 1;

  const add = () => {
    if (members.length >= max) return;
    setMembers(p => [...p, { ...EMPTY }]);
    setActive(members.length);
  };

  const remove = (i: number) => {
    setMembers(p => p.filter((_, idx) => idx !== i));
    setActive(p => (p >= i && p > 0 ? p - 1 : p));
  };

  const update = (field: keyof MemberData, val: string) =>
    setMembers(p => p.map((m, i) => i === active ? { ...m, [field]: val } : m));

  const m = members[active];
  const canAdd = members.length < max;
  const isMemberValid = (m: MemberData) =>
    m.fullName.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email.trim()) &&
    m.rollNo.trim().length >= 2;
  const filled = (m: MemberData) => m.fullName.trim() !== '';
  const [submitError, setSubmitError] = React.useState('');

  const handleContinue = () => {
    // Must have exactly (teamSize - 1) members
    if (members.length < max) {
      setSubmitError(`Please add all ${max} member${max > 1 ? 's' : ''} required for a team of ${teamSize}.`);
      return;
    }
    // Every member must have all fields valid
    const firstInvalid = members.findIndex(m => !isMemberValid(m));
    if (firstInvalid !== -1) {
      setActive(firstInvalid);
      setSubmitError(`Member ${firstInvalid + 2} has incomplete or invalid details. Please fill all fields.`);
      return;
    }
    setSubmitError('');
    onContinue();
  };


  React.useEffect(() => {
    if (submitError && members.length >= max && members.every(isMemberValid)) {
      setSubmitError('');
    }
  }, [members, max, submitError]);
  return (
    <>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(0,136,204,0.12)', border: '1px solid rgba(0,136,204,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users style={{ width: '13px', height: '13px', color: '#0088cc' }} />
            </div>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', letterSpacing: '-0.02em', margin: 0 }}>Team Members</h2>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            Add {max === 1 ? '1 more member' : `1\u2013${max} more members`} &mdash; total team size: {teamSize}.
          </p>
        </div>
        <div style={{ padding: '3px 10px', borderRadius: '999px', background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.2)', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(0,170,238,0.9)', whiteSpace: 'nowrap', flexShrink: 0 }}>
          {members.length} / {max}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      {/* Member tabs + Add button */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
        {members.map((mem, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button
              onClick={() => setActive(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '6px 12px', borderRadius: '8px', cursor: 'pointer',
                fontSize: '0.75rem', fontWeight: 600, transition: 'all 0.2s',
                background: active === i ? 'rgba(0,136,204,0.9)' : 'rgba(255,255,255,0.05)',
                border: active === i ? '1px solid rgba(0,170,238,0.5)' : '1px solid rgba(255,255,255,0.09)',
                color: active === i ? '#fff' : 'rgba(255,255,255,0.5)',
                boxShadow: active === i ? '0 0 14px rgba(0,136,204,0.25)' : 'none',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, background: filled(mem) ? '#34d399' : active === i ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)' }} />
              Member {i + 2}
            </button>
            {members.length > 1 && (
              <button
                onClick={() => remove(i)}
                title={`Remove Member ${i + 2}`}
                style={{ width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.25)', fontSize: '10px', transition: 'all 0.2s' }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 1l6 6M7 1l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            )}
          </div>
        ))}

        {canAdd && (
          <button
            onClick={add}
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '6px 12px', borderRadius: '8px', cursor: 'pointer',
              fontSize: '0.75rem', fontWeight: 600,
              background: 'transparent',
              border: '1px dashed rgba(0,136,204,0.35)',
              color: 'rgba(0,170,238,0.7)',
              transition: 'all 0.2s',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Add Member
          </button>
        )}
      </div>

      {/* Active member form */}
      <div style={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', padding: '16px' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(0,170,238,0.7)', marginBottom: '14px' }}>
          Member {active + 2}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Field icon={User}     label="Full Name"     placeholder="Full name"          value={m.fullName} onChange={v => update('fullName', v)} />
          <Field icon={Mail}     label="Email Address" placeholder="member@college.edu" value={m.email}    onChange={v => update('email', v)}    type="email" />
          <Field icon={Hash}     label="Roll Number"   placeholder="Roll / Reg. No."    value={m.rollNo}   onChange={v => update('rollNo', v)} />
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {submitError && (
          <div style={{ padding: '10px 14px', borderRadius: '10px', background: 'rgba(251,113,133,0.07)', border: '1px solid rgba(251,113,133,0.25)' }}>
            <p style={{ fontSize: '0.72rem', color: 'rgba(251,113,133,0.95)', margin: 0, lineHeight: 1.5 }}>{submitError}</p>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button style={backBtn} onClick={onBack}>
            <ArrowLeft style={{ width: '13px', height: '13px' }} /> Back
          </button>
          <button style={nextBtn} onClick={handleContinue}>
            Continue <ArrowRight style={{ width: '13px', height: '13px' }} />
          </button>
        </div>
      </div>
    </>
  );
}

export default function RegisterPage() {
  const [step, setStep] = React.useState(0);

  // Step 0 state
  const [teamName, setTeamName]     = React.useState('');
  const [teamSize, setTeamSize]     = React.useState('');
  const [track, setTrack]           = React.useState('');
  const [step0Errors, setStep0Errors] = React.useState<Record<string, string>>({});

  // Step 1 state
  const [fullName, setFullName]     = React.useState('');
  const [rollNo, setRollNo]         = React.useState('');
  const [email, setEmail]           = React.useState('');
  const [phone, setPhone]           = React.useState('');
  const [branch, setBranch]         = React.useState('');
  const [year, setYear]             = React.useState('');
  const [step1Errors, setStep1Errors] = React.useState<Record<string, string>>({});

  // Step 2 state
  const [members, setMembers] = React.useState<MemberData[]>([{ ...EMPTY }]);
  const [activeMember, setActiveMember] = React.useState(0);

  // Step 3 state
  const [confirmed, setConfirmed] = React.useState(false);
  const [regId] = React.useState(() => {
    const ts = Date.now().toString(36).toUpperCase();
    const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `PRT-2026-${ts}-${rand}`;
  });

  function validateStep0() {
    const errs: Record<string, string> = {};
    if (!teamName.trim()) errs.teamName = 'Team name is required';
    if (!teamSize.trim()) errs.teamSize = 'Team size is required';
    if (!track) errs.track = 'Please select a track';
    setStep0Errors(errs);
    return Object.keys(errs).length === 0;
  }

  function validateStep1() {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!rollNo.trim())   errs.rollNo   = 'Roll / Reg. number is required';
    if (!email.trim())    errs.email    = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = 'Enter a valid email';
    if (!phone.trim())    errs.phone    = 'Phone number is required';
    if (!branch.trim())   errs.branch   = 'Branch is required';
    if (!year.trim())     errs.year     = 'Year of study is required';
    setStep1Errors(errs);
    return Object.keys(errs).length === 0;
  }

  return (
    <main style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
      paddingLeft: 'clamp(48px, 10vw, 140px)', paddingRight: 'clamp(24px, 6vw, 80px)',
      paddingTop: '72px', paddingBottom: '48px',
      backgroundImage: `
        radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,98,155,0.18) 0%, transparent 70%),
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
      `,
      backgroundSize: 'auto, 52px 52px, 52px 52px',
      backgroundColor: '#0a0f1a', position: 'relative', gap: '56px', flexWrap: 'wrap',
    }}>

      {/* Back to Home */}
      <div style={{ position: 'absolute', top: '24px', left: '28px' }}>
        <Link href="/home" style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '8px 16px',
          borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,0.6)', fontSize: '0.8125rem', fontWeight: 600,
          textDecoration: 'none', letterSpacing: '-0.01em', backdropFilter: 'blur(8px)',
        }}>
          <ArrowLeft style={{ width: '14px', height: '14px' }} /> Back to Home
        </Link>
      </div>

      {/* â”€â”€ LEFT: Info Card â”€â”€ */}
      <div style={{ flex: '0 0 auto', width: '420px' }}>
        <div style={{
          background: 'linear-gradient(160deg, rgba(14,22,42,0.97) 0%, rgba(8,14,28,0.99) 100%)',
          border: '1px solid rgba(34,211,238,0.12)', borderRadius: '20px',
          boxShadow: '0 0 0 1px rgba(0,136,204,0.06), 0 24px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
          backdropFilter: 'blur(24px)', padding: '16px 28px', display: 'flex', flexDirection: 'column', gap: '10px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.25)' }}>
              <Zap style={{ width: '11px', height: '11px', color: 'rgba(0,136,204,0.95)' }} fill="currentColor" />
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,136,204,0.95)' }}>IEEE PRISMTECH 2026</span>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '6px' }}>
              <span style={{ color: '#f1f5f9' }}>Register your </span>
              <span style={{ background: 'linear-gradient(135deg, #0088cc, #00aaee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>team today.</span>
            </h1>
            <p style={{ fontSize: '0.75rem', color: '#8b9ec0', lineHeight: 1.7, margin: 0 }}>
              Join students from across India competing at KLH Aziz Nagar, Hyderabad on{' '}
              <strong style={{ color: '#f1f5f9', fontWeight: 600 }}>September 26–27, 2026</strong>{' '}
              — a 24-hour innovation sprint organised by IEEE KLH.
            </p>
          </div>
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {INFO.map(({ icon: Icon, label, value, highlight }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 10px', borderRadius: '10px',
                background: highlight ? 'linear-gradient(135deg, rgba(251,113,133,0.08) 0%, rgba(8,16,32,0.5) 100%)' : 'rgba(255,255,255,0.03)',
                border: highlight ? '1px solid rgba(251,113,133,0.22)' : '1px solid rgba(255,255,255,0.07)',
              }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: highlight ? 'rgba(251,113,133,0.1)' : 'rgba(0,136,204,0.08)', border: highlight ? '1px solid rgba(251,113,133,0.2)' : '1px solid rgba(0,136,204,0.18)' }}>
                  <Icon style={{ width: '13px', height: '13px', color: highlight ? 'rgba(251,113,133,0.9)' : 'rgba(0,136,204,0.9)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>{label}</div>
                  <div style={{ fontSize: '0.775rem', fontWeight: 600, color: highlight ? 'rgba(251,113,133,0.95)' : '#f1f5f9', letterSpacing: '-0.01em' }}>{value}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>Already registered?</span>
            <Link href="/auth/login" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(34,211,238,0.85)', textDecoration: 'none' }}>Sign in →</Link>
          </div>
        </div>
      </div>

      {/* â”€â”€ RIGHT: Multi-step Form Card â”€â”€ */}
      <div style={{ flex: '0 0 auto', width: '520px' }}>
        <div style={{
          background: 'linear-gradient(160deg, rgba(14,22,42,0.97) 0%, rgba(8,14,28,0.99) 100%)',
          border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px',
          boxShadow: '0 0 0 1px rgba(0,136,204,0.04), 0 24px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
          backdropFilter: 'blur(24px)', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '20px',
        }}>

          {/* Step indicator */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {STEPS.map((label, i) => (
              <React.Fragment key={label}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                  <div style={{
                    width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.65rem', fontWeight: 700, transition: 'all 0.3s ease',
                    background: i < step ? 'rgba(0,136,204,0.9)' : i === step ? 'rgba(0,136,204,0.15)' : 'rgba(255,255,255,0.05)',
                    border: i <= step ? '1px solid rgba(0,136,204,0.6)' : '1px solid rgba(255,255,255,0.1)',
                    color: i < step ? '#fff' : i === step ? '#0088cc' : 'rgba(255,255,255,0.3)',
                  }}>
                    {i < step ? (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : i + 1}
                  </div>
                  <span style={{ fontSize: '0.6rem', fontWeight: 600, whiteSpace: 'nowrap', color: i === step ? 'rgba(0,170,238,0.9)' : 'rgba(255,255,255,0.3)' }}>{label}</span>
                </div>
                {i < STEPS.length - 1 && <div style={{ flex: 1, height: '1px', marginBottom: '16px', background: i < step ? 'rgba(0,136,204,0.5)' : 'rgba(255,255,255,0.08)', transition: 'background 0.3s ease' }} />}
              </React.Fragment>
            ))}
          </div>

          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

          {/* â”€â”€ STEP 0: Team Information â”€â”€ */}
          {step === 0 && (
            <>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(0,136,204,0.12)', border: '1px solid rgba(0,136,204,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users style={{ width: '13px', height: '13px', color: '#0088cc' }} />
                  </div>
                  <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', letterSpacing: '-0.02em', margin: 0 }}>Team Information</h2>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>Fill in your team details to secure your spot.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,136,204,0.8)', margin: 0 }}>Team Info</p>
                <Field icon={Users} label="Team Name" placeholder="e.g. Circuit Breakers" value={teamName} onChange={setTeamName} error={step0Errors.teamName} />
                <Field icon={User}  label="Team Size" placeholder="2 - 4"                 value={teamSize} onChange={setTeamSize} error={step0Errors.teamSize} />
              </div>

              <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,136,204,0.8)', margin: 0 }}>Select Track</p>
                {step0Errors.track && <p style={{ fontSize: '0.68rem', color: 'rgba(251,113,133,0.9)', margin: 0 }}>{step0Errors.track}</p>}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                  {TRACKS.map(({ emoji, category, title }) => (
                    <TrackCard key={title} emoji={emoji} category={category} title={title}
                      selected={track === title} onSelect={() => { setTrack(title); setStep0Errors(e => ({ ...e, track: '' })); }} />
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button style={nextBtn} onClick={() => { if (validateStep0()) setStep(1); }}>
                  Continue <ArrowRight style={{ width: '13px', height: '13px' }} />
                </button>
              </div>
            </>
          )}

          {/* â”€â”€ STEP 1: Team Leader â”€â”€ */}
          {step === 1 && (
            <>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(0,136,204,0.12)', border: '1px solid rgba(0,136,204,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User style={{ width: '13px', height: '13px', color: '#0088cc' }} />
                  </div>
                  <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', letterSpacing: '-0.02em', margin: 0 }}>Team Leader Details</h2>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>The team leader is the primary point of contact.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Field icon={User}          label="Full Name"               placeholder="Your full name"       value={fullName} onChange={setFullName} error={step1Errors.fullName} />
                <Field icon={Hash}          label="Roll / Reg. Number"      placeholder="e.g. 21BCE1234"       value={rollNo}   onChange={setRollNo}   error={step1Errors.rollNo} />
                <Field icon={Mail}          label="Email Address"           placeholder="you@example.com"      value={email}    onChange={setEmail}    error={step1Errors.email}    type="email" />
                <Field icon={Phone}         label="Phone (WhatsApp)"        placeholder="+91 00000 00000"      value={phone}    onChange={setPhone}    error={step1Errors.phone}    type="tel" />
                <Field icon={BookOpen}      label="Branch / Specialization" placeholder="e.g. CSE, ECE, IT\u2026"  value={branch}   onChange={setBranch}   error={step1Errors.branch} />
                {/* Year of Study - dropdown */}
                <div>
                  <label style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '5px', display: 'block' }}>
                    Year of Study <span style={{ color: 'rgba(251,113,133,0.9)' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <GraduationCap style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '13px', height: '13px', color: year ? 'rgba(0,136,204,0.9)' : step1Errors.year ? 'rgba(251,113,133,0.7)' : 'rgba(0,136,204,0.5)', pointerEvents: 'none', zIndex: 1 }} />
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      style={{
                        width: '100%', padding: '9px 12px 9px 36px', borderRadius: '9px',
                        background: year ? 'rgba(0,136,204,0.06)' : step1Errors.year ? 'rgba(251,113,133,0.05)' : 'rgba(255,255,255,0.04)',
                        border: year ? '1px solid rgba(0,136,204,0.7)' : step1Errors.year ? '1px solid rgba(251,113,133,0.55)' : '1px solid rgba(255,255,255,0.09)',
                        boxShadow: year ? '0 0 0 3px rgba(0,136,204,0.12)' : step1Errors.year ? '0 0 0 3px rgba(251,113,133,0.08)' : 'none',
                        color: year ? '#f1f5f9' : 'rgba(255,255,255,0.35)',
                        fontSize: '0.8125rem', outline: 'none', boxSizing: 'border-box',
                        appearance: 'none', cursor: 'pointer',
                        transition: 'border-color 0.2s, box-shadow 0.2s, background 0.2s',
                      }}
                    >
                      <option value="" disabled style={{ background: '#0d1628', color: 'rgba(255,255,255,0.35)' }}>Select year</option>
                      <option value="1st Year" style={{ background: '#0d1628', color: '#f1f5f9' }}>1st Year</option>
                      <option value="2nd Year" style={{ background: '#0d1628', color: '#f1f5f9' }}>2nd Year</option>
                      <option value="3rd Year" style={{ background: '#0d1628', color: '#f1f5f9' }}>3rd Year</option>
                      <option value="4th Year" style={{ background: '#0d1628', color: '#f1f5f9' }}>4th Year</option>
                    </select>
                    <svg style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', color: 'rgba(255,255,255,0.35)', pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                  </div>
                  {step1Errors.year && !year && <p style={{ fontSize: '0.68rem', color: 'rgba(251,113,133,0.9)', margin: '4px 0 0 2px' }}>{step1Errors.year}</p>}
                </div>
              </div>

              <div style={{ padding: '10px 14px', borderRadius: '10px', background: 'rgba(0,136,204,0.06)', border: '1px solid rgba(0,136,204,0.15)' }}>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>
                  <strong style={{ color: 'rgba(0,170,238,0.8)' }}>Note:</strong> The team leader will receive the registration confirmation, schedule updates, and all official communications via the email and WhatsApp number provided above.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <button style={backBtn} onClick={() => setStep(0)}>
                  <ArrowLeft style={{ width: '13px', height: '13px' }} /> Back
                </button>
                <button style={nextBtn} onClick={() => { if (validateStep1()) setStep(2); }}>
                  Continue <ArrowRight style={{ width: '13px', height: '13px' }} />
                </button>
              </div>
            </>
          )}

          {/* â”€â”€ STEP 2: Team Members â”€â”€ */}
          {step === 2 && (
            <MembersStep
              teamSize={parseInt(teamSize) || 2}
              members={members}
              setMembers={setMembers}
              activeMember={activeMember}
              setActiveMember={setActiveMember}
              onBack={() => setStep(1)}
              onContinue={() => setStep(3)}
            />
          )}

          {/* â”€â”€ STEP 3: Confirm â”€â”€ */}
          {step === 3 && !confirmed && (
            <>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(0,136,204,0.12)', border: '1px solid rgba(0,136,204,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0088cc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                  </div>
                  <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', letterSpacing: '-0.02em', margin: 0 }}>Confirm Registration</h2>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>Review your details before submitting.</p>
              </div>

              <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

              {/* Summary rows */}
              {[
                { label: 'Team Name',   value: teamName },
                { label: 'Team Size',   value: `${teamSize} members` },
                { label: 'Track',       value: TRACKS.find(t => t.title === track)?.category ?? track },
                { label: 'Team Leader', value: fullName },
                { label: 'Email',       value: email },
                { label: 'Branch',      value: `${branch} - ${year}` },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{label}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f1f5f9' }}>{value}</span>
                </div>
              ))}

              <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <button style={backBtn} onClick={() => setStep(2)}>
                  <ArrowLeft style={{ width: '13px', height: '13px' }} /> Back
                </button>
                <button
                  style={{ ...nextBtn, background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', border: '1px solid rgba(52,211,153,0.3)', boxShadow: '0 0 24px rgba(52,211,153,0.2), inset 0 1px 0 rgba(255,255,255,0.12)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  onClick={() => setConfirmed(true)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Confirm Registration
                </button>
              </div>
            </>
          )}

          {/* â”€â”€ SUCCESS â”€â”€ */}
          {step === 3 && confirmed && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '12px 0' }}>

              {/* Green check */}
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(52,211,153,0.12)', border: '2px solid rgba(52,211,153,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px rgba(52,211,153,0.15)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>

              {/* Title */}
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.02em', margin: '0 0 6px' }}>Registration Successful!</h2>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>
                  Your team <strong style={{ color: '#f1f5f9' }}>{teamName}</strong> has been registered for IEEE PrismTech 2026.
                </p>
              </div>

              {/* Registration ID box */}
              <div style={{ width: '100%', borderRadius: '12px', background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', padding: '16px 20px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(52,211,153,0.7)', margin: '0 0 8px' }}>Registration ID</p>
                <p style={{ fontSize: '1rem', fontWeight: 800, color: '#34d399', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)', margin: 0 }}>{regId}</p>
              </div>

              {/* Note */}
              <div style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'rgba(0,136,204,0.06)', border: '1px solid rgba(0,136,204,0.15)' }}>
                <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>
                  <strong style={{ color: 'rgba(0,170,238,0.8)' }}>Save this ID.</strong> Confirmation details will be sent to the team leader&apos;s email at <strong style={{ color: '#f1f5f9' }}>{email}</strong>.
                </p>
              </div>

              <Link href="/home" style={{ ...nextBtn, textDecoration: 'none', marginTop: '4px' } as React.CSSProperties}>
                Back to Home
              </Link>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}


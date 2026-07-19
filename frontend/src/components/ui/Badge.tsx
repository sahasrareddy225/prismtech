import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'cyan' | 'violet' | 'gold';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  
  const variants = {
    default: 'bg-[var(--color-ieee-blue-light)]/10 text-[var(--color-ieee-blue-light)] shadow-[inset_0_0_0_1px_rgba(0,122,255,0.2)]',
    secondary: 'bg-[var(--color-surface-3)] text-white shadow-[inset_0_0_0_1px_var(--color-surface-4)]',
    outline: 'text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]',
    ghost: 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white',
    cyan: 'bg-[var(--color-prism-cyan)]/10 text-[var(--color-prism-cyan)] shadow-[inset_0_0_0_1px_rgba(0,212,255,0.2)]',
    violet: 'bg-[var(--color-prism-violet)]/10 text-[var(--color-prism-violet)] shadow-[inset_0_0_0_1px_rgba(124,58,237,0.2)]',
    gold: 'bg-[var(--color-prism-gold)]/10 text-[var(--color-prism-gold)] shadow-[inset_0_0_0_1px_rgba(245,158,11,0.2)]',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };

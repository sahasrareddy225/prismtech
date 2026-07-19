'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'magnetic';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group';
    
    const variants = {
      primary: 'bg-[var(--color-ieee-blue-light)] text-white hover:bg-[var(--color-ieee-blue)] shadow-[0_0_20px_rgba(0,122,255,0.3)] hover:shadow-[0_0_30px_rgba(0,122,255,0.5)]',
      secondary: 'bg-[var(--color-surface-2)] text-white hover:text-white hover:bg-[var(--color-surface-3)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]',
      outline: 'border border-white/10 text-white hover:bg-white/5',
      ghost: 'text-white/70 hover:text-white hover:bg-white/10',
      magnetic: 'bg-white text-black hover:bg-white/90 shadow-[0_4px_14px_0_rgba(255,255,255,0.39)]',
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs',
      md: 'h-11 px-6 text-sm',
      lg: 'h-14 px-8 text-base',
      icon: 'h-10 w-10',
    };

    if (asChild) {
      return (
        <Slot
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{props.children}</span>
        {(variant === 'primary' || variant === 'secondary') && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };

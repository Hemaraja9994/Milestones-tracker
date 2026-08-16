import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost' | 'success' | 'teal' | 'purple';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl active:scale-[0.98] select-none';
    
    const variants = {
      primary: 'bg-brand-600 text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600 shadow-sm shadow-brand-500/20',
      secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
      outline: 'border border-slate-200/90 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700/90 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800',
      danger: 'bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 shadow-sm shadow-rose-500/20',
      success: 'bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow-sm shadow-emerald-500/20',
      teal: 'bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 shadow-sm shadow-teal-500/20',
      purple: 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm shadow-indigo-500/20',
      ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5 min-h-[34px]',
      md: 'text-sm px-4 py-2 gap-2 min-h-[40px]',
      lg: 'text-base px-5 py-2.5 gap-2.5 min-h-[46px]',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card dark:border-slate-800/80 dark:bg-slate-900 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Badge({ 
  className, 
  variant = 'default',
  children, 
  ...props 
}: React.HTMLAttributes<HTMLSpanElement> & { 
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'outline' | 'teal'
}) {
  const variants = {
    default: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
    success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60',
    warning: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/60',
    danger: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200/60 dark:border-rose-800/60',
    info: 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border-sky-200/60 dark:border-sky-800/60',
    purple: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200/60 dark:border-indigo-800/60',
    teal: 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200/60 dark:border-teal-800/60',
    outline: 'border border-slate-300 bg-transparent text-slate-600 dark:border-slate-600 dark:text-slate-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-lg border px-2.5 py-0.5 text-xs font-semibold tracking-wide',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function StatusDotBadge({
  status,
  label,
  className
}: {
  status: 'observed' | 'reported' | 'emerging' | 'not_observed' | 'high_risk' | 'elevated_risk' | 'no_elevated_risk';
  label: string;
  className?: string;
}) {
  const configs = {
    observed: { dot: 'bg-emerald-500', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60' },
    reported: { dot: 'bg-sky-500', bg: 'bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800/60' },
    emerging: { dot: 'bg-amber-500', bg: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/60' },
    not_observed: { dot: 'bg-slate-400', bg: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700' },
    high_risk: { dot: 'bg-rose-500 animate-pulse', bg: 'bg-rose-50 text-rose-800 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800/60' },
    elevated_risk: { dot: 'bg-amber-500', bg: 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/60' },
    no_elevated_risk: { dot: 'bg-emerald-500', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60' },
  };

  const cfg = configs[status] || configs.not_observed;

  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 text-xs font-semibold', cfg.bg, className)}>
      <span className={cn('h-2 w-2 rounded-full', cfg.dot)} />
      <span>{label}</span>
    </span>
  );
}

export function ProgressBar({ 
  value, 
  max = 100, 
  className,
  colorClass = 'bg-brand-500'
}: { 
  value: number; 
  max?: number; 
  className?: string;
  colorClass?: string;
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800', className)}>
      <div 
        className={cn('h-full transition-all duration-500 ease-out rounded-full', colorClass)} 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export function ProgressRing({
  radius = 32,
  stroke = 6,
  progress = 0,
  strokeColor = '#0d9488',
  trackColor = '#e2e8f0',
  children,
  className
}: {
  radius?: number;
  stroke?: number;
  progress: number;
  strokeColor?: string;
  trackColor?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (Math.min(100, Math.max(0, progress)) / 100) * circumference;

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
        <circle
          stroke={trackColor}
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.6s ease 0s' }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
}

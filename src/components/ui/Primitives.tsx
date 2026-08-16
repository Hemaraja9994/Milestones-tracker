import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

/* ==========================================================================
   Button

   52px tall on parent screens, 46–48px on clinician screens, 12px radius.
   Primary is a solid pathway colour, secondary is a 1px warm border on white,
   export actions use deep ink.
   ========================================================================== */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'parent'
    | 'ink'
    | 'secondary'
    | 'outline'
    | 'danger'
    | 'ghost'
    | 'success'
    | 'teal'
    | 'purple';
  size?: 'sm' | 'md' | 'lg' | 'parent';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-150 select-none focus-ring disabled:opacity-50 disabled:pointer-events-none';

    const variants: Record<string, string> = {
      primary: 'bg-brand-600 text-white hover:bg-brand-700 dark:text-ink-invert dark:hover:bg-brand-300',
      teal: 'bg-brand-600 text-white hover:bg-brand-700 dark:text-ink-invert dark:hover:bg-brand-300',
      purple: 'bg-brand-600 text-white hover:bg-brand-700 dark:text-ink-invert dark:hover:bg-brand-300',
      parent: 'bg-parent-600 text-white hover:bg-parent-700 dark:text-ink-invert',
      ink: 'bg-ink text-surface-raised hover:bg-ink/90 dark:bg-brand-tint dark:text-ink',
      secondary: 'bg-surface-sunken text-ink hover:bg-line-warm',
      outline:
        'border border-line-warm bg-surface-raised text-ink-body hover:bg-surface-canvas hover:text-ink',
      danger: 'bg-risk text-white hover:bg-risk/90 dark:text-ink-invert',
      success: 'bg-achieved text-white hover:bg-achieved/90 dark:text-ink-invert',
      ghost: 'text-ink-body hover:bg-surface-sunken hover:text-ink',
    };

    const sizes: Record<string, string> = {
      sm: 'text-[13px] px-3.5 gap-1.5 min-h-[40px]',
      md: 'text-[13px] px-4 gap-2 min-h-[46px]',
      lg: 'text-[15px] px-5 gap-2.5 min-h-[52px]',
      parent: 'text-[15px] px-5 gap-2.5 min-h-[52px]',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant] ?? variants.primary, sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

/* ==========================================================================
   Card — 16–18px radius, 1px warm border, no shadow at rest. Elevation is
   reserved for the two pathway cards and modals.
   ========================================================================== */

export function Card({
  className,
  children,
  pathway,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { pathway?: 'clinician' | 'parent' }) {
  return (
    <div
      className={cn(
        'rounded-panel border border-line-warm bg-surface-raised p-5 transition-colors',
        pathway === 'clinician' && 'border-t-4 border-t-brand-600',
        pathway === 'parent' && 'border-t-4 border-t-parent-600',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/** Page section heading in the display face. */
export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
  action,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className={cn('flex flex-wrap items-end justify-between gap-4', className)}>
      <div className="max-w-[68ch]">
        {eyebrow ? (
          <div className="eyebrow tracking-[0.1em] text-brand-600 dark:text-brand-400">{eyebrow}</div>
        ) : null}
        <h2 className="mt-2.5 font-display text-[28px] font-extrabold leading-[1.12] text-ink sm:text-[34px]">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-[1.6] text-ink-soft">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

/* ==========================================================================
   Badge — 11px, 700, 0.04–0.06em caps, pill, tinted background only.
   `outline` is the citation pill: never tinted, so evidence never reads as a
   status.
   ========================================================================== */

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?:
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'purple'
    | 'outline'
    | 'teal'
    | 'parent';
}) {
  const variants: Record<string, string> = {
    default: 'bg-surface-sunken text-ink-body',
    success: 'bg-achieved-tint text-achieved-ink',
    warning: 'bg-emerging-tint text-emerging-ink',
    danger: 'bg-risk-tint text-risk-ink',
    info: 'bg-brand-tint text-brand-600 dark:text-brand-400',
    teal: 'bg-brand-tint text-brand-600 dark:text-brand-400',
    purple: 'bg-brand-tint text-brand-600 dark:text-brand-400',
    parent: 'bg-parent-tint text-parent-700',
    outline: 'border border-line-warm text-ink-muted',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.04em]',
        variants[variant] ?? variants.default,
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
  className,
}: {
  status:
    | 'observed'
    | 'reported'
    | 'emerging'
    | 'not_observed'
    | 'high_risk'
    | 'elevated_risk'
    | 'no_elevated_risk';
  label: string;
  className?: string;
}) {
  const configs: Record<string, { dot: string; bg: string }> = {
    observed: { dot: 'bg-achieved', bg: 'bg-achieved-tint text-achieved-ink' },
    reported: { dot: 'bg-brand-600 dark:bg-brand-400', bg: 'bg-brand-tint text-brand-600 dark:text-brand-400' },
    emerging: { dot: 'bg-emerging', bg: 'bg-emerging-tint text-emerging-ink' },
    not_observed: { dot: 'bg-ink-muted', bg: 'bg-surface-sunken text-ink-body' },
    high_risk: { dot: 'bg-risk', bg: 'bg-risk-tint text-risk-ink' },
    elevated_risk: { dot: 'bg-emerging', bg: 'bg-emerging-tint text-emerging-ink' },
    no_elevated_risk: { dot: 'bg-achieved', bg: 'bg-achieved-tint text-achieved-ink' },
  };

  const cfg = configs[status] || configs.not_observed;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.04em]',
        cfg.bg,
        className
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', cfg.dot)} />
      <span>{label}</span>
    </span>
  );
}

/** Outlined citation pill — evidence, not status. */
export function Citation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn('citation-pill', className)}>{children}</span>;
}

/* ==========================================================================
   Gauges — 8px bars on clinician screens, 10px on parent screens, fully
   rounded, warm track, semantic fill. No gradient, and no percentage label
   without a raw count beside it.
   ========================================================================== */

export function ProgressBar({
  value,
  max = 100,
  className,
  colorClass = 'bg-brand-600 dark:bg-brand-400',
  size = 'clinical',
}: {
  value: number;
  max?: number;
  className?: string;
  colorClass?: string;
  size?: 'clinical' | 'parent';
}) {
  const percentage = Math.min(100, Math.max(0, (value / (max || 1)) * 100));
  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-full bg-line-rule',
        size === 'parent' ? 'h-2.5' : 'h-2',
        className
      )}
    >
      <div
        className={cn('h-full rounded-full transition-[width] duration-500 ease-out', colorClass)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

/** Labelled gauge: always a raw count beside the bar. */
export function GaugeRow({
  label,
  valueLabel,
  value,
  max,
  colorClass,
  size = 'clinical',
  footnote,
}: {
  label: React.ReactNode;
  valueLabel: React.ReactNode;
  value: number;
  max: number;
  colorClass?: string;
  size?: 'clinical' | 'parent';
  footnote?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-xs text-ink-soft">
        <span>{label}</span>
        <span className="font-bold tabular-nums text-ink">{valueLabel}</span>
      </div>
      <ProgressBar
        className="mt-2"
        value={value}
        max={max}
        colorClass={colorClass}
        size={size}
      />
      {footnote ? <div className="mt-1.5 text-[11px] text-ink-muted">{footnote}</div> : null}
    </div>
  );
}

export function ProgressRing({
  radius = 32,
  stroke = 6,
  progress = 0,
  strokeColor = 'rgb(16 105 110)',
  trackColor = 'rgb(237 228 216)',
  children,
  className,
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
  const strokeDashoffset =
    circumference - (Math.min(100, Math.max(0, progress)) / 100) * circumference;

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <svg height={radius * 2} width={radius * 2} className="-rotate-90 transform">
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
      <div className="absolute inset-0 flex items-center justify-center text-center">{children}</div>
    </div>
  );
}

/* ==========================================================================
   Stat — Newsreader numerals with a warm caps label.
   ========================================================================== */

export function Stat({
  label,
  value,
  suffix,
  className,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('bg-surface-raised px-6 py-5', className)}>
      <div className="eyebrow tracking-[0.04em] text-ink-warm">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-[32px] font-extrabold leading-none tabular-nums text-ink sm:text-[36px]">
          {value}
        </span>
        {suffix ? <span className="text-xs text-ink-warm">{suffix}</span> : null}
      </div>
    </div>
  );
}

/** Muted note panel used for reassurance / caution copy. */
export function NotePanel({
  tone = 'neutral',
  children,
  className,
}: {
  tone?: 'neutral' | 'achieved' | 'parent' | 'emerging';
  children: React.ReactNode;
  className?: string;
}) {
  const tones: Record<string, string> = {
    neutral: 'bg-surface-canvas border-line-warm text-ink-body',
    achieved: 'bg-achieved-tint border-achieved/25 text-achieved-ink',
    parent: 'bg-parent-tint border-parent-600/25 text-parent-700',
    emerging: 'bg-emerging-tint border-emerging/25 text-emerging-ink',
  };
  return (
    <div className={cn('rounded-card border p-5 text-[13px] leading-[1.65]', tones[tone], className)}>
      {children}
    </div>
  );
}

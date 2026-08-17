// MilestonePath "Signal" — reference implementations of the three components
// that carry the redesign. Drop into src/components/signal/ and import.
// Tailwind classes assume design_handoff_milestonepath_signal/code/tailwind.config.js.

'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ────────────────────────────────────────────────────────────────
   1 · usePrefersReducedMotion — guard for anything JS-triggered
   ──────────────────────────────────────────────────────────────── */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
}

/* ────────────────────────────────────────────────────────────────
   2 · ProgressRing
   done/total come from the SAME array that renders the checklist.
   Never hold a separate count in state — that is how a UI starts lying.
   ──────────────────────────────────────────────────────────────── */
type RingProps = {
  done: number;
  total: number;
  size?: number;
  stroke?: number;
  /** true when the current band just completed — fires the glow once */
  celebrate?: boolean;
  label?: string;
};

export function ProgressRing({
  done,
  total,
  size = 112,
  stroke = 10,
  celebrate = false,
  label,
}: RingProps) {
  const reduced = usePrefersReducedMotion();
  const r = size / 2 - stroke / 2 - 3;
  const C = 2 * Math.PI * r;
  const offset = total > 0 ? C - (C * done) / total : C;
  const complete = total > 0 && done === total;

  // glow fires once per completion, never on mount
  const [glowKey, setGlowKey] = useState(0);
  const wasComplete = useRef(complete);
  useEffect(() => {
    if (complete && !wasComplete.current && celebrate && !reduced) {
      setGlowKey((k) => k + 1);
    }
    wasComplete.current = complete;
  }, [complete, celebrate, reduced]);

  return (
    <div className="relative flex-none" style={{ width: size, height: size }}>
      {glowKey > 0 && (
        <span
          key={glowKey}
          aria-hidden
          className="pointer-events-none absolute -inset-2.5 rounded-full animate-sig-glow"
          style={{
            background:
              'radial-gradient(circle, rgba(47,143,78,0.55) 0%, rgba(47,143,78,0) 68%)',
            opacity: 0,
          }}
        />
      )}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden className="relative">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#35514F" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={complete ? '#2F8F4E' : '#14807A'}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            transition: reduced
              ? 'none'
              : 'stroke-dashoffset 520ms cubic-bezier(.22,.85,.28,1), stroke 240ms ease-out',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-px">
        {/* no count-up tween: the numeral renders from the same array in the same paint */}
        <span className="sig-num text-[34px] leading-none text-canvas">{done}</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-clinician-dim">
          {label ?? `of ${total}`}
        </span>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   3 · MilestoneRow — the checkbox micro-interaction
   Status values are the frozen parent strings; this component never
   invents copy. `title` renders verbatim from data/milestones.ts.
   ──────────────────────────────────────────────────────────────── */
type Status = 'yes' | 'sometimes' | 'not_yet';

type RowProps = {
  area: string;
  title: string;
  status: Status;
  index: number;
  onToggle: () => void;
  /** true only on first paint of a list, so entrance runs once */
  entering?: boolean;
};

export function MilestoneRow({ area, title, status, index, onToggle, entering }: RowProps) {
  const reduced = usePrefersReducedMotion();
  const [pressed, setPressed] = useState(false);
  const on = status === 'yes';

  // stagger caps at 8 — item 9 onward appears with item 8
  const delay = Math.min(index, 7) * 45;

  return (
    <button
      type="button"
      onClick={onToggle}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      aria-pressed={on}
      className={[
        'flex w-full items-start gap-3 rounded-[14px] border-2 p-[15px] text-left',
        on ? 'bg-achieved-tint border-achieved' : 'bg-canvas border-line hover:border-ink',
        entering && !reduced ? 'animate-sig-enter' : '',
      ].join(' ')}
      style={{
        animationDelay: entering && !reduced ? `${delay}ms` : undefined,
        transform: pressed && !reduced ? 'scale(0.97)' : undefined,
        transition: reduced
          ? 'none'
          : 'background-color 180ms cubic-bezier(.2,.7,.3,1), border-color 180ms ease-out, transform 160ms ease-out',
      }}
    >
      <span
        className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-[7px] border-2"
        style={{
          background: on ? '#2F8F4E' : 'transparent',
          borderColor: on ? '#2F8F4E' : '#C2BDAF',
          transform: on && !reduced ? 'scale(1)' : undefined,
          transition: reduced
            ? 'none'
            : 'background-color 180ms cubic-bezier(.2,.7,.3,1), border-color 180ms ease-out, transform 200ms ease-out',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 12.5l5 5L20 6.5"
            stroke={on ? '#FFFFFF' : 'transparent'}
            strokeWidth={3.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={26}
            strokeDashoffset={on ? 0 : 26}
            style={{ transition: reduced ? 'none' : 'stroke-dashoffset 220ms ease-out 40ms' }}
          />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col gap-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.07em] text-muted">{area}</span>
        <span className="font-display text-[15px] font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
          {title}
        </span>
      </span>
    </button>
  );
}

/* ────────────────────────────────────────────────────────────────
   4 · BandStrip — 13 age bands, one cell each
   ──────────────────────────────────────────────────────────────── */
export function BandStrip({
  bands,
}: {
  bands: Array<{ done: number; total: number }>;
}) {
  return (
    <div className="flex gap-[3px]">
      {bands.map((b, i) => {
        const complete = b.total > 0 && b.done === b.total;
        const started = b.done > 0;
        const bg = complete ? '#2F8F4E' : started ? '#FF6B4A' : '#35514F';
        return (
          <span
            key={i}
            className="h-2 flex-1 rounded-[2px]"
            style={{ background: bg, transition: 'background-color 200ms ease-out' }}
          />
        );
      })}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   5 · BottomNav — replaces the hamburger below 768px
   Labels are fixed and must not be shortened or reordered.
   ──────────────────────────────────────────────────────────────── */
const NAV = [
  { href: '/', label: 'Home', pathway: 'neutral' as const },
  { href: '/professional', label: 'Professional Portal', pathway: 'clinician' as const },
  { href: '/parent/tracker', label: 'Parent Tracker', pathway: 'parent' as const },
  { href: '/clinical-reference', label: 'Clinical Hub', pathway: 'clinician' as const },
];

const ACTIVE: Record<string, string> = {
  neutral: 'bg-ink text-canvas',
  clinician: 'bg-clinician-tint text-clinician-ink',
  parent: 'bg-parent-tint text-parent-ink',
};

export function BottomNav({ pathname, Icon }: { pathname: string; Icon: (p: { name: string; className?: string }) => JSX.Element }) {
  return (
    <nav
      className="sig-bottom-nav fixed inset-x-0 bottom-0 z-40 flex justify-between border-t-2 border-ink bg-canvas px-2.5 pt-2 md:hidden"
      aria-label="Primary"
    >
      {NAV.map((item) => {
        const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={[
              'flex h-[52px] w-[84px] flex-col items-center justify-center gap-1 rounded-control',
              active ? ACTIVE[item.pathway] : 'text-muted-nav',
            ].join(' ')}
            style={{ transition: 'background-color 160ms ease-out, color 120ms ease-out' }}
          >
            <Icon name={item.label} className="h-[21px] w-[21px]" />
            <span
              className={[
                'text-center text-[10px] leading-[1.2]',
                active ? 'font-bold' : 'font-semibold',
              ].join(' ')}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

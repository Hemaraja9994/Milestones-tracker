import React from 'react';

/**
 * Authorship credit for the clinical concept, content compilation and design.
 *
 * Single source of truth so the footer and the printed reports never drift.
 * Deliberately quiet: eyebrow + name + affiliation, no portrait, no headline
 * weight, no accent colour.
 */
export const AUTHOR = {
  name: 'Hemaraja Nayaka S',
  credentials: 'MSc (SLP), Dip. in HA & ET — AIISH, PGDBEME',
  role: 'Associate Professor',
  department: 'Dept. of Audiology & Speech-Language Pathology',
  institution: 'Yenepoya Medical College Hospital, Mangaluru',
  phone: '0824-2204667 (Ext 2229)',
  registrations: 'RCI: A30294 · ISHA: L-13072161',
  site: 'https://s.hemarajanayaka.workers.dev/',
  /**
   * Research, academic and developer profiles. `href: null` renders as plain
   * text — fill in the real URL to turn it into a link.
   */
  profiles: [
    { label: 'IRINS', href: null as string | null },
    { label: 'Google Scholar', href: null as string | null },
    { label: 'ORCID', href: null as string | null },
    { label: 'GitHub', href: null as string | null },
    { label: 'LinkedIn', href: null as string | null },
  ],
} as const;

/** Footer variant — screen only. */
export function Attribution() {
  return (
    <div className="border-t border-line-rule pt-6">
      <p className="eyebrow font-sans tracking-[0.06em] text-ink-warm">
        Concept, clinical compilation &amp; design
      </p>
      <p className="mt-2.5 text-[13px] font-semibold text-ink">
        {AUTHOR.name}
        <span className="ml-2 font-normal text-ink-muted">{AUTHOR.credentials}</span>
      </p>
      <p className="mt-1 text-xs leading-[1.6] text-ink-muted">
        {AUTHOR.role} · {AUTHOR.department}
        <br />
        {AUTHOR.institution} · {AUTHOR.phone}
        <br />
        {AUTHOR.registrations}
      </p>
      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted">
        <a
          href={AUTHOR.site}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 transition-colors hover:text-ink dark:text-brand-400"
        >
          hemarajanayaka.workers.dev
        </a>
        {AUTHOR.profiles.map((p) =>
          p.href ? (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 transition-colors hover:text-ink dark:text-brand-400"
            >
              {p.label}
            </a>
          ) : null
        )}
      </p>
    </div>
  );
}

/** Report variant — one line, sized for print. */
export function AttributionLine({ className }: { className?: string }) {
  return (
    <p className={`text-[10px] leading-relaxed text-slate-400 ${className ?? ''}`}>
      Concept, clinical compilation &amp; design: {AUTHOR.name}, {AUTHOR.credentials} —{' '}
      {AUTHOR.role}, {AUTHOR.department}, {AUTHOR.institution}. {AUTHOR.registrations}.
    </p>
  );
}

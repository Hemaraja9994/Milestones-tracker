'use client';

import React from 'react';
import { AUTHOR } from '@/components/layout/Attribution';
import BrandMark from '@/components/ui/BrandMark';

/**
 * Print-first document shell for the two manuals.
 *
 * Written to be saved as a PDF from the browser's print dialog, so the figures
 * inside are live UI rather than screenshots — the manual cannot drift from the
 * product it documents. Screen styling is a readable A4-width column; print
 * styling adds page furniture and keeps blocks off page seams.
 */
export default function ManualLayout({
  audience,
  title,
  subtitle,
  children,
}: {
  audience: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="manual bg-surface-canvas">
      <div className="mx-auto max-w-[820px] px-[18px] py-8 sm:px-8 print:max-w-none print:p-0">
        {/* ---- Cover ---- */}
        <header className="manual-cover border-b-2 border-ink pb-7">
          <div className="flex items-center gap-2.5">
            <BrandMark size={30} />
            <span className="font-display text-[21px] font-extrabold text-ink">MilestonePath</span>
          </div>

          <div className="eyebrow mt-7 tracking-[0.12em] text-brand-600">{audience}</div>
          <h1 className="mt-2.5 max-w-[24ch] font-display text-[34px] font-extrabold leading-[1.08] text-ink sm:text-[42px]">
            {title}
          </h1>
          <p className="mt-3 max-w-[70ch] text-[15px] leading-[1.6] text-ink-soft">{subtitle}</p>

          <dl className="mt-6 grid gap-x-8 gap-y-2 text-[12px] leading-[1.5] text-ink-muted sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-ink-body">Application</dt>
              <dd>milestones-tracker.vercel.app</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-body">Concept, clinical compilation &amp; design</dt>
              <dd>
                {AUTHOR.name}, {AUTHOR.credentials}
                <br />
                {AUTHOR.role} · {AUTHOR.department}
                <br />
                {AUTHOR.institution}
                <br />
                {AUTHOR.registrations}
              </dd>
            </div>
          </dl>
        </header>

        <main className="manual-body">{children}</main>

        {/* ---- Colophon ---- */}
        <footer className="mt-10 border-t border-line-warm pt-5 text-[11px] leading-[1.6] text-ink-muted">
          <p className="font-semibold text-ink-body">
            For tracking &amp; educational use only. Not a diagnostic tool.
          </p>
          <p className="mt-1.5">
            MilestonePath does not replace formal clinical assessment or diagnostic testing by
            certified speech-language pathologists, pediatric audiologists, or developmental
            pediatricians.
          </p>
          <p className="mt-2.5">
            Milestone content is drawn from CDC, ASHA, Northern &amp; Downs, AIISH Mysuru, Crowe
            &amp; McLeod (2020), LEST and Pathways.org. The Communication Milestones checklist is
            reproduced from the American Speech-Language-Hearing Association&apos;s parent handouts
            and is copyrighted by ASHA.
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @page {
          size: A4;
          margin: 16mm 14mm;
        }
        @media print {
          .manual {
            background: #fff !important;
          }
          /* globals.css hides buttons in print for the app's own screens; the
             manual's figures need them, since they are the thing being taught. */
          .manual button,
          .manual select {
            display: inline-flex !important;
          }
          .manual .manual-figure button {
            display: inline-flex !important;
          }
          .manual-cover {
            break-after: avoid;
          }
          .manual-section {
            break-inside: avoid-page;
          }
          .manual-step,
          .manual-figure,
          .manual-callout,
          .manual table {
            break-inside: avoid;
          }
          .manual h2 {
            break-after: avoid;
          }
          .manual a {
            text-decoration: none;
            color: inherit;
          }
          .manual-pagebreak {
            break-before: page;
          }
        }
      `}</style>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

export function Section({
  number,
  title,
  children,
  breakBefore,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
  breakBefore?: boolean;
}) {
  return (
    <section className={`manual-section mt-9 ${breakBefore ? 'manual-pagebreak' : ''}`}>
      <h2 className="flex items-baseline gap-3 border-b border-line-warm pb-2.5 font-display text-[22px] font-extrabold leading-[1.2] text-ink">
        <span className="text-[15px] font-extrabold text-brand-600">{String(number).padStart(2, '0')}</span>
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-3.5 text-[14px] leading-[1.65] text-ink-body">
        {children}
      </div>
    </section>
  );
}

export function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="manual-step flex gap-3.5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-tint text-[13px] font-bold text-brand-600">
        {n}
      </span>
      <div>
        <p className="font-semibold text-ink">{title}</p>
        {children ? <div className="mt-1 flex flex-col gap-2">{children}</div> : null}
      </div>
    </div>
  );
}

export function Callout({
  tone = 'neutral',
  title,
  children,
}: {
  tone?: 'neutral' | 'caution' | 'note';
  title?: string;
  children: React.ReactNode;
}) {
  const tones = {
    neutral: 'border-line-warm bg-surface-raised text-ink-body',
    caution: 'border-risk/30 bg-risk-tint text-risk-ink',
    note: 'border-emerging/30 bg-emerging-tint text-emerging-ink',
  };
  return (
    <div className={`manual-callout rounded-card border p-4 text-[13px] leading-[1.65] ${tones[tone]}`}>
      {title ? <p className="mb-1.5 font-bold">{title}</p> : null}
      {children}
    </div>
  );
}

/** A live slice of the real interface, labelled as a figure. */
export function Figure({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="manual-figure my-2 overflow-hidden rounded-card border border-line-warm bg-surface-raised">
      <div className="border-b border-line-rule bg-surface-canvas px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-warm">
        {caption}
      </div>
      <div className="p-4">{children}</div>
    </figure>
  );
}

export function Table({
  head,
  rows,
}: {
  head: string[];
  rows: (string | number)[][];
}) {
  return (
    <table className="w-full border-collapse text-[13px]">
      <thead>
        <tr>
          {head.map((h) => (
            <th
              key={h}
              className="border-b border-line-warm px-2 py-2 text-left font-semibold text-ink"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) => (
              <td
                key={j}
                className="border-b border-line-hair px-2 py-2 align-top leading-[1.55] text-ink-body"
              >
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function PrintButton() {
  return (
    <div className="no-print mt-7 flex flex-wrap items-center gap-3 rounded-card border border-line-warm bg-surface-raised p-4">
      <button
        type="button"
        onClick={() => window.print()}
        className="focus-ring inline-flex min-h-[46px] items-center rounded-full bg-ink px-5 text-[14px] font-semibold text-surface-raised"
      >
        Print / Save as PDF
      </button>
      <span className="text-[13px] leading-[1.6] text-ink-muted">
        In the print dialog choose <strong className="font-semibold text-ink-body">Save as PDF</strong>,
        A4, and enable background graphics.
      </span>
    </div>
  );
}

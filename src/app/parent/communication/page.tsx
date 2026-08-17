'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { isSampleChild } from '@/lib/storage';
import {
  AshaResponse,
  getAshaResponses,
  saveAshaResponse,
  countsAsObserved,
} from '@/lib/ashaStorage';
import {
  ASHA_ATTRIBUTION,
  ASHA_BANDS,
  ASHA_COVERAGE_MAX_MONTHS,
  ASHA_PREAMBLE,
  ASHA_SCOPE_NOTE,
  ashaBandForAge,
  ashaHandoutFor,
} from '@/data/ashaMilestones';
import { Badge, NotePanel } from '@/components/ui/Primitives';
import MilestoneArt from '@/components/parent/MilestoneArt';

const OPTIONS: { value: AshaResponse; label: string }[] = [
  { value: 'yes', label: 'Yes' },
  { value: 'not_yet', label: 'Not yet' },
  { value: 'not_sure', label: 'Not sure' },
];

export default function AshaCommunicationTracker() {
  const { childrenList, activeChild } = useChild();
  const { language, t } = useLanguage();

  const ownChildren = childrenList.filter((c) => !isSampleChild(c.id));
  const child = activeChild || ownChildren[0] || childrenList[0] || null;

  const ages = child ? calculateChildAges(child.dateOfBirth, child.gestationalWeeks) : null;

  const recommendedBand = ages
    ? ashaBandForAge(ages.effectiveAgeMonths) || ASHA_BANDS[ASHA_BANDS.length - 1]
    : ASHA_BANDS[0];

  const [bandId, setBandId] = useState(recommendedBand.id);
  const [responses, setResponses] = useState<Record<string, AshaResponse>>({});
  const [showTips, setShowTips] = useState(false);

  // Load this child's answers, and follow their age band.
  useEffect(() => {
    if (!child) return;
    setResponses(getAshaResponses(child.id));
    setBandId(recommendedBand.id);
  }, [child?.id, recommendedBand.id]);

  const band = ASHA_BANDS.find((b) => b.id === bandId) || ASHA_BANDS[0];
  const handout = ashaHandoutFor(band);

  const answer = (milestoneId: string, response: AshaResponse) => {
    if (!child) return;
    setResponses((prev) => ({ ...prev, [milestoneId]: response }));
    saveAshaResponse(child.id, milestoneId, response);
  };

  const bandStats = useMemo(() => {
    const observed = band.milestones.filter((m) => countsAsObserved(responses[m.id])).length;
    const answered = band.milestones.filter((m) => responses[m.id]).length;
    const unsure = band.milestones.filter((m) => responses[m.id] === 'not_sure').length;
    return { observed, answered, unsure, total: band.milestones.length };
  }, [band, responses]);

  const beyondCoverage = ages ? ages.effectiveAgeMonths > ASHA_COVERAGE_MAX_MONTHS : false;

  if (!child) {
    return (
      <div className="bg-surface-canvas">
        <div className="mx-auto max-w-[1240px] px-[18px] py-16 text-center sm:px-6 lg:px-9">
          <h1 className="font-display text-[26px] font-extrabold text-ink">
            Communication Milestones
          </h1>
          <p className="mx-auto mt-3 max-w-[52ch] text-sm leading-[1.6] text-ink-soft">
            Add your child first — we&apos;ll open the checklist at the right age for them.
          </p>
          <Link
            href="/parent"
            className="focus-ring mt-6 inline-flex min-h-[52px] items-center rounded-full bg-parent-600 px-6 text-[15px] font-semibold text-white dark:text-ink-invert"
          >
            Add my child
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-canvas">
      {/* ================= Header ================= */}
      <div className="border-b border-line-rule bg-surface-raised">
        <div className="mx-auto max-w-[1240px] px-[18px] pb-6 pt-8 sm:px-6 lg:px-9">
          <div className="flex items-start gap-3.5">
            <Link
              href="/parent"
              aria-label={t.common.back}
              className="focus-ring mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-warm text-ink-body"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <div className="eyebrow tracking-[0.1em] text-parent-600">
                {ASHA_ATTRIBUTION.source}
              </div>
              <h1 className="mt-2.5 font-display text-[30px] font-extrabold leading-[1.1] text-ink sm:text-[38px]">
                Communication Milestones
              </h1>
              <p className="mt-2.5 max-w-[70ch] text-sm leading-[1.6] text-ink-soft">
                {ASHA_SCOPE_NOTE}
              </p>
              <p className="mt-2 text-[13px] text-ink-muted">
                Tracking {child.nameOrInitials} ·{' '}
                {ages?.chronologicalText[language] || ages?.chronologicalText.en}
                {ages?.isPremature ? ' (corrected age used)' : ''}
              </p>
            </div>
          </div>

          {/* ASHA's own bands — these differ from the app's developmental bands */}
          <div className="mt-6 text-[13px] font-semibold text-ink-soft">Select age range</div>
          <div className="scroll-rail mt-3 sm:flex-wrap sm:overflow-visible">
            {ASHA_BANDS.map((b) => {
              const selected = b.id === band.id;
              const answered = b.milestones.filter((m) => responses[m.id]).length;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBandId(b.id)}
                  aria-pressed={selected}
                  className={`focus-ring inline-flex min-h-[46px] shrink-0 items-center gap-2 rounded-full px-[18px] text-sm transition-colors ${
                    selected
                      ? 'bg-parent-600 font-semibold text-white dark:text-ink-invert'
                      : 'border border-line-warm bg-surface-raised font-medium text-ink-body hover:text-ink'
                  }`}
                >
                  {b.label}
                  {answered > 0 && (
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums ${
                        selected ? 'bg-white/25' : 'bg-surface-sunken text-ink-muted'
                      }`}
                    >
                      {answered}/{b.milestones.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-[18px] py-7 sm:px-6 lg:px-9 lg:py-9">
        {/* ASHA's own reassurance, verbatim */}
        <NotePanel tone="achieved">{ASHA_PREAMBLE}</NotePanel>

        {language !== 'en' && (
          <NotePanel tone="emerging">
            These are ASHA&apos;s own words and are shown in English only. A reviewed Hindi and
            Kannada version is not available yet.
          </NotePanel>
        )}

        {beyondCoverage && (
          <NotePanel tone="neutral">
            {child.nameOrInitials} is older than {ASHA_COVERAGE_MAX_MONTHS} months. These ASHA
            handouts cover birth to 24 months; the 2–5 year ranges are not loaded yet. The{' '}
            <Link href="/parent/tracker" className="font-semibold underline">
              full milestone tracker
            </Link>{' '}
            covers every age up to 6 years.
          </NotePanel>
        )}

        {/* Band progress — derived, never a stored figure */}
        <section className="rounded-card border border-line-warm bg-surface-raised p-5 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow tracking-[0.08em] text-ink-warm">{band.label}</div>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="font-display text-[36px] font-extrabold leading-none tabular-nums text-ink">
                  {bandStats.observed}
                </span>
                <span className="text-[15px] text-ink-warm">
                  of {bandStats.total} seen so far
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">{bandStats.answered} answered</Badge>
              {bandStats.unsure > 0 && (
                <Badge variant="warning">{bandStats.unsure} not sure</Badge>
              )}
            </div>
          </div>
          <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-line-rule">
            <div
              className="h-full rounded-full bg-achieved transition-[width] duration-500"
              style={{ width: `${(bandStats.observed / bandStats.total) * 100}%` }}
            />
          </div>
          <p className="mt-3 text-xs leading-[1.6] text-ink-muted">
            &ldquo;Not sure&rdquo; is kept separate from &ldquo;Not yet&rdquo; but counts the same
            here — only what you have actually seen adds to this total.
          </p>
        </section>

        {/* Checklist */}
        <ul className="flex flex-col gap-3">
          {band.milestones.map((m) => {
            const current = responses[m.id];
            return (
              <li
                key={m.id}
                className={`rounded-panel border border-line-warm p-5 transition-colors sm:p-6 ${
                  current === 'yes' ? 'bg-achieved-tint' : 'bg-surface-raised'
                }`}
              >
                <p className="max-w-[72ch] text-[15px] leading-[1.6] text-ink">{m.text}</p>

                <div
                  className="mt-4 flex flex-wrap gap-2.5"
                  role="radiogroup"
                  aria-label={m.text}
                >
                  {OPTIONS.map((opt) => {
                    const selected = current === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => answer(m.id, opt.value)}
                        className={`focus-ring inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-semibold transition-colors sm:flex-none ${
                          selected && opt.value === 'yes'
                            ? 'bg-achieved text-white dark:text-ink-invert'
                            : selected && opt.value === 'not_sure'
                            ? 'bg-emerging text-white dark:text-ink-invert'
                            : selected
                            ? 'bg-ink text-surface-raised'
                            : 'border-[1.5px] border-line-warm bg-surface-raised text-ink-body hover:text-ink'
                        }`}
                      >
                        {opt.value === 'yes' && selected && (
                          <Check className="h-[18px] w-[18px]" strokeWidth={2.4} />
                        )}
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>

        {/* "What can I do to help?" — verbatim, secondary, expandable */}
        <section className="overflow-hidden rounded-panel border border-line-warm bg-surface-raised">
          <button
            type="button"
            onClick={() => setShowTips(!showTips)}
            aria-expanded={showTips}
            className="focus-ring flex min-h-[60px] w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
          >
            <span className="flex items-center gap-3.5">
              <MilestoneArt name="social_pragmatic" size={32} className="text-parent-600" />
              <span>
                <span className="block font-sans text-[15px] font-semibold text-ink">
                  What can I do to help?
                </span>
                <span className="mt-0.5 block text-xs text-ink-muted">
                  From the {handout.title} handout
                </span>
              </span>
            </span>
            {showTips ? (
              <ChevronUp className="h-5 w-5 shrink-0 text-ink-muted" />
            ) : (
              <ChevronDown className="h-5 w-5 shrink-0 text-ink-muted" />
            )}
          </button>

          {showTips && (
            <div className="border-t border-line-rule px-5 py-5 sm:px-6">
              <div className="rounded-card bg-parent-tint p-4">
                <div className="eyebrow font-sans text-parent-700">Tip to help!</div>
                <p className="mt-2 text-[13px] leading-[1.65] text-parent-700">
                  {handout.highlightedTip}
                </p>
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {handout.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-[13px] leading-[1.65] text-ink-body">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-parent-600"
                    />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Attribution — required wherever this content appears */}
        <section className="rounded-card border border-line-warm bg-surface-raised p-5 text-xs leading-[1.65] text-ink-muted sm:p-6">
          <p>
            Milestones and tips on this page are reproduced from{' '}
            <span className="font-semibold text-ink-body">
              {ASHA_ATTRIBUTION.source} — {ASHA_ATTRIBUTION.publication}
            </span>
            , {handout.title}. {ASHA_ATTRIBUTION.copyright}.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={ASHA_ATTRIBUTION.findProfessional}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-600 dark:text-brand-400"
            >
              Find an ASHA-certified professional
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={ASHA_ATTRIBUTION.allAgeRanges}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-600 dark:text-brand-400"
            >
              All ASHA age ranges
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-3">{t.app.disclaimer_short}</p>
        </section>
      </div>
    </div>
  );
}

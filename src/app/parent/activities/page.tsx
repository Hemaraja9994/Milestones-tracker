'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { isSampleChild } from '@/lib/storage';
import { ALL_MILESTONES } from '@/data/allMilestones';
import { AGE_BANDS } from '@/data/ageBands';

const AREAS = [
  { value: 'all', label: 'All areas' },
  { value: 'auditory_hearing', label: 'Listening & hearing' },
  { value: 'language_receptive', label: 'Understanding' },
  { value: 'language_expressive', label: 'Talking & gesturing' },
  { value: 'speech_articulation', label: 'Speech sounds' },
  { value: 'social_pragmatic', label: 'Social & play' },
  { value: 'cognitive', label: 'Thinking' },
];

/**
 * Try at home — every milestone's parent tip, browsable.
 *
 * The tips already exist inside individual milestone cards; a parent looking
 * for something to do tonight had to open cards one at a time to find them.
 * The supporting milestone is always visible on each card, never collapsed:
 * it is the clinical reason the activity exists.
 */
export default function ActivitiesPage() {
  const { childrenList, activeChild } = useChild();
  const { language, t } = useLanguage();

  const ownChildren = childrenList.filter((c) => !isSampleChild(c.id));
  const child = activeChild || ownChildren[0] || childrenList[0] || null;
  const ages = child ? calculateChildAges(child.dateOfBirth, child.gestationalWeeks) : null;

  /* Default to the spec's "Relevant now". The child arrives a tick later than
     first render, so the filter below falls through to showing everything
     until the band is known, rather than briefly showing nothing. */
  const [scope, setScope] = useState<'now' | 'all'>('now');
  const [area, setArea] = useState('all');

  /* "Relevant now" is the child's band ±1. It is a filter, not a
     recommendation — nothing here is scored or suggested. */
  const nowBands = useMemo(() => {
    if (!ages) return [];
    const i = AGE_BANDS.findIndex((b) => b.months === ages.recommendedAgeBandMonths);
    if (i < 0) return [];
    return AGE_BANDS.slice(Math.max(0, i - 1), i + 2).map((b) => b.months);
  }, [ages]);

  const activities = useMemo(
    () =>
      ALL_MILESTONES.filter((m) => {
        const inArea = area === 'all' || m.domain === area;
        const inScope = scope === 'all' || nowBands.length === 0 || nowBands.includes(m.ageBandMonths);
        return inArea && inScope;
      }),
    [area, scope, nowBands]
  );

  const bandLabel = (months: number) => {
    const b = AGE_BANDS.find((x) => x.months === months);
    return b ? b.label[language] || b.label.en : `${months} months`;
  };

  return (
    <div className="bg-page">
      {/* Coral header — the parent pathway */}
      <div className="bg-parent">
        <div className="mx-auto max-w-[1240px] px-[18px] py-7 sm:px-6 lg:px-10">
          <div className="eyebrow text-parent-deep">Parent Tracker</div>
          <h1 className="mt-2 font-display text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[36px]">
            Try at home
          </h1>
          <p className="mt-2.5 max-w-[62ch] text-[14px] leading-[1.6] text-parent-deep">
            One simple thing to try for every milestone. Play is how these skills arrive — none of
            this is homework.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-[18px] py-6 sm:px-6 lg:px-10">
        {/* Two filters only. The row wraps — it never scrolls, so no chip is
            ever half-visible. */}
        <div className="flex flex-wrap gap-2">
          {(['now', 'all'] as const).map((s) => {
            const disabled = s === 'now' && !ages;
            return (
              <button
                key={s}
                type="button"
                disabled={disabled}
                onClick={() => setScope(s)}
                aria-pressed={scope === s}
                className={`focus-ring sig-chip sig-press inline-flex min-h-[46px] items-center rounded-control border-2 px-4 text-[13px] font-semibold disabled:opacity-40 ${
                  scope === s
                    ? 'border-ink bg-ink text-canvas'
                    : 'border-line text-body hover:border-ink'
                }`}
              >
                {s === 'now' ? 'Relevant now' : 'All ages'}
              </button>
            );
          })}
        </div>

        <div className="mt-2.5 flex flex-wrap gap-2">
          {AREAS.map((a) => {
            const selected = area === a.value;
            return (
              <button
                key={a.value}
                type="button"
                onClick={() => setArea(a.value)}
                aria-pressed={selected}
                className={`focus-ring sig-chip sig-press inline-flex min-h-[46px] items-center rounded-control border-2 px-4 text-[13px] font-semibold ${
                  selected
                    ? 'border-parent bg-parent-tint text-parent-ink'
                    : 'border-line text-body hover:border-ink'
                }`}
              >
                {a.label}
              </button>
            );
          })}
        </div>

        {scope === 'now' && ages && (
          <p className="mt-3 text-[12px] leading-[1.55] text-muted">
            Showing activities for {child?.nameOrInitials}&apos;s current stage and the ones either
            side of it. Switch to <strong className="font-semibold text-body">All ages</strong> to
            see everything.
          </p>
        )}

        {/* Cards */}
        {activities.length === 0 ? (
          <div className="mt-6 max-w-[352px] rounded-card border-2 border-dashed border-line-soft p-5">
            <div className="eyebrow text-muted">Nothing here</div>
            <p className="mt-2 font-display text-[21px] font-bold leading-[1.16] tracking-[-0.03em] text-ink">
              No activities match these filters.
            </p>
            <p className="mt-2 text-[14px] leading-[1.6] text-body">
              Try a different area, or widen the age range.
            </p>
            <button
              type="button"
              onClick={() => {
                setScope('all');
                setArea('all');
              }}
              className="focus-ring sig-press mt-4 inline-flex min-h-[46px] items-center rounded-control bg-ink px-5 text-[14px] font-bold text-canvas"
            >
              Show all ages
            </button>
          </div>
        ) : (
          <>
            <p className="mt-5 text-[13px] font-semibold text-muted">
              <span className="sig-num">{activities.length}</span>{' '}
              {activities.length === 1 ? 'activity' : 'activities'}
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-2 md:gap-[18px] lg:grid-cols-3 lg:gap-5">
              {activities.map((m, i) => (
                <article
                  key={m.id}
                  className="animate-sig-enter sig-lift rounded-card border-2 border-ink bg-canvas p-4 sm:p-5"
                  style={{ animationDelay: `${Math.min(i, 7) * 45}ms` }}
                >
                  {/* The activity is the primary line */}
                  <p className="text-[15px] leading-[1.6] text-ink">
                    {m.parentTips[language] || m.parentTips.en}
                  </p>

                  <div className="mt-4 border-t border-page pt-3">
                    <div className="eyebrow text-muted">Supports</div>
                    <p className="mt-1.5 text-[13px] leading-[1.55] text-body">
                      {m.title[language] || m.title.en}
                    </p>
                    <p className="mt-1 text-[12px] text-muted">
                      {bandLabel(m.ageBandMonths)} · {t.domains[m.domain] || m.domain}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        <div className="mt-8">
          <Link
            href="/parent/tracker"
            className="focus-ring sig-press inline-flex min-h-[46px] items-center rounded-control border-2 border-line px-5 text-[14px] font-semibold text-body hover:border-ink"
          >
            Back to the tracker
          </Link>
        </div>
      </div>
    </div>
  );
}

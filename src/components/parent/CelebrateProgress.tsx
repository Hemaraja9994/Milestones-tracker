'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { ALL_MILESTONES } from '@/data/allMilestones';
import { AGE_BANDS } from '@/data/ageBands';
import { MilestoneStatus } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Celebrate progress — sits under the ring on the Parent Tracker.
 *
 * The honesty rule is the whole design: it names only milestones marked
 * "Yes, doing it consistently", by their database title, verbatim. Emerging
 * and not-yet-seen are counted, never named as achievements. No streaks, no
 * comparison to other children, no percentile, and nothing at all over an
 * empty record.
 *
 * Colour: the eyebrow is parent because the section lives in the parent
 * pathway; every tick and count is `achieved`. Clinician teal appears nowhere.
 */
export default function CelebrateProgress({
  statuses,
  selectedMonths,
}: {
  statuses: Record<string, MilestoneStatus>;
  selectedMonths: number;
}) {
  const { language } = useLanguage();

  const { marked, emerging, notYet, band, bandComplete, nextBand } = useMemo(() => {
    const items = ALL_MILESTONES.filter((m) => m.ageBandMonths === selectedMonths);
    const isMarked = (id: string) => {
      const s = statuses[id];
      return s === 'observed' || s === 'reported';
    };
    const band = AGE_BANDS.find((b) => b.months === selectedMonths);
    const i = AGE_BANDS.findIndex((b) => b.months === selectedMonths);
    const marked = items.filter((m) => isMarked(m.id));
    return {
      marked,
      emerging: items.filter((m) => statuses[m.id] === 'emerging').length,
      notYet: items.filter((m) => !statuses[m.id] || statuses[m.id] === 'not_observed').length,
      band,
      bandComplete: items.length > 0 && marked.length === items.length,
      nextBand: i >= 0 && i < AGE_BANDS.length - 1 ? AGE_BANDS[i + 1] : null,
    };
  }, [statuses, selectedMonths]);

  const bandName = band ? band.label[language] || band.label.en : '';

  /* Nothing marked — one plain sentence and the next action. No trophy, no
     encouragement about the child, only about the next tap. */
  if (marked.length === 0) {
    return (
      <section className="rounded-card border-2 border-line bg-canvas p-5">
        <div className="eyebrow text-parent-ink">Progress</div>
        <p className="mt-2 font-display text-[21px] font-bold leading-[1.16] tracking-[-0.03em] text-ink">
          Nothing marked yet
        </p>
        <p className="mt-2 max-w-[56ch] text-[14px] leading-[1.6] text-body">
          Mark the first milestone you have seen in the {bandName} band and it will appear here.
        </p>
      </section>
    );
  }

  return (
    <section
      className={`rounded-card border-2 bg-canvas p-5 ${
        bandComplete ? 'border-achieved' : 'border-line'
      }`}
      style={{ transition: 'border-color 260ms var(--ease-out)' }}
    >
      <div className="eyebrow text-parent-ink">Progress</div>

      {bandComplete ? (
        <>
          <p className="mt-2 font-display text-[21px] font-bold leading-[1.16] tracking-[-0.03em] text-ink">
            All {marked.length} milestones in the {bandName} band are marked
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5" aria-hidden>
            {marked.map((m) => (
              <span key={m.id} className="h-2.5 w-2.5 rounded-full bg-achieved" />
            ))}
          </div>
        </>
      ) : (
        <div className="mt-2 flex items-baseline gap-2">
          <span className="sig-num text-[32px] leading-none text-achieved-ink">
            {marked.length}
          </span>
          <span className="text-[14px] text-muted">
            marked in the {bandName} band
          </span>
        </div>
      )}

      {/* Only "Yes, doing it consistently" is named. */}
      <ul className="mt-4 flex flex-col gap-2">
        {marked.map((m) => (
          <li key={m.id} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-[18px] w-[18px] flex-none items-center justify-center rounded-[5px] bg-achieved">
              <Check className="h-3 w-3 text-canvas" strokeWidth={3.2} />
            </span>
            <span className="text-[14px] leading-[1.5] text-ink">
              {m.title[language] || m.title.en}
            </span>
          </li>
        ))}
      </ul>

      {/* Emerging and not-yet are counted, never named as achievements. */}
      {(emerging > 0 || notYet > 0) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {emerging > 0 && (
            <span className="sig-chip rounded-chip border-2 border-emerging bg-emerging-tint px-2.5 py-1.5 text-[12px] font-semibold text-emerging-ink">
              <span className="sig-num">{emerging}</span> just starting
            </span>
          )}
          {notYet > 0 && (
            <span className="sig-chip rounded-chip border-2 border-line px-2.5 py-1.5 text-[12px] font-semibold text-muted">
              <span className="sig-num">{notYet}</span> not yet seen
            </span>
          )}
        </div>
      )}

      {bandComplete && nextBand && (
        <Link
          href="/parent/activities"
          className="focus-ring sig-press mt-4 inline-flex min-h-[46px] items-center rounded-control border-2 border-line px-4 text-[14px] font-semibold text-body hover:border-ink"
        >
          Things to try for {nextBand.label[language] || nextBand.label.en}
        </Link>
      )}
    </section>
  );
}

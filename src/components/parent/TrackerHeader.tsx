'use client';

import React from 'react';
import { ProgressRing } from '@/components/signal';
import { AGE_BANDS } from '@/data/ageBands';
import { ALL_MILESTONES } from '@/data/allMilestones';
import { MilestoneStatus } from '@/types';

/**
 * The ink header of the parent tracker: ring, child line, band strip.
 *
 * The one rule from the handoff — the ring numeral, the strip cell, the band
 * chip and the banner all derive from a single pass over the status map on
 * every render. No count in state, no effect syncing two numbers, so the ring
 * and the list cannot drift apart.
 */
export function useBandProgress(statuses: Record<string, MilestoneStatus>) {
  return React.useMemo(() => {
    const marked = (id: string) => {
      const s = statuses[id];
      return s === 'observed' || s === 'reported';
    };

    const bands = AGE_BANDS.map((band) => {
      const items = ALL_MILESTONES.filter((m) => m.ageBandMonths === band.months);
      return {
        months: band.months,
        label: band.label,
        short: band.months >= 36 ? `${band.months / 12}y` : `${band.months}m`,
        done: items.filter((m) => marked(m.id)).length,
        total: items.length,
      };
    });

    return {
      bands,
      done: bands.reduce((n, b) => n + b.done, 0),
      total: bands.reduce((n, b) => n + b.total, 0),
    };
  }, [statuses]);
}

export default function TrackerHeader({
  childName,
  ageText,
  statuses,
  selectedMonths,
  onSelectBand,
}: {
  childName: string;
  ageText: string;
  statuses: Record<string, MilestoneStatus>;
  selectedMonths: number;
  onSelectBand: (months: number) => void;
}) {
  const { bands, done, total } = useBandProgress(statuses);
  const band = bands.find((b) => b.months === selectedMonths);
  const bandComplete = !!band && band.total > 0 && band.done === band.total;

  return (
    <div className="bg-ink">
      <div className="mx-auto max-w-[1240px] px-[18px] py-6 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-5">
          {/* celebrate is true only here — never on caseload rows or reports */}
          <ProgressRing done={band?.done ?? done} total={band?.total ?? total} celebrate />

          <div className="min-w-0">
            <div className="eyebrow text-clinician-dim">Parent Tracker</div>
            <h1 className="mt-1.5 font-display text-[26px] font-bold leading-[1.05] tracking-[-0.03em] text-canvas sm:text-[32px]">
              {childName}
            </h1>
            <p className="mt-1 text-[13px] text-clinician-dim">{ageText}</p>
            <p className="sig-num mt-2 text-[13px] text-clinician-soft">
              {done} of {total} marked across all ages
            </p>
          </div>
        </div>

        {/* 13-band strip — one cell per band, tappable */}
        <div className="mt-5 flex gap-[3px]">
          {bands.map((b) => {
            const complete = b.total > 0 && b.done === b.total;
            const started = b.done > 0;
            const active = b.months === selectedMonths;
            return (
              <button
                key={b.months}
                type="button"
                onClick={() => onSelectBand(b.months)}
                aria-label={`${b.label.en}: ${b.done} of ${b.total} marked`}
                aria-pressed={active}
                className="focus-ring group flex flex-1 flex-col items-center gap-1.5 rounded-[3px]"
              >
                <span
                  className="h-2 w-full rounded-[2px] transition-colors duration-200 ease-out"
                  style={{
                    background: complete
                      ? 'rgb(var(--achieved))'
                      : started
                      ? 'rgb(var(--parent))'
                      : 'rgb(var(--ink-soft))',
                  }}
                />
                <span
                  className={`sig-num text-[10px] leading-none transition-colors ${
                    active ? 'text-canvas' : 'text-clinician-dim group-hover:text-canvas'
                  }`}
                >
                  {b.short}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Band banner — the fourth thing derived from the same pass */}
      {band && (
        <div
          className={`border-t-2 border-ink px-[18px] py-3 sm:px-6 lg:px-10 ${
            bandComplete ? 'bg-achieved-tint' : 'bg-parent-tint'
          }`}
        >
          <p
            className={`mx-auto max-w-[1240px] text-[14px] font-semibold leading-[1.45] ${
              bandComplete ? 'text-achieved-ink' : 'text-parent-ink'
            }`}
          >
            {bandComplete
              ? `Band complete — all ${band.total} milestones in the ${band.label.en} band are marked.`
              : `${band.total - band.done} left in this band.`}
          </p>
        </div>
      )}
    </div>
  );
}

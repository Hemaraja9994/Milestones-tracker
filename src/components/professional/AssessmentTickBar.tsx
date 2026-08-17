'use client';

import React from 'react';
import { AGE_BANDS } from '@/data/ageBands';
import { MilestoneStatus } from '@/types';
import type { MilestoneWithMedia } from '@/data/allMilestones';

export interface BandTally {
  months: number;
  label: string;
  done: number;
  emerging: number;
  total: number;
}

/**
 * Running tick bar across every age band.
 *
 * One cell per band, sized to how many milestones that band holds, so the bar
 * is a true picture of the whole record rather than 13 equal boxes. Counts and
 * cells are computed from the same array that renders the sections below — the
 * bar can never disagree with the list.
 */
export function useBandTallies(
  milestones: MilestoneWithMedia[],
  statuses: Record<string, MilestoneStatus>
): BandTally[] {
  return React.useMemo(
    () =>
      AGE_BANDS.map((band) => {
        const items = milestones.filter((m) => m.ageBandMonths === band.months);
        return {
          months: band.months,
          label: band.months >= 36 ? `${band.months / 12}y` : `${band.months}m`,
          done: items.filter(
            (m) => statuses[m.id] === 'observed' || statuses[m.id] === 'reported'
          ).length,
          emerging: items.filter((m) => statuses[m.id] === 'emerging').length,
          total: items.length,
        };
      }),
    [milestones, statuses]
  );
}

export default function AssessmentTickBar({
  tallies,
  activeMonths,
  onJump,
}: {
  tallies: BandTally[];
  activeMonths?: number;
  onJump?: (months: number) => void;
}) {
  const done = tallies.reduce((n, b) => n + b.done, 0);
  const emerging = tallies.reduce((n, b) => n + b.emerging, 0);
  const total = tallies.reduce((n, b) => n + b.total, 0);

  return (
    <section className="rounded-card border-2 border-ink bg-canvas p-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="eyebrow text-muted">Recorded this session</div>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="sig-num text-[32px] leading-none text-ink">{done}</span>
            <span className="text-[14px] text-muted">of {total} marked</span>
          </div>
        </div>
        <ul className="flex flex-wrap gap-4 text-[12px] font-semibold text-muted">
          <li className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-[3px] bg-achieved" />
            {done} observed or reported
          </li>
          <li className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-[3px] bg-emerging" />
            {emerging} emerging
          </li>
        </ul>
      </div>

      {/* Cell width follows band size, so the bar reflects the real distribution */}
      <div className="mt-4 flex items-end gap-1">
        {tallies.map((b) => {
          const pctDone = b.total ? (b.done / b.total) * 100 : 0;
          const pctEmerging = b.total ? (b.emerging / b.total) * 100 : 0;
          const active = b.months === activeMonths;
          return (
            <button
              key={b.months}
              type="button"
              onClick={() => onJump?.(b.months)}
              aria-label={`${b.label}: ${b.done} of ${b.total} marked`}
              className="focus-ring group flex flex-col items-center gap-1.5 rounded-chip"
              style={{ flexGrow: Math.max(b.total, 1), flexBasis: 0 }}
            >
              <span className="flex h-2.5 w-full overflow-hidden rounded-[3px] bg-page">
                <span
                  className="h-full bg-achieved transition-[width] duration-200 ease-out"
                  style={{ width: `${pctDone}%` }}
                />
                <span
                  className="h-full bg-emerging transition-[width] duration-200 ease-out"
                  style={{ width: `${pctEmerging}%` }}
                />
              </span>
              <span
                className={`sig-num text-[10px] leading-none transition-colors ${
                  active ? 'text-ink' : 'text-muted-nav group-hover:text-body'
                }`}
              >
                {b.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

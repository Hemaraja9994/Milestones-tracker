'use client';

import React, { useMemo, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { ALL_MILESTONES } from '@/data/allMilestones';
import { AGE_BANDS } from '@/data/ageBands';
import { MilestoneStatus } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

const STEP = 96; // horizontal distance between stops
const AMP = 26; // how far the path rises and falls
const PAD = 56;
const HEIGHT = 190;

/**
 * The age bands drawn as a path a child travels, rather than a row of chips.
 *
 * Each stop is a real <button>, so the map is the selector — no duplicate
 * control to keep in sync, and keyboard users get the same thing. The road
 * behind it is decorative and marked aria-hidden.
 */
export default function MilestoneJourney({
  statuses,
  selectedAgeBand,
  onSelect,
}: {
  statuses: Record<string, MilestoneStatus>;
  selectedAgeBand: number;
  onSelect: (months: number) => void;
}) {
  const { language } = useLanguage();
  const railRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  const stops = useMemo(
    () =>
      AGE_BANDS.map((band, i) => {
        const items = ALL_MILESTONES.filter((m) => m.ageBandMonths === band.months);
        const done = items.filter(
          (m) => statuses[m.id] === 'observed' || statuses[m.id] === 'reported'
        ).length;
        const started = items.some((m) => statuses[m.id] && statuses[m.id] !== 'not_observed');
        return {
          months: band.months,
          label: band.months >= 36 ? `${band.months / 12} yr` : `${band.months} mo`,
          fullLabel: band.label[language] || band.label.en,
          total: items.length,
          done,
          complete: items.length > 0 && done === items.length,
          started,
          x: PAD + i * STEP,
          y: HEIGHT / 2 + (i % 2 === 0 ? -AMP : AMP),
        };
      }),
    [statuses, language]
  );

  const width = PAD * 2 + (AGE_BANDS.length - 1) * STEP;

  // Keep the current stop in view without yanking the whole page.
  useEffect(() => {
    const rail = railRef.current;
    const node = selectedRef.current;
    if (!rail || !node) return;
    const target = node.offsetLeft - rail.clientWidth / 2 + node.clientWidth / 2;
    rail.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [selectedAgeBand]);

  // Smooth S-curve through every stop.
  const road = stops
    .map((s, i) => {
      if (i === 0) return `M ${s.x} ${s.y}`;
      const prev = stops[i - 1];
      const midX = (prev.x + s.x) / 2;
      return `C ${midX} ${prev.y}, ${midX} ${s.y}, ${s.x} ${s.y}`;
    })
    .join(' ');

  const totalDone = stops.reduce((n, s) => n + s.done, 0);
  const totalAll = stops.reduce((n, s) => n + s.total, 0);

  return (
    <section className="overflow-hidden rounded-panel border border-line-warm bg-surface-raised">
      <div className="flex flex-wrap items-end justify-between gap-4 px-5 pb-1 pt-5 sm:px-7 sm:pt-6">
        <div>
          <div className="eyebrow tracking-[0.08em] text-parent-600">Your child&apos;s path</div>
          <h2 className="mt-2 font-display text-[20px] font-extrabold leading-[1.18] text-ink sm:text-[24px]">
            Birth to 6 years, one stop at a time
          </h2>
        </div>
        <p className="text-[13px] text-ink-warm">
          <span className="font-display text-[22px] font-extrabold tabular-nums text-ink">
            {totalDone}
          </span>{' '}
          of {totalAll} ticked
        </p>
      </div>

      <div ref={railRef} className="scroll-rail px-5 pb-5 pt-2 sm:px-7">
        <div className="relative shrink-0" style={{ width, height: HEIGHT }}>
          <svg
            width={width}
            height={HEIGHT}
            viewBox={`0 0 ${width} ${HEIGHT}`}
            className="absolute inset-0"
            aria-hidden="true"
          >
            {/* the road */}
            <path
              d={road}
              fill="none"
              className="stroke-line-rule"
              strokeWidth={18}
              strokeLinecap="round"
            />
            {/* dashed centre line, the way a route is drawn on a map */}
            <path
              d={road}
              fill="none"
              className="stroke-surface-raised"
              strokeWidth={2}
              strokeDasharray="7 9"
              strokeLinecap="round"
              opacity={0.9}
            />
          </svg>

          {stops.map((stop) => {
            const selected = stop.months === selectedAgeBand;
            return (
              <button
                key={stop.months}
                ref={selected ? selectedRef : undefined}
                type="button"
                onClick={() => onSelect(stop.months)}
                aria-pressed={selected}
                aria-label={`${stop.fullLabel} — ${stop.done} of ${stop.total} milestones ticked`}
                className="focus-ring absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                style={{ left: stop.x, top: stop.y }}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-[3px] text-[13px] font-bold tabular-nums transition-colors ${
                    selected
                      ? 'border-parent-600 bg-parent-600 text-white shadow-elevated dark:text-ink-invert'
                      : stop.complete
                      ? 'border-achieved bg-achieved text-white dark:text-ink-invert'
                      : stop.started
                      ? 'border-emerging bg-emerging-tint text-emerging-ink'
                      : 'border-line-strong bg-surface-raised text-ink-muted'
                  }`}
                >
                  {stop.complete && !selected ? (
                    <Check className="h-5 w-5" strokeWidth={3} />
                  ) : (
                    `${stop.done}/${stop.total}`
                  )}
                </span>
                <span
                  className={`whitespace-nowrap text-[12px] ${
                    selected ? 'font-bold text-ink' : 'font-semibold text-ink-muted'
                  }`}
                >
                  {stop.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

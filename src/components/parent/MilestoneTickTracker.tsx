'use client';

import React, { useMemo } from 'react';
import { COMPREHENSIVE_MILESTONES } from '@/data/milestones';
import { AGE_BANDS } from '@/data/ageBands';
import { MilestoneStatus } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

type TickState = 'achieved' | 'emerging' | 'pending';

/**
 * Running tick tracker — a persistent rail across all age bands.
 *
 * Each tick is one milestone marked "Yes, doing it consistently"; the running
 * total counts up as ticks land, so a parent sees accumulation rather than a
 * single band's score. Amber ticks are "Sometimes / Just starting", hollow
 * ticks are not yet seen.
 */
export default function MilestoneTickTracker({
  statuses,
  className,
}: {
  statuses: Record<string, MilestoneStatus>;
  className?: string;
}) {
  const { t } = useLanguage();

  const { bands, totals } = useMemo(() => {
    const stateOf = (id: string): TickState => {
      const s = statuses[id];
      if (s === 'observed' || s === 'reported') return 'achieved';
      if (s === 'emerging') return 'emerging';
      return 'pending';
    };

    const rank: Record<TickState, number> = { achieved: 0, emerging: 1, pending: 2 };

    const bands = AGE_BANDS.map((band) => {
      const items = COMPREHENSIVE_MILESTONES.filter((m) => m.ageBandMonths === band.months);
      const ticks = items.map((m) => stateOf(m.id)).sort((a, b) => rank[a] - rank[b]);
      return {
        months: band.months,
        // Design shorthand: months up to 30 read "mo", 3 years and above read "y".
        shortLabel: band.months >= 36 ? `${band.months / 12} y` : `${band.months} mo`,
        fullLabel: band.label,
        ticks,
      };
    });

    const achievedIn = (domain?: string) =>
      COMPREHENSIVE_MILESTONES.filter(
        (m) => (!domain || m.domain === domain) && stateOf(m.id) === 'achieved'
      ).length;

    return {
      bands,
      totals: {
        ticked: achievedIn(),
        all: COMPREHENSIVE_MILESTONES.length,
        receptive: achievedIn('language_receptive'),
        expressive: achievedIn('language_expressive'),
        auditory: achievedIn('auditory_hearing'),
      },
    };
  }, [statuses]);

  return (
    <section
      className={`rounded-[20px] border border-line-warm bg-surface-raised p-6 sm:p-7 ${className ?? ''}`}
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="eyebrow tracking-[0.08em] text-ink-warm">Milestones ticked</div>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="font-display text-[44px] font-extrabold leading-none tabular-nums text-ink sm:text-[52px]">
              {totals.ticked}
            </span>
            <span className="text-[15px] text-ink-warm">
              of {totals.all} across {AGE_BANDS.length} age bands
            </span>
          </div>
        </div>

        <ul className="flex flex-wrap gap-4 text-xs font-semibold text-ink-soft sm:gap-[18px]">
          <LegendItem className="bg-achieved">Consistently</LegendItem>
          <LegendItem className="bg-emerging">Emerging</LegendItem>
          <LegendItem className="border-[1.5px] border-line-strong">Not yet</LegendItem>
        </ul>
      </div>

      {/* Rail — one column per age band, ticks stack from the baseline up */}
      <div className="mt-6 flex items-end gap-1 sm:gap-1.5">
        {bands.map((band) => (
          <div key={band.months} className="flex flex-1 flex-col items-center gap-2">
            <div
              className="flex w-full flex-col-reverse gap-1"
              role="img"
              aria-label={`${band.fullLabel.en}: ${band.ticks.filter((s) => s === 'achieved').length} of ${band.ticks.length} ticked`}
            >
              {band.ticks.map((state, i) => (
                <span
                  key={i}
                  className={`h-3 rounded ${
                    state === 'achieved'
                      ? 'bg-achieved'
                      : state === 'emerging'
                      ? 'bg-emerging'
                      : 'border-[1.5px] border-line-strong'
                  }`}
                />
              ))}
            </div>
            <span className="h-[3px] w-full rounded-full bg-line-rule" />
            <span className="whitespace-nowrap text-[10px] font-semibold text-ink-muted sm:text-[11px]">
              {band.shortLabel}
            </span>
          </div>
        ))}
      </div>

      {/* Domain accumulation */}
      <div className="mt-6 flex flex-wrap gap-3 border-t border-line-rule pt-5">
        <DomainTally label={t.parent.receptive_gauge} count={totals.receptive} />
        <DomainTally label={t.parent.expressive_gauge} count={totals.expressive} />
        <DomainTally label={t.parent.auditory_gauge} count={totals.auditory} />
      </div>
    </section>
  );
}

function LegendItem({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2 whitespace-nowrap">
      <span className={`h-3 w-3 rounded ${className}`} />
      {children}
    </li>
  );
}

function DomainTally({ label, count }: { label: string; count: number }) {
  return (
    <div className="min-w-[200px] flex-1 rounded-card border border-line-rule bg-surface-canvas px-[18px] py-4">
      <div className="text-xs font-semibold text-ink-soft">{label}</div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="font-display text-[26px] font-extrabold leading-none tabular-nums text-ink">
          {count}
        </span>
        <span className="text-xs text-ink-warm">ticked</span>
      </div>
    </div>
  );
}

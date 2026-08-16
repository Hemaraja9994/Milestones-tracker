'use client';

import React from 'react';
import { Badge, GaugeRow, NotePanel } from '@/components/ui/Primitives';
import { ClinicalSnapshot } from '@/lib/calculationEngine';
import { AgeCalculationResult } from '@/lib/correctedAge';
import { useLanguage } from '@/context/LanguageContext';

interface DevelopmentalAgeGaugeProps {
  ageResult: AgeCalculationResult;
  snapshot: ClinicalSnapshot;
}

export default function DevelopmentalAgeGauge({ ageResult, snapshot }: DevelopmentalAgeGaugeProps) {
  const { t } = useLanguage();

  const maxVal =
    Math.max(
      ageResult.chronologicalMonths,
      snapshot.estimatedReceptiveAgeMonths,
      snapshot.estimatedExpressiveAgeMonths,
      snapshot.estimatedAuditoryAgeMonths,
      24
    ) * 1.15;

  const gap = Math.abs(
    snapshot.estimatedReceptiveAgeMonths - snapshot.estimatedExpressiveAgeMonths
  );

  return (
    <section className="rounded-panel border border-line-warm bg-surface-raised p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line-rule pb-4">
        <div>
          <h3 className="font-sans text-sm font-semibold text-ink">
            {t.professional.estimated_ages}
          </h3>
          <p className="mt-1.5 max-w-[68ch] text-xs leading-[1.6] text-ink-muted">
            Non-standardized surveillance snapshot based on highest consistent milestone mastery
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs text-ink-muted">
            Target age{' '}
            <span className="font-bold tabular-nums text-ink">{ageResult.effectiveAgeMonths} mo</span>
          </span>
          {ageResult.isPremature && (
            <Badge variant="warning">Corrected ({ageResult.prematurityWeeks}w early)</Badge>
          )}
        </div>
      </div>

      {/* 8px bars on clinician screens; a raw count always sits beside the bar */}
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <GaugeRow
          label={t.professional.receptive_age}
          valueLabel={`${snapshot.estimatedReceptiveAgeMonths} mo`}
          value={snapshot.estimatedReceptiveAgeMonths}
          max={maxVal}
          colorClass="bg-brand-600 dark:bg-brand-400"
          footnote={
            <span className="flex flex-wrap justify-between gap-2">
              <span>Baseline: {snapshot.receptiveCeilingBand}m band</span>
              <span>{snapshot.receptiveDelayFlag ? 'Delayed' : 'On track'}</span>
            </span>
          }
        />
        <GaugeRow
          label={t.professional.expressive_age}
          valueLabel={`${snapshot.estimatedExpressiveAgeMonths} mo`}
          value={snapshot.estimatedExpressiveAgeMonths}
          max={maxVal}
          colorClass="bg-emerging"
          footnote={
            <span className="flex flex-wrap justify-between gap-2">
              <span>Ceiling: {snapshot.expressiveCeilingBand}m band</span>
              <span>{snapshot.expressiveDelayFlag ? 'Delayed' : 'On track'}</span>
            </span>
          }
        />
        <GaugeRow
          label={t.professional.auditory_age}
          valueLabel={`${snapshot.estimatedAuditoryAgeMonths} mo`}
          value={snapshot.estimatedAuditoryAgeMonths}
          max={maxVal}
          colorClass="bg-achieved"
          footnote={
            <span className="flex flex-wrap justify-between gap-2">
              <span>Northern &amp; Downs: Level IV</span>
              <span>{snapshot.auditoryDelayFlag ? 'Screen needed' : 'Age-typical'}</span>
            </span>
          }
        />
      </div>

      {gap >= 4 && (
        <NotePanel tone="emerging" className="mt-5">
          <span className="font-semibold">Significant Receptive-Expressive Gap Detected:</span>{' '}
          Receptive language leads expressive output by {gap.toFixed(1)} months. This pattern is
          characteristic of isolated expressive language delay / late talker profile.
        </NotePanel>
      )}
    </section>
  );
}

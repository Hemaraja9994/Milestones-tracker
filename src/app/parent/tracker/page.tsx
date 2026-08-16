'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { COMPREHENSIVE_MILESTONES } from '@/data/milestones';
import { AGE_BANDS } from '@/data/ageBands';
import { MilestoneStatus, AssessmentRecord } from '@/types';
import ParentMilestoneCard from '@/components/parent/ParentMilestoneCard';
import MilestoneTickTracker from '@/components/parent/MilestoneTickTracker';
import { NotePanel } from '@/components/ui/Primitives';

const DOMAIN_FILTERS: { value: string; label: string }[] = [
  { value: 'all', label: 'All Skills' },
  { value: 'language_receptive', label: 'Understanding Words (Receptive)' },
  { value: 'language_expressive', label: 'Talking & Gestures (Expressive)' },
  { value: 'auditory_hearing', label: 'Hearing & Listening (Auditory)' },
  { value: 'social_pragmatic', label: 'Social & Play' },
];

export default function ParentMilestoneTracker() {
  const { childrenList, activeChild, assessments, saveCurrentAssessment } = useChild();
  const { language, t } = useLanguage();

  const child = activeChild || childrenList[0];

  const ageResult = child
    ? calculateChildAges(child.dateOfBirth, child.gestationalWeeks)
    : {
        chronologicalMonths: 24,
        effectiveAgeMonths: 24,
        recommendedAgeBandMonths: 24,
        isPremature: false,
        chronologicalText: { en: '24 months', hi: '24 महीने', kn: '24 ತಿಂಗಳು' },
        correctedText: { en: '24 months', hi: '24 महीने', kn: '24 ತಿಂಗಳು' },
      };

  const [selectedAgeBand, setSelectedAgeBand] = useState<number>(ageResult.recommendedAgeBandMonths);
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const existingAssessment = assessments.find((a) => a.childId === child?.id);
  const [statuses, setStatuses] = useState<Record<string, MilestoneStatus>>(
    existingAssessment?.milestoneStatuses || {}
  );

  const handleStatusChange = (milestoneId: string, newStatus: MilestoneStatus) => {
    const updatedStatuses = { ...statuses, [milestoneId]: newStatus };
    setStatuses(updatedStatuses);

    if (child) {
      const assessmentToSave: AssessmentRecord = {
        id: existingAssessment?.id || `parent_sess_${child.id}_${Date.now()}`,
        childId: child.id,
        sessionDate: new Date().toISOString().split('T')[0],
        sessionNumber: existingAssessment ? existingAssessment.sessionNumber : 1,
        examinerName: 'Parent / Caregiver',
        examinerRole: 'Caregiver Observation',
        milestoneStatuses: updatedStatuses,
        milestoneNotes: existingAssessment?.milestoneNotes || {},
      };
      saveCurrentAssessment(assessmentToSave);
    }
  };

  const band = AGE_BANDS.find((b) => b.months === selectedAgeBand);
  const milestonesInBand = COMPREHENSIVE_MILESTONES.filter(
    (m) =>
      m.ageBandMonths === selectedAgeBand &&
      (selectedDomain === 'all' || m.domain === selectedDomain)
  );

  const bandDomainTally = (domain: string) => {
    const items = COMPREHENSIVE_MILESTONES.filter(
      (m) => m.ageBandMonths === selectedAgeBand && m.domain === domain
    );
    const seen = items.filter(
      (m) => statuses[m.id] === 'observed' || statuses[m.id] === 'reported'
    ).length;
    return { seen, total: items.length };
  };

  const tallies = [
    { label: t.parent.receptive_gauge, fill: 'bg-achieved', ...bandDomainTally('language_receptive') },
    { label: t.parent.expressive_gauge, fill: 'bg-emerging', ...bandDomainTally('language_expressive') },
    {
      label: t.parent.auditory_gauge,
      fill: 'bg-brand-600 dark:bg-brand-400',
      ...bandDomainTally('auditory_hearing'),
    },
  ];

  return (
    <div className="bg-surface-canvas">
      {/* ================= Header ================= */}
      <div className="border-b border-line-rule bg-surface-raised">
        <div className="mx-auto max-w-[1240px] px-[18px] pb-6 pt-8 sm:px-6 lg:px-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <Link
                href="/parent"
                aria-label={t.common.back}
                className="focus-ring mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line-warm text-ink-body"
              >
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <div>
                <div className="eyebrow tracking-[0.1em] text-parent-600">{t.parent.welcome}</div>
                <h1 className="mt-2.5 font-display text-[30px] font-extrabold leading-[1.1] text-ink sm:text-[38px]">
                  {t.parent.tracker_title}
                </h1>
                {child && (
                  <p className="mt-2 text-[13px] text-ink-muted">
                    Tracking {child.nameOrInitials} ·{' '}
                    {ageResult.chronologicalText[language] || ageResult.chronologicalText.en}
                  </p>
                )}
              </div>
            </div>

            {child && (
              <Link
                href={`/professional/${child.id}/report`}
                className="focus-ring inline-flex min-h-[46px] items-center rounded-xl border border-line-warm px-4 text-[13px] font-semibold text-ink-body"
              >
                {t.parent.share_with_doctor}
              </Link>
            )}
          </div>

          {/* Age band chips — horizontal rail at 46px on a phone */}
          <div className="mt-6 text-[13px] font-semibold text-ink-soft">{t.parent.choose_age}</div>
          <div className="scroll-rail mt-3">
            {AGE_BANDS.map((b) => {
              const selected = selectedAgeBand === b.months;
              return (
                <button
                  key={b.months}
                  type="button"
                  onClick={() => setSelectedAgeBand(b.months)}
                  aria-pressed={selected}
                  className={`focus-ring inline-flex min-h-[46px] shrink-0 items-center rounded-xl px-[18px] text-sm transition-colors ${
                    selected
                      ? 'bg-parent-600 font-semibold text-white dark:text-ink-invert'
                      : 'border border-line-warm bg-surface-raised font-medium text-ink-body hover:text-ink'
                  }`}
                >
                  {b.label[language] || b.label.en}
                </button>
              );
            })}
          </div>
          {band && (
            <p className="mt-3.5 text-xs text-ink-warm">
              {band.rangeDescription[language] || band.rangeDescription.en}
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-[18px] py-7 sm:px-6 lg:px-9 lg:py-9">
        <MilestoneTickTracker statuses={statuses} />

        {/* Band tallies — a raw count always sits beside the bar */}
        <div className="grid gap-4 md:grid-cols-3">
          {tallies.map((tally) => (
            <div
              key={tally.label}
              className="rounded-card border border-line-warm bg-surface-raised p-5"
            >
              <div className="text-[13px] font-semibold text-ink-body">{tally.label}</div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-[32px] font-extrabold leading-none tabular-nums text-ink">
                  {tally.seen}
                </span>
                <span className="text-[13px] text-ink-warm">of {tally.total} seen</span>
              </div>
              <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-line-rule">
                <div
                  className={`h-full rounded-full transition-[width] duration-500 ${tally.fill}`}
                  style={{ width: `${tally.total ? (tally.seen / tally.total) * 100 : 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Domain filters */}
        <div className="scroll-rail">
          {DOMAIN_FILTERS.map((filter) => {
            const selected = selectedDomain === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setSelectedDomain(filter.value)}
                aria-pressed={selected}
                className={`focus-ring inline-flex min-h-[46px] shrink-0 items-center rounded-xl px-4 text-[13px] transition-colors ${
                  selected
                    ? 'bg-ink font-semibold text-surface-raised'
                    : 'border border-line-warm bg-surface-raised font-medium text-ink-body hover:text-ink'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Milestone cards */}
        <div className="flex flex-col gap-4">
          {milestonesInBand.length === 0 ? (
            <div className="rounded-card border border-line-warm bg-surface-raised px-6 py-12 text-center text-[13px] text-ink-muted">
              No milestones found for this age and domain filter. Choose another age or filter!
            </div>
          ) : (
            milestonesInBand.map((milestone) => (
              <ParentMilestoneCard
                key={milestone.id}
                milestone={milestone}
                status={statuses[milestone.id] || 'not_observed'}
                onStatusChange={(newStatus) => handleStatusChange(milestone.id, newStatus)}
              />
            ))
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <NotePanel tone="achieved">{t.parent.gentle_note}</NotePanel>
          <NotePanel tone="parent">{t.parent.bilingual_reassurance}</NotePanel>
        </div>

        {child && (
          <Link
            href={`/professional/${child.id}/report`}
            className="focus-ring inline-flex min-h-[54px] items-center justify-center rounded-full bg-ink px-6 text-[15px] font-semibold text-surface-raised"
          >
            {t.parent.share_with_doctor}
          </Link>
        )}
      </div>
    </div>
  );
}

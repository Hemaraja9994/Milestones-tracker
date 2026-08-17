'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { computeClinicalSnapshot } from '@/lib/calculationEngine';
import { ALL_MILESTONES } from '@/data/allMilestones';
import { AGE_BANDS } from '@/data/ageBands';
import { MilestoneStatus, AssessmentRecord } from '@/types';
import { Button } from '@/components/ui/Primitives';
import DevelopmentalAgeGauge from '@/components/professional/DevelopmentalAgeGauge';
import MilestoneAssessmentRow from '@/components/professional/MilestoneAssessmentRow';
import AssessmentTickBar, { useBandTallies } from '@/components/professional/AssessmentTickBar';

const DOMAIN_OPTIONS = [
  { value: 'all', label: 'All Domains' },
  { value: 'auditory_hearing', label: 'Auditory & Hearing (Northern & Downs / AIISH)' },
  { value: 'language_receptive', label: 'Receptive Language (Understanding)' },
  { value: 'language_expressive', label: 'Expressive Language (Speaking)' },
  { value: 'speech_articulation', label: 'Speech & Articulation (Crowe & McLeod)' },
  { value: 'social_pragmatic', label: 'Social & Pragmatic' },
  { value: 'cognitive', label: 'Cognitive Development' },
];

export default function ChildAssessmentWorkspace() {
  const params = useParams();
  const childId = params?.childId as string;

  const { childrenList, assessments, saveCurrentAssessment } = useChild();
  const { language, t } = useLanguage();

  const child = childrenList.find((c) => c.id === childId) || childrenList[0];

  const ageResult = calculateChildAges(child?.dateOfBirth || '2023-01-01', child?.gestationalWeeks);

  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const existingAssessment = assessments.find((a) => a.childId === childId);
  const [sessionRecord, setSessionRecord] = useState<AssessmentRecord>(() => {
    if (existingAssessment) return existingAssessment;
    return {
      id: `sess_${childId}_${Date.now()}`,
      childId,
      sessionDate: new Date().toISOString().split('T')[0],
      sessionNumber: (assessments.filter((a) => a.childId === childId).length || 0) + 1,
      examinerName: 'Consultant SLP / Pediatric Evaluator',
      examinerRole: 'Speech-Language Pathologist',
      milestoneStatuses: {},
      milestoneNotes: {},
      overallClinicalNotes: '',
      recommendations: '',
    };
  });

  const [savedAlert, setSavedAlert] = useState(false);

  /*
   * ChildContext hydrates from localStorage in an effect, so on first render
   * `existingAssessment` is undefined and the useState initialiser above builds
   * an empty session. Without this, reopening a child's file showed a blank
   * record and the next save would overwrite the real one. Adopt the stored
   * record once, the first time it arrives.
   */
  const hydrated = useRef(false);
  useEffect(() => {
    if (!hydrated.current && existingAssessment) {
      setSessionRecord(existingAssessment);
      hydrated.current = true;
    }
  }, [existingAssessment]);

  const tallies = useBandTallies(ALL_MILESTONES, sessionRecord.milestoneStatuses);

  const snapshot = computeClinicalSnapshot(
    ageResult.effectiveAgeMonths,
    sessionRecord.milestoneStatuses,
    child
  );

  const persist = (updated: AssessmentRecord) => {
    setSessionRecord(updated);
    saveCurrentAssessment(updated);
  };

  const handleSaveAll = () => {
    saveCurrentAssessment(sessionRecord);
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);
  };

  if (!child) {
    return (
      <div className="mx-auto max-w-[1240px] px-[18px] py-16 text-center sm:px-6 lg:px-9">
        <p className="text-sm text-ink-body">Child profile not found.</p>
        <Link
          href="/professional"
          className="mt-3 inline-block text-sm font-semibold text-brand-600 underline dark:text-brand-400"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const filteredMilestones = ALL_MILESTONES.filter(
    (m) => selectedDomain === 'all' || m.domain === selectedDomain
  );

  return (
    <div className="bg-surface-canvas">
      {/* ================= Header ================= */}
      <div className="border-b border-line-rule bg-surface-raised">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-between gap-6 px-[18px] pb-7 pt-8 sm:px-6 lg:px-9">
          <div className="flex items-start gap-3.5">
            <Link
              href="/professional"
              aria-label={t.common.back}
              className="focus-ring mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-warm text-ink-body"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <div className="eyebrow tracking-[0.1em] text-brand-600 dark:text-brand-400">
                Session #{sessionRecord.sessionNumber} ·{' '}
                {ageResult.chronologicalText[language] || ageResult.chronologicalText.en}
              </div>
              <h1 className="mt-2.5 font-display text-[30px] font-extrabold leading-[1.1] text-ink sm:text-[38px]">
                Clinical Assessment: {child.nameOrInitials}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <Button variant="outline" size="md" onClick={handleSaveAll}>
              {savedAlert ? 'Saved ✓' : t.common.save}
            </Button>
            <Link
              href={`/professional/${child.id}/report`}
              className="focus-ring inline-flex min-h-[46px] items-center rounded-full bg-ink px-4 text-[13px] font-semibold text-surface-raised"
            >
              {t.common.export_pdf}
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-[18px] py-7 sm:px-6 lg:px-9 lg:py-9">
        <DevelopmentalAgeGauge ageResult={ageResult} snapshot={snapshot} />

        <AssessmentTickBar
          tallies={tallies}
          onJump={(months) =>
            document
              .getElementById(`band-${months}`)
              ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        />

        {/* Domains stay visible as chips — a dropdown hid which areas exist */}
        <section className="rounded-card border-2 border-line bg-canvas p-5">
          <div className="text-[13px] font-semibold text-body">Domain</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {DOMAIN_OPTIONS.map((opt) => {
              const selected = selectedDomain === opt.value;
              const count =
                opt.value === 'all'
                  ? ALL_MILESTONES.length
                  : ALL_MILESTONES.filter((m) => m.domain === opt.value).length;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedDomain(opt.value)}
                  aria-pressed={selected}
                  className={`focus-ring sig-chip sig-press inline-flex min-h-[46px] items-center gap-2 rounded-control border-2 px-4 text-[13px] transition-colors duration-150 ease-out ${
                    selected
                      ? 'border-clinician bg-clinician-tint font-bold text-clinician-ink'
                      : 'border-line font-semibold text-body hover:border-ink'
                  }`}
                >
                  {opt.label}
                  <span className="sig-num text-[11px] opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* One always-open section per age band — nothing collapses, so the
            whole record is scannable in one pass. */}
        {AGE_BANDS.map((band) => {
          const items = filteredMilestones.filter((m) => m.ageBandMonths === band.months);
          if (items.length === 0) return null;
          const marked = items.filter((m) => {
            const st = sessionRecord.milestoneStatuses[m.id];
            return st === 'observed' || st === 'reported';
          }).length;

          return (
            <section key={band.months} id={`band-${band.months}`} className="scroll-mt-24">
              <header className="sticky top-[58px] z-10 -mx-[18px] flex flex-wrap items-baseline justify-between gap-3 border-y-2 border-ink bg-page px-[18px] py-3 sm:-mx-6 sm:px-6 md:top-[66px] lg:-mx-9 lg:px-9">
                <h2 className="font-display text-[17px] font-bold tracking-[-0.03em] text-ink">
                  {band.label[language] || band.label.en}
                </h2>
                <span className="sig-num text-[13px] text-muted">
                  {marked}/{items.length} marked
                </span>
              </header>

              <div className="mt-3 flex flex-col gap-3">
                {items.map((milestone) => (
                  <MilestoneAssessmentRow
                    key={milestone.id}
                    milestone={milestone}
                    status={sessionRecord.milestoneStatuses[milestone.id] || 'not_observed'}
                    clinicalNote={sessionRecord.milestoneNotes[milestone.id] || ''}
                    onStatusChange={(newStatus: MilestoneStatus) =>
                      persist({
                        ...sessionRecord,
                        milestoneStatuses: {
                          ...sessionRecord.milestoneStatuses,
                          [milestone.id]: newStatus,
                        },
                      })
                    }
                    onNoteChange={(note: string) =>
                      persist({
                        ...sessionRecord,
                        milestoneNotes: { ...sessionRecord.milestoneNotes, [milestone.id]: note },
                      })
                    }
                  />
                ))}
              </div>
            </section>
          );
        })}

        {/* Impressions */}
        <section className="rounded-card border border-line-warm bg-surface-raised p-5 sm:p-6">
          <h2 className="font-sans text-sm font-semibold text-ink">
            Overall Clinical Impressions &amp; Action Plan
          </h2>

          <label className="mt-4 block">
            <span className="mb-2 block text-[13px] font-semibold text-ink-body">
              Clinical Impressions / Session Summary
            </span>
            <textarea
              rows={3}
              value={sessionRecord.overallClinicalNotes || ''}
              onChange={(e) => persist({ ...sessionRecord, overallClinicalNotes: e.target.value })}
              placeholder={t.professional.clinical_notes_placeholder}
              className="focus-ring w-full rounded-xl border border-line-rule bg-surface-canvas p-3.5 text-[13px] leading-[1.6] text-ink placeholder:text-ink-warm"
            />
          </label>

          <label className="mt-4 block">
            <span className="mb-2 block text-[13px] font-semibold text-ink-body">
              Recommendations &amp; Follow-up Plan
            </span>
            <textarea
              rows={2}
              value={sessionRecord.recommendations || ''}
              onChange={(e) => persist({ ...sessionRecord, recommendations: e.target.value })}
              placeholder={t.professional.recommendation_placeholder}
              className="focus-ring w-full rounded-xl border border-line-rule bg-surface-canvas p-3.5 text-[13px] leading-[1.6] text-ink placeholder:text-ink-warm"
            />
          </label>

          <div className="mt-4 flex justify-end">
            <Button variant="primary" size="md" onClick={handleSaveAll}>
              {savedAlert ? 'Saved ✓' : 'Save Assessment Session'}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}


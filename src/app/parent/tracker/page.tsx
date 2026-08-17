'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { ALL_MILESTONES } from '@/data/allMilestones';
import { AGE_BANDS } from '@/data/ageBands';
import { isSampleChild } from '@/lib/storage';
import { ChildProfile, MilestoneStatus, AssessmentRecord } from '@/types';
import ParentMilestoneCard from '@/components/parent/ParentMilestoneCard';
import MilestoneTickTracker from '@/components/parent/MilestoneTickTracker';
import FirstRunPanel from '@/components/parent/FirstRunPanel';
import MilestoneArt from '@/components/parent/MilestoneArt';
import MilestoneJourney from '@/components/parent/MilestoneJourney';
import TrackerHeader from '@/components/parent/TrackerHeader';
import CelebrateProgress from '@/components/parent/CelebrateProgress';
import { Badge, NotePanel } from '@/components/ui/Primitives';

const DOMAIN_FILTERS: { value: string; label: string }[] = [
  { value: 'all', label: 'All Skills' },
  { value: 'language_receptive', label: 'Understanding Words (Receptive)' },
  { value: 'language_expressive', label: 'Talking & Gestures (Expressive)' },
  { value: 'auditory_hearing', label: 'Hearing & Listening (Auditory)' },
  { value: 'social_pragmatic', label: 'Social & Play' },
  { value: 'speech_articulation', label: 'Speech Sounds' },
  { value: 'cognitive', label: 'Thinking & Problem Solving' },
];

export default function ParentMilestoneTracker() {
  const { childrenList, activeChild, setActiveChild, createOrUpdateChild, assessments, saveCurrentAssessment } =
    useChild();
  const { language, t } = useLanguage();

  const [browsingSample, setBrowsingSample] = useState(false);
  const [mounted, setMounted] = useState(false);
  React.useEffect(() => setMounted(true), []);

  const ownChildren = childrenList.filter((c) => !isSampleChild(c.id));
  const sampleChildren = childrenList.filter((c) => isSampleChild(c.id));

  /* A tick is only persisted when there is a child to attach it to, so never
     show the checklist without one — otherwise a parent ticks milestones that
     silently go nowhere. */
  const child =
    (activeChild && (!isSampleChild(activeChild.id) || browsingSample) ? activeChild : null) ||
    ownChildren[0] ||
    (browsingSample ? childrenList[0] : null);

  const needsFirstRun = !child;

  const handleCreate = (newChild: ChildProfile) => {
    createOrUpdateChild(newChild);
    setActiveChild(newChild);
    setBrowsingSample(false);
  };

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

  // A newly added child changes the recommended band; follow it.
  React.useEffect(() => {
    setSelectedAgeBand(ageResult.recommendedAgeBandMonths);
  }, [child?.id, ageResult.recommendedAgeBandMonths]);

  const existingAssessment = assessments.find((a) => a.childId === child?.id);
  const [statuses, setStatuses] = useState<Record<string, MilestoneStatus>>(
    existingAssessment?.milestoneStatuses || {}
  );

  /*
   * Same trap as the clinician workspace: ChildContext hydrates from
   * localStorage in an effect, so this useState initialiser runs while
   * `assessments` is still empty and starts the parent at zero. The next tick
   * would then save that empty map over a real record. Adopt the stored
   * statuses once, the first time they arrive.
   */
  const hydrated = useRef(false);
  useEffect(() => {
    if (!hydrated.current && existingAssessment) {
      setStatuses(existingAssessment.milestoneStatuses || {});
      hydrated.current = true;
    }
  }, [existingAssessment]);

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
  const milestonesInBand = ALL_MILESTONES.filter(
    (m) =>
      m.ageBandMonths === selectedAgeBand &&
      (selectedDomain === 'all' || m.domain === selectedDomain)
  );

  const bandDomainTally = (domain: string) => {
    const items = ALL_MILESTONES.filter(
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
      {child && (
        <TrackerHeader
          childName={child.nameOrInitials}
          ageText={`${ageResult.chronologicalText[language] || ageResult.chronologicalText.en}${
            ageResult.isPremature ? ' · corrected age applied' : ''
          }`}
          statuses={statuses}
          selectedMonths={selectedAgeBand}
          onSelectBand={setSelectedAgeBand}
        />
      )}

      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-[18px] py-7 sm:px-6 lg:px-9 lg:py-9">
        {needsFirstRun ? (
          <FirstRunPanel
            onCreate={handleCreate}
            sampleCount={sampleChildren.length}
            onBrowseSample={
              sampleChildren.length
                ? () => {
                    setActiveChild(sampleChildren[0]);
                    setBrowsingSample(true);
                  }
                : undefined
            }
          />
        ) : (
          <>
        {child && isSampleChild(child.id) && (
          <NotePanel tone="emerging" className="flex flex-wrap items-center gap-3">
            <Badge variant="warning">Sample profile</Badge>
            <span className="flex-1">
              You are viewing <strong>{child.nameOrInitials}</strong>, a demonstration profile.
              Anything you tick here is not your child&apos;s record.
            </span>
            <Link href="/parent" className="focus-ring font-semibold text-parent-700 underline">
              Start with my own child
            </Link>
          </NotePanel>
        )}
        <CelebrateProgress statuses={statuses} selectedMonths={selectedAgeBand} />

        <Link
          href="/parent/activities"
          className="focus-ring sig-press sig-lift flex items-center justify-between gap-4 rounded-card border-2 border-parent bg-parent-tint p-5"
        >
          <span>
            <span className="eyebrow block text-parent-ink">Try at home</span>
            <span className="mt-1.5 block font-display text-[17px] font-bold tracking-[-0.03em] text-ink">
              One simple thing to try for every milestone
            </span>
          </span>
          <ArrowRight className="h-5 w-5 shrink-0 text-parent-ink" strokeWidth={2.2} />
        </Link>

        <MilestoneTickTracker statuses={statuses} />

        {/* The map is the selector: stops carry their own progress, so the
            parent sees where they are in the whole 0-6 journey. */}
        <MilestoneJourney
          statuses={statuses}
          selectedAgeBand={selectedAgeBand}
          onSelect={setSelectedAgeBand}
        />

        {band && (
          <p className="-mt-1 px-1 text-xs text-ink-warm">
            Showing <strong className="font-semibold text-ink-body">{band.label[language] || band.label.en}</strong>{' '}
            · {band.rangeDescription[language] || band.rangeDescription.en}
          </p>
        )}

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
                className={`focus-ring inline-flex min-h-[46px] shrink-0 items-center gap-2 rounded-full pl-3 pr-4 text-[13px] transition-colors ${
                  selected
                    ? 'bg-ink font-semibold text-surface-raised'
                    : 'border border-line-warm bg-surface-raised font-medium text-ink-body hover:text-ink'
                }`}
              >
                {filter.value !== 'all' && <MilestoneArt name={filter.value} size={24} />}
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
            milestonesInBand.map((milestone, i) => (
              <ParentMilestoneCard
                key={milestone.id}
                milestone={milestone}
                index={i}
                entering={mounted}
                status={statuses[milestone.id] || 'not_observed'}
                childId={child?.id}
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
          </>
        )}
      </div>
    </div>
  );
}

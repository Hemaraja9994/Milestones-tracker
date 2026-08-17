'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plus } from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { computeClinicalSnapshot } from '@/lib/calculationEngine';
import { isSampleChild } from '@/lib/storage';
import { ChildProfile } from '@/types';
import { Badge, GaugeRow, NotePanel } from '@/components/ui/Primitives';
import MilestoneTickTracker from '@/components/parent/MilestoneTickTracker';
import FirstRunPanel from '@/components/parent/FirstRunPanel';
import ChildProfileForm from '@/components/parent/ChildProfileForm';

export default function ParentPortalHome() {
  const { childrenList, activeChild, setActiveChild, createOrUpdateChild, assessments } = useChild();
  const { language, t } = useLanguage();

  const [browsingSample, setBrowsingSample] = useState(false);
  const [showAddChild, setShowAddChild] = useState(false);

  const ownChildren = childrenList.filter((c) => !isSampleChild(c.id));
  const sampleChildren = childrenList.filter((c) => isSampleChild(c.id));
  const needsFirstRun = ownChildren.length === 0 && !browsingSample;

  // Never silently land a parent on a sample profile.
  const child =
    (activeChild && (!isSampleChild(activeChild.id) || browsingSample) ? activeChild : null) ||
    ownChildren[0] ||
    (browsingSample ? childrenList[0] : null);

  const handleCreate = (newChild: ChildProfile) => {
    createOrUpdateChild(newChild);
    setActiveChild(newChild);
    setBrowsingSample(false);
    setShowAddChild(false);
  };

  const ageResult = child
    ? calculateChildAges(child.dateOfBirth, child.gestationalWeeks)
    : null;

  const assessment = child ? assessments.find((a) => a.childId === child.id) : null;
  const statuses = assessment?.milestoneStatuses || {};
  const snapshot = ageResult
    ? computeClinicalSnapshot(ageResult.effectiveAgeMonths, statuses, child || undefined)
    : null;

  const gaugeCeiling =
    ageResult && snapshot
      ? Math.max(
          ageResult.effectiveAgeMonths,
          snapshot.estimatedReceptiveAgeMonths,
          snapshot.estimatedExpressiveAgeMonths,
          snapshot.estimatedAuditoryAgeMonths,
          12
        )
      : 1;

  return (
    <div className="bg-surface-canvas">
      {/* ================= Welcome ================= */}
      <div className="border-b border-line-rule bg-surface-raised">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-between gap-6 px-[18px] pb-7 pt-8 sm:px-6 lg:px-9">
          <div>
            <div className="eyebrow tracking-[0.1em] text-parent-600">{t.parent.welcome}</div>
            <h1 className="mt-2.5 font-display text-[30px] font-extrabold leading-[1.1] text-ink sm:text-[38px]">
              {t.parent.tracker_title}
            </h1>
            <p className="mt-3 max-w-[70ch] text-sm leading-[1.6] text-ink-soft">
              {child && ageResult ? (
                <>
                  Tracking {child.nameOrInitials} ·{' '}
                  {ageResult.chronologicalText[language] || ageResult.chronologicalText.en}
                </>
              ) : (
                'Celebrate every smile, babble, word, and listening moment.'
              )}{' '}
              Track developmental progress with gentle guidance backed by CDC, ASHA, and
              Pathways.org.
            </p>
          </div>

          {child && (
            <Link
              href="/parent/tracker"
              className="focus-ring inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-parent-600 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-parent-700 dark:text-ink-invert"
            >
              Open Milestone Tracker
              <ArrowRight className="h-[17px] w-[17px]" strokeWidth={2.2} />
            </Link>
          )}
        </div>

        {/* Child switcher — samples are labelled, never mistaken for your child */}
        {!needsFirstRun && childrenList.length > 0 && (
          <div className="mx-auto max-w-[1240px] px-[18px] pb-5 sm:px-6 lg:px-9">
            <div className="text-xs font-semibold text-ink-soft">Select Child</div>
            <div className="scroll-rail mt-2.5">
              {childrenList.map((c) => {
                const sample = isSampleChild(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setActiveChild(c);
                      if (sample) setBrowsingSample(true);
                    }}
                    aria-pressed={child?.id === c.id}
                    className={`focus-ring inline-flex min-h-[46px] shrink-0 items-center gap-2 rounded-full px-[18px] text-sm transition-colors ${
                      child?.id === c.id
                        ? 'bg-parent-600 font-semibold text-white dark:text-ink-invert'
                        : 'border border-line-warm bg-surface-raised font-medium text-ink-body'
                    }`}
                  >
                    {c.nameOrInitials}
                    {sample && (
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.04em] ${
                          child?.id === c.id ? 'bg-white/25' : 'bg-surface-sunken text-ink-muted'
                        }`}
                      >
                        Sample
                      </span>
                    )}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => setShowAddChild(true)}
                className="focus-ring inline-flex min-h-[46px] shrink-0 items-center gap-2 rounded-full border border-dashed border-parent-600/60 px-[18px] text-sm font-semibold text-parent-700 transition-colors hover:bg-parent-tint"
              >
                <Plus className="h-4 w-4" strokeWidth={2.4} />
                Add my child
              </button>
            </div>
          </div>
        )}
      </div>

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
                <button
                  type="button"
                  onClick={() => setShowAddChild(true)}
                  className="focus-ring font-semibold text-parent-700 underline"
                >
                  Start with my own child
                </button>
              </NotePanel>
            )}

            {/* Two parallel checklists: the full developmental set, and ASHA's
                communication milestones. Neither replaces the other. */}
            <Link
              href="/parent/communication"
              className="focus-ring flex items-center justify-between gap-4 rounded-card border border-line-warm border-l-4 border-l-parent-600 bg-surface-raised p-5 transition-colors hover:bg-surface-tint sm:p-6"
            >
              <span>
                <span className="eyebrow block text-parent-600">
                  American Speech-Language-Hearing Association
                </span>
                <span className="mt-2 block font-sans text-[15px] font-semibold text-ink">
                  Communication Milestones checklist
                </span>
                <span className="mt-1.5 block max-w-[62ch] text-[13px] leading-[1.6] text-ink-muted">
                  ASHA&apos;s hearing, speech and language milestones for birth to 24 months —
                  answered Yes, Not yet, or Not sure.
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={2.2} />
            </Link>

            <MilestoneTickTracker statuses={statuses} />

            {snapshot && (
              <section className="rounded-card border border-line-warm bg-surface-raised p-5 sm:p-6">
                <h2 className="font-sans text-sm font-semibold text-ink">
                  Where {child ? child.nameOrInitials : 'your child'} is right now
                </h2>
                <p className="mt-1.5 text-xs leading-[1.6] text-ink-muted">
                  A gentle estimate from the milestones you have ticked — not a test score.
                </p>

                <div className="mt-5 grid gap-5 md:grid-cols-3">
                  <GaugeRow
                    size="parent"
                    label={t.parent.receptive_gauge}
                    valueLabel={`${snapshot.estimatedReceptiveAgeMonths} mo`}
                    value={snapshot.estimatedReceptiveAgeMonths}
                    max={gaugeCeiling}
                    colorClass="bg-brand-600 dark:bg-brand-400"
                    footnote="How well your child understands words, gestures, points, and family requests."
                  />
                  <GaugeRow
                    size="parent"
                    label={t.parent.expressive_gauge}
                    valueLabel={`${snapshot.estimatedExpressiveAgeMonths} mo`}
                    value={snapshot.estimatedExpressiveAgeMonths}
                    max={gaugeCeiling}
                    colorClass="bg-emerging"
                    footnote="The words, sentences, gestures, and sounds your child uses to share thoughts."
                  />
                  <GaugeRow
                    size="parent"
                    label={t.parent.auditory_gauge}
                    valueLabel={`${snapshot.estimatedAuditoryAgeMonths} mo`}
                    value={snapshot.estimatedAuditoryAgeMonths}
                    max={gaugeCeiling}
                    colorClass="bg-achieved"
                    footnote="Turning to soft sounds, recognizing family voices, and listening to stories."
                  />
                </div>
              </section>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              <NotePanel tone="achieved">{t.parent.gentle_note}</NotePanel>
              <NotePanel tone="parent">
                {t.parent.bilingual_reassurance} Children naturally code-switch (mix words like
                &ldquo;Amma milk ಬೇಕು&rdquo; or &ldquo;Gadi stop karo&rdquo;). Count words learned in{' '}
                <em>all</em> your home languages together!
              </NotePanel>
            </div>
          </>
        )}
      </div>

      {/* ================= Add my child ================= */}
      {showAddChild && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-4">
          <div className="max-h-[92vh] w-full max-w-[520px] overflow-y-auto rounded-t-frame border border-line-warm bg-surface-raised p-6 shadow-elevated sm:rounded-frame sm:p-7">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <div className="eyebrow tracking-[0.1em] text-parent-600">Add my child</div>
                <h2 className="mt-2 font-display text-[22px] font-extrabold leading-[1.18] text-ink">
                  Whose milestones are you tracking?
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowAddChild(false)}
                aria-label={t.common.close}
                className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink-muted hover:text-ink"
              >
                ✕
              </button>
            </div>

            <ChildProfileForm
              variant="parent"
              submitLabel="Start tracking"
              onSubmit={handleCreate}
              onCancel={() => setShowAddChild(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { computeClinicalSnapshot } from '@/lib/calculationEngine';
import { GaugeRow, NotePanel } from '@/components/ui/Primitives';
import MilestoneTickTracker from '@/components/parent/MilestoneTickTracker';

export default function ParentPortalHome() {
  const { childrenList, activeChild, setActiveChild, assessments } = useChild();
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

  const assessment = child ? assessments.find((a) => a.childId === child.id) : null;
  const statuses = assessment?.milestoneStatuses || {};
  const snapshot = computeClinicalSnapshot(ageResult.effectiveAgeMonths, statuses, child);

  const gaugeCeiling = Math.max(
    ageResult.effectiveAgeMonths,
    snapshot.estimatedReceptiveAgeMonths,
    snapshot.estimatedExpressiveAgeMonths,
    snapshot.estimatedAuditoryAgeMonths,
    12
  );

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
              {child
                ? `Tracking ${child.nameOrInitials} · ${
                    ageResult.chronologicalText[language] || ageResult.chronologicalText.en
                  }`
                : 'Celebrate every smile, babble, word, and listening moment.'}{' '}
              Track developmental progress with gentle guidance backed by CDC, ASHA, and
              Pathways.org.
            </p>
          </div>

          <Link
            href="/parent/tracker"
            className="focus-ring inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-parent-600 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-parent-700 dark:text-ink-invert"
          >
            Open Milestone Tracker
            <ArrowRight className="h-[17px] w-[17px]" strokeWidth={2.2} />
          </Link>
        </div>

        {childrenList.length > 1 && (
          <div className="mx-auto max-w-[1240px] px-[18px] pb-5 sm:px-6 lg:px-9">
            <div className="text-xs font-semibold text-ink-soft">Select Child</div>
            <div className="scroll-rail mt-2.5">
              {childrenList.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveChild(c)}
                  aria-pressed={child?.id === c.id}
                  className={`focus-ring inline-flex min-h-[46px] shrink-0 items-center rounded-xl px-[18px] text-sm font-semibold transition-colors ${
                    child?.id === c.id
                      ? 'bg-parent-600 text-white dark:text-ink-invert'
                      : 'border border-line-warm bg-surface-raised font-medium text-ink-body'
                  }`}
                >
                  {c.nameOrInitials}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-[18px] py-7 sm:px-6 lg:px-9 lg:py-9">
        <MilestoneTickTracker statuses={statuses} />

        {/* Three developmental gauges — 10px bars on parent screens */}
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

        <div className="grid gap-4 md:grid-cols-2">
          <NotePanel tone="achieved">{t.parent.gentle_note}</NotePanel>
          <NotePanel tone="parent">
            {t.parent.bilingual_reassurance} Children naturally code-switch (mix words like &ldquo;Amma
            milk ಬೇಕು&rdquo; or &ldquo;Gadi stop karo&rdquo;). Count words learned in <em>all</em> your
            home languages together!
          </NotePanel>
        </div>
      </div>
    </div>
  );
}

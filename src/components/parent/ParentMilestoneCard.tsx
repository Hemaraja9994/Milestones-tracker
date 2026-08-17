'use client';

import React, { useEffect, useState } from 'react';
import { Check, PenLine, PlayCircle } from 'lucide-react';
import MilestoneArt from '@/components/parent/MilestoneArt';
import ObservationSheet, { ObservationToast } from '@/components/parent/ObservationSheet';
import { usePrefersReducedMotion } from '@/components/signal';
import {
  Observation,
  deleteObservation,
  getObservationsFor,
  saveObservation,
} from '@/lib/storage';
import { MilestoneStatus } from '@/types';
import type { MilestoneWithMedia } from '@/data/allMilestones';
import { useLanguage } from '@/context/LanguageContext';

interface ParentMilestoneCardProps {
  milestone: MilestoneWithMedia;
  status: MilestoneStatus;
  onStatusChange: (status: MilestoneStatus) => void;
  /** Observations are per child; omit to hide the action entirely. */
  childId?: string;
  /** Position in the list, for the capped entrance stagger. */
  index?: number;
  /** True only on the list's first paint, so entrance runs once. */
  entering?: boolean;
}

export default function ParentMilestoneCard({
  milestone,
  status,
  onStatusChange,
  childId,
  index = 0,
  entering = false,
}: ParentMilestoneCardProps) {
  const { language, t } = useLanguage();
  const reduced = usePrefersReducedMotion();

  const [sheetOpen, setSheetOpen] = useState(false);
  const [observations, setObservations] = useState<Observation[]>([]);
  const [lastSaved, setLastSaved] = useState<Observation | null>(null);

  useEffect(() => {
    if (childId) setObservations(getObservationsFor(childId, milestone.id));
  }, [childId, milestone.id]);

  const isYes = status === 'observed' || status === 'reported';
  const isSometimes = status === 'emerging';
  const isNotYet = status === 'not_observed';

  // Stagger caps at 8 — item 9 onward appears with item 8.
  const delay = Math.min(index, 7) * 45;

  const handleSaveObservation = (text: string) => {
    if (!childId) return;
    // Never touches milestoneStatuses — an observation is not a status.
    const saved = saveObservation({ childId, milestoneId: milestone.id, text });
    setObservations(getObservationsFor(childId, milestone.id));
    setLastSaved(saved);
    setSheetOpen(false);
  };

  const handleUndo = () => {
    if (!lastSaved || !childId) return;
    deleteObservation(lastSaved.id);
    setObservations(getObservationsFor(childId, milestone.id));
    setLastSaved(null);
  };

  /* Selected state tints the whole card, not just the control. */
  const cardState = isYes
    ? 'border-achieved bg-achieved-tint'
    : isSometimes
    ? 'border-emerging bg-emerging-tint'
    : 'border-line bg-canvas hover:border-ink';

  return (
    <article
      className={`overflow-hidden rounded-card border-2 ${cardState} ${
        entering && !reduced ? 'animate-sig-enter' : ''
      }`}
      style={{
        animationDelay: entering && !reduced ? `${delay}ms` : undefined,
        transition: reduced
          ? 'none'
          : 'background-color var(--dur-fill) var(--ease-fill), border-color var(--dur-state) var(--ease-out)',
      }}
    >
      {/* -------- Head -------- */}
      <div className="flex flex-wrap items-start justify-between gap-4 p-[15px] sm:p-5">
        <div className="flex flex-1 gap-3.5">
          <AnimatedCheckbox on={isYes} reduced={reduced} />

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow text-muted">
                {t.domains[milestone.domain] || milestone.domain}
              </span>
              {milestone.isRedFlag && (
                <span className="eyebrow rounded-chip bg-risk-tint px-2 py-1 text-risk-ink">
                  {t.common.red_flag}
                </span>
              )}
            </div>

            <h3 className="mt-2 max-w-[34ch] font-display text-[15px] font-semibold leading-[1.3] tracking-[-0.015em] text-ink sm:text-[17px]">
              {milestone.title[language] || milestone.title.en}
            </h3>
            <p className="mt-2 max-w-[72ch] text-[14px] leading-[1.6] text-body">
              {milestone.description[language] || milestone.description.en}
            </p>
          </div>
        </div>

        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-chip bg-clinician-tint text-clinician-ink">
          <MilestoneArt
            name={milestone.domain}
            size={28}
            title={t.domains[milestone.domain] || milestone.domain}
          />
        </span>
      </div>

      {/* -------- Why / what to look for / play tip -------- */}
      <div className="grid gap-px border-t-2 border-line bg-line md:grid-cols-3">
        <Panel title={t.parent.why_matters}>
          {milestone.whyItMatters[language] || milestone.whyItMatters.en}
        </Panel>
        <Panel title={t.parent.what_to_look}>
          {milestone.whatToLookFor[language] || milestone.whatToLookFor.en}
        </Panel>
        <Panel title={t.parent.try_at_home} tone="parent">
          {milestone.parentTips[language] || milestone.parentTips.en}
        </Panel>
      </div>

      {/* -------- Status · frozen strings, 52px targets -------- */}
      <div
        className="flex flex-wrap items-center gap-2.5 border-t-2 border-line bg-canvas p-[15px] sm:p-5"
        role="radiogroup"
        aria-label={milestone.title[language] || milestone.title.en}
      >
        <StatusButton
          selected={isYes}
          reduced={reduced}
          onClick={() => onStatusChange('observed')}
          selectedClass="bg-achieved text-canvas border-achieved"
          idleClass="border-line text-body hover:border-ink"
        >
          <Check className="h-[17px] w-[17px]" strokeWidth={2.6} />
          {t.status_labels.parent_yes}
        </StatusButton>

        <StatusButton
          selected={isSometimes}
          reduced={reduced}
          onClick={() => onStatusChange('emerging')}
          selectedClass="bg-emerging text-ink border-emerging"
          idleClass="border-line text-body hover:border-ink"
        >
          {t.status_labels.parent_sometimes}
        </StatusButton>

        <StatusButton
          selected={isNotYet}
          reduced={reduced}
          onClick={() => onStatusChange('not_observed')}
          selectedClass="bg-ink text-canvas border-ink"
          idleClass="border-line text-body hover:border-ink"
        >
          {t.status_labels.parent_not_yet}
        </StatusButton>

        {(milestone.mediaUrl || milestone.sourceUrl) && (
          <a
            href={milestone.mediaUrl || milestone.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring sig-press ml-auto inline-flex min-h-[52px] items-center gap-2 rounded-control border-2 border-line px-4 text-[14px] font-semibold text-clinician-ink hover:border-ink"
          >
            <PlayCircle className="h-[17px] w-[17px]" strokeWidth={1.9} />
            Watch this milestone
          </a>
        )}
      </div>

      {/* -------- Observations -------- */}
      {childId && (
        <div className="border-t-2 border-line bg-canvas p-[15px] sm:p-5">
          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            className="focus-ring sig-press inline-flex min-h-[52px] items-center gap-2 rounded-control border-2 border-dashed border-line-soft px-4 text-[15px] font-semibold text-parent-ink"
          >
            <PenLine className="h-[17px] w-[17px]" strokeWidth={1.9} />
            Add observation
          </button>
          <p className="mt-2 text-[12px] leading-[1.55] text-muted">
            An observation records what you saw. It does not change the status above.
          </p>

          {observations.length > 0 && (
            <ul className="mt-4 flex flex-col gap-3 border-l-2 border-line pl-3">
              {observations.map((o) => (
                <li key={o.id}>
                  <div className="text-[12px] font-semibold leading-[1.4] text-muted">
                    {new Date(o.createdAt).toLocaleDateString(undefined, {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                  <p className="mt-0.5 text-[14px] leading-[1.6] text-ink">{o.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {sheetOpen && (
        <ObservationSheet
          milestoneTitle={milestone.title[language] || milestone.title.en}
          onSave={handleSaveObservation}
          onClose={() => setSheetOpen(false)}
        />
      )}

      {lastSaved && <ObservationToast onUndo={handleUndo} onDone={() => setLastSaved(null)} />}
    </article>
  );
}

/* -------------------------------------------------------------------------- */

/** 24px box: fill 180ms, then the tick draws itself over 220ms after a 40ms beat. */
function AnimatedCheckbox({ on, reduced }: { on: boolean; reduced: boolean }) {
  return (
    <span
      aria-hidden
      className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-[7px] border-2"
      style={{
        background: on ? 'rgb(var(--achieved))' : 'transparent',
        borderColor: on ? 'rgb(var(--achieved))' : 'rgb(var(--line-soft))',
        transition: reduced
          ? 'none'
          : 'background-color var(--dur-fill) var(--ease-fill), border-color var(--dur-state) var(--ease-out)',
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 12.5l5 5L20 6.5"
          stroke={on ? 'rgb(var(--canvas))' : 'transparent'}
          strokeWidth={3.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={26}
          strokeDashoffset={on ? 0 : 26}
          style={{
            transition: reduced ? 'none' : 'stroke-dashoffset var(--dur-draw) var(--ease-out) 40ms',
          }}
        />
      </svg>
    </span>
  );
}

function Panel({
  title,
  tone = 'neutral',
  children,
}: {
  title: string;
  tone?: 'neutral' | 'parent';
  children: React.ReactNode;
}) {
  return (
    <div className={`p-[15px] sm:p-4 ${tone === 'parent' ? 'bg-parent-tint' : 'bg-canvas'}`}>
      <h4 className={`eyebrow ${tone === 'parent' ? 'text-parent-ink' : 'text-clinician-ink'}`}>
        {title}
      </h4>
      <p
        className={`mt-2 text-[13px] leading-[1.6] ${
          tone === 'parent' ? 'text-parent-deep' : 'text-body'
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function StatusButton({
  selected,
  reduced,
  onClick,
  selectedClass,
  idleClass,
  children,
}: {
  selected: boolean;
  reduced: boolean;
  onClick: () => void;
  selectedClass: string;
  idleClass: string;
  children: React.ReactNode;
}) {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      className={`focus-ring sig-chip inline-flex min-h-[52px] items-center gap-2 rounded-control border-2 px-4 text-[14px] font-semibold ${
        selected ? selectedClass : idleClass
      }`}
      style={{
        transform: pressed && !reduced ? 'scale(0.97)' : undefined,
        transition: reduced
          ? 'none'
          : 'background-color var(--dur-fill) var(--ease-fill), border-color var(--dur-state) var(--ease-out), transform var(--dur-release) var(--ease-out)',
      }}
    >
      {children}
    </button>
  );
}

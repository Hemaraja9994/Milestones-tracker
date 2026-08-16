'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Milestone, MilestoneStatus } from '@/types';
import { Badge, Citation } from '@/components/ui/Primitives';
import { useLanguage } from '@/context/LanguageContext';

interface MilestoneAssessmentRowProps {
  milestone: Milestone;
  status: MilestoneStatus;
  clinicalNote?: string;
  onStatusChange: (status: MilestoneStatus) => void;
  onNoteChange: (note: string) => void;
}

export default function MilestoneAssessmentRow({
  milestone,
  status,
  clinicalNote = '',
  onStatusChange,
  onNoteChange,
}: MilestoneAssessmentRowProps) {
  const { language, t } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);
  const [showNotes, setShowNotes] = useState(!!clinicalNote);

  const statusOptions: { value: MilestoneStatus; label: string; activeClass: string }[] = [
    {
      value: 'observed',
      label: t.status_labels.observed,
      activeClass: 'bg-achieved text-white dark:text-ink-invert',
    },
    {
      value: 'reported',
      label: t.status_labels.reported,
      activeClass: 'bg-brand-600 text-white dark:text-ink-invert',
    },
    {
      value: 'emerging',
      label: t.status_labels.emerging,
      activeClass: 'bg-emerging text-white dark:text-ink-invert',
    },
    {
      value: 'not_observed',
      label: t.status_labels.not_observed,
      activeClass: 'bg-ink text-surface-raised',
    },
  ];

  /* Selected rows tint their whole row, not just the control. */
  const rowTint =
    status === 'observed'
      ? 'bg-achieved-tint'
      : status === 'emerging'
      ? 'bg-emerging-tint'
      : status === 'not_observed' && milestone.isRedFlag
      ? 'bg-risk-tint'
      : 'bg-surface-raised';

  return (
    <div className={`rounded-card border border-line-warm p-5 ${rowTint}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow text-brand-600 dark:text-brand-400">
              {t.domains[milestone.domain] || milestone.domain}
            </span>
            {milestone.isRedFlag && <Badge variant="danger">{t.common.red_flag}</Badge>}
          </div>
          <h4 className="mt-2 max-w-[34ch] font-display text-[17px] font-extrabold leading-[1.18] text-ink">
            {milestone.title[language] || milestone.title.en}
          </h4>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {milestone.citation && <Citation>{milestone.citation}</Citation>}
          {milestone.subsystem && (
            <Citation>{milestone.subsystem.replace(/_/g, ' ')}</Citation>
          )}
        </div>
      </div>

      <p className="mt-2.5 text-[13px] leading-[1.6] text-ink-body">
        {milestone.description[language] || milestone.description.en}
      </p>

      {/* 4-tier status selector — 46px on clinician screens */}
      <div className="mt-3.5 grid grid-cols-2 gap-2 sm:grid-cols-4" role="radiogroup">
        {statusOptions.map((opt) => {
          const selected = status === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onStatusChange(opt.value)}
              className={`focus-ring inline-flex min-h-[46px] items-center justify-center rounded-xl px-3 text-center text-[13px] font-semibold transition-colors ${
                selected
                  ? opt.activeClass
                  : 'border border-line-warm bg-surface-raised text-ink-body hover:text-ink'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-line-rule pt-3 text-[13px]">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="focus-ring inline-flex items-center gap-1.5 font-medium text-ink-muted hover:text-ink"
        >
          {showDetails ? 'Hide Clinical Context' : 'View Clinical Context & Prompt'}
          {showDetails ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>

        <button
          type="button"
          onClick={() => setShowNotes(!showNotes)}
          className={`focus-ring font-medium ${
            clinicalNote ? 'text-brand-600 dark:text-brand-400' : 'text-ink-muted hover:text-ink'
          }`}
        >
          {clinicalNote ? 'Edit Clinical Note' : '+ Add Note'}
        </button>
      </div>

      {showDetails && (
        <div className="mt-3 grid gap-px overflow-hidden rounded-xl border border-line-rule bg-line-rule md:grid-cols-2">
          <div className="bg-surface-canvas p-4">
            <h5 className="eyebrow font-sans tracking-[0.05em] text-brand-600 dark:text-brand-400">
              {t.parent.what_to_look}
            </h5>
            <p className="mt-2 text-[13px] leading-[1.6] text-ink-body">
              {milestone.whatToLookFor[language] || milestone.whatToLookFor.en}
            </p>
          </div>
          <div className="bg-surface-canvas p-4">
            <h5 className="eyebrow font-sans tracking-[0.05em] text-brand-600 dark:text-brand-400">
              {t.parent.why_matters}
            </h5>
            <p className="mt-2 text-[13px] leading-[1.6] text-ink-body">
              {milestone.whyItMatters[language] || milestone.whyItMatters.en}
            </p>
          </div>
        </div>
      )}

      {showNotes && (
        <textarea
          value={clinicalNote}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder="Enter direct behavioral observations, phonetic transcription, or parental context..."
          rows={2}
          aria-label="Clinical note"
          className="focus-ring mt-3 w-full rounded-xl border border-line-rule bg-surface-canvas p-3 text-[13px] leading-[1.6] text-ink placeholder:text-ink-warm"
        />
      )}
    </div>
  );
}

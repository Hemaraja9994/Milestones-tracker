'use client';

import React from 'react';
import confetti from 'canvas-confetti';
import { Check, Ear, Brain, MessageSquare, Users, AudioLines, LucideIcon } from 'lucide-react';
import { Milestone, MilestoneStatus } from '@/types';
import { Badge, Citation } from '@/components/ui/Primitives';
import { useLanguage } from '@/context/LanguageContext';

interface ParentMilestoneCardProps {
  milestone: Milestone;
  status: MilestoneStatus;
  onStatusChange: (status: MilestoneStatus) => void;
}

const DOMAIN_ICONS: Record<string, LucideIcon> = {
  auditory_hearing: Ear,
  language_receptive: Brain,
  language_expressive: MessageSquare,
  speech_articulation: AudioLines,
  social_pragmatic: Users,
};

export default function ParentMilestoneCard({
  milestone,
  status,
  onStatusChange,
}: ParentMilestoneCardProps) {
  const { language, t } = useLanguage();

  const isCompleted = status === 'observed' || status === 'reported';
  const isEmerging = status === 'emerging';
  const isNotYet = status === 'not_observed';

  const handleSelect = (newStatus: MilestoneStatus) => {
    onStatusChange(newStatus);
    if (newStatus === 'observed' && !isCompleted) {
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#2F7D5A', '#4F7A5B', '#B9762A', '#D9832A'],
        });
      } catch {
        /* confetti is decorative only */
      }
    }
  };

  const Icon = DOMAIN_ICONS[milestone.domain] || Brain;

  return (
    <article className="overflow-hidden rounded-panel border border-line-warm bg-surface-raised">
      {/* -------- Head -------- */}
      <div className="flex flex-wrap items-start justify-between gap-5 px-5 pb-5 pt-6 sm:px-7">
        <div className="flex flex-1 gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-brand-tint text-brand-600 dark:text-brand-400">
            <Icon className="h-6 w-6" strokeWidth={1.8} />
          </span>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow text-brand-600 dark:text-brand-400">
                {t.domains[milestone.domain] || milestone.domain}
              </span>
              {milestone.isRedFlag && <Badge variant="danger">{t.common.red_flag}</Badge>}
              {isCompleted && (
                <Badge variant="success">
                  <Check className="h-3 w-3" strokeWidth={3} />
                  Ticked
                </Badge>
              )}
            </div>

            <h3 className="mt-2.5 max-w-[34ch] font-display text-[22px] font-extrabold leading-[1.15] text-ink sm:text-[27px]">
              {milestone.title[language] || milestone.title.en}
            </h3>
            <p className="mt-2.5 max-w-[72ch] text-[15px] leading-[1.6] text-ink-body">
              {milestone.description[language] || milestone.description.en}
            </p>
          </div>
        </div>

        {milestone.citation && <Citation className="shrink-0">{milestone.citation}</Citation>}
      </div>

      {/* -------- Panels: why, what to look for, play tip -------- */}
      <div className="grid gap-px border-t border-line-rule bg-line-rule md:grid-cols-3">
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

      {/* -------- Actions: all ≥52px on parent screens -------- */}
      <div
        className="flex flex-wrap items-center gap-3 border-t border-line-rule px-5 py-5 sm:px-7"
        role="radiogroup"
        aria-label={milestone.title[language] || milestone.title.en}
      >
        <StatusButton
          selected={isCompleted}
          onClick={() => handleSelect('observed')}
          selectedClass="bg-achieved text-white dark:text-ink-invert"
          idleClass="border-[1.5px] border-line-warm bg-surface-raised text-ink-body hover:border-achieved hover:text-achieved"
        >
          <Check className="h-[18px] w-[18px]" strokeWidth={2.4} />
          {t.status_labels.parent_yes}
        </StatusButton>

        <StatusButton
          selected={isEmerging}
          onClick={() => handleSelect('emerging')}
          selectedClass="bg-emerging text-white dark:text-ink-invert"
          idleClass="border-[1.5px] border-emerging/40 bg-surface-raised text-emerging-ink"
        >
          {t.status_labels.parent_sometimes}
        </StatusButton>

        <StatusButton
          selected={isNotYet}
          onClick={() => handleSelect('not_observed')}
          selectedClass="bg-ink text-surface-raised"
          idleClass="border-[1.5px] border-line-warm bg-surface-raised text-ink-soft"
        >
          {t.status_labels.parent_not_yet}
        </StatusButton>
      </div>
    </article>
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
    <div className={`px-5 py-5 sm:px-6 ${tone === 'parent' ? 'bg-parent-tint' : 'bg-surface-canvas'}`}>
      <h4
        className={`eyebrow font-sans tracking-[0.05em] ${
          tone === 'parent' ? 'text-parent-700' : 'text-brand-600 dark:text-brand-400'
        }`}
      >
        {title}
      </h4>
      <p
        className={`mt-2.5 text-[13px] leading-[1.6] ${
          tone === 'parent' ? 'text-parent-700' : 'text-ink-body'
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function StatusButton({
  selected,
  onClick,
  selectedClass,
  idleClass,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  selectedClass: string;
  idleClass: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={`focus-ring inline-flex min-h-[52px] items-center gap-2.5 rounded-xl px-5 text-[15px] font-semibold transition-colors ${
        selected ? selectedClass : idleClass
      }`}
    >
      {children}
    </button>
  );
}

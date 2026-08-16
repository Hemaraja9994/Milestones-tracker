'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  UserCheck, 
  HelpCircle, 
  XCircle, 
  MessageSquarePlus, 
  AlertTriangle, 
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Milestone, MilestoneStatus } from '@/types';
import { Badge } from '@/components/ui/Primitives';
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
  const [showNotes, setShowNotes] = useState(!!clinicalNote);
  const [showDetails, setShowDetails] = useState(false);

  const statusOptions: { value: MilestoneStatus; label: string; icon: any; activeClass: string }[] = [
    {
      value: 'observed',
      label: t.status_labels.observed,
      icon: CheckCircle2,
      activeClass: 'bg-emerald-600 text-white border-emerald-600 dark:bg-emerald-500 shadow-sm',
    },
    {
      value: 'reported',
      label: t.status_labels.reported,
      icon: UserCheck,
      activeClass: 'bg-sky-600 text-white border-sky-600 dark:bg-sky-500 shadow-sm',
    },
    {
      value: 'emerging',
      label: t.status_labels.emerging,
      icon: HelpCircle,
      activeClass: 'bg-amber-500 text-white border-amber-500 dark:bg-amber-500 shadow-sm',
    },
    {
      value: 'not_observed',
      label: t.status_labels.not_observed,
      icon: XCircle,
      activeClass: 'bg-rose-600 text-white border-rose-600 dark:bg-rose-500 shadow-sm',
    },
  ];

  return (
    <div className={`rounded-xl border transition-all p-4 ${
      status === 'observed'
        ? 'border-emerald-200 bg-emerald-50/20 dark:border-emerald-900/40 dark:bg-emerald-950/10'
        : status === 'reported'
        ? 'border-sky-200 bg-sky-50/20 dark:border-sky-900/40 dark:bg-sky-950/10'
        : status === 'emerging'
        ? 'border-amber-200 bg-amber-50/20 dark:border-amber-900/40 dark:bg-amber-950/10'
        : status === 'not_observed' && milestone.isRedFlag
        ? 'border-rose-300 bg-rose-50/30 dark:border-rose-900/60 dark:bg-rose-950/20'
        : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
    }`}>
      
      {/* Top Bar: Title, Domain, Red Flag Badge, Citation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            {milestone.title[language] || milestone.title.en}
          </h4>
          {milestone.isRedFlag && (
            <Badge variant="danger" className="animate-pulse">
              <AlertTriangle className="h-3 w-3" />
              {t.common.red_flag}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-1.5 self-start md:self-auto">
          <Badge variant="outline" className="text-[10px]">
            {milestone.citation}
          </Badge>
          {milestone.subsystem && (
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              {milestone.subsystem.replace('_', ' ')}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
        {milestone.description[language] || milestone.description.en}
      </p>

      {/* 4-Tier Interactive Status Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-3">
        {statusOptions.map((opt) => {
          const Icon = opt.icon;
          const isSelected = status === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onStatusChange(opt.value)}
              className={`flex items-center justify-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all ${
                isSelected
                  ? opt.activeClass
                  : 'border-slate-200 bg-slate-50/70 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{opt.label}</span>
            </button>
          );
        })}
      </div>

      {/* Action Buttons: Toggle Details, Add/Edit Notes */}
      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-2 text-xs">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-1 text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 font-medium"
        >
          <Info className="h-3.5 w-3.5" />
          <span>{showDetails ? 'Hide Clinical Context' : 'View Clinical Context & Prompt'}</span>
          {showDetails ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </button>

        <button
          type="button"
          onClick={() => setShowNotes(!showNotes)}
          className={`flex items-center gap-1 font-medium transition-colors ${
            clinicalNote
              ? 'text-brand-600 dark:text-brand-400'
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          <MessageSquarePlus className="h-3.5 w-3.5" />
          <span>{clinicalNote ? 'Edit Clinical Note' : '+ Add Note'}</span>
        </button>
      </div>

      {/* Expandable Clinical Details (Why it matters & What to look for) */}
      {showDetails && (
        <div className="mt-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2 text-xs">
          <div>
            <span className="font-bold text-slate-800 dark:text-slate-200">What to Look For / Clinical Prompt: </span>
            <span className="text-slate-600 dark:text-slate-300">
              {milestone.whatToLookFor[language] || milestone.whatToLookFor.en}
            </span>
          </div>
          <div>
            <span className="font-bold text-slate-800 dark:text-slate-200">Why It Matters: </span>
            <span className="text-slate-600 dark:text-slate-300">
              {milestone.whyItMatters[language] || milestone.whyItMatters.en}
            </span>
          </div>
        </div>
      )}

      {/* Expandable Note Input */}
      {showNotes && (
        <div className="mt-3">
          <textarea
            value={clinicalNote}
            onChange={(e) => onNoteChange(e.target.value)}
            placeholder="Enter direct behavioral observations, phonetic transcription, or parental context..."
            rows={2}
            className="w-full rounded-lg border border-slate-200 bg-white p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
      )}

    </div>
  );
}

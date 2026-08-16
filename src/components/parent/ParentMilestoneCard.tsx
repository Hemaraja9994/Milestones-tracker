'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Check, 
  Sparkles, 
  HelpCircle, 
  Circle, 
  Lightbulb, 
  HeartHandshake, 
  ChevronDown, 
  ChevronUp,
  Award
} from 'lucide-react';
import { Milestone, MilestoneStatus } from '@/types';
import { Card, Badge } from '@/components/ui/Primitives';
import { useLanguage } from '@/context/LanguageContext';

interface ParentMilestoneCardProps {
  milestone: Milestone;
  status: MilestoneStatus;
  onStatusChange: (status: MilestoneStatus) => void;
}

export default function ParentMilestoneCard({
  milestone,
  status,
  onStatusChange,
}: ParentMilestoneCardProps) {
  const { language, t } = useLanguage();
  const [showTips, setShowTips] = useState(true);

  const handleSelect = (newStatus: MilestoneStatus) => {
    onStatusChange(newStatus);
    if (newStatus === 'observed' && status !== 'observed') {
      // Trigger joyful celebratory confetti
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#14b8a6', '#f43f5e', '#f59e0b', '#6366f1']
        });
      } catch (e) {
        // Safe fallback if confetti fails
      }
    }
  };

  const isCompleted = status === 'observed' || status === 'reported';
  const isEmerging = status === 'emerging';

  return (
    <Card className={`overflow-hidden transition-all border-2 ${
      isCompleted
        ? 'border-emerald-300 bg-emerald-50/20 dark:border-emerald-800 dark:bg-emerald-950/15 shadow-sm'
        : isEmerging
        ? 'border-amber-300 bg-amber-50/20 dark:border-amber-800 dark:bg-amber-950/15'
        : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
    }`}>
      
      {/* Top Title & Domain */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="flex items-center gap-2">
            {isCompleted && (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white animate-bounce">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </div>
            )}
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {milestone.title[language] || milestone.title.en}
            </h3>
          </div>
          <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-0.5 inline-block">
            {t.domains[milestone.domain] || milestone.domain}
          </span>
        </div>

        <Badge variant={isCompleted ? 'success' : isEmerging ? 'warning' : 'outline'}>
          {isCompleted ? 'Mastered!' : isEmerging ? 'Practicing' : 'Upcoming'}
        </Badge>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
        {milestone.description[language] || milestone.description.en}
      </p>

      {/* 3 Simple Parent Status Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
        <button
          type="button"
          onClick={() => handleSelect('observed')}
          className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-bold transition-all ${
            isCompleted
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-[1.02]'
              : 'bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-800 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          <Award className="h-4 w-4" />
          <span>{t.status_labels.parent_yes}</span>
        </button>

        <button
          type="button"
          onClick={() => handleSelect('emerging')}
          className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-bold transition-all ${
            isEmerging
              ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20 scale-[1.02]'
              : 'bg-slate-100 text-slate-700 hover:bg-amber-100 hover:text-amber-800 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          <HelpCircle className="h-4 w-4" />
          <span>{t.status_labels.parent_sometimes}</span>
        </button>

        <button
          type="button"
          onClick={() => handleSelect('not_observed')}
          className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-bold transition-all ${
            status === 'not_observed'
              ? 'bg-slate-700 text-white dark:bg-slate-700'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          <Circle className="h-4 w-4" />
          <span>{t.status_labels.parent_not_yet}</span>
        </button>
      </div>

      {/* Parent Tips & Activities Card */}
      <div className="rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 border border-amber-200/70 dark:from-amber-950/30 dark:to-orange-950/20 dark:border-amber-900/50">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowTips(!showTips)}>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <span>{t.parent.try_at_home}</span>
          </div>
          {showTips ? <ChevronUp className="h-4 w-4 text-amber-700" /> : <ChevronDown className="h-4 w-4 text-amber-700" />}
        </div>

        {showTips && (
          <div className="mt-2.5 space-y-2 text-xs text-amber-950 dark:text-amber-200 leading-relaxed border-t border-amber-200/60 dark:border-amber-900/50 pt-2">
            <p className="font-medium">
              {milestone.parentTips[language] || milestone.parentTips.en}
            </p>
            <div className="text-[11px] text-amber-800/80 dark:text-amber-400 italic">
              <span className="font-semibold">{t.parent.why_matters}: </span>
              {milestone.whyItMatters[language] || milestone.whyItMatters.en}
            </div>
          </div>
        )}
      </div>

    </Card>
  );
}

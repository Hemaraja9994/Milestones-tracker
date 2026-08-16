'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Sparkles, 
  ArrowLeft, 
  Brain, 
  MessageSquare, 
  Ear, 
  Layers, 
  Printer, 
  CheckCircle2,
  Award
} from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { COMPREHENSIVE_MILESTONES } from '@/data/milestones';
import { AGE_BANDS } from '@/data/ageBands';
import { MilestoneStatus, AssessmentRecord } from '@/types';
import ParentMilestoneCard from '@/components/parent/ParentMilestoneCard';
import { Card, Badge, Button, ProgressBar } from '@/components/ui/Primitives';

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

  const existingAssessment = assessments.find(a => a.childId === child?.id);
  const [statuses, setStatuses] = useState<Record<string, MilestoneStatus>>(
    existingAssessment?.milestoneStatuses || {}
  );

  const handleStatusChange = (milestoneId: string, newStatus: MilestoneStatus) => {
    const updatedStatuses = {
      ...statuses,
      [milestoneId]: newStatus,
    };
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

  const milestonesInBand = COMPREHENSIVE_MILESTONES.filter(m => {
    const matchAge = m.ageBandMonths === selectedAgeBand;
    const matchDomain = selectedDomain === 'all' || m.domain === selectedDomain;
    return matchAge && matchDomain;
  });

  const totalInBand = COMPREHENSIVE_MILESTONES.filter(m => m.ageBandMonths === selectedAgeBand).length;
  const completedInBand = COMPREHENSIVE_MILESTONES.filter(
    m => m.ageBandMonths === selectedAgeBand && (statuses[m.id] === 'observed' || statuses[m.id] === 'reported')
  ).length;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <Link
            href="/parent"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.parent.tracker_title}
            </h1>
            <p className="text-xs text-slate-500">
              {child ? `Tracking ${child.nameOrInitials} (${ageResult.chronologicalText[language] || ageResult.chronologicalText.en})` : 'Child Developmental Milestones'}
            </p>
          </div>
        </div>

        {child && (
          <Link href={`/professional/${child.id}/report`}>
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4" />
              <span>{t.parent.share_with_doctor}</span>
            </Button>
          </Link>
        )}
      </div>

      {/* Age Band Selection Carousel / Pills */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {t.parent.choose_age}:
          </span>
          <span className="text-xs text-slate-400">
            {completedInBand} of {totalInBand} completed in this stage
          </span>
        </div>

        {/* Scrollable Age Band Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {AGE_BANDS.map((band) => {
            const isSelected = selectedAgeBand === band.months;
            return (
              <button
                key={band.months}
                onClick={() => setSelectedAgeBand(band.months)}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all shrink-0 ${
                  isSelected
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {band.label[language] || band.label.en}
              </button>
            );
          })}
        </div>

        {/* Progress Bar for selected band */}
        <ProgressBar value={completedInBand} max={totalInBand || 1} colorClass="bg-rose-500" />
      </div>

      {/* Domain Filters */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <button
          onClick={() => setSelectedDomain('all')}
          className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
            selectedDomain === 'all'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          All Skills
        </button>
        <button
          onClick={() => setSelectedDomain('language_receptive')}
          className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
            selectedDomain === 'language_receptive'
              ? 'bg-sky-600 text-white'
              : 'bg-sky-50 text-sky-700 hover:bg-sky-100 dark:bg-sky-950/40 dark:text-sky-300'
          }`}
        >
          Understanding Words (Receptive)
        </button>
        <button
          onClick={() => setSelectedDomain('language_expressive')}
          className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
            selectedDomain === 'language_expressive'
              ? 'bg-emerald-600 text-white'
              : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300'
          }`}
        >
          Talking & Gestures (Expressive)
        </button>
        <button
          onClick={() => setSelectedDomain('auditory_hearing')}
          className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
            selectedDomain === 'auditory_hearing'
              ? 'bg-indigo-600 text-white'
              : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-300'
          }`}
        >
          Hearing & Listening (Auditory)
        </button>
        <button
          onClick={() => setSelectedDomain('social_pragmatic')}
          className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
            selectedDomain === 'social_pragmatic'
              ? 'bg-purple-600 text-white'
              : 'bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-950/40 dark:text-purple-300'
          }`}
        >
          Social & Play
        </button>
      </div>

      {/* Milestone Cards Grid */}
      <div className="space-y-4">
        {milestonesInBand.length === 0 ? (
          <Card className="text-center py-12 text-xs text-slate-500">
            No milestones found for this age and domain filter. Choose another age or filter!
          </Card>
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

    </div>
  );
}

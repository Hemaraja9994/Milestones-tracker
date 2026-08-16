'use client';

import React from 'react';
import { Sparkles, Brain, MessageSquare, Ear, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card, Badge, ProgressBar } from '@/components/ui/Primitives';
import { ClinicalSnapshot } from '@/lib/calculationEngine';
import { AgeCalculationResult } from '@/lib/correctedAge';
import { useLanguage } from '@/context/LanguageContext';

interface DevelopmentalAgeGaugeProps {
  ageResult: AgeCalculationResult;
  snapshot: ClinicalSnapshot;
}

export default function DevelopmentalAgeGauge({ ageResult, snapshot }: DevelopmentalAgeGaugeProps) {
  const { language, t } = useLanguage();

  const maxVal = Math.max(
    ageResult.chronologicalMonths,
    snapshot.estimatedReceptiveAgeMonths,
    snapshot.estimatedExpressiveAgeMonths,
    snapshot.estimatedAuditoryAgeMonths,
    24
  ) * 1.15;

  return (
    <Card className="border-brand-200/80 bg-gradient-to-br from-white via-brand-50/20 to-teal-50/30 dark:border-brand-900/60 dark:from-slate-900 dark:via-brand-950/20 dark:to-slate-900 shadow-elevated">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-brand-600 text-white">
              <Brain className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {t.professional.estimated_ages}
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Non-standardized surveillance snapshot based on highest consistent milestone mastery
          </p>
        </div>

        {/* Chronological vs Corrected info */}
        <div className="flex items-center gap-2">
          <div className="text-right">
            <span className="text-xs text-slate-500 dark:text-slate-400">Target Age: </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {ageResult.effectiveAgeMonths} mo
            </span>
          </div>
          {ageResult.isPremature && (
            <Badge variant="warning">
              Corrected ({ageResult.prematurityWeeks}w early)
            </Badge>
          )}
        </div>
      </div>

      {/* 3 Core Developmental Gauges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        
        {/* Receptive Language */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-sky-700 dark:text-sky-300">
              <Brain className="h-4 w-4" />
              {t.professional.receptive_age}
            </span>
            {snapshot.receptiveDelayFlag ? (
              <Badge variant="danger" className="text-[10px]">Delayed</Badge>
            ) : (
              <Badge variant="success" className="text-[10px]">On Track</Badge>
            )}
          </div>
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              {snapshot.estimatedReceptiveAgeMonths}
            </span>
            <span className="text-xs font-medium text-slate-500">months</span>
          </div>
          <ProgressBar 
            value={snapshot.estimatedReceptiveAgeMonths} 
            max={maxVal} 
            colorClass="bg-sky-500" 
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1.5">
            <span>Baseline: {snapshot.receptiveCeilingBand}m band</span>
            <span>Target: {ageResult.effectiveAgeMonths}m</span>
          </div>
        </div>

        {/* Expressive Language */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <MessageSquare className="h-4 w-4" />
              {t.professional.expressive_age}
            </span>
            {snapshot.expressiveDelayFlag ? (
              <Badge variant="danger" className="text-[10px]">Delayed</Badge>
            ) : (
              <Badge variant="success" className="text-[10px]">On Track</Badge>
            )}
          </div>
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              {snapshot.estimatedExpressiveAgeMonths}
            </span>
            <span className="text-xs font-medium text-slate-500">months</span>
          </div>
          <ProgressBar 
            value={snapshot.estimatedExpressiveAgeMonths} 
            max={maxVal} 
            colorClass="bg-emerald-500" 
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1.5">
            <span>Ceiling: {snapshot.expressiveCeilingBand}m band</span>
            <span>Target: {ageResult.effectiveAgeMonths}m</span>
          </div>
        </div>

        {/* Auditory & Hearing */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/90 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <Ear className="h-4 w-4" />
              {t.professional.auditory_age}
            </span>
            {snapshot.auditoryDelayFlag ? (
              <Badge variant="danger" className="text-[10px]">Screen Needed</Badge>
            ) : (
              <Badge variant="success" className="text-[10px]">Age-Typical</Badge>
            )}
          </div>
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              {snapshot.estimatedAuditoryAgeMonths}
            </span>
            <span className="text-xs font-medium text-slate-500">months</span>
          </div>
          <ProgressBar 
            value={snapshot.estimatedAuditoryAgeMonths} 
            max={maxVal} 
            colorClass="bg-indigo-500" 
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1.5">
            <span>Northern & Downs: Level IV</span>
            <span>Target: {ageResult.effectiveAgeMonths}m</span>
          </div>
        </div>

      </div>

      {/* Discrepancy / Receptive-Expressive Gap Alert */}
      {Math.abs(snapshot.estimatedReceptiveAgeMonths - snapshot.estimatedExpressiveAgeMonths) >= 4 && (
        <div className="mt-4 rounded-xl bg-amber-50 p-3 border border-amber-200 dark:bg-amber-950/40 dark:border-amber-900/60 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
            <span className="font-bold">Significant Receptive-Expressive Gap Detected:</span> Receptive language leads expressive output by {(snapshot.estimatedReceptiveAgeMonths - snapshot.estimatedExpressiveAgeMonths).toFixed(1)} months. This pattern is characteristic of isolated expressive language delay / late talker profile.
          </p>
        </div>
      )}

    </Card>
  );
}

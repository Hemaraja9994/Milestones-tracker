'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Ear, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Volume2, 
  Compass, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { 
  AUDITORY_MATURATION_STAGES, 
  AIISH_HIGH_RISK_FACTORS, 
  ERBER_AUDITORY_LEVELS 
} from '@/data/auditoryMilestones';
import { useLanguage } from '@/context/LanguageContext';
import { Card, Badge, Button } from '@/components/ui/Primitives';

export default function AuditoryDevelopmentPage() {
  const { language, t } = useLanguage();
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);

  const activeStage = AUDITORY_MATURATION_STAGES[selectedStageIndex];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      
      {/* Top Banner */}
      <div className="rounded-3xl border border-indigo-200/80 bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 p-8 text-white shadow-elevated">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              <Ear className="h-3.5 w-3.5 text-indigo-300" />
              <span>Northern & Downs (2002/2014) • AIISH Mysuru Pediatric Audiology</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Auditory Behavioral Development & Hearing Milestones
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200 max-w-2xl leading-relaxed">
              Spatial sound localization maturation stages, Erber's 4 levels of auditory skill, and AIISH high-risk screening criteria for South Asian pediatric populations.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Badge variant="purple" className="text-xs py-1 px-3 bg-white/10 border-white/20 text-white">
              7 Stages of Localization
            </Badge>
            <Badge variant="info" className="text-xs py-1 px-3 bg-white/10 border-white/20 text-white">
              AIISH High-Risk Registry
            </Badge>
          </div>
        </div>
      </div>

      {/* Module 1: Northern & Downs 7 Stages of Behavioral Sound Localization */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-4 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Compass className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Northern & Downs 7-Stage Sound Localization Maturation
            </h2>
            <p className="text-xs text-slate-500">
              How infants learn to locate sounds in space from birth to 24+ months
            </p>
          </div>
        </div>

        {/* Stage Selection Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {AUDITORY_MATURATION_STAGES.map((stage, idx) => (
            <button
              key={stage.ageRangeMonths}
              onClick={() => setSelectedStageIndex(idx)}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all shrink-0 ${
                selectedStageIndex === idx
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              {stage.ageRangeMonths}
            </button>
          ))}
        </div>

        {/* Detailed Stage Card */}
        <Card className="border-indigo-200/80 bg-gradient-to-br from-white via-indigo-50/20 to-white dark:border-indigo-900/60 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900 shadow-elevated p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                  {activeStage.ageRangeMonths}
                </span>
                <Badge variant="purple">
                  Erber Level: {activeStage.erberHierarchyLevel}
                </Badge>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {activeStage.soundLocalizationLevel[language] || activeStage.soundLocalizationLevel.en}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeStage.behavioralResponse[language] || activeStage.behavioralResponse.en}
                </p>
              </div>

              {/* AIISH Clinical Note */}
              <div className="rounded-xl bg-indigo-50/70 p-3.5 border border-indigo-200/80 dark:bg-indigo-950/40 dark:border-indigo-900/60 text-xs">
                <span className="font-bold text-indigo-900 dark:text-indigo-300 block mb-1">
                  AIISH (Mysuru) Screening Benchmark:
                </span>
                <p className="text-indigo-950 dark:text-indigo-200 leading-relaxed">
                  {activeStage.aiishClinicalNotes[language] || activeStage.aiishClinicalNotes.en}
                </p>
              </div>
            </div>

            {/* Stage Acoustic & Metric Sidebar */}
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5 font-semibold">Sound Field Response Level</span>
                <span className="text-base font-black text-indigo-600 dark:text-indigo-400">
                  {activeStage.thresholdSoundField}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5 font-semibold">Scientific Reference</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {activeStage.northernDownsRef}
                </span>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                <span className="text-[11px] text-slate-500">
                  Visual Reinforcement Audiometry (VRA) or Conditioned Play Audiometry (CPA) is typically conditioned during this window.
                </span>
              </div>
            </div>

          </div>
        </Card>
      </section>

      {/* Module 2: Erber's 4-Stage Auditory Skill Hierarchy */}
      <section className="space-y-6">
        <div className="border-b border-slate-200/80 pb-4 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="h-5 w-5 text-brand-600" />
            Erber's 4 Levels of Auditory Skill Development
          </h2>
          <p className="text-xs text-slate-500">
            The universally recognized clinical staircase for pediatric listening and speech perception
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ERBER_AUDITORY_LEVELS.map((lvl, idx) => (
            <Card key={lvl.level} className="flex flex-col justify-between border-slate-200 hover:border-brand-500 hover:shadow-card transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-brand-600 dark:text-brand-400">
                    Stage {idx + 1}
                  </span>
                  <Badge variant="info">Level {idx + 1}</Badge>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {lvl.level}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {lvl.description}
                </p>
              </div>

              <div className="rounded-lg bg-brand-50 p-2.5 dark:bg-brand-950/40 border border-brand-200/60 dark:border-brand-800/60 text-[11px]">
                <span className="font-bold text-brand-900 dark:text-brand-300">Clinical Query: </span>
                <span className="text-brand-950 dark:text-brand-200">{lvl.keyQuestion}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Module 3: AIISH High-Risk Registry for Hearing Loss */}
      <section className="space-y-6">
        <div className="border-b border-slate-200/80 pb-4 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-rose-600" />
            AIISH High-Risk Registry Indicators (South Asian Clinical Cohorts)
          </h2>
          <p className="text-xs text-slate-500">
            Perinatal and genetic risk factors warranting targeted audiological surveillance (OAE / BERA)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AIISH_HIGH_RISK_FACTORS.map((factor) => (
            <Card key={factor.id} className="border-rose-200/80 bg-rose-50/20 dark:border-rose-900/40 dark:bg-rose-950/10">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    {factor.label[language] || factor.label.en}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {factor.description[language] || factor.description.en}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
}

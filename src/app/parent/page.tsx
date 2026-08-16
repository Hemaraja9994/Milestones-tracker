'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Sparkles, 
  Brain, 
  Ear, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Award,
  Users,
  Lightbulb,
  ShieldCheck
} from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { computeClinicalSnapshot } from '@/lib/calculationEngine';
import { Card, Badge, Button, ProgressBar } from '@/components/ui/Primitives';

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

  const assessment = child ? assessments.find(a => a.childId === child.id) : null;
  const snapshot = computeClinicalSnapshot(
    ageResult.effectiveAgeMonths,
    assessment?.milestoneStatuses || {},
    child
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      {/* Welcome Banner */}
      <div className="rounded-3xl border border-rose-200/70 bg-gradient-to-r from-rose-50 via-pink-50/50 to-amber-50 p-6 sm:p-8 dark:border-rose-900/50 dark:from-rose-950/30 dark:via-slate-900 dark:to-slate-900 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700 dark:bg-rose-950 dark:text-rose-300">
              <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
              <span>{t.parent.welcome}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {child ? `Tracking ${child.nameOrInitials}` : 'Track Your Child\'s Milestones'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Celebrate every smile, babble, word, and listening moment. Track developmental progress with gentle guidance backed by CDC, ASHA, and Pathways.org.
            </p>
          </div>

          <Link href="/parent/tracker">
            <Button variant="primary" size="lg" className="bg-rose-600 hover:bg-rose-700 shadow-rose-500/20 font-bold whitespace-nowrap">
              <Sparkles className="h-4 w-4" />
              <span>Open Milestone Tracker</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Child Switcher Pill (Multi-Child Support) */}
      {childrenList.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-xs font-bold text-slate-500 shrink-0">Select Child:</span>
          {childrenList.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveChild(c)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all shrink-0 ${
                child?.id === c.id
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
              }`}
            >
              {c.nameOrInitials}
            </button>
          ))}
        </div>
      )}

      {/* 3 Visual Progress Gauges for Parents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Gauge 1: Understanding (Receptive Language) */}
        <Card className="flex flex-col justify-between border-sky-200/80 bg-gradient-to-b from-sky-50/30 to-white dark:border-sky-900/60 dark:from-sky-950/20 dark:to-slate-900">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 text-xs font-bold text-sky-800 dark:text-sky-300">
                <Brain className="h-4 w-4" />
                {t.parent.receptive_gauge}
              </span>
              <Badge variant="info">Understanding</Badge>
            </div>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                {snapshot.estimatedReceptiveAgeMonths}
              </span>
              <span className="text-xs text-slate-500 font-medium">months level</span>
            </div>
            <ProgressBar value={snapshot.estimatedReceptiveAgeMonths} max={36} colorClass="bg-sky-500" />
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              How well your child understands words, gestures, points, and family requests.
            </p>
          </div>
        </Card>

        {/* Gauge 2: Talking & Gesturing (Expressive Language) */}
        <Card className="flex flex-col justify-between border-emerald-200/80 bg-gradient-to-b from-emerald-50/30 to-white dark:border-emerald-900/60 dark:from-emerald-950/20 dark:to-slate-900">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <MessageSquare className="h-4 w-4" />
                {t.parent.expressive_gauge}
              </span>
              <Badge variant="success">Talking & Words</Badge>
            </div>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                {snapshot.estimatedExpressiveAgeMonths}
              </span>
              <span className="text-xs text-slate-500 font-medium">months level</span>
            </div>
            <ProgressBar value={snapshot.estimatedExpressiveAgeMonths} max={36} colorClass="bg-emerald-500" />
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              The words, sentences, gestures, and sounds your child uses to share thoughts.
            </p>
          </div>
        </Card>

        {/* Gauge 3: Hearing & Listening */}
        <Card className="flex flex-col justify-between border-indigo-200/80 bg-gradient-to-b from-indigo-50/30 to-white dark:border-indigo-900/60 dark:from-indigo-950/20 dark:to-slate-900">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 text-xs font-bold text-indigo-800 dark:text-indigo-300">
                <Ear className="h-4 w-4" />
                {t.parent.auditory_gauge}
              </span>
              <Badge variant="purple">Listening</Badge>
            </div>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                {snapshot.estimatedAuditoryAgeMonths}
              </span>
              <span className="text-xs text-slate-500 font-medium">months level</span>
            </div>
            <ProgressBar value={snapshot.estimatedAuditoryAgeMonths} max={36} colorClass="bg-indigo-500" />
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              Turning to soft sounds, recognizing family voices, and listening to stories.
            </p>
          </div>
        </Card>

      </div>

      {/* Gentle Indian Multilingual Reassurance Card */}
      <div className="rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-emerald-50 p-6 dark:border-teal-900/60 dark:from-teal-950/30 dark:to-emerald-950/20 flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white shrink-0">
          <Lightbulb className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-teal-950 dark:text-teal-200">
            Multilingual Growth in Indian Homes (Hindi, Kannada & English)
          </h3>
          <p className="text-xs text-teal-900 dark:text-teal-300 leading-relaxed">
            {t.parent.bilingual_reassurance} Children naturally code-switch (mix words like "Amma milk ಬೇಕು" or "Gadi stop karo"). Count words learned in <em>all</em> your home languages together!
          </p>
        </div>
      </div>

      {/* Gentle Developmental Pace Reminder */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 flex items-start gap-4">
        <ShieldCheck className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            A Gentle Note on Milestones
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.parent.gentle_note}
          </p>
        </div>
      </div>

    </div>
  );
}

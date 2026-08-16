'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Brain, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Globe2, 
  Volume2, 
  Activity,
  Layers
} from 'lucide-react';
import { SUBSYSTEM_GUIDES } from '@/data/educationalContent';
import { useLanguage } from '@/context/LanguageContext';
import { Card, Badge } from '@/components/ui/Primitives';

export default function ClinicalReferencePage() {
  const { language, t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState<'all' | 'speech' | 'language' | 'multilingual'>('all');

  const filteredGuides = SUBSYSTEM_GUIDES.filter((g) =>
    selectedTab === 'all' ? true : g.category === selectedTab
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      
      {/* Clinical Hub header */}
      <div>
        <div className="eyebrow tracking-[0.1em] text-brand-600 dark:text-brand-400">
          Comprehensive Clinical Knowledge Hub
        </div>
        <h1 className="mt-2.5 max-w-[34ch] font-display text-[28px] font-extrabold leading-[1.12] text-ink sm:text-[34px]">
          Speech &amp; Language Subsystems Guide
        </h1>
        <p className="mt-3 max-w-[78ch] text-sm leading-[1.6] text-ink-soft">
          Clinical definitions, typical trajectory timelines, red flags, and Indian bilingual
          developmental nuances (Hindi, Kannada, English).
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="info">LEST Trivandrum Validation</Badge>
          <Badge variant="info">7 Subsystem Modules</Badge>
        </div>
      </div>

      {/* The destinations that left the top bar live here, in the hub they
          belong to, reached from a module grid. */}
      <div className="grid gap-px overflow-hidden rounded-card border border-line-warm bg-line-warm sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            href: '/auditory-development',
            title: 'Auditory & Hearing Milestones',
            body: "Northern & Downs sound localization maturation, AIISH Mysuru screening, and Erber's 4 auditory levels.",
          },
          {
            href: '/speech-sound-matrix',
            title: 'Crowe & McLeod (2020) Sound Matrix',
            body: 'Early-8, Middle-8 and Late-8 consonant windows with English, Hindi and Kannada word examples.',
          },
          {
            href: '/high-risk-register',
            title: 'High Risk Register (HRR)',
            body: 'JCIH 2019 and Indian RBSK / AIISH risk surveillance with automated triage stratification.',
          },
          {
            href: '/sources',
            title: 'Sources & Citations',
            body: 'Every norm, guideline and publication this tracker is built on, with full references.',
          },
        ].map((mod) => (
          <Link
            key={mod.href}
            href={mod.href}
            className="focus-ring flex flex-col gap-2.5 bg-surface-raised p-6 transition-colors hover:bg-surface-tint"
          >
            <h2 className="font-sans text-base font-semibold leading-[1.3] text-ink">{mod.title}</h2>
            <p className="text-[13px] leading-[1.6] text-ink-muted">{mod.body}</p>
          </Link>
        ))}
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200/80 pb-4 dark:border-slate-800">
        <button
          onClick={() => setSelectedTab('all')}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            selectedTab === 'all'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
          }`}
        >
          All Guides ({SUBSYSTEM_GUIDES.length})
        </button>
        <button
          onClick={() => setSelectedTab('speech')}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            selectedTab === 'speech'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
          }`}
        >
          Speech Production (Articulation, Voice, Resonance)
        </button>
        <button
          onClick={() => setSelectedTab('language')}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            selectedTab === 'language'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
          }`}
        >
          Language (Semantics, Syntax, Pragmatics)
        </button>
        <button
          onClick={() => setSelectedTab('multilingual')}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            selectedTab === 'multilingual'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
          }`}
        >
          Indian Multilingualism & LEST
        </button>
      </div>

      {/* Guides Stack */}
      <div className="space-y-6">
        {filteredGuides.map((guide) => (
          <Card key={guide.id} className="p-6 border-slate-200 hover:border-purple-300 dark:hover:border-purple-800 transition-all space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-bold">
                  {guide.category === 'speech' ? <Volume2 className="h-4 w-4" /> :
                   guide.category === 'language' ? <MessageSquare className="h-4 w-4" /> :
                   <Globe2 className="h-4 w-4" />}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {guide.name[language] || guide.name.en}
                </h3>
              </div>

              <Badge variant={guide.category === 'multilingual' ? 'success' : 'purple'}>
                {guide.category.toUpperCase()}
              </Badge>
            </div>

            {/* Definition */}
            <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">Clinical Definition:</span>
              <p>{guide.definition[language] || guide.definition.en}</p>
            </div>

            {/* Clinical Significance */}
            <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">Clinical Significance:</span>
              <p>{guide.clinicalSignificance[language] || guide.clinicalSignificance.en}</p>
            </div>

            {/* Typical Milestones List */}
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-2">
              <span className="font-bold text-slate-800 dark:text-slate-200 block uppercase tracking-wider">
                Typical Trajectory & Milestones
              </span>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 list-disc list-inside">
                {(guide.typicalMilestones[language] || guide.typicalMilestones.en).map((ms, idx) => (
                  <li key={idx}>{ms}</li>
                ))}
              </ul>
            </div>

            {/* Red Flags and Assessment Tip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
              <div className="rounded-xl bg-rose-50/60 p-3.5 border border-rose-200/70 dark:bg-rose-950/20 dark:border-rose-900/40">
                <span className="font-bold text-rose-900 dark:text-rose-300 flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
                  Red Flags / Clinical Disorders:
                </span>
                <p className="text-rose-950 dark:text-rose-200">
                  {guide.redFlagsOrDisorders[language] || guide.redFlagsOrDisorders.en}
                </p>
              </div>

              <div className="rounded-xl bg-teal-50/60 p-3.5 border border-teal-200/70 dark:bg-teal-950/20 dark:border-teal-900/40">
                <span className="font-bold text-teal-900 dark:text-teal-300 flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
                  Clinical Assessment Tip:
                </span>
                <p className="text-teal-950 dark:text-teal-200">
                  {guide.clinicalAssessmentTips[language] || guide.clinicalAssessmentTips.en}
                </p>
              </div>
            </div>

          </Card>
        ))}
      </div>

    </div>
  );
}

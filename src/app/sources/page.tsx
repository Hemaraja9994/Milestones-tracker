'use client';

import React from 'react';
import { 
  FileText, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen,
  Award
} from 'lucide-react';
import { OFFICIAL_SOURCES } from '@/data/sources';
import { Card, Badge } from '@/components/ui/Primitives';

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Banner */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Evidence-Based Normative Foundations</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          Scientific Sources & Citations
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          Every checklist item, age window, intelligibility threshold, and auditory localization benchmark in MilestonePath is strictly cited from peer-reviewed scientific literature, official CDC/AAP guidelines, ASHA practice portals, AIISH protocols, or standardized Indian scales.
        </p>
      </div>

      {/* Sources List */}
      <div className="space-y-6">
        {OFFICIAL_SOURCES.map((src) => (
          <Card key={src.id} className="p-6 border-slate-200 hover:border-brand-500 transition-all space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 block mb-1">
                  {src.organization} {src.year ? `• ${src.year}` : ''}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {src.name}
                </h3>
              </div>

              {src.officialUrl && (
                <a
                  href={src.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-brand-600 hover:bg-brand-50 dark:border-slate-700 dark:bg-slate-800 dark:text-brand-400 shrink-0"
                >
                  <span>Official Resource</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {src.description}
            </p>

            {/* APA Citation Box */}
            <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs font-mono text-slate-600 dark:text-slate-300">
              <span className="font-sans font-bold text-slate-800 dark:text-slate-200 block mb-1">Primary Citation:</span>
              {src.citationString}
            </div>

            {/* Key Contributions */}
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block mb-1.5">
                Key Standardized Benchmarks Incorporated:
              </span>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
                {src.keyContributions.map((kc, i) => (
                  <li key={i}>{kc}</li>
                ))}
              </ul>
            </div>

          </Card>
        ))}
      </div>

    </div>
  );
}

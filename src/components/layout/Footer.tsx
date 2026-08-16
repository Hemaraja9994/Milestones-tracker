'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/90 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* Top Disclaimer Notice Banner */}
        <div className="mb-8 rounded-2xl bg-amber-50/70 p-4 border border-amber-200/80 dark:bg-amber-950/30 dark:border-amber-900/50 flex items-start gap-3.5">
          <ShieldCheck className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed">
            <span className="font-semibold">{t.app.disclaimer_short}</span> {t.app.disclaimer_long}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand & Evidence Basis */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                Milestone<span className="text-brand-600 dark:text-brand-400">Path</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Evidence-based developmental surveillance combining CDC 2022 revised milestones, ASHA communication standards (≥75% criteria), Northern & Downs auditory maturation levels, AIISH Mysuru screening guidelines, and Crowe & McLeod (2020) speech sound norms.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[11px] rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-medium text-slate-700 dark:text-slate-300">
                English
              </span>
              <span className="text-[11px] rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-medium text-slate-700 dark:text-slate-300">
                हिन्दी (Hindi)
              </span>
              <span className="text-[11px] rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-medium text-slate-700 dark:text-slate-300">
                ಕನ್ನಡ (Kannada)
              </span>
            </div>
          </div>

          {/* Col 2: Clinical Tools */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Clinical Reference
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/auditory-development" className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400">
                  Auditory Maturation & AIISH
                </Link>
              </li>
              <li>
                <Link href="/speech-sound-matrix" className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400">
                  Crowe & McLeod Sound Chart
                </Link>
              </li>
              <li>
                <Link href="/clinical-reference" className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400">
                  Speech & Language Subsystems
                </Link>
              </li>
              <li>
                <Link href="/sources" className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 flex items-center gap-1">
                  Sources & Citations
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Workspaces & Portals */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Workspaces
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/professional" className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400">
                  Clinician Portal (SLP & Pediatric)
                </Link>
              </li>
              <li>
                <Link href="/parent" className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400">
                  Parent / Caregiver Tracker
                </Link>
              </li>
              <li>
                <Link href="/privacy-terms" className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400">
                  Clinical Disclaimer & Privacy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-200/60 dark:border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} MilestonePath – Child Developmental & Speech-Language Tracker.</p>
          <p className="flex items-center gap-1">
            Built for clinical excellence & family empowerment <Heart className="h-3.5 w-3.5 text-rose-500 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
}

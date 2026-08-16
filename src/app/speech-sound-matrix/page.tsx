'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Activity, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Volume2, 
  HelpCircle, 
  BookOpen,
  ArrowRight,
  Filter
} from 'lucide-react';
import { SPEECH_SOUNDS_CROWE_MCLEOD, INTELLIGIBILITY_NORMS } from '@/data/speechSoundNorms';
import { useLanguage } from '@/context/LanguageContext';
import { Card, Badge, ProgressBar } from '@/components/ui/Primitives';

export default function SpeechSoundMatrixPage() {
  const { language, t } = useLanguage();
  const [selectedGroup, setSelectedGroup] = useState<'all' | 'early_8' | 'middle_8' | 'late_8'>('all');
  const [selectedSound, setSelectedSound] = useState<string>(SPEECH_SOUNDS_CROWE_MCLEOD[0].sound);

  const filteredSounds = SPEECH_SOUNDS_CROWE_MCLEOD.filter((s) =>
    selectedGroup === 'all' ? true : s.group === selectedGroup
  );

  const activeSoundItem = SPEECH_SOUNDS_CROWE_MCLEOD.find(s => s.sound === selectedSound) || SPEECH_SOUNDS_CROWE_MCLEOD[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      
      {/* Top Hero Banner */}
      <div className="rounded-3xl border border-teal-200/80 bg-gradient-to-r from-teal-900 via-brand-900 to-slate-900 p-8 text-white shadow-elevated">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              <Activity className="h-3.5 w-3.5 text-teal-300" />
              <span>Crowe & McLeod (2020) Meta-Analysis (18,000+ Children)</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Speech Sound Acquisition & Intelligibility Matrix
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 max-w-2xl leading-relaxed">
              Consonant sound developmental milestones (Early-8, Middle-8, Late-8) with trilingual word exemplars in English, Hindi, and Kannada, plus clinical speech intelligibility percentiles.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Badge variant="success" className="text-xs py-1 px-3 bg-white/10 border-white/20 text-white">
              75% & 90% Acquisition Criteria
            </Badge>
            <Badge variant="info" className="text-xs py-1 px-3 bg-white/10 border-white/20 text-white">
              Trilingual Word Positions
            </Badge>
          </div>
        </div>
      </div>

      {/* Module 1: Intelligibility Expectations by Age */}
      <section className="space-y-6">
        <div className="border-b border-slate-200/80 pb-4 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-brand-600" />
            Speech Intelligibility Benchmarks by Chronological Age
          </h2>
          <p className="text-xs text-slate-500">
            Expected percentage of understandable speech to familiar caregivers vs unfamiliar listeners (Flipsen 2006 / ASHA)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {INTELLIGIBILITY_NORMS.map((norm) => (
            <Card key={norm.ageYears} className="flex flex-col justify-between border-slate-200 hover:border-brand-500 hover:shadow-card transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-black text-slate-900 dark:text-white">
                    Age {norm.ageYears} {norm.ageYears === 1.5 ? 'yrs (18m)' : 'years'}
                  </span>
                  <Badge variant="info">{norm.expectedToCaregivers}</Badge>
                </div>
                
                <div className="space-y-1.5 mb-3 text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>To Family:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{norm.expectedToCaregivers}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>To Strangers:</span>
                    <span className="font-bold text-sky-600 dark:text-sky-400">{norm.expectedToUnfamiliar}</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {norm.description[language] || norm.description.en}
                </p>
              </div>

              <span className="text-[10px] text-slate-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                {norm.citation.split(';')[0]}
              </span>
            </Card>
          ))}
        </div>
      </section>

      {/* Module 2: Interactive Crowe & McLeod (2020) Consonant Matrix */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="h-5 w-5 text-brand-600" />
              Consonant Acquisition Sound Matrix (Crowe & McLeod 2020)
            </h2>
            <p className="text-xs text-slate-500">
              Click on any phoneme to view articulatory placement, trilingual word examples, and acquisition ages
            </p>
          </div>

          {/* Group Filter Tabs */}
          <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            <button
              onClick={() => setSelectedGroup('all')}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                selectedGroup === 'all' ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              All Sounds
            </button>
            <button
              onClick={() => setSelectedGroup('early_8')}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                selectedGroup === 'early_8' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Early-8 (2–3y)
            </button>
            <button
              onClick={() => setSelectedGroup('middle_8')}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                selectedGroup === 'middle_8' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Middle-8 (3–4.5y)
            </button>
            <button
              onClick={() => setSelectedGroup('late_8')}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                selectedGroup === 'late_8' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Late-8 (4.5–6y)
            </button>
          </div>
        </div>

        {/* Phoneme Pill Buttons Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2">
          {filteredSounds.map((item) => {
            const isSelected = selectedSound === item.sound;
            return (
              <button
                key={item.sound}
                onClick={() => setSelectedSound(item.sound)}
                className={`flex flex-col items-center justify-center rounded-xl p-2.5 border transition-all ${
                  isSelected
                    ? 'border-brand-600 bg-brand-600 text-white shadow-md shadow-brand-600/30 scale-105'
                    : item.group === 'early_8'
                    ? 'border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/20 dark:text-emerald-200'
                    : item.group === 'middle_8'
                    ? 'border-teal-200 bg-teal-50/50 hover:bg-teal-100 text-teal-950 dark:border-teal-900 dark:bg-teal-950/20 dark:text-teal-200'
                    : 'border-purple-200 bg-purple-50/50 hover:bg-purple-100 text-purple-950 dark:border-purple-900 dark:bg-purple-950/20 dark:text-purple-200'
                }`}
              >
                <span className="text-base font-black font-mono">{item.ipa}</span>
                <span className="text-[10px] uppercase opacity-80 mt-0.5">{item.group.replace('_', ' ')}</span>
              </button>
            );
          })}
        </div>

        {/* Active Sound Detail View Card */}
        <Card className="border-brand-200/80 bg-gradient-to-br from-white to-brand-50/20 dark:border-brand-900/60 dark:from-slate-900 dark:to-slate-900 p-6 shadow-elevated">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white font-mono font-black text-xl shadow-md shadow-brand-500/20">
                  {activeSoundItem.ipa}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white capitalize">
                    Sound {activeSoundItem.sound} ({activeSoundItem.ipa})
                  </h3>
                  <Badge variant={
                    activeSoundItem.group === 'early_8' ? 'success' :
                    activeSoundItem.group === 'middle_8' ? 'info' : 'purple'
                  }>
                    {activeSoundItem.group.toUpperCase().replace('_', ' ')}
                  </Badge>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeSoundItem.description[language] || activeSoundItem.description.en}
              </p>

              {/* Trilingual Word Examples */}
              <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                  Trilingual Word Positions (Initial / Medial / Final)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <span className="font-bold text-slate-500 block mb-1">English</span>
                    <ul className="space-y-0.5 text-slate-700 dark:text-slate-300 list-disc list-inside">
                      {activeSoundItem.examplesEn.map(ex => <li key={ex}>{ex}</li>)}
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-slate-500 block mb-1">हिन्दी (Hindi)</span>
                    <ul className="space-y-0.5 text-slate-700 dark:text-slate-300 list-disc list-inside">
                      {activeSoundItem.examplesHi?.map(ex => <li key={ex}>{ex}</li>) || <li>—</li>}
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-slate-500 block mb-1">ಕನ್ನಡ (Kannada)</span>
                    <ul className="space-y-0.5 text-slate-700 dark:text-slate-300 list-disc list-inside">
                      {activeSoundItem.examplesKn?.map(ex => <li key={ex}>{ex}</li>) || <li>—</li>}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Sound Acquisition Norm Criteria */}
            <div className="rounded-xl bg-white p-4 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 text-xs">
              <div>
                <span className="text-slate-400 block mb-1 font-semibold">75% Mastery Criterion (ASHA standard)</span>
                <span className="text-xl font-black text-brand-600 dark:text-brand-400">
                  {activeSoundItem.age75Percent} Years
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">75% of typically developing children acquire this sound.</p>
              </div>

              <div>
                <span className="text-slate-400 block mb-1 font-semibold">90% Full Competence Criterion</span>
                <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                  {activeSoundItem.age90Percent} Years
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">Expected full resolution of sound substitutions.</p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 italic">
                  Citation: Crowe & McLeod (2020). Children's English Consonant Acquisition in the United States: A Review. AJSLP.
                </span>
              </div>
            </div>

          </div>
        </Card>
      </section>

    </div>
  );
}

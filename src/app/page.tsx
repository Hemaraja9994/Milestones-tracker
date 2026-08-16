'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Stethoscope, 
  Heart, 
  Sparkles, 
  Brain, 
  Ear, 
  MessageSquare, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Globe2,
  FileText,
  Users
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useChild } from '@/context/ChildContext';
import { Card, Badge, Button } from '@/components/ui/Primitives';

export default function HomePage() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const { setActiveRole } = useChild();

  const handleRoleSelect = (role: 'professional' | 'parent') => {
    setActiveRole(role);
    if (role === 'professional') {
      router.push('/professional');
    } else {
      router.push('/parent');
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-white via-brand-50/20 to-transparent dark:from-slate-900 dark:via-slate-900/60 dark:to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Authoritative Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-3.5 py-1 text-xs font-semibold text-brand-800 dark:border-brand-800/60 dark:bg-brand-950/60 dark:text-brand-300 mb-6 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
            <span>CDC 2022 • ASHA • Northern & Downs • AIISH Mysuru • Crowe & McLeod</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
            {t.app.title}
          </h1>
          <p className="mt-3 text-lg sm:text-2xl font-semibold text-brand-600 dark:text-brand-400">
            {t.app.subtitle}
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.app.tagline}. Evidence-based developmental tracking from birth to 6 years with deep clinical depth in speech-language subsystems, auditory milestones, and Indian multilingual contexts.
          </p>

          {/* Dual Role Choice Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            
            {/* Professional Portal Card */}
            <div 
              onClick={() => handleRoleSelect('professional')}
              className="group cursor-pointer rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-card hover:border-brand-500 hover:shadow-elevated dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300 group-hover:scale-110 transition-transform">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <Badge variant="info">Clinical Grade</Badge>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex items-center justify-between">
                <span>{t.roles.professional}</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-brand-600" />
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Structured clinical documentation, chronological & gestational corrected age calculations, estimated receptive/expressive age calculators, and printable PDF surveillance reports.
              </p>
            </div>

            {/* Parent Tracker Card */}
            <div 
              onClick={() => handleRoleSelect('parent')}
              className="group cursor-pointer rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-card hover:border-rose-400 hover:shadow-elevated dark:border-slate-800 dark:bg-slate-900 dark:hover:border-rose-400 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 group-hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6" />
                </div>
                <Badge variant="success">Gentle & Non-Alarmist</Badge>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors flex items-center justify-between">
                <span>{t.roles.parent}</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-rose-600" />
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Simple age-guided checklists, "Why it matters" explanations, fun home play activities from CDC & ASHA, receptive vs expressive progress gauges, and bilingual reassurance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Core Features Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Authoritative Clinical & Educational Modules
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Engineered with strict adherence to evidence-based norms and multilingual Indian healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1: Auditory & Hearing */}
          <Link href="/auditory-development" className="block group">
            <Card className="h-full hover:border-brand-500 hover:shadow-elevated transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 mb-4 group-hover:scale-105 transition-transform">
                <Ear className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                Auditory & Hearing Milestones
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Northern & Downs (2002/2014) 7-stage sound localization maturation, AIISH Mysuru infant screening guidelines, Erber's 4 auditory levels, and High-Risk Registry indicators.
              </p>
            </Card>
          </Link>

          {/* Feature 2: Speech Sound Acquisition */}
          <Link href="/speech-sound-matrix" className="block group">
            <Card className="h-full hover:border-brand-500 hover:shadow-elevated transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300 mb-4 group-hover:scale-105 transition-transform">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                Crowe & McLeod (2020) Sound Matrix
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Early-8, Middle-8, and Late-8 consonant acquisition windows with word examples in English, Hindi, and Kannada, plus speech intelligibility norms by age.
              </p>
            </Card>
          </Link>

          {/* Feature 3: Speech & Language Subsystems */}
          <Link href="/clinical-reference" className="block group">
            <Card className="h-full hover:border-brand-500 hover:shadow-elevated transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 mb-4 group-hover:scale-105 transition-transform">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                Subsystems & Indian Context
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Deep clinical reference on phonology, articulation, resonance, voice, semantics, syntax, pragmatics, LEST Trivandrum, and bilingual code-switching.
              </p>
            </Card>
          </Link>

        </div>
      </section>

      {/* Trilingual Support Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-200 bg-gradient-to-r from-brand-500 via-teal-600 to-brand-700 p-8 sm:p-10 text-white shadow-elevated flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              <Globe2 className="h-3.5 w-3.5" />
              <span>Full Trilingual Internationalization</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              English • हिन्दी (Hindi) • ಕನ್ನಡ (Kannada)
            </h2>
            <p className="text-xs sm:text-sm text-brand-100 max-w-xl">
              All UI labels, milestone descriptions, clinical why-it-matters rationales, and parent tips are fully localized using culturally and linguistically verified terminology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/parent/tracker">
              <Button variant="secondary" size="md" className="font-bold">
                Start Tracking Free
              </Button>
            </Link>
            <Link href="/sources">
              <Button variant="outline" size="md" className="bg-transparent border-white/60 text-white hover:bg-white/10 font-semibold">
                View Scientific Sources
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

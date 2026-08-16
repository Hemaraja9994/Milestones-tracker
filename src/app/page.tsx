'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Stethoscope, Heart, Ear, Activity, Brain, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useChild } from '@/context/ChildContext';

export default function HomePage() {
  const router = useRouter();
  const { t } = useLanguage();
  const { setActiveRole } = useChild();

  const handleRoleSelect = (role: 'professional' | 'parent') => {
    setActiveRole(role);
    router.push(role === 'professional' ? '/professional' : '/parent');
  };

  return (
    <div className="bg-surface-canvas">
      {/* ================= Hero ================= */}
      <section className="border-b border-line-rule bg-gradient-to-b from-surface-raised to-surface-canvas">
        <div className="mx-auto max-w-[1240px] px-[18px] py-12 text-center sm:px-6 lg:px-8 lg:py-[72px]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line-warm bg-surface-raised px-3.5 py-2 text-[11px] font-semibold text-ink-body sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600 dark:bg-brand-400" />
            <span>CDC 2022 • ASHA • Northern &amp; Downs • AIISH Mysuru • Crowe &amp; McLeod</span>
          </div>

          <h1 className="mx-auto mt-6 max-w-[15ch] font-display text-[40px] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink sm:text-[54px] lg:text-[68px]">
            {t.app.title}
          </h1>
          <p className="mx-auto mt-3.5 max-w-[34ch] text-[17px] font-medium leading-[1.35] text-parent-600 lg:text-[22px]">
            {t.app.subtitle}
          </p>
          <p className="mx-auto mt-5 max-w-[70ch] text-sm leading-[1.65] text-ink-soft lg:text-[15px]">
            {t.app.tagline}. Evidence-based developmental tracking from birth to 6 years with deep
            clinical depth in speech-language subsystems, auditory milestones, and Indian
            multilingual contexts.
          </p>

          {/* Two pathway cards — teal is clinician, terracotta is parent, everywhere.
              4px top rule on tablet and up, 4px left rule when stacked on a phone. */}
          <div className="mx-auto mt-9 grid max-w-[940px] gap-4 text-left sm:gap-6 md:grid-cols-2 lg:mt-11">
            <PathwayCard
              pathway="clinician"
              icon={<Stethoscope className="h-6 w-6" strokeWidth={1.8} />}
              tag="Clinical Grade"
              title={t.roles.professional}
              subtitle={t.roles.professional_desc}
              body="Structured clinical documentation, chronological & gestational corrected age calculations, estimated receptive/expressive age calculators, and printable PDF surveillance reports."
              cta={t.nav.professional_portal}
              onClick={() => handleRoleSelect('professional')}
            />
            <PathwayCard
              pathway="parent"
              icon={<Heart className="h-6 w-6" strokeWidth={1.8} />}
              tag="Gentle & Non-Alarmist"
              title={t.roles.parent}
              subtitle={t.roles.parent_desc}
              body='Simple age-guided checklists, "Why it matters" explanations, fun home play activities from CDC & ASHA, receptive vs expressive progress gauges, and bilingual reassurance.'
              cta={t.nav.parent_tracker}
              onClick={() => handleRoleSelect('parent')}
            />
          </div>
        </div>
      </section>

      {/* ================= Modules ================= */}
      <section className="mx-auto max-w-[1240px] px-[18px] py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-[940px]">
          <h2 className="font-display text-[26px] font-extrabold leading-[1.12] text-ink lg:text-[28px]">
            Authoritative Clinical &amp; Educational Modules
          </h2>
          <p className="mt-2 max-w-[60ch] text-sm leading-[1.6] text-ink-muted">
            Engineered with strict adherence to evidence-based norms and multilingual Indian
            healthcare needs.
          </p>

          {/* One accent for all three module icons — the copy differentiates them. */}
          <div className="mt-7 grid gap-px overflow-hidden rounded-card border border-line-warm bg-line-warm sm:grid-cols-2 lg:grid-cols-3">
            <ModuleTile
              href="/auditory-development"
              icon={<Ear className="h-[22px] w-[22px]" strokeWidth={1.8} />}
              title="Auditory & Hearing Milestones"
              body="Northern & Downs (2002/2014) 7-stage sound localization maturation, AIISH Mysuru infant screening guidelines, Erber's 4 auditory levels, and High-Risk Registry indicators."
            />
            <ModuleTile
              href="/speech-sound-matrix"
              icon={<Activity className="h-[22px] w-[22px]" strokeWidth={1.8} />}
              title="Crowe & McLeod (2020) Sound Matrix"
              body="Early-8, Middle-8, and Late-8 consonant acquisition windows with word examples in English, Hindi, and Kannada, plus speech intelligibility norms by age."
            />
            <ModuleTile
              href="/clinical-reference"
              icon={<Brain className="h-[22px] w-[22px]" strokeWidth={1.8} />}
              title="Subsystems & Indian Context"
              body="Deep clinical reference on phonology, articulation, resonance, voice, semantics, syntax, pragmatics, LEST Trivandrum, and bilingual code-switching."
            />
          </div>

          {/* Trilingual banner */}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-7 rounded-panel bg-ink px-7 py-8 sm:px-9">
            <div className="flex max-w-[56ch] flex-col gap-2.5">
              <span className="eyebrow tracking-[0.1em] text-brand-300">
                Full Trilingual Internationalization
              </span>
              <h2 className="font-display text-[24px] font-extrabold leading-[1.15] text-white sm:text-[28px]">
                English • हिन्दी (Hindi) • ಕನ್ನಡ (Kannada)
              </h2>
              <p className="text-[13px] leading-[1.6] text-brand-200">
                All UI labels, milestone descriptions, clinical why-it-matters rationales, and parent
                tips are fully localized using culturally and linguistically verified terminology.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/parent/tracker"
                className="focus-ring inline-flex min-h-[48px] items-center rounded-full bg-white px-5 text-sm font-semibold text-brand-900"
              >
                Start Tracking Free
              </Link>
              <Link
                href="/sources"
                className="focus-ring inline-flex min-h-[48px] items-center rounded-full border border-white/45 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Scientific Sources
              </Link>
            </div>
          </div>

          <p className="mt-6 max-w-[80ch] text-xs leading-[1.6] text-ink-warm">
            {t.app.disclaimer_short}
          </p>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function PathwayCard({
  pathway,
  icon,
  tag,
  title,
  subtitle,
  body,
  cta,
  onClick,
}: {
  pathway: 'clinician' | 'parent';
  icon: React.ReactNode;
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  cta: string;
  onClick: () => void;
}) {
  const clinician = pathway === 'clinician';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus-ring group flex flex-col rounded-panel border border-line-warm bg-surface-raised p-6 text-left shadow-elevated transition-shadow duration-150 ease-out hover:shadow-frame sm:p-[30px] ${
        clinician
          ? 'border-l-4 border-l-brand-600 md:border-l md:border-l-line-warm md:border-t-4 md:border-t-brand-600'
          : 'border-l-4 border-l-parent-600 md:border-l md:border-l-line-warm md:border-t-4 md:border-t-parent-600'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`flex h-[50px] w-[50px] items-center justify-center rounded-[14px] ${
            clinician
              ? 'bg-brand-tint text-brand-600 dark:text-brand-400'
              : 'bg-parent-tint text-parent-600'
          }`}
        >
          {icon}
        </span>
        <span
          className={`eyebrow rounded-full px-3 py-1.5 ${
            clinician
              ? 'bg-brand-tint text-brand-600 dark:text-brand-400'
              : 'bg-parent-tint text-parent-700'
          }`}
        >
          {tag}
        </span>
      </div>

      <h3 className="mt-5 font-display text-[22px] font-extrabold leading-[1.15] text-ink sm:text-[26px]">
        {title}
      </h3>
      <p className="mt-2 text-[13px] leading-[1.5] text-ink-muted">{subtitle}</p>
      <p className="mt-4 text-sm leading-[1.6] text-ink-body">{body}</p>

      <span
        className={`mt-6 inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full text-[15px] font-semibold text-white transition-colors ${
          clinician
            ? 'bg-brand-600 group-hover:bg-brand-700 dark:text-ink-invert'
            : 'bg-parent-600 group-hover:bg-parent-700 dark:text-ink-invert'
        }`}
      >
        {cta}
        <ArrowRight
          className="h-[17px] w-[17px] transition-transform duration-150 ease-out group-hover:translate-x-1"
          strokeWidth={2.2}
        />
      </span>
    </button>
  );
}

function ModuleTile({
  href,
  icon,
  title,
  body,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="focus-ring flex flex-col gap-3 bg-surface-raised p-6 transition-colors hover:bg-surface-tint"
    >
      <span className="text-brand-600 dark:text-brand-400">{icon}</span>
      <h3 className="font-sans text-base font-semibold leading-[1.3] text-ink">{title}</h3>
      <p className="text-[13px] leading-[1.6] text-ink-muted">{body}</p>
    </Link>
  );
}

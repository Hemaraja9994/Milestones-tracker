'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Brain, Ear, Activity, Heart, Stethoscope } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useChild } from '@/context/ChildContext';

export default function HomePage() {
  const router = useRouter();
  const { t } = useLanguage();
  const { setActiveRole } = useChild();

  const go = (role: 'professional' | 'parent') => {
    setActiveRole(role);
    router.push(role === 'professional' ? '/professional' : '/parent');
  };

  return (
    <div className="bg-page">
      {/* ================= Hero ================= */}
      <section className="mx-auto max-w-[1240px] px-[18px] pb-10 pt-12 sm:px-6 lg:px-10 lg:pb-14 lg:pt-16">
        {/* Hard break after the first full stop, at every width */}
        <h1 className="max-w-[24ch] font-display text-[40px] font-bold leading-[1.0] tracking-[-0.03em] text-ink sm:text-[54px] lg:text-[66px]">
          Understand progress.
          <br />
          Support every milestone.
        </h1>

        {/* Shipped app.* strings, unchanged, in order */}
        <p className="mt-5 max-w-[52ch] font-display text-[19px] font-semibold leading-[1.25] tracking-[-0.02em] text-clinician-ink sm:text-[22px]">
          {t.app.subtitle}
        </p>
        <p className="mt-3 max-w-[64ch] text-[15px] leading-[1.6] text-body">{t.app.tagline}.</p>
        <p className="mt-3 max-w-[64ch] text-[13px] leading-[1.55] text-muted">
          {t.app.disclaimer_short}
        </p>

        {/* Two pathway cards — parent second when stacked */}
        <div className="mt-9 grid gap-4 md:grid-cols-2 md:gap-5">
          <PathwayCard
            tone="clinician"
            icon={<Stethoscope className="h-6 w-6" strokeWidth={1.9} />}
            qualifier="Clinical grade"
            title={t.roles.professional}
            audience={t.roles.professional_desc}
            chips={[
              'Corrected age',
              'Receptive & expressive estimates',
              'High Risk Register',
              'PDF reports',
            ]}
            cta={t.nav.professional_portal}
            onClick={() => go('professional')}
          />
          <PathwayCard
            tone="parent"
            icon={<Heart className="h-6 w-6" strokeWidth={1.9} />}
            qualifier="Gentle & non-alarmist"
            title={t.roles.parent}
            audience={t.roles.parent_desc}
            chips={['Age-guided checklist', 'Why it matters', 'Try at home', 'ASHA milestones']}
            cta={t.nav.parent_tracker}
            onClick={() => go('parent')}
          />
        </div>
      </section>

      {/* ================= Modules ================= */}
      <section className="mx-auto max-w-[1240px] px-[18px] pb-14 sm:px-6 lg:px-10">
        <h2 className="font-display text-[26px] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[30px]">
          Authoritative clinical &amp; educational modules
        </h2>
        <p className="mt-2 max-w-[60ch] text-[14px] leading-[1.6] text-muted">
          Engineered with strict adherence to evidence-based norms and multilingual Indian
          healthcare needs.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <ModuleRow
            href="/auditory-development"
            icon={<Ear className="h-[22px] w-[22px]" strokeWidth={1.9} />}
            title="Auditory & Hearing Milestones"
            body="Northern & Downs sound localization maturation, AIISH Mysuru screening guidelines, Erber's four auditory levels."
          />
          <ModuleRow
            href="/speech-sound-matrix"
            icon={<Activity className="h-[22px] w-[22px]" strokeWidth={1.9} />}
            title="Crowe & McLeod (2020) Sound Matrix"
            body="Early-8, Middle-8 and Late-8 consonant windows with English, Hindi and Kannada word examples."
          />
          <ModuleRow
            href="/clinical-reference"
            icon={<Brain className="h-[22px] w-[22px]" strokeWidth={1.9} />}
            title="Subsystems & Indian Context"
            body="Phonology, articulation, resonance, voice, semantics, syntax, pragmatics, LEST Trivandrum and code-switching."
          />
        </div>

        {/* Trilingual band */}
        <div className="mt-6 rounded-card border-2 border-ink bg-ink p-6 sm:p-8">
          <span className="eyebrow text-clinician-dim">Full trilingual internationalization</span>
          <h2 className="mt-2.5 font-display text-[24px] font-bold leading-[1.15] tracking-[-0.03em] text-canvas sm:text-[28px]">
            English • हिन्दी (Hindi) • ಕನ್ನಡ (Kannada)
          </h2>
          <p className="mt-2.5 max-w-[56ch] text-[13px] leading-[1.6] text-clinician-soft">
            All UI labels, milestone descriptions, clinical why-it-matters rationales and parent
            tips are fully localized using culturally and linguistically verified terminology.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <Link
              href="/parent"
              className="focus-ring sig-press inline-flex min-h-[48px] items-center rounded-control bg-canvas px-5 text-[14px] font-bold text-ink"
            >
              Start tracking
            </Link>
            <Link
              href="/sources"
              className="focus-ring sig-press inline-flex min-h-[48px] items-center rounded-control border-2 border-ink-soft px-5 text-[14px] font-semibold text-canvas"
            >
              View scientific sources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function PathwayCard({
  tone,
  icon,
  qualifier,
  title,
  audience,
  chips,
  cta,
  onClick,
}: {
  tone: 'clinician' | 'parent';
  icon: React.ReactNode;
  qualifier: string;
  title: string;
  audience: string;
  chips: string[];
  cta: string;
  onClick: () => void;
}) {
  const clinician = tone === 'clinician';

  return (
    <button
      type="button"
      onClick={onClick}
      className="sig-lift sig-press focus-ring group overflow-hidden rounded-card border-2 border-ink bg-canvas text-left"
    >
      {/* Full-bleed colour head. Coral is fill only — its labels are ink. */}
      <div className={`p-5 sm:p-6 ${clinician ? 'bg-clinician' : 'bg-parent'}`}>
        <div className="flex items-start justify-between gap-3">
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-chip ${
              clinician ? 'bg-clinician-ink text-canvas' : 'bg-ink text-canvas'
            }`}
          >
            {icon}
          </span>
          <span
            className={`eyebrow rounded-chip px-2.5 py-1.5 ${
              clinician ? 'bg-clinician-ink text-canvas' : 'bg-ink text-canvas'
            }`}
          >
            {qualifier}
          </span>
        </div>
        <h3
          className={`mt-4 font-display text-[24px] font-bold leading-[1.15] tracking-[-0.03em] sm:text-[27px] ${
            clinician ? 'text-canvas' : 'text-ink'
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-[13px] leading-[1.55] ${
            clinician ? 'text-clinician-soft' : 'text-parent-deep'
          }`}
        >
          {audience}
        </p>
      </div>

      {/* Canvas foot */}
      <div className="p-5 sm:p-6">
        <ul className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <li
              key={c}
              className="sig-chip rounded-chip border-2 border-line px-2.5 py-1.5 text-[12px] font-semibold text-body"
            >
              {c}
            </li>
          ))}
        </ul>
        <span
          className={`mt-5 flex min-h-[52px] items-center justify-center gap-2 rounded-control text-[15px] font-bold ${
            clinician ? 'bg-clinician text-canvas' : 'bg-parent text-ink'
          }`}
        >
          {cta}
          <ArrowRight
            className="h-[17px] w-[17px] transition-transform duration-150 ease-out group-hover:translate-x-1"
            strokeWidth={2.2}
          />
        </span>
      </div>
    </button>
  );
}

function ModuleRow({
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
      className="sig-lift sig-press focus-ring flex flex-col gap-2.5 rounded-card border-2 border-line bg-canvas p-5"
    >
      <span className="text-clinician-ink">{icon}</span>
      <h3 className="font-display text-[15px] font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
        {title}
      </h3>
      <p className="text-[13px] leading-[1.6] text-muted">{body}</p>
    </Link>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { HRR_CATEGORIES, HIGH_RISK_REGISTER_ITEMS } from '@/data/highRiskRegister';
import { Badge, StatusDotBadge, NotePanel } from '@/components/ui/Primitives';

export default function HighRiskRegisterHub() {
  const { childrenList, setActiveChild } = useChild();
  const { language, t } = useLanguage();

  return (
    <div className="bg-surface-canvas">
      {/* ================= Header ================= */}
      <div className="border-b border-line-rule bg-surface-raised">
        <div className="mx-auto max-w-[1240px] px-[18px] pb-7 pt-8 sm:px-6 lg:px-9">
          <h1 className="max-w-[34ch] font-display text-[26px] font-extrabold leading-[1.12] text-ink sm:text-[34px]">
            {t.hrr.title}
          </h1>
          <p className="mt-3 max-w-[78ch] text-sm leading-[1.6] text-ink-soft">{t.hrr.subtitle}</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-[18px] py-7 sm:px-6 lg:px-9 lg:py-9">
        {/* Category overview — sage for every icon-less tile, copy differentiates */}
        <div className="grid gap-px overflow-hidden rounded-card border border-line-warm bg-line-warm sm:grid-cols-2 lg:grid-cols-3">
          {HRR_CATEGORIES.map((cat) => (
            <div key={cat.id} className="sig-lift flex flex-col gap-2.5 border-2 border-line bg-canvas p-6">
              <span className="eyebrow font-sans text-brand-600 dark:text-brand-400">
                {HIGH_RISK_REGISTER_ITEMS.filter((i) => i.category === cat.id).length} factors
              </span>
              <h2 className="font-sans text-base font-semibold leading-[1.3] text-ink">
                {cat.label[language] || cat.label.en}
              </h2>
              <p className="text-[13px] leading-[1.6] text-ink-muted">
                {cat.description[language] || cat.description.en}
              </p>
            </div>
          ))}
        </div>

        {/* Child selection */}
        <section>
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line-rule pb-3">
            <h2 className="font-sans text-sm font-semibold text-ink">
              Select Child for Risk Screening &amp; Triage
            </h2>
            <span className="text-xs text-ink-muted">
              {childrenList.length} children registered
            </span>
          </div>

          {childrenList.length === 0 ? (
            <p className="px-6 py-12 text-center text-[13px] text-ink-muted">
              No child profiles yet. Create one in the Professional Portal to begin risk screening.
            </p>
          ) : (
            <ul className="mt-4 overflow-hidden rounded-card border border-line-warm bg-surface-raised">
              {childrenList.map((child) => {
                const ages = calculateChildAges(child.dateOfBirth, child.gestationalWeeks);
                const status = child.hrrRecord
                  ? child.hrrRecord.overallRiskLevel
                  : ages.isPremature
                  ? 'high_risk'
                  : 'no_elevated_risk';
                const label = child.hrrRecord
                  ? child.hrrRecord.overallRiskLevel.replace(/_/g, ' ')
                  : ages.isPremature
                  ? 'Preterm — high risk'
                  : 'Screening pending';

                return (
                  <li
                    key={child.id}
                    className="flex flex-wrap items-center justify-between gap-4 border-b border-line-hair px-5 py-4 last:border-b-0 sm:px-6"
                  >
                    <div className="min-w-[16ch] flex-1">
                      <div className="font-sans text-[15px] font-semibold text-ink">
                        {child.nameOrInitials} —{' '}
                        {ages.chronologicalText[language] || ages.chronologicalText.en}
                      </div>
                      <div className="mt-1.5 text-xs leading-[1.6] text-ink-muted">
                        DOB {child.dateOfBirth}
                        {child.riskFactors?.length
                          ? ` · Flagged: ${child.riskFactors.join(', ')}`
                          : ''}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <StatusDotBadge status={status} label={label} />
                      {ages.isPremature && (
                        <Badge variant="warning">Preterm ({child.gestationalWeeks}w)</Badge>
                      )}
                      <Link
                        href={`/high-risk-register/${child.id}`}
                        onClick={() => setActiveChild(child)}
                        className="focus-ring sig-press inline-flex min-h-[40px] items-center gap-1.5 rounded-control border-2 border-line px-3.5 text-[13px] font-semibold text-brand-600 transition-colors hover:bg-surface-canvas dark:text-brand-400"
                      >
                        {t.hrr.start_screening}
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <NotePanel tone="emerging" className="text-xs">
          {t.hrr.disclaimer}
        </NotePanel>
      </div>
    </div>
  );
}

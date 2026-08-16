'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import HighRiskRegisterChecklist from '@/components/hrr/HighRiskRegisterChecklist';
import { HighRiskAssessmentRecord } from '@/types';

export default function ChildHRRScreeningPage() {
  const params = useParams();
  const childId = params?.childId as string;

  const { childrenList, createOrUpdateChild } = useChild();
  const { language, t } = useLanguage();

  const child = childrenList.find((c) => c.id === childId) || childrenList[0];

  if (!child) {
    return (
      <div className="mx-auto max-w-[1240px] px-[18px] py-16 text-center sm:px-6 lg:px-9">
        <p className="text-sm text-ink-body">Child profile not found.</p>
        <Link
          href="/high-risk-register"
          className="mt-3 inline-block text-sm font-semibold text-brand-600 underline dark:text-brand-400"
        >
          Back to High Risk Register
        </Link>
      </div>
    );
  }

  const ageResult = calculateChildAges(child.dateOfBirth, child.gestationalWeeks);

  const handleSaveHRR = (record: HighRiskAssessmentRecord) => {
    createOrUpdateChild({ ...child, hrrRecord: record });
  };

  return (
    <div className="bg-surface-canvas">
      <div className="border-b border-line-rule bg-surface-raised">
        <div className="mx-auto flex max-w-[1240px] items-start gap-3.5 px-[18px] pb-7 pt-8 sm:px-6 lg:px-9">
          <Link
            href="/high-risk-register"
            aria-label={t.common.back}
            className="focus-ring mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-warm text-ink-body"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <div className="eyebrow tracking-[0.1em] text-brand-600 dark:text-brand-400">
              {child.nameOrInitials} ·{' '}
              {ageResult.chronologicalText[language] || ageResult.chronologicalText.en}
            </div>
            <h1 className="mt-2.5 max-w-[34ch] font-display text-[26px] font-extrabold leading-[1.12] text-ink sm:text-[34px]">
              {t.hrr.title}
            </h1>
            <p className="mt-3 max-w-[78ch] text-sm leading-[1.6] text-ink-soft">
              {t.hrr.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-[18px] py-7 sm:px-6 lg:px-9 lg:py-9">
        <HighRiskRegisterChecklist
          child={child}
          initialResponses={child.hrrRecord?.responses}
          onSave={handleSaveHRR}
        />
      </div>
    </div>
  );
}

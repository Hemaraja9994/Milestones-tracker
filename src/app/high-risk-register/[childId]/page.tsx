'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ShieldAlert, Sparkles, Printer, FileText } from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import HighRiskRegisterChecklist from '@/components/hrr/HighRiskRegisterChecklist';
import { HighRiskAssessmentRecord } from '@/types';
import { Button } from '@/components/ui/Primitives';

export default function ChildHRRScreeningPage() {
  const params = useParams();
  const childId = params?.childId as string;

  const { childrenList, createOrUpdateChild } = useChild();
  const { language, t } = useLanguage();

  const child = childrenList.find(c => c.id === childId) || childrenList[0];

  if (!child) {
    return (
      <div className="p-12 text-center text-xs space-y-4">
        <p>Child profile not found.</p>
        <Link href="/high-risk-register" className="text-brand-600 font-bold underline">
          Back to High Risk Register
        </Link>
      </div>
    );
  }

  const ageResult = calculateChildAges(child.dateOfBirth, child.gestationalWeeks);

  const handleSaveHRR = (record: HighRiskAssessmentRecord) => {
    const updatedChild = {
      ...child,
      hrrRecord: record,
    };
    createOrUpdateChild(updatedChild);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <Link
            href="/high-risk-register"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              High Risk Register: <span className="text-rose-600 dark:text-rose-400">{child.nameOrInitials}</span>
            </h1>
            <p className="text-xs text-slate-500">
              Age: {ageResult.chronologicalText[language] || ageResult.chronologicalText.en} • JCIH & RBSK Risk Stratification
            </p>
          </div>
        </div>

        <Link href={`/high-risk-register/${child.id}/report`}>
          <Button variant="primary" size="sm">
            <Printer className="h-4 w-4" />
            <span>{t.common.export_triage_pdf}</span>
          </Button>
        </Link>
      </div>

      {/* Main Checklist Component */}
      <HighRiskRegisterChecklist
        child={child}
        initialResponses={child.hrrRecord?.responses}
        onSave={handleSaveHRR}
      />

    </div>
  );
}

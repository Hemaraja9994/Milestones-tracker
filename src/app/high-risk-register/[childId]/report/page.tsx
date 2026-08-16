'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import HRRTriageReportView from '@/components/hrr/HRRTriageReportView';

export default function StandaloneHRRTriageReportPage() {
  const params = useParams();
  const childId = params?.childId as string;
  const { childrenList } = useChild();

  const child = childrenList.find(c => c.id === childId) || childrenList[0];

  if (!child) {
    return (
      <div className="p-12 text-center text-xs space-y-4">
        <p>No child profile found.</p>
        <Link href="/high-risk-register" className="text-brand-600 font-bold underline">
          Return to High Risk Register
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      <div className="no-print">
        <Link
          href={`/high-risk-register/${child.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Risk Screening Form</span>
        </Link>
      </div>

      <HRRTriageReportView child={child} hrrRecord={child.hrrRecord} />
    </div>
  );
}

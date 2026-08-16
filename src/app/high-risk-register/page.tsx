'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  Sparkles, 
  UserPlus, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  FileText,
  Building,
  Heart
} from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { evaluateHRRTriage } from '@/lib/hrrTriageEngine';
import { Card, Badge, Button, StatusDotBadge } from '@/components/ui/Primitives';

export default function HighRiskRegisterHub() {
  const { childrenList, activeChild, setActiveChild } = useChild();
  const { language, t } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Banner */}
      <div className="rounded-3xl border border-rose-200/80 bg-gradient-to-r from-rose-950 via-slate-900 to-slate-900 p-8 text-white shadow-elevated">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              <ShieldAlert className="h-3.5 w-3.5 text-rose-400" />
              <span>JCIH (2019) • RBSK • AIISH Mysuru Clinical Risk Register</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              High Risk Register (HRR) for Hearing & Communication Disorders
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Targeted early surveillance for infants and children with perinatal, genetic, craniofacial, maternal infection, or ongoing health risk indicators.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Badge variant="danger" className="text-xs py-1 px-3 bg-white/10 border-white/20 text-white">
              Automated Triage Stratification
            </Badge>
            <Badge variant="info" className="text-xs py-1 px-3 bg-white/10 border-white/20 text-white">
              Exportable Triage PDF
            </Badge>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-rose-200 bg-rose-50/20 dark:border-rose-900/40 dark:bg-rose-950/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-rose-600 text-white font-bold">1</div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Perinatal & NICU</h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Prematurity, VLBW (&lt;1500g), NICU &gt;5d, severe hyperbilirubinemia, birth asphyxia, and ototoxic antibiotics.
          </p>
        </Card>

        <Card className="border-amber-200 bg-amber-50/20 dark:border-amber-900/40 dark:bg-amber-950/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-amber-600 text-white font-bold">2</div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Family & Genetics</h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Family history of childhood hearing loss/speech delay, consanguineous marriage, and maternal TORCH infections.
          </p>
        </Card>

        <Card className="border-sky-200 bg-sky-50/20 dark:border-sky-900/40 dark:bg-sky-950/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-sky-600 text-white font-bold">3</div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Physical & Ongoing</h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Craniofacial anomalies, cleft palate, microtia/ear tags, meningitis/encephalitis, and caregiver concern.
          </p>
        </Card>
      </div>

      {/* Select Patient to Screen */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 dark:border-slate-800">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Select Child for Risk Screening & Triage
          </h2>
          <span className="text-xs text-slate-400">{childrenList.length} children registered</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {childrenList.map((child) => {
            const ageResult = calculateChildAges(child.dateOfBirth, child.gestationalWeeks);
            const hrrTriage = evaluateHRRTriage(child.hrrRecord?.responses || {});

            return (
              <Card key={child.id} className="flex flex-col justify-between hover:border-rose-400 hover:shadow-elevated transition-all">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {child.nameOrInitials}
                      </h3>
                      <p className="text-xs text-slate-500">
                        DOB: {child.dateOfBirth} ({ageResult.chronologicalText[language] || ageResult.chronologicalText.en})
                      </p>
                    </div>
                    {ageResult.isPremature && (
                      <Badge variant="warning" className="text-[10px]">
                        Preterm ({child.gestationalWeeks}w)
                      </Badge>
                    )}
                  </div>

                  {/* HRR Status Tag */}
                  <div className="mb-4">
                    <StatusDotBadge
                      status={child.hrrRecord ? child.hrrRecord.overallRiskLevel : (ageResult.isPremature ? 'high_risk' : 'no_elevated_risk')}
                      label={
                        child.hrrRecord
                          ? child.hrrRecord.overallRiskLevel.toUpperCase().replace('_', ' ')
                          : (ageResult.isPremature ? 'PRETERM - HIGH RISK' : 'SCREENING PENDING')
                      }
                    />
                  </div>

                  {child.riskFactors && child.riskFactors.length > 0 && (
                    <div className="rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800/60 text-xs mb-3 space-y-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 block">Flagged Profile Factors:</span>
                      <ul className="text-slate-600 dark:text-slate-400 list-disc list-inside space-y-0.5">
                        {child.riskFactors.map(rf => <li key={rf}>{rf}</li>)}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/high-risk-register/${child.id}`}
                    onClick={() => setActiveChild(child)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700 dark:text-rose-400"
                  >
                    <span>{t.hrr.start_screening}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    href={`/high-risk-register/${child.id}/report`}
                    className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium"
                  >
                    View Report
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

    </div>
  );
}

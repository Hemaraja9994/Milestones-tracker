'use client';

import React from 'react';
import { 
  Printer, 
  Download, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  User, 
  Activity, 
  FileCheck2,
  AlertTriangle
} from 'lucide-react';
import { ChildProfile, HighRiskAssessmentRecord, InformationSource } from '@/types';
import { HIGH_RISK_REGISTER_ITEMS } from '@/data/highRiskRegister';
import { evaluateHRRTriage, HRRTriageResult } from '@/lib/hrrTriageEngine';
import { calculateChildAges } from '@/lib/correctedAge';
import { useLanguage } from '@/context/LanguageContext';
import BrandMark from '@/components/ui/BrandMark';
import { Button, Badge, StatusDotBadge } from '@/components/ui/Primitives';

interface HRRTriageReportViewProps {
  child: ChildProfile;
  hrrRecord?: HighRiskAssessmentRecord;
}

export default function HRRTriageReportView({ child, hrrRecord }: HRRTriageReportViewProps) {
  const { language, t } = useLanguage();

  const ageResult = calculateChildAges(
    child.dateOfBirth,
    child.gestationalWeeks
  );

  const responses = hrrRecord?.responses || {};
  const triageResult: HRRTriageResult = evaluateHRRTriage(responses);

  const handlePrint = () => {
    window.print();
  };

  const getSourceLabel = (src?: InformationSource) => {
    if (!src) return 'Parent Report';
    return t.hrr.sources[src] || src;
  };

  return (
    <div className="space-y-6">
      
      {/* Top Action Bar (Hidden in Print) */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-risk text-white">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              High Risk Register (HRR) Clinical Triage Report
            </h2>
            <p className="text-xs text-slate-500">
              Evaluation Date: {hrrRecord?.assessmentDate || new Date().toISOString().split('T')[0]} • JCIH & RBSK Risk Model
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="h-4 w-4" />
            <span>{t.common.print}</span>
          </Button>
          <Button variant="primary" size="sm" onClick={handlePrint}>
            <Download className="h-4 w-4" />
            <span>{t.common.export_triage_pdf}</span>
          </Button>
        </div>
      </div>

      {/* Printable Report Document */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 print:border-none print:shadow-none print:p-0">
        
        {/* Document Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-rose-600 pb-6 mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-5 w-5 text-rose-600" />
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                HIGH RISK REGISTER (HRR) TRIAGE REPORT
              </h1>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Joint Committee on Infant Hearing (JCIH) & RBSK Clinical Risk Surveillance
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Targeted Early Identification of Hearing Loss & Communication Disorders
            </p>
          </div>

          <div className="text-right text-xs">
            <p className="font-bold text-slate-800 dark:text-slate-200">
              {hrrRecord?.examinerName || 'Consultant SLP / Pediatric Evaluator'}
            </p>
            <p className="text-slate-500">{hrrRecord?.examinerRole || 'Pediatric Hearing Surveillance'}</p>
            <p className="text-slate-500 mt-1">Date: <span className="font-semibold text-slate-700 dark:text-slate-300">{hrrRecord?.assessmentDate || new Date().toISOString().split('T')[0]}</span></p>
          </div>
        </div>

        {/* Patient Demographics Box */}
        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 dark:bg-slate-800/60 dark:border-slate-700 mb-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5 font-semibold">Patient Initials / Name</span>
            <span className="font-bold text-sm text-slate-900 dark:text-white">{child.nameOrInitials}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5 font-semibold">Date of Birth</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{child.dateOfBirth}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5 font-semibold">Chronological Age</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{ageResult.chronologicalText[language] || ageResult.chronologicalText.en}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5 font-semibold">Corrected Age</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {ageResult.isPremature 
                ? `${child.gestationalWeeks} wks (${ageResult.correctedText[language] || ageResult.correctedText.en})`
                : 'Full Term (≥37 wks)'}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5 font-semibold">Home Languages</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {child.primaryLanguages?.join(', ') || 'English'}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5 font-semibold">Newborn Hearing Screening</span>
            <span className={`font-bold uppercase ${
              child.hearingScreeningStatus === 'passed' ? 'text-emerald-600' : 'text-amber-600'
            }`}>
              {child.hearingScreeningStatus || 'Passed'}
            </span>
          </div>
          <div className="col-span-2">
            <span className="text-slate-400 block mb-0.5 font-semibold">Medical History Notes</span>
            <span className="text-slate-700 dark:text-slate-300 italic">{child.medicalNotes || 'None reported.'}</span>
          </div>
        </div>

        {/* Triage Stratification Banner */}
        <div className={`rounded-xl p-5 border mb-6 ${
          triageResult.riskLevel === 'high_risk'
            ? 'bg-rose-50 border-rose-300 dark:bg-rose-950/30 dark:border-rose-900/60'
            : triageResult.riskLevel === 'elevated_risk'
            ? 'bg-amber-50 border-amber-300 dark:bg-amber-950/30 dark:border-amber-900/60'
            : 'bg-emerald-50 border-emerald-300 dark:bg-emerald-950/30 dark:border-emerald-900/60'
        }`}>
          <div className="flex items-center justify-between gap-4 mb-2">
            <StatusDotBadge 
              status={triageResult.riskLevel} 
              label={triageResult.triageBadgeLabel[language] || triageResult.triageBadgeLabel.en} 
              className="text-xs px-3 py-1 font-bold"
            />
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
              Timeline: {triageResult.recommendedTimeline[language] || triageResult.recommendedTimeline.en}
            </span>
          </div>

          <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            {triageResult.triageSummaryText[language] || triageResult.triageSummaryText.en}
          </p>
        </div>

        {/* Positive High Risk Indicators Table */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
            <ShieldAlert className="h-4 w-4 text-rose-600" />
            {t.hrr.positive_factors} ({triageResult.positiveFactorsCount} Indicators)
          </h3>

          {triageResult.positiveItems.length === 0 ? (
            <div className="rounded-xl border border-slate-200 p-4 text-center text-xs text-slate-500 dark:border-slate-800">
              {t.hrr.no_positive_factors}
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                  <tr>
                    <th className="p-2.5">Risk Factor Indicator</th>
                    <th className="p-2.5">Category</th>
                    <th className="p-2.5">Severity</th>
                    <th className="p-2.5">Source of Information</th>
                    <th className="p-2.5">Clinical Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {triageResult.positiveItems.map((item) => {
                    const resp = responses[item.id] || {};
                    return (
                      <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-2.5 font-medium">{item.clinicalTitle[language] || item.clinicalTitle.en}</td>
                        <td className="p-2.5 text-slate-500 capitalize">{item.category.replace('_', ' ')}</td>
                        <td className="p-2.5">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                            item.weight === 'critical' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {item.weight.toUpperCase()}
                          </span>
                        </td>
                        <td className="p-2.5 text-slate-600 dark:text-slate-400">
                          {getSourceLabel(resp.source)}
                        </td>
                        <td className="p-2.5 text-slate-600 dark:text-slate-400 italic">
                          {resp.clinicalNotes || '—'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Recommended Action Plan & Timeline */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40 space-y-3 text-xs">
          <h4 className="font-bold text-slate-900 dark:text-white uppercase flex items-center gap-2">
            <FileCheck2 className="h-4 w-4 text-brand-600" />
            {t.hrr.action_plan}
          </h4>

          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 list-disc list-inside">
            {(triageResult.recommendedActions[language] || triageResult.recommendedActions.en).map((action, idx) => (
              <li key={idx} className="font-medium">{action}</li>
            ))}
          </ul>

          {hrrRecord?.clinicalNotes && (
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Examiner Triage Impressions:</span>
              <p className="italic text-slate-600 dark:text-slate-400">{hrrRecord.clinicalNotes}</p>
            </div>
          )}
        </div>

        {/* Disclaimer Footer */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-4 text-[10px] text-slate-400 leading-relaxed">
          <p className="font-semibold text-slate-500 dark:text-slate-400">CLINICAL TRIAGE DISCLAIMER:</p>
          <p>{triageResult.educationalDisclaimer[language] || triageResult.educationalDisclaimer.en}</p>
        </div>

      </div>
    </div>
  );
}

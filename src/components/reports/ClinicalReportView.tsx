'use client';

import React from 'react';
import { 
  Printer, 
  Download, 
  FileCheck2, 
  Brain, 
  MessageSquare, 
  Ear, 
  ShieldAlert, 
  Sparkles,
  Calendar,
  User,
  Activity
} from 'lucide-react';
import { ChildProfile, AssessmentRecord } from '@/types';
import { calculateChildAges } from '@/lib/correctedAge';
import { computeClinicalSnapshot } from '@/lib/calculationEngine';
import { ALL_MILESTONES } from '@/data/allMilestones';
import { Button, Badge } from '@/components/ui/Primitives';
import { useLanguage } from '@/context/LanguageContext';
import BrandMark from '@/components/ui/BrandMark';

interface ClinicalReportViewProps {
  child: ChildProfile;
  assessment: AssessmentRecord;
}

export default function ClinicalReportView({ child, assessment }: ClinicalReportViewProps) {
  const { language, t } = useLanguage();

  const ageResult = calculateChildAges(
    child.dateOfBirth,
    child.gestationalWeeks,
    assessment.sessionDate
  );

  const snapshot = computeClinicalSnapshot(
    ageResult.effectiveAgeMonths,
    assessment.milestoneStatuses,
    child
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Action Bar (Hidden in Print) */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2">
          <BrandMark size={28} />
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Clinical Developmental Surveillance Report
            </h2>
            <p className="text-xs text-slate-500">
              Session #{assessment.sessionNumber} • {assessment.sessionDate}
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
            <span>{t.common.export_pdf}</span>
          </Button>
        </div>
      </div>

      {/* Printable Report Document */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 print:border-none print:shadow-none print:p-0">
        
        {/* Document Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-brand-600 pb-6 mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-5 w-5 text-brand-600" />
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                MILESTONEPATH CLINICAL SUMMARY
              </h1>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Speech-Language, Auditory & Developmental Milestone Surveillance
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Evidence Base: CDC 2022 • ASHA • Northern & Downs • AIISH • Crowe & McLeod (2020)
            </p>
          </div>

          <div className="text-right text-xs">
            <p className="font-bold text-slate-800 dark:text-slate-200">
              {assessment.examinerName || 'Consultant SLP / Pediatric Evaluator'}
            </p>
            <p className="text-slate-500">{assessment.examinerRole || 'Clinical Specialist'}</p>
            <p className="text-slate-500 mt-1">Evaluation Date: <span className="font-semibold text-slate-700 dark:text-slate-300">{assessment.sessionDate}</span></p>
          </div>
        </div>

        {/* Patient Demographics Box */}
        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 dark:bg-slate-800/60 dark:border-slate-700 mb-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5">Patient Initials/Name</span>
            <span className="font-bold text-sm text-slate-900 dark:text-white">{child.nameOrInitials}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Date of Birth</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{child.dateOfBirth}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Chronological Age</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{ageResult.chronologicalText[language] || ageResult.chronologicalText.en}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Gestational Age / Corrected</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {ageResult.isPremature 
                ? `${child.gestationalWeeks} wks (${ageResult.correctedText[language] || ageResult.correctedText.en})`
                : 'Full Term (≥37 wks)'}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Home Languages</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {child.primaryLanguages?.join(', ') || 'English'}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Newborn Hearing Screening</span>
            <span className={`font-bold uppercase ${
              child.hearingScreeningStatus === 'passed' ? 'text-emerald-600' : 'text-amber-600'
            }`}>
              {child.hearingScreeningStatus || 'Passed'}
            </span>
          </div>
          <div className="col-span-2">
            <span className="text-slate-400 block mb-0.5">Medical History / Risk Notes</span>
            <span className="text-slate-700 dark:text-slate-300 italic">{child.medicalNotes || 'None reported.'}</span>
          </div>
        </div>

        {/* Estimated Developmental Age Snapshot Matrix */}
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
            <Brain className="h-4 w-4 text-brand-600" />
            Developmental Age Snapshot (Surveillance Estimator)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-sky-200 bg-sky-50/40 p-3.5 dark:border-sky-900/60 dark:bg-sky-950/20">
              <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">Receptive Language Age</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-extrabold text-ink">
                  {snapshot.estimatedReceptiveAgeMonths}
                </span>
                <span className="text-xs font-medium text-ink-muted">months</span>
              </div>
              <p className="text-[11px] text-ink-muted mt-1">
                {snapshot.receptiveDelayFlag ? '⚠️ Mild Receptive Lag' : '✓ Age-Appropriate Understanding'}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-3.5 dark:border-emerald-900/60 dark:bg-emerald-950/20">
              <span className="text-xs font-semibold text-emerging-ink">Expressive Language Age</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-extrabold text-ink">
                  {snapshot.estimatedExpressiveAgeMonths}
                </span>
                <span className="text-xs font-medium text-emerging-ink">months</span>
              </div>
              <p className="text-[11px] text-emerging-ink mt-1">
                {snapshot.expressiveDelayFlag ? '⚠️ Expressive Delay Flagged' : '✓ Age-Appropriate Speaking'}
              </p>
            </div>

            <div className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-3.5 dark:border-indigo-900/60 dark:bg-indigo-950/20">
              <span className="text-xs font-semibold text-achieved-ink">Auditory Behavioral Age</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-extrabold text-ink">
                  {snapshot.estimatedAuditoryAgeMonths}
                </span>
                <span className="text-xs font-medium text-achieved-ink">months</span>
              </div>
              <p className="text-[11px] text-achieved-ink mt-1">
                {snapshot.auditoryDelayFlag ? '⚠️ Auditory Follow-up Advised' : '✓ Mature Sound Localization'}
              </p>
            </div>
          </div>
        </div>

        {/* Milestone Audit Table */}
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
            <Activity className="h-4 w-4 text-brand-600" />
            Milestone Evaluation Breakdown
          </h3>

          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                <tr>
                  <th className="p-2.5">Milestone / Skill</th>
                  <th className="p-2.5">Domain</th>
                  <th className="p-2.5">Age Band</th>
                  <th className="p-2.5">Status</th>
                  <th className="p-2.5">Clinical Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {ALL_MILESTONES.slice(0, 15).map((m) => {
                  const st = assessment.milestoneStatuses[m.id] || 'not_observed';
                  const note = assessment.milestoneNotes[m.id];
                  return (
                    <tr key={m.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-2.5 font-medium">{m.title[language] || m.title.en}</td>
                      <td className="p-2.5 text-slate-500 capitalize">{m.domain.replace('_', ' ')}</td>
                      <td className="p-2.5 text-slate-500">{m.ageBandMonths}m</td>
                      <td className="p-2.5">
                        <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${
                          st === 'observed' ? 'bg-emerald-100 text-emerald-800' :
                          st === 'reported' ? 'bg-sky-100 text-sky-800' :
                          st === 'emerging' ? 'bg-amber-100 text-amber-800' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {st.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-2.5 text-slate-600 dark:text-slate-400 italic">
                        {note || '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Clinical Red Flags & Observations */}
        {snapshot.activeRedFlags.length > 0 && (
          <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50/50 p-4 dark:border-rose-900/60 dark:bg-rose-950/20">
            <h4 className="text-xs font-bold text-rose-900 dark:text-rose-300 uppercase flex items-center gap-1.5 mb-2">
              <ShieldAlert className="h-4 w-4 text-rose-600" />
              Critical Developmental / Auditory Red Flags Noted
            </h4>
            <ul className="space-y-1 text-xs text-rose-800 dark:text-rose-200 list-disc list-inside">
              {snapshot.activeRedFlags.map((rf) => (
                <li key={rf.id}>
                  <span className="font-semibold">{rf.warningSign[language] || rf.warningSign.en}</span> ({rf.citation})
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Clinical Recommendations & Plan */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-2">
            Clinical Impressions & Recommendations
          </h4>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
            {assessment.overallClinicalNotes || 'Child demonstrates active communication engagement. Continued naturalistic stimulation in home languages is advised.'}
          </p>
          <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">
            Action Plan: <span className="font-normal">{assessment.recommendations || 'Follow-up developmental milestone review in 3–6 months.'}</span>
          </p>
        </div>

        {/* Disclaimer Footer */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-4 text-[10px] text-slate-400 leading-relaxed">
          <p className="font-semibold text-slate-500 dark:text-slate-400">DISCLAIMER:</p>
          <p>{t.app.disclaimer_long}</p>
        </div>

      </div>
    </div>
  );
}

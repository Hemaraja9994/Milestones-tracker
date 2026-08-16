'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Printer, 
  Save, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  UserCheck,
  Building,
  Eye,
  FileCheck2
} from 'lucide-react';
import { 
  ChildProfile, 
  HighRiskFactorItem, 
  HRRFactorResponse, 
  HighRiskAssessmentRecord, 
  InformationSource, 
  UserRole,
  RiskLevel 
} from '@/types';
import { HIGH_RISK_REGISTER_ITEMS, HRR_CATEGORIES } from '@/data/highRiskRegister';
import { evaluateHRRTriage, HRRTriageResult } from '@/lib/hrrTriageEngine';
import { useLanguage } from '@/context/LanguageContext';
import { useChild } from '@/context/ChildContext';
import { Card, Badge, Button, StatusDotBadge, ProgressRing } from '@/components/ui/Primitives';

interface HighRiskRegisterChecklistProps {
  child: ChildProfile;
  initialResponses?: Record<string, HRRFactorResponse>;
  onSave: (record: HighRiskAssessmentRecord) => void;
}

export default function HighRiskRegisterChecklist({
  child,
  initialResponses = {},
  onSave,
}: HighRiskRegisterChecklistProps) {
  const { language, t } = useLanguage();
  const { activeRole } = useChild();

  const [responses, setResponses] = useState<Record<string, HRRFactorResponse>>(() => {
    // Pre-populate known factors from child profile if empty
    const initial: Record<string, HRRFactorResponse> = { ...initialResponses };
    if (Object.keys(initial).length === 0) {
      if (child.gestationalWeeks && child.gestationalWeeks < 37) {
        initial['hrr_prematurity_vlbw'] = {
          present: true,
          source: 'medical_record',
          clinicalNotes: `Born at ${child.gestationalWeeks} gestational weeks`,
        };
      }
      if (child.riskFactors && child.riskFactors.some(rf => rf.toLowerCase().includes('nicu'))) {
        initial['hrr_nicu_stay'] = {
          present: true,
          source: 'medical_record',
          clinicalNotes: 'Documented NICU admission in medical notes',
        };
      }
    }
    return initial;
  });

  const [examinerNotes, setExaminerNotes] = useState<string>('');
  const [savedAlert, setSavedAlert] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    perinatal_neonatal: true,
    family_genetic: true,
    prenatal_maternal: true,
    physical_craniofacial: true,
    postnatal_ongoing: true,
    caregiver_concern: true,
  });

  // Calculate live triage result
  const triageResult: HRRTriageResult = evaluateHRRTriage(responses);

  const toggleFactor = (factorId: string, isPresent: boolean) => {
    const current = responses[factorId] || { present: false };
    const updated = {
      ...responses,
      [factorId]: {
        ...current,
        present: isPresent,
        source: current.source || 'parent_report',
      },
    };
    setResponses(updated);
  };

  const updateSource = (factorId: string, source: InformationSource) => {
    const current = responses[factorId] || { present: true };
    setResponses({
      ...responses,
      [factorId]: { ...current, source },
    });
  };

  const updateFactorNotes = (factorId: string, notes: string) => {
    const current = responses[factorId] || { present: true };
    setResponses({
      ...responses,
      [factorId]: { ...current, clinicalNotes: notes },
    });
  };

  const toggleCategory = (catId: string) => {
    setExpandedCategories({
      ...expandedCategories,
      [catId]: !expandedCategories[catId],
    });
  };

  const handleSave = () => {
    const record: HighRiskAssessmentRecord = {
      id: `hrr_${child.id}_${Date.now()}`,
      childId: child.id,
      assessmentDate: new Date().toISOString().split('T')[0],
      examinerName: activeRole === 'professional' ? 'Consultant SLP / Pediatric Evaluator' : 'Parent / Caregiver',
      examinerRole: activeRole === 'professional' ? 'Audiology / SLP Surveillance' : 'Parent Report',
      responses,
      overallRiskLevel: triageResult.riskLevel,
      triageSummaryText: triageResult.triageSummaryText,
      recommendedActions: triageResult.recommendedActions,
      recommendedTimeline: triageResult.recommendedTimeline,
      clinicalNotes: examinerNotes,
    };

    onSave(record);
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);
  };

  return (
    <div className="space-y-8">
      
      {/* Live Triage Summary Card */}
      <Card className={`border-2 transition-all p-6 shadow-elevated ${
        triageResult.riskLevel === 'high_risk'
          ? 'border-rose-300 bg-gradient-to-br from-rose-50/60 via-white to-rose-50/30 dark:border-rose-900/60 dark:from-slate-900 dark:via-rose-950/20 dark:to-slate-900'
          : triageResult.riskLevel === 'elevated_risk'
          ? 'border-amber-300 bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 dark:border-amber-900/60 dark:from-slate-900 dark:via-amber-950/20 dark:to-slate-900'
          : 'border-emerald-300 bg-gradient-to-br from-emerald-50/60 via-white to-emerald-50/30 dark:border-emerald-900/60 dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-900'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <StatusDotBadge 
                status={triageResult.riskLevel} 
                label={triageResult.triageBadgeLabel[language] || triageResult.triageBadgeLabel.en} 
                className="text-xs px-3 py-1 font-bold"
              />
              <span className="text-xs text-slate-500 dark:text-slate-400">
                JCIH & RBSK Risk Stratification
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {triageResult.riskLevel === 'high_risk' ? 'Prompt Audiology & SLP Referral Advised' :
               triageResult.riskLevel === 'elevated_risk' ? 'Active Surveillance & Milestone Monitoring' :
               'Routine Developmental Tracking'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              {triageResult.triageSummaryText[language] || triageResult.triageSummaryText.en}
            </p>

            {/* Timeline pill */}
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/80 dark:bg-slate-800/80 px-3 py-1.5 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <span className="text-brand-600 dark:text-brand-400">Timeline:</span>
              <span>{triageResult.recommendedTimeline[language] || triageResult.recommendedTimeline.en}</span>
            </div>
          </div>

          {/* Quick Metrics Ring & Actions */}
          <div className="flex flex-col items-center sm:items-end justify-center shrink-0 space-y-3">
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-2xl font-black text-slate-900 dark:text-white">
                  {triageResult.positiveFactorsCount}
                </span>
                <span className="text-xs text-slate-400 block">positive indicators</span>
              </div>
              <ProgressRing
                radius={36}
                stroke={6}
                progress={(triageResult.positiveFactorsCount / HIGH_RISK_REGISTER_ITEMS.length) * 100}
                strokeColor={triageResult.riskLevel === 'high_risk' ? '#e11d48' : triageResult.riskLevel === 'elevated_risk' ? '#d97706' : '#10b981'}
              >
                <ShieldAlert className={`h-5 w-5 ${
                  triageResult.riskLevel === 'high_risk' ? 'text-rose-600' :
                  triageResult.riskLevel === 'elevated_risk' ? 'text-amber-600' : 'text-emerald-600'
                }`} />
              </ProgressRing>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Save className="h-4 w-4" />
                <span>{savedAlert ? 'Saved ✓' : t.hrr.save_hrr}</span>
              </Button>
              <Link href={`/high-risk-register/${child.id}/report`}>
                <Button variant="primary" size="sm">
                  <Printer className="h-4 w-4" />
                  <span>{t.common.export_triage_pdf}</span>
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </Card>

      {/* Mode-Aware Notice Banner */}
      <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 dark:bg-slate-800/60 dark:border-slate-700 flex items-center justify-between text-xs">
        <span className="text-slate-600 dark:text-slate-300">
          Showing <span className="font-bold text-slate-900 dark:text-white">{activeRole === 'professional' ? 'Professional Clinician Fields (Source & Clinical Notes)' : 'Parent-Friendly Plain Language Questions'}</span>
        </span>
        <Badge variant={activeRole === 'professional' ? 'info' : 'success'}>
          {activeRole === 'professional' ? 'Clinician Mode' : 'Parent Mode'}
        </Badge>
      </div>

      {/* Checklist Sections by Category */}
      <div className="space-y-6">
        {HRR_CATEGORIES.map((cat) => {
          const isExpanded = expandedCategories[cat.id] ?? true;
          const itemsInCat = HIGH_RISK_REGISTER_ITEMS.filter(i => i.category === cat.id);
          const positiveInCat = itemsInCat.filter(i => responses[i.id]?.present).length;

          return (
            <Card key={cat.id} className="p-0 overflow-hidden border-slate-200 dark:border-slate-800">
              
              {/* Category Accordion Header */}
              <div 
                onClick={() => toggleCategory(cat.id)}
                className="flex items-center justify-between p-4 bg-slate-50/80 dark:bg-slate-800/80 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border-b border-slate-200/80 dark:border-slate-700/80"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {cat.label[language] || cat.label.en}
                    </h3>
                    {positiveInCat > 0 && (
                      <Badge variant="danger" className="text-[10px]">
                        {positiveInCat} Present
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {cat.description[language] || cat.description.en}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-xs font-semibold">{itemsInCat.length} factors</span>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </div>

              {/* Category Checklist Items */}
              {isExpanded && (
                <div className="p-4 space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
                  {itemsInCat.map((item) => {
                    const resp = responses[item.id] || { present: false, source: 'parent_report' };
                    const isPresent = resp.present;

                    return (
                      <div key={item.id} className="pt-4 first:pt-0 space-y-3">
                        
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                                {activeRole === 'professional'
                                  ? item.clinicalTitle[language] || item.clinicalTitle.en
                                  : item.plainQuestion[language] || item.plainQuestion.en}
                              </h4>
                              {item.weight === 'critical' && (
                                <Badge variant="danger" className="text-[9px]">
                                  Critical JCIH
                                </Badge>
                              )}
                            </div>

                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                              {item.explanationTooltip[language] || item.explanationTooltip.en}
                            </p>

                            <span className="text-[10px] text-slate-400 font-mono block">
                              Ref: {item.jcihRef} {item.rbskCategory ? `• ${item.rbskCategory}` : ''}
                            </span>
                          </div>

                          {/* Yes / No Toggle Buttons */}
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => toggleFactor(item.id, false)}
                              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                                !isPresent
                                  ? 'bg-slate-800 text-white dark:bg-slate-700'
                                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400'
                              }`}
                            >
                              No / Absent
                            </button>

                            <button
                              type="button"
                              onClick={() => toggleFactor(item.id, true)}
                              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                                isPresent
                                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20 scale-105'
                                  : 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-700 dark:bg-slate-800 dark:text-slate-400'
                              }`}
                            >
                              Yes / Present
                            </button>
                          </div>
                        </div>

                        {/* Professional Metadata Options (Source & Clinical Note) */}
                        {isPresent && activeRole === 'professional' && (
                          <div className="mt-2 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                            <div>
                              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                                {t.hrr.source_of_info}:
                              </label>
                              <select
                                value={resp.source || 'parent_report'}
                                onChange={(e) => updateSource(item.id, e.target.value as InformationSource)}
                                className="w-full rounded-lg border border-slate-200 bg-white p-1.5 text-xs dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                              >
                                <option value="parent_report">{t.hrr.sources.parent_report}</option>
                                <option value="medical_record">{t.hrr.sources.medical_record}</option>
                                <option value="clinical_observation">{t.hrr.sources.clinical_observation}</option>
                                <option value="screening_test">{t.hrr.sources.screening_test}</option>
                              </select>
                            </div>

                            <div className="sm:col-span-2">
                              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                                Clinical Notes / Hospital Records:
                              </label>
                              <input
                                type="text"
                                value={resp.clinicalNotes || ''}
                                onChange={(e) => updateFactorNotes(item.id, e.target.value)}
                                placeholder="E.g., NICU stay 12 days on CPAP, bilateral DPOAE refer..."
                                className="w-full rounded-lg border border-slate-200 bg-white p-1.5 text-xs dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                              />
                            </div>
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>
              )}

            </Card>
          );
        })}
      </div>

      {/* Recommended Action Plan List */}
      <Card className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileCheck2 className="h-4 w-4 text-brand-600" />
          {t.hrr.action_plan} ({triageResult.triageBadgeLabel[language] || triageResult.triageBadgeLabel.en})
        </h3>

        <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
          {(triageResult.recommendedActions[language] || triageResult.recommendedActions.en).map((action, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" />
              <span>{action}</span>
            </li>
          ))}
        </ul>

        {activeRole === 'professional' && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Overall Clinical Triage Impressions:
            </label>
            <textarea
              rows={2}
              value={examinerNotes}
              onChange={(e) => setExaminerNotes(e.target.value)}
              placeholder="Record overall risk impressions, audiologist referral contacts, or diagnostic appointment dates..."
              className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
        )}

        <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <Button variant="primary" size="sm" onClick={handleSave}>
            <Save className="h-4 w-4" />
            <span>{savedAlert ? 'Saved ✓' : t.hrr.save_hrr}</span>
          </Button>
        </div>
      </Card>

    </div>
  );
}

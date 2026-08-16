'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import {
  ChildProfile,
  HRRFactorResponse,
  HighRiskAssessmentRecord,
  InformationSource,
  HRRCategory,
} from '@/types';
import { HIGH_RISK_REGISTER_ITEMS, HRR_CATEGORIES } from '@/data/highRiskRegister';
import { evaluateHRRTriage, HRRTriageResult } from '@/lib/hrrTriageEngine';
import { useLanguage } from '@/context/LanguageContext';
import { useChild } from '@/context/ChildContext';
import { Badge, Button, Citation, NotePanel } from '@/components/ui/Primitives';

interface HighRiskRegisterChecklistProps {
  child: ChildProfile;
  initialResponses?: Record<string, HRRFactorResponse>;
  onSave: (record: HighRiskAssessmentRecord) => void;
}

const SOURCE_OPTIONS: InformationSource[] = [
  'medical_record',
  'parent_report',
  'clinical_observation',
  'screening_test',
];

export default function HighRiskRegisterChecklist({
  child,
  initialResponses = {},
  onSave,
}: HighRiskRegisterChecklistProps) {
  const { language, t } = useLanguage();
  const { activeRole } = useChild();

  const [responses, setResponses] = useState<Record<string, HRRFactorResponse>>(() => {
    // Pre-populate known factors from the child profile if empty
    const initial: Record<string, HRRFactorResponse> = { ...initialResponses };
    if (Object.keys(initial).length === 0) {
      if (child.gestationalWeeks && child.gestationalWeeks < 37) {
        initial['hrr_prematurity_vlbw'] = {
          present: true,
          source: 'medical_record',
          clinicalNotes: `Born at ${child.gestationalWeeks} gestational weeks`,
        };
      }
      if (child.riskFactors?.some((rf) => rf.toLowerCase().includes('nicu'))) {
        initial['hrr_nicu_stay'] = {
          present: true,
          source: 'medical_record',
          clinicalNotes: 'Documented NICU admission in medical notes',
        };
      }
    }
    return initial;
  });

  const [activeCategory, setActiveCategory] = useState<HRRCategory>(HRR_CATEGORIES[0].id);
  const [examinerNotes, setExaminerNotes] = useState('');
  const [savedAlert, setSavedAlert] = useState(false);

  const triageResult: HRRTriageResult = evaluateHRRTriage(responses);

  const toggleFactor = (factorId: string) => {
    const current = responses[factorId] || { present: false };
    setResponses({
      ...responses,
      [factorId]: {
        ...current,
        present: !current.present,
        source: current.source || 'parent_report',
      },
    });
  };

  const updateSource = (factorId: string, source: InformationSource) => {
    const current = responses[factorId] || { present: true };
    setResponses({ ...responses, [factorId]: { ...current, source } });
  };

  const updateFactorNotes = (factorId: string, notes: string) => {
    const current = responses[factorId] || { present: true };
    setResponses({ ...responses, [factorId]: { ...current, clinicalNotes: notes } });
  };

  const handleSave = () => {
    onSave({
      id: `hrr_${child.id}_${Date.now()}`,
      childId: child.id,
      assessmentDate: new Date().toISOString().split('T')[0],
      examinerName:
        activeRole === 'professional' ? 'Consultant SLP / Pediatric Evaluator' : 'Parent / Caregiver',
      examinerRole: activeRole === 'professional' ? 'Audiology / SLP Surveillance' : 'Parent Report',
      responses,
      overallRiskLevel: triageResult.riskLevel,
      triageSummaryText: triageResult.triageSummaryText,
      recommendedActions: triageResult.recommendedActions,
      recommendedTimeline: triageResult.recommendedTimeline,
      clinicalNotes: examinerNotes,
    });
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);
  };

  const category = HRR_CATEGORIES.find((c) => c.id === activeCategory) || HRR_CATEGORIES[0];
  const itemsInCategory = HIGH_RISK_REGISTER_ITEMS.filter((i) => i.category === activeCategory);

  const riskHeadline =
    triageResult.riskLevel === 'high_risk'
      ? t.hrr.high_risk
      : triageResult.riskLevel === 'elevated_risk'
      ? t.hrr.elevated_risk
      : t.hrr.no_elevated_risk;

  const riskToneClass =
    triageResult.riskLevel === 'high_risk'
      ? 'text-risk'
      : triageResult.riskLevel === 'elevated_risk'
      ? 'text-emerging'
      : 'text-achieved';

  const riskRuleClass =
    triageResult.riskLevel === 'high_risk'
      ? 'border-t-risk'
      : triageResult.riskLevel === 'elevated_risk'
      ? 'border-t-emerging'
      : 'border-t-achieved';

  /* On tablet the checklist becomes full width with the triage summary docked
     below it; on laptop it is a 1.5fr/1fr split with a sticky summary. */
  return (
    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
      {/* ================= Checklist ================= */}
      <div className="flex flex-col gap-4">
        <div className="scroll-rail">
          {HRR_CATEGORIES.map((cat) => {
            const selected = cat.id === activeCategory;
            const positives = HIGH_RISK_REGISTER_ITEMS.filter(
              (i) => i.category === cat.id && responses[i.id]?.present
            ).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={selected}
                className={`focus-ring inline-flex min-h-[42px] shrink-0 items-center gap-2 rounded-full px-4 text-[13px] transition-colors ${
                  selected
                    ? 'bg-ink font-semibold text-surface-raised'
                    : 'border border-line-warm bg-surface-raised font-medium text-ink-body hover:text-ink'
                }`}
              >
                {cat.label[language] || cat.label.en}
                {positives > 0 && (
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      selected ? 'bg-surface-raised/20' : 'bg-risk-tint text-risk-ink'
                    }`}
                  >
                    {positives}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <section className="overflow-hidden rounded-panel border border-line-warm bg-surface-raised">
          <header className="border-b border-line-rule px-6 py-5">
            <h3 className="font-display text-[20px] font-extrabold leading-[1.18] text-ink sm:text-[22px]">
              {category.label[language] || category.label.en}
            </h3>
            <p className="mt-2 text-[13px] leading-[1.6] text-ink-muted">
              {category.description[language] || category.description.en}
            </p>
          </header>

          {itemsInCategory.map((item) => {
            const resp = responses[item.id] || { present: false, source: 'parent_report' as const };
            const isPresent = !!resp.present;

            return (
              /* Selected rows tint their whole row, not just the box */
              <div
                key={item.id}
                className={`flex gap-4 border-b border-line-hair px-6 py-[22px] last:border-b-0 ${
                  isPresent ? 'bg-surface-tint' : ''
                }`}
              >
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={isPresent}
                  onClick={() => toggleFactor(item.id)}
                  aria-label={item.plainQuestion[language] || item.plainQuestion.en}
                  className={`focus-ring mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg transition-colors ${
                    isPresent
                      ? 'bg-risk text-white dark:text-ink-invert'
                      : 'border-[1.5px] border-line-strong bg-surface-canvas'
                  }`}
                >
                  {isPresent && <Check className="h-4 w-4" strokeWidth={3} />}
                </button>

                <div className="min-w-0 flex-1">
                  {/* Plain-language question first, clinical title second */}
                  <p className="text-[15px] font-semibold leading-[1.5] text-ink">
                    {item.plainQuestion[language] || item.plainQuestion.en}
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.6] text-ink-muted">
                    {item.clinicalTitle[language] || item.clinicalTitle.en}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant={item.weight === 'critical' ? 'danger' : 'warning'}>
                      {item.weight === 'critical' ? 'Critical' : 'Moderate'}
                    </Badge>
                    {item.jcihRef && <Citation>{item.jcihRef}</Citation>}
                    {item.rbskCategory && <Citation>{item.rbskCategory}</Citation>}
                  </div>

                  {isPresent && activeRole === 'professional' && (
                    <div className="mt-3.5 border-t border-dashed border-line-warm pt-3.5">
                      <div className="text-xs font-semibold text-ink-soft">
                        {t.hrr.source_of_info}
                      </div>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {SOURCE_OPTIONS.map((source) => {
                          const selected = (resp.source || 'parent_report') === source;
                          return (
                            <button
                              key={source}
                              type="button"
                              onClick={() => updateSource(item.id, source)}
                              aria-pressed={selected}
                              className={`focus-ring inline-flex min-h-[44px] items-center rounded-full px-3.5 text-[13px] transition-colors ${
                                selected
                                  ? 'bg-brand-tint font-semibold text-ink'
                                  : 'border border-line-warm font-medium text-ink-soft hover:text-ink'
                              }`}
                            >
                              {t.hrr.sources[source]}
                            </button>
                          );
                        })}
                      </div>

                      <input
                        type="text"
                        value={resp.clinicalNotes || ''}
                        onChange={(e) => updateFactorNotes(item.id, e.target.value)}
                        placeholder="E.g., NICU stay 12 days on CPAP, bilateral DPOAE refer..."
                        aria-label="Clinical notes / hospital records"
                        className="focus-ring mt-3 min-h-[44px] w-full rounded-[11px] border border-line-warm bg-surface-raised px-3.5 text-[13px] text-ink placeholder:text-ink-warm"
                      />
                    </div>
                  )}

                  {isPresent && activeRole !== 'professional' && (
                    <p className="mt-3 text-xs leading-[1.6] text-ink-muted">
                      {item.explanationTooltip[language] || item.explanationTooltip.en}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {activeRole === 'professional' && (
          <section className="rounded-card border border-line-warm bg-surface-raised p-5 sm:p-6">
            <label className="block">
              <span className="mb-2 block text-[13px] font-semibold text-ink-body">
                Overall Clinical Triage Impressions
              </span>
              <textarea
                rows={2}
                value={examinerNotes}
                onChange={(e) => setExaminerNotes(e.target.value)}
                placeholder="Record overall risk impressions, audiologist referral contacts, or diagnostic appointment dates..."
                className="focus-ring w-full rounded-xl border border-line-rule bg-surface-canvas p-3.5 text-[13px] leading-[1.6] text-ink placeholder:text-ink-warm"
              />
            </label>
            <div className="mt-4 flex justify-end">
              <Button variant="primary" size="md" onClick={handleSave}>
                {savedAlert ? 'Saved ✓' : t.hrr.save_hrr}
              </Button>
            </div>
          </section>
        )}
      </div>

      {/* ================= Triage summary ================= */}
      <div className="flex flex-col gap-4 lg:sticky lg:top-[88px] lg:self-start">
        <section
          className={`rounded-panel border border-line-warm border-t-4 bg-surface-raised p-6 ${riskRuleClass}`}
        >
          <div className="eyebrow tracking-[0.06em] text-ink-warm">{t.hrr.triage_summary}</div>

          <div className="mt-3.5 text-xs font-semibold text-ink-soft">{t.hrr.risk_level}</div>
          <h3
            className={`mt-2 font-display text-[22px] font-extrabold leading-[1.2] sm:text-[24px] ${riskToneClass}`}
          >
            {riskHeadline}
          </h3>

          {/* Three-segment stratification rule */}
          <div className="mt-4 flex gap-1.5" aria-hidden="true">
            <span className="h-1.5 flex-1 rounded-full bg-achieved" />
            <span
              className={`h-1.5 flex-1 rounded-full ${
                triageResult.riskLevel === 'no_elevated_risk' ? 'bg-line-rule' : 'bg-emerging'
              }`}
            />
            <span
              className={`h-1.5 flex-1 rounded-full ${
                triageResult.riskLevel === 'high_risk' ? 'bg-risk' : 'bg-line-rule'
              }`}
            />
          </div>

          <div className="mt-[22px] eyebrow tracking-[0.05em] text-ink-warm">
            {t.hrr.positive_factors}
          </div>
          {triageResult.positiveItems.length > 0 ? (
            <ul className="mt-2.5 list-disc pl-[18px] text-[13px] leading-[1.6] text-ink-body">
              {triageResult.positiveItems.map((item) => (
                <li key={item.id}>{item.clinicalTitle[language] || item.clinicalTitle.en}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2.5 text-[13px] leading-[1.6] text-ink-muted">
              {t.hrr.no_positive_factors}
            </p>
          )}

          <div className="mt-5 eyebrow tracking-[0.05em] text-ink-warm">{t.hrr.timeline}</div>
          <p className="mt-2.5 text-[13px] leading-[1.6] text-ink-body">
            {triageResult.recommendedTimeline[language] || triageResult.recommendedTimeline.en}
          </p>

          <div className="mt-5 eyebrow tracking-[0.05em] text-ink-warm">{t.hrr.action_plan}</div>
          <ul className="mt-2.5 list-disc pl-[18px] text-[13px] leading-[1.6] text-ink-body">
            {(triageResult.recommendedActions[language] || triageResult.recommendedActions.en).map(
              (action, idx) => (
                <li key={idx}>{action}</li>
              )
            )}
          </ul>

          <Link
            href={`/high-risk-register/${child.id}/report`}
            className="focus-ring mt-5 flex min-h-[50px] items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-surface-raised"
          >
            {t.hrr.view_report}
          </Link>

          {activeRole !== 'professional' && (
            <Button variant="outline" size="md" className="mt-2.5 w-full" onClick={handleSave}>
              {savedAlert ? 'Saved ✓' : t.hrr.save_hrr}
            </Button>
          )}
        </section>

        <NotePanel tone="emerging" className="text-xs">
          {t.hrr.disclaimer}
        </NotePanel>
      </div>
    </div>
  );
}

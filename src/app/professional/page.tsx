'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, ShieldAlert, ArrowRight } from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { computeClinicalSnapshot } from '@/lib/calculationEngine';
import { isSampleChild } from '@/lib/storage';
import { ChildProfile, AssessmentRecord } from '@/types';
import ChildProfileForm from '@/components/parent/ChildProfileForm';
import DeviceDataPanel from '@/components/layout/DeviceDataPanel';
import { Badge, Button, GaugeRow, Stat } from '@/components/ui/Primitives';

export default function ProfessionalDashboard() {
  const { childrenList, createOrUpdateChild, setActiveChild, activeChild, assessments, saveCurrentAssessment } =
    useChild();
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const filteredChildren = childrenList.filter(
    (child) =>
      child.nameOrInitials.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.primaryLanguages?.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const focusChild = activeChild || childrenList[0] || null;
  const focusAssessment = focusChild
    ? assessments.find((a) => a.childId === focusChild.id) || null
    : null;

  const focusAges = useMemo(
    () =>
      focusChild ? calculateChildAges(focusChild.dateOfBirth, focusChild.gestationalWeeks) : null,
    [focusChild]
  );

  const snapshot = useMemo(
    () =>
      focusAges
        ? computeClinicalSnapshot(
            focusAges.effectiveAgeMonths,
            focusAssessment?.milestoneStatuses || {},
            focusChild || undefined
          )
        : null,
    [focusAges, focusAssessment, focusChild]
  );

  const gaugeCeiling = snapshot && focusAges
    ? Math.max(
        focusAges.effectiveAgeMonths,
        snapshot.estimatedReceptiveAgeMonths,
        snapshot.estimatedExpressiveAgeMonths,
        snapshot.estimatedAuditoryAgeMonths,
        12
      ) * 1.15
    : 1;

  const handleCreateChild = (newChild: ChildProfile) => {
    createOrUpdateChild(newChild);
    setActiveChild(newChild);
    setShowModal(false);
  };

  const handleSummaryChange = (value: string) => {
    if (!focusChild) return;
    const base: AssessmentRecord = focusAssessment || {
      id: `sess_${focusChild.id}_${Date.now()}`,
      childId: focusChild.id,
      sessionDate: new Date().toISOString().split('T')[0],
      sessionNumber: 1,
      examinerName: 'Consultant SLP / Pediatric Evaluator',
      examinerRole: 'Speech-Language Pathologist',
      milestoneStatuses: {},
      milestoneNotes: {},
    };
    saveCurrentAssessment({ ...base, overallClinicalNotes: value });
  };

  return (
    <div className="bg-surface-canvas">
      {/* ================= Portal header ================= */}
      <div className="border-b border-line-rule bg-surface-raised">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-between gap-6 px-[18px] pb-7 pt-8 sm:px-6 lg:px-9">
          <div>
            <div className="eyebrow tracking-[0.1em] text-brand-600 dark:text-brand-400">
              {t.nav.professional_portal}
            </div>
            <h1 className="mt-2.5 font-display text-[30px] font-extrabold leading-[1.1] text-ink sm:text-[38px]">
              {t.professional.dashboard_title}
            </h1>
          </div>

          <Button variant="primary" size="md" onClick={() => setShowModal(true)}>
            {t.professional.new_patient}
          </Button>
        </div>
      </div>

      {/* ================= Stat strip ================= */}
      <div className="border-b border-line-warm bg-line-warm">
        <div className="mx-auto grid max-w-[1240px] gap-px sm:grid-cols-3">
          <Stat label={t.professional.total_patients} value={childrenList.length} />
          <Stat label={t.professional.sessions_logged} value={assessments.length} />
          <Stat
            label={t.professional.last_session}
            value={assessments.length > 0 ? assessments[0].sessionDate : '—'}
            suffix={assessments.length > 0 ? undefined : 'No sessions recorded'}
          />
        </div>
      </div>

      {/* ================= Workspace ================= */}
      <div className="mx-auto grid max-w-[1240px] gap-6 px-[18px] py-7 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:px-9 lg:py-9">
        {/* -------- Session history -------- */}
        <section className="overflow-hidden rounded-card border border-line-warm bg-surface-raised">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line-rule px-5 py-4 sm:px-6">
            <h2 className="font-sans text-sm font-semibold text-ink">{t.professional.history}</h2>
            <label className="relative">
              <span className="sr-only">{t.common.search}</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input
                type="text"
                placeholder={t.common.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="focus-ring min-h-[40px] w-56 rounded-xl border border-line-warm bg-surface-raised pl-9 pr-3 text-[13px] text-ink placeholder:text-ink-muted"
              />
            </label>
          </div>

          {filteredChildren.length === 0 ? (
            <p className="px-6 py-12 text-center text-[13px] text-ink-muted">
              {childrenList.length === 0
                ? 'No child profiles yet. Create one to begin developmental surveillance.'
                : 'No child profile matches this search.'}
            </p>
          ) : (
            <ul>
              {filteredChildren.map((child) => {
                const ages = calculateChildAges(child.dateOfBirth, child.gestationalWeeks);
                const sessions = assessments.filter((a) => a.childId === child.id);
                const meta = [
                  ages.isPremature
                    ? `Corrected Age ${ages.effectiveAgeMonths} mo · ${child.gestationalWeeks} Gestational Weeks`
                    : `${ages.chronologicalText[language] || ages.chronologicalText.en}`,
                  `Home Languages: ${child.primaryLanguages?.join(', ') || 'English'}`,
                  `Newborn Hearing Screening: ${
                    child.hearingScreeningStatus
                      ? child.hearingScreeningStatus.charAt(0).toUpperCase() +
                        child.hearingScreeningStatus.slice(1)
                      : 'Unknown'
                  }`,
                  `${sessions.length} sessions logged`,
                ].join(' · ');

                return (
                  <li
                    key={child.id}
                    className="flex flex-wrap items-center justify-between gap-4 border-b border-line-hair px-5 py-4 last:border-b-0 sm:px-6"
                  >
                    <div className="min-w-[16ch] flex-1">
                      <div className="font-sans text-[15px] font-semibold text-ink">
                        {child.nameOrInitials} — {ages.chronologicalText[language] || ages.chronologicalText.en}
                      </div>
                      <div className="mt-1.5 text-xs leading-[1.6] text-ink-muted">{meta}</div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      {isSampleChild(child.id) && <Badge variant="default">Sample</Badge>}
                      {child.hearingScreeningStatus === 'referred' && (
                        <Badge variant="danger">{t.common.red_flag}</Badge>
                      )}
                      {ages.isPremature && <Badge variant="warning">Preterm ({child.gestationalWeeks}w)</Badge>}
                      <Link
                        href={`/professional/${child.id}`}
                        onClick={() => setActiveChild(child)}
                        className="focus-ring inline-flex min-h-[40px] items-center rounded-full border border-line-warm px-3.5 text-[13px] font-semibold text-brand-600 transition-colors hover:bg-surface-canvas dark:text-brand-400"
                      >
                        {t.professional.view_profile}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {/* -------- Snapshot + summary -------- */}
        <div className="flex flex-col gap-4">
          <section className="rounded-card border border-line-warm bg-surface-raised p-5 sm:p-6">
            <h2 className="font-sans text-sm font-semibold text-ink">
              {t.professional.estimated_ages}
            </h2>

            {snapshot && focusAges && focusChild ? (
              <>
                <p className="mt-1.5 text-xs text-ink-muted">
                  {focusChild.nameOrInitials} · target {focusAges.effectiveAgeMonths} mo
                  {focusAges.isPremature ? ' (corrected)' : ''}
                </p>
                <div className="mt-5 flex flex-col gap-[18px]">
                  <GaugeRow
                    label={t.professional.receptive_age}
                    valueLabel={`${snapshot.estimatedReceptiveAgeMonths} mo`}
                    value={snapshot.estimatedReceptiveAgeMonths}
                    max={gaugeCeiling}
                    colorClass="bg-brand-600 dark:bg-brand-400"
                  />
                  <GaugeRow
                    label={t.professional.expressive_age}
                    valueLabel={`${snapshot.estimatedExpressiveAgeMonths} mo`}
                    value={snapshot.estimatedExpressiveAgeMonths}
                    max={gaugeCeiling}
                    colorClass="bg-emerging"
                  />
                  <GaugeRow
                    label={t.professional.auditory_age}
                    valueLabel={`${snapshot.estimatedAuditoryAgeMonths} mo`}
                    value={snapshot.estimatedAuditoryAgeMonths}
                    max={gaugeCeiling}
                    colorClass="bg-achieved"
                  />
                </div>
              </>
            ) : (
              <p className="mt-4 text-[13px] leading-[1.6] text-ink-muted">
                Create a child profile to see estimated receptive, expressive and auditory ages.
              </p>
            )}
          </section>

          <section className="rounded-card border border-line-warm bg-surface-raised p-5 sm:p-6">
            <h2 className="font-sans text-sm font-semibold text-ink">
              {t.professional.session_summary}
            </h2>
            <textarea
              rows={3}
              disabled={!focusChild}
              value={focusAssessment?.overallClinicalNotes || ''}
              onChange={(e) => handleSummaryChange(e.target.value)}
              placeholder={t.professional.clinical_notes_placeholder}
              className="focus-ring mt-3.5 w-full rounded-xl border border-line-rule bg-surface-canvas p-3.5 text-[13px] leading-[1.6] text-ink placeholder:text-ink-warm disabled:opacity-60"
            />
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Link
                href={focusChild ? `/professional/${focusChild.id}/report` : '/professional'}
                aria-disabled={!focusChild}
                className={`focus-ring inline-flex min-h-[46px] items-center rounded-full bg-ink px-[18px] text-[13px] font-semibold text-surface-raised ${
                  focusChild ? '' : 'pointer-events-none opacity-50'
                }`}
              >
                {t.common.export_pdf}
              </Link>
              <Link
                href={focusChild ? `/professional/${focusChild.id}/report` : '/professional'}
                aria-disabled={!focusChild}
                className={`focus-ring inline-flex min-h-[46px] items-center rounded-full border border-line-warm px-[18px] text-[13px] font-semibold text-ink-body ${
                  focusChild ? '' : 'pointer-events-none opacity-50'
                }`}
              >
                {t.common.print}
              </Link>
            </div>
          </section>

          <DeviceDataPanel />

          {/* HRR moved out of the top bar — reached from the portal it belongs to. */}
          <Link
            href="/high-risk-register"
            className="focus-ring flex items-center justify-between gap-4 rounded-card border border-line-warm border-t-4 border-t-risk bg-surface-raised p-5 transition-colors hover:bg-surface-tint sm:p-6"
          >
            <span className="flex items-start gap-3.5">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-risk" strokeWidth={1.8} />
              <span>
                <span className="block font-sans text-sm font-semibold text-ink">{t.hrr.title}</span>
                <span className="mt-1.5 block text-xs leading-[1.6] text-ink-muted">
                  {t.hrr.subtitle}
                </span>
              </span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={2.2} />
          </Link>
        </div>
      </div>

      {/* ================= New child modal ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-panel border border-line-warm bg-surface-raised p-6 shadow-elevated">
            <div className="mb-5 flex items-center justify-between border-b border-line-rule pb-4">
              <h2 className="font-display text-[22px] font-extrabold text-ink">
                {t.professional.new_patient}
              </h2>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                aria-label={t.common.close}
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-ink-muted hover:text-ink"
              >
                ✕
              </button>
            </div>

            <ChildProfileForm
              variant="clinical"
              onSubmit={handleCreateChild}
              onCancel={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const inputClass =
  'focus-ring w-full rounded-xl border border-line-warm bg-surface-raised p-2.5 text-[13px] text-ink placeholder:text-ink-warm';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-semibold text-ink-body">{label}</span>
      {children}
    </label>
  );
}

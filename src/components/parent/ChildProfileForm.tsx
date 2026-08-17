'use client';

import React, { useState } from 'react';
import { ChildProfile } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Primitives';

/**
 * One child-profile form, shared by the Professional Portal modal and the
 * parent-side "Add my child" flow, so a parent never has to detour through the
 * clinician portal to enter their own child.
 *
 * `variant="parent"` shows only what a caregiver can answer without a hospital
 * record — name and date of birth — and tucks the clinical fields behind an
 * optional disclosure. `variant="clinical"` shows everything up front.
 */
export default function ChildProfileForm({
  variant = 'clinical',
  submitLabel,
  onSubmit,
  onCancel,
}: {
  variant?: 'parent' | 'clinical';
  submitLabel?: string;
  onSubmit: (child: ChildProfile) => void;
  onCancel?: () => void;
}) {
  const { t } = useLanguage();
  const parentMode = variant === 'parent';

  const [nameOrInitials, setNameOrInitials] = useState('');
  const [dob, setDob] = useState('');
  const [gestationalWeeks, setGestationalWeeks] = useState(40);
  const [languagesStr, setLanguagesStr] = useState('');
  const [medicalNotes, setMedicalNotes] = useState('');
  const [hearingStatus, setHearingStatus] = useState<'passed' | 'referred' | 'pending' | 'unknown'>(
    parentMode ? 'unknown' : 'passed'
  );
  const [showMore, setShowMore] = useState(!parentMode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameOrInitials.trim() || !dob) return;

    const weeks = Number(gestationalWeeks) || 40;
    onSubmit({
      id: `child_${Date.now()}`,
      nameOrInitials: nameOrInitials.trim(),
      dateOfBirth: dob,
      gestationalWeeks: weeks,
      primaryLanguages: languagesStr.split(',').map((s) => s.trim()).filter(Boolean),
      medicalNotes,
      hearingScreeningStatus: hearingStatus,
      riskFactors: weeks < 37 ? [`Prematurity (${weeks} wks)`] : [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  const field = parentMode
    ? 'focus-ring min-h-[52px] w-full rounded-xl border border-line-warm bg-surface-raised px-4 text-[15px] text-ink placeholder:text-ink-warm'
    : 'focus-ring min-h-[46px] w-full rounded-xl border border-line-warm bg-surface-raised px-3.5 text-[13px] text-ink placeholder:text-ink-warm';

  const label = parentMode
    ? 'mb-2 block text-[13px] font-semibold text-ink-body'
    : 'mb-1.5 block text-[13px] font-semibold text-ink-body';

  return (
    <form onSubmit={handleSubmit} className={parentMode ? 'space-y-5' : 'space-y-4'}>
      <label className="block">
        <span className={label}>
          {parentMode ? "Your child's name or initials" : `${t.common.child_name} *`}
        </span>
        <input
          type="text"
          required
          autoFocus
          placeholder={parentMode ? 'e.g. Aarav, or A.K.' : 'e.g. Aarav K. or Patient #1042'}
          value={nameOrInitials}
          onChange={(e) => setNameOrInitials(e.target.value)}
          className={field}
        />
      </label>

      <label className="block">
        <span className={label}>{parentMode ? 'Date of birth' : `${t.common.dob} *`}</span>
        <input
          type="date"
          required
          max={new Date().toISOString().split('T')[0]}
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className={field}
        />
        {parentMode && (
          <span className="mt-2 block text-xs leading-[1.6] text-ink-muted">
            We use this to show the right milestones for your child&apos;s age. Nothing leaves your
            phone — it is saved on this device only.
          </span>
        )}
      </label>

      {parentMode && !showMore && (
        <button
          type="button"
          onClick={() => setShowMore(true)}
          className="focus-ring text-[13px] font-semibold text-brand-600 underline dark:text-brand-400"
        >
          Add birth and hearing details (optional)
        </button>
      )}

      {showMore && (
        <div className={parentMode ? 'space-y-5 border-t border-line-rule pt-5' : 'space-y-4'}>
          <div className={parentMode ? 'space-y-5' : 'grid gap-3 sm:grid-cols-2'}>
            <label className="block">
              <span className={label}>
                {parentMode
                  ? 'Weeks of pregnancy at birth (if born early)'
                  : `${t.common.gestational_age} (Weeks)`}
              </span>
              <input
                type="number"
                min="24"
                max="42"
                value={gestationalWeeks}
                onChange={(e) => setGestationalWeeks(Number(e.target.value))}
                className={field}
              />
              {parentMode && (
                <span className="mt-2 block text-xs leading-[1.6] text-ink-muted">
                  Leave at 40 for a full-term birth. If your baby came early we adjust the
                  milestone ages for you.
                </span>
              )}
            </label>

            <label className="block">
              <span className={label}>
                {parentMode ? 'Languages spoken at home' : `${t.common.primary_languages} (comma-separated)`}
              </span>
              <input
                type="text"
                placeholder="e.g. Kannada, English, Hindi"
                value={languagesStr}
                onChange={(e) => setLanguagesStr(e.target.value)}
                className={field}
              />
            </label>
          </div>

          <label className="block">
            <span className={label}>
              {parentMode ? 'Newborn hearing screening result' : t.common.hearing_status}
            </span>
            <select
              value={hearingStatus}
              onChange={(e: any) => setHearingStatus(e.target.value)}
              className={field}
            >
              <option value="passed">Passed (OAE / ABR normal)</option>
              <option value="referred">Referred / Follow-up Needed</option>
              <option value="pending">Pending</option>
              <option value="unknown">Unknown</option>
            </select>
          </label>

          {!parentMode && (
            <label className="block">
              <span className={label}>Medical / Developmental History Notes</span>
              <textarea
                rows={2}
                placeholder="e.g. NICU history, family history of speech delay, otitis media history..."
                value={medicalNotes}
                onChange={(e) => setMedicalNotes(e.target.value)}
                className={`${field} py-2.5`}
              />
            </label>
          )}
        </div>
      )}

      <div
        className={
          parentMode
            ? 'flex flex-col-reverse gap-2.5 pt-1 sm:flex-row sm:justify-end'
            : 'flex justify-end gap-2.5 border-t border-line-rule pt-4'
        }
      >
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            size={parentMode ? 'lg' : 'sm'}
            onClick={onCancel}
            className={parentMode ? 'w-full sm:w-auto' : undefined}
          >
            {t.common.cancel}
          </Button>
        )}
        <Button
          type="submit"
          variant={parentMode ? 'parent' : 'primary'}
          size={parentMode ? 'lg' : 'sm'}
          className={parentMode ? 'w-full sm:w-auto' : undefined}
        >
          {submitLabel || t.common.save}
        </Button>
      </div>
    </form>
  );
}

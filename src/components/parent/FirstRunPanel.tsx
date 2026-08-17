'use client';

import React from 'react';
import { ChildProfile } from '@/types';
import ChildProfileForm from '@/components/parent/ChildProfileForm';

/**
 * Shown on the parent side until the caregiver has added a child of their own.
 *
 * The app seeds sample profiles so the Professional Portal has something to
 * demonstrate; without this screen a parent lands on "Tracking Aarav K." and
 * reasonably assumes the app already knows their child.
 */
export default function FirstRunPanel({
  onCreate,
  sampleCount,
  onBrowseSample,
}: {
  onCreate: (child: ChildProfile) => void;
  sampleCount: number;
  onBrowseSample?: () => void;
}) {
  return (
    <section className="mx-auto w-full max-w-[560px] rounded-panel border border-line-warm border-t-4 border-t-parent-600 bg-surface-raised p-6 shadow-elevated sm:p-8">
      <div className="eyebrow tracking-[0.1em] text-parent-600">Let&apos;s begin</div>
      <h2 className="mt-2.5 font-display text-[26px] font-extrabold leading-[1.14] text-ink sm:text-[30px]">
        Whose milestones are you tracking?
      </h2>
      <p className="mt-3 text-sm leading-[1.6] text-ink-soft">
        Two details is all it takes. We&apos;ll open the checklist at the right age for them.
      </p>

      <div className="mt-6">
        <ChildProfileForm
          variant="parent"
          submitLabel="Start tracking"
          onSubmit={onCreate}
        />
      </div>

      {sampleCount > 0 && onBrowseSample && (
        <div className="mt-6 border-t border-line-rule pt-5">
          <p className="text-xs leading-[1.6] text-ink-muted">
            Just looking around? This app ships with {sampleCount} sample{' '}
            {sampleCount === 1 ? 'profile' : 'profiles'} so you can see how it works. Nothing you
            tick on a sample is your child&apos;s record.
          </p>
          <button
            type="button"
            onClick={onBrowseSample}
            className="focus-ring mt-2.5 text-[13px] font-semibold text-brand-600 underline dark:text-brand-400"
          >
            Browse a sample profile instead
          </button>
        </div>
      )}
    </section>
  );
}

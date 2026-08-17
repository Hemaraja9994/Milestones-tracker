'use client';

import React, { useState } from 'react';
import { useChild } from '@/context/ChildContext';
import { isSampleChild } from '@/lib/storage';
import { Button, NotePanel } from '@/components/ui/Primitives';

/**
 * What this device is holding, and how to erase it.
 *
 * Child names, dates of birth, medical notes and session records live in this
 * browser's localStorage and nowhere else — there is no account and no server
 * copy. That makes the data private to the device, but *not* private on a
 * shared device, which is why erasing has to be one obvious tap.
 */
export default function DeviceDataPanel({ className }: { className?: string }) {
  const { childrenList, assessments, removeSamples, loadSamples, clearAllData } = useChild();
  const [confirming, setConfirming] = useState(false);

  const sampleCount = childrenList.filter((c) => isSampleChild(c.id)).length;
  const ownCount = childrenList.length - sampleCount;

  return (
    <section
      className={`rounded-card border border-line-warm bg-surface-raised p-5 sm:p-6 ${className ?? ''}`}
    >
      <h2 className="font-sans text-sm font-semibold text-ink">Data on this device</h2>
      <p className="mt-2 max-w-[70ch] text-[13px] leading-[1.6] text-ink-muted">
        Everything you enter — names, dates of birth, notes and recorded sessions — is stored in
        this browser only. There is no account and no server copy, so nothing is uploaded and
        nothing syncs to another device. On a shared or clinic device, erase it when you finish.
      </p>

      <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[13px]">
        <div>
          <dt className="text-ink-muted">Child profiles</dt>
          <dd className="font-display text-[20px] font-extrabold tabular-nums text-ink">
            {ownCount}
          </dd>
        </div>
        <div>
          <dt className="text-ink-muted">Recorded sessions</dt>
          <dd className="font-display text-[20px] font-extrabold tabular-nums text-ink">
            {assessments.filter((a) => !isSampleChild(a.childId)).length}
          </dd>
        </div>
        {sampleCount > 0 && (
          <div>
            <dt className="text-ink-muted">Sample profiles</dt>
            <dd className="font-display text-[20px] font-extrabold tabular-nums text-ink-muted">
              {sampleCount}
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {sampleCount > 0 ? (
          <Button variant="outline" size="md" onClick={removeSamples}>
            Remove {sampleCount} sample profile{sampleCount === 1 ? '' : 's'}
          </Button>
        ) : (
          <Button variant="outline" size="md" onClick={loadSamples}>
            Load sample profiles
          </Button>
        )}

        {childrenList.length > 0 && !confirming && (
          <Button variant="danger" size="md" onClick={() => setConfirming(true)}>
            Erase all data
          </Button>
        )}
      </div>

      {confirming && (
        <NotePanel tone="emerging" className="mt-4">
          <p className="font-semibold">
            Erase every profile and session from this device?
          </p>
          <p className="mt-1.5">
            This cannot be undone — there is no server copy to restore from. Export any report you
            need first.
          </p>
          <div className="mt-3.5 flex flex-wrap gap-2.5">
            <Button
              variant="danger"
              size="md"
              onClick={() => {
                clearAllData();
                setConfirming(false);
              }}
            >
              Yes, erase everything
            </Button>
            <Button variant="outline" size="md" onClick={() => setConfirming(false)}>
              Cancel
            </Button>
          </div>
        </NotePanel>
      )}
    </section>
  );
}

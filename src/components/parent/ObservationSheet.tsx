'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Lock } from 'lucide-react';

/**
 * Bottom sheet for recording what a caregiver actually saw.
 *
 * Saving an observation never writes a status — a milestone with observations
 * and no status still reads "Not yet seen". The form says so, because the
 * whole point is that the status field stays clean.
 *
 * One-thumb layout: the field, the privacy line and both buttons sit in the
 * lower portion of a 390x844 screen, with Save last above the keyboard.
 */
export default function ObservationSheet({
  milestoneTitle,
  onSave,
  onClose,
}: {
  milestoneTitle: string;
  onSave: (text: string) => void;
  onClose: () => void;
}) {
  const [text, setText] = useState('');
  const fieldRef = useRef<HTMLTextAreaElement>(null);
  const canSave = text.trim().length > 0;

  useEffect(() => {
    fieldRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Add observation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-h-[92vh] w-full max-w-[520px] overflow-y-auto rounded-t-panel border-2 border-ink bg-canvas p-5 sm:rounded-panel sm:p-6">
        {/* grab handle */}
        <div aria-hidden className="mx-auto mb-4 h-1 w-10 rounded-full bg-line sm:hidden" />

        <h2 className="font-display text-[21px] font-bold leading-[1.16] tracking-[-0.03em] text-ink">
          Add observation
        </h2>
        <p className="mt-1.5 text-[13px] leading-[1.55] text-muted">{milestoneTitle}</p>

        <label className="mt-4 block">
          <span className="sr-only">What did you see?</span>
          <textarea
            ref={fieldRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What did you see? For example: said &ldquo;appa&rdquo; twice at dinner."
            className="focus-ring min-h-[120px] w-full rounded-card border-2 border-line bg-canvas p-3.5 text-[15px] leading-[1.6] text-ink placeholder:text-muted-nav"
          />
        </label>

        <p className="mt-3 text-[12px] leading-[1.55] text-muted">
          An observation records what you saw. It does not change the status above.
        </p>

        {/* Free text may carry sensitive detail — this line is not optional. */}
        <div className="mt-3 flex gap-2.5 rounded-card bg-page p-3 text-[12px] leading-[1.55] text-body">
          <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.9} aria-hidden />
          <span>
            Saved in this browser, on this device only. Clearing your browser data deletes these
            notes.
          </span>
        </div>

        <div className="mt-5 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="focus-ring sig-press min-h-[52px] rounded-control border-2 border-line px-5 text-[15px] font-semibold text-body"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!canSave}
            onClick={() => onSave(text.trim())}
            className="focus-ring sig-press min-h-[52px] rounded-control bg-parent px-6 text-[15px] font-bold text-ink disabled:opacity-45"
          >
            Save observation
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * One pill toast after saving, with Undo. Replaced rather than stacked.
 * Marking a milestone gets no toast — the row, ring and strip are the receipt.
 */
export function ObservationToast({
  onUndo,
  onDone,
}: {
  onUndo: () => void;
  onDone: () => void;
}) {
  useEffect(() => {
    const t = setTimeout(onDone, 3400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      role="status"
      className="animate-sig-toast fixed inset-x-0 bottom-[92px] z-50 mx-auto flex w-fit items-center gap-3 rounded-full border-2 border-achieved bg-achieved-tint px-4 py-2.5 md:bottom-8"
    >
      <span className="text-[14px] font-semibold leading-[1.45] text-achieved-ink">
        Observation saved
      </span>
      <button
        type="button"
        onClick={onUndo}
        className="focus-ring rounded-chip text-[14px] font-bold text-achieved-ink underline"
      >
        Undo
      </button>
    </div>
  );
}

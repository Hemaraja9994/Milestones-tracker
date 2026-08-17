import React from 'react';

/**
 * Mark B — ascending path meeting concentric speech arcs.
 *
 * The arcs carry the speech-language meaning that a bare path does not, and the
 * mark survives monochrome printing on clinical reports. Strokes use
 * currentColor-independent token colours so the mark stays legible on the warm
 * canvas in light mode and on #0E1918 in dark mode.
 */
export default function BrandMark({
  size = 28,
  className,
  title,
  onInk = false,
}: {
  size?: number;
  className?: string;
  title?: string;
  /** Sitting on the ink top bar, where the normal teal is too dark to read. */
  onInk?: boolean;
}) {
  const strokeWidth = size <= 20 ? 4.2 : 3.6;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M5 30h6v-8h6v-8h6"
        className={onInk ? 'stroke-canvas' : 'stroke-clinician'}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 9a13 13 0 0 1 0 22"
        className={onInk ? 'stroke-clinician-dim' : 'stroke-clinician-ink'}
        strokeWidth={strokeWidth - 0.4}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M27 16a7 7 0 0 1 0 8"
        className="stroke-parent"
        strokeWidth={strokeWidth - 0.4}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Wordmark lockup used in the header, footer and report letterheads. */
export function BrandLockup({
  size = 28,
  textClassName = 'text-[21px]',
  className,
}: {
  size?: number;
  textClassName?: string;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <BrandMark size={size} />
      <span
        className={`font-display font-extrabold tracking-[-0.01em] text-ink ${textClassName}`}
      >
        MilestonePath
      </span>
    </span>
  );
}

import React from 'react';

/**
 * Original line-drawing illustrations, one per developmental domain.
 *
 * Drawn here rather than sourced, so nothing is lifted from CDC's app or any
 * third-party infographic. Every stroke uses `currentColor` and a single
 * stroke-width, so a drawing inherits the pathway colour it sits in, stays
 * legible at 40px, and survives monochrome printing on a clinical report.
 *
 * The vocabulary is deliberately restrained — a caregiver, a child, a sound, a
 * hand, an object — no faces, no mascot.
 */

export type MilestoneArtName =
  | 'auditory_hearing'
  | 'language_receptive'
  | 'language_expressive'
  | 'speech_articulation'
  | 'social_pragmatic'
  | 'cognitive';

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** Listening: an ear with sound arriving from the side. */
function AuditoryArt() {
  return (
    <>
      <path {...STROKE} d="M17 30v-8a9 9 0 1 1 18 0c0 4.5-3 5.7-3 9.7a4.5 4.5 0 0 1-9 0" />
      <path {...STROKE} d="M22.5 22.5a4 4 0 0 1 8 0" />
      <path {...STROKE} d="M42 17a13 13 0 0 1 0 18" opacity={0.75} />
      <path {...STROKE} d="M38 22a6.5 6.5 0 0 1 0 8" opacity={0.55} />
    </>
  );
}

/** Understanding: a child turning to a spoken instruction. */
function ReceptiveArt() {
  return (
    <>
      <circle {...STROKE} cx={20} cy={17} r={5.5} />
      <path {...STROKE} d="M11 39v-4a9 9 0 0 1 18 0v4" />
      <path {...STROKE} d="M33 14h13a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 46 27h-6l-4.5 4v-4H33z" />
      <path {...STROKE} d="M37.5 20.5h7" opacity={0.7} />
    </>
  );
}

/** Talking: a child with two speech shapes leaving the mouth. */
function ExpressiveArt() {
  return (
    <>
      <circle {...STROKE} cx={19} cy={18} r={6} />
      <path {...STROKE} d="M10 40v-4.5A9 9 0 0 1 28 35v4.5" />
      <path {...STROKE} d="M31 15h16a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 47 27h-9l-5 4.5V27h-2z" />
      <path {...STROKE} d="M36 21h8" opacity={0.7} />
    </>
  );
}

/** Speech sounds: a mouth shape with a rising sound wave. */
function SpeechArt() {
  return (
    <>
      <path {...STROKE} d="M12 26c4.5-6 10-9 16-9s11.5 3 16 9c-4.5 6-10 9-16 9s-11.5-3-16-9z" />
      <circle {...STROKE} cx={28} cy={26} r={4.5} />
      <path {...STROKE} d="M10 40h4l3-6 3.5 10 3.5-13 3 9 2.5-5h13" opacity={0.75} />
    </>
  );
}

/** Social play: two figures and a shared object between them. */
function SocialArt() {
  return (
    <>
      <circle {...STROKE} cx={15} cy={16} r={5} />
      <path {...STROKE} d="M7 37v-4a8 8 0 0 1 16 0v4" />
      <circle {...STROKE} cx={41} cy={16} r={5} />
      <path {...STROKE} d="M33 37v-4a8 8 0 0 1 16 0v4" />
      <circle {...STROKE} cx={28} cy={27} r={4} opacity={0.75} />
      <path {...STROKE} d="M24 27h-2M34 27h-2" opacity={0.55} />
    </>
  );
}

/** Thinking: stacked and sorted shapes. */
function CognitiveArt() {
  return (
    <>
      <rect {...STROKE} x={10} y={28} width={13} height={12} rx={2} />
      <rect {...STROKE} x={13} y={16} width={7} height={12} rx={2} opacity={0.75} />
      <circle {...STROKE} cx={39} cy={34} r={6} />
      <path {...STROKE} d="M33 20h12l-6-9z" opacity={0.75} />
    </>
  );
}

const ART: Record<MilestoneArtName, () => JSX.Element> = {
  auditory_hearing: AuditoryArt,
  language_receptive: ReceptiveArt,
  language_expressive: ExpressiveArt,
  speech_articulation: SpeechArt,
  social_pragmatic: SocialArt,
  cognitive: CognitiveArt,
};

export default function MilestoneArt({
  name,
  size = 56,
  className,
  title,
}: {
  name: string;
  size?: number;
  className?: string;
  title?: string;
}) {
  const Art = ART[name as MilestoneArtName] || ART.cognitive;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 48"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <Art />
    </svg>
  );
}

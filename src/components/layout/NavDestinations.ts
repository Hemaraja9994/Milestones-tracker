import { BookOpen, Heart, Home, Stethoscope, LucideIcon } from 'lucide-react';

export type Pathway = 'neutral' | 'clinician' | 'parent';

export interface Destination {
  href: string;
  label: string;
  icon: LucideIcon;
  pathway: Pathway;
  /** Every route that should light this destination up. */
  matches: (pathname: string) => boolean;
}

/**
 * Four destinations, same order and same labels at every width.
 *
 * Parent Tracker points at /parent rather than /parent/tracker: the parent
 * dashboard is the pathway entry — it carries first-run, the child switcher,
 * the ASHA checklist and the gauges — and the tracker is one tap from it. Going
 * straight to the tracker would leave the dashboard reachable only by the back
 * arrow.
 */
export const DESTINATIONS: Destination[] = [
  {
    href: '/',
    label: 'Home',
    icon: Home,
    pathway: 'neutral',
    matches: (p) => p === '/',
  },
  {
    href: '/professional',
    label: 'Professional Portal',
    icon: Stethoscope,
    pathway: 'clinician',
    matches: (p) => p.startsWith('/professional') || p.startsWith('/high-risk-register'),
  },
  {
    href: '/parent',
    label: 'Parent Tracker',
    icon: Heart,
    pathway: 'parent',
    matches: (p) => p.startsWith('/parent'),
  },
  {
    href: '/clinical-reference',
    label: 'Clinical Hub',
    icon: BookOpen,
    pathway: 'clinician',
    matches: (p) =>
      p.startsWith('/clinical-reference') ||
      p.startsWith('/auditory-development') ||
      p.startsWith('/speech-sound-matrix') ||
      p.startsWith('/sources'),
  },
];

/** Active colours per pathway — the bar echoes the pathway you are in. */
export const ACTIVE_PATHWAY: Record<Pathway, string> = {
  neutral: 'bg-canvas text-ink',
  clinician: 'bg-clinician-tint text-clinician-ink',
  parent: 'bg-parent-tint text-parent-ink',
};

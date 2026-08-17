import { Milestone } from '@/types';
import { COMPREHENSIVE_MILESTONES } from './milestones';
import { MILESTONE_EXPANSION } from './milestonesExpansion';

/**
 * The expansion data carries three fields the frozen `Milestone` type does not
 * declare. `src/types/**` is content-frozen, so the extension lives here rather
 * than widening the shared type.
 */
export interface MilestoneMedia {
  mediaType?: 'video' | 'illustration';
  mediaUrl?: string;
  graphicIconName?: string;
}

export type MilestoneWithMedia = Milestone & MilestoneMedia;

/**
 * Single consumption point for the milestone set.
 *
 * `milestones.ts` is content-frozen and is not edited. `milestonesExpansion.ts`
 * is additive and fills the empty band x domain cells; its ids are prefixed
 * `mx_` so they cannot collide with the existing `m_` ids and saved assessment
 * records keyed by milestone id stay valid.
 *
 * `src/lib/calculationEngine.ts` reads this list too, so estimated ages, domain
 * mastery and red-flag detection all score the full set.
 */
export const ALL_MILESTONES: MilestoneWithMedia[] = [
  ...COMPREHENSIVE_MILESTONES,
  ...MILESTONE_EXPANSION,
];

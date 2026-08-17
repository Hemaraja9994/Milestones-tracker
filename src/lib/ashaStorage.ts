/**
 * Responses to the ASHA Communication Milestones checklist.
 *
 * Kept in its own store, separate from AssessmentRecord.milestoneStatuses: the
 * ASHA bands are ASHA's own (0-3, 4-6, 7-9, 10-12, 13-18, 19-24) and its
 * response set is a parent-facing three-way, not the four-tier clinical status.
 * Mixing them would corrupt the developmental-age engine.
 */

export const ASHA_RESPONSES_KEY = 'milestonepath_asha_responses_v1';

/**
 * "Not sure" is recorded separately from "Not yet" — a caregiver who has not
 * had the chance to observe a skill is telling you something different from
 * one who has looked and not seen it. Both score as not-yet-observed; only
 * `yes` counts toward progress.
 */
export type AshaResponse = 'yes' | 'not_yet' | 'not_sure';

/** Only "yes" counts as observed. */
export function countsAsObserved(r: AshaResponse | undefined): boolean {
  return r === 'yes';
}

/** childId -> milestoneId -> response */
type AshaStore = Record<string, Record<string, AshaResponse>>;

function readStore(): AshaStore {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(ASHA_RESPONSES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to load ASHA responses from storage', e);
    return {};
  }
}

function writeStore(store: AshaStore): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ASHA_RESPONSES_KEY, JSON.stringify(store));
}

export function getAshaResponses(childId: string): Record<string, AshaResponse> {
  return readStore()[childId] || {};
}

export function saveAshaResponse(
  childId: string,
  milestoneId: string,
  response: AshaResponse
): void {
  const store = readStore();
  store[childId] = { ...(store[childId] || {}), [milestoneId]: response };
  writeStore(store);
}

/** Called when a child profile is deleted, so no orphan responses survive. */
export function deleteAshaResponses(childId: string): void {
  const store = readStore();
  if (!(childId in store)) return;
  delete store[childId];
  writeStore(store);
}

export function deleteAshaResponsesFor(childIds: string[]): void {
  const store = readStore();
  let changed = false;
  for (const id of childIds) {
    if (id in store) {
      delete store[id];
      changed = true;
    }
  }
  if (changed) writeStore(store);
}

/** Part of "erase everything on this device". */
export function clearAllAshaResponses(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ASHA_RESPONSES_KEY);
}

export function countAshaResponses(childId: string): number {
  return Object.keys(getAshaResponses(childId)).length;
}

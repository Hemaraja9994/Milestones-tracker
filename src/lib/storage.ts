import { ChildProfile, AssessmentRecord } from '@/types';
import {
  clearAllAshaResponses,
  deleteAshaResponses,
  deleteAshaResponsesFor,
} from './ashaStorage';

const CHILDREN_KEY = 'milestonepath_children_v1';
const ASSESSMENTS_KEY = 'milestonepath_assessments_v1';
const OBSERVATIONS_KEY = 'milestonepath_observations_v1';

/**
 * A parent's note of what they actually saw, e.g. "said 'appa' twice at
 * dinner". Deliberately separate from milestoneStatuses: writing an
 * observation never writes a status, so a milestone with observations and no
 * status still reads "Not yet seen".
 */
export interface Observation {
  id: string;
  childId: string;
  milestoneId: string;
  text: string;
  createdAt: string;
}

/**
 * The seeded profiles below are demonstration data, not the user's own child.
 * They are marked here so the UI can label them as samples instead of letting a
 * parent believe the app is already tracking their child.
 */
export const SAMPLE_CHILD_IDS = [
  'child_aarav_24m',
  'child_ananya_36m',
  'child_rohan_6m_preterm',
] as const;

export function isSampleChild(childId: string): boolean {
  return (SAMPLE_CHILD_IDS as readonly string[]).includes(childId);
}

export const INITIAL_CHILDREN: ChildProfile[] = [
  {
    id: 'child_aarav_24m',
    nameOrInitials: 'Aarav K.',
    dateOfBirth: new Date(Date.now() - 24 * 30.4375 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    gestationalWeeks: 39,
    primaryLanguages: ['Kannada', 'English'],
    medicalNotes: 'Full term birth, uneventful perinatal period. Responsive to environmental sounds. Attending bilingual playgroup.',
    hearingScreeningStatus: 'passed',
    riskFactors: [],
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'child_ananya_36m',
    nameOrInitials: 'Ananya S.',
    dateOfBirth: new Date(Date.now() - 36 * 30.4375 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    gestationalWeeks: 38,
    primaryLanguages: ['Hindi', 'English'],
    medicalNotes: 'Referred for expressive vocabulary assessment. Receptive skills strong; points and follows 2-step directions consistently.',
    hearingScreeningStatus: 'passed',
    riskFactors: ['Family history of late talking'],
    createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'child_rohan_6m_preterm',
    nameOrInitials: 'Rohan M. (Preterm)',
    dateOfBirth: new Date(Date.now() - 6 * 30.4375 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    gestationalWeeks: 32, // Preterm by 8 weeks
    primaryLanguages: ['Kannada', 'Hindi'],
    medicalNotes: 'Preterm birth at 32 weeks, NICU stay 14 days for phototherapy. Corrected age applied.',
    hearingScreeningStatus: 'passed',
    riskFactors: ['NICU Stay > 5 Days (Phototherapy)', 'Prematurity (32 wks)'],
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export const INITIAL_ASSESSMENTS: AssessmentRecord[] = [
  {
    id: 'sess_aarav_initial',
    childId: 'child_aarav_24m',
    sessionDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    sessionNumber: 1,
    examinerName: 'Dr. S. Nayak (SLP)',
    examinerRole: 'Consultant Speech-Language Pathologist',
    milestoneStatuses: {
      'm_2m_aud_1': 'observed',
      'm_2m_soc_1': 'observed',
      'm_2m_exp_1': 'observed',
      'm_4m_aud_1': 'observed',
      'm_4m_exp_1': 'observed',
      'm_6m_aud_1': 'observed',
      'm_6m_exp_1': 'observed',
      'm_6m_rec_1': 'observed',
      'm_9m_aud_1': 'observed',
      'm_9m_soc_1': 'observed',
      'm_9m_exp_1': 'observed',
      'm_12m_rec_1': 'observed',
      'm_12m_exp_1': 'observed',
      'm_12m_aud_1': 'observed',
      'm_15m_exp_1': 'observed',
      'm_15m_rec_1': 'observed',
      'm_18m_exp_1': 'observed',
      'm_18m_rec_1': 'observed',
      'm_18m_speech_1': 'observed',
      'm_24m_exp_1': 'observed',
      'm_24m_rec_1': 'observed',
      'm_24m_speech_1': 'observed',
      'm_30m_exp_1': 'emerging',
      'm_30m_rec_1': 'emerging',
    },
    milestoneNotes: {
      'm_24m_exp_1': 'Spontaneously produced "Amma milk" and "Papa baa" during play with toy cars.',
      'm_24m_speech_1': 'Good articulation of /p, b, m, d/. Speech easily understood by mother.',
      'm_30m_exp_1': 'Starting to use "nange" (to me) occasionally.'
    },
    overallClinicalNotes: 'Child demonstrates age-appropriate receptive and expressive language skills across both Kannada and English. Auditory localization mature on all planes.',
    recommendations: 'Continue naturalistic language stimulation at home. Encourage peer interaction in playgroups. Routine developmental follow-up in 6 months.',
    estimatedReceptiveAgeMonths: 25.5,
    estimatedExpressiveAgeMonths: 24.8,
    estimatedAuditoryAgeMonths: 26.0,
  }
];

/**
 * A fresh install starts empty. The demo profiles in INITIAL_CHILDREN are kept
 * only so `loadSampleChildren` can put them in on request — a clinical tool
 * must not invent patients, and a caregiver must not be shown someone else's
 * child.
 */
export function getStoredChildren(): ChildProfile[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CHILDREN_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load children from storage', e);
    return [];
  }
}

/** Put the demonstration profiles in, for someone evaluating the tool. */
export function loadSampleChildren(): void {
  if (typeof window === 'undefined') return;
  const current = getStoredChildren();
  const missing = INITIAL_CHILDREN.filter((s) => !current.some((c) => c.id === s.id));
  if (missing.length === 0) return;
  localStorage.setItem(CHILDREN_KEY, JSON.stringify([...current, ...missing]));
  const assessments = getStoredAssessments();
  const missingSessions = INITIAL_ASSESSMENTS.filter(
    (a) => !assessments.some((x) => x.id === a.id)
  );
  if (missingSessions.length) {
    localStorage.setItem(ASSESSMENTS_KEY, JSON.stringify([...assessments, ...missingSessions]));
  }
}

/** Remove the demonstration profiles and everything recorded against them. */
export function removeSampleChildren(): void {
  if (typeof window === 'undefined') return;
  const removed = getStoredChildren().filter((c) => isSampleChild(c.id)).map((c) => c.id);
  const children = getStoredChildren().filter((c) => !isSampleChild(c.id));
  localStorage.setItem(CHILDREN_KEY, JSON.stringify(children));
  const assessments = getStoredAssessments().filter((a) => !isSampleChild(a.childId));
  localStorage.setItem(ASSESSMENTS_KEY, JSON.stringify(assessments));
  deleteAshaResponsesFor(removed);
  deleteObservationsFor(removed);
}

/**
 * Erase every child profile and every recorded session from this device.
 * Irreversible — there is no server copy to restore from.
 */
export function clearAllStoredData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CHILDREN_KEY);
  localStorage.removeItem(ASSESSMENTS_KEY);
  localStorage.removeItem(OBSERVATIONS_KEY);
  clearAllAshaResponses();
}

/* ---------------------------------------------------------------- observations */

export function getStoredObservations(): Observation[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(OBSERVATIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to load observations from storage', e);
    return [];
  }
}

/** Newest first — the timeline and the milestone card both read in that order. */
export function getObservationsFor(childId: string, milestoneId?: string): Observation[] {
  return getStoredObservations()
    .filter((o) => o.childId === childId && (!milestoneId || o.milestoneId === milestoneId))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function saveObservation(o: Omit<Observation, 'id' | 'createdAt'>): Observation {
  const record: Observation = {
    ...o,
    id: `obs_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };
  const all = getStoredObservations();
  localStorage.setItem(OBSERVATIONS_KEY, JSON.stringify([...all, record]));
  return record;
}

/** Backs the Undo on the save toast. */
export function deleteObservation(id: string): void {
  if (typeof window === 'undefined') return;
  const all = getStoredObservations().filter((o) => o.id !== id);
  localStorage.setItem(OBSERVATIONS_KEY, JSON.stringify(all));
}

function deleteObservationsFor(childIds: string[]): void {
  if (typeof window === 'undefined') return;
  const all = getStoredObservations().filter((o) => !childIds.includes(o.childId));
  localStorage.setItem(OBSERVATIONS_KEY, JSON.stringify(all));
}

export function saveChild(child: ChildProfile): void {
  if (typeof window === 'undefined') return;
  const current = getStoredChildren();
  const index = current.findIndex(c => c.id === child.id);
  if (index >= 0) {
    current[index] = { ...child, updatedAt: new Date().toISOString() };
  } else {
    current.push(child);
  }
  localStorage.setItem(CHILDREN_KEY, JSON.stringify(current));
}

export function deleteChild(childId: string): void {
  if (typeof window === 'undefined') return;
  const current = getStoredChildren().filter(c => c.id !== childId);
  localStorage.setItem(CHILDREN_KEY, JSON.stringify(current));

  // Also remove assessments and any ASHA checklist responses
  const assessments = getStoredAssessments().filter(a => a.childId !== childId);
  localStorage.setItem(ASSESSMENTS_KEY, JSON.stringify(assessments));
  deleteAshaResponses(childId);
  deleteObservationsFor([childId]);
}

export function getStoredAssessments(): AssessmentRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(ASSESSMENTS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load assessments from storage', e);
    return [];
  }
}

export function saveAssessment(assessment: AssessmentRecord): void {
  if (typeof window === 'undefined') return;
  const current = getStoredAssessments();
  const index = current.findIndex(a => a.id === assessment.id);
  if (index >= 0) {
    current[index] = assessment;
  } else {
    current.push(assessment);
  }
  localStorage.setItem(ASSESSMENTS_KEY, JSON.stringify(current));
}

export function getChildAssessments(childId: string): AssessmentRecord[] {
  return getStoredAssessments().filter(a => a.childId === childId).sort((a, b) => 
    new Date(b.sessionDate).getTime() - new Date(a.sessionDate).getTime()
  );
}

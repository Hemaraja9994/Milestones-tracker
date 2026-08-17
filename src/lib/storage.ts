import { ChildProfile, AssessmentRecord } from '@/types';

const CHILDREN_KEY = 'milestonepath_children_v1';
const ASSESSMENTS_KEY = 'milestonepath_assessments_v1';

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

export function getStoredChildren(): ChildProfile[] {
  if (typeof window === 'undefined') return INITIAL_CHILDREN;
  try {
    const raw = localStorage.getItem(CHILDREN_KEY);
    if (!raw) {
      localStorage.setItem(CHILDREN_KEY, JSON.stringify(INITIAL_CHILDREN));
      return INITIAL_CHILDREN;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load children from storage', e);
    return INITIAL_CHILDREN;
  }
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

  // Also remove assessments
  const assessments = getStoredAssessments().filter(a => a.childId !== childId);
  localStorage.setItem(ASSESSMENTS_KEY, JSON.stringify(assessments));
}

export function getStoredAssessments(): AssessmentRecord[] {
  if (typeof window === 'undefined') return INITIAL_ASSESSMENTS;
  try {
    const raw = localStorage.getItem(ASSESSMENTS_KEY);
    if (!raw) {
      localStorage.setItem(ASSESSMENTS_KEY, JSON.stringify(INITIAL_ASSESSMENTS));
      return INITIAL_ASSESSMENTS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load assessments from storage', e);
    return INITIAL_ASSESSMENTS;
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

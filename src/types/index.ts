export type Language = 'en' | 'hi' | 'kn';

export type UserRole = 'professional' | 'parent';

export type MilestoneDomain = 
  | 'auditory_hearing'
  | 'language_receptive'
  | 'language_expressive'
  | 'speech_articulation'
  | 'social_pragmatic'
  | 'cognitive'
  | 'physical_motor';

export type MilestoneSubsystem = 
  | 'auditory_localization'
  | 'auditory_discrimination'
  | 'phonology'
  | 'articulation'
  | 'voice_resonance'
  | 'semantics'
  | 'syntax_morphology'
  | 'pragmatics'
  | 'general_cognition'
  | 'gross_motor'
  | 'fine_motor';

export type MilestoneStatus = 'not_observed' | 'emerging' | 'reported' | 'observed';

export interface Milestone {
  id: string;
  ageBandMonths: number;
  domain: MilestoneDomain;
  subsystem?: MilestoneSubsystem;
  title: Record<Language, string>;
  description: Record<Language, string>;
  whyItMatters: Record<Language, string>;
  whatToLookFor: Record<Language, string>;
  parentTips: Record<Language, string>;
  citation: 'CDC' | 'ASHA' | 'Northern & Downs' | 'AIISH' | 'Pathways.org' | 'Crowe & McLeod (2020)' | 'LEST' | 'JCIH';
  sourceUrl?: string;
  isRedFlag?: boolean;
}

export interface AgeBand {
  months: number;
  label: Record<Language, string>;
  rangeDescription: Record<Language, string>;
  chronologicalMinMonths: number;
  chronologicalMaxMonths: number;
}

export type HRRCategory = 
  | 'perinatal_neonatal'
  | 'family_genetic'
  | 'prenatal_maternal'
  | 'physical_craniofacial'
  | 'postnatal_ongoing'
  | 'caregiver_concern';

export type RiskLevel = 'no_elevated_risk' | 'elevated_risk' | 'high_risk';

export type InformationSource = 'parent_report' | 'medical_record' | 'clinical_observation' | 'screening_test';

export interface HighRiskFactorItem {
  id: string;
  category: HRRCategory;
  clinicalTitle: Record<Language, string>;
  plainQuestion: Record<Language, string>;
  explanationTooltip: Record<Language, string>;
  weight: 'critical' | 'moderate' | 'surveillance'; // Critical triggers immediate High Risk
  jcihRef: string;
  rbskCategory?: string;
}

export interface HRRFactorResponse {
  present: boolean;
  source?: InformationSource;
  clinicalNotes?: string;
}

export interface HighRiskAssessmentRecord {
  id: string;
  childId: string;
  assessmentDate: string;
  examinerName?: string;
  examinerRole?: string;
  responses: Record<string, HRRFactorResponse>; // factorId -> response
  overallRiskLevel: RiskLevel;
  triageSummaryText: Record<Language, string>;
  recommendedActions: Record<Language, string[]>;
  recommendedTimeline: Record<Language, string>;
  clinicalNotes?: string;
}

export interface ChildProfile {
  id: string;
  nameOrInitials: string;
  dateOfBirth: string; // YYYY-MM-DD
  gestationalWeeks?: number;
  primaryLanguages: string[];
  medicalNotes?: string;
  hearingScreeningStatus?: 'passed' | 'referred' | 'pending' | 'unknown';
  riskFactors?: string[];
  hrrRecord?: HighRiskAssessmentRecord;
  createdAt: string;
  updatedAt: string;
}

export interface AssessmentRecord {
  id: string;
  childId: string;
  sessionDate: string;
  sessionNumber: number;
  examinerName?: string;
  examinerRole?: string;
  milestoneStatuses: Record<string, MilestoneStatus>;
  milestoneNotes: Record<string, string>;
  overallClinicalNotes?: string;
  recommendations?: string;
  estimatedReceptiveAgeMonths?: number;
  estimatedExpressiveAgeMonths?: number;
  estimatedAuditoryAgeMonths?: number;
  speechSoundChecklist?: Record<string, 'mastered' | 'emerging' | 'absent'>;
}

export interface SpeechSoundItem {
  sound: string;
  ipa: string;
  group: 'early_8' | 'middle_8' | 'late_8';
  age75Percent: number;
  age90Percent: number;
  examplesEn: string[];
  examplesHi?: string[];
  examplesKn?: string[];
  description: Record<Language, string>;
}

export interface AuditoryMaturationStage {
  ageRangeMonths: string;
  minMonths: number;
  maxMonths: number;
  soundLocalizationLevel: Record<Language, string>;
  thresholdSoundField: string;
  behavioralResponse: Record<Language, string>;
  northernDownsRef: string;
  aiishClinicalNotes: Record<Language, string>;
  erberHierarchyLevel: 'Detection' | 'Discrimination' | 'Identification' | 'Comprehension';
}

export interface IntelligibilityNorm {
  ageYears: number;
  expectedToCaregivers: string;
  expectedToUnfamiliar: string;
  description: Record<Language, string>;
  citation: string;
}

export interface RedFlagItem {
  id: string;
  ageBandMonths: number;
  domain: MilestoneDomain;
  warningSign: Record<Language, string>;
  recommendedAction: Record<Language, string>;
  severity: 'moderate' | 'urgent';
  citation: string;
}

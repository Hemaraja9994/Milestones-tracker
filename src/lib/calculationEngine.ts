import { Milestone, MilestoneStatus, MilestoneDomain, ChildProfile, RedFlagItem } from '@/types';
import { COMPREHENSIVE_MILESTONES } from '@/data/milestones';
import { CLINICAL_RED_FLAGS } from '@/data/redFlags';
import { AGE_BANDS } from '@/data/ageBands';

export interface DomainScore {
  domain: MilestoneDomain;
  totalItems: number;
  observedCount: number;
  reportedCount: number;
  emergingCount: number;
  notObservedCount: number;
  masteryPercentage: number; // (observed + reported) / totalItems * 100
}

export interface ClinicalSnapshot {
  estimatedReceptiveAgeMonths: number;
  estimatedExpressiveAgeMonths: number;
  estimatedAuditoryAgeMonths: number;
  receptiveCeilingBand: number;
  expressiveCeilingBand: number;
  auditoryCeilingBand: number;
  domainScores: Record<MilestoneDomain, DomainScore>;
  activeRedFlags: RedFlagItem[];
  riskFactorAlerts: string[];
  receptiveDelayFlag: boolean;
  expressiveDelayFlag: boolean;
  auditoryDelayFlag: boolean;
}

export function computeClinicalSnapshot(
  effectiveAgeMonths: number,
  milestoneStatuses: Record<string, MilestoneStatus>,
  childProfile?: ChildProfile
): ClinicalSnapshot {
  const ageBandValues = [2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 48, 60, 72];

  // Helper to get estimated age for a specific domain
  const calculateDomainEstimatedAge = (targetDomain: MilestoneDomain): { estimatedAge: number; ceilingBand: number } => {
    let highestMasteredBand = ageBandValues[0];
    let highestEmergingBand = ageBandValues[0];

    for (const band of ageBandValues) {
      const itemsInBand = COMPREHENSIVE_MILESTONES.filter(
        m => m.ageBandMonths === band && m.domain === targetDomain
      );
      if (itemsInBand.length === 0) continue;

      let masteredCount = 0;
      let emergingCount = 0;

      for (const item of itemsInBand) {
        const st = milestoneStatuses[item.id] || 'not_observed';
        if (st === 'observed' || st === 'reported') {
          masteredCount += 1;
        } else if (st === 'emerging') {
          emergingCount += 1;
        }
      }

      const masteryRate = masteredCount / itemsInBand.length;
      if (masteryRate >= 0.75) {
        highestMasteredBand = band;
      }
      if (masteryRate > 0 || emergingCount > 0) {
        highestEmergingBand = band;
      }
    }

    // Blend: base at highest consistent mastery, plus partial credit for emerging skills up to next band
    const bandIndex = ageBandValues.indexOf(highestMasteredBand);
    const nextBand = bandIndex < ageBandValues.length - 1 ? ageBandValues[bandIndex + 1] : highestMasteredBand;
    const bandDiff = nextBand - highestMasteredBand;
    
    // Check items in next band for partial credit
    const nextBandItems = COMPREHENSIVE_MILESTONES.filter(
      m => m.ageBandMonths === nextBand && m.domain === targetDomain
    );
    let partialRatio = 0;
    if (nextBandItems.length > 0) {
      let partialScore = 0;
      for (const item of nextBandItems) {
        const st = milestoneStatuses[item.id] || 'not_observed';
        if (st === 'observed' || st === 'reported') partialScore += 1;
        else if (st === 'emerging') partialScore += 0.5;
      }
      partialRatio = partialScore / nextBandItems.length;
    }

    const calculatedMonths = highestMasteredBand + (bandDiff * partialRatio * 0.7);
    return {
      estimatedAge: Number(calculatedMonths.toFixed(1)),
      ceilingBand: highestEmergingBand
    };
  };

  const receptiveResult = calculateDomainEstimatedAge('language_receptive');
  const expressiveResult = calculateDomainEstimatedAge('language_expressive');
  const auditoryResult = calculateDomainEstimatedAge('auditory_hearing');

  // Domain score summary
  const domains: MilestoneDomain[] = [
    'auditory_hearing',
    'language_receptive',
    'language_expressive',
    'speech_articulation',
    'social_pragmatic',
    'cognitive',
    'physical_motor'
  ];

  const domainScores: Record<MilestoneDomain, DomainScore> = {} as any;

  for (const dom of domains) {
    // Only calculate for items up to child's approximate age window or checked items
    const relevantItems = COMPREHENSIVE_MILESTONES.filter(m => m.domain === dom);
    let obs = 0;
    let rep = 0;
    let emg = 0;
    let notObs = 0;

    for (const item of relevantItems) {
      const st = milestoneStatuses[item.id] || 'not_observed';
      if (st === 'observed') obs += 1;
      else if (st === 'reported') rep += 1;
      else if (st === 'emerging') emg += 1;
      else notObs += 1;
    }

    const total = relevantItems.length;
    const mastery = total > 0 ? ((obs + rep) / total) * 100 : 0;

    domainScores[dom] = {
      domain: dom,
      totalItems: total,
      observedCount: obs,
      reportedCount: rep,
      emergingCount: emg,
      notObservedCount: notObs,
      masteryPercentage: Math.round(mastery)
    };
  }

  // Active Red Flags detection
  const activeRedFlags: RedFlagItem[] = [];
  for (const rf of CLINICAL_RED_FLAGS) {
    if (effectiveAgeMonths >= rf.ageBandMonths) {
      // Find corresponding milestones in that band/domain that are not observed
      const missingMilestones = COMPREHENSIVE_MILESTONES.filter(
        m => m.ageBandMonths === rf.ageBandMonths && 
             m.domain === rf.domain && 
             m.isRedFlag && 
             (milestoneStatuses[m.id] === 'not_observed' || !milestoneStatuses[m.id])
      );
      if (missingMilestones.length > 0) {
        activeRedFlags.push(rf);
      }
    }
  }

  const riskFactorAlerts: string[] = [];
  if (childProfile?.hearingScreeningStatus === 'referred') {
    riskFactorAlerts.push('Newborn Hearing Screening was REFERRED / Follow-up indicated. Diagnostic ABR/OAE re-test strongly recommended.');
  }
  if (childProfile?.riskFactors && childProfile.riskFactors.length > 0) {
    for (const rf of childProfile.riskFactors) {
      riskFactorAlerts.push(`High-Risk Hearing / Developmental Factor: ${rf}`);
    }
  }

  // Delay flags: if estimated age is behind effective age by >25% or >6 months
  const receptiveDelayFlag = effectiveAgeMonths >= 12 && (effectiveAgeMonths - receptiveResult.estimatedAge) >= Math.max(3, effectiveAgeMonths * 0.25);
  const expressiveDelayFlag = effectiveAgeMonths >= 12 && (effectiveAgeMonths - expressiveResult.estimatedAge) >= Math.max(3, effectiveAgeMonths * 0.25);
  const auditoryDelayFlag = effectiveAgeMonths >= 6 && (effectiveAgeMonths - auditoryResult.estimatedAge) >= Math.max(2, effectiveAgeMonths * 0.25);

  return {
    estimatedReceptiveAgeMonths: receptiveResult.estimatedAge,
    estimatedExpressiveAgeMonths: expressiveResult.estimatedAge,
    estimatedAuditoryAgeMonths: auditoryResult.estimatedAge,
    receptiveCeilingBand: receptiveResult.ceilingBand,
    expressiveCeilingBand: expressiveResult.ceilingBand,
    auditoryCeilingBand: auditoryResult.ceilingBand,
    domainScores,
    activeRedFlags,
    riskFactorAlerts,
    receptiveDelayFlag,
    expressiveDelayFlag,
    auditoryDelayFlag,
  };
}

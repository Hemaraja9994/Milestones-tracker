import { Language } from '@/types';

export interface AgeCalculationResult {
  chronologicalMonths: number; // e.g. 14.5
  chronologicalYears: number; // e.g. 1.2
  correctedMonths: number; // if premature
  isPremature: boolean;
  prematurityWeeks: number;
  chronologicalText: Record<Language, string>;
  correctedText: Record<Language, string>;
  effectiveAgeMonths: number; // Corrected age if <24m and premature, otherwise chronological
  recommendedAgeBandMonths: number;
}

export function calculateChildAges(
  dobString: string,
  gestationalWeeks?: number,
  asOfDate: string = new Date().toISOString().split('T')[0]
): AgeCalculationResult {
  const birth = new Date(dobString);
  const target = new Date(asOfDate);

  let totalMonths = (target.getFullYear() - birth.getFullYear()) * 12 + (target.getMonth() - birth.getMonth());
  const dayDiff = target.getDate() - birth.getDate();
  if (dayDiff < 0) {
    totalMonths -= 1;
  }
  const exactDays = Math.max(0, Math.floor((target.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24)));
  const exactMonths = Math.max(0, exactDays / 30.4375);
  const years = exactMonths / 12;

  const isPremature = typeof gestationalWeeks === 'number' && gestationalWeeks < 37;
  const prematurityWeeks = isPremature ? Math.max(0, 40 - (gestationalWeeks || 40)) : 0;
  const prematurityMonths = prematurityWeeks / 4.345;

  // Corrected age only applied up to 24 months chronologically
  const correctedMonths = isPremature && exactMonths < 24 
    ? Math.max(0, exactMonths - prematurityMonths) 
    : exactMonths;

  const effectiveAgeMonths = isPremature && exactMonths < 24 ? correctedMonths : exactMonths;

  // Pick nearest standard age band (2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 48, 60, 72)
  const bands = [2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 48, 60, 72];
  let closestBand = bands[0];
  let minDiff = Math.abs(effectiveAgeMonths - closestBand);
  for (const b of bands) {
    const diff = Math.abs(effectiveAgeMonths - b);
    if (diff < minDiff) {
      minDiff = diff;
      closestBand = b;
    }
  }

  const roundedMonths = Math.floor(exactMonths);
  const roundedCorrected = Math.floor(correctedMonths);

  return {
    chronologicalMonths: Number(exactMonths.toFixed(1)),
    chronologicalYears: Number(years.toFixed(1)),
    correctedMonths: Number(correctedMonths.toFixed(1)),
    isPremature,
    prematurityWeeks,
    effectiveAgeMonths: Number(effectiveAgeMonths.toFixed(1)),
    recommendedAgeBandMonths: closestBand,
    chronologicalText: {
      en: `${roundedMonths} months (${(exactMonths / 12).toFixed(1)} yrs)`,
      hi: `${roundedMonths} महीने (${(exactMonths / 12).toFixed(1)} वर्ष)`,
      kn: `${roundedMonths} ತಿಂಗಳು (${(exactMonths / 12).toFixed(1)} ವರ್ಷ)`,
    },
    correctedText: {
      en: isPremature ? `${roundedCorrected} months (Adjusted for ${prematurityWeeks} wks early)` : `${roundedMonths} months`,
      hi: isPremature ? `${roundedCorrected} महीने (${prematurityWeeks} सप्ताह पूर्व जन्म समायोजित)` : `${roundedMonths} महीने`,
      kn: isPremature ? `${roundedCorrected} ತಿಂಗಳು (${prematurityWeeks} ವಾರಗಳ ಮುಂಚಿತ ಜನನ ಸರಿಹೊಂದಿಸಲಾಗಿದೆ)` : `${roundedMonths} ತಿಂಗಳು`,
    }
  };
}

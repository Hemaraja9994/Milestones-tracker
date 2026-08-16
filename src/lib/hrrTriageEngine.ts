import { 
  HighRiskFactorItem, 
  HRRFactorResponse, 
  RiskLevel, 
  Language, 
  HighRiskAssessmentRecord 
} from '@/types';
import { HIGH_RISK_REGISTER_ITEMS } from '@/data/highRiskRegister';

export interface HRRTriageResult {
  riskLevel: RiskLevel;
  totalFactorsEvaluated: number;
  positiveFactorsCount: number;
  criticalFactorsCount: number;
  moderateFactorsCount: number;
  positiveItems: HighRiskFactorItem[];
  triageBadgeLabel: Record<Language, string>;
  triageSummaryText: Record<Language, string>;
  recommendedActions: Record<Language, string[]>;
  recommendedTimeline: Record<Language, string>;
  educationalDisclaimer: Record<Language, string>;
}

export function evaluateHRRTriage(
  responses: Record<string, HRRFactorResponse>
): HRRTriageResult {
  const positiveItems: HighRiskFactorItem[] = [];
  let criticalCount = 0;
  let moderateCount = 0;

  for (const item of HIGH_RISK_REGISTER_ITEMS) {
    const res = responses[item.id];
    if (res && res.present) {
      positiveItems.push(item);
      if (item.weight === 'critical') {
        criticalCount += 1;
      } else {
        moderateCount += 1;
      }
    }
  }

  const positiveCount = positiveItems.length;

  let riskLevel: RiskLevel = 'no_elevated_risk';

  if (criticalCount >= 1 || moderateCount >= 3) {
    riskLevel = 'high_risk';
  } else if (moderateCount >= 1) {
    riskLevel = 'elevated_risk';
  } else {
    riskLevel = 'no_elevated_risk';
  }

  const triageBadgeLabel: Record<Language, string> = {
    en: riskLevel === 'high_risk' ? 'HIGH RISK (Referral Indicated)' :
        riskLevel === 'elevated_risk' ? 'ELEVATED RISK (Close Surveillance)' :
        'NO ELEVATED RISK (Routine Surveillance)',
    hi: riskLevel === 'high_risk' ? 'उच्च जोखिम (तत्काल जांच आवश्यक)' :
        riskLevel === 'elevated_risk' ? 'बढ़ा हुआ जोखिम (सक्रिय निगरानी)' :
        'कोई अतिरिक्त जोखिम नहीं (सामान्य निगरानी)',
    kn: riskLevel === 'high_risk' ? 'ಹೆಚ್ಚಿನ ಅಪಾಯ (ತಕ್ಷಣದ ಪರೀಕ್ಷೆ ಅಗತ್ಯ)' :
        riskLevel === 'elevated_risk' ? 'ಹೆಚ್ಚಿದ ಅಪಾಯ (ನಿರಂತರ ನಿಗಾ)' :
        'ಯಾವುದೇ ಹೆಚ್ಚಿನ ಅಪಾಯವಿಲ್ಲ (ವಾಡಿಕೆಯ ನಿಗಾ)',
  };

  const triageSummaryText: Record<Language, string> = {
    en: riskLevel === 'high_risk'
      ? `Child presents with ${positiveCount} identified high-risk indicators (${criticalCount} critical, including ${positiveItems.map(p => p.clinicalTitle.en.split('(')[0].trim()).slice(0, 2).join(', ')}). Comprehensive audiological and speech-language evaluation is strongly indicated.`
      : riskLevel === 'elevated_risk'
      ? `Child has ${positiveCount} moderate risk factor(s) identified. Targeted hearing and speech-language milestone surveillance is recommended at regular intervals.`
      : 'No elevated perinatal, genetic, or environmental high-risk factors were reported for communication or hearing disorders. Continue routine developmental milestone tracking.',
    hi: riskLevel === 'high_risk'
      ? `बच्चे में ${positiveCount} उच्च-जोखिम कारक (${criticalCount} गंभीर) पाए गए हैं। शिशु श्रवण विशेषज्ञ (ऑडियोलॉजिस्ट) और स्पीच थेरेपिस्ट से तत्काल विस्तृत जांच कराने की सिफारिश की जाती है।`
      : riskLevel === 'elevated_risk'
      ? `बच्चे में ${positiveCount} मध्यम जोखिम कारक मिले हैं। हर 3 से 6 महीने में श्रवण व भाषा विकास की सक्रिय निगरानी रखें।`
      : 'शिशु में सुनने या बोलने में रुकावट डालने वाला कोई अतिरिक्त जोखिम कारक दर्ज नहीं हुआ है। सामान्य विकासात्मक ट्रैकिंग जारी रखें।',
    kn: riskLevel === 'high_risk'
      ? `ಮಗುವಿನಲ್ಲಿ ${positiveCount} ಹೆಚ್ಚಿನ ಅಪಾಯದ ಅಂಶಗಳು (${criticalCount} ಗಂಭೀರ) ಕಂಡುಬಂದಿವೆ. ಮಕ್ಕಳ ಆಡಿಯಾಲಜಿಸ್ಟ್ ಮತ್ತು ಸ್ಪೀಚ್-ಲ್ಯಾಂಗ್ವೇಜ್ ಪ್ಯಾಥಾಲಜಿಸ್ಟ್ ಅವರಿಂದ ತಕ್ಷಣವೇ ಸಮಗ್ರ ಪರೀಕ್ಷೆ ಮಾಡಿಸಲು ಸಲಹೆ ನೀಡಲಾಗಿದೆ.`
      : riskLevel === 'elevated_risk'
      ? `ಮಗುವಿನಲ್ಲಿ ${positiveCount} ಮಧ್ಯಮ ಅಪಾಯದ ಅಂಶಗಳು ಗುರುತಿಸಲ್ಪಟ್ಟಿವೆ. ಪ್ರತಿ 3-6 ತಿಂಗಳಿಗೊಮ್ಮೆ ಶ್ರವಣ ಮತ್ತು ಭಾಷಾ ಮೈಲಿಗಲ್ಲುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.`
      : 'ಯಾವುದೇ ಹೆಚ್ಚಿನ ಅಪಾಯದ ಅಂಶಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ಸಾಮಾನ್ಯ ಬೆಳವಣಿಗೆಯ ಮೈಲಿಗಲ್ಲುಗಳ ಟ್ರ್ಯಾಕಿಂಗ್ ಮುಂದುವರಿಸಿ.',
  };

  const recommendedActions: Record<Language, string[]> = {
    en: riskLevel === 'high_risk'
      ? [
          'Immediate diagnostic audiological evaluation: Diagnostic Brainstem Evoked Response Audiometry (BERA / ABR) and Distortion Product Otoacoustic Emissions (DPOAE).',
          'Tympanometry and acoustic reflex assessment to evaluate middle ear function.',
          'Formal Speech-Language Pathology assessment (Receptive & Expressive language profiles).',
          'Pediatric ENT / Otolaryngology consultation for middle/inner ear structural evaluation.'
        ]
      : riskLevel === 'elevated_risk'
      ? [
          'Targeted repeat audiological screening (OAE / Automated ABR) every 6 months until age 3 years.',
          'Monthly tracking of speech-language milestones using MilestonePath.',
          'Parent education on rich verbal stimulation and auditory games in all home languages.',
          'Check for middle ear fluid / otitis media during routine well-child visits.'
        ]
      : [
          'Continue routine developmental milestone monitoring at 2, 4, 6, 9, 12, 18, 24, 36 months.',
          'Ensure routine newborn hearing screening was completed and passed.',
          'Maintain natural, engaging language interactions in home languages (Kannada, Hindi, English).'
        ],
    hi: riskLevel === 'high_risk'
      ? [
          'तत्काल संपूर्ण श्रवण जांच: बेरा (BERA/ABR) और डीपी-ओएई (DPOAE) परीक्षण कराएं।',
          'मध्य कान में पानी या संक्रमण की जांच के लिए टिमपेनोमेट्री कराएं।',
          'वाक-भाषा विशेषज्ञ (SLP) से भाषा व अभिव्यक्ति का विस्तृत मूल्यांकन कराएं।',
          'कान, नाक, गला (ENT) विशेषज्ञ से परामर्श लें।'
        ]
      : riskLevel === 'elevated_risk'
      ? [
          '3 वर्ष की उम्र तक हर 6 महीने में कान की नियमित जांच (OAE) दोहराएं।',
          'माइलस्टोनपाथ के माध्यम से मासिक रूप से भाषा विकास को ट्रैक करें।',
          'घर में बच्चे से स्वाभाविक भाषा में खुलकर बात करें और खेल-खेल में सिखाएं।',
          'सर्दी या कान बहने पर तुरंत डॉक्टर को दिखाएं।'
        ]
      : [
          '2, 4, 6, 9, 12, 18, 24 और 36 महीनों पर सामान्य माइलस्टोन ट्रैकिंग जारी रखें।',
          'सुनिश्चित करें कि नवजात श्रवण जांच (Hearing Screening) पास हो चुकी है।',
          'घर की भाषाओं में प्यार से बातचीत और कहानियां सुनाना जारी रखें।'
        ],
    kn: riskLevel === 'high_risk'
      ? [
          'ತಕ್ಷಣವೇ ಸಮಗ್ರ ಶ್ರವಣ ಪರೀಕ್ಷೆ: BERA / ABR ಮತ್ತು DPOAE ಪರೀಕ್ಷೆಗಳನ್ನು ಮಾಡಿಸಿ.',
          'ಮಧ್ಯಕಿವಿಯ ತಪಾಸಣೆಗಾಗಿ ಟಿಂಪಾನೊಮೆಟ್ರಿ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.',
          'ಸ್ಪೀಚ್ ಥೆರಪಿಸ್ಟ್ (SLP) ಅವರಿಂದ ಭಾಷಾ ಗ್ರಹಿಕೆ ಮತ್ತು ಅಭಿವ್ಯಕ್ತಿಯ ಮೌಲ್ಯಮಾಪನ.',
          'ಇಎನ್‌ಟಿ (ENT) ಮಕ್ಕಳ ಕಿವಿಯ ವೈದ್ಯರ ಸಲಹೆ ಪಡೆಯಿರಿ.'
        ]
      : riskLevel === 'elevated_risk'
      ? [
          '3 ವರ್ಷದವರೆಗೆ ಪ್ರತಿ 6 ತಿಂಗಳಿಗೊಮ್ಮೆ ನಿಯಮಿತ ಶ್ರವಣ ಮರುಪರೀಕ್ಷೆ (OAE).',
          'ಮೈಲ್‌ಸ್ಟೋನ್‌ಪಾತ್ ಮೂಲಕ ಮಾಸಿಕ ಮೈಲಿಗಲ್ಲುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
          'ಮನೆಯಲ್ಲಿ ಮಗುವಿನೊಂದಿಗೆ ನಿರಂತರವಾಗಿ ಮಾತನಾಡಿ ಪ್ರೋತ್ಸಾಹಿಸಿ.',
          'ಕಿವಿ ಸೋರುವಿಕೆ ಅಥವಾ ಶೀತದ ಲಕ್ಷಣಗಳಿದ್ದರೆ ತಕ್ಷಣ ವೈದ್ಯರಿಗೆ ತೋರಿಸಿ.'
        ]
      : [
          'ಸಾಮಾನ್ಯ ವಯಸ್ಸಿನ ಮೈಲಿಗಲ್ಲುಗಳ ನಿಗಾವಹಿಸುವಿಕೆಯನ್ನು ಮುಂದುವರಿಸಿ.',
          'ನವಜಾತ ಶ್ರವಣ ಪರೀಕ್ಷೆ ಪೂರ್ಣಗೊಂಡಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.',
          'ಮನೆಯ ಮಾತೃಭಾಷೆಗಳಲ್ಲಿ ಮಗುವಿನೊಂದಿಗೆ ಪ್ರೀತಿಯ ಸಂಭಾಷಣೆ ನಡೆಸಿ.'
        ]
  };

  const recommendedTimeline: Record<Language, string> = {
    en: riskLevel === 'high_risk' ? 'Schedule diagnostic testing within 2–4 weeks' :
        riskLevel === 'elevated_risk' ? 'Re-screen audiology and milestones in 3–6 months' :
        'Routine well-child checkups per standard pediatric schedule',
    hi: riskLevel === 'high_risk' ? 'अगले 2 से 4 सप्ताह के भीतर विशेषज्ञ परीक्षण कराएं' :
        riskLevel === 'elevated_risk' ? 'अगले 3 से 6 महीने में पुनः जांच कराएं' :
        'नियमित टीकाकरण एवं बाल रोग चिकित्सक के सामान्य शेड्यूल अनुसार',
    kn: riskLevel === 'high_risk' ? 'ಮುಂದಿನ 2 ರಿಂದ 4 ವಾರಗಳೊಳಗೆ ತಜ್ಞರ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ' :
        riskLevel === 'elevated_risk' ? 'ಮುಂದಿನ 3 ರಿಂದ 6 ತಿಂಗಳಲ್ಲಿ ಮರುಪರೀಕ್ಷೆ ಮಾಡಿಸಿ' :
        'ವಾಡಿಕೆಯ ಮಕ್ಕಳ ವೈದ್ಯಕೀಯ ತಪಾಸಣಾ ವೇಳಾಪಟ್ಟಿಯಂತೆ',
  };

  const educationalDisclaimer: Record<Language, string> = {
    en: 'EDUCATIONAL & TRIAGE USE ONLY: This High Risk Register triage summary is an evidence-based risk stratification aid grounded in JCIH and Indian RBSK/AIISH guidelines. It is NOT a diagnostic evaluation or clinical decision. Positive findings strongly warrant professional consultation. Absence of listed risks does not guarantee typical hearing or speech development, as late-onset or progressive conditions can occur.',
    hi: 'केवल शैक्षणिक एवं स्क्रीनिंग उपयोग के लिए: यह हाई-रिस्क रजिस्टर रिपोर्ट JCIH, RBSK और AIISH मानकों पर आधारित एक स्क्रीनिंग सहायता है। यह कोई अंतिम नैदानिक निर्णय नहीं है। सकारात्मक पाए जाने पर विशेषज्ञ से संपर्क करें।',
    kn: 'ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಸ್ಕ್ರೀನಿಂಗ್ ಮಾಹಿತಿಗಾಗಿ ಮಾತ್ರ: ಈ ಹೈ-ರಿಸ್ಕ್ ರಿಜಿಸ್ಟರ್ ಸಾರಾಂಶವು JCIH, RBSK ಮತ್ತು AIISH ಮಾನದಂಡಗಳ ಆಧಾರದ ಮೇಲಿನ ಸ್ಕ್ರೀನಿಂಗ್ ನೆರವಾಗಿದೆ. ಯಾವುದೇ ಅಂತಿಮ ರೋಗನಿರ್ಣಯವಲ್ಲ.',
  };

  return {
    riskLevel,
    totalFactorsEvaluated: HIGH_RISK_REGISTER_ITEMS.length,
    positiveFactorsCount: positiveCount,
    criticalFactorsCount: criticalCount,
    moderateFactorsCount: moderateCount,
    positiveItems,
    triageBadgeLabel,
    triageSummaryText,
    recommendedActions,
    recommendedTimeline,
    educationalDisclaimer,
  };
}

import { HighRiskFactorItem, HRRCategory, Language } from '@/types';

export const HRR_CATEGORIES: { id: HRRCategory; label: Record<Language, string>; description: Record<Language, string> }[] = [
  {
    id: 'perinatal_neonatal',
    label: {
      en: 'Perinatal & Neonatal Factors',
      hi: 'जन्म के समय और नवजात शिशु से जुड़े कारक (Perinatal/Neonatal)',
      kn: 'ಜನನ ಸಮಯ ಮತ್ತು ನವಜಾತ ಶಿಶುವಿನ ಅಂಶಗಳು (Perinatal/Neonatal)',
    },
    description: {
      en: 'Birth weight, gestational age, NICU admission, jaundice, oxygenation, and medication factors.',
      hi: 'जन्म का वजन, समय पूर्व जन्म, एनआईसीयू भर्ती, पीलिया, ऑक्सीजन की कमी और दवाएं।',
      kn: 'ಜನನ ತೂಕ, ಅವಧಿಗೆ ಮುನ್ನ ಜನನ, NICU ವಾಸ್ತವ್ಯ, ಕಾಮಾಲೆ ಮತ್ತು ಔಷಧಿಗಳ ವಿವರ.',
    }
  },
  {
    id: 'family_genetic',
    label: {
      en: 'Family & Genetic Factors',
      hi: 'पारिवारिक और आनुवंशिक कारक (Family & Genetic)',
      kn: 'ಕುಟುಂಬ ಮತ್ತು ವಂಶಪಾರಂಪರ್ಯ ಅಂಶಗಳು (Family & Genetic)',
    },
    description: {
      en: 'Inherited hearing impairments, speech-language disorders, and consanguinity.',
      hi: 'परिवार में बहरापन, बोलने में देरी का इतिहास या निकट संबंधी विवाह।',
      kn: 'ಕುಟುಂಬದಲ್ಲಿ ಕಿವುಡುತನ, ಮಾತು ತಡವಾದ ಇತಿಹಾಸ ಮತ್ತು ರಕ್ತ ಸಂಬಂಧಿಕರ ವಿವಾಹ.',
    }
  },
  {
    id: 'prenatal_maternal',
    label: {
      en: 'Prenatal & Maternal Factors',
      hi: 'गर्भावस्था और मातृ स्वास्थ्य कारक (Prenatal & Maternal)',
      kn: 'ಗರ್ಭಾವಸ್ಥೆ ಮತ್ತು ತಾಯಿಯ ಆರೋಗ್ಯದ ಅಂಶಗಳು (Prenatal & Maternal)',
    },
    description: {
      en: 'In utero infections (TORCH group: CMV, Rubella, Toxoplasmosis, Syphilis) and maternal health conditions.',
      hi: 'गर्भावस्था में संक्रमण (टॉर्च ग्रुप, सीएमवी, रूबेला) और मातृ स्वास्थ्य संबंधी समस्याएं।',
      kn: 'ಗರ್ಭಾವಸ್ಥೆಯಲ್ಲಿ ತಾಯಿಗೆ ಸೋಂಕು (TORCH, CMV, ರುಬೆಲ್ಲಾ) ಮತ್ತು ಇತರ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳು.',
    }
  },
  {
    id: 'physical_craniofacial',
    label: {
      en: 'Physical & Craniofacial Findings',
      hi: 'शारीरिक और चेहरे/कान की बनावट (Physical & Craniofacial)',
      kn: 'ಮುಖ ಮತ್ತು ಕಿವಿಯ ದೈಹಿಕ ರಚನೆಯ ಲಕ್ಷಣಗಳು (Physical & Craniofacial)',
    },
    description: {
      en: 'Craniofacial anomalies, cleft lip/palate, ear pits/tags, microtia, and genetic syndromes.',
      hi: 'कटा होंठ/तालू, कान की बनावट में विकृति, छोटे कान या आनुवंशिक सिंड्रोम।',
      kn: 'ಸೀಳು ತುಟಿ/ಅಂಗುಳ, ಕಿವಿಯ ರಚನಾ ದೋಷಗಳು, ಸಣ್ಣ ಕಿವಿ ಅಥವಾ ಸಿಂಡ್ರೋಮ್ ಲಕ್ಷಣಗಳು.',
    }
  },
  {
    id: 'postnatal_ongoing',
    label: {
      en: 'Postnatal & Ongoing Health Factors',
      hi: 'जन्म के बाद के स्वास्थ्य कारक (Postnatal & Ongoing)',
      kn: 'ಜನನದ ನಂತರದ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳು (Postnatal & Ongoing)',
    },
    description: {
      en: 'Meningitis/encephalitis, severe head trauma, recurrent ear infections (otitis media), and neurotoxic exposures.',
      hi: 'दिमागी बुखार (मेनिन्जाइटिस), सिर में गंभीर चोट या बार-बार कान का बहना।',
      kn: 'ಮೆನಿಂಜೈಟಿಸ್ (ಮೆದುಳು ಜ್ವರ), ತಲೆಗೆ ತೀವ್ರ ಪೆಟ್ಟು ಅಥವಾ ಪದೇ ಪದೇ ಕಿವಿ ಸೋರುವುದು.',
    }
  },
  {
    id: 'caregiver_concern',
    label: {
      en: 'Caregiver & Developmental Concerns',
      hi: 'माता-पिता की चिंता और विकासात्मक संकेत (Caregiver Concerns)',
      kn: 'ಪೋಷಕರ ಆತಂಕ ಮತ್ತು ಬೆಳವಣಿಗೆಯ ಲಕ್ಷಣಗಳು (Caregiver Concerns)',
    },
    description: {
      en: 'Parent or professional concern regarding the child\'s hearing, responsiveness to speech, or communicative milestones.',
      hi: 'माता-पिता या डॉक्टर को बच्चे के सुनने, समझने या बोलने में देरी की आशंका।',
      kn: 'ಮಗು ಶಬ್ದಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುತ್ತಿಲ್ಲ ಅಥವಾ ಮಾತು ತಡವಾಗಿದೆ ಎಂಬ ಪೋಷಕರ ಕಳವಳ.',
    }
  }
];

export const HIGH_RISK_REGISTER_ITEMS: HighRiskFactorItem[] = [
  // 1. PERINATAL / NEONATAL
  {
    id: 'hrr_prematurity_vlbw',
    category: 'perinatal_neonatal',
    clinicalTitle: {
      en: 'Prematurity (<37 weeks) or Very Low Birth Weight (<1500 grams)',
      hi: 'समय पूर्व जन्म (<37 सप्ताह) या जन्म के समय बहुत कम वजन (<1500 ग्राम)',
      kn: 'ಅವಧಿಗೆ ಮುನ್ನ ಜನನ (<37 ವಾರಗಳು) ಅಥವಾ ಜನನದ ತೂಕ 1500 ಗ್ರಾಂ ಗಿಂತ ಕಡಿಮೆ',
    },
    plainQuestion: {
      en: 'Was the baby born more than 3 weeks early or did the baby weigh less than 1.5 kg (3.3 lbs) at birth?',
      hi: 'क्या बच्चे का जन्म समय से 3 सप्ताह पहले हुआ था या जन्म के समय वजन 1.5 किलो से कम था?',
      kn: 'ಮಗು ನಿಗದಿತ ಸಮಯಕ್ಕಿಂತ 3 ವಾರ ಮುಂಚಿತವಾಗಿ ಜನಿಸಿತೇ ಅಥವಾ ತೂಕ 1.5 ಕೆ.ಜಿ. ಗಿಂತ ಕಡಿಮೆಯಿತ್ತೇ?',
    },
    explanationTooltip: {
      en: 'Preterm and very low birth weight infants have immature auditory pathways and heightened vulnerability to cochlear hair cell ischemia.',
      hi: 'समय से पहले जन्मे बच्चों के कान के अंदरूनी भाग और श्रवण नसें पूरी तरह परिपक्व नहीं होती हैं।',
      kn: 'ಅವಧಿಗೆ ಮುನ್ನ ಜನಿಸಿದ ಮಕ್ಕಳ ಶ್ರವಣ ನರಗಳು ಅತಿ ಸೂಕ್ಷ್ಮವಾಗಿದ್ದು ಹೆಚ್ಚಿನ ನಿಗಾ ಅಗತ್ಯ.',
    },
    weight: 'moderate',
    jcihRef: 'JCIH 2019 Indicator #2 (Prematurity / VLBW)',
    rbskCategory: 'RBSK Birth Defect & Delay Surveillance Priority',
  },
  {
    id: 'hrr_nicu_stay',
    category: 'perinatal_neonatal',
    clinicalTitle: {
      en: 'NICU Admission > 5 Days (Assisted Ventilation, CPAP, ECMO)',
      hi: 'एनआईसीयू (NICU) में 5 दिन से अधिक रहना (वेंटिलेटर, ऑक्सीजन, विशेष देखभाल)',
      kn: 'NICU ನಲ್ಲಿ 5 ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ಚಿಕಿತ್ಸೆ (ವೆಂಟಿಲೇಟರ್, ಆಕ್ಸಿಜನ್ ಸಪೋರ್ಟ್)',
    },
    plainQuestion: {
      en: 'Did the baby stay in the Newborn Intensive Care Unit (NICU / SNCU) for more than 5 days after birth?',
      hi: 'क्या जन्म के बाद बच्चे को 5 दिन से ज्यादा नर्सरी/एनआईसीयू (NICU) में भर्ती रखना पड़ा था?',
      kn: 'ಜನನದ ನಂತರ ಮಗುವನ್ನು 5 ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ NICU / SNCU ನಲ್ಲಿ ಇರಿಸಲಾಗಿತ್ತೇ?',
    },
    explanationTooltip: {
      en: 'Prolonged NICU stays carry a 10-fold higher incidence of sensorineural hearing loss and auditory neuropathy spectrum disorder (ANSD).',
      hi: 'एनआईसीयू में लंबे समय तक रहने वाले बच्चों में सुनने की कमजोरी या ऑडिटरी न्यूरोपैथी का जोखिम अधिक होता है।',
      kn: 'NICU ನಲ್ಲಿ ದೀರ್ಘಕಾಲದ ವಾಸ್ತವ್ಯವು ಶ್ರವಣ ನರಗಳ ಮೇಲಿನ ಪರಿಣಾಮವನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.',
    },
    weight: 'critical',
    jcihRef: 'JCIH 2019 Indicator #1 (NICU Stay > 5 Days)',
    rbskCategory: 'RBSK High-Risk Newborn Cohort',
  },
  {
    id: 'hrr_hyperbilirubinemia',
    category: 'perinatal_neonatal',
    clinicalTitle: {
      en: 'Severe Neonatal Hyperbilirubinemia (Exchange Transfusion / Intensive Phototherapy)',
      hi: 'जन्म के समय गंभीर पीलिया (फोटोथेरेपी या रक्त बदलने की आवश्यकता - Kernicterus Risk)',
      kn: 'ಜನನದ ಸಮಯದಲ್ಲಿ ತೀವ್ರ ಕಾಮಾಲೆ (ಫೋಟೊಥೆರಪಿ ಅಥವಾ ರಕ್ತ ಬದಲಾವಣೆ ಅಗತ್ಯವಿದ್ದದ್ದು)',
    },
    plainQuestion: {
      en: 'Did your baby have severe jaundice shortly after birth that required special blue light therapy or a blood transfusion?',
      hi: 'क्या जन्म के तुरंत बाद बच्चे को तेज पीलिया हुआ था जिसके लिए नीली बत्ती (फोटोथेरेपी) या खून बदलना पड़ा?',
      kn: 'ಜನನದ ನಂತರ ಮಗುವಿಗೆ ತೀವ್ರ ಕಾಮಾಲೆ ಬಂದು ನೀಲಿ ಬೆಳಕಿನ ಚಿಕಿತ್ಸೆ (ಫೋಟೋಥೆರಪಿ) ನೀಡಲಾಗಿತ್ತೇ?',
    },
    explanationTooltip: {
      en: 'Unconjugated bilirubin can cross the blood-brain barrier and selectively damage the cochlear nuclei and auditory nerve (Auditory Neuropathy).',
      hi: 'अत्यधिक पीलिया मस्तिष्क के श्रवण केंद्रों और सुनने की नसों को प्रभावित कर सकता है।',
      kn: 'ತೀವ್ರ ಕಾಮಾಲೆಯು ಮಗುವಿನ ಶ್ರವಣ ಕೇಂದ್ರಗಳ ಮೇಲೆ ಶಾಶ್ವತ ಪರಿಣಾಮ ಬೀರಬಹುದು.',
    },
    weight: 'critical',
    jcihRef: 'JCIH 2019 Indicator #3 (Hyperbilirubinemia requiring exchange/phototherapy)',
    rbskCategory: 'RBSK Neonatal Jaundice Surveillance',
  },
  {
    id: 'hrr_birth_asphyxia_cry',
    category: 'perinatal_neonatal',
    clinicalTitle: {
      en: 'Birth Asphyxia / Low APGAR (<4 at 1 min, <6 at 5 min) / Delayed Birth Cry (>5 min)',
      hi: 'जन्म के समय सांस लेने में तकलीफ (Birth Asphyxia) या रोने में देरी (Delayed Birth Cry >5 min)',
      kn: 'ಜನನದ ಸಮಯದಲ್ಲಿ ಉಸಿರಾಟದ ತೊಂದರೆ ಅಥವಾ ಜನಿಸಿದ ತಕ್ಷಣ ಅಳದಿರುವುದು (ತಡವಾದ ಅಳು >5 ನಿಮಿಷ)',
    },
    plainQuestion: {
      en: 'Did the baby have trouble breathing at birth or take more than 5 minutes to let out their first cry?',
      hi: 'क्या जन्म के समय बच्चे को सांस लेने में कठिनाई हुई थी या वह तुरंत नहीं रोया था?',
      kn: 'ಹುಟ್ಟಿದ ತಕ್ಷಣ ಮಗು ಅಳಲು ತಡವಾಯಿತೇ ಅಥವಾ ಉಸಿರಾಡಲು ಕಷ್ಟಪಟ್ಟಿತೇ?',
    },
    explanationTooltip: {
      en: 'Hypoxia-ischemia at birth deprives sensitive auditory inner hair cells and neural centers of oxygen.',
      hi: 'जन्म के समय ऑक्सीजन की कमी से सुनने के संवेदनशील अंगों पर बुरा असर पड़ सकता है।',
      kn: 'ಆಮ್ಲಜನಕದ ಕೊರತೆಯು ಕಿವಿಯ ಸೂಕ್ಷ್ಮ ನರಗಳಿಗೆ ಹಾನಿ ಉಂಟುಮಾಡಬಹುದು.',
    },
    weight: 'critical',
    jcihRef: 'JCIH 2019 Indicator #4 (Hypoxic Ischemic Encephalopathy / HIE)',
    rbskCategory: 'RBSK Birth Asphyxia Protocol',
  },
  {
    id: 'hrr_ototoxic_meds',
    category: 'perinatal_neonatal',
    clinicalTitle: {
      en: 'Exposure to Ototoxic Medications (Gentamicin, Amikacin, Tobramycin, Furosemide)',
      hi: 'कान के लिए हानिकारक एंटीबायोटिक दवाओं का प्रयोग (Gentamicin, Amikacin)',
      kn: 'ಕಿವಿ ನರಗಳ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ ಆ್ಯಂಟಿಬಯೋಟಿಕ್ ಔಷಧಗಳ ಬಳಕೆ (ಜೆಂಟಾಮೈಸಿನ್, ಅಮಿಕಾಸಿನ್)',
    },
    plainQuestion: {
      en: 'Was the baby given strong intravenous antibiotic injections (such as Gentamicin or Amikacin) during the first weeks?',
      hi: 'क्या जन्म के बाद बच्चे को तेज एंटीबायोटिक इंजेक्शन (जैसे जेंटामाइसिन या अमिकासिन) दिए गए थे?',
      kn: 'ಜನನದ ನಂತರ ಮಗುವಿಗೆ ಇಂಜೆಕ್ಷನ್ ರೂಪದ ತೀವ್ರ ಆ್ಯಂಟಿಬಯೋಟಿಕ್ ಔಷಧಗಳನ್ನು ನೀಡಲಾಗಿತ್ತೇ?',
    },
    explanationTooltip: {
      en: 'Aminoglycoside antibiotics can cause selective outer hair cell damage in the organ of Corti, particularly if combined with loop diuretics or genetic susceptibility.',
      hi: 'अमीनोไग्लाइकोसाइड एंटीबायोटिक्स कान की सुनने वाली कोशिकाओं को नुकसान पहुंचा सकते हैं।',
      kn: 'ಕೆಲವು ಪ್ರಬಲ ಆ್ಯಂಟಿಬಯೋಟಿಕ್ ಔಷಧಗಳು ಕಿವಿಯ ಒಳ ರಚನೆಗೆ ಹಾನಿ ಮಾಡಬಹುದು.',
    },
    weight: 'moderate',
    jcihRef: 'JCIH 2019 Indicator #5 (Ototoxic Medications)',
    rbskCategory: 'RBSK Medication Surveillance',
  },

  // 2. FAMILY & GENETIC FACTORS
  {
    id: 'hrr_family_hearing_loss',
    category: 'family_genetic',
    clinicalTitle: {
      en: 'Family History of Permanent Childhood Hearing Loss or Speech-Language Delay',
      hi: 'परिवार में बचपन में बहरेपन या बोलने में गंभीर देरी का इतिहास',
      kn: 'ಕುಟುಂಬದಲ್ಲಿ ಬಾಲ್ಯದ ಕಿವುಡುತನ ಅಥವಾ ಮಾತು ತಡವಾದ ಇತಿಹಾಸ',
    },
    plainQuestion: {
      en: 'Does anyone in your close family (parents, siblings, aunts, uncles, grandparents) have permanent hearing loss that started in childhood?',
      hi: 'क्या माता-पिता, भाई-बहन या रिश्तेदारों में किसी को बचपन से सुनने या बोलने की गंभीर समस्या रही है?',
      kn: 'ನಿಮ್ಮ ಹತ್ತಿರದ ಕುಟುಂಬದವರಲ್ಲಿ ಯಾರಾದರೂ ಬಾಲ್ಯದಲ್ಲೇ ಕಿವುಡುತನ ಅಥವಾ ಮಾತಿನ ತೊಂದರೆ ಹೊಂದಿದ್ದಾರೆಯೇ?',
    },
    explanationTooltip: {
      en: 'Over 50% of congenital childhood hearing loss is genetic in origin (autosomal recessive like Connexin 26/GJB2 or dominant).',
      hi: 'लगभग 50% बचपन का बहरापन आनुवंशिक (जींस) कारणों से होता है।',
      kn: 'ಶೇಕಡಾ 50ಕ್ಕೂ ಹೆಚ್ಚು ಬಾಲ್ಯದ ಶ್ರವಣ ದೋಷಗಳು ವಂಶಪಾರಂಪರ್ಯವಾಗಿ ಬರುತ್ತವೆ.',
    },
    weight: 'critical',
    jcihRef: 'JCIH 2019 Indicator #6 (Family History of Childhood Hearing Loss)',
    rbskCategory: 'RBSK Genetic Risk Registry',
  },
  {
    id: 'hrr_consanguinity',
    category: 'family_genetic',
    clinicalTitle: {
      en: 'Consanguineous Marriage of Parents (First-cousin / Uncle-niece union)',
      hi: 'माता-पिता का निकट संबंधी विवाह (कौटुंबिक विवाह / Consanguinity)',
      kn: 'ಪೋಷಕರ ನಡುವೆ ರಕ್ತ ಸಂಬಂಧಿಕರ ವಿವಾಹ (ಮಾವ-ಸೊಸೆ ಅಥವಾ ಸೋದರ ಸಂಬಂಧಿಕರ ಮದುವೆ)',
    },
    plainQuestion: {
      en: 'Are the baby\'s biological parents blood-related to each other (such as first cousins or uncle-niece)?',
      hi: 'क्या बच्चे के माता-पिता आपस में रिश्तेदार हैं (जैसे चचेरे/ममेरे भाई-बहन या मामा-भांजी)?',
      kn: 'ಮಗುವಿನ ತಂದೆ-ತಾಯಿ ಪರಸ್ಪರ ರಕ್ತ ಸಂಬಂಧಿಕರೇ (ಉದಾ: ಸೋದರ ಸಂಬಂಧಿಕರು ಅಥವಾ ಮಾವ-ಸೊಸೆ)?',
    },
    explanationTooltip: {
      en: 'Major AIISH & Indian epidemiology marker: Consanguinity significantly elevates the expression of autosomal recessive nonsyndromic hearing loss.',
      hi: 'AIISH भारतीय शोध: रिश्तेदारों में शादी होने से आनुवंशिक बहरेपन की संभावना कई गुना बढ़ जाती है।',
      kn: 'AIISH ಸಂಶೋಧನೆ: ರಕ್ತ ಸಂಬಂಧಿಕರ ಮದುವೆಯಿಂದ ಹುಟ್ಟುವ ಮಕ್ಕಳಲ್ಲಿ ಶ್ರವಣ ದೋಷದ ಅಪಾಯ ಹೆಚ್ಚು.',
    },
    weight: 'moderate',
    jcihRef: 'AIISH Indian Pediatric Risk Protocol / JCIH Genetic Risk',
    rbskCategory: 'RBSK Consanguinity Risk Registry',
  },

  // 3. PRENATAL & MATERNAL FACTORS
  {
    id: 'hrr_maternal_torch',
    category: 'prenatal_maternal',
    clinicalTitle: {
      en: 'Maternal In Utero TORCH Infection (Cytomegalovirus CMV, Rubella, Toxoplasmosis, Syphilis, Herpes, Zika)',
      hi: 'गर्भावस्था में मातृ संक्रमण (TORCH - सीएमवी, रूबेला, टॉक्सोप्लाज्मोसिस, हर्पीस)',
      kn: 'ಗರ್ಭಾವಸ್ಥೆಯಲ್ಲಿ ತಾಯಿಗೆ ಸೋಂಕು (TORCH - CMV, ರುಬೆಲ್ಲಾ, ಟಾಕ್ಸೊಪ್ಲಾಸ್ಮೋಸಿಸ್)',
    },
    plainQuestion: {
      en: 'During the pregnancy, did the mother test positive for infections like CMV, Rubella (German measles), Toxoplasmosis, or Herpes?',
      hi: 'क्या गर्भावस्था के दौरान माँ को रूबेला, सीएमवी (CMV) या टॉर्च (TORCH) जैसे किसी संक्रमण की पुष्टि हुई थी?',
      kn: 'ಗರ್ಭಿಣಿಯಾಗಿದ್ದಾಗ ತಾಯಿಗೆ ರುಬೆಲ್ಲಾ, CMV ಅಥವಾ ಯಾವುದೇ ತೀವ್ರ ವೈರಲ್ ಸೋಂಕು ಇತ್ತೇ?',
    },
    explanationTooltip: {
      en: 'Congenital Cytomegalovirus (cCMV) is the leading nongenetic cause of sensorineural hearing loss and is frequently progressive or late-onset.',
      hi: 'सीएमवी और रूबेला संक्रमण बच्चे के कान के आंतरिक विकास को रोक सकते हैं और धीरे-धीरे बहरापन बढ़ा सकते हैं।',
      kn: 'CMV ಮತ್ತು ರುಬೆಲ್ಲಾ ಸೋಂಕುಗಳು ಕಾಲಕ್ರಮೇಣ ಶ್ರವಣ ದೋಷವನ್ನು ಉಂಟುಮಾಡಬಹುದು.',
    },
    weight: 'critical',
    jcihRef: 'JCIH 2019 Indicator #7 (In Utero Infections)',
    rbskCategory: 'RBSK Congenital Infection Registry',
  },

  // 4. PHYSICAL & CRANIOFACIAL FINDINGS
  {
    id: 'hrr_craniofacial_ear_anomalies',
    category: 'physical_craniofacial',
    clinicalTitle: {
      en: 'Craniofacial Anomalies, Cleft Lip/Palate, Microtia, Atresia, or Ear Pits/Tags',
      hi: 'चेहरे या कान की जन्मजात बनावट में असामान्यता (कटा होंठ/तालू, छोटा कान, कान के पास मस्सा या छेद)',
      kn: 'ಮುಖ ಅಥವಾ ಕಿವಿಯ ಹುಟ್ಟು ವಿಕಲಾಂಗತೆ (ಸೀಳು ತುಟಿ/ಅಂಗುಳ, ಸಣ್ಣ ಕಿವಿ, ಕಿವಿಯ ರಂಧ್ರ ಮುಚ್ಚಿರುವುದು)',
    },
    plainQuestion: {
      en: 'Does the baby have any visible differences in their ears (small ears, ear tags, closed ear canal) or a cleft lip/cleft palate?',
      hi: 'क्या बच्चे के कान की बनावट अलग है (छोटे कान, कान पर मस्सा/छेद) या होंठ/तालू कटा हुआ है?',
      kn: 'ಮಗುವಿನ ಕಿವಿಯ ಆಕಾರದಲ್ಲಿ ವ್ಯತ್ಯಾಸವಿದೆಯೇ (ಕಿವಿ ಚಿಕ್ಕದಾಗಿರುವುದು, ಕಿವಿಯ ಬಳಿ ಗುಳ್ಳೆ) ಅಥವಾ ಸೀಳು ತುಟಿ/ಅಂಗುಳವಿದೆಯೇ?',
    },
    explanationTooltip: {
      en: 'Craniofacial anomalies involve shared embryological branchial arch development, predisposing to conductive and structural middle/inner ear pathology.',
      hi: 'चेहरे और कान का विकास एक ही भ्रूणीय संरचना से होता है, इसलिए तालु या कान की बनावट में अंतर से सुनने में रुकावट आ सकती है।',
      kn: 'ಮುಖ ಮತ್ತು ಕಿವಿಯ ನರಗಳು ಒಂದಕ್ಕೊಂದು ಸಂಬಂಧ ಹೊಂದಿದ್ದು ಶ್ರವಣ ಪರೀಕ್ಷೆ ಅನಿವಾರ್ಯ.',
    },
    weight: 'critical',
    jcihRef: 'JCIH 2019 Indicator #8 (Craniofacial Anomalies)',
    rbskCategory: 'RBSK Visible Birth Defects Registry',
  },
  {
    id: 'hrr_syndromic_features',
    category: 'physical_craniofacial',
    clinicalTitle: {
      en: 'Syndromic Features / Genetic Syndromes Associated with Hearing or Developmental Delay (Down Syndrome, Treacher Collins, Waardenburg)',
      hi: 'आनुवंशिक सिंड्रोम के लक्षण (डाउन सिंड्रोम, वॉर्डनबर्ग सिंड्रोम आदि)',
      kn: 'ಆನುವಂಶಿಕ ಸಿಂಡ್ರೋಮ್ ಲಕ್ಷಣಗಳು (ಡೌನ್ ಸಿಂಡ್ರೋಮ್, ವಾರ್ಡನ್‌ಬರ್ಗ್ ಸಿಂಡ್ರೋಮ್)',
    },
    plainQuestion: {
      en: 'Has a doctor diagnosed or suspected a genetic syndrome (such as Down syndrome) in your baby?',
      hi: 'क्या डॉक्टर ने बच्चे में किसी सिंड्रोम (जैसे डाउन सिंड्रोम) की पहचान या आशंका जताई है?',
      kn: 'ಮಗುವಿಗೆ ಯಾವುದಾದರೂ ಸಿಂಡ್ರೋಮ್ (ಉದಾ: ಡೌನ್ ಸಿಂಡ್ರೋಮ್) ಇರುವುದಾಗಿ ವೈದ್ಯರು ಹೇಳಿದ್ದಾರೆಯೇ?',
    },
    explanationTooltip: {
      en: 'Over 400 genetic syndromes include hearing loss or communication delay as a primary component (e.g. Down syndrome: chronic Eustachian tube dysfunction & middle ear effusion).',
      hi: 'डाउन सिंड्रोम आदि में कान की नली में बार-बार पानी भरने और सुनने में कमी आने की संभावना बहुत अधिक होती है।',
      kn: 'ಡೌನ್ ಸಿಂಡ್ರೋಮ್‌ನಂತಹ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ಕಿವಿಯ ಸೋಂಕು ಮತ್ತು ಶ್ರವಣ ದೋಷ ಸಾಮಾನ್ಯ.',
    },
    weight: 'critical',
    jcihRef: 'JCIH 2019 Indicator #9 (Syndromes Associated with Hearing Loss)',
    rbskCategory: 'RBSK Syndromic Surveillance',
  },

  // 5. POSTNATAL & ONGOING FACTORS
  {
    id: 'hrr_meningitis_encephalitis',
    category: 'postnatal_ongoing',
    clinicalTitle: {
      en: 'Confirmed Bacterial or Viral Meningitis / Encephalitis',
      hi: 'दिमागी बुखार (बैक्टीरियल या वायरल मेनिन्जाइटिस / एन्सेफलाइटिस)',
      kn: 'ದೃಢಪಟ್ಟ ಬ್ಯಾಕ್ಟೀರಿಯಲ್ ಅಥವಾ ವೈರಲ್ ಮೆನಿಂಜೈಟಿಸ್ (ಮೆದುಳು ಜ್ವರ)',
    },
    plainQuestion: {
      en: 'Has your baby or child ever been hospitalized with brain fever or meningitis?',
      hi: 'क्या बच्चे को कभी दिमागी बुखार (मेनिन्जाइटिस) के कारण अस्पताल में भर्ती होना पड़ा है?',
      kn: 'ಮಗುವಿಗೆ ಎಂದಾದರೂ ಮೆದುಳು ಜ್ವರ (ಮೆನಿಂಜೈಟಿಸ್) ಬಂದು ಆಸ್ಪತ್ರೆಗೆ ದಾಖಲಾಗಿದ್ದಿರಾ?',
    },
    explanationTooltip: {
      en: 'Bacterial meningitis (e.g. Streptococcus pneumoniae) can cause rapid cochlear ossification and profound bilateral sensorineural deafness. Urgent audiology is required.',
      hi: 'मेनिन्जाइटिस के बाद कान का अंदरूनी हिस्सा तेजी से खराब हो सकता है, इसलिए तत्काल श्रवण जांच अति आवश्यक है।',
      kn: 'ಮೆನಿಂಜೈಟಿಸ್ ನಂತರ ಶ್ರವಣ ನರಗಳು ತೀವ್ರವಾಗಿ ಹಾನಿಗೊಳಗಾಗಬಹುದು, ತಕ್ಷಣ ಆಡಿಯಾಲಜಿಸ್ಟ್ ತಪಾಸಣೆ ಅಗತ್ಯ.',
    },
    weight: 'critical',
    jcihRef: 'JCIH 2019 Indicator #10 (Postnatal Infections / Meningitis)',
    rbskCategory: 'RBSK CNS Infection Protocol',
  },
  {
    id: 'hrr_recurrent_otitis_media',
    category: 'postnatal_ongoing',
    clinicalTitle: {
      en: 'Recurrent Otitis Media with Effusion / Persistent Middle Ear Discharge (>3 Months)',
      hi: 'बार-बार कान बहना या मध्य कान में 3 महीने से अधिक समय तक तरल जमा रहना (ओटाइटिस मीडिया)',
      kn: 'ಪದೇ ಪದೇ ಕಿವಿ ಸೋರುವುದು ಅಥವಾ ಕಿವಿಯಲ್ಲಿ 3 ತಿಂಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ನೀರು ತುಂಬಿಕೊಳ್ಳುವುದು (ಮಧ್ಯಕಿವಿಯ ಸೋಂಕು)',
    },
    plainQuestion: {
      en: 'Does your child have frequent ear infections, ear discharge, or fluid behind the eardrum lasting more than 3 months?',
      hi: 'क्या बच्चे के कान में बार-बार संक्रमण होता है, कान से पानी/मवाद बहता है या कान में दर्द रहता है?',
      kn: 'ಮಗುವಿನ ಕಿವಿಯಿಂದ ಪದೇ ಪದೇ ನೀರು/ಕೀವು ಸೋರುತ್ತದೆಯೇ ಅಥವಾ ಕಿವಿಯ ಸೋಂಕು ಕಾಡುತ್ತಿದೆಯೇ?',
    },
    explanationTooltip: {
      en: 'Chronic Otitis Media with Effusion (OME) creates a fluctuating 20–40 dB conductive hearing loss during critical speech sound learning windows.',
      hi: 'कान में पानी भरा रहने से बच्चे को आवाजें धीमी और अस्पष्ट सुनाई देती हैं जिससे बोलने में देरी होती है।',
      kn: 'ಕಿವಿಯಲ್ಲಿ ನೀರು ತುಂಬುವುದರಿಂದ ಶಬ್ದ ಸರಿಯಾಗಿ ಕೇಳಿಸದೆ ಮಾತು ಕಲಿಯಲು ತಡವಾಗುತ್ತದೆ.',
    },
    weight: 'moderate',
    jcihRef: 'JCIH 2019 Indicator #11 (Recurrent / Persistent Otitis Media with Effusion)',
    rbskCategory: 'RBSK Otitis Media Protocol',
  },

  // 6. CAREGIVER & DEVELOPMENTAL CONCERNS
  {
    id: 'hrr_caregiver_concern',
    category: 'caregiver_concern',
    clinicalTitle: {
      en: 'Caregiver or Clinical Concern Regarding Hearing, Speech, Language, or Developmental Progression',
      hi: 'माता-पिता या चिकित्सक की चिंता (बच्चे के सुनने, समझने या बोलने में देरी की आशंका)',
      kn: 'ಮಗುವಿನ ಶ್ರವಣ, ಮಾತು ಅಥವಾ ಬೆಳವಣಿಗೆಯ ಬಗ್ಗೆ ಪೋಷಕರು ಅಥವಾ ವೈದ್ಯರ ಆತಂಕ',
    },
    plainQuestion: {
      en: 'Do you, your family, or your doctor have any gut feeling or concern that your child is not hearing normally, not responding to voices, or talking late?',
      hi: 'क्या आपको या आपके डॉक्टर को लगता है कि बच्चा सामान्य रूप से सुन नहीं रहा है या बोलने में पीछे है?',
      kn: 'ಮಗು ಸರಿಯಾಗಿ ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿಲ್ಲ ಅಥವಾ ಮಾತನಾಡಲು ತಡಮಾಡುತ್ತಿದೆ ಎಂಬ ಕಳವಳ ನಿಮಗಿದೆಯೇ?',
    },
    explanationTooltip: {
      en: 'Caregiver suspicion of hearing loss is validated as an independent, highly predictive clinical marker across pediatric audiology research.',
      hi: 'माता-पिता का अवलोकन अत्यधिक सटीक होता है और इसे कभी नजरअंदाज नहीं किया जाना चाहिए।',
      kn: 'ಪೋಷಕರ ಕಳವಳವು ಅತ್ಯಂತ ನಿಖರವಾದ ಮುನ್ಸೂಚನೆಯಾಗಿದ್ದು ಇದನ್ನು ನಿರ್ಲಕ್ಷಿಸಬಾರದು.',
    },
    weight: 'moderate',
    jcihRef: 'JCIH 2019 Indicator #12 (Caregiver Concern)',
    rbskCategory: 'RBSK Early Identification Mandate',
  }
];

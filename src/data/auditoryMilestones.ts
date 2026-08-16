import { AuditoryMaturationStage, Language } from '@/types';

export const AUDITORY_MATURATION_STAGES: AuditoryMaturationStage[] = [
  {
    ageRangeMonths: '0–3 Months',
    minMonths: 0,
    maxMonths: 3,
    soundLocalizationLevel: {
      en: 'Startle Reflex & Eye Widening (No direct localization yet)',
      hi: 'चौंकने की प्रतिक्रिया और आँखों का फैलना (सीधा स्थानीयकरण नहीं)',
      kn: 'ಬೆಚ್ಚಿಬೀಳುವ ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ಕಣ್ಣು ಅರಳಿಸುವುದು (ನೇರ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಇಲ್ಲ)',
    },
    thresholdSoundField: '65–75 dB HL',
    behavioralResponse: {
      en: 'Startle reflex (Moro reflex) or eye-blink (auropalpebral reflex) to sudden loud sounds; quiets or increases sucking response to mother\'s voice; rudimentary head turn towards broad sound source.',
      hi: 'अचानक तेज आवाज पर चौंकना या पलकें झपकाना; माँ की आवाज सुनकर शांत होना या दूध पीना तेज करना; आवाज की दिशा में हल्का सा सिर हिलाना।',
      kn: 'ಧಿಡೀರ್ ಶಬ್ದಕ್ಕೆ ಬೆಚ್ಚಿಬೀಳುವುದು ಅಥವಾ ಕಣ್ಣು ಮಿಟುಕಿಸುವುದು; ತಾಯಿಯ ಧ್ವನಿ ಕೇಳಿ ಶಾಂತವಾಗುವುದು; ಶಬ್ದದ ಕಡೆಗೆ ತಲೆಯನ್ನು ಸ್ವಲ್ಪ ಚಲಿಸುವುದು.',
    },
    northernDownsRef: 'Northern & Downs (2002/2014) - Stage I (Reflexive Auditory Behaviors)',
    aiishClinicalNotes: {
      en: 'AIISH Screening Marker: Absence of Moro reflex/auropalpebral reflex to loud claps (65+ dB) warrants immediate OAE/AABR newborn screening verification.',
      hi: 'AIISH स्क्रीनिंग मानक: 65+ dB की ताली या आवाज पर चौंकने की प्रतिक्रिया न होना OAE/AABR श्रवण जांच की तत्काल सिफारिश करता है।',
      kn: 'AIISH ಸ್ಕ್ರೀನಿಂಗ್ ಮಾನದಂಡ: ಜೋರಾದ ಶಬ್ದಕ್ಕೆ ಯಾವುದೇ ಪ್ರತಿಕ್ರಿಯೆ ಇಲ್ಲದಿದ್ದರೆ ತಕ್ಷಣ OAE/AABR ಶ್ರವಣ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.',
    },
    erberHierarchyLevel: 'Detection',
  },
  {
    ageRangeMonths: '3–4 Months',
    minMonths: 3,
    maxMonths: 4,
    soundLocalizationLevel: {
      en: 'Rudimentary Horizontal Turning (Wobbling search)',
      hi: 'क्षैतिज दिशा में सिर का प्रारंभिक घुमाव (खोजने की कोशिश)',
      kn: 'ಶಬ್ದದ ಕಡೆಗೆ ಅಸ್ಪಷ್ಟ ತಲೆ ತಿರುಗಿಸುವಿಕೆ',
    },
    thresholdSoundField: '50–60 dB HL',
    behavioralResponse: {
      en: 'Begins rudimentary head turn on the horizontal plane toward the sound source, but response may be slow, wobbling, or eye-search only.',
      hi: 'आवाज की तरफ क्षैतिज तल पर सिर घुमाने की शुरुआत; आंखें घुमाकर आवाज के स्रोत को खोजना।',
      kn: 'ಧ್ವನಿ ಬರುವ ಕಡೆಗೆ ಅಡ್ಡಲಾಗಿ ತಲೆ ತಿರುಗಿಸಲು ಆರಂಭಿಸುತ್ತದೆ; ಕಣ್ಣುಗಳಿಂದ ಶಬ್ದದ ಮೂಲವನ್ನು ಹುಡುಕುತ್ತದೆ.',
    },
    northernDownsRef: 'Northern & Downs (2002/2014) - Stage II (Rudimentary Head Turning)',
    aiishClinicalNotes: {
      en: 'Infant responds selectively to caregiver vocal prosody (infant-directed speech/motherese). Consistent cessation of activity upon sound presentation.',
      hi: 'शिशु माता-पिता की आवाज के उतार-चढ़ाव पर ध्यान देता है और आवाज सुनकर अपनी हलचल रोक देता है।',
      kn: 'ಮಗುವಿನ ಧ್ವನಿಯ ಏರಿಳಿತಗಳಿಗೆ ಸ್ಪಂದಿಸುತ್ತದೆ ಮತ್ತು ಶಬ್ದ ಕೇಳಿದಾಗ ಆಟ ನಿಲ್ಲಿಸಿ ಆಲಿಸುತ್ತದೆ.',
    },
    erberHierarchyLevel: 'Detection',
  },
  {
    ageRangeMonths: '4–7 Months',
    minMonths: 4,
    maxMonths: 7,
    soundLocalizationLevel: {
      en: 'Direct Horizontal Localization (Side to Side)',
      hi: 'सीधा क्षैतिज स्थानीयकरण (दाएं-बाएं सीधा मुड़ना)',
      kn: 'ನೇರ ಅಡ್ಡ ಧ್ವನಿ ಸ್ಥಳೀಕರಣ (ಎಡ-ಬಲಕ್ಕೆ ತಕ್ಷಣ ತಿರುಗುವುದು)',
    },
    thresholdSoundField: '40–50 dB HL',
    behavioralResponse: {
      en: 'Direct, brisk head turn on the horizontal plane toward a lateral sound source (left or right). Can find sounds placed at ear level promptly.',
      hi: 'कान के स्तर पर आने वाली आवाज की दिशा में (दाएं या बाएं) तेजी से और सीधे सिर घुमाना।',
      kn: 'ಕಿವಿ ಮಟ್ಟದಲ್ಲಿ ಬರುವ ಶಬ್ದಕ್ಕೆ ತಕ್ಷಣ ಎಡ ಅಥವಾ ಬಲಕ್ಕೆ ನೇರವಾಗಿ ತಲೆ ತಿರುಗಿಸುತ್ತದೆ.',
    },
    northernDownsRef: 'Northern & Downs (2002/2014) - Stage III (Direct Lateral Localization)',
    aiishClinicalNotes: {
      en: 'Critical AIISH landmark: Sound localization across both ears should be symmetrical. Unilateral failure suggests unilateral hearing loss or persistent otitis media with effusion.',
      hi: 'AIISH महत्वपूर्ण मील का पत्थर: दोनों कानों से आवाज पहचानना समान होना चाहिए। एक तरफ से न पहचानना एकतरफा बहरेपन का संकेत हो सकता है।',
      kn: 'AIISH ಪ್ರಮುಖ ಮೈಲಿಗಲ್ಲು: ಎರಡೂ ಕಿವಿಗಳಿಂದ ಶಬ್ದ ಗುರುತಿಸುವುದು ಸಮಾನವಾಗಿರಬೇಕು. ಒಂದು ಕಡೆ ಮಾತ್ರ ಪ್ರತಿಕ್ರಿಯಿಸದಿದ್ದರೆ ವೈದ್ಯಕೀಯ ತಪಾಸಣೆ ಅಗತ್ಯ.',
    },
    erberHierarchyLevel: 'Discrimination',
  },
  {
    ageRangeMonths: '7–9 Months',
    minMonths: 7,
    maxMonths: 9,
    soundLocalizationLevel: {
      en: 'Direct Horizontal + Indirect Downward Localization',
      hi: 'सीधा क्षैतिज + अप्रत्यक्ष नीचे की ओर स्थानीयकरण',
      kn: 'ನೇರ ಅಡ್ಡ + ಪರೋಕ್ಷ ಕೆಳಮುಖ ಧ್ವನಿ ಸ್ಥಳೀಕರಣ',
    },
    thresholdSoundField: '30–40 dB HL',
    behavioralResponse: {
      en: 'Direct localization to sounds on the horizontal plane; localizes sounds below ear level indirectly by first turning laterally, then looking downward.',
      hi: 'क्षैतिज तल पर सीधी आवाज पहचानना; नीचे से आने वाली आवाज को पहले साइड में देखकर फिर नीचे देखकर खोजना।',
      kn: 'ಅಡ್ಡಲಾಗಿ ಬರುವ ಶಬ್ದವನ್ನು ನೇರವಾಗಿ ಮತ್ತು ಕೆಳಗಿನಿಂದ ಬರುವ ಶಬ್ದವನ್ನು ಮೊದಲು ಪಕ್ಕಕ್ಕೆ ನೋಡಿ ನಂತರ ಕೆಳಗೆ ನೋಡಿ ಗುರುತಿಸುತ್ತದೆ.',
    },
    northernDownsRef: 'Northern & Downs (2002/2014) - Stage IV (Indirect Downward Localization)',
    aiishClinicalNotes: {
      en: 'Infant responds to environmental sounds (doorbell, rattle, utensils) and turns briskly when name is called in quiet room.',
      hi: 'घर की दैनिक आवाजों (घंटी, खिलौना, बर्तन) पर प्रतिक्रिया देता है और शांत कमरे में अपना नाम सुनकर मुड़ता है।',
      kn: 'ಮನೆಯ ಪರಿಸರದ ಶಬ್ದಗಳಿಗೆ (ಬೆಲ್, ಜಿಂಗಲ್, ಪಾತ್ರೆಗಳ ಶಬ್ದ) ಸ್ಪಂದಿಸುತ್ತದೆ ಮತ್ತು ಹೆಸರು ಕರೆದಾಗ ತಿರುಗಿ ನೋಡುತ್ತದೆ.',
    },
    erberHierarchyLevel: 'Discrimination',
  },
  {
    ageRangeMonths: '9–13 Months',
    minMonths: 9,
    maxMonths: 13,
    soundLocalizationLevel: {
      en: 'Direct Downward + Indirect Upward Localization',
      hi: 'सीधा नीचे + अप्रत्यक्ष ऊपर की ओर स्थानीयकरण',
      kn: 'ನೇರ ಕೆಳಮುಖ + ಪರೋಕ್ಷ ಮೇಲ್ಮುಖ ಧ್ವನಿ ಸ್ಥಳೀಕರಣ',
    },
    thresholdSoundField: '25–35 dB HL',
    behavioralResponse: {
      en: 'Directly turns head sideways and downwards toward sounds below ear level; localizes sounds above ear level indirectly (turns side, then glances up).',
      hi: 'नीचे से आने वाली आवाज को तुरंत नीचे देखकर पहचानना; ऊपर की आवाज को पहले साइड फिर ऊपर देखकर खोजना।',
      kn: 'ಕೆಳಗಿನಿಂದ ಬರುವ ಶಬ್ದವನ್ನು ನೇರವಾಗಿ ಕೆಳಗೆ ನೋಡಿ ಗುರುತಿಸುತ್ತದೆ; ಮೇಲಿನ ಶಬ್ದವನ್ನು ಪಕ್ಕಕ್ಕೆ ನೋಡಿ ನಂತರ ಮೇಲೆ ನೋಡಿ ಹುಡುಕುತ್ತದೆ.',
    },
    northernDownsRef: 'Northern & Downs (2002/2014) - Stage V (Direct Downward & Indirect Upward)',
    aiishClinicalNotes: {
      en: 'Auditory identification stage emerges: Recognizes familiar family members\' names and common words ("no-no", "bye-bye", "doodh/haalu") without visual cues.',
      hi: 'ध्वनि पहचान का स्तर: बिना इशारे के सामान्य शब्द ("नहीं", "बाय-बाय", "दूध") सुनकर पहचानना।',
      kn: 'ಧ್ವನಿ ಗುರುತಿಸುವ ಹಂತ: ಸನ್ನೆಗಳಿಲ್ಲದೆ ಪರಿಚಿತ ಶಬ್ದಗಳನ್ನು ("ಬೇಡ", "ಟಾಟಾ", "ಹಾಲು") ಆಲಿಸಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.',
    },
    erberHierarchyLevel: 'Identification',
  },
  {
    ageRangeMonths: '13–16 Months',
    minMonths: 13,
    maxMonths: 16,
    soundLocalizationLevel: {
      en: 'Direct Localization in Any Plane (Side, Down, Up)',
      hi: 'सभी दिशाओं में सीधा स्थानीयकरण (दाएं-बाएं, नीचे, ऊपर)',
      kn: 'ಎಲ್ಲಾ ದಿಕ್ಕುಗಳಲ್ಲೂ ನೇರ ಧ್ವನಿ ಸ್ಥಳೀಕರಣ (ಎಡ, ಬಲ, ಕೆಳಗೆ, ಮೇಲೆ)',
    },
    thresholdSoundField: '25–30 dB HL',
    behavioralResponse: {
      en: 'Directly and accurately localizes sounds at, below, or above ear level in any spatial plane at near-normal soft conversation thresholds.',
      hi: 'कान के स्तर पर, नीचे या ऊपर किसी भी दिशा से आने वाली धीमी आवाज को भी तुरंत और सीधे पहचानना।',
      kn: 'ಯಾವುದೇ ದಿಕ್ಕಿನಿಂದ (ಮೇಲೆ, ಕೆಳಗೆ, ಪಕ್ಕದಲ್ಲಿ) ಬರುವ ಮೃದುವಾದ ಧ್ವನಿಯನ್ನು ತಕ್ಷಣ ನಿಖರವಾಗಿ ಗುರುತಿಸುತ್ತದೆ.',
    },
    northernDownsRef: 'Northern & Downs (2002/2014) - Stage VI (Direct Full Localization)',
    aiishClinicalNotes: {
      en: 'Auditory-motor integration: Points to or looks at objects/people when named ("Where is ball / ಚೆಂಡು ಎಲ್ಲಿದೆ / गेंद कहाँ है?").',
      hi: 'श्रवण-क्रिया समन्वय: नाम लेने पर वस्तु या व्यक्ति की तरफ इशारा करना या देखना ("गेंद कहाँ है?")।',
      kn: 'ಶ್ರವಣ-ಚಲನಾ ಸಮನ್ವಯ: ಹೆಸರಿಸಿದಾಗ ವಸ್ತು ಅಥವಾ ವ್ಯಕ್ತಿಯನ್ನು ಬೆರಳು ಮಾಡಿ ತೋರಿಸುತ್ತದೆ ("ಚೆಂಡು ಎಲ್ಲಿದೆ?").',
    },
    erberHierarchyLevel: 'Identification',
  },
  {
    ageRangeMonths: '16–24 Months',
    minMonths: 16,
    maxMonths: 24,
    soundLocalizationLevel: {
      en: 'Full 3D Spatial Localization & Soft Sound Discrimination',
      hi: 'पूर्ण 3D स्थानिक पहचान और धीमी फुसफुसाहट को सुनना',
      kn: 'ಸಂಪೂರ್ಣ 3D ಧ್ವನಿ ಸ್ಥಳೀಕರಣ ಮತ್ತು ಪಿಸುಮಾತುಗಳನ್ನು ಗ್ರಹಿಸುವುದು',
    },
    thresholdSoundField: '20–25 dB HL',
    behavioralResponse: {
      en: 'Direct, rapid localization to very soft sounds (whispers, rustling paper) at any angle or distance in a typical room. Follows simple auditory instructions without gestures.',
      hi: 'कमरे में किसी भी कोने से धीमी फुसफुसाहट या कागज की सरसराहट को तुरंत पहचानना। बिना इशारों के केवल सुनकर निर्देश मानना।',
      kn: 'ಮನೆಯ ಯಾವುದೇ ಮೂಲೆಯಿಂದ ಬರುವ ಸಣ್ಣ ಪಿಸುಮಾತುಗಳನ್ನು ತಕ್ಷಣ ಗುರುತಿಸುವುದು. ಸನ್ನೆಗಳಿಲ್ಲದೆ ಕೇವಲ ಶ್ರವಣ ಸೂಚನೆಗಳನ್ನು ಪಾಲಿಸುವುದು.',
    },
    northernDownsRef: 'Northern & Downs (2002/2014) - Stage VII (Mature Sound Localization)',
    aiishClinicalNotes: {
      en: 'Erber Comprehension level: Discriminates fine acoustic contrasts in speech (e.g., "p/b", "t/d" word pairs) and comprehends multi-word spoken commands.',
      hi: 'अरबर बोध स्तर: मिलती-जुलती ध्वनियों में अंतर पहचानना और बहु-शब्द निर्देशों को सुनकर समझना।',
      kn: 'ಶ್ರವಣ ಗ್ರಹಿಕೆ ಹಂತ: ಸೂಕ್ಷ್ಮ ಧ್ವನಿ ವ್ಯತ್ಯಾಸಗಳನ್ನು ಗುರುತಿಸುವುದು ಮತ್ತು ವಾಕ್ಯ ರೂಪದ ಸೂಚನೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು.',
    },
    erberHierarchyLevel: 'Comprehension',
  },
  {
    ageRangeMonths: '24–36+ Months',
    minMonths: 24,
    maxMonths: 72,
    soundLocalizationLevel: {
      en: 'Mature Auditory Figure-Ground & Acoustic Comprehension',
      hi: 'परिपक्व श्रवण बोध और पृष्ठभूमि शोर में बातचीत सुनना',
      kn: 'ಪರಿಪಕ್ವ ಶ್ರವಣ ಗ್ರಹಿಕೆ ಮತ್ತು ಗದ್ದಲದ ನಡುವೆ ಆಲಿಸುವ ಸಾಮರ್ಥ್ಯ',
    },
    thresholdSoundField: '15–20 dB HL',
    behavioralResponse: {
      en: 'Understands speech in moderate background noise (e.g. TV on or in family gatherings); listens to multi-sentence stories; recalls auditory sequences (2-3 items).',
      hi: 'हल्के शोर में भी बात समझना (जैसे टीवी चलने पर); छोटी कहानियां सुनना और याद रखना।',
      kn: 'ಟಿವಿ ಅಥವಾ ಜನರ ಗದ್ದಲದ ನಡುವೆಯೂ ಮಾತನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಗ್ರಹಿಸುವುದು; ಸಣ್ಣ ಕಥೆಗಳನ್ನು ಆಲಿಸಿ ಅರ್ಥೈಸಿಕೊಳ್ಳುವುದು.',
    },
    northernDownsRef: 'Northern & Downs (2002/2014) - Adult-Like Auditory Processing Maturation',
    aiishClinicalNotes: {
      en: 'AIISH Speech-in-Noise norm: Child can participate in group conversations without repeating questions. Consistent failure in noisy environments may suggest Auditory Processing Disorder (APD) or glue ear.',
      hi: 'AIISH शोर में बातचीत मानक: बिना बार-बार पूछे समूह में बातचीत में भाग लेना। शोर में बार-बार न समझ पाना APD या कान में पानी भरने का संकेत हो सकता है।',
      kn: 'AIISH ಗದ್ದಲದಲ್ಲಿ ಮಾತು ಗ್ರಹಿಸುವ ಮಾನದಂಡ: ಯಾವುದೇ ಗೊಂದಲವಿಲ್ಲದೆ ಮಾತುಕತೆಯಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳುವುದು. ಗದ್ದಲದಲ್ಲಿ ಪದೇ ಪದೇ ಅರ್ಥವಾಗದಿದ್ದರೆ ತಜ್ಞರ ಸಲಹೆ ಪಡೆಯಿರಿ.',
    },
    erberHierarchyLevel: 'Comprehension',
  }
];

export const AIISH_HIGH_RISK_FACTORS = [
  {
    id: 'nicu_stay',
    label: {
      en: 'NICU Stay > 5 Days (Assisted ventilation, ototoxic meds, hyperbilirubinemia)',
      hi: 'एनआईसीयू (NICU) में 5 दिन से अधिक रहना (वेंटिलेटर, पीलिया, दवाएं)',
      kn: 'NICU ನಲ್ಲಿ 5 ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ಇರುವುದು (ವೆಂಟಿಲೇಟರ್, ಕಾಮಾಲೆ, ಔಷಧಗಳು)',
    },
    description: {
      en: 'High risk for sensorineural hearing loss or auditory neuropathy spectrum disorder (ANSD).',
      hi: 'संवेदी श्रवण दोष या ऑडिटरी न्यूरोपैथी का उच्च जोखिम।',
      kn: 'ಕಿವುಡುತನ ಅಥವಾ ಆಡಿಟರಿ ನ್ಯೂರೋಪತಿಯ ಹೆಚ್ಚಿನ ಅಪಾಯ.',
    }
  },
  {
    id: 'consanguinity',
    label: {
      en: 'Consanguinity or Family History of Early Childhood Hearing Loss',
      hi: 'परिवार में निकट संबंधी विवाह या बचपन में बहरेपन का पारिवारिक इतिहास',
      kn: 'ರಕ್ತ ಸಂಬಂಧಿಕರ ನಡುವಿನ ವಿವಾಹ ಅಥವಾ ಕುಟುಂಬದಲ್ಲಿ ಬಾಲ್ಯದ ಕಿವುಡುತನದ ಇತಿಹಾಸ',
    },
    description: {
      en: 'Common risk factor highlighted in AIISH South Asian genetic hearing screening protocols.',
      hi: 'AIISH प्रोटोकॉल में चिह्नित आनुवंशिक श्रवण दोष का मुख्य कारण।',
      kn: 'AIISH ಪ್ರೋಟೋಕಾಲ್‌ನಲ್ಲಿ ಗುರುತಿಸಲಾದ ವಂಶಪಾರಂಪರ್ಯ ಶ್ರವಣ ದೋಷದ ಅಪಾಯ.',
    }
  },
  {
    id: 'recurrent_otitis',
    label: {
      en: 'Recurrent Middle Ear Infections (Otitis Media with Effusion / Ear Discharge)',
      hi: 'कान का बार-बार बहना या मध्य कान में तरल जमा होना (ओटाइटिस मीडिया)',
      kn: 'ಕಿವಿ ಸೋರುವುದು ಅಥವಾ ಕಿವಿಯಲ್ಲಿ ನೀರು ತುಂಬಿಕೊಳ್ಳುವುದು (ಮಧ್ಯಕಿವಿಯ ಸೋಂಕು)',
    },
    description: {
      en: 'Causes fluctuating conductive hearing loss leading to inconsistent speech input during critical language development windows.',
      hi: 'अस्थायी बहरेपन का कारण बनता है जिससे भाषा और बोलने के विकास में रुकावट आती है।',
      kn: 'ತಾತ್ಕಾಲಿಕ ಶ್ರವಣ ದೋಷವನ್ನು ಉಂಟುಮಾಡಿ ಮಗುವಿನ ಮಾತು ಕಲಿಕೆಗೆ ಅಡ್ಡಿಯಾಗುತ್ತದೆ.',
    }
  },
  {
    id: 'hyperbilirubinemia',
    label: {
      en: 'Severe Neonatal Hyperbilirubinemia (Requiring phototherapy or exchange transfusion)',
      hi: 'जन्म के समय गंभीर पीलिया (फोटोथेरेपी या रक्त बदलने की आवश्यकता)',
      kn: 'ಜನನದ ಸಮಯದಲ್ಲಿ ತೀವ್ರ ಕಾಮಾಲೆ (ಫೋಟೊಥೆರಪಿ ಅಥವಾ ರಕ್ತ ಬದಲಾವಣೆ ಅಗತ್ಯವಿದ್ದದ್ದು)',
    },
    description: {
      en: 'Bilirubin toxicity can specifically affect auditory brainstem pathways and cochlear nuclei.',
      hi: 'बिलीरुबिन का प्रभाव श्रवण तंत्रिका और मस्तिष्क के श्रवण केंद्रों पर पड़ सकता है।',
      kn: 'ಶ್ರವಣ ನರಗಳ ಮೇಲೆ ತೀವ್ರ ಪರಿಣಾಮ ಬೀರುವ ಸಾಧ್ಯತೆ ಇರುತ್ತದೆ.',
    }
  },
  {
    id: 'craniofacial',
    label: {
      en: 'Craniofacial Anomalies (Cleft lip/palate, ear tags, microtia)',
      hi: 'चेहरे या कान की जन्मजात बनावट में विकृति (कटा होंठ/तालू, छोटे कान)',
      kn: 'ಮುಖ ಅಥವಾ ಕಿವಿಯ ಹುಟ್ಟು ವಿಕಲಾಂಗತೆ (ಸೀಳು ತುಟಿ/ಅಂಗುಳ, ಸಣ್ಣ ಕಿವಿ)',
    },
    description: {
      en: 'Frequent association with Eustachian tube dysfunction and conductive or structural hearing impairments.',
      hi: 'कान की नली की कार्यप्रणाली और सुनने की क्षमता में रुकावट का कारण बनता है।',
      kn: 'ಕಿವಿಯ ಒಳ ರಚನೆ ಮತ್ತು ಶ್ರವಣ ಸಾಮರ್ಥ್ಯದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ.',
    }
  }
];

export const ERBER_AUDITORY_LEVELS = [
  {
    level: 'Detection (Awareness)',
    nameHi: 'ध्वनि उपस्थिति का आभास (Detection)',
    nameKn: 'ಶಬ್ದದ ಅರಿವು (Detection)',
    description: 'The ability to perceive the presence or absence of sound. The foundational first step in listening.',
    keyQuestion: 'Does the child notice when sound starts and stops?',
  },
  {
    level: 'Discrimination',
    nameHi: 'ध्वनियों में अंतर पहचानना (Discrimination)',
    nameKn: 'ಶಬ್ದಗಳ ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಗ್ರಹಿಕೆ (Discrimination)',
    description: 'The ability to tell if two sounds are the same or different (pitch, loudness, duration, rhythm).',
    keyQuestion: 'Can the child tell different animal sounds or loud vs soft sounds apart?',
  },
  {
    level: 'Identification',
    nameHi: 'ध्वनि और वस्तु का संबंध पहचानना (Identification)',
    nameKn: 'ಶಬ್ದ ಮತ್ತು ವಸ್ತುವಿನ ಗುರುತಿಸುವಿಕೆ (Identification)',
    description: 'The ability to recognize and name or point to a specific sound, picture, or word when heard.',
    keyQuestion: 'Does the child point to a dog when barking is heard, or look at Daddy when "Daddy" is said?',
  },
  {
    level: 'Comprehension',
    nameHi: 'श्रवण बोध व भाषा समझना (Comprehension)',
    nameKn: 'ಸಂಪೂರ್ಣ ಶ್ರವಣ ಗ್ರಹಿಕೆ ಮತ್ತು ಅರ್ಥೈಸಿಕೊಳ್ಳುವಿಕೆ (Comprehension)',
    description: 'The ultimate auditory skill: Understanding the meaning of connected spoken language, stories, and conversations.',
    keyQuestion: 'Can the child answer questions, follow conversational stories, and learn new concepts through listening?',
  }
];

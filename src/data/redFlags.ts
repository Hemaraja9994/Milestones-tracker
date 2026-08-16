import { RedFlagItem } from '@/types';

export const CLINICAL_RED_FLAGS: RedFlagItem[] = [
  {
    id: 'rf_2m_no_startle',
    ageBandMonths: 2,
    domain: 'auditory_hearing',
    warningSign: {
      en: 'No startle, eye-widening, or calming response to sudden loud sounds (65+ dB).',
      hi: 'अचानक तेज आवाज (ताली या दरवाजे की आवाज) पर चौंकने या शांत होने की कोई प्रतिक्रिया न होना।',
      kn: 'ಜೋರಾದ ಶಬ್ದಕ್ಕೆ ಬೆಚ್ಚಿಬೀಳದಿರುವುದು ಅಥವಾ ಯಾವುದೇ ಪ್ರತಿಕ್ರಿಯೆ ನೀಡದಿರುವುದು.',
    },
    recommendedAction: {
      en: 'Urgent newborn hearing screening (OAE / AABR) verification with a pediatric audiologist.',
      hi: 'शिशु श्रवण विशेषज्ञ से तत्काल OAE / AABR श्रवण जांच कराएं।',
      kn: 'ತಕ್ಷಣವೇ ಮಕ್ಕಳ ಶ್ರವಣ ತಜ್ಞರಿಂದ OAE / AABR ಶ್ರವಣ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ.',
    },
    severity: 'urgent',
    citation: 'Northern & Downs / AIISH Guidelines',
  },
  {
    id: 'rf_2m_no_eye_contact',
    ageBandMonths: 2,
    domain: 'social_pragmatic',
    warningSign: {
      en: 'Does not look at faces, make eye contact, or smile socially when spoken to.',
      hi: 'बात करने पर चेहरे की ओर न देखना, आँखों में न देखना या सामाजिक मुस्कान न देना।',
      kn: 'ಮುಖ ನೋಡದಿರುವುದು, ಕಣ್ಣಲ್ಲಿ ಕಣ್ಣಿಡದಿರುವುದು ಅಥವಾ ಮುಗುಳುನಗದಿರುವುದು.',
    },
    recommendedAction: {
      en: 'Pediatric evaluation for visual acuity and early social-emotional engagement screening.',
      hi: 'बाल रोग विशेषज्ञ से दृष्टि और सामाजिक विकास की जांच कराएं।',
      kn: 'ದೃಷ್ಟಿ ಮತ್ತು ಆರಂಭಿಕ ಸಾಮಾಜಿಕ ಬೆಳವಣಿಗೆಯ ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ಮಕ್ಕಳ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    },
    severity: 'urgent',
    citation: 'CDC Milestone Red Flags',
  },
  {
    id: 'rf_6m_no_babble',
    ageBandMonths: 6,
    domain: 'language_expressive',
    warningSign: {
      en: 'Does not laugh, squeal, or produce vowel-consonant sounds (absence of cooing or babbling).',
      hi: 'हंसने की आवाज न निकालना या "बा-बा", "मा-मा" जैसी कोई आवाज न बनाना।',
      kn: 'ನಗುವ ಸದ್ದು ಮಾಡದಿರುವುದು ಅಥವಾ ಯಾವುದೇ ತೊದಲು ಶಬ್ದಗಳನ್ನು ಹೊರಡಿಸದಿರುವುದು.',
    },
    recommendedAction: {
      en: 'Comprehensive speech-language pathology & audiological assessment.',
      hi: 'वाक-भाषा चिकित्सक (SLP) और श्रवण विशेषज्ञ से परामर्श लें।',
      kn: 'ಸ್ಪೀಚ್ ಥೆರಪಿಸ್ಟ್ (SLP) ಮತ್ತು ಆಡಿಯಾಲಜಿಸ್ಟ್ ಅವರಿಂದ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.',
    },
    severity: 'moderate',
    citation: 'ASHA Early Detection Standards',
  },
  {
    id: 'rf_9m_no_name_response',
    ageBandMonths: 9,
    domain: 'auditory_hearing',
    warningSign: {
      en: 'Does not turn head when name is called in quiet room and does not respond to familiar voices.',
      hi: 'शांत कमरे में अपना नाम पुकारे जाने पर सिर न घुमाना और परिचित आवाजों पर ध्यान न देना।',
      kn: 'ಶಾಂತ ಕೋಣೆಯಲ್ಲಿ ಹೆಸರು ಕರೆದಾಗ ಕಣ್ಣೆತ್ತಿ ನೋಡದಿರುವುದು ಅಥವಾ ತಲೆ ತಿರುಗಿಸದಿರುವುದು.',
    },
    recommendedAction: {
      en: 'Diagnostic Behavioral Observation Audiometry (BOA) / Tympanometry for otitis media.',
      hi: 'कान की जांच (टिमपेनोमेट्री) और श्रवण क्षमता परीक्षण कराएं।',
      kn: 'ಕಿವಿ ತಪಾಸಣೆ ಮತ್ತು ಶ್ರವಣ ಸಾಮರ್ಥ್ಯದ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ.',
    },
    severity: 'urgent',
    citation: 'AIISH Mysuru Screening Protocol',
  },
  {
    id: 'rf_12m_no_gestures',
    ageBandMonths: 12,
    domain: 'social_pragmatic',
    warningSign: {
      en: 'Does not use gestures (pointing, waving bye-bye, shaking head "no") and uses no meaningful sounds.',
      hi: 'इशारे न करना (बाय-बाय न करना, उंगली से न दिखाना) और कोई सार्थक ध्वनि न निकालना।',
      kn: 'ಯಾವುದೇ ಸನ್ನೆಗಳನ್ನು ಬಳಸದಿರುವುದು (ಟಾಟಾ ಮಾಡದಿರುವುದು, ಬೆರಳು ಮಾಡದಿರುವುದು) ಮತ್ತು ಶಬ್ದ ಮಾಡದಿರುವುದು.',
    },
    recommendedAction: {
      en: 'Early intervention referral for communication and social pragmatic evaluation.',
      hi: 'शुरुआती हस्तक्षेप (Early Intervention) और भाषा मूल्यांकन की सलाह दी जाती है।',
      kn: 'ಆರಂಭಿಕ ಸಂವಹನ ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ತಜ್ಞರ ಬಳಿಗೆ ಕರೆದೊಯ್ಯಿರಿ.',
    },
    severity: 'urgent',
    citation: 'CDC / Pathways.org',
  },
  {
    id: 'rf_18m_under_6_words',
    ageBandMonths: 18,
    domain: 'language_expressive',
    warningSign: {
      en: 'Speaks fewer than 6 spontaneous single words and does not point to show things of interest.',
      hi: '6 से कम शब्द बोलना और पसंद की वस्तु की ओर उंगली से इशारा न करना।',
      kn: '6ಕ್ಕಿಂತ ಕಡಿಮೆ ಪದಗಳನ್ನು ಆಡುವುದು ಮತ್ತು ಆಸಕ್ತಿಯ ವಸ್ತುಗಳನ್ನು ತೋರಿಸದಿರುವುದು.',
    },
    recommendedAction: {
      en: 'Speech-Language Pathologist consultation for expressive language stimulation protocol.',
      hi: 'वाक-भाषा चिकित्सक (SLP) से भाषा विकास के लिए विशेष मार्गदर्शन लें।',
      kn: 'ಭಾಷಾ ಬೆಳವಣಿಗೆಗಾಗಿ ಸ್ಪೀಚ್-ಲ್ಯಾಂಗ್ವೇಜ್ ಪ್ಯಾಥಾಲಜಿಸ್ಟ್ (SLP) ಭೇಟಿ ಮಾಡಿ.',
    },
    severity: 'urgent',
    citation: 'ASHA Clinical Practice Guidelines',
  },
  {
    id: 'rf_24m_no_2_word_phrases',
    ageBandMonths: 24,
    domain: 'language_expressive',
    warningSign: {
      en: 'Does not spontaneously combine 2 words together (e.g. "more milk", "papa come") or vocabulary is under 50 words.',
      hi: '2 शब्दों के नए वाक्य न बनाना (केवल रटे हुए शब्द दोहराना) या 50 से कम शब्दों का ज्ञान होना।',
      kn: '2 ಪದಗಳ ವಾಕ್ಯಗಳನ್ನು ರಚಿಸದಿರುವುದು ಅಥವಾ 50ಕ್ಕಿಂತ ಕಡಿಮೆ ಪದಗಳಿರುವುದು.',
    },
    recommendedAction: {
      en: 'Formal Speech & Language evaluation and developmental screening (e.g. LEST / Bayley / REELS).',
      hi: 'औपचारिक वाक-भाषा मूल्यांकन और विकासात्मक परीक्षण (LEST / REELS) कराएं।',
      kn: 'ಸಮಗ್ರ ಭಾಷಾ ಮೌಲ್ಯಮಾಪನ (LEST / REELS ಪರೀಕ್ಷೆಗಳು) ಅಗತ್ಯ.',
    },
    severity: 'urgent',
    citation: 'CDC / LEST (Language Evaluation Scale Trivandrum)',
  },
  {
    id: 'rf_36m_unintelligible_speech',
    ageBandMonths: 36,
    domain: 'speech_articulation',
    warningSign: {
      en: 'Speech is unclear and family members understand less than half (<50%) of what the child says; frequent stuttering.',
      hi: 'परिवार के लोग भी बच्चे की आधी से कम बातें समझ पाते हैं; बोलते समय बहुत अधिक हकलाना या अटकना।',
      kn: 'ಮನೆಯವರಿಗೂ ಮಗುವಿನ ಮಾತು ಅರ್ಥವಾಗದಿರುವುದು (50% ಗಿಂತ ಕಡಿಮೆ ಸ್ಪಷ್ಟತೆ) ಅಥವಾ ಅತಿಯಾದ ತೊದಲುವಿಕೆ.',
    },
    recommendedAction: {
      en: 'Articulation & phonology disorder assessment by licensed Speech-Language Pathologist.',
      hi: 'उच्चारण और ध्वनि विकार (Articulation & Phonology) की विशेषज्ञ जांच कराएं।',
      kn: 'ಸ್ಪೀಚ್ ಥೆರಪಿಸ್ಟ್ ಅವರಿಂದ ಉಚ್ಚಾರಣಾ ದೋಷದ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿಸಿ.',
    },
    severity: 'moderate',
    citation: 'ASHA / Crowe & McLeod (2020)',
  },
  {
    id: 'rf_any_loss_of_skills',
    ageBandMonths: 24,
    domain: 'social_pragmatic',
    warningSign: {
      en: 'ANY regression or loss of previously acquired speech, words, social gestures, or eye contact at ANY age.',
      hi: 'किसी भी उम्र में पहले सीखे हुए शब्दों, इशारों या बोलने की क्षमता का अचानक गायब होना (कौशल का ह्रास)।',
      kn: 'ಯಾವುದೇ ವಯಸ್ಸಿನಲ್ಲಿ ಈ ಹಿಂದೆ ಕಲಿತ ಮಾತು, ಪದಗಳು ಅಥವಾ ಸನ್ನೆಗಳು ದಿಢೀರನೆ ಮರೆತುಹೋಗುವುದು (ಹಿನ್ನಡೆ).',
    },
    recommendedAction: {
      en: 'Immediate comprehensive neurodevelopmental and pediatric neurology consultation.',
      hi: 'तत्काल बाल न्यूरोलॉजिस्ट और विकासात्मक बाल रोग विशेषज्ञ से संपर्क करें।',
      kn: 'ತಕ್ಷಣವೇ ಮಕ್ಕಳ ನರರೋಗ ತಜ್ಞರು (Pediatric Neurologist) ಮತ್ತು ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    },
    severity: 'urgent',
    citation: 'American Academy of Pediatrics (AAP) / CDC Critical Warning',
  }
];

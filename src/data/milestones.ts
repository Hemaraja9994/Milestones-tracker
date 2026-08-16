import { Milestone } from '@/types';

export const COMPREHENSIVE_MILESTONES: Milestone[] = [
  // ==========================================
  // 2 MONTHS
  // ==========================================
  {
    id: 'm_2m_aud_1',
    ageBandMonths: 2,
    domain: 'auditory_hearing',
    subsystem: 'auditory_localization',
    title: {
      en: 'Reacts to Loud Sounds (Startle / Moro Reflex)',
      hi: 'तेज आवाज पर चौंकना (मोरो रिफ्लेक्स)',
      kn: 'ಜೋರಾದ ಶಬ್ದಕ್ಕೆ ಬೆಚ್ಚಿಬೀಳುವುದು (ಮೊರೊ ರಿಫ್ಲೆಕ್ಸ್)',
    },
    description: {
      en: 'Infant blinks, widens eyes, startles (flings arms out), or changes sucking rhythm in response to sudden loud noises (e.g. door slam, loud clap).',
      hi: 'अचानक तेज आवाज (जैसे दरवाजा बंद होना, जोर की ताली) सुनकर बच्चा चौंकता है, आंखें चौड़ी करता है या दूध पीना रोक देता है।',
      kn: 'ಧಿಡೀರ್ ಶಬ್ದಕ್ಕೆ ಮಗು ಬೆಚ್ಚಿಬೀಳುತ್ತದೆ, ಕಣ್ಣು ಅರಳಿಸುತ್ತದೆ ಅಥವಾ ಹಾಲು ಕುಡಿಯುವುದನ್ನು ನಿಲ್ಲಿಸಿ ಆಲಿಸುತ್ತದೆ.',
    },
    whyItMatters: {
      en: 'Confirms functional auditory brainstem pathway and sound awareness (detection level). Essential baseline for all future speech-language acquisition.',
      hi: 'यह दर्शाता है कि बच्चे का कान और मस्तिष्क ध्वनि की उपस्थिति को महसूस कर पा रहे हैं।',
      kn: 'ಮಗುವಿನ ಕಿವಿಯ ಶ್ರವಣ ನರಗಳು ಶಬ್ದವನ್ನು ಸರಿಯಾಗಿ ಗ್ರಹಿಸುತ್ತಿವೆ ಎಂಬುದನ್ನು ಇದು ಖಚಿತಪಡಿಸುತ್ತದೆ.',
    },
    whatToLookFor: {
      en: 'Sudden body jerk, eye-blink, or momentary pause in crying/sucking when a loud sound occurs nearby.',
      hi: 'आवाज होने पर शरीर में झटका, पलक झपकना या रोते-रोते चुप होना।',
      kn: 'ಶಬ್ದವಾದಾಗ ಮೈ ಜುಮ್ಮೆನ್ನುವುದು, ಕಣ್ಣು ಮಿಟುಕಿಸುವುದು ಅಥವಾ ಅಳುವಾಗ ಒಮ್ಮೆಲೆ ಸುಮ್ಮನಾಗುವುದು.',
    },
    parentTips: {
      en: 'Talk softly to your baby during feeding and diaper changes. Observe if baby settles down to the sound of your gentle voice.',
      hi: 'बच्चे से धीरे-धीरे बात करें और देखें कि क्या वह आपकी आवाज सुनकर शांत होता है।',
      kn: 'ಮಗುವಿಗೆ ಹಾಲುಣಿಸುವಾಗ ಪ್ರೀತಿಯಿಂದ ಮಾತನಾಡಿ. ನಿಮ್ಮ ಧ್ವನಿ ಕೇಳಿ ಮಗು ಸಮಾಧಾನಗೊಳ್ಳುತ್ತದೆಯೇ ಗಮನಿಸಿ.',
    },
    citation: 'Northern & Downs',
    isRedFlag: true,
  },
  {
    id: 'm_2m_soc_1',
    ageBandMonths: 2,
    domain: 'social_pragmatic',
    subsystem: 'pragmatics',
    title: {
      en: 'Calms Down & Looks at Face when Spoken to',
      hi: 'बात करने पर चेहरे को देखना और शांत होना',
      kn: 'ಮಾತನಾಡಿಸಿದಾಗ ಮುಖ ನೋಡುವುದು ಮತ್ತು ಸಮಾಧಾನಗೊಳ್ಳುವುದು',
    },
    description: {
      en: 'Quiets or smiles when parent speaks gently and makes direct eye contact during social interaction.',
      hi: 'जब माता-पिता प्यार से बात करते हैं, तो बच्चा उनकी आँखों में देखता है और मुस्कुराने लगता है।',
      kn: 'ಪೋಷಕರು ಮಾತನಾಡಿಸಿದಾಗ ಅವರ ಕಣ್ಣಲ್ಲಿ ಕಣ್ಣಿಟ್ಟು ನೋಡುವುದು ಮತ್ತು ಮುಗುಳುನಗೆ ಬೀರುವುದು.',
    },
    whyItMatters: {
      en: 'Foundational social-emotional bonding and primary joint attention initiation.',
      hi: 'यह सामाजिक संवाद और परस्पर जुड़ाव की पहली सीढ़ी है।',
      kn: 'ಸಾಮಾಜಿಕ ಸಂವಹನ ಮತ್ತು ಮಗುವಿನ ಮಾನಸಿಕ ಬಾಂಧವ್ಯದ ಪ್ರಮುಖ ಆರಂಭ.',
    },
    whatToLookFor: {
      en: 'Maintains gaze on your eyes/face for several seconds and shows subtle responsive vocal or facial cues.',
      hi: 'कुछ सेकंड के लिए आपकी आँखों में देखना और चेहरे के भाव बदलना।',
      kn: 'ಕೆಲವು ಕ್ಷಣಗಳ ಕಾಲ ನಿಮ್ಮ ಮುಖವನ್ನು ಏಕಾಗ್ರತೆಯಿಂದ ನೋಡುವುದು.',
    },
    parentTips: {
      en: 'Hold your baby about 8–12 inches from your face. Smile, nod, and speak in animated musical tones.',
      hi: 'बच्चे को अपने चेहरे के करीब (8-12 इंच) रखें और मुस्कुराते हुए बात करें।',
      kn: 'ಮಗುವನ್ನು ನಿಮ್ಮ ಮುಖಕ್ಕೆ ಹತ್ತಿರವಾಗಿ ಹಿಡಿದುಕೊಂಡು ಮುಗುಳುನಗುತ್ತಾ ಮಾತನಾಡಿ.',
    },
    citation: 'CDC',
  },
  {
    id: 'm_2m_exp_1',
    ageBandMonths: 2,
    domain: 'language_expressive',
    subsystem: 'voice_resonance',
    title: {
      en: 'Produces Cooing Sounds (Vowel-like /ooh/, /aah/)',
      hi: 'कूइंग ध्वनियां निकालना (ऊह, आह जैसी आवाजें)',
      kn: 'ಕೂಯಿಂಗ್ ಧ್ವನಿಗಳು (ಊ, ಆಹ್ ನಂತಹ ಸ್ವರ ಶಬ್ದಗಳು)',
    },
    description: {
      en: 'Makes soft, pleasant vowel sounds other than crying (e.g., "ooh", "aah", "gurgling") when comfortable and engaged.',
      hi: 'रोने के अलावा खुश होने पर गले से "आह", "ऊह" जैसी मधुर ध्वनियां निकालना।',
      kn: 'ಅಳುವುದನ್ನು ಹೊರತುಪಡಿಸಿ, ಸಂತೋಷದಲ್ಲಿದ್ದಾಗ "ಊಹ್", "ಆಹ್" ಎಂಬ ಮೃದು ಸ್ವರಗಳನ್ನು ಹೊರಡಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'Early phonatory control and voluntary vocal cord activation for social communication.',
      hi: 'यह बोलने की मांसपेशियों और स्वर रज्जुओं के शुरुआती नियंत्रण को दर्शाता है।',
      kn: 'ಧ್ವನಿಪೆಟ್ಟಿಗೆಯ ಸ್ನಾಯುಗಳ ನಿಯಂತ್ರಣ ಮತ್ತು ಮಾತಿನ ಮೊದಲ ಹೆಜ್ಜೆ.',
    },
    whatToLookFor: {
      en: 'Spontaneous vowel vocalizations when looking at caregivers or toys.',
      hi: 'खिलौनों या माता-पिता को देखकर गले से मीठी आवाजें निकालना।',
      kn: 'ಆಟವಾಡುವಾಗ ಅಥವಾ ಮುಖ ನೋಡಿದಾಗ ತನ್ನಷ್ಟಕ್ಕೆ ತಾನೇ ಸ್ವರ ಧ್ವನಿಗಳನ್ನು ಹೊರಡಿಸುವುದು.',
    },
    parentTips: {
      en: 'Imitate your baby\'s sounds right back! When baby says "aah", say "aah" back with a warm smile and pause for their turn.',
      hi: 'जब बच्चा "आह" कहे, तो आप भी वही दोहराएं और उसकी प्रतिक्रिया का इंतजार करें।',
      kn: 'ಮಗು "ಆಹ್" ಎಂದಾಗ ನೀವು ಕೂಡ ಅದೇ ಧ್ವನಿಯನ್ನು ಅನುಕರಿಸಿ ಮಗುವಿಗೆ ಉತ್ತರಿಸಿ.',
    },
    citation: 'ASHA',
  },

  // ==========================================
  // 4 MONTHS
  // ==========================================
  {
    id: 'm_4m_aud_1',
    ageBandMonths: 4,
    domain: 'auditory_hearing',
    subsystem: 'auditory_localization',
    title: {
      en: 'Turns Head Toward Sounds / Voice Source',
      hi: 'आवाज या बोलने वाले की तरफ सिर घुमाना',
      kn: 'ಧ್ವನಿ ಬರುವ ಕಡೆಗೆ ತಲೆ ತಿರುಗಿಸಿ ಹುಡುಕುವುದು',
    },
    description: {
      en: 'Turns head on horizontal plane toward the direction of a speaker\'s voice or musical rattle (at ~50–60 dB HL).',
      hi: 'कमरे में किसी के बोलने या झुनझुने की आवाज सुनकर उस दिशा में सिर घुमाता है।',
      kn: 'ಯಾರಾದರೂ ಮಾತನಾಡಿದಾಗ ಅಥವಾ ಆಟಿಕೆಯ ಶಬ್ದ ಕೇಳಿದಾಗ ಆ ದಿಕ್ಕಿಗೆ ತಲೆ ತಿರುಗಿಸುತ್ತದೆ.',
    },
    whyItMatters: {
      en: 'Direct auditory localization maturation (Northern & Downs Stage II/III); indicates sound source discrimination.',
      hi: 'यह दर्शाता है कि बच्चा आवाज की दिशा को सही ढंग से पहचान रहा है।',
      kn: 'ಮಗು ಶಬ್ದ ಎಲ್ಲಿಂದ ಬರುತ್ತಿದೆ ಎಂಬುದನ್ನು ನಿಖರವಾಗಿ ಗುರುತಿಸುವ ಸಾಮರ್ಥ್ಯ ಬೆಳೆಯುತ್ತಿದೆ.',
    },
    whatToLookFor: {
      en: 'Shifts gaze and head toward you when you speak from one side of the crib or room.',
      hi: 'एक तरफ से बोलने पर सिर और आंखें उसी तरफ घुमाना।',
      kn: 'ಪಕ್ಕದಿಂದ ಮಾತನಾಡಿಸಿದಾಗ ಆ ಕಡೆಗೆ ಕಣ್ಣು ಮತ್ತು ತಲೆಯನ್ನು ತಿರುಗಿಸುವುದು.',
    },
    parentTips: {
      en: 'Call your baby\'s name from the left side, then from the right side. Celebrate when they turn to find you!',
      hi: 'बच्चे को कभी बाएं तो कभी दाएं से पुकारें और जब वह मुड़े तो मुस्कुराएं।',
      kn: 'ಮಗುವನ್ನು ಎಡ ಮತ್ತು ಬಲ ಬದಿಯಿಂದ ಕರೆದು ಅದು ನಿಮ್ಮನ್ನು ಹುಡುಕಲು ಪ್ರೋತ್ಸಾಹಿಸಿ.',
    },
    citation: 'Northern & Downs',
    isRedFlag: true,
  },
  {
    id: 'm_4m_exp_1',
    ageBandMonths: 4,
    domain: 'language_expressive',
    subsystem: 'phonology',
    title: {
      en: 'Chortles, Chuckles & Responds with Sounds',
      hi: 'खिलखिलाकर हंसना और आवाज के जवाब में आवाज निकालना',
      kn: 'ಗಹಗಹಿಸಿ ನಗುವುದು ಮತ್ತು ಧ್ವನಿಗೆ ಪ್ರತಿಯಾಗಿ ಶಬ್ದ ಮಾಡುವುದು',
    },
    description: {
      en: 'Makes squealing, laughing sounds and responds with vocalizations when you talk to them (vocal turn-taking).',
      hi: 'हंसने की आवाज निकालना, खुशी से चीखना और बातचीत में अपनी आवाज शामिल करना।',
      kn: 'ಖುಷಿಯಿಂದ ನಗುವುದು, ಕಿರುಚಾಟದ ಧ್ವನಿಗಳು ಮತ್ತು ಮಾತಿಗೆ ಪ್ರತಿಯಾಗಿ ಶಬ್ದ ಮಾಡುವುದು.',
    },
    whyItMatters: {
      en: 'Beginning of vocal turn-taking (proto-conversations), essential for conversational pragmatic development.',
      hi: 'यह संवाद के बुनियादी नियम (बारी-बारी से बोलना) सीखने की शुरुआत है।',
      kn: 'ಸಂಭಾಷಣೆಯ ಸರದಿ ಪಾಲನೆಯ (Turn-taking) ಮೊದಲ ಮಹತ್ವದ ಹೆಜ್ಜೆ.',
    },
    whatToLookFor: {
      en: 'Giggles out loud (not just silent smiles) when tickled or played with.',
      hi: 'खेलते समय खुलकर आवाज के साथ हंसना।',
      kn: 'ಆಟವಾಡುವಾಗ ಜೋರಾಗಿ ನಗುವುದು ಮತ್ತು ಉಲ್ಲಾಸದ ಧ್ವನಿಗಳನ್ನು ಹೊರಡಿಸುವುದು.',
    },
    parentTips: {
      en: 'Play gentle peek-a-boo and blow raspberries on their tummy to elicit rich laughs and joyful vocalizations.',
      hi: 'बच्चे के साथ आंख-मिचौली खेलें और हंसने के मौके बनाएं।',
      kn: 'ಮಗುವಿನೊಂದಿಗೆ ಕಣ್ಣಾಮುಚ್ಚಾಲೆ ಆಟವಾಡಿ ನಗುವಂತೆ ಮಾಡಿ.',
    },
    citation: 'CDC',
  },

  // ==========================================
  // 6 MONTHS
  // ==========================================
  {
    id: 'm_6m_aud_1',
    ageBandMonths: 6,
    domain: 'auditory_hearing',
    subsystem: 'auditory_localization',
    title: {
      en: 'Direct Lateral Sound Localization (Ear Level)',
      hi: 'कान के स्तर पर सीधी आवाज की पहचान (दाएं-बाएं)',
      kn: 'ಕಿವಿ ಮಟ್ಟದಲ್ಲಿ ನೇರ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ (ಎಡ ಮತ್ತು ಬಲ)',
    },
    description: {
      en: 'Directly and briskly turns head to sound sources presented at ear level on both left and right sides (~40–50 dB HL).',
      hi: 'कान के स्तर पर दोनों तरफ (दाएं या बाएं) से आने वाली हल्की आवाज पर भी तेजी से सिर घुमाता है।',
      kn: 'ಕಿವಿ ಮಟ್ಟದಲ್ಲಿ ಬರುವ ಯಾವುದೇ ಸಣ್ಣ ಶಬ್ದಕ್ಕೂ ತಕ್ಷಣ ನೇರವಾಗಿ ತಲೆ ತಿರುಗಿಸಿ ನೋಡುತ್ತದೆ.',
    },
    whyItMatters: {
      en: 'Crucial AIISH and Northern & Downs auditory screening milestone. Symmetrical response rules out unilateral loss.',
      hi: 'यह श्रवण क्षमता का मुख्य मील का पत्थर है। दोनों कानों की समान संवेदनशीलता दर्शाता है।',
      kn: 'ಎರಡೂ ಕಿವಿಗಳ ಶ್ರವಣ ಸಾಮರ್ಥ್ಯ ಸಮಾನವಾಗಿದೆ ಎಂಬುದನ್ನು ಖಚಿತಪಡಿಸುವ ಪ್ರಮುಖ ಮೈಲಿಗಲ್ಲು.',
    },
    whatToLookFor: {
      en: 'Immediate head turn without hesitating or searching up/down first.',
      hi: 'बिना भटके सीधे आवाज की दिशा में देखना।',
      kn: 'ಯಾವುದೇ ಗೊಂದಲವಿಲ್ಲದೆ ನೇರವಾಗಿ ಶಬ್ದದ ಕಡೆಗೆ ನೋಡುವುದು.',
    },
    parentTips: {
      en: 'Shake a soft bell or rattle out of sight on either side of the baby to see if they turn directly toward it.',
      hi: 'बच्चे की नजर से छिपाकर एक तरफ घंटी बजाएं और देखें कि क्या वह तुरंत मुड़ता है।',
      kn: 'ಮಗುವಿಗೆ ಕಾಣಿಸದಂತೆ ಪಕ್ಕದಲ್ಲಿ ಸಣ್ಣ ಗಂಟೆ ಬಾರಿಸಿ ತಕ್ಷಣ ತಿರುಗುತ್ತದೆಯೇ ಗಮನಿಸಿ.',
    },
    citation: 'AIISH',
    isRedFlag: true,
  },
  {
    id: 'm_6m_exp_1',
    ageBandMonths: 6,
    domain: 'language_expressive',
    subsystem: 'articulation',
    title: {
      en: 'Marginal & Canonical Babbling (/ba-ba/, /ma-ma/, /da-da/)',
      hi: 'बड़बड़ाना (बैबलिंग - बा-बा, मा-मा, दा-दा)',
      kn: 'ತೊದಲು ನುಡಿ ಆರಂಭ (ಬಾ-ಬಾ, ಮಾ-ಮಾ, ದಾ-ದಾ)',
    },
    description: {
      en: 'Strings consonant-vowel syllables together like "ba-ba", "ma-ma", "da-da", playing with pitch and volume.',
      hi: 'व्यंजनों और स्वरों को मिलाकर "बा-बा", "मा-मा", "दा-दा" जैसी ध्वनियां बार-बार दोहराना।',
      kn: 'ಸ್ವರ ಮತ್ತು ವ್ಯಂಜನಗಳನ್ನು ಸೇರಿಸಿ "ಬಾ-ಬಾ", "ಮಾ-ಮಾ", "ದಾ-ದಾ" ಎಂದು ತೊದಲು ನುಡಿಯುವುದು.',
    },
    whyItMatters: {
      en: 'Canonical babbling is the universal biological precursor to true words. Late babbling (>10m) is a critical red flag for speech delay or hearing impairment.',
      hi: 'यह बोलने की शुरुआत का सबसे महत्वपूर्ण संकेत है।',
      kn: 'ಸ್ಪಷ್ಟ ಮಾತು ಹೊರಹೊಮ್ಮಲು ಇದು ಅತಿ ಮುಖ್ಯವಾದ ತಳಪಾಯ.',
    },
    whatToLookFor: {
      en: 'Rhythmic repetition of consonant-vowel combinations during solo play and with parents.',
      hi: 'खेलते समय लगातार "बा-बा", "दा-दा" जैसी ध्वनियों की पुनरावृत्ति।',
      kn: 'ಆಟವಾಡುವಾಗ ಲಯಬದ್ಧವಾಗಿ ಅಕ್ಷರಗಳನ್ನು ಜೋಡಿಸಿ ನುಡಿಯುವುದು.',
    },
    parentTips: {
      en: 'Respond to baby\'s babble as if having a real conversation: "Oh really, ba-ba? Tell me more!"',
      hi: 'बच्चे की बड़बड़ाहट का जवाब ऐसे दें जैसे आप पूरी बात समझ रहे हों।',
      kn: 'ಮಗು ತೊದಲಿದಾಗ ನಿಜವಾದ ಸಂಭಾಷಣೆಯಂತೆ ಮಾತನಾಡಿ ಪ್ರೋತ್ಸಾಹಿಸಿ.',
    },
    citation: 'ASHA',
  },
  {
    id: 'm_6m_rec_1',
    ageBandMonths: 6,
    domain: 'language_receptive',
    subsystem: 'semantics',
    title: {
      en: 'Recognizes Familiar Voices and Own Name',
      hi: 'परिचित आवाजों और अपने नाम को पहचानना',
      kn: 'ಪರಿಚಿತ ಧ್ವನಿಗಳು ಮತ್ತು ತನ್ನ ಹೆಸರನ್ನು ಗುರುತಿಸುವುದು',
    },
    description: {
      en: 'Shows clear awareness and stops or looks up when own name is called; distinguishes between friendly and angry vocal tones.',
      hi: 'अपना नाम पुकारे जाने पर रुकना या देखना; प्यार भरी और गुस्से वाली आवाज में फर्क समझना।',
      kn: 'ತನ್ನ ಹೆಸರು ಕರೆದಾಗ ಕಣ್ಣೆತ್ತಿ ನೋಡುವುದು; ಪ್ರೀತಿಯ ಮತ್ತು ಗದರಿಕೆಯ ಧ್ವನಿಯ ವ್ಯತ್ಯಾಸ ತಿಳಿಯುವುದು.',
    },
    whyItMatters: {
      en: 'Receptive acoustic-semantic mapping. Early foundation for understanding language before producing speech.',
      hi: 'यह भाषा को समझने की ग्रहणशील क्षमता (Receptive Language) का विकास दिखाता है।',
      kn: 'ಮಾತು ಆಡುವ ಮುನ್ನ ಮಾತನ್ನು ಗ್ರಹಿಸುವ ಶಕ್ತಿ ಬೆಳೆಯುತ್ತಿರುವುದರ ಸಂಕೇತ.',
    },
    whatToLookFor: {
      en: 'Pauses action or smiles when called by name from across the room.',
      hi: 'कमरे में नाम पुकारने पर मुड़कर देखना या मुस्कुराना।',
      kn: 'ಹೆಸರು ಕರೆದಾಗ ಮಾಡುತ್ತಿದ್ದ ಕೆಲಸ ನಿಲ್ಲಿಸಿ ಮುಖ ತಿರುಗಿಸುವುದು.',
    },
    parentTips: {
      en: 'Use your child\'s name frequently in joyful, engaging daily routines.',
      hi: 'दिनचर्या में बच्चे का नाम प्यार से बार-बार लें।',
      kn: 'ಪ್ರತಿದಿನ ಪ್ರೀತಿಯಿಂದ ಮಗುವಿನ ಹೆಸರನ್ನು ಬಳಸಿ ಮಾತನಾಡಿ.',
    },
    citation: 'Pathways.org',
  },

  // ==========================================
  // 9 MONTHS
  // ==========================================
  {
    id: 'm_9m_aud_1',
    ageBandMonths: 9,
    domain: 'auditory_hearing',
    subsystem: 'auditory_localization',
    title: {
      en: 'Direct Horizontal + Downward Sound Localization',
      hi: 'सीधा क्षैतिज और नीचे की ओर ध्वनि स्थानीयकरण',
      kn: 'ನೇರ ಅಡ್ಡ ಮತ್ತು ಕೆಳಮುಖ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ',
    },
    description: {
      en: 'Directly localizes sounds to the side and below ear level (Northern & Downs Stage IV/V, ~30–40 dB HL).',
      hi: 'फर्श पर या नीचे गिरी किसी चीज की आवाज को तुरंत नीचे देखकर पहचानना।',
      kn: 'ಕೆಳಗೆ ಬಿದ್ದ ಆಟಿಕೆಯ ಶಬ್ದವನ್ನು ನೇರವಾಗಿ ಕೆಳಗೆ ನೋಡಿ ಗುರುತಿಸುತ್ತದೆ.',
    },
    whyItMatters: {
      en: '3D spatial hearing development and binaural acoustic integration.',
      hi: 'यह दोनों कानों के समन्वय से आवाज की गहराई और दिशा पहचानने की क्षमता दिखाता है।',
      kn: 'ಎರಡೂ ಕಿವಿಗಳ ಸಮನ್ವಯದಿಂದ ಶಬ್ದದ ದಿಕ್ಕನ್ನು 3D ರೂಪದಲ್ಲಿ ಗ್ರಹಿಸುವ ಸಾಮರ್ಥ್ಯ.',
    },
    whatToLookFor: {
      en: 'Looks directly downward when an object drops to the floor beside them.',
      hi: 'हाथ से खिलौना छूटने पर तुरंत नीचे फर्श की तरफ देखना।',
      kn: 'ವಸ್ತು ಕೆಳಗೆ ಬಿದ್ದಾಗ ನೇರವಾಗಿ ಕೆಳಮುಖವಾಗಿ ನೋಡುವುದು.',
    },
    parentTips: {
      en: 'Drop a soft ball or rattle gently near their feet while talking and watch them look straight down.',
      hi: 'बच्चे के पैरों के पास धीरे से खिलौना गिराकर देखें कि क्या वह नीचे देखता है।',
      kn: 'ಮಗುವಿನ ಪಕ್ಕದಲ್ಲಿ ಸಣ್ಣ ಆಟಿಕೆ ಹಾಕಿ ಕೆಳಗೆ ನೋಡಲು ಪ್ರೇರೇಪಿಸಿ.',
    },
    citation: 'Northern & Downs',
  },
  {
    id: 'm_9m_soc_1',
    ageBandMonths: 9,
    domain: 'social_pragmatic',
    subsystem: 'pragmatics',
    title: {
      en: 'Joint Attention & Basic Social Gestures (Waves "Bye", Reaches up)',
      hi: 'संयुक्त ध्यान और बुनियादी सामाजिक इशारे (टा-टा करना, हाथ उठाना)',
      kn: 'ಜಂಟಿ ಏಕಾಗ್ರತೆ ಮತ್ತು ಸನ್ನೆಗಳು (ಟಾಟಾ ಮಾಡುವುದು, ಕೈ ಎತ್ತುವುದು)',
    },
    description: {
      en: 'Follows point to an object, raises arms to be picked up, waves "bye-bye", and shares emotional expressions.',
      hi: 'गोद में आने के लिए हाथ उठाना, जाने वाले को "बाय-बाय" करना और इशारों को समझना।',
      kn: 'ಎತ್ತಿಕೊಳ್ಳಲು ಕೈ ಚಾಚುವುದು, ಯಾರಾದರೂ ಹೋಗುವಾಗ "ಟಾಟಾ" ಮಾಡುವುದು ಮತ್ತು ಸನ್ನೆಗಳಿಗೆ ಸ್ಪಂದಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'Joint attention and communicative gestures are the single strongest predictors of future vocabulary size at 24 months.',
      hi: 'इशारों का उपयोग आने वाले महीनों में शब्द सीखने की गति को तय करता है।',
      kn: 'ಸನ್ನೆಗಳ ಮೂಲಕ ಸಂವಹನವು ಭವಿಷ್ಯದ ಶಬ್ದ ಭಂಡಾರಕ್ಕೆ ಅತಿ ಮುಖ್ಯವಾದ ಅಡಿಪಾಯ.',
    },
    whatToLookFor: {
      en: 'Uses pointing, reaching, or waving deliberately to communicate a desire.',
      hi: 'अपनी बात समझाने के लिए हाथ हिलाना या किसी चीज की ओर इशारा करना।',
      kn: 'ತನ್ನ ಇಷ್ಟವನ್ನು ವ್ಯಕ್ತಪಡಿಸಲು ಬೆರಳು ಮಾಡಿ ತೋರಿಸುವುದು ಅಥವಾ ಕೈ ಬೀಸುವುದು.',
    },
    parentTips: {
      en: 'Wave "bye-bye" whenever family members leave. Point to pictures in books: "Look, a doggie!"',
      hi: 'घर से बाहर जाते समय "बाय-बाय" करें और किताबों में चित्रों की ओर इशारा करें।',
      kn: 'ಯಾರಾದರೂ ಹೊರಡುವಾಗ "ಟಾಟಾ" ಮಾಡಿ ಮತ್ತು ಪುಸ್ತಕದಲ್ಲಿ ಚಿತ್ರಗಳನ್ನು ಬೆರಳು ಮಾಡಿ ತೋರಿಸಿ.',
    },
    citation: 'CDC',
    isRedFlag: true,
  },
  {
    id: 'm_9m_exp_1',
    ageBandMonths: 9,
    domain: 'language_expressive',
    subsystem: 'phonology',
    title: {
      en: 'Variegated Babbling & Jargon Intonation',
      hi: 'विविಧ ध्वनियों वाली बैबलिंग (जैसे बा-दा-मा) और बातचीत जैसा लहजा',
      kn: 'ವೈವಿಧ್ಯಮಯ ತೊದಲು ನುಡಿಗಳು ಮತ್ತು ಮಾತಿನ ಧಾಟಿ',
    },
    description: {
      en: 'Combines different syllables in one breath (e.g. "ba-da-ma", "da-bu") with conversational adult-like rise and fall of voice tone (intonation contour).',
      hi: 'अलग-अलग अक्षरों को मिलाकर बोलना (जैसे "बा-दा-गू") और आवाज में सवाल या उत्साह जैसा लहजा लाना।',
      kn: 'ವಿವಿಧ ಅಕ್ಷರಗಳನ್ನು ಒಟ್ಟಿಗೆ ಸೇರಿಸಿ ಮಾತಿನ ಧಾಟಿಯಲ್ಲಿ ನುಡಿಯುವುದು.',
    },
    whyItMatters: {
      en: 'Phonological variety and suprasegmental prosody rehearsal preceding true lexical words.',
      hi: 'यह वास्तविक शब्द बोलने से ठीक पहले भाषा के उतार-चढ़ाव की तैयारी है।',
      kn: 'ನಿಜವಾದ ಪದಗಳನ್ನು ಆಡುವ ಮುನ್ನ ಧ್ವನಿಯ ಏರಿಳಿತಗಳನ್ನು ಕಲಿಯುವ ಹಂತ.',
    },
    whatToLookFor: {
      en: 'Babbling that sounds like foreign speech with questions and exclamations.',
      hi: 'ऐसा बोलना जैसे कोई अपनी ही भाषा में पूरी बात कह रहा हो।',
      kn: 'ತನ್ನದೇ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡುತ್ತಿರುವಂತೆ ಧ್ವನಿ ಹೊರಡಿಸುವುದು.',
    },
    parentTips: {
      en: 'Pause and listen closely, then answer: "Really? You don\'t say!" Validate their conversational tone.',
      hi: 'बच्चे की बात ध्यान से सुनकर कहें "अरे वाह, फिर क्या हुआ?"',
      kn: 'ಮಗುವಿನ ಮಾತನ್ನು ಸಾವಧಾನವಾಗಿ ಕೇಳಿ ಉತ್ತರಿಸಿ.',
    },
    citation: 'ASHA',
  },

  // ==========================================
  // 12 MONTHS (1 YEAR)
  // ==========================================
  {
    id: 'm_12m_rec_1',
    ageBandMonths: 12,
    domain: 'language_receptive',
    subsystem: 'semantics',
    title: {
      en: 'Understands Simple Words & 1-Step Gestured Commands',
      hi: 'साधारण शब्द और इशारे वाले निर्देश समझना ("नहीं", "इधर आओ")',
      kn: 'ಸರಳ ಸೂಚನೆಗಳು ಮತ್ತು ಪದಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ("ಇಲ್ಲಿ ಬಾ", "ಬೇಡ")',
    },
    description: {
      en: 'Understands "no", responds to name consistently, gives toy when asked with a reaching gesture, looks at named familiar objects ("Where is ball?").',
      hi: '"नहीं" का मतलब समझना, "खिलौना दो" कहने और हाथ आगे बढ़ाने पर खिलौना देना।',
      kn: '"ಬೇಡ" ಎಂದಾಗ ನಿಲ್ಲಿಸುವುದು, "ಚೆಂಡು ಎಲ್ಲಿ?" ಎಂದಾಗ ಹುಡುಕುವುದು ಮತ್ತು ಕೇಳಿದಾಗ ವಸ್ತು ಕೊಡುವುದು.',
    },
    whyItMatters: {
      en: 'Core receptive vocabulary landmark. Receptive understanding outpaces expressive output at this stage by roughly 4:1.',
      hi: 'यह दर्शाता है कि बच्चा शब्दों का अर्थ पूरी तरह समझने लगा है।',
      kn: 'ಮಗು ಪದಗಳ ಅರ್ಥವನ್ನು ಗ್ರಹಿಸುತ್ತಿರುವುದನ್ನು ಸ್ಪಷ್ಟಪಡಿಸುವ ಮಹತ್ವದ ಹಂತ.',
    },
    whatToLookFor: {
      en: 'Pauses behavior briefly when hearing a firm "No" or looks at the door when asked "Where is Daddy / ಅಪ್ಪ ಎಲ್ಲಿದ್ದಾರೆ?".',
      hi: '"नहीं" कहने पर रुकना या "पापा कहाँ हैं?" पूछने पर दरवाजे की ओर देखना।',
      kn: '"ಅಪ್ಪ ಎಲ್ಲಿದ್ದಾರೆ?" ಎಂದು ಕೇಳಿದಾಗ ಬಾಗಿಲಿನ ಕಡೆಗೆ ನೋಡುವುದು.',
    },
    parentTips: {
      en: 'Label objects constantly in your natural home languages (Hindi/Kannada/English). Keep requests direct and clear.',
      hi: 'घर की स्वाभाविक भाषा में वस्तुओं के नाम बार-बार दोहराएं।',
      kn: 'ಮನೆಯಲ್ಲಿ ಬಳಸುವ ಭಾಷೆಯಲ್ಲಿ ವಸ್ತುಗಳ ಹೆಸರನ್ನು ಪದೇ ಪದೇ ಹೇಳಿ ಪರಿಚಯಿಸಿ.',
    },
    citation: 'CDC',
    isRedFlag: true,
  },
  {
    id: 'm_12m_exp_1',
    ageBandMonths: 12,
    domain: 'language_expressive',
    subsystem: 'semantics',
    title: {
      en: 'Produces 1 to 3 Meaningful First Words (e.g. Mama, Papa, Dada, Milk/Haalu)',
      hi: '1 से 3 सार्थक शब्द बोलना (जैसे मम्मा, पापा, दूध, दादू)',
      kn: '1 ರಿಂದ 3 ಅರ್ಥಪೂರ್ಣ ಪದಗಳನ್ನು ಆಡುವುದು (ಅಮ್ಮ, ಅಪ್ಪ, ಹಾಲು, ಬಾ)',
    },
    description: {
      en: 'Uses at least 1–3 specific words with consistent meaning (not just random babbling). Uses word approximations purposefully.',
      hi: 'कम से कम 1 से 3 शब्दों का सही संदर्भ में उपयोग करना (जैसे सिर्फ मम्मी को देखकर "मम्मा" बोलना)।',
      kn: 'ನಿರ್ದಿಷ್ಟ ವ್ಯಕ್ತಿ ಅಥವಾ ವಸ್ತುವನ್ನು ಉದ್ದೇಶಿಸಿ ಕನಿಷ್ಠ 1 ರಿಂದ 3 ಅರ್ಥಪೂರ್ಣ ಪದಗಳನ್ನು ಆಡುವುದು.',
    },
    whyItMatters: {
      en: 'Transition from prelinguistic to linguistic communication. Groundbreaking communicative milestone.',
      hi: 'यह बच्चे के वास्तविक भाषा प्रयोग की ऐतिहासिक शुरुआत है।',
      kn: 'ಭಾಷಾ ಬಳಕೆಯ ಅಧಿಕೃತ ಮತ್ತು ಅತ್ಯಂತ ಸಂಭ್ರಮದ ಆರಂಭ.',
    },
    whatToLookFor: {
      en: 'Consistently uses a specific sound combination to refer to a specific person, animal, or object.',
      hi: 'किसी निश्चित वस्तु या व्यक्ति के लिए हमेशा एक ही शब्द का प्रयोग।',
      kn: 'ಯಾವುದೇ ಒಂದು ವಸ್ತುವನ್ನು ಕೇಳಲು ಯಾವಾಗಲೂ ಅದೇ ಪದವನ್ನು ಬಳಸುವುದು.',
    },
    parentTips: {
      en: 'Celebrate every first word! Avoid quizzing ("What is this?"). Instead, name and describe what the child looks at.',
      hi: 'बच्चे के हर शब्द पर खुशी जताएं और जो चीज वह देख रहा है उसका नाम बताएं।',
      kn: 'ಮಗು ಆಡುವ ಪ್ರತಿಯೊಂದು ಪದಕ್ಕೂ ಪ್ರೋತ್ಸಾಹ ನೀಡಿ ಮತ್ತು ಆಡಳಿತಾತ್ಮಕವಾಗಿ ಪ್ರಶ್ನಿಸಬೇಡಿ.',
    },
    citation: 'ASHA',
  },
  {
    id: 'm_12m_aud_1',
    ageBandMonths: 12,
    domain: 'auditory_hearing',
    subsystem: 'auditory_discrimination',
    title: {
      en: 'Listens Attentively & Recognizes Environmental Sounds',
      hi: 'ध्यान से सुनना और घर की आवाजों (दरवाजे की घंटी, गाड़ी की आवाज) को पहचानना',
      kn: 'ಗಮನವಿಟ್ಟು ಆಲಿಸುವುದು ಮತ್ತು ಪರಿಸರದ ಶಬ್ದಗಳನ್ನು (ಬೆಲ್, ವಾಹನದ ಹಾರ್ನ್) ಗುರುತಿಸುವುದು',
    },
    description: {
      en: 'Shows recognition of familiar environmental sounds (e.g. footsteps, mixer, phone ringing) by looking toward the source or smiling.',
      hi: 'फोन की घंटी, मिक्सी या कदमों की आवाज सुनकर उस तरफ देखना या प्रतिक्रिया देना।',
      kn: 'ಫೋನ್ ರಿಂಗ್, ವಾಹನದ ಸದ್ದು ಅಥವಾ ಬಾಗಿಲಿನ ಶಬ್ದ ಕೇಳಿದಾಗ ತಕ್ಷಣ ಆ ಕಡೆ ನೋಡುವುದು.',
    },
    whyItMatters: {
      en: 'Erber Auditory Identification level: Linking acoustic events to real-world objects and activities.',
      hi: 'यह आवाजों और वस्तुओं के बीच मानसिक संबंध स्थापित करने की क्षमता है।',
      kn: 'ಶ್ರವಣ ಶಬ್ದಗಳು ಮತ್ತು ಪರಿಸರದ ನಡುವಿನ ಸಂಬಂಧವನ್ನು ಗುರುತಿಸುವ ಪ್ರಕ್ರಿಯೆ.',
    },
    whatToLookFor: {
      en: 'Looks up from play when a familiar sound occurs in another room.',
      hi: 'दूसरे कमरे से आवाज आने पर खेलते-खेलते रुककर सुनना।',
      kn: 'ಪಕ್ಕದ ಕೋಣೆಯಿಂದ ಶಬ್ದ ಕೇಳಿದಾಗ ಆಟ ನಿಲ್ಲಿಸಿ ಆಲಿಸುವುದು.',
    },
    parentTips: {
      en: 'Point out everyday sounds: "Listen! Did you hear the car beep? / ಕೇಳು, ಗಾಡಿ ಹಾರ್ನ್ ಕೇಳಿಸ್ತಾ?"',
      hi: 'दैनिक आवाजों पर बच्चे का ध्यान दिलाएं: "सुनो! दरवाजे की घंटी बजी!"',
      kn: 'ಮನೆಯಲ್ಲಿ ಕೇಳಿಸುವ ಶಬ್ದಗಳನ್ನು ಮಗುವಿಗೆ ಗಮನಿಸಲು ಹೇಳಿ: "ಕೇಳು, ಬೆಲ್ ಬಾರಿಸ್ತಿದ್ದಾರೆ!"',
    },
    citation: 'AIISH',
  },

  // ==========================================
  // 15 MONTHS
  // ==========================================
  {
    id: 'm_15m_exp_1',
    ageBandMonths: 15,
    domain: 'language_expressive',
    subsystem: 'semantics',
    title: {
      en: 'Uses 3 to 5+ Words & Points to Ask for Things',
      hi: '3 से 5+ शब्द बोलना और चीज मांगने के लिए उंगली से इशारा करना',
      kn: '3 ರಿಂದ 5+ ಪದಗಳನ್ನು ಬಳಸುವುದು ಮತ್ತು ಬೇಕಾದುದನ್ನು ಬೆರಳು ಮಾಡಿ ಕೇಳುವುದು',
    },
    description: {
      en: 'Has a vocabulary of at least 3–5 words beyond Mama/Papa (e.g., "ball", "doggy", "more", "pani/haalu"), and points to request or show things.',
      hi: 'मम्मी-पापा के अलावा 3-5 और शब्द बोलना (जैसे पानी, गेंद, कुत्ता) और मांगते समय इशारा करना।',
      kn: 'ಅಮ್ಮ-ಅಪ್ಪ ಹೊರತುಪಡಿಸಿ 3-5 ಪದಗಳನ್ನು ಬಳಸುವುದು (ಉದಾ: ಹಾಲು, ಚೆಂಡು, ಬೇಕು) ಮತ್ತು ಬೆರಳು ಮಾಡುವುದು.',
    },
    whyItMatters: {
      en: 'Expressive vocabulary expansion and intentional proto-declarative pointing.',
      hi: 'यह बच्चे की संवाद करने और अपनी जरूरतें बताने की बढ़ती क्षमता है।',
      kn: 'ಶಬ್ದ ಭಂಡಾರದ ಬೆಳವಣಿಗೆ ಮತ್ತು ತನ್ನ ಇಷ್ಟಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ವ್ಯಕ್ತಪಡಿಸುವ ಕಲೆ.',
    },
    whatToLookFor: {
      en: 'Combines a vocalization with a direct finger point when wanting a snack or toy.',
      hi: 'चीज मांगते समय उसकी तरफ उंगली दिखाना और साथ में आवाज निकालना।',
      kn: 'ತಿಂಡಿ ಅಥವಾ ಆಟಿಕೆ ಕೇಳುವಾಗ ಶಬ್ದದ ಜೊತೆಗೆ ಬೆರಳು ಮಾಡಿ ತೋರಿಸುವುದು.',
    },
    parentTips: {
      en: 'Give choices: "Do you want the banana or the apple? / ಬಾಳೆಹಣ್ಣು ಬೇಕಾ ಸೇಬು ಬೇಕಾ?" and wait for them to point or attempt the word.',
      hi: 'बच्चे को विकल्प दें: "केला चाहिए या सेब?" और उसे बोलने या इशारा करने का मौका दें।',
      kn: 'ಆಯ್ಕೆಗಳನ್ನು ನೀಡಿ: "ಬಾಳೆಹಣ್ಣು ಬೇಕಾ ಅಥವಾ ಸೇಬು ಬೇಕಾ?" ಎಂದು ಕೇಳಿ ಉತ್ತರಿಸಲು ಬಿಡಿ.',
    },
    citation: 'CDC',
  },
  {
    id: 'm_15m_rec_1',
    ageBandMonths: 15,
    domain: 'language_receptive',
    subsystem: 'semantics',
    title: {
      en: 'Follows 1-Step Directions Without Gestures',
      hi: 'बिना इशारे के 1-चरणीय निर्देश मानना ("गेंद लाओ", "बैठ जाओ")',
      kn: 'ಸನ್ನೆಗಳಿಲ್ಲದೆ ಕೇವಲ ಮಾತಿನ 1 ಸೂಚನೆಯನ್ನು ಪಾಲಿಸುವುದು ("ಚೆಂಡು ತಗೊಂಡು ಬಾ")',
    },
    description: {
      en: 'Follows simple requests relying purely on spoken words without pointing (e.g., "Give me the ball", "Sit down", "Come here / ಇಲ್ಲಿ ಬಾ").',
      hi: 'बिना हाथ हिलाए केवल सुनकर सरल निर्देश मानना (जैसे "इधर आओ", "बैठो")।',
      kn: 'ಕೇವಲ ಮಾತಿನ ಸೂಚನೆ ಕೇಳಿ ಅದನ್ನು ಮಾಡುವುದು (ಉದಾ: "ಇಲ್ಲಿ ಬಾ", "ಕೂತ್ಕೋ").',
    },
    whyItMatters: {
      en: 'Demonstrates true auditory comprehension independent of visual context.',
      hi: 'यह दर्शाता है कि बच्चा केवल इशारों पर निर्भर नहीं है बल्कि भाषा के अर्थ को समझता है।',
      kn: 'ಮಗು ಕೇವಲ ಸನ್ನೆಗಳನ್ನು ನೋಡದೆ ಧ್ವನಿಯ ಅರ್ಥವನ್ನು ಗ್ರಹಿಸುತ್ತಿರುವುದರ ಸಾಕ್ಷಿ.',
    },
    whatToLookFor: {
      en: 'Carries out request when you keep your hands still and use only your voice.',
      hi: 'बिना इशारा किए केवल बोलने पर काम करना।',
      kn: 'ಕೈ ಸನ್ನೆ ಮಾಡದೆ ಕೇವಲ ಮಾತಿನಲ್ಲಿ ಹೇಳಿದಾಗ ಆ ಕೆಲಸ ಮಾಡುವುದು.',
    },
    parentTips: {
      en: 'Keep spoken commands simple and affirmative: "Put the shoes in the basket / ಶೂ ಬುಟ್ಟಿಯಲ್ಲಿಡು".',
      hi: 'छोटे और स्पष्ट वाक्य बोलें: "खिलौना बॉक्स में रखो।"',
      kn: 'ಸರಳವಾದ ಮತ್ತು ಸ್ಪಷ್ಟವಾದ ಸೂಚನೆಗಳನ್ನು ನೀಡಿ ಅಭ್ಯಾಸ ಮಾಡಿಸಿ.',
    },
    citation: 'ASHA',
  },

  // ==========================================
  // 18 MONTHS (1.5 YEARS)
  // ==========================================
  {
    id: 'm_18m_exp_1',
    ageBandMonths: 18,
    domain: 'language_expressive',
    subsystem: 'semantics',
    title: {
      en: 'Speaks 10 to 20+ Spontaneous Words',
      hi: '10 से 20+ शब्द स्वतः बोलना',
      kn: '10 ರಿಂದ 20+ ಸ್ವತಂತ್ರ ಪದಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಆಡುವುದು',
    },
    description: {
      en: 'Uses a growing vocabulary of at least 10–20 single words across daily routines (nouns, verbs, social words like "hi", "no", "bye", "all gone / ಮುಗೀತು").',
      hi: 'दैनिक जीवन में 10 से 20 से अधिक शब्द बोलना (जैसे खाना, पानी, आओ, जाओ, खत्म)।',
      kn: 'ದೈನಂದಿನ ಜೀವನದಲ್ಲಿ 10 ರಿಂದ 20ಕ್ಕೂ ಹೆಚ್ಚು ಪದಗಳನ್ನು ಬಳಸುವುದು (ಉದಾ: ಊಟ, ನೀರು, ಬಾ, ಹೋಯ್ತು).',
    },
    whyItMatters: {
      en: 'Critical vocabulary expansion window. Less than 6–10 words at 18 months is an established clinical red flag requiring SLP consultation.',
      hi: '18 महीने में 10 से कम शब्द बोलना भाषा विकास में देरी का स्पष्ट संकेत हो सकता है।',
      kn: '18 ತಿಂಗಳಿಗೆ 10ಕ್ಕಿಂತ ಕಡಿಮೆ ಪದಗಳಿದ್ದರೆ ಭಾಷಾ ತಜ್ಞರನ್ನು (SLP) ಭೇಟಿ ಮಾಡುವುದು ಸೂಕ್ತ.',
    },
    whatToLookFor: {
      en: 'Spontaneously uses words to name objects or request food/toys without prompting.',
      hi: 'बिना कहे खुद से चीजों का नाम लेना या मांगना।',
      kn: 'ಯಾರೂ ಹೇಳಿಕೊಡದಿದ್ದರೂ ತಾನಾಗಿಯೇ ವಸ್ತುಗಳನ್ನು ಹೆಸರಿಸುವುದು.',
    },
    parentTips: {
      en: 'Read interactive board books every day. Point to pictures and describe what animals are doing.',
      hi: 'रोजाना सचित्र किताबें पढ़ें और चित्रों के बारे में बात करें।',
      kn: 'ಪ್ರತಿದಿನ ಚಿತ್ರಪುಸ್ತಕಗಳನ್ನು ಓದಿ ತೋರಿಸಿ ಮತ್ತು ಕಥೆಗಳನ್ನು ಹೇಳಿ.',
    },
    citation: 'CDC',
    isRedFlag: true,
  },
  {
    id: 'm_18m_rec_1',
    ageBandMonths: 18,
    domain: 'language_receptive',
    subsystem: 'semantics',
    title: {
      en: 'Points to at Least 2–3 Body Parts & Familiar Pictures',
      hi: 'कम से कम 2-3 अंगों (नाक, आंख, कान) और परिचित चित्रों की ओर इशारा करना',
      kn: 'ಕನಿಷ್ಠ 2-3 ದೇಹದ ಭಾಗಗಳನ್ನು (ಮೂಗು, ಕಣ್ಣು, ಕಿವಿ) ಮತ್ತು ಚಿತ್ರಗಳನ್ನು ತೋರಿಸುವುದು',
    },
    description: {
      en: 'Points to correct body parts when asked ("Where are your eyes / ನಿನ್ನ ಕಣ್ಣು ಎಲ್ಲಿದೆ?") and points to named pictures in a book.',
      hi: '"आपकी नाक कहाँ है?" पूछने पर अपनी नाक पर उंगली रखना।',
      kn: '"ನಿನ್ನ ಮೂಗು ಎಲ್ಲಿ?" ಎಂದು ಕೇಳಿದಾಗ ಸರಿಯಾಗಿ ಮೂಗನ್ನು ಬೆರಳು ಮಾಡಿ ತೋರಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'Body part identification reflects self-concept schema and semantic receptive categorization.',
      hi: 'यह शारीरिक अंगों और शब्दों की पहचान की मानसिक क्षमता को दर्शाता है।',
      kn: 'ದೇಹದ ಭಾಗಗಳ ಅರಿವು ಮತ್ತು ಶಬ್ದ ಗ್ರಹಿಕೆಯ ಮಹತ್ವದ ಬೆಳವಣಿಗೆ.',
    },
    whatToLookFor: {
      en: 'Touches their own nose, eyes, hair, or tummy correctly when prompted.',
      hi: 'पूछने पर सही अंग को छूकर दिखाना।',
      kn: 'ಕೇಳಿದಾಗ ತನ್ನ ಮೂಗು, ಕಣ್ಣು ಅಥವಾ ಹೊಟ್ಟೆಯನ್ನು ಸರಿಯಾಗಿ ಮುಟ್ಟಿ ತೋರಿಸುವುದು.',
    },
    parentTips: {
      en: 'Sing body part songs during bath time (e.g. "Head, Shoulders, Knees, and Toes" or local Kannada/Hindi rhymes).',
      hi: 'नहाते समय शरीर के अंगों के नाम वाले प्यारे गाने गाएं।',
      kn: 'ಸ್ನಾನ ಮಾಡಿಸುವಾಗ ಅಥವಾ ಆಟವಾಡುವಾಗ ದೇಹದ ಭಾಗಗಳ ಹಾಡುಗಳನ್ನು ಹಾಡಿ ಕಲಿಸಿ.',
    },
    citation: 'Pathways.org',
  },
  {
    id: 'm_18m_speech_1',
    ageBandMonths: 18,
    domain: 'speech_articulation',
    subsystem: 'articulation',
    title: {
      en: 'Mastery of Early Consonants (/p, b, m, d, n, w, h/)',
      hi: 'शुरुआती ध्वनियों (प, ब, म, द, न, ह) का सही उच्चारण',
      kn: 'ಆರಂಭಿಕ ವ್ಯಂಜನಗಳ (ಪ, ಬ, ಮ, ದ, ನ, ಹ) ಸ್ಪಷ್ಟ ಉಚ್ಚಾರಣೆ',
    },
    description: {
      en: 'Uses early-developing consonants (Crowe & McLeod Early-8: /p, b, m, d, n, w, h/) correctly in word-initial positions (e.g. "papa", "ball", "dog", "no").',
      hi: 'शुरुआती व्यंजनों जैसे प, ब, म, द, न को शब्दों की शुरुआत में सही बोलना।',
      kn: 'ಆರಂಭಿಕ ವ್ಯಂಜನಗಳಾದ ಪ, ಬ, ಮ, ದ, ನ ಗಳನ್ನು ಪದಗಳ ಆರಂಭದಲ್ಲಿ ಸರಿಯಾಗಿ ಉಚ್ಚರಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'Crowe & McLeod (2020) norm benchmark. Speech intelligibility should reach ~25%–50% to familiar caregivers.',
      hi: 'यह स्पष्ट बोलने की दिशा में पहली ध्वनि श्रेणी (Early-8 Sounds) है।',
      kn: 'ಸ್ಪಷ್ಟ ಉಚ್ಚಾರಣೆಯ ಮೊದಲ ಹಂತ (Early-8 Consonants).',
    },
    whatToLookFor: {
      en: 'Clearly produces lip sounds (/p, b, m/) and tongue-tip sounds (/d, n/) in words.',
      hi: 'होठों और जीभ की नोक से बनने वाली ध्वनियों को साफ बोलना।',
      kn: 'ತುಟಿ ಮತ್ತು ನಾಲಿಗೆಯ ತುದಿಯಿಂದ ಬರುವ ಧ್ವನಿಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ನುಡಿಯುವುದು.',
    },
    parentTips: {
      en: 'Model words with clear lip movements. Emphasize initial sounds: "Mmm-milk! / ಪ-ಪ-ಪಾಪು!"',
      hi: 'शब्द बोलते समय अपने होठों की बनावट बच्चे को स्पष्ट दिखाएं।',
      kn: 'ಮಾತನಾಡುವಾಗ ಮುಖ ಮತ್ತು ತುಟಿಗಳ ಚಲನೆಯನ್ನು ಮಗು ನೋಡುವಂತೆ ಮಾಡಿ.',
    },
    citation: 'Crowe & McLeod (2020)',
  },

  // ==========================================
  // 24 MONTHS (2 YEARS)
  // ==========================================
  {
    id: 'm_24m_exp_1',
    ageBandMonths: 24,
    domain: 'language_expressive',
    subsystem: 'syntax_morphology',
    title: {
      en: 'Combines 2 Words (e.g. "More milk", "Papa go", "Haalu beku")',
      hi: '2 शब्दों को जोड़कर बोलना ("और दूध", "पापा जाओ", "गाड़ी आई")',
      kn: '2 ಪದಗಳನ್ನು ಸೇರಿಸಿ ಪುಟ್ಟ ವಾಕ್ಯಗಳನ್ನು ಆಡುವುದು ("ಹಾಲು ಬೇಕು", "ಅಪ್ಪ ಬಾ", "ಗಾಡಿ ಬಂತು")',
    },
    description: {
      en: 'Spontaneously creates novel 2-word combinations containing a noun + verb or adjective + noun (e.g., "big dog", "baby cry", "amma baa / मम्मी आओ").',
      hi: 'कम से कम 2 शब्दों को मिलाकर अपनी बात कहना (जैसे "मम्मी पानी", "गाड़ी रुको")।',
      kn: 'ಎರಡು ಪದಗಳನ್ನು ಒಟ್ಟಿಗೆ ಸೇರಿಸಿ ತಾನಾಗಿಯೇ ಪುಟ್ಟ ವಾಕ್ಯ ಮಾಡುವುದು (ಉದಾ: "ಅಮ್ಮ ಊಟ", "ಅಪ್ಪ ಹೋಯ್ತು").',
    },
    whyItMatters: {
      en: 'The beginning of syntax and grammar. Represents a fundamental qualitative leap in cognitive-linguistic architecture.',
      hi: 'यह व्याकरण और वाक्य रचना की शुरुआत का सबसे महत्वपूर्ण मील का पत्थर है।',
      kn: 'ವ್ಯಾಕರಣ ಮತ್ತು ವಾಕ್ಯ ರಚನೆಯ ಅತಿ ಮಹತ್ವದ ಹಂತ.',
    },
    whatToLookFor: {
      en: 'True spontaneous 2-word phrases (not just memorized single idioms like "thank you"). Vocabulary exceeds 50+ words.',
      hi: 'बच्चे का 50 से अधिक शब्दों का शब्दकोश होना और 2 शब्दों के नए वाक्य बनाना।',
      kn: 'ಮಗುವಿನಲ್ಲಿ ಕನಿಷ್ಠ 50ಕ್ಕೂ ಹೆಚ್ಚು ಪದಗಳಿದ್ದು, 2 ಪದಗಳನ್ನು ಜೋಡಿಸಿ ಮಾತನಾಡುವುದು.',
    },
    parentTips: {
      en: 'Expand on what your child says! If child says "Car", you say "Yes, big red car goes fast!"',
      hi: 'बच्चे के शब्दों को बड़ा करें: यदि वह कहे "गाड़ी", तो आप कहें "हाँ, बड़ी लाल गाड़ी!"',
      kn: 'ಮಗು "ಗಾಡಿ" ಎಂದಾಗ ನೀವು "ಹೌದು, ಕೆಂಪು ಕಾರು ವೇಗವಾಗಿ ಹೋಯ್ತು!" ಎಂದು ವಾಕ್ಯ ವಿಸ್ತರಿಸಿ.',
    },
    citation: 'CDC',
    isRedFlag: true,
  },
  {
    id: 'm_24m_rec_1',
    ageBandMonths: 24,
    domain: 'language_receptive',
    subsystem: 'semantics',
    title: {
      en: 'Follows 2-Step Related Commands & Understands Simple Concepts',
      hi: '2-चरणीय निर्देश मानना ("जूते उठाओ और दरवाजे के पास रखो")',
      kn: '2 ಹಂತಗಳ ಸೂಚನೆಗಳನ್ನು ಪಾಲಿಸುವುದು ("ಚೆಂಡು ತೆಗೆದುಕೊಂಡು ಬಂದು ಅಪ್ಪನಿಗೆ ಕೊಡು")',
    },
    description: {
      en: 'Follows 2-step connected directions (e.g. "Pick up your ball and put it in the box / ಚೆಂಡನ್ನು ತೆಗೆದುಕೊಂಡು ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಇಡು"). Knows at least 4 body parts and common actions.',
      hi: 'दो चरणों वाले निर्देश समझना (जैसे "किताब लाओ और टेबल पर रखो")।',
      kn: 'ಎರಡು ಹಂತದ ಸೂಚನೆಗಳನ್ನು ಸರಿಯಾಗಿ ಪಾಲಿಸುವುದು (ಉದಾ: "ಚಪ್ಪಲಿ ತಗೊಂಡು ಬಾಗಿಲಲ್ಲಿ ಇಡು").',
    },
    whyItMatters: {
      en: 'Reflects working memory capacity and multi-clause auditory comprehension.',
      hi: 'यह बच्चे की कार्यशील स्मृति (Working Memory) और समझने की गहराई को दर्शाता है।',
      kn: 'ಮಗುವಿನ ನೆನಪಿನ ಶಕ್ತಿ ಮತ್ತು ಸಂಕೀರ್ಣ ಸೂಚನೆಗಳನ್ನು ಅರ್ಥೈಸಿಕೊಳ್ಳುವ ಸಾಮರ್ಥ್ಯ.',
    },
    whatToLookFor: {
      en: 'Completes both parts of the command in sequence without requiring intermediate prompting.',
      hi: 'बिना दोबारा कहे दोनों कामों को क्रम से पूरा करना।',
      kn: 'ಯಾವುದೇ ನೆರವಿಲ್ಲದೆ ಎರಡೂ ಕೆಲಸಗಳನ್ನು ಒಂದಾದ ನಂತರ ಒಂದರಂತೆ ಮಾಡುವುದು.',
    },
    parentTips: {
      en: 'Make clean-up time a 2-step listening game: "Get the block and put it in the tub!"',
      hi: 'खिलौने समेटते समय खेल-खेल में 2 काम एक साथ करने को कहें।',
      kn: 'ಆಟಿಕೆಗಳನ್ನು ಜೋಡಿಸುವಾಗ ಆಟದ ರೀತಿಯಲ್ಲಿ ಎರಡು ಹಂತದ ಸೂಚನೆಗಳನ್ನು ನೀಡಿ.',
    },
    citation: 'ASHA',
  },
  {
    id: 'm_24m_speech_1',
    ageBandMonths: 24,
    domain: 'speech_articulation',
    subsystem: 'articulation',
    title: {
      en: 'Speech Intelligibility Reaches 50% to Caregivers',
      hi: 'माता-पिता के लिए बोली कम से कम 50% स्पष्ट होना',
      kn: 'ಪೋಷಕರಿಗೆ ಮಗುವಿನ ಮಾತು ಕನಿಷ್ಠ 50% ಸ್ಪಷ್ಟವಾಗಿ ಅರ್ಥವಾಗುವುದು',
    },
    description: {
      en: 'Familiar caregivers understand at least 50% of the child\'s connected utterances. Uses sounds /k, g, t/ emerging.',
      hi: 'घर के लोग बच्चे की कम से कम आधी बातें आसानी से समझ लेते हैं।',
      kn: 'ಮನೆಯವರು ಮಗು ಆಡುವ ಮಾತಿನಲ್ಲಿ ಕನಿಷ್ಠ ಅರ್ಧದಷ್ಟು ಮಾತನ್ನು ಸುಲಭವಾಗಿ ಗ್ರಹಿಸುತ್ತಾರೆ.',
    },
    whyItMatters: {
      en: 'Standard clinical intelligibility threshold (Flipsen 2006, ASHA).',
      hi: 'यह बोलने की स्पष्टता का मानक पैमाना है।',
      kn: 'ಉಚ್ಚಾರಣೆಯ ಸ್ಪಷ್ಟತೆಯ ಮಾನದಂಡ.',
    },
    whatToLookFor: {
      en: 'Most daily needs and comments can be understood without extensive guessing by close family members.',
      hi: 'परिवार के लोग अधिकांश बातें बिना किसी भ्रम के समझ सकें।',
      kn: 'ದೈನಂದಿನ ಅಗತ್ಯಗಳನ್ನು ಮನೆಯವರು ಸುಲಭವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು.',
    },
    parentTips: {
      en: 'Do not pretend to understand if you didn\'t. Ask gently: "Show me what you mean!" and repeat correctly.',
      hi: 'यदि समझ न आए, तो प्यार से कहें "मुझे दिखाकर बताओ" और फिर सही शब्द बोलें।',
      kn: 'ಅರ್ಥವಾಗದಿದ್ದಾಗ ಸಮಾಧಾನದಿಂದ "ತೋರಿಸು ಕಂದಾ" ಎಂದು ಹೇಳಿ ಸರಿಯಾದ ಪದವನ್ನು ಹೇಳಿಕೊಡಿ.',
    },
    citation: 'ASHA',
  },

  // ==========================================
  // 30 MONTHS (2.5 YEARS)
  // ==========================================
  {
    id: 'm_30m_exp_1',
    ageBandMonths: 30,
    domain: 'language_expressive',
    subsystem: 'syntax_morphology',
    title: {
      en: 'Uses 3-Word Phrases & Pronouns (Me, You, I, Mine)',
      hi: '3 शब्दों के वाक्य और सर्वनाम (मैं, तुम, मेरा) का प्रयोग',
      kn: '3 ಪದಗಳ ವಾಕ್ಯಗಳು ಮತ್ತು ಸರ್ವನಾಮಗಳ ಬಳಕೆ (ನಾನು, ನೀನು, ನನ್ನದು)',
    },
    description: {
      en: 'Speaks in 3-to-4 word phrases regularly (e.g. "I want juice", "Daddy go office", "Nange ಊಟ ಬೇಕು / मुझे खेलना है"). Uses basic pronouns.',
      hi: '3 शब्दों के वाक्य बोलना और "मैं", "मेरा", "तुम" जैसे सर्वनामों का सही उपयोग करना।',
      kn: '3 ಪದಗಳ ವಾಕ್ಯಗಳನ್ನು ಬಳಸುವುದು ಮತ್ತು "ನನಗೆ", "ನನ್ನದು", "ನೀನು" ಎಂದು ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುವುದು.',
    },
    whyItMatters: {
      en: 'Morphosyntactic growth and self-referencing pronoun acquisition.',
      hi: 'यह वाक्य विन्यास और व्याकरणिक संरचना के विकास को दर्शाता है।',
      kn: 'ವ್ಯಾಕರಣ ಮತ್ತು ವಾಕ್ಯ ರಚನೆಯಲ್ಲಿ ಸ್ವತಂತ್ರತೆಯ ಬೆಳವಣಿಗೆ.',
    },
    whatToLookFor: {
      en: 'Refers to self using pronouns or own name and communicates full thoughts.',
      hi: 'अपनी जरूरतों के लिए पूरे वाक्य बनाना।',
      kn: 'ತನ್ನ ಅಗತ್ಯಗಳನ್ನು 3 ಪದಗಳ ಪುಟ್ಟ ವಾಕ್ಯದಲ್ಲಿ ಹೇಳುವುದು.',
    },
    parentTips: {
      en: 'Narrate your day: "I am washing the spoons. You are drying them!"',
      hi: 'दिनभर जो काम कर रहे हैं, उस पर बच्चे से बात करें।',
      kn: 'ದಿನದ ಕೆಲಸಗಳನ್ನು ಮಗುವಿಗೆ ವರ್ಣಿಸುತ್ತಾ ಮಾತನಾಡಿ.',
    },
    citation: 'CDC',
  },
  {
    id: 'm_30m_rec_1',
    ageBandMonths: 30,
    domain: 'language_receptive',
    subsystem: 'semantics',
    title: {
      en: 'Understands Spatial Prepositions (In, On, Under)',
      hi: 'स्थान सूचक शब्द समझना (अंदर, ऊपर, नीचे)',
      kn: 'ಸ್ಥಳ ಸೂಚಕ ಪದಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು (ಒಳಗೆ, ಮೇಲೆ, ಕೆಳಗೆ)',
    },
    description: {
      en: 'Understands concepts of "in", "on", "under" (e.g. "Put the shoe under the chair / ಕುರ್ಚಿ ಕೆಳಗೆ ಶೂ ಇಡು").',
      hi: '"मेज के ऊपर", "कुर्सी के नीचे" जैसी बातों को सही समझना।',
      kn: '"ಕುರ್ಚಿ ಮೇಲೆ ಇಡು", "ಬಾಕ್ಸ್ ಒಳಗೆ ಹಾಕು" ಎಂಬ ಸ್ಥಳ ನಿರ್ದೇಶನಗಳನ್ನು ಅರ್ಥೈಸಿಕೊಳ್ಳುವುದು.',
    },
    whyItMatters: {
      en: 'Spatial cognition and prepositional receptive semantic development.',
      hi: 'स्थानिक अवधारणाओं और भाषा के संबंध को समझने की क्षमता।',
      kn: 'ಸ್ಥಳ ಮತ್ತು ವಸ್ತುಗಳ ನಡುವಿನ ಸಂಬಂಧವನ್ನು ಗ್ರಹಿಸುವ ಜ್ಞಾನ.',
    },
    whatToLookFor: {
      en: 'Places objects in the correct spatial location on first attempt.',
      hi: 'कहने पर वस्तु को सही जगह (ऊपर, नीचे या अंदर) रखना।',
      kn: 'ಹೇಳಿದ ಜಾಗದಲ್ಲಿ ವಸ್ತುವನ್ನು ಸರಿಯಾಗಿ ಇಡುವುದು.',
    },
    parentTips: {
      en: 'Play hide-and-seek with toys: "Look, the bear is under the pillow! / ಕರಡಿ ದಿಂಬಿನ ಕೆಳಗಿದೆ!"',
      hi: 'खिलौनों को छिपाकर ढूंढने का खेल खेलें: "देखो, भालू तकिए के नीचे है!"',
      kn: 'ಆಟಿಕೆಗಳನ್ನು ದಿಂಬಿನ ಕೆಳಗೆ ಅಥವಾ ಮೇಜಿನ ಮೇಲೆ ಇಟ್ಟು ಹುಡುಕುವ ಆಟವಾಡಿ.',
    },
    citation: 'Pathways.org',
  },

  // ==========================================
  // 36 MONTHS (3 YEARS)
  // ==========================================
  {
    id: 'm_36m_exp_1',
    ageBandMonths: 36,
    domain: 'language_expressive',
    subsystem: 'syntax_morphology',
    title: {
      en: 'Asks "Who?", "What?", "Where?", "Why?" Questions',
      hi: '"कौन?", "क्या?", "कहाँ?", "क्यों?" जैसे सवाल पूछना',
      kn: '"ಯಾರು?", "ಏನು?", "ಎಲ್ಲಿ?", "ಯಾಕೆ?" ಎಂಬ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳುವುದು',
    },
    description: {
      en: 'Constantly asks curious questions ("Why?", "Where is mama going? / ಅಮ್ಮ ಎಲ್ಲಿಗೆ ಹೋಗ್ತಾರೆ?"). Speaks in 4–5 word sentences.',
      hi: 'जिज्ञासा से सवाल पूछना ("यह क्या है?", "हम कहाँ जा रहे हैं?") और 4-5 शब्दों के वाक्य बोलना।',
      kn: 'ಕುತೂಹಲದಿಂದ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳುವುದು ("ಯಾಕೆ?", "ನಾವು ಎಲ್ಲಿಗೆ ಹೋಗ್ತೀವಿ?") ಮತ್ತು 4-5 ಪದಗಳ ವಾಕ್ಯಗಳನ್ನು ಬಳಸುವುದು.',
    },
    whyItMatters: {
      en: 'Inquisitive pragmatic language, causal reasoning, and conversational initiation.',
      hi: 'यह तार्किक सोच और बातचीत शुरू करने की क्षमता को दर्शाता है।',
      kn: 'ಚಿಂತನಾ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಸಂಭಾಷಣೆಯನ್ನು ಮುನ್ನಡೆಸುವ ಕಲೆ.',
    },
    whatToLookFor: {
      en: 'Uses question intonation and WH- question words frequently in daily conversation.',
      hi: 'बातचीत में सवाल पूछने के शब्दों का स्वाभाविक प्रयोग।',
      kn: 'ದೈನಂದಿನ ಮಾತುಕತೆಯಲ್ಲಿ ಪ್ರಶ್ನಾರ್ಥಕ ಪದಗಳ ಬಳಕೆ.',
    },
    parentTips: {
      en: 'Answer their "Why?" patiently and ask them back: "What do you think will happen? / ನಿನಗೆ ಏನನಿಸುತ್ತೆ ಹೇಳು!"',
      hi: 'बच्चे के सवालों का धैर्य से जवाब दें और उससे भी राय पूछें।',
      kn: 'ಮಗುವಿನ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸಮಾಧಾನದಿಂದ ಉತ್ತರಿಸಿ ಮತ್ತು ಮಗುವಿನ ಅಭಿಪ್ರಾಯವನ್ನೂ ಕೇಳಿ.',
    },
    citation: 'CDC',
  },
  {
    id: 'm_36m_speech_1',
    ageBandMonths: 36,
    domain: 'speech_articulation',
    subsystem: 'articulation',
    title: {
      en: 'Speech Intelligibility 75% to Strangers; Uses /k, g, f, t, d/',
      hi: 'अपरिचित लोगों को 75% बोली समझ आना; क, ग, फ, त, द ध्वनियों का प्रयोग',
      kn: 'ಹೊರಗಿನವರಿಗೆ ಮಗುವಿನ ಮಾತು 75% ಸ್ಪಷ್ಟವಾಗಿ ಅರ್ಥವಾಗುವುದು; ಕ, ಗ, ತ, ದ, ಫ ಧ್ವನಿಗಳ ಬಳಕೆ',
    },
    description: {
      en: 'Unfamiliar listeners understand 75% or more of the child\'s speech. Uses Middle-8 sounds (Crowe & McLeod: /k, g, f, t, d/) accurately in most words.',
      hi: 'अनजान लोग भी बच्चे की 75% से अधिक बातें समझ पाते हैं।',
      kn: 'ಹೊಸಬರು ಕೂಡ ಮಗುವಿನ ಮಾತಿನಲ್ಲಿ ಮುಕ್ಕಾಲು ಭಾಗವನ್ನು ಸುಲಭವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತಾರೆ.',
    },
    whyItMatters: {
      en: 'Critical benchmark before preschool entry (Flipsen 2006; ASHA). Speech should rarely sound like gibberish now.',
      hi: 'स्कूल जाने से पहले बोलने की स्पष्टता का यह अत्यंत महत्वपूर्ण मानक है।',
      kn: 'ಶಾಲಾ ಪೂರ್ವ ಹಂತದಲ್ಲಿ ಮಗುವಿನ ಮಾತು ಸ್ಪಷ್ಟವಾಗಿರಬೇಕಾದ ಪ್ರಮುಖ ಮಾನದಂಡ.',
    },
    whatToLookFor: {
      en: 'Neighbors, grandparents, and shopkeepers understand what the child asks for without parent translation.',
      hi: 'पड़ोसी और रिश्तेदार बिना माता-पिता की मदद के बच्चे की बात समझ सकें।',
      kn: 'ಪೋಷಕರ ಸಹಾಯವಿಲ್ಲದೆ ಇತರರು ಮಗುವಿನ ಮಾತನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು.',
    },
    parentTips: {
      en: 'Encourage conversations with extended family members in phone/video calls.',
      hi: 'रिश्तेदारों से फोन पर बातचीत करने के लिए बच्चे को प्रेरित करें।',
      kn: 'ವಿಡಿಯೋ ಕಾಲ್ ಅಥವಾ ಫೋನ್‌ನಲ್ಲಿ ಸಂಬಂಧಿಕರೊಂದಿಗೆ ಮಾತನಾಡಲು ಪ್ರೋತ್ಸಾಹಿಸಿ.',
    },
    citation: 'Crowe & McLeod (2020)',
    isRedFlag: true,
  },
  {
    id: 'm_36m_soc_1',
    ageBandMonths: 36,
    domain: 'social_pragmatic',
    subsystem: 'pragmatics',
    title: {
      en: 'Engages in Cooperative & Pretend Play (Takes Turns)',
      hi: 'साथियों के साथ खेलना और काल्पनिक खेल (डॉक्टर-डॉक्टर, रसोई का खेल)',
      kn: 'ಇತರ ಮಕ್ಕಳೊಂದಿಗೆ ಆಟವಾಡುವುದು ಮತ್ತು ಕಲ್ಪನಾ ಆಟಗಳು (ಡಾಕ್ಟರ್-ಪೇಷೆಂಟ್, ಅಡುಗೆ ಆಟ)',
    },
    description: {
      en: 'Plays cooperatively with other children, shares toys with gentle reminders, and creates imaginative make-believe stories with dolls/cars.',
      hi: 'दूसरे बच्चों के साथ मिलकर खेलना, अपनी बारी का इंतजार करना और काल्पनिक खेल खेलना।',
      kn: 'ಇತರ ಮಕ್ಕಳ ಜೊತೆ ಸರದಿಯಲ್ಲಿ ಆಡುವುದು ಮತ್ತು ಆಟಿಕೆಗಳಿಂದ ಕಲ್ಪನಾ ಲೋಕದ ಕಥೆಗಳನ್ನು ಕಟ್ಟುವುದು.',
    },
    whyItMatters: {
      en: 'Symbolic thought, theory of mind foundations, and peer pragmatic communication.',
      hi: 'यह सामाजिक सामंजस्य और कल्पनाशीलता के विकास को दिखाता है।',
      kn: 'ಸಾಮಾಜಿಕ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಸೃಜನಶೀಲ ಯೋಚನೆಯ ಉನ್ನತ ಹಂತ.',
    },
    whatToLookFor: {
      en: 'Feeds a toy teddy bear, talks for dolls, or pretends a cardboard box is a spaceship/train.',
      hi: 'गुड़िया को खाना खिलाने या बॉक्स को ट्रेन बनाने का अभिनय करना।',
      kn: 'ಬೊಂಬೆಗೆ ಊಟ ಮಾಡಿಸುವುದು ಅಥವಾ ಡಬ್ಬಿಯನ್ನು ರೈಲು ಎಂದು ಆಟವಾಡುವುದು.',
    },
    parentTips: {
      en: 'Join their pretend world! Ask: "Doctor, my teddy has a cough, what medicine should we give?"',
      hi: 'बच्चे के खेल में शामिल हों और मजेदार किरदार निभाएं।',
      kn: 'ಮಗುವಿನ ಆಟದಲ್ಲಿ ನೀವೂ ಪಾತ್ರವಹಿಸಿ ಮಗುವನ್ನು ಮಾತನಾಡಿಸಿ.',
    },
    citation: 'CDC',
  },

  // ==========================================
  // 48 MONTHS (4 YEARS)
  // ==========================================
  {
    id: 'm_48m_exp_1',
    ageBandMonths: 48,
    domain: 'language_expressive',
    subsystem: 'syntax_morphology',
    title: {
      en: 'Tells Multi-Sentence Stories & Uses Complex Grammar',
      hi: 'कहानियां सुनाना और जटिल वाक्यों (भूतकाल, बहुवचन) का सही प्रयोग',
      kn: 'ಕಥೆಗಳನ್ನು ಹೇಳುವುದು ಮತ್ತು ಸಂಕೀರ್ಣ ವ್ಯಾಕರಣವನ್ನು (ಭೂತಕಾಲ, ಬಹುವಚನ) ಬಳಸುವುದು',
    },
    description: {
      en: 'Narrates simple personal events with a beginning, middle, and end ("We went to the park and I saw a squirrel!"). Uses past tense and plurals correctly.',
      hi: 'अपने साथ हुई घटनाओं की छोटी कहानी सुनाना और सही भूतकाल का प्रयोग करना।',
      kn: 'ತನ್ನ ಅನುಭವಗಳನ್ನು ಕಥೆಯ ರೂಪದಲ್ಲಿ ಹೇಳುವುದು ("ನಾವು ಪಾರ್ಕ್‌ಗೆ ಹೋಗಿದ್ವಿ, ಅಲ್ಲಿ ಅಳಿಲು ನೋಡಿದೆ!").',
    },
    whyItMatters: {
      en: 'Narrative discourse development. Strongest single predictor of future reading comprehension and literacy success.',
      hi: 'यह भविष्य में पढ़ाई और लेखन की सफलता का सबसे बड़ा आधार है।',
      kn: 'ಮುಂದಿನ ಶೈಕ್ಷಣಿಕ ಯಶಸ್ಸು ಮತ್ತು ಓದು-ಬರಹಕ್ಕೆ ಇದು ಅತಿ ಮುಖ್ಯವಾದ ತಳಪಾಯ.',
    },
    whatToLookFor: {
      en: 'Can tell you what happened at preschool or daycare with meaningful sequence.',
      hi: 'दिनभर की मुख्य बातें क्रम से बता सकना।',
      kn: 'ಶಾಲೆಯಲ್ಲಿ ನಡೆದ ವಿಷಯಗಳನ್ನು ಒಂದಾದ ನಂತರ ಒಂದರಂತೆ ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುವುದು.',
    },
    parentTips: {
      en: 'Ask open-ended questions: "What was the funniest thing that happened today? / ಇವತ್ತು ನಡೆದ ತಮಾಷೆ ವಿಷಯ ಯಾವುದು ಹೇಳು!"',
      hi: 'बच्चे से खुले सवाल पूछें: "आज सबसे मजेदार बात क्या हुई?"',
      kn: 'ಮಗುವಿಗೆ ಮುಕ್ತವಾಗಿ ಮಾತನಾಡಲು ಅವಕಾಶ ನೀಡಿ: "ಇವತ್ತು ಪಾರ್ಕ್‌ನಲ್ಲಿ ಏನು ಮಾಡಿದ್ರಿ?"',
    },
    citation: 'ASHA',
  },
  {
    id: 'm_48m_speech_1',
    ageBandMonths: 48,
    domain: 'speech_articulation',
    subsystem: 'articulation',
    title: {
      en: 'Speech Intelligibility 90%–100% to Everyone',
      hi: 'सभी के लिए बोली 90% से 100% स्पष्ट होना; श, च, ज ध्वनियों की शुरुआत',
      kn: 'ಯಾರಿಗಾದರೂ ಮಗುವಿನ ಮಾತು 90% ರಿಂದ 100% ಸ್ಪಷ್ಟವಾಗಿ ಅರ್ಥವಾಗುವುದು; ಶ, ಚ, ಜ ಧ್ವನಿಗಳು',
    },
    description: {
      en: 'Speech is understood nearly 100% of the time by both familiar and unfamiliar listeners. Produces affricates /tʃ, dʒ/ (ch, j) and early fricatives /s, ʃ/ (s, sh).',
      hi: 'अनजान लोगों को भी बच्चे की लगभग 100% बातें आसानी से समझ आती हैं।',
      kn: 'ಹೊಸಬರಿಗೂ ಮತ್ತು ಶಿಕ್ಷಕರಿಗೂ ಮಗುವಿನ ಮಾತು ಬಹುತೇಕ ಸಂಪೂರ್ಣವಾಗಿ ಸ್ಪಷ್ಟವಾಗಿ ಅರ್ಥವಾಗುತ್ತದೆ.',
    },
    whyItMatters: {
      en: 'Standard clinical milestone for general population intelligibility (Crowe & McLeod 2020).',
      hi: 'यह पूर्ण उच्चारण स्पष्टता का प्रमुख मील का पत्थर है।',
      kn: 'ಪೂರ್ಣ ಉಚ್ಚಾರಣಾ ಸ್ಪಷ್ಟತೆಯ ಮಾನದಂಡ.',
    },
    whatToLookFor: {
      en: 'No communication breakdown during everyday interactions with teachers or peers.',
      hi: 'शिक्षकों या दोस्तों से बात करते समय बात न समझ आने की परेशानी न होना।',
      kn: 'ಶಿಕ್ಷಕರು ಮತ್ತು ಗೆಳೆಯರೊಂದಿಗೆ ಯಾವುದೇ ಸಂಕೋಚವಿಲ್ಲದೆ ಸರಾಗವಾಗಿ ಸಂವಹನ ನಡೆಸುವುದು.',
    },
    parentTips: {
      en: 'Read rhyming poems and tongue twisters together to build phonological awareness.',
      hi: 'कविताएं और तुकबंदी वाले गीत साथ में गाएं।',
      kn: 'ರಾಸಾಯನಿಕ ಲಯಬದ್ಧ ಕವನಗಳು ಮತ್ತು ಹಾಡುಗಳನ್ನು ಒಟ್ಟಿಗೆ ಹಾಡಿ.',
    },
    citation: 'Crowe & McLeod (2020)',
    isRedFlag: true,
  },

  // ==========================================
  // 60 MONTHS (5 YEARS)
  // ==========================================
  {
    id: 'm_60m_exp_1',
    ageBandMonths: 60,
    domain: 'language_expressive',
    subsystem: 'syntax_morphology',
    title: {
      en: 'Uses Future Tense & Complex Conjunctions (Because, If, When)',
      hi: 'भविष्यकाल और जटिल संयोजकों (क्योंकि, अगर, जब) का सहज प्रयोग',
      kn: 'ಭವಿಷ್ಯತ್ಕಾಲ ಮತ್ತು ಸಂಕೀರ್ಣ ಪದಗಳ ಬಳಕೆ (ಏಕೆಂದರೆ, ಆದರೆ, ಯಾವಾಗ)',
    },
    description: {
      en: 'Speaks clearly in full grammatically correct sentences using future tense ("We will go to Grandma\'s house tomorrow / ನಾಳೆ ಅಜ್ಜಿ ಮನೆಗೆ ಹೋಗ್ತೀವಿ") and conditional reasoning ("because it\'s raining").',
      hi: 'भविष्यकाल में बात करना और कारणों को स्पष्ट समझाना ("क्योंकि बारिश हो रही है")।',
      kn: 'ನಾಳೆ ನಡೆಯುವ ವಿಷಯಗಳನ್ನು ಭವಿಷ್ಯತ್ಕಾಲದಲ್ಲಿ ಹೇಳುವುದು ಮತ್ತು ಕಾರಣಗಳನ್ನು ವಿವರಿಸುವುದು ("ಮಳೆ ಬರ್ತಿದೆ ಅದಕ್ಕೆ").',
    },
    whyItMatters: {
      en: 'Metalinguistic maturity and readiness for formal primary school education.',
      hi: 'यह औपचारिक स्कूली शिक्षा के लिए भाषाई तत्परता को दर्शाता है।',
      kn: 'ಪ್ರಾಥಮಿಕ ಶಾಲಾ ಹಂತಕ್ಕೆ ಮಗು ಸಂಪೂರ್ಣವಾಗಿ ಸಿದ್ಧವಾಗಿರುವುದರ ಸೂಚನೆ.',
    },
    whatToLookFor: {
      en: 'Uses adult-like sentence construction and expresses complex logical thoughts with ease.',
      hi: 'वयस्कों की तरह पूर्ण और स्पष्ट वाक्य संरचना में बात करना।',
      kn: 'ದೊಡ್ಡವರಂತೆ ಪೂರ್ಣ ಪ್ರಮಾಣದ ವ್ಯಾಕರಣಬದ್ಧ ವಾಕ್ಯಗಳನ್ನು ಬಳಸುವುದು.',
    },
    parentTips: {
      en: 'Encourage child to explain how things work or plan tomorrow\'s schedule together.',
      hi: 'बच्चे से पूछें कि कोई खेल कैसे खेला जाता है या कल क्या-क्या करना है।',
      kn: 'ಯಾವುದಾದರೂ ಆಟದ ನಿಯಮಗಳನ್ನು ಮಗುವಿಗೆ ವಿವರಿಸಲು ಹೇಳಿ.',
    },
    citation: 'CDC',
  },
  {
    id: 'm_60m_speech_1',
    ageBandMonths: 60,
    domain: 'speech_articulation',
    subsystem: 'articulation',
    title: {
      en: 'Mastery of Late Sounds & Consonant Clusters (/s, z, l, r, th/)',
      hi: 'कठिन ध्वनियों और संयुक्त व्यंजनों (स, र, ल, संयुक्त अक्षर) पर नियंत्रण',
      kn: 'ಕಠಿಣ ಧ್ವನಿಗಳು ಮತ್ತು ಒತ್ತಕ್ಷರಗಳ (ಸ, ರ, ಲ, ತ್ರ, ಪ್ರ) ಸ್ಪಷ್ಟ ಉಚ್ಚಾರಣೆ',
    },
    description: {
      en: 'Accurately articulates late-developing consonants (Crowe & McLeod Late-8: /s, z, l, r, ʃ, θ/) and consonant blends ("play", "spoon", "train / ಟ್ರೈನ್").',
      hi: 'कठिन व्यंजनों जैसे स, र, ल और संयुक्त अक्षरों को साफ और शुद्ध बोलना।',
      kn: 'ಕಠಿಣ ವ್ಯಂಜನಗಳಾದ ಸ, ರ, ಲ ಮತ್ತು ಒತ್ತಕ್ಷರಗಳಿರುವ ಪದಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಉಚ್ಚರಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'Refined motor-speech coordination. Persistent distortions (e.g. lateral lisp or severe /r/ gliding) at 5+ years benefit from SLP articulation therapy.',
      hi: 'यह परिपक्व बोलने की क्षमता है। 5 वर्ष के बाद भी हकलाना या तुतलाना चिकित्सा का विषय हो सकता है।',
      kn: 'ಸ್ಪಷ್ಟ ಉಚ್ಚಾರಣೆಯ ಅಂತಿಮ ಹಂತ.',
    },
    whatToLookFor: {
      en: 'Smooth speech without persistent sound substitutions (e.g., saying "rabbit" instead of "wabbit").',
      hi: 'शब्दों में अक्षरों को बदले बिना सही और साफ बोलना।',
      kn: 'ಯಾವುದೇ ಅಕ್ಷರವನ್ನು ಬಿಡದೆ ಅಥವಾ ಬದಲಿಸದೆ ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡುವುದು.',
    },
    parentTips: {
      en: 'Play word-sound games: "What words start with the /s/ sound? Sun, soup, star!"',
      hi: 'ध्वनि पहचान वाले खेल खेलें: "स से शुरू होने वाले 3 शब्द बताओ!"',
      kn: 'ಧ್ವನಿ ಆಟಗಳನ್ನು ಆಡಿ: "ಸ ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುವ ಪದಗಳನ್ನು ಹೇಳು ನೋಡೋಣ!"',
    },
    citation: 'Crowe & McLeod (2020)',
  },
  {
    id: 'm_60m_soc_1',
    ageBandMonths: 60,
    domain: 'social_pragmatic',
    subsystem: 'pragmatics',
    title: {
      en: 'Maintains Multi-Turn Topic & Uses Conversational Politeness',
      hi: 'लंबे समय तक बातचीत का विषय बनाए रखना और शिष्टाचार के नियम समझना',
      kn: 'ಸಂಭಾಷಣೆಯನ್ನು ಮುಂದುವರಿಸುವುದು ಮತ್ತು ಸೌಜನ್ಯದ ನಡವಳಿಕೆಗಳನ್ನು ಪಾಲಿಸುವುದು',
    },
    description: {
      en: 'Can maintain a conversational topic for 4–5+ turns, introduces new topics smoothly, repairs misunderstandings, and adapts politeness according to the listener.',
      hi: 'किसी एक विषय पर 4-5 बार बारी-बारी से बात करना और अपनी बात समझाने के नए तरीके खोजना।',
      kn: 'ಒಂದೇ ವಿಷಯದ ಮೇಲೆ ಸತತವಾಗಿ ಮಾತನಾಡುವುದು ಮತ್ತು ಎದುರಿಗಿರುವವರಿಗೆ ತಕ್ಕಂತೆ ಮಾತನಾಡಲು ಕಲಿಯುವುದು.',
    },
    whyItMatters: {
      en: 'Full pragmatic competence and social communication fluency.',
      hi: 'यह सामाजिक संवाद और व्यक्तित्व के परिपक्व विकास का प्रतीक है।',
      kn: 'ಸಮಾಜದಲ್ಲಿ ಬೆರೆಯುವ ಮತ್ತು ಸಂಭಾಷಣೆ ನಡೆಸುವ ಪರಿಪಕ್ವ ಸಾಮರ್ಥ್ಯ.',
    },
    whatToLookFor: {
      en: 'Listens to others without constantly interrupting and responds thoughtfully to what the other person said.',
      hi: 'दूसरों की बात बीच में काटे बिना सुनना और विषय से जुड़ी बात कहना।',
      kn: 'ಇತರರ ಮಾತನ್ನು ನಡುವೆ ತಡೆಯದೆ ಆಲಿಸಿ, ಅದಕ್ಕೆ ತಕ್ಕಂತೆ ಮುಂದುವರಿಸುವುದು.',
    },
    parentTips: {
      en: 'Have daily family dinner conversations where everyone shares one highlight of their day.',
      hi: 'रात के खाने के समय परिवार के साथ बैठकर दिनभर की बातें साझा करने की आदत डालें।',
      kn: 'ರಾತ್ರಿಯ ಊಟದ ಸಮಯದಲ್ಲಿ ಕುಟುಂಬದವರೆಲ್ಲರೂ ಒಟ್ಟಿಗೆ ಕುಳಿತು ಮಾತನಾಡಲು ಅವಕಾಶ ಮಾಡಿಕೊಡಿ.',
    },
    citation: 'ASHA',
  }
];

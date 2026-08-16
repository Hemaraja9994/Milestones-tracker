import type { MilestoneWithMedia } from './allMilestones';

/**
 * GAP-FILL EXPANSION — additive only.
 *
 * COMPREHENSIVE_MILESTONES in src/data/milestones.ts is content-frozen and is not
 * edited by this file. An audit of that file found 61 milestones covering roughly one
 * domain per age band, with 20 band × domain cells empty. This file fills those cells
 * so every age band from 2 months to 6 years has coverage in every domain that is
 * clinically meaningful at that age.
 *
 * Merge in src/data/milestones.ts (or wherever the list is consumed):
 *
 *   import { COMPREHENSIVE_MILESTONES } from './milestones';
 *   import { MILESTONE_EXPANSION } from './milestonesExpansion';
 *   export const ALL_MILESTONES = [...COMPREHENSIVE_MILESTONES, ...MILESTONE_EXPANSION];
 *
 * Ids are prefixed `mx_` so they cannot collide with existing `m_` ids and so saved
 * assessment records keyed by milestone id stay valid.
 *
 * ⚠️ TRANSLATION REVIEW REQUIRED. English is drawn from the cited sources. The Hindi
 * and Kannada strings follow the register and vocabulary of the existing entries but
 * have NOT been reviewed by a native-speaking clinician. Review before publishing;
 * the app will function correctly either way.
 */
export const MILESTONE_EXPANSION: MilestoneWithMedia[] = [
  // =========================================================================
  // 2 MONTHS — receptive language
  // =========================================================================
  {
    id: 'mx_2m_rec_1',
    ageBandMonths: 2,
    domain: 'language_receptive',
    subsystem: 'semantics',
    title: {
      en: 'Attends to Familiar Voices',
      hi: 'जानी-पहचानी आवाज पर ध्यान देना',
      kn: 'ಪರಿಚಿತ ಧ್ವನಿಗೆ ಗಮನ ಕೊಡುವುದು',
    },
    description: {
      en: 'Becomes quiet or alert when a familiar caregiver speaks nearby; may shift eyes or still the body to listen.',
      hi: 'माता-पिता की आवाज सुनकर शांत हो जाना या ध्यान से सुनना; आंखें आवाज की दिशा में घुमाना।',
      kn: 'ಪರಿಚಿತರ ಮಾತು ಕೇಳಿದಾಗ ಸುಮ್ಮನಾಗುವುದು ಅಥವಾ ಎಚ್ಚರಗೊಂಡು ಆಲಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'Shows the infant is already separating familiar speech from other sound — the earliest measurable step in receptive language.',
      hi: 'यह दर्शाता है कि बच्चा अपनों की आवाज को दूसरी आवाजों से अलग पहचानने लगा है, जो समझने की पहली सीढ़ी है।',
      kn: 'ಮಗು ಪರಿಚಿತ ಮಾತನ್ನು ಇತರ ಶಬ್ದಗಳಿಂದ ಬೇರ್ಪಡಿಸಿ ಗುರುತಿಸುತ್ತಿದೆ ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತದೆ.',
    },
    whatToLookFor: {
      en: 'Crying softens, movement slows, or gaze searches when you begin speaking out of sight.',
      hi: 'आपके बोलना शुरू करने पर रोना कम होना, हलचल धीमी होना या आवाज ढूंढना।',
      kn: 'ನೀವು ಮಾತನಾಡಲು ಶುರುಮಾಡಿದಾಗ ಅಳು ಕಡಿಮೆಯಾಗುವುದು ಅಥವಾ ಶಬ್ದವನ್ನು ಹುಡುಕುವುದು.',
    },
    parentTips: {
      en: 'Narrate what you are doing while you move around the room, so your voice reaches your baby from different directions.',
      hi: 'कमरे में घूमते हुए बच्चे से बात करते रहें, जिससे आपकी आवाज अलग-अलग दिशाओं से उस तक पहुंचे।',
      kn: 'ಕೋಣೆಯಲ್ಲಿ ಓಡಾಡುತ್ತಾ ಮಗುವಿನೊಂದಿಗೆ ಮಾತನಾಡಿ, ನಿಮ್ಮ ಧ್ವನಿ ಬೇರೆ ಬೇರೆ ದಿಕ್ಕುಗಳಿಂದ ತಲುಪುವಂತೆ ಮಾಡಿ.',
    },
    citation: 'ASHA',
    mediaType: 'video',
    mediaUrl: 'https://pathways.org/video-library/',
    graphicIconName: 'listening',
  },

  // =========================================================================
  // 4 MONTHS — receptive language, cognitive
  // =========================================================================
  {
    id: 'mx_4m_rec_1',
    ageBandMonths: 4,
    domain: 'language_receptive',
    subsystem: 'semantics',
    title: {
      en: 'Responds to Your Voice with Sounds or Smiles',
      hi: 'आपकी आवाज सुनकर आवाज या मुस्कान से जवाब देना',
      kn: 'ನಿಮ್ಮ ಧ್ವನಿಗೆ ಶಬ್ದ ಅಥವಾ ನಗುವಿನಿಂದ ಪ್ರತಿಕ್ರಿಯಿಸುವುದು',
    },
    description: {
      en: 'Makes sounds back when you talk, and turns the head toward the direction of your voice.',
      hi: 'बात करने पर जवाब में आवाज निकालना और सिर आपकी आवाज की दिशा में घुमाना।',
      kn: 'ನೀವು ಮಾತನಾಡಿದಾಗ ಉತ್ತರವಾಗಿ ಶಬ್ದ ಮಾಡುವುದು ಮತ್ತು ಧ್ವನಿಯ ಕಡೆಗೆ ತಲೆ ತಿರುಗಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'Vocal turn-taking is the conversational scaffold on which words are later built, and head-turning confirms usable hearing in the speech range.',
      hi: 'बारी-बारी से आवाज निकालना बातचीत की नींव है, और सिर घुमाना यह पुष्टि करता है कि बच्चा बोली की आवाजें सुन पा रहा है।',
      kn: 'ಸರದಿಯಂತೆ ಶಬ್ದ ಮಾಡುವುದು ಸಂಭಾಷಣೆಯ ಅಡಿಪಾಯ; ತಲೆ ತಿರುಗಿಸುವುದು ಶ್ರವಣ ಸಾಮರ್ಥ್ಯವನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.',
    },
    whatToLookFor: {
      en: 'You speak, baby pauses, then answers with a coo or smile — a back-and-forth rather than random noise.',
      hi: 'आप बोलें, बच्चा रुके, फिर आवाज या मुस्कान से जवाब दे — यानी बारी-बारी से बातचीत।',
      kn: 'ನೀವು ಮಾತನಾಡಿದ ನಂತರ ಮಗು ಒಂದು ಕ್ಷಣ ನಿಂತು, ಆಮೇಲೆ ಶಬ್ದ ಅಥವಾ ನಗುವಿನಿಂದ ಉತ್ತರಿಸುವುದು.',
    },
    parentTips: {
      en: 'Leave a gap of three or four seconds after you speak. The pause is what teaches your baby it is their turn.',
      hi: 'बोलने के बाद तीन-चार सेकंड रुकें। यही चुप्पी बच्चे को सिखाती है कि अब उसकी बारी है।',
      kn: 'ಮಾತನಾಡಿದ ನಂತರ ಮೂರು-ನಾಲ್ಕು ಕ್ಷಣ ಕಾಯಿರಿ. ಈ ವಿರಾಮವೇ ಈಗ ತನ್ನ ಸರದಿ ಎಂದು ಮಗುವಿಗೆ ಕಲಿಸುತ್ತದೆ.',
    },
    citation: 'CDC',
    mediaType: 'video',
    mediaUrl: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-in-action.html',
    graphicIconName: 'turn_taking',
  },
  {
    id: 'mx_4m_cog_1',
    ageBandMonths: 4,
    domain: 'cognitive',
    subsystem: 'general_cognition',
    title: {
      en: 'Anticipates Feeding on Sight',
      hi: 'दूध देखकर पहले से समझ जाना',
      kn: 'ಹಾಲು ಕಂಡಾಗ ಮೊದಲೇ ನಿರೀಕ್ಷಿಸುವುದು',
    },
    description: {
      en: 'Opens the mouth or becomes visibly excited when the breast or bottle comes into view, before being touched.',
      hi: 'स्तन या बोतल देखते ही मुंह खोलना या खुश होकर हाथ-पैर चलाना, छूने से पहले ही।',
      kn: 'ಎದೆಹಾಲು ಅಥವಾ ಬಾಟಲಿ ಕಂಡ ತಕ್ಷಣ ಬಾಯಿ ತೆರೆಯುವುದು ಅಥವಾ ಸಂತೋಷದಿಂದ ಚಲಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'First observable evidence of anticipation — the infant links a sight to a coming event, the cognitive basis of expectation and later word learning.',
      hi: 'यह पहला संकेत है कि बच्चा किसी चीज को देखकर आगे क्या होगा, यह समझने लगा है — यही सोच-समझ और आगे शब्द सीखने का आधार है।',
      kn: 'ಕಂಡದ್ದನ್ನು ಮುಂದೆ ನಡೆಯುವುದಕ್ಕೆ ಜೋಡಿಸುವ ಮೊದಲ ಲಕ್ಷಣ; ಇದು ಚಿಂತನಾ ಬೆಳವಣಿಗೆಯ ಮತ್ತು ಮುಂದೆ ಪದ ಕಲಿಕೆಯ ಆಧಾರ.',
    },
    whatToLookFor: {
      en: 'Mouth opens, body stills or legs kick as soon as the bottle appears — not only once it touches the lips.',
      hi: 'बोतल दिखते ही मुंह खुलना या पैर चलाना — होंठ से लगने के बाद नहीं, बल्कि पहले ही।',
      kn: 'ಬಾಟಲಿ ಕಾಣಿಸಿದ ಕೂಡಲೇ ಬಾಯಿ ತೆರೆಯುವುದು ಅಥವಾ ಕಾಲು ಒದೆಯುವುದು — ತುಟಿಗೆ ತಾಗಿದ ಮೇಲೆ ಅಲ್ಲ.',
    },
    parentTips: {
      en: 'Hold the bottle in view for a moment and say the same short phrase each time before you begin. Routine builds prediction.',
      hi: 'दूध पिलाने से पहले बोतल एक पल दिखाएं और हर बार वही छोटा वाक्य कहें। एक जैसी दिनचर्या से बच्चा अनुमान लगाना सीखता है।',
      kn: 'ಹಾಲುಣಿಸುವ ಮೊದಲು ಬಾಟಲಿಯನ್ನು ಒಂದು ಕ್ಷಣ ತೋರಿಸಿ, ಪ್ರತಿ ಬಾರಿ ಅದೇ ಸಣ್ಣ ವಾಕ್ಯ ಹೇಳಿ. ಒಂದೇ ಕ್ರಮ ನಿರೀಕ್ಷೆಯನ್ನು ಬೆಳೆಸುತ್ತದೆ.',
    },
    citation: 'CDC',
    mediaType: 'video',
    mediaUrl: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-in-action.html',
    graphicIconName: 'anticipation',
  },

  // =========================================================================
  // 6 MONTHS — cognitive
  // =========================================================================
  {
    id: 'mx_6m_cog_1',
    ageBandMonths: 6,
    domain: 'cognitive',
    subsystem: 'general_cognition',
    title: {
      en: 'Explores Objects by Mouthing and Reaching',
      hi: 'चीजों को मुंह में डालकर और पकड़कर जांचना',
      kn: 'ವಸ್ತುಗಳನ್ನು ಬಾಯಿಗೆ ಹಾಕಿ, ಕೈಚಾಚಿ ಪರಿಶೀಲಿಸುವುದು',
    },
    description: {
      en: 'Reaches for a toy that is wanted and puts things in the mouth to examine them.',
      hi: 'पसंद का खिलौना लेने के लिए हाथ बढ़ाना और चीजों को जांचने के लिए मुंह में डालना।',
      kn: 'ಬೇಕಾದ ಆಟಿಕೆಗೆ ಕೈಚಾಚುವುದು ಮತ್ತು ವಸ್ತುಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ಬಾಯಿಗೆ ಹಾಕುವುದು.',
    },
    whyItMatters: {
      en: 'Goal-directed reaching shows intention, and oral exploration builds the sensory map of the mouth that later supports articulation.',
      hi: 'किसी चीज के लिए जानबूझकर हाथ बढ़ाना इच्छा दर्शाता है, और मुंह से जांचना मुंह की संवेदना विकसित करता है जो आगे बोलने में मदद करती है।',
      kn: 'ಉದ್ದೇಶಪೂರ್ವಕ ಕೈಚಾಚುವಿಕೆ ಇಚ್ಛೆಯನ್ನು ತೋರಿಸುತ್ತದೆ; ಬಾಯಿಯ ಪರಿಶೀಲನೆ ಮುಂದೆ ಉಚ್ಚಾರಣೆಗೆ ಸಹಾಯ ಮಾಡುವ ಸಂವೇದನೆಯನ್ನು ಬೆಳೆಸುತ್ತದೆ.',
    },
    whatToLookFor: {
      en: 'Chooses one toy over another and brings it deliberately to the mouth rather than batting at it by chance.',
      hi: 'कई खिलौनों में से एक चुनना और उसे जानबूझकर मुंह तक लाना, बस हाथ मारना नहीं।',
      kn: 'ಹಲವು ಆಟಿಕೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಆಯ್ದು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಬಾಯಿಗೆ ತರುವುದು.',
    },
    parentTips: {
      en: 'Offer two safe objects with different textures and let your baby choose. Name whichever one is picked up.',
      hi: 'दो सुरक्षित चीजें दें जिनकी बनावट अलग हो और बच्चे को चुनने दें। जो उठाए, उसका नाम बताएं।',
      kn: 'ಬೇರೆ ಬೇರೆ ಸ್ಪರ್ಶದ ಎರಡು ಸುರಕ್ಷಿತ ವಸ್ತುಗಳನ್ನು ಕೊಟ್ಟು ಮಗುವಿಗೆ ಆಯ್ಕೆ ಬಿಡಿ. ಎತ್ತಿಕೊಂಡದ್ದರ ಹೆಸರು ಹೇಳಿ.',
    },
    citation: 'CDC',
    mediaType: 'video',
    mediaUrl: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-in-action.html',
    graphicIconName: 'reaching',
  },

  // =========================================================================
  // 9 MONTHS — receptive language
  // =========================================================================
  {
    id: 'mx_9m_rec_1',
    ageBandMonths: 9,
    domain: 'language_receptive',
    subsystem: 'semantics',
    title: {
      en: 'Looks When Called and Understands "No"',
      hi: 'नाम पुकारने पर देखना और "नहीं" समझना',
      kn: 'ಹೆಸರು ಕರೆದಾಗ ನೋಡುವುದು ಮತ್ತು "ಬೇಡ" ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು',
    },
    description: {
      en: 'Turns and looks when their name is called, and briefly pauses an action when told "no".',
      hi: 'अपना नाम सुनकर मुड़कर देखना, और "नहीं" कहने पर कुछ पल के लिए रुक जाना।',
      kn: 'ತನ್ನ ಹೆಸರು ಕೇಳಿದಾಗ ತಿರುಗಿ ನೋಡುವುದು ಮತ್ತು "ಬೇಡ" ಎಂದಾಗ ಕ್ಷಣಕಾಲ ನಿಲ್ಲುವುದು.',
    },
    whyItMatters: {
      en: 'Name recognition and simple inhibition confirm that speech now carries meaning, not just sound. Absence at 9 months is a screening priority.',
      hi: 'अपना नाम पहचानना और मना करने पर रुकना दर्शाता है कि बोली अब सिर्फ आवाज नहीं, अर्थ रखती है। 9 महीने पर यह न होना जांच का कारण है।',
      kn: 'ಹೆಸರು ಗುರುತಿಸುವುದು ಮಾತಿಗೆ ಅರ್ಥವಿದೆ ಎಂಬುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ. 9 ತಿಂಗಳಲ್ಲಿ ಇದು ಇಲ್ಲದಿದ್ದರೆ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.',
    },
    whatToLookFor: {
      en: 'Responds to the name from behind or across the room, without seeing your face or being touched first.',
      hi: 'पीछे से या कमरे के दूसरी ओर से नाम पुकारने पर जवाब देना, आपका चेहरा देखे या छुए बिना।',
      kn: 'ಹಿಂದಿನಿಂದ ಅಥವಾ ಕೋಣೆಯ ಇನ್ನೊಂದು ಬದಿಯಿಂದ ಕರೆದಾಗ ಪ್ರತಿಕ್ರಿಯಿಸುವುದು.',
    },
    parentTips: {
      en: 'Use the same name every time — not several nicknames — until the response is reliable.',
      hi: 'जब तक बच्चा पक्का जवाब न देने लगे, हर बार एक ही नाम से पुकारें, कई उपनाम न बदलें।',
      kn: 'ಮಗು ಸ್ಥಿರವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸುವವರೆಗೆ ಪ್ರತಿ ಬಾರಿ ಒಂದೇ ಹೆಸರನ್ನು ಬಳಸಿ, ಹಲವು ಅಡ್ಡಹೆಸರುಗಳನ್ನು ಬದಲಿಸಬೇಡಿ.',
    },
    citation: 'CDC',
    mediaType: 'video',
    mediaUrl: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-in-action.html',
    graphicIconName: 'name_response',
    isRedFlag: true,
  },

  // =========================================================================
  // 12 MONTHS — auditory
  // =========================================================================
  {
    id: 'mx_12m_aud_1',
    ageBandMonths: 12,
    domain: 'auditory_hearing',
    subsystem: 'auditory_localization',
    title: {
      en: 'Direct Localization to the Side and Below',
      hi: 'आवाज की दिशा में सीधे और नीचे की ओर देखना',
      kn: 'ಪಕ್ಕದಲ್ಲಿ ಮತ್ತು ಕೆಳಗಿನ ಶಬ್ದವನ್ನು ನೇರವಾಗಿ ಗುರುತಿಸುವುದು',
    },
    description: {
      en: 'Turns directly to a quiet sound presented at the side, and localizes sound coming from below at approximately 25–35 dB in the sound field.',
      hi: 'बगल से आने वाली धीमी आवाज की ओर सीधे मुड़ना, और नीचे से आने वाली आवाज की दिशा पहचानना (लगभग 25–35 dB)।',
      kn: 'ಪಕ್ಕದಿಂದ ಬರುವ ಮೆಲುದನಿಯ ಕಡೆಗೆ ನೇರವಾಗಿ ತಿರುಗುವುದು ಮತ್ತು ಕೆಳಗಿನಿಂದ ಬರುವ ಶಬ್ದದ ದಿಕ್ಕನ್ನು ಗುರುತಿಸುವುದು (ಸುಮಾರು 25–35 dB).',
    },
    whyItMatters: {
      en: 'Stage 5 of Northern & Downs auditory maturation. Direct rather than searching localization marks a maturing binaural system and lowered behavioural threshold.',
      hi: 'यह नॉर्दर्न एंड डाउन्स की श्रवण परिपक्वता की पांचवीं अवस्था है। ढूंढने के बजाय सीधे मुड़ना दोनों कानों के तालमेल के परिपक्व होने का संकेत है।',
      kn: 'ಇದು Northern & Downs ಶ್ರವಣ ಪಕ್ವತೆಯ 5ನೇ ಹಂತ. ಹುಡುಕುವ ಬದಲು ನೇರವಾಗಿ ತಿರುಗುವುದು ಎರಡೂ ಕಿವಿಗಳ ಸಮನ್ವಯ ಪಕ್ವವಾಗುತ್ತಿದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ.',
    },
    whatToLookFor: {
      en: 'A single confident head-turn to the correct side, rather than scanning left and right to find the source.',
      hi: 'सही दिशा में एक ही बार आत्मविश्वास से सिर घुमाना, इधर-उधर ढूंढना नहीं।',
      kn: 'ಸರಿಯಾದ ದಿಕ್ಕಿಗೆ ಒಂದೇ ಸಲ ದೃಢವಾಗಿ ತಲೆ ತಿರುಗಿಸುವುದು, ಅತ್ತಿತ್ತ ಹುಡುಕದೆ.',
    },
    parentTips: {
      en: 'Play a quiet rattle out of sight at your baby\'s shoulder level and let them find it. Keep it soft — loud sounds test startle, not localization.',
      hi: 'बच्चे के कंधे की ऊंचाई पर, नजर से ओझल रहकर धीरे से खनखनाएं और उसे ढूंढने दें। आवाज धीमी रखें — तेज आवाज से सिर्फ चौंकना पता चलता है।',
      kn: 'ಮಗುವಿನ ಭುಜದ ಎತ್ತರದಲ್ಲಿ, ಕಾಣದಂತೆ ಮೆಲುವಾಗಿ ಗಂಟೆ ಅಲ್ಲಾಡಿಸಿ ಹುಡುಕಲು ಬಿಡಿ. ಶಬ್ದ ಮೆಲುವಾಗಿರಲಿ.',
    },
    citation: 'Northern & Downs',
    mediaType: 'illustration',
    graphicIconName: 'sound_turn',
  },

  // =========================================================================
  // 15 MONTHS — auditory
  // =========================================================================
  {
    id: 'mx_15m_aud_1',
    ageBandMonths: 15,
    domain: 'auditory_hearing',
    subsystem: 'auditory_localization',
    title: {
      en: 'Localizes Sound Directly in All Planes',
      hi: 'हर दिशा से आने वाली आवाज को सीधे पहचानना',
      kn: 'ಎಲ್ಲಾ ದಿಕ್ಕಿನ ಶಬ್ದವನ್ನು ನೇರವಾಗಿ ಗುರುತಿಸುವುದು',
    },
    description: {
      en: 'Locates a soft sound directly at the side, below and above, at approximately 25 dB in the sound field.',
      hi: 'धीमी आवाज को बगल, नीचे और ऊपर — हर दिशा से सीधे पहचान लेना (लगभग 25 dB)।',
      kn: 'ಮೆಲುದನಿಯನ್ನು ಪಕ್ಕ, ಕೆಳಗೆ ಮತ್ತು ಮೇಲಿನಿಂದಲೂ ನೇರವಾಗಿ ಗುರುತಿಸುವುದು (ಸುಮಾರು 25 dB).',
    },
    whyItMatters: {
      en: 'Completes the localization sequence in Northern & Downs. From here, auditory assessment shifts from where a sound is to what it means.',
      hi: 'यह नॉर्दर्न एंड डाउन्स के अनुसार दिशा पहचानने की प्रक्रिया पूरी करता है। इसके बाद जांच "आवाज कहां से आई" से "आवाज का मतलब क्या है" पर जाती है।',
      kn: 'Northern & Downs ಪ್ರಕಾರ ದಿಕ್ಕು ಗುರುತಿಸುವ ಹಂತ ಪೂರ್ಣಗೊಳ್ಳುತ್ತದೆ. ಮುಂದೆ ಪರೀಕ್ಷೆ ಶಬ್ದದ ಅರ್ಥದ ಕಡೆಗೆ ಸಾಗುತ್ತದೆ.',
    },
    whatToLookFor: {
      en: 'Looks up correctly for a sound above the head — the last plane to mature.',
      hi: 'सिर के ऊपर से आने वाली आवाज के लिए सही ढंग से ऊपर देखना — यह दिशा सबसे बाद में विकसित होती है।',
      kn: 'ತಲೆಯ ಮೇಲಿನಿಂದ ಬರುವ ಶಬ್ದಕ್ಕೆ ಸರಿಯಾಗಿ ಮೇಲೆ ನೋಡುವುದು — ಇದು ಕೊನೆಗೆ ಪಕ್ವವಾಗುವ ದಿಕ್ಕು.',
    },
    parentTips: {
      en: 'Hide a softly ticking clock or gentle music box at different heights during play and let your toddler point to where it is.',
      hi: 'खेल के दौरान धीरे बजने वाली घड़ी या म्यूजिक बॉक्स को अलग-अलग ऊंचाई पर छिपाएं और बच्चे को दिशा बताने दें।',
      kn: 'ಆಟದ ವೇಳೆ ಮೆಲುವಾಗಿ ಸದ್ದು ಮಾಡುವ ಗಡಿಯಾರವನ್ನು ಬೇರೆ ಬೇರೆ ಎತ್ತರದಲ್ಲಿ ಮುಚ್ಚಿಟ್ಟು ಎಲ್ಲಿದೆ ಎಂದು ತೋರಿಸಲು ಬಿಡಿ.',
    },
    citation: 'Northern & Downs',
    mediaType: 'illustration',
    graphicIconName: 'sound_turn',
  },

  // =========================================================================
  // 18 MONTHS — auditory, cognitive
  // =========================================================================
  {
    id: 'mx_18m_aud_1',
    ageBandMonths: 18,
    domain: 'auditory_hearing',
    subsystem: 'auditory_discrimination',
    title: {
      en: 'Identifies Familiar Sounds Without Seeing Them',
      hi: 'बिना देखे जानी-पहचानी आवाजें पहचानना',
      kn: 'ನೋಡದೆಯೇ ಪರಿಚಿತ ಶಬ್ದಗಳನ್ನು ಗುರುತಿಸುವುದು',
    },
    description: {
      en: 'Recognises everyday sounds heard out of sight — a doorbell, a vehicle, a family member arriving — and reacts appropriately.',
      hi: 'बिना देखे रोजमर्रा की आवाजें पहचानना — घंटी, गाड़ी, किसी के आने की आवाज — और उसी के अनुसार प्रतिक्रिया देना।',
      kn: 'ಕಾಣದೆ ಕೇಳಿದ ದಿನನಿತ್ಯದ ಶಬ್ದಗಳನ್ನು — ಬಾಗಿಲ ಗಂಟೆ, ವಾಹನ, ಮನೆಯವರ ಆಗಮನ — ಗುರುತಿಸಿ ಸೂಕ್ತವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'Erber level 3, identification: the child now labels sound, not merely detects or discriminates it. This is the auditory prerequisite for spoken comprehension.',
      hi: 'यह एर्बर के तीसरे स्तर (पहचान) को दर्शाता है — बच्चा अब आवाज को केवल सुनता नहीं, पहचानता भी है। यह बोली समझने के लिए आवश्यक है।',
      kn: 'ಇದು Erber ನ 3ನೇ ಹಂತ (ಗುರುತಿಸುವಿಕೆ). ಮಗು ಈಗ ಶಬ್ದವನ್ನು ಕೇವಲ ಕೇಳುವುದಿಲ್ಲ, ಗುರುತಿಸುತ್ತದೆ — ಮಾತು ಅರ್ಥವಾಗಲು ಇದು ಅಗತ್ಯ.',
    },
    whatToLookFor: {
      en: 'Runs to the door at the doorbell, or looks to the window at a familiar vehicle, before anyone points it out.',
      hi: 'घंटी बजने पर दरवाजे की ओर दौड़ना, या जानी-पहचानी गाड़ी की आवाज पर खिड़की की ओर देखना — किसी के बताने से पहले।',
      kn: 'ಗಂಟೆ ಬಾರಿಸಿದಾಗ ಬಾಗಿಲಿನ ಕಡೆಗೆ ಓಡುವುದು ಅಥವಾ ಪರಿಚಿತ ವಾಹನದ ಸದ್ದಿಗೆ ಕಿಟಕಿಯ ಕಡೆ ನೋಡುವುದು.',
    },
    parentTips: {
      en: 'Name sounds as they happen: "that is the pressure cooker", "that is Ajji at the gate". Labelling turns noise into meaning.',
      hi: 'जो आवाज आए, उसका नाम बताएं: "यह कुकर की सीटी है", "यह दादी दरवाजे पर हैं"। नाम बताने से आवाज का अर्थ बनता है।',
      kn: 'ಶಬ್ದ ಬಂದಾಗ ಅದರ ಹೆಸರು ಹೇಳಿ: "ಅದು ಕುಕ್ಕರ್ ಸದ್ದು", "ಅದು ಅಜ್ಜಿ ಬಾಗಿಲಲ್ಲಿ". ಹೆಸರಿಡುವುದು ಶಬ್ದಕ್ಕೆ ಅರ್ಥ ಕೊಡುತ್ತದೆ.',
    },
    citation: 'AIISH',
    mediaType: 'illustration',
    graphicIconName: 'sound_identify',
  },
  {
    id: 'mx_18m_cog_1',
    ageBandMonths: 18,
    domain: 'cognitive',
    subsystem: 'general_cognition',
    title: {
      en: 'Copies Household Chores',
      hi: 'घर के कामों की नकल करना',
      kn: 'ಮನೆಗೆಲಸವನ್ನು ಅನುಕರಿಸುವುದು',
    },
    description: {
      en: 'Imitates you doing chores, such as sweeping with a broom or wiping a surface, and plays with toys in a simple functional way.',
      hi: 'झाड़ू लगाना या पोंछा करना जैसे कामों की नकल करना, और खिलौनों का सही तरीके से उपयोग करना।',
      kn: 'ಪೊರಕೆ ಹಿಡಿಯುವುದು ಅಥವಾ ಒರೆಸುವಂತಹ ಕೆಲಸಗಳನ್ನು ಅನುಕರಿಸುವುದು ಮತ್ತು ಆಟಿಕೆಗಳನ್ನು ಸರಿಯಾಗಿ ಬಳಸುವುದು.',
    },
    whyItMatters: {
      en: 'Deferred imitation shows the child holds and reproduces a remembered sequence — the same representational skill that lets a word stand for a thing.',
      hi: 'बाद में नकल करना दर्शाता है कि बच्चा देखी हुई क्रिया याद रखकर दोहरा सकता है — यही क्षमता शब्दों को अर्थ देने में काम आती है।',
      kn: 'ನಂತರ ಅನುಕರಿಸುವುದು ಮಗು ನೆನಪಿಟ್ಟ ಕ್ರಮವನ್ನು ಪುನರಾವರ್ತಿಸಬಲ್ಲದು ಎಂದು ತೋರಿಸುತ್ತದೆ — ಪದಗಳಿಗೆ ಅರ್ಥ ಬರುವುದೂ ಇದೇ ಸಾಮರ್ಥ್ಯದಿಂದ.',
    },
    whatToLookFor: {
      en: 'Picks up a cloth and wipes, or pushes a broom, hours after having watched you — not only in the moment.',
      hi: 'आपको देखने के घंटों बाद कपड़ा उठाकर पोंछना या झाड़ू चलाना — सिर्फ उसी वक्त नहीं।',
      kn: 'ನಿಮ್ಮನ್ನು ನೋಡಿದ ಗಂಟೆಗಳ ನಂತರವೂ ಬಟ್ಟೆ ಎತ್ತಿ ಒರೆಸುವುದು ಅಥವಾ ಪೊರಕೆ ಹಿಡಿಯುವುದು.',
    },
    parentTips: {
      en: 'Give your toddler a small cloth or dustpan of their own during your own chores and describe each step aloud.',
      hi: 'अपने काम के समय बच्चे को उसका छोटा कपड़ा या सूपड़ा दें और हर कदम बोलकर बताएं।',
      kn: 'ನಿಮ್ಮ ಕೆಲಸದ ವೇಳೆ ಮಗುವಿಗೆ ಅದರದೇ ಸಣ್ಣ ಬಟ್ಟೆ ಕೊಟ್ಟು, ಪ್ರತಿ ಹಂತವನ್ನೂ ಹೇಳುತ್ತಾ ಸಾಗಿ.',
    },
    citation: 'CDC',
    mediaType: 'video',
    mediaUrl: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-in-action.html',
    graphicIconName: 'imitation',
  },

  // =========================================================================
  // 24 MONTHS — auditory, cognitive
  // =========================================================================
  {
    id: 'mx_24m_aud_1',
    ageBandMonths: 24,
    domain: 'auditory_hearing',
    subsystem: 'auditory_discrimination',
    title: {
      en: 'Discriminates Similar-Sounding Words',
      hi: 'मिलती-जुलती आवाज वाले शब्दों में अंतर करना',
      kn: 'ಒಂದೇ ರೀತಿ ಕೇಳುವ ಪದಗಳ ನಡುವೆ ವ್ಯತ್ಯಾಸ ಗುರುತಿಸುವುದು',
    },
    description: {
      en: 'Points to the correct picture or object when given a choice between two words differing in a single sound.',
      hi: 'दो ऐसे शब्दों में से जिनमें केवल एक ध्वनि का फर्क हो, सही चित्र या चीज की ओर इशारा करना।',
      kn: 'ಒಂದೇ ಧ್ವನಿಯಲ್ಲಿ ಭಿನ್ನವಾಗಿರುವ ಎರಡು ಪದಗಳ ನಡುವೆ ಸರಿಯಾದ ಚಿತ್ರ ಅಥವಾ ವಸ್ತುವನ್ನು ತೋರಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'Fine-grained phonemic discrimination underpins vocabulary growth and later literacy. Weakness here can persist after conductive hearing loss from recurrent otitis media.',
      hi: 'ध्वनियों का सूक्ष्म अंतर पहचानना शब्द भंडार और आगे पढ़ने-लिखने की नींव है। बार-बार कान बहने के बाद यह कमजोरी बनी रह सकती है।',
      kn: 'ಸೂಕ್ಷ್ಮ ಧ್ವನಿ ವ್ಯತ್ಯಾಸ ಗುರುತಿಸುವಿಕೆ ಪದಸಂಪತ್ತು ಮತ್ತು ಮುಂದಿನ ಓದಿನ ಆಧಾರ. ಪದೇ ಪದೇ ಕಿವಿ ಸೋರಿದ ನಂತರ ಈ ದೌರ್ಬಲ್ಯ ಉಳಿಯಬಹುದು.',
    },
    whatToLookFor: {
      en: 'Chooses correctly and consistently across several trials, without watching your lips or following your gaze.',
      hi: 'कई बार लगातार सही चुनना, आपके होंठ देखे या आपकी नजर का पीछा किए बिना।',
      kn: 'ಹಲವು ಬಾರಿ ಸ್ಥಿರವಾಗಿ ಸರಿಯಾಗಿ ಆಯ್ದುಕೊಳ್ಳುವುದು, ನಿಮ್ಮ ತುಟಿ ನೋಡದೆ.',
    },
    parentTips: {
      en: 'Play a two-picture choosing game with word pairs from your home language, covering your mouth so only listening is used.',
      hi: 'अपनी भाषा के मिलते-जुलते शब्दों के दो चित्र दिखाकर चुनने का खेल खेलें, और अपना मुंह ढक लें ताकि बच्चा केवल सुनकर पहचाने।',
      kn: 'ನಿಮ್ಮ ಭಾಷೆಯ ಹೋಲುವ ಪದಗಳ ಎರಡು ಚಿತ್ರ ತೋರಿಸಿ ಆಯ್ಕೆ ಆಟ ಆಡಿ; ಬಾಯಿ ಮುಚ್ಚಿಕೊಂಡು ಕೇವಲ ಕೇಳಿ ಗುರುತಿಸಲು ಬಿಡಿ.',
    },
    citation: 'AIISH',
    mediaType: 'illustration',
    graphicIconName: 'sound_discriminate',
  },
  {
    id: 'mx_24m_cog_1',
    ageBandMonths: 24,
    domain: 'cognitive',
    subsystem: 'general_cognition',
    title: {
      en: 'Uses Switches, Knobs and Buttons; Plays with Several Toys Together',
      hi: 'स्विच, बटन और घुंडी चलाना; कई खिलौनों को साथ मिलाकर खेलना',
      kn: 'ಸ್ವಿಚ್, ಗುಂಡಿ, ಗಿರಗಟ್ಟೆ ಬಳಸುವುದು; ಹಲವು ಆಟಿಕೆಗಳನ್ನು ಒಟ್ಟಿಗೆ ಬಳಸಿ ಆಟ',
    },
    description: {
      en: 'Operates simple mechanisms such as switches and knobs, and plays with more than one toy at the same time, for example putting food on a toy plate.',
      hi: 'स्विच और घुंडी जैसी साधारण चीजें चलाना, और एक साथ कई खिलौनों से खेलना, जैसे खिलौने की थाली में खाना रखना।',
      kn: 'ಸ್ವಿಚ್, ಗುಂಡಿಗಳಂತಹ ಸರಳ ಸಾಧನಗಳನ್ನು ಬಳಸುವುದು ಮತ್ತು ಒಂದೇ ಸಮಯದಲ್ಲಿ ಹಲವು ಆಟಿಕೆಗಳಿಂದ ಆಡುವುದು — ಉದಾ. ಆಟಿಕೆ ತಟ್ಟೆಯಲ್ಲಿ ಆಹಾರ ಇಡುವುದು.',
    },
    whyItMatters: {
      en: 'Combining objects in play parallels combining words into phrases; both require holding two ideas in relation at once.',
      hi: 'खेल में दो चीजों को जोड़ना और बोलने में दो शब्दों को जोड़ना — दोनों में एक साथ दो बातें दिमाग में रखनी पड़ती हैं।',
      kn: 'ಆಟದಲ್ಲಿ ಎರಡು ವಸ್ತುಗಳನ್ನು ಜೋಡಿಸುವುದು ಮತ್ತು ಎರಡು ಪದಗಳನ್ನು ಸೇರಿಸಿ ಮಾತನಾಡುವುದು ಒಂದೇ ಸಾಮರ್ಥ್ಯದ ಎರಡು ರೂಪ.',
    },
    whatToLookFor: {
      en: 'Two toys used in relation to each other — a spoon to a bowl, a doll to a cloth — not each explored separately.',
      hi: 'दो खिलौनों को एक-दूसरे के साथ इस्तेमाल करना — चम्मच से कटोरी, गुड़िया को कपड़ा — अलग-अलग नहीं।',
      kn: 'ಎರಡು ಆಟಿಕೆಗಳನ್ನು ಪರಸ್ಪರ ಸಂಬಂಧದಲ್ಲಿ ಬಳಸುವುದು — ಚಮಚ ಬಟ್ಟಲಿಗೆ, ಗೊಂಬೆಗೆ ಬಟ್ಟೆ.',
    },
    parentTips: {
      en: 'Set out a cup and spoon beside a doll and let your child decide what goes with what. Resist demonstrating first.',
      hi: 'गुड़िया के पास कप और चम्मच रखें और बच्चे को खुद तय करने दें कि किसके साथ क्या जाता है। पहले खुद दिखाने से बचें।',
      kn: 'ಗೊಂಬೆಯ ಪಕ್ಕ ಲೋಟ ಮತ್ತು ಚಮಚ ಇಡಿ, ಯಾವುದಕ್ಕೆ ಯಾವುದು ಎಂದು ಮಗುವೇ ನಿರ್ಧರಿಸಲಿ. ಮೊದಲೇ ತೋರಿಸಬೇಡಿ.',
    },
    citation: 'CDC',
    mediaType: 'video',
    mediaUrl: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-in-action.html',
    graphicIconName: 'combined_play',
  },

  // =========================================================================
  // 30 MONTHS — social, speech
  // =========================================================================
  {
    id: 'mx_30m_soc_1',
    ageBandMonths: 30,
    domain: 'social_pragmatic',
    subsystem: 'pragmatics',
    title: {
      en: 'Plays Beside Other Children and Shows What They Can Do',
      hi: 'दूसरे बच्चों के साथ खेलना और अपनी चीजें दिखाना',
      kn: 'ಇತರ ಮಕ್ಕಳ ಜೊತೆ ಆಡುವುದು ಮತ್ತು ತನ್ನ ಸಾಧನೆ ತೋರಿಸುವುದು',
    },
    description: {
      en: 'Plays next to other children and sometimes with them, and calls you to show what they can do.',
      hi: 'दूसरे बच्चों के पास और कभी उनके साथ खेलना, और अपनी बनाई चीज दिखाने के लिए आपको बुलाना।',
      kn: 'ಇತರ ಮಕ್ಕಳ ಪಕ್ಕದಲ್ಲಿ, ಕೆಲವೊಮ್ಮೆ ಅವರ ಜೊತೆ ಆಡುವುದು ಮತ್ತು ತಾನು ಮಾಡಿದ್ದನ್ನು ತೋರಿಸಲು ನಿಮ್ಮನ್ನು ಕರೆಯುವುದು.',
    },
    whyItMatters: {
      en: 'Showing and sharing attention for its own sake is a pragmatic milestone; its absence is more predictive of social communication difficulty than vocabulary size.',
      hi: 'बस दिखाने और साथ बांटने के लिए बुलाना सामाजिक संवाद का महत्वपूर्ण पड़ाव है; इसकी कमी शब्दों की संख्या से ज्यादा चिंता की बात है।',
      kn: 'ತೋರಿಸಲು ಮತ್ತು ಹಂಚಿಕೊಳ್ಳಲು ಕರೆಯುವುದು ಪ್ರಮುಖ ಸಾಮಾಜಿಕ ಹಂತ; ಇದರ ಕೊರತೆ ಪದಸಂಪತ್ತಿನ ಕೊರತೆಗಿಂತ ಹೆಚ್ಚು ಗಮನಾರ್ಹ.',
    },
    whatToLookFor: {
      en: 'Looks back at you to check you are watching, then continues — sharing the moment rather than asking for help.',
      hi: 'यह देखने के लिए पीछे मुड़कर देखना कि आप देख रहे हैं या नहीं, फिर खेलना जारी रखना — मदद मांगने के लिए नहीं, बस साथ बांटने के लिए।',
      kn: 'ನೀವು ನೋಡುತ್ತಿದ್ದೀರಾ ಎಂದು ಹಿಂತಿರುಗಿ ನೋಡಿ ಮುಂದುವರಿಸುವುದು — ಸಹಾಯ ಕೇಳಲು ಅಲ್ಲ, ಹಂಚಿಕೊಳ್ಳಲು.',
    },
    parentTips: {
      en: 'Respond to every "look!" with a comment on what they did rather than praise alone: "you stacked four of them".',
      hi: 'हर बार "देखो!" कहने पर सिर्फ तारीफ न करें, बल्कि बताएं कि उसने क्या किया: "तुमने चार जोड़ दिए"।',
      kn: 'ಪ್ರತಿ "ನೋಡು!" ಗೆ ಬರೀ ಹೊಗಳಿಕೆ ಅಲ್ಲ, ಏನು ಮಾಡಿದೆ ಎಂದು ಹೇಳಿ: "ನೀನು ನಾಲ್ಕು ಜೋಡಿಸಿದೆ".',
    },
    citation: 'CDC',
    mediaType: 'video',
    mediaUrl: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-in-action.html',
    graphicIconName: 'parallel_play',
  },
  {
    id: 'mx_30m_speech_1',
    ageBandMonths: 30,
    domain: 'speech_articulation',
    subsystem: 'phonology',
    title: {
      en: 'Early-8 Consonants Established; Half of Speech Understood by Others',
      hi: 'शुरुआती 8 व्यंजन स्थापित; बाहर के लोग आधी बात समझ पाते हैं',
      kn: 'ಆರಂಭಿಕ 8 ವ್ಯಂಜನಗಳು ಸ್ಥಿರ; ಹೊರಗಿನವರಿಗೆ ಅರ್ಧ ಮಾತು ಅರ್ಥವಾಗುತ್ತದೆ',
    },
    description: {
      en: 'Produces the Early-8 consonants /m, b, j, n, w, d, p, h/ accurately in familiar words. Speech is understood about half the time by unfamiliar listeners.',
      hi: 'जानी-पहचानी शब्दों में शुरुआती 8 व्यंजन /म, ब, य, न, व, द, प, ह/ सही बोलना। अनजान सुनने वाले लगभग आधी बात समझ पाते हैं।',
      kn: 'ಪರಿಚಿತ ಪದಗಳಲ್ಲಿ ಆರಂಭಿಕ 8 ವ್ಯಂಜನಗಳನ್ನು /ಮ, ಬ, ಯ, ನ, ವ, ದ, ಪ, ಹ/ ಸರಿಯಾಗಿ ಉಚ್ಚರಿಸುವುದು. ಪರಿಚಯವಿಲ್ಲದವರಿಗೆ ಸುಮಾರು ಅರ್ಧ ಮಾತು ಅರ್ಥವಾಗುತ್ತದೆ.',
    },
    whyItMatters: {
      en: 'Crowe & McLeod (2020) place Early-8 acquisition by 2;6–3;0. Intelligibility below half at this age warrants speech-language assessment even when vocabulary is adequate.',
      hi: 'क्रो एंड मैकलॉड (2020) के अनुसार शुरुआती 8 ध्वनियां 2;6–3;0 वर्ष तक आ जाती हैं। इस उम्र में आधे से कम समझ में आना, शब्द भंडार ठीक होने पर भी, जांच का कारण है।',
      kn: 'Crowe & McLeod (2020) ಪ್ರಕಾರ ಆರಂಭಿಕ 8 ಧ್ವನಿಗಳು 2;6–3;0 ರೊಳಗೆ ಬರುತ್ತವೆ. ಈ ವಯಸ್ಸಿನಲ್ಲಿ ಅರ್ಧಕ್ಕಿಂತ ಕಡಿಮೆ ಅರ್ಥವಾಗುವುದು ಪರೀಕ್ಷೆಗೆ ಕಾರಣ.',
    },
    whatToLookFor: {
      en: 'A neighbour or teacher who does not share the child\'s daily context can follow roughly half of what is said without you interpreting.',
      hi: 'पड़ोसी या शिक्षक, जो बच्चे की रोज की बातें नहीं जानते, आपकी मदद के बिना लगभग आधी बात समझ लें।',
      kn: 'ಮಗುವಿನ ದಿನನಿತ್ಯದ ಸಂದರ್ಭ ಗೊತ್ತಿಲ್ಲದ ನೆರೆಹೊರೆಯವರು ಅಥವಾ ಶಿಕ್ಷಕರು ನಿಮ್ಮ ಸಹಾಯವಿಲ್ಲದೆ ಸುಮಾರು ಅರ್ಧ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು.',
    },
    parentTips: {
      en: 'Repeat what your child said correctly rather than asking them to say it again: they hear the target without being corrected.',
      hi: 'बच्चे से दोबारा कहने को कहने के बजाय, उसकी बात सही उच्चारण में दोहरा दें: उसे टोका नहीं जाएगा और सही ध्वनि सुनने को मिलेगी।',
      kn: 'ಮತ್ತೆ ಹೇಳು ಎನ್ನುವ ಬದಲು, ಮಗು ಹೇಳಿದ್ದನ್ನು ಸರಿಯಾದ ಉಚ್ಚಾರಣೆಯಲ್ಲಿ ಪುನರಾವರ್ತಿಸಿ: ತಿದ್ದದೆಯೇ ಸರಿಯಾದ ಧ್ವನಿ ಕೇಳುತ್ತದೆ.',
    },
    citation: 'Crowe & McLeod (2020)',
    mediaType: 'illustration',
    graphicIconName: 'early_eight',
  },

  // =========================================================================
  // 3 YEARS — receptive, auditory
  // =========================================================================
  {
    id: 'mx_36m_rec_1',
    ageBandMonths: 36,
    domain: 'language_receptive',
    subsystem: 'syntax_morphology',
    title: {
      en: 'Follows Two-Step Instructions and Understands In, On, Under',
      hi: 'दो चरणों वाले निर्देश मानना और अंदर, ऊपर, नीचे समझना',
      kn: 'ಎರಡು ಹಂತದ ಸೂಚನೆ ಪಾಲಿಸುವುದು ಮತ್ತು ಒಳಗೆ, ಮೇಲೆ, ಕೆಳಗೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು',
    },
    description: {
      en: 'Carries out a two-step instruction without gesture, and understands the location words in, on and under.',
      hi: 'इशारे के बिना दो चरणों वाला निर्देश पूरा करना, और "अंदर", "ऊपर", "नीचे" जैसे शब्द समझना।',
      kn: 'ಸನ್ನೆ ಇಲ್ಲದೆ ಎರಡು ಹಂತದ ಸೂಚನೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸುವುದು ಮತ್ತು ಒಳಗೆ, ಮೇಲೆ, ಕೆಳಗೆ ಎಂಬ ಪದಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು.',
    },
    whyItMatters: {
      en: 'Marks the shift from understanding single words to understanding grammar. Spatial terms are also the first abstract vocabulary and a common gap in bilingual assessment.',
      hi: 'यह अलग-अलग शब्द समझने से व्याकरण समझने की ओर बदलाव दर्शाता है। जगह बताने वाले शब्द पहली अमूर्त शब्दावली हैं और द्विभाषी बच्चों की जांच में अक्सर छूट जाते हैं।',
      kn: 'ಪದಗಳನ್ನು ಅರ್ಥಮಾಡುವುದರಿಂದ ವ್ಯಾಕರಣ ಅರ್ಥಮಾಡುವ ಹಂತಕ್ಕೆ ಬದಲಾವಣೆ. ಸ್ಥಳ ಸೂಚಕ ಪದಗಳು ಮೊದಲ ಅಮೂರ್ತ ಪದಸಂಪತ್ತು.',
    },
    whatToLookFor: {
      en: 'Both steps completed in order from words alone — "take the cup and put it on the table" — with no pointing.',
      hi: 'केवल शब्दों से दोनों काम क्रम में पूरे करना — "कप उठाओ और मेज पर रखो" — बिना इशारे के।',
      kn: 'ಕೇವಲ ಮಾತಿನಿಂದ ಎರಡೂ ಹಂತಗಳನ್ನು ಕ್ರಮವಾಗಿ ಪೂರ್ಣಗೊಳಿಸುವುದು — "ಲೋಟ ತೆಗೆದು ಮೇಜಿನ ಮೇಲೆ ಇಡು" — ಸನ್ನೆ ಇಲ್ಲದೆ.',
    },
    parentTips: {
      en: 'Give instructions in whichever language is strongest at home, and keep your hands still so your child has to rely on the words.',
      hi: 'घर में जो भाषा सबसे मजबूत है उसी में निर्देश दें, और हाथ स्थिर रखें ताकि बच्चा केवल शब्दों पर निर्भर रहे।',
      kn: 'ಮನೆಯಲ್ಲಿ ಬಲವಾದ ಭಾಷೆಯಲ್ಲಿ ಸೂಚನೆ ಕೊಡಿ, ಕೈ ಅಲುಗಾಡಿಸಬೇಡಿ — ಮಗು ಪದಗಳನ್ನೇ ಅವಲಂಬಿಸಲಿ.',
    },
    citation: 'CDC',
    mediaType: 'video',
    mediaUrl: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-in-action.html',
    graphicIconName: 'two_step',
  },
  {
    id: 'mx_36m_aud_1',
    ageBandMonths: 36,
    domain: 'auditory_hearing',
    subsystem: 'auditory_discrimination',
    title: {
      en: 'Understands Speech in Background Noise',
      hi: 'शोर के बीच भी बात समझना',
      kn: 'ಗದ್ದಲದ ನಡುವೆಯೂ ಮಾತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು',
    },
    description: {
      en: 'Follows what is said in a moderately noisy room — a fan, a television, other children talking — without needing it repeated each time.',
      hi: 'पंखा, टीवी या बच्चों की आवाज के बीच भी कही गई बात समझ लेना, बार-बार दोहराने की जरूरत के बिना।',
      kn: 'ಫ್ಯಾನ್, ಟಿವಿ ಅಥವಾ ಮಕ್ಕಳ ಸದ್ದಿನ ನಡುವೆಯೂ ಹೇಳಿದ್ದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು, ಪದೇ ಪದೇ ಪುನರಾವರ್ತನೆ ಬೇಡದೆ.',
    },
    whyItMatters: {
      en: 'Erber level 4, comprehension in an adverse listening condition. Difficulty here with normal pure-tone thresholds is the classic presentation of auditory processing difficulty and of fluctuating conductive loss.',
      hi: 'यह एर्बर का चौथा स्तर है — कठिन परिस्थिति में समझना। सुनने की जांच सामान्य होने पर भी यहां कठिनाई ऑडिटरी प्रोसेसिंग या बदलते हुए कान के बहाव का संकेत है।',
      kn: 'ಇದು Erber ನ 4ನೇ ಹಂತ — ಕಷ್ಟದ ಸನ್ನಿವೇಶದಲ್ಲಿ ಗ್ರಹಿಕೆ. ಶ್ರವಣ ಪರೀಕ್ಷೆ ಸಾಮಾನ್ಯವಿದ್ದರೂ ಇಲ್ಲಿ ತೊಂದರೆ ಇದ್ದರೆ ಶ್ರವಣ ಸಂಸ್ಕರಣ ಸಮಸ್ಯೆಯ ಸೂಚನೆ.',
    },
    whatToLookFor: {
      en: 'Compare quiet and noisy rooms. A child who manages in silence but constantly says "what?" in noise should be referred.',
      hi: 'शांत और शोरगुल वाले कमरे की तुलना करें। जो बच्चा शांति में ठीक समझता है पर शोर में बार-बार "क्या?" पूछता है, उसे जांच के लिए भेजें।',
      kn: 'ಶಾಂತ ಮತ್ತು ಗದ್ದಲದ ಕೋಣೆಗಳನ್ನು ಹೋಲಿಸಿ. ಶಾಂತದಲ್ಲಿ ಅರ್ಥಮಾಡಿಕೊಂಡು ಗದ್ದಲದಲ್ಲಿ ಪದೇ ಪದೇ "ಏನು?" ಎನ್ನುವ ಮಗುವನ್ನು ಪರೀಕ್ಷೆಗೆ ಕಳುಹಿಸಿ.',
    },
    parentTips: {
      en: 'Turn the television off during meals and conversation. Reducing competing noise helps more than speaking louder.',
      hi: 'खाने और बातचीत के समय टीवी बंद रखें। तेज बोलने से ज्यादा फायदा शोर कम करने से होता है।',
      kn: 'ಊಟ ಮತ್ತು ಮಾತಿನ ವೇಳೆ ಟಿವಿ ಆಫ್ ಮಾಡಿ. ಜೋರಾಗಿ ಮಾತನಾಡುವುದಕ್ಕಿಂತ ಗದ್ದಲ ಕಡಿಮೆ ಮಾಡುವುದು ಹೆಚ್ಚು ಸಹಾಯ.',
    },
    citation: 'AIISH',
    mediaType: 'illustration',
    graphicIconName: 'listening_in_noise',
  },

  // =========================================================================
  // 4 YEARS — receptive
  // =========================================================================
  {
    id: 'mx_48m_rec_1',
    ageBandMonths: 48,
    domain: 'language_receptive',
    subsystem: 'semantics',
    title: {
      en: 'Answers Who, What and Where Questions',
      hi: 'कौन, क्या और कहां वाले सवालों के जवाब देना',
      kn: 'ಯಾರು, ಏನು, ಎಲ್ಲಿ ಎಂಬ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುವುದು',
    },
    description: {
      en: 'Answers simple questions about a familiar story or event, such as who was there, what happened and where it happened.',
      hi: 'जानी-पहचानी कहानी या घटना के बारे में साधारण सवालों के जवाब देना — कौन था, क्या हुआ, कहां हुआ।',
      kn: 'ಪರಿಚಿತ ಕಥೆ ಅಥವಾ ಘಟನೆಯ ಬಗ್ಗೆ ಸರಳ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುವುದು — ಯಾರಿದ್ದರು, ಏನಾಯಿತು, ಎಲ್ಲಿ ನಡೆಯಿತು.',
    },
    whyItMatters: {
      en: 'Question comprehension requires holding a remembered event and retrieving the part being asked about — the language base for classroom learning.',
      hi: 'सवाल समझने के लिए घटना याद रखनी पड़ती है और उसमें से पूछा गया हिस्सा निकालना पड़ता है — यही स्कूल में सीखने की भाषा नींव है।',
      kn: 'ಪ್ರಶ್ನೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನೆನಪಿಟ್ಟ ಘಟನೆಯಿಂದ ಕೇಳಿದ ಭಾಗವನ್ನು ಹೊರತೆಗೆಯಬೇಕು — ಇದು ಶಾಲಾ ಕಲಿಕೆಯ ಭಾಷಾ ಆಧಾರ.',
    },
    whatToLookFor: {
      en: 'Answers match the question type: a "where" question gets a place, not a person. Consistent mismatches are more informative than wrong details.',
      hi: 'जवाब सवाल के प्रकार से मेल खाए: "कहां" के जवाब में जगह आए, व्यक्ति नहीं। बार-बार गलत प्रकार का जवाब देना, गलत जानकारी से ज्यादा महत्वपूर्ण है।',
      kn: 'ಉತ್ತರ ಪ್ರಶ್ನೆಯ ಬಗೆಗೆ ಹೊಂದಬೇಕು: "ಎಲ್ಲಿ" ಗೆ ಸ್ಥಳ, ವ್ಯಕ್ತಿ ಅಲ್ಲ. ಪದೇ ಪದೇ ಬಗೆ ತಪ್ಪುವುದು ಹೆಚ್ಚು ಗಮನಾರ್ಹ.',
    },
    parentTips: {
      en: 'After a story, ask one question of each type rather than several of the same. Accept answers in any of your home languages.',
      hi: 'कहानी के बाद हर प्रकार का एक सवाल पूछें, एक ही तरह के कई नहीं। जवाब घर की किसी भी भाषा में स्वीकार करें।',
      kn: 'ಕಥೆಯ ನಂತರ ಪ್ರತಿ ಬಗೆಯ ಒಂದೊಂದು ಪ್ರಶ್ನೆ ಕೇಳಿ. ಮನೆಯ ಯಾವುದೇ ಭಾಷೆಯ ಉತ್ತರವನ್ನೂ ಸ್ವೀಕರಿಸಿ.',
    },
    citation: 'CDC',
    mediaType: 'video',
    mediaUrl: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-in-action.html',
    graphicIconName: 'wh_questions',
  },

  // =========================================================================
  // 5 YEARS — receptive
  // =========================================================================
  {
    id: 'mx_60m_rec_1',
    ageBandMonths: 60,
    domain: 'language_receptive',
    subsystem: 'syntax_morphology',
    title: {
      en: 'Follows Three-Part Directions and Understands Before and After',
      hi: 'तीन हिस्सों वाले निर्देश मानना और "पहले", "बाद में" समझना',
      kn: 'ಮೂರು ಭಾಗದ ಸೂಚನೆ ಪಾಲಿಸುವುದು ಮತ್ತು "ಮೊದಲು", "ನಂತರ" ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು',
    },
    description: {
      en: 'Carries out an unrelated three-part direction in the correct order and understands sequence words such as before, after and first.',
      hi: 'तीन अलग-अलग कामों वाला निर्देश सही क्रम में पूरा करना और "पहले", "बाद में", "सबसे पहले" जैसे शब्द समझना।',
      kn: 'ಸಂಬಂಧವಿಲ್ಲದ ಮೂರು ಭಾಗದ ಸೂಚನೆಯನ್ನು ಸರಿಯಾದ ಕ್ರಮದಲ್ಲಿ ಪೂರ್ಣಗೊಳಿಸುವುದು ಮತ್ತು ಮೊದಲು, ನಂತರ ಎಂಬ ಪದಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು.',
    },
    whyItMatters: {
      en: 'Sequence words require understanding that word order and event order can differ. This is the last major receptive milestone before formal schooling.',
      hi: 'क्रम बताने वाले शब्द समझने के लिए यह समझना जरूरी है कि शब्दों का क्रम और घटनाओं का क्रम अलग हो सकता है। स्कूल शुरू होने से पहले यह आखिरी बड़ा पड़ाव है।',
      kn: 'ಕ್ರಮ ಸೂಚಕ ಪದಗಳಿಗೆ ಪದಗಳ ಕ್ರಮ ಮತ್ತು ಘಟನೆಯ ಕ್ರಮ ಬೇರೆಯಾಗಬಹುದು ಎಂಬ ಅರಿವು ಬೇಕು. ಶಾಲೆಗೆ ಮುನ್ನ ಇದು ಕೊನೆಯ ಪ್ರಮುಖ ಹಂತ.',
    },
    whatToLookFor: {
      en: 'Test with "before you sit down, close the door": correct performance means acting on the meaning, not on the order the words arrived in.',
      hi: '"बैठने से पहले दरवाजा बंद करो" जैसे वाक्य से जांचें: सही करने का मतलब है अर्थ के अनुसार करना, न कि शब्दों के क्रम के अनुसार।',
      kn: '"ಕುಳಿತುಕೊಳ್ಳುವ ಮೊದಲು ಬಾಗಿಲು ಮುಚ್ಚು" ಎಂದು ಪರೀಕ್ಷಿಸಿ: ಸರಿಯಾಗಿ ಮಾಡುವುದೆಂದರೆ ಅರ್ಥದ ಪ್ರಕಾರ, ಪದಗಳ ಕ್ರಮದ ಪ್ರಕಾರ ಅಲ್ಲ.',
    },
    parentTips: {
      en: 'Use before and after in everyday routines — "after you wash your hands, we eat" — rather than teaching them as a drill.',
      hi: 'रोज के कामों में "पहले" और "बाद में" का प्रयोग करें — "हाथ धोने के बाद हम खाएंगे" — इन्हें अभ्यास की तरह न सिखाएं।',
      kn: 'ದಿನನಿತ್ಯದ ಕೆಲಸಗಳಲ್ಲಿ "ಮೊದಲು", "ನಂತರ" ಬಳಸಿ — "ಕೈ ತೊಳೆದ ನಂತರ ಊಟ" — ಪಾಠದಂತೆ ಕಲಿಸಬೇಡಿ.',
    },
    citation: 'ASHA',
    mediaType: 'video',
    mediaUrl: 'https://pathways.org/video-library/',
    graphicIconName: 'sequence_words',
  },

  // =========================================================================
  // 6 YEARS — receptive, speech, cognitive
  // =========================================================================
  {
    id: 'mx_72m_rec_1',
    ageBandMonths: 72,
    domain: 'language_receptive',
    subsystem: 'syntax_morphology',
    title: {
      en: 'Understands Complex and Passive Sentences',
      hi: 'जटिल और कर्मवाच्य वाक्य समझना',
      kn: 'ಸಂಕೀರ್ಣ ಮತ್ತು ಕರ್ಮಣಿ ವಾಕ್ಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು',
    },
    description: {
      en: 'Understands sentences with clauses and passive constructions, and follows classroom instructions given once to a whole group.',
      hi: 'उपवाक्य और कर्मवाच्य वाले वाक्य समझना, और कक्षा में पूरे समूह को एक बार दिए गए निर्देश का पालन करना।',
      kn: 'ಉಪವಾಕ್ಯ ಮತ್ತು ಕರ್ಮಣಿ ರಚನೆಯ ವಾಕ್ಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಮತ್ತು ತರಗತಿಯಲ್ಲಿ ಒಮ್ಮೆ ಕೊಟ್ಟ ಸೂಚನೆಯನ್ನು ಪಾಲಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'Group instruction given once, without repetition or gesture, is the listening demand of a real classroom; comprehension failure here often presents as behaviour or inattention.',
      hi: 'कक्षा में एक बार, बिना दोहराए और बिना इशारे के दिया निर्देश सुनना असली स्कूल की मांग है; यहां समझ की कमी अक्सर शरारत या ध्यान न देने जैसी दिखती है।',
      kn: 'ಒಮ್ಮೆ, ಪುನರಾವರ್ತನೆ ಮತ್ತು ಸನ್ನೆ ಇಲ್ಲದೆ ಕೊಟ್ಟ ಗುಂಪು ಸೂಚನೆ ನಿಜ ತರಗತಿಯ ಬೇಡಿಕೆ; ಇಲ್ಲಿ ಗ್ರಹಿಕೆ ಕೊರತೆ ಹಲವು ಬಾರಿ ಅಶಿಸ್ತು ಅಥವಾ ಅಜಾಗರೂಕತೆಯಂತೆ ಕಾಣುತ್ತದೆ.',
    },
    whatToLookFor: {
      en: 'Ask the teacher whether the child watches other children before starting a task. Copying peers can mask a comprehension gap for years.',
      hi: 'शिक्षक से पूछें कि काम शुरू करने से पहले बच्चा दूसरे बच्चों को देखता है या नहीं। दूसरों की नकल करना सालों तक समझ की कमी छिपा सकती है।',
      kn: 'ಕೆಲಸ ಶುರುಮಾಡುವ ಮೊದಲು ಮಗು ಇತರ ಮಕ್ಕಳನ್ನು ನೋಡುತ್ತದೆಯೇ ಎಂದು ಶಿಕ್ಷಕರನ್ನು ಕೇಳಿ. ಇತರರನ್ನು ಅನುಕರಿಸುವುದು ಗ್ರಹಿಕೆಯ ಕೊರತೆಯನ್ನು ವರ್ಷಗಳ ಕಾಲ ಮುಚ್ಚಿಡಬಹುದು.',
    },
    parentTips: {
      en: 'Tell longer stories without pictures and ask your child to retell them. Retelling shows comprehension more clearly than yes-or-no questions.',
      hi: 'बिना चित्रों के लंबी कहानी सुनाएं और बच्चे से दोहराने को कहें। दोहराना, हां-ना वाले सवालों से ज्यादा साफ बताता है कि बच्चा समझा या नहीं।',
      kn: 'ಚಿತ್ರವಿಲ್ಲದೆ ಉದ್ದದ ಕಥೆ ಹೇಳಿ, ಮಗುವಿಗೆ ಪುನಃ ಹೇಳಲು ಕೇಳಿ. ಪುನಃ ಹೇಳುವುದು ಹೌದು-ಇಲ್ಲ ಪ್ರಶ್ನೆಗಳಿಗಿಂತ ಗ್ರಹಿಕೆಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸುತ್ತದೆ.',
    },
    citation: 'ASHA',
    mediaType: 'illustration',
    graphicIconName: 'complex_sentences',
  },
  {
    id: 'mx_72m_speech_1',
    ageBandMonths: 72,
    domain: 'speech_articulation',
    subsystem: 'articulation',
    title: {
      en: 'Late-8 Consonants Mastered; Speech Fully Intelligible',
      hi: 'बाद की 8 ध्वनियां स्थापित; बोली पूरी तरह समझ में आना',
      kn: 'ಕೊನೆಯ 8 ವ್ಯಂಜನಗಳು ಸ್ಥಿರ; ಮಾತು ಸಂಪೂರ್ಣ ಸ್ಪಷ್ಟ',
    },
    description: {
      en: 'Produces the Late-8 consonants, including /r, l, s, z, ʃ, tʃ, dʒ, θ, ð/, accurately in connected speech. Speech is fully intelligible to unfamiliar listeners.',
      hi: 'बातचीत में बाद की 8 ध्वनियां — /र, ल, स, ज, श, च, ज़, थ/ — सही बोलना। अनजान लोग भी पूरी बात समझ लेते हैं।',
      kn: 'ಸಂಭಾಷಣೆಯಲ್ಲಿ ಕೊನೆಯ 8 ವ್ಯಂಜನಗಳನ್ನು — /ರ, ಲ, ಸ, ಜ, ಶ, ಚ/ — ಸರಿಯಾಗಿ ಉಚ್ಚರಿಸುವುದು. ಪರಿಚಯವಿಲ್ಲದವರಿಗೂ ಪೂರ್ಣ ಸ್ಪಷ್ಟ.',
    },
    whyItMatters: {
      en: 'Crowe & McLeod (2020) place Late-8 mastery by 5;0–6;0. Any residual error after 6 years is unlikely to resolve without intervention and affects early literacy.',
      hi: 'क्रो एंड मैकलॉड (2020) के अनुसार बाद की 8 ध्वनियां 5;0–6;0 वर्ष तक स्थापित हो जाती हैं। 6 वर्ष के बाद बची गलती अपने आप ठीक होने की संभावना कम है और पढ़ाई पर असर डालती है।',
      kn: 'Crowe & McLeod (2020) ಪ್ರಕಾರ ಕೊನೆಯ 8 ಧ್ವನಿಗಳು 5;0–6;0 ರೊಳಗೆ ಸ್ಥಿರವಾಗುತ್ತವೆ. 6 ವರ್ಷದ ನಂತರ ಉಳಿದ ದೋಷ ತನ್ನಷ್ಟಕ್ಕೆ ಸರಿಯಾಗುವ ಸಾಧ್ಯತೆ ಕಡಿಮೆ.',
    },
    whatToLookFor: {
      en: 'Listen in connected conversation, not single words. Errors often survive in running speech after they have disappeared from naming tasks.',
      hi: 'अलग-अलग शब्दों के बजाय पूरी बातचीत सुनें। नाम बताने में ठीक होने के बाद भी बहती बातचीत में गलती बनी रह सकती है।',
      kn: 'ಬಿಡಿ ಪದಗಳಲ್ಲ, ಪೂರ್ಣ ಸಂಭಾಷಣೆಯನ್ನು ಕೇಳಿ. ಹೆಸರಿಸುವಾಗ ಸರಿಯಾದ ಮೇಲೂ ಸಹಜ ಮಾತಿನಲ್ಲಿ ದೋಷ ಉಳಿಯಬಹುದು.',
    },
    parentTips: {
      en: 'Note which sounds are still in error and in which position in the word, and take that list to a speech-language pathologist rather than practising at home first.',
      hi: 'कौन-सी ध्वनि और शब्द में किस जगह गलत आ रही है, यह लिख लें और घर पर अभ्यास से पहले वह सूची स्पीच थेरेपिस्ट को दिखाएं।',
      kn: 'ಯಾವ ಧ್ವನಿ, ಪದದ ಯಾವ ಸ್ಥಾನದಲ್ಲಿ ತಪ್ಪಾಗಿದೆ ಎಂದು ಬರೆದಿಟ್ಟು, ಮನೆಯಲ್ಲಿ ಅಭ್ಯಾಸ ಮಾಡುವ ಮೊದಲು ಆ ಪಟ್ಟಿಯನ್ನು ಸ್ಪೀಚ್ ಥೆರಪಿಸ್ಟ್‌ಗೆ ತೋರಿಸಿ.',
    },
    citation: 'Crowe & McLeod (2020)',
    mediaType: 'illustration',
    graphicIconName: 'late_eight',
    isRedFlag: true,
  },
  {
    id: 'mx_72m_cog_1',
    ageBandMonths: 72,
    domain: 'cognitive',
    subsystem: 'general_cognition',
    title: {
      en: 'Counts, Sorts and Explains How Things Are Alike',
      hi: 'गिनना, छांटना और बताना कि चीजें कैसे मिलती-जुलती हैं',
      kn: 'ಎಣಿಸುವುದು, ವಿಂಗಡಿಸುವುದು ಮತ್ತು ವಸ್ತುಗಳ ಹೋಲಿಕೆ ವಿವರಿಸುವುದು',
    },
    description: {
      en: 'Counts objects reliably, sorts them by more than one feature such as colour and shape, and explains how two familiar things are alike or different.',
      hi: 'चीजें ठीक से गिनना, रंग और आकार जैसे एक से अधिक आधार पर छांटना, और बताना कि दो जानी-पहचानी चीजें कैसे एक जैसी या अलग हैं।',
      kn: 'ವಸ್ತುಗಳನ್ನು ಸರಿಯಾಗಿ ಎಣಿಸುವುದು, ಬಣ್ಣ ಮತ್ತು ಆಕಾರದಂತಹ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಆಧಾರದಲ್ಲಿ ವಿಂಗಡಿಸುವುದು ಮತ್ತು ಎರಡು ವಸ್ತುಗಳ ಹೋಲಿಕೆ-ವ್ಯತ್ಯಾಸ ವಿವರಿಸುವುದು.',
    },
    whyItMatters: {
      en: 'Sorting on two features at once and stating a category relation require language and reasoning together; this is the cognitive-linguistic profile school entry assumes.',
      hi: 'एक साथ दो आधारों पर छांटना और संबंध बताना, भाषा और तर्क दोनों मांगता है; स्कूल शुरू होते समय यही क्षमता अपेक्षित होती है।',
      kn: 'ಎರಡು ಆಧಾರಗಳಲ್ಲಿ ಒಟ್ಟಿಗೆ ವಿಂಗಡಿಸುವುದು ಮತ್ತು ಸಂಬಂಧ ಹೇಳುವುದು ಭಾಷೆ ಮತ್ತು ತರ್ಕ ಎರಡನ್ನೂ ಬೇಡುತ್ತದೆ; ಶಾಲಾ ಪ್ರವೇಶಕ್ಕೆ ಇದೇ ನಿರೀಕ್ಷೆ.',
    },
    whatToLookFor: {
      en: 'Can say why two things go together — "both are fruit" — not only that they do. The explanation is the milestone.',
      hi: 'यह बता सके कि दो चीजें साथ क्यों हैं — "दोनों फल हैं" — केवल यह नहीं कि साथ हैं। असली पड़ाव कारण बताना है।',
      kn: 'ಎರಡು ವಸ್ತು ಏಕೆ ಒಟ್ಟಿಗೆ ಸೇರುತ್ತವೆ ಎಂದು ಹೇಳಬಲ್ಲದು — "ಎರಡೂ ಹಣ್ಣು" — ಬರೀ ಸೇರುತ್ತವೆ ಎನ್ನುವುದಲ್ಲ. ವಿವರಣೆಯೇ ಹಂತ.',
    },
    parentTips: {
      en: 'Sort dal, coins or vegetables together during daily work and ask "why did you put those two together?"',
      hi: 'रोज के काम में दाल, सिक्के या सब्जियां साथ छांटें और पूछें, "इन दोनों को साथ क्यों रखा?"',
      kn: 'ದಿನನಿತ್ಯದ ಕೆಲಸದಲ್ಲಿ ಬೇಳೆ, ನಾಣ್ಯ ಅಥವಾ ತರಕಾರಿ ವಿಂಗಡಿಸಿ, "ಈ ಎರಡನ್ನು ಏಕೆ ಒಟ್ಟಿಗೆ ಇಟ್ಟೆ?" ಎಂದು ಕೇಳಿ.',
    },
    citation: 'LEST',
    mediaType: 'illustration',
    graphicIconName: 'sorting',
  },
];

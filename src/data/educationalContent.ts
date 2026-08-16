export interface SubsystemGuide {
  id: string;
  name: Record<string, string>;
  category: 'speech' | 'language' | 'audition' | 'multilingual';
  definition: Record<string, string>;
  clinicalSignificance: Record<string, string>;
  typicalMilestones: Record<string, string[]>;
  redFlagsOrDisorders: Record<string, string>;
  clinicalAssessmentTips: Record<string, string>;
}

export const SUBSYSTEM_GUIDES: SubsystemGuide[] = [
  {
    id: 'phonology_articulation',
    name: {
      en: 'Phonology & Articulation (Speech Sound Production)',
      hi: 'ध्वनिविज्ञान और उच्चारण (Phonology & Articulation)',
      kn: 'ಧ್ವನಿಶಾಸ್ತ್ರ ಮತ್ತು ಉಚ್ಚಾರಣೆ (Phonology & Articulation)',
    },
    category: 'speech',
    definition: {
      en: 'Articulation refers to the physical motor movements of the lips, tongue, teeth, and palate to produce individual speech sounds. Phonology is the cognitive-linguistic rule system governing how sounds are organized and combined into meaningful words.',
      hi: 'उच्चारण (Articulation) होठों, जीभ, दांतों और तालु की शारीरिक गति है। ध्वनिविज्ञान (Phonology) वह मानसिक नियम प्रणाली है जो ध्वनियों को सार्थक शब्दों में जोड़ने का काम करती है।',
      kn: 'ಉಚ್ಚಾರಣೆ (Articulation) ಎಂದರೆ ತುಟಿ, ನಾಲಿಗೆ, ಹಲ್ಲುಗಳ ಚಲನೆ. ಧ್ವನಿಶಾಸ್ತ್ರ (Phonology) ಎಂದರೆ ಶಬ್ದಗಳನ್ನು ಸರಿಯಾದ ನಿಯಮದಂತೆ ಸಂಯೋಜಿಸುವ ಭಾಷಾ ಜ್ಞಾನ.',
    },
    clinicalSignificance: {
      en: 'Standardized norms (Crowe & McLeod 2020) categorize consonants into Early-8, Middle-8, and Late-8 groups. Phonological processes (e.g. fronting /k/ -> /t/, stopping /s/ -> /t/) are typical in early toddlers but should naturally resolve by age 3.5–4 years.',
      hi: 'क्रो और मैकलियोड (2020) मानक के अनुसार ध्वनियों को तीन समूहों में बांटा गया है। शुरुआती उम्र में बच्चे कुछ ध्वनियों को बदलते हैं जो 4 वर्ष तक स्वतः ठीक हो जाना चाहिए।',
      kn: 'ಕ್ರೋ ಮತ್ತು ಮೆಕ್ಲಿಯೋಡ್ (2020) ಮಾನದಂಡದ ಪ್ರಕಾರ ವ್ಯಂಜನಗಳನ್ನು ಮೂರು ಹಂತಗಳಲ್ಲಿ ವಿಂಗಡಿಸಲಾಗಿದೆ. 4 ವರ್ಷದೊಳಗೆ ಮಗುವಿನ ಉಚ್ಚಾರಣೆ ಸ್ಪಷ್ಟವಾಗಬೇಕು.',
    },
    typicalMilestones: {
      en: [
        'By 2 years: Mastered /p, b, m, d, n, w, h/ (50% intelligibility to family).',
        'By 3 years: Mastered /t, k, g, f/ (75% intelligibility to strangers).',
        'By 4 years: Mastered /tʃ, dʒ, s, ʃ/ (90%–100% intelligibility).',
        'By 5–6 years: Mastered /r, l, z, θ, ð/ and consonant blends (e.g. "play", "train").'
      ],
      hi: [
        '2 वर्ष तक: प, ब, म, द, न, ह का सही उच्चारण (परिवार के लिए 50% स्पष्ट बोली)।',
        '3 वर्ष तक: त, क, ग, फ का सही उच्चारण (अनजान लोगों के लिए 75% स्पष्ट बोली)।',
        '4 वर्ष तक: च, ज, श, स का सही उच्चारण (90%-100% स्पष्ट बोली)।',
        '5-6 वर्ष तक: र, ल, ज़ और संयुक्त अक्षरों का पूर्ण नियंत्रण।'
      ],
      kn: [
        '2 ವರ್ಷಕ್ಕೆ: ಪ, ಬ, ಮ, ದ, ನ, ಹ (ಮನೆಯವರಿಗೆ 50% ಸ್ಪಷ್ಟತೆ).',
        '3 ವರ್ಷಕ್ಕೆ: ತ, ಕ, ಗ, ಫ (ಹೊರಗಿನವರಿಗೆ 75% ಸ್ಪಷ್ಟತೆ).',
        '4 ವರ್ಷಕ್ಕೆ: ಚ, ಜ, ಶ, ಸ (90%-100% ಸ್ಪಷ್ಟತೆ).',
        '5-6 ವರ್ಷಕ್ಕೆ: ರ, ಲ ಮತ್ತು ಒತ್ತಕ್ಷರಗಳ ಸಂಪೂರ್ಣ ಸ್ಪಷ್ಟತೆ.'
      ]
    },
    redFlagsOrDisorders: {
      en: 'Speech Sound Disorder (SSD), Childhood Apraxia of Speech (CAS), or persistent phonological patterns beyond expected developmental age windows.',
      hi: '4 वर्ष के बाद भी बोली का समझ न आना या ध्वनियों को लगातार गलत बोलना।',
      kn: '4 ವರ್ಷದ ನಂತರವೂ ಮಾತು ಅಸ್ಪಷ್ಟವಾಗಿರುವುದು ಅಥವಾ ಪದಗಳನ್ನು ತಪ್ಪು ತಪ್ಪಾಗಿ ನುಡಿಯುವುದು.',
    },
    clinicalAssessmentTips: {
      en: 'Assess speech sounds across initial, medial, and final word positions. Distinguish motor-based articulation errors from cognitive-linguistic phonological pattern processes.',
      hi: 'शब्दों की शुरुआत, बीच और अंत में ध्वनियों की जांच करें।',
      kn: 'ಪದಗಳ ಆರಂಭ, ಮಧ್ಯ ಮತ್ತು ಕೊನೆಯಲ್ಲಿ ಅಕ್ಷರಗಳ ಉಚ್ಚಾರಣೆಯನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಪರೀಕ್ಷಿಸಿ.',
    }
  },
  {
    id: 'resonance_voice',
    name: {
      en: 'Resonance, Voice & Fluency',
      hi: 'अनुनाद, आवाज और प्रवाह (Resonance, Voice & Fluency)',
      kn: 'ಧ್ವನಿ, ನಾದ ಮತ್ತು ವಾಕ್ ಪ್ರವಾಹ (Resonance, Voice & Fluency)',
    },
    category: 'speech',
    definition: {
      en: 'Voice refers to pitch, loudness, and acoustic vocal quality created at the larynx. Resonance refers to the shaping of sound energy as it travels through the oral and nasal cavities. Fluency is the smooth, effortless rhythm of spoken language.',
      hi: 'आवाज (Voice) स्वरतंत्री में बनने वाली ध्वनि की गुणवत्ता, पिच और तीव्रता है। अनुनाद (Resonance) नाक और मुंह के मार्ग में ध्वनि का संतुलन है। प्रवाह (Fluency) बिना अटके बोलने की गति है।',
      kn: 'ಧ್ವನಿ (Voice) ಎಂದರೆ ಗಂಟಲಿನ ನಾದ ಮತ್ತು ಏರಿಳಿತ. ನಾದ (Resonance) ಎಂದರೆ ಮೂಗು ಮತ್ತು ಬಾಯಿಯ ಸಮತೋಲನ. ಪ್ರವಾಹ (Fluency) ಎಂದರೆ ತಡೆಯಿಲ್ಲದೆ ಸರಾಗವಾಗಿ ಮಾತನಾಡುವಿಕೆ.',
    },
    clinicalSignificance: {
      en: 'Hypernasality (too much air escaping through the nose) indicates velopharyngeal dysfunction (VPD) or submucous cleft. Persistent hoarseness (>2 weeks) warrants pediatric ENT laryngoscopy for vocal nodules. Developmental dysfluency (repeating whole words around 2.5–3.5y) is common; true stuttering involves sound prolongations, blocks, and secondary facial tension.',
      hi: 'नाक से ज्यादा हवा निकलना (हाइपरनेज़ेलिटी) तालु की कमजोरी का संकेत हो सकता है। 2 सप्ताह से अधिक आवाज बैठना वोकल नोड्यूल का लक्षण हो सकता है।',
      kn: 'ಮೂಗಿನಿಂದ ಅತಿಯಾಗಿ ಗಾಳಿ ಬರುವುದು ಅಥವಾ 2 ವಾರಗಳಿಗಿಂತ ಹೆಚ್ಚು ಗಂಟಲು ಕೆರತವಿರುವುದು ವೈದ್ಯಕೀಯ ತಪಾಸಣೆಯ ಅಗತ್ಯವನ್ನು ಸೂಚಿಸುತ್ತದೆ.',
    },
    typicalMilestones: {
      en: [
        '0–12 months: Clear pitch variation during cooing and babbling.',
        '2–3 years: Uses pitch inflection for questions; transient normal syllable repetitions may occur.',
        '3–5 years: Smooth, connected speech without physical struggle, breath holding, or habitual vocal strain.'
      ],
      hi: [
        '0-12 महीने: कूइंग और बैबलिंग में आवाज के उतार-चढ़ाव।',
        '2-3 वर्ष: सवाल पूछते समय आवाज में स्पष्ट बदलाव।',
        '3-5 वर्ष: बिना तनाव या घबराहಟ್ के सहज और निरंतर बोलना।'
      ],
      kn: [
        '0-12 ತಿಂಗಳು: ತೊದಲು ನುಡಿಯಲ್ಲಿ ಧ್ವನಿಯ ಏರಿಳಿತಗಳು.',
        '2-3 ವರ್ಷ: ಪ್ರಶ್ನೆ ಕೇಳುವಾಗ ಧ್ವನಿ ಬದಲಾವಣೆ.',
        '3-5 ವರ್ಷ: ಯಾವುದೇ ಆಯಾಸವಿಲ್ಲದೆ ನಿರರ್ಗಳ ಮಾತು.'
      ]
    },
    redFlagsOrDisorders: {
      en: 'Hypernasality/hyponasality, chronic dysphonia/hoarseness, persistent childhood stuttering with physical tension or avoidance.',
      hi: 'लगातार हकलाना (Stuttering), भारी या दबी हुई आवाज, नाक से अधिक आवाज निकलना।',
      kn: 'ತೊದಲುವಿಕೆ, ಅತಿಯಾದ ಮೂಗಿನ ಧ್ವನಿ ಅಥವಾ ಧ್ವನಿಪೆಟ್ಟಿಗೆಯ ತೊಂದರೆಗಳು.',
    },
    clinicalAssessmentTips: {
      en: 'Use mirror clouding test or nasal flutter test for resonance. Monitor Stuttering Severity Index (SSI-4) criteria for dysfluency onset.',
      hi: 'मिरर टेस्ट से नाक से निकलने वाली हवा की जांच करें।',
      kn: 'ಕನ್ನಡಿ ಪರೀಕ್ಷೆಯ ಮೂಲಕ ಮೂಗಿನ ಗಾಳಿಯ ಸಮತೋಲನವನ್ನು ಪರೀಕ್ಷಿಸಿ.',
    }
  },
  {
    id: 'semantics_vocabulary',
    name: {
      en: 'Semantics (Vocabulary & Concept Formation)',
      hi: 'शब्दार्थ विज्ञान (Semantics & Vocabulary)',
      kn: 'ಶಬ್ದಾರ್ಥ ಶಾಸ್ತ್ರ (Semantics & Vocabulary)',
    },
    category: 'language',
    definition: {
      en: 'Semantics governs the meaning of individual words, categorical relationships (animals, foods, vehicles), spatial/temporal concepts (in, on, before, after), and semantic feature networks.',
      hi: 'शब्दार्थ विज्ञान (Semantics) शब्दों के अर्थ, वस्तुओं के वर्गीकरण और समय व स्थान की अवधारणाओं को समझने की क्षमता है।',
      kn: 'ಶಬ್ದಗಳ ಅರ್ಥ, ವರ್ಗೀಕರಣ (ಪ್ರಾಣಿಗಳು, ಹಣ್ಣುಗಳು, ವಾಹನಗಳು) ಮತ್ತು ಪರಿಕಲ್ಪನೆಗಳನ್ನು ಅರ್ಥೈಸಿಕೊಳ್ಳುವ ಭಾಷಾ ಜ್ಞಾನ.',
    },
    clinicalSignificance: {
      en: 'Word spurts typically occur around 18–24 months (jumping from 20 words to 50–200+ words). Receptive vocabulary consistently leads expressive vocabulary. Slow vocabulary acquisition is the hallmark of Developmental Language Disorder (DLD).',
      hi: '18 से 24 महीने के बीच बच्चे का शब्दकोश तेजी से बढ़ता है। सुनने में शब्द समझना बोलने से हमेशा पहले आता है।',
      kn: '18 ರಿಂದ 24 ತಿಂಗಳಿನಲ್ಲಿ ಶಬ್ದ ಭಂಡಾರವು ವೇಗವಾಗಿ ವಿಸ್ತರಿಸುತ್ತದೆ.',
    },
    typicalMilestones: {
      en: [
        '12 months: 1–3 meaningful words produced; understands 20+ words.',
        '18 months: 10–20+ words produced; understands 50–100+ words.',
        '24 months: 50–100+ words produced; points to common objects and body parts.',
        '36 months: 200–500+ words; understands size, color, and function ("What do we cut with?").',
        '48–60 months: 1000–2000+ words; understands complex spatial, comparative, and temporal concepts.'
      ],
      hi: [
        '12 महीने: 1-3 सार्थक शब्द; 20 से अधिक शब्द समझना।',
        '18 महीने: 10-20+ शब्द बोलना; 50-100 शब्द समझना।',
        '24 महीने: 50-100+ शब्द बोलना; वस्तुओं और अंगों को पहचानना।',
        '36 महीने: 200-500+ शब्द; रंग, आकार और उपयोग समझना।',
        '48-60 महीने: 1000-2000+ शब्द; जटिल तुलनात्मक और समय की बातें समझना।'
      ],
      kn: [
        '12 ತಿಂಗಳು: 1-3 ಅರ್ಥಪೂರ್ಣ ಪದಗಳು; 20ಕ್ಕೂ ಹೆಚ್ಚು ಪದಗಳ ಗ್ರಹಿಕೆ.',
        '18 ತಿಂಗಳು: 10-20+ ಪದಗಳು; 50-100 ಪದಗಳ ಗ್ರಹಿಕೆ.',
        '24 ತಿಂಗಳು: 50-100+ ಪದಗಳು; ದೇಹದ ಭಾಗಗಳು ಮತ್ತು ವಸ್ತುಗಳ ಗುರುತಿಸುವಿಕೆ.',
        '36 ತಿಂಗಳು: 200-500+ ಪದಗಳು; ಬಣ್ಣ, ಗಾತ್ರ ಮತ್ತು ವಸ್ತುಗಳ ಬಳಕೆಯ ಅರಿವು.',
        '48-60 ತಿಂಗಳು: 1000-2000+ ಪದಗಳು; ಸಂಕೀರ್ಣ ಪರಿಕಲ್ಪನೆಗಳ ಸಂಪೂರ್ಣ ಗ್ರಹಿಕೆ.'
      ]
    },
    redFlagsOrDisorders: {
      en: 'Fewer than 6 words at 18 months, fewer than 50 words at 24 months, inability to categorize familiar objects by 36 months.',
      hi: '18 महीने में 6 से कम शब्द या 24 महीने में 50 से कम शब्द बोलना।',
      kn: '18 ತಿಂಗಳಿಗೆ 6ಕ್ಕಿಂತ ಕಡಿಮೆ ಅಥವಾ 24 ತಿಂಗಳಿಗೆ 50ಕ್ಕಿಂತ ಕಡಿಮೆ ಪದಗಳಿರುವುದು.',
    },
    clinicalAssessmentTips: {
      en: 'Assess total conceptual vocabulary across ALL home languages in multilingual children (summing words known across English + Hindi + Kannada).',
      hi: 'बहुभाषी बच्चों में घर की सभी भाषाओं के कुल शब्दों को जोड़कर आंकलन करें।',
      kn: 'ಮನೆಯಲ್ಲಿ ಬಳಸುವ ಎಲ್ಲಾ ಭಾಷೆಗಳ ಒಟ್ಟು ಶಬ್ದ ಭಂಡಾರವನ್ನು ಒಟ್ಟಿಗೆ ಪರಿಗಣಿಸಿ.',
    }
  },
  {
    id: 'syntax_morphology',
    name: {
      en: 'Syntax & Morphology (Grammar & Sentence Structure)',
      hi: 'वाक्य विन्यास और रूपविज्ञान (Syntax & Morphology)',
      kn: 'ವಾಕ್ಯ ರಚನೆ ಮತ್ತು ವ್ಯಾಕರಣ (Syntax & Morphology)',
    },
    category: 'language',
    definition: {
      en: 'Syntax dictates sentence structure, word order, and phrase elaboration. Morphology governs morpheme units (prefixes, suffixes, verb tenses, plurals, gender markers).',
      hi: 'वाक्य विन्यास (Syntax) वाक्यों को सही क्रम में जोड़ने का नियम है। रूपविज्ञान (Morphology) प्रत्यय, काल (Tense) और वचन (Plural) के नियमों को नियंत्रित करता है।',
      kn: 'ವಾಕ್ಯ ರಚನೆ (Syntax) ಎಂದರೆ ಪದಗಳನ್ನು ಕ್ರಮಬದ್ಧವಾಗಿ ಜೋಡಿಸುವುದು. ವ್ಯಾಕರಣ (Morphology) ಎಂದರೆ ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯಗಳು ಮತ್ತು ಕಾಲಗಳನ್ನು ಸರಿಯಾಗಿ ಬಳಸುವುದು.',
    },
    clinicalSignificance: {
      en: 'Mean Length of Utterance (MLU in morphemes/words) corresponds closely to chronological age between 1.5 and 4.5 years (e.g. 2yo: MLU ~2.0; 3yo: MLU ~3.0; 4yo: MLU ~4.0). Brown\'s stages of morphological development benchmark grammatical mastery.',
      hi: 'वाक्य की औसत लंबाई (MLU) सीधे बच्चे की उम्र से मेल खाती है (2 वर्ष = 2 शब्द, 3 वर्ष = 3-4 शब्द)।',
      kn: 'ವಾಕ್ಯದ ಸರಾಸರಿ ಉದ್ದ (MLU) ಮಗುವಿನ ವಯಸ್ಸಿಗೆ ಅನುಗುಣವಾಗಿ ಬೆಳೆಯುತ್ತದೆ (2 ವರ್ಷಕ್ಕೆ 2 ಪದ, 3 ವರ್ಷಕ್ಕೆ 3 ಪದ).',
    },
    typicalMilestones: {
      en: [
        '18–24 months: 2-word combinations emerge (Noun + Verb, e.g. "Papa go", "Amma baa").',
        '30 months: 3-word sentences with present progressive (-ing) and basic prepositions.',
        '36–42 months: 4–5 word sentences; uses regular past tense, plurals, and WH- questions.',
        '48–60 months: Complex compound sentences using "because", "so", "if", and future tense.'
      ],
      hi: [
        '18-24 महीने: 2 शब्दों के जोड़े बनना शुरू (जैसे "पापा जाओ", "दूध दो")।',
        '30 महीने: 3 शब्दों के वाक्य और क्रिया का प्रयोग।',
        '36-42 महीने: 4-5 शब्दों के वाक्य; भूतकाल और बहुवचन का सही प्रयोग।',
        '48-60 महीने: "क्योंकि", "अगर" वाले जटिल और संयुक्त वाक्यों का प्रयोग।'
      ],
      kn: [
        '18-24 ತಿಂಗಳು: 2 ಪದಗಳ ಸಂಯೋಜನೆ (ಉದಾ: "ಅಪ್ಪ ಬಾ", "ಹಾಲು ಬೇಕು").',
        '30 ತಿಂಗಳು: 3 ಪದಗಳ ವಾಕ್ಯಗಳು.',
        '36-42 ತಿಂಗಳು: 4-5 ಪದಗಳ ವಾಕ್ಯಗಳು; ಭೂತಕಾಲ ಮತ್ತು ಪ್ರಶ್ನಾರ್ಥಕ ವಾಕ್ಯಗಳ ಬಳಕೆ.',
        '48-60 ತಿಂಗಳು: "ಏಕೆಂದರೆ", "ಆದರೆ" ಎಂಬ ಸಂಕೀರ್ಣ ವಾಕ್ಯಗಳ ಬಳಕೆ.'
      ]
    },
    redFlagsOrDisorders: {
      en: 'Absence of 2-word combinations by 24 months; persistent telegraphic speech without grammatical markers past 42 months.',
      hi: '24 महीने तक 2 शब्दों को न जोड़ना या 4 वर्ष के बाद भी अधूरे और टूटे-फूटे वाक्य बोलना।',
      kn: '24 ತಿಂಗಳಿಗೆ 2 ಪದಗಳನ್ನು ಜೋಡಿಸದಿರುವುದು ಅಥವಾ 4 ವರ್ಷದ ನಂತರವೂ ಅಪೂರ್ಣ ವಾಕ್ಯಗಳ ಬಳಕೆ.',
    },
    clinicalAssessmentTips: {
      en: 'Calculate MLU from a 50-utterance spontaneous language sample during naturalistic play.',
      hi: 'खेलते समय बच्चे के 50 वाक्यों को रिकॉर्ड करके औसत वाक्य लंबाई (MLU) निकालें।',
      kn: 'ಆಟವಾಡುವ ಸಮಯದಲ್ಲಿ ಮಗು ಆಡುವ 50 ವಾಕ್ಯಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಸರಾಸರಿ ಉದ್ದವನ್ನು ಲೆಕ್ಕಹಾಕಿ.',
    }
  },
  {
    id: 'pragmatics_social',
    name: {
      en: 'Pragmatics & Social Communication',
      hi: 'सामाजिक संवाद और व्यावहारिकता (Pragmatics)',
      kn: 'ಸಾಮಾಜಿಕ ಸಂವಹನ ಮತ್ತು ವ್ಯವಹಾರ ಜ್ಞಾನ (Pragmatics)',
    },
    category: 'language',
    definition: {
      en: 'Pragmatics encompasses the social and contextual rules of language: greeting, requesting, commenting, turn-taking, maintaining conversational topics, eye contact, and understanding non-verbal body language and emotional context.',
      hi: 'प्रैग्मैटिक्स (Pragmatics) समाज में बातचीत के नियमों का पालन है: नमस्ते करना, अपनी बात कहना, दूसरों को बोलने का मौका देना और चेहरे के भाव समझना।',
      kn: 'ಸಮಾಜದಲ್ಲಿ ಇತರರೊಂದಿಗೆ ಹೇಗೆ ಮಾತನಾಡಬೇಕು, ಸಂಭಾಷಣೆಯಲ್ಲಿ ಹೇಗೆ ಸರದಿ ಪಾಲಿಸಬೇಕು ಮತ್ತು ಮುಖಭಾವಗಳನ್ನು ಹೇಗೆ ಅರ್ಥೈಸಿಕೊಳ್ಳಬೇಕು ಎಂಬ ಸಾಮಾಜಿಕ ಜ್ಞಾನ.',
    },
    clinicalSignificance: {
      en: 'Pragmatic impairments are the central diagnostic feature of Social (Pragmatic) Communication Disorder (SPCD) and Autism Spectrum Disorder (ASD). Early signs include absent joint attention, lack of pointing, and difficulty with conversational repair.',
      hi: 'यह ऑटिज्म (ASD) और सामाजिक संवाद विकार की पहचान का मुख्य आधार है। संयुक्त ध्यान और इशारों की कमी इसके शुरुआती संकेत हैं।',
      kn: 'ಆಟಿಸಂ (ASD) ಮತ್ತು ಸಾಮಾಜಿಕ ಸಂವಹನ ದೋಷವನ್ನು ಪತ್ತೆಹಚ್ಚುವ ಪ್ರಮುಖ ಮಾನದಂಡ.',
    },
    typicalMilestones: {
      en: [
        '6–9 months: Joint attention, social smiling, responding to name, vocal turn-taking.',
        '12–18 months: Proto-declarative pointing (sharing joy), waving bye-bye, functional pretend play.',
        '2–3 years: Initiates conversations, introduces topics, engages in parallel and associative peer play.',
        '4–5 years: Sustains 4–5 conversational turns, repairs communication breakdowns, adapts register to younger peers vs adults.'
      ],
      hi: [
        '6-9 महीने: संयुक्त ध्यान, नाम पर देखना, सामाजिक मुस्कान।',
        '12-18 महीने: खुशी बांटने के लिए इशारा करना, टाटा करना।',
        '2-3 वर्ष: बातचीत शुरू करना और साथियों के साथ खेलना।',
        '4-5 वर्ष: 4-5 बार बारी-बारी से बात करना और शिष्टाचार निभाना।'
      ],
      kn: [
        '6-9 ತಿಂಗಳು: ಜಂಟಿ ಏಕಾಗ್ರತೆ, ಹೆಸರು ಕರೆದಾಗ ನೋಡುವುದು, ನಗು.',
        '12-18 ತಿಂಗಳು: ಸಂತೋಷ ಹಂಚಿಕೊಳ್ಳಲು ಬೆರಳು ಮಾಡುವುದು, ಟಾಟಾ ಮಾಡುವುದು.',
        '2-3 ವರ್ಷ: ಸಂಭಾಷಣೆ ಆರಂಭಿಸುವುದು ಮತ್ತು ಗೆಳೆಯರೊಂದಿಗೆ ಆಡುವುದು.',
        '4-5 ವರ್ಷ: ಸಂಭಾಷಣೆಯನ್ನು ಮುಂದುವರಿಸುವುದು ಮತ್ತು ಸೌಜನ್ಯ ಪಾಲಿಸುವುದು.'
      ]
    },
    redFlagsOrDisorders: {
      en: 'No eye contact or response to name at 9–12 months, lack of pointing by 14 months, loss of social skills at any age.',
      hi: 'नाम पुकारने पर न देखना, उंगली से इशारा न करना या पहले सीखी बातें अचानक भूल जाना।',
      kn: 'ಹೆಸರು ಕರೆದಾಗ ನೋಡದಿರುವುದು, ಬೆರಳು ಮಾಡದಿರುವುದು ಅಥವಾ ಕಣ್ಣಲ್ಲಿ ಕಣ್ಣಿಟ್ಟು ನೋಡದಿರುವುದು.',
    },
    clinicalAssessmentTips: {
      en: 'Observe social reciprocity during unscripted play with examiner and parent; administer M-CHAT-R/F screening when flags arise.',
      hi: 'माता-पिता और बच्चे के बीच स्वाभाविक खेल के दौरान सामाजिक जुड़ाव का अवलोकन करें।',
      kn: 'ಸ್ವಾಭಾವಿಕ ಆಟದ ಸಮಯದಲ್ಲಿ ಮಗುವಿನ ಸಾಮಾಜಿಕ ಹೊಂದಾಣಿಕೆಯನ್ನು ಸೂಕ್ಷ್ಮವಾಗಿ ಗಮನಿಸಿ.',
    }
  },
  {
    id: 'multilingual_indian_context',
    name: {
      en: 'Multilingual Development in Indian Context (Hindi / Kannada / English)',
      hi: 'भारतीय संदर्भ में बहुभाषी विकास (हिंदी / कन्नड़ / अंग्रेजी)',
      kn: 'ಭಾರತೀಯ ಪರಿಸರದಲ್ಲಿ ಬಹುಭಾಷಾ ಬೆಳವಣಿಗೆ (ಕನ್ನಡ / ಹಿಂದಿ / ಇಂಗ್ಲಿಷ್)',
    },
    category: 'multilingual',
    definition: {
      en: 'In India, children are naturally exposed to two or more languages simultaneously (e.g. Kannada at home, Hindi in community, English at preschool). This is typical and cognitively advantageous.',
      hi: 'भारत में बच्चे स्वाभाविक रूप से घर पर कन्नड़/हिंदी और बाहर अंग्रेजी जैसी कई भाषाएं एक साथ सीखते हैं। यह सामान्य और बच्चे के बौद्धಿಕ विकास के लिए अत्यंत लाभकारी है।',
      kn: 'ಭಾರತೀಯ ಮನೆಗಳಲ್ಲಿ ಮಕ್ಕಳು ಏಕಕಾಲದಲ್ಲಿ 2-3 ಭಾಷೆಗಳನ್ನು (ಕನ್ನಡ, ಹಿಂದಿ, ಇಂಗ್ಲಿಷ್) ಕಲಿಯುವುದು ಅತ್ಯಂತ ಸ್ವಾಭಾವಿಕ ಮತ್ತು ಬುದ್ಧಿಮತ್ತೆಗೆ ಪೂರಕ.',
    },
    clinicalSignificance: {
      en: 'CRITICAL CLINICAL FACT: Exposing a child to multiple languages DOES NOT cause speech or language delay. Clinicians and parents must evaluate TOTAL conceptual vocabulary across all spoken languages before assuming a delay.',
      hi: 'महत्वपूर्ण तथ्य: कई भाषाएं सिखाने से बच्चे की बोली में कोई रुकावट या देरी नहीं आती है। बच्चे की कुल शब्दावली सभी भाषाओं को मिलाकर आंकी जानी चाहिए।',
      kn: 'ಪ್ರಮುಖ ಸತ್ಯ: ಬಹುಭಾಷೆಗಳನ್ನು ಕಲಿಸುವುದರಿಂದ ಮಗುವಿನ ಮಾತು ತಡವಾಗುವುದಿಲ್ಲ. ಎಲ್ಲಾ ಭಾಷೆಗಳ ಒಟ್ಟು ಶಬ್ದಗಳನ್ನು ಸೇರಿಸಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಬೇಕು.',
    },
    typicalMilestones: {
      en: [
        'Code-Switching / Code-Mixing is a normal, healthy linguistic strategy (e.g. "Amma milk ಬೇಕು", "Gadi stop karo").',
        'A child may know food words in their mother tongue (Kannada/Hindi) and color/number words in English.',
        'LEST (Language Evaluation Scale Trivandrum) and AIISH clinical protocols emphasize evaluating expressive intent regardless of which language the child chooses.'
      ],
      hi: [
        'दो भाषाओं के शब्दों को मिलाकर बोलना (Code-mixing) बिल्कुल सामान्य और स्वस्थ प्रक्रिया है।',
        'बच्चा खाने-पीने की चीजें मातृभाषा में और रंग-गिनती अंग्रेजी में बोल सकता है।',
        'LEST त्रिवेंद्रम और AIISH प्रोटोकॉल यह सुनिश्चित करते हैं कि किसी भी भाषा में बोला गया शब्द मान्य है।'
      ],
      kn: [
        'ಎರಡು ಭಾಷೆಗಳ ಪದಗಳನ್ನು ಸೇರಿಸಿ ಮಾತನಾಡುವುದು (ಉದಾ: "ಅಮ್ಮ milk ಬೇಕು") ಅತ್ಯಂತ ಸಹಜ ಮತ್ತು ಆರೋಗ್ಯಕರ ಬೆಳವಣಿಗೆ.',
        'ಮಗು ತಿನಿಸುಗಳ ಹೆಸರನ್ನು ಮಾತೃಭಾಷೆಯಲ್ಲಿ ಮತ್ತು ಸಂಖ್ಯೆಗಳನ್ನು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಕಲಿಯಬಹುದು.',
        'LEST ಮತ್ತು AIISH ಪ್ರೋಟೋಕಾಲ್‌ಗಳು ಯಾವುದೇ ಭಾಷೆಯಲ್ಲಾದರೂ ಮಗು ತನ್ನ ಭಾವನೆಗಳನ್ನು ವ್ಯಕ್ತಪಡಿಸುವುದನ್ನು ಪ್ರಮುಖವಾಗಿ ಪರಿಗಣಿಸುತ್ತವೆ.'
      ]
    },
    redFlagsOrDisorders: {
      en: 'If a child exhibits language delay, the delay will be present across ALL languages they are exposed to (not just in one language). True delays stem from neurological/developmental factors, never from bilingualism.',
      hi: 'यदि बच्चे में भाषा की देरी है, तो वह सभी भाषाओं में दिखेगी। केवल एक भाषा कम बोलना देरी का लक्षण नहीं है।',
      kn: 'ಮಗುವಿನಲ್ಲಿ ಭಾಷಾ ಸಮಸ್ಯೆ ಇದ್ದರೆ ಅದು ಎಲ್ಲಾ ಭಾಷೆಗಳಲ್ಲೂ ಸಮಾನವಾಗಿ ಕಾಣಿಸುತ್ತದೆ. ಒಂದು ಭಾಷೆ ಚೆನ್ನಾಗಿ ಬಂದು ಮತ್ತೊಂದು ಭಾಷೆ ತಡವಾದರೆ ಅದು ದೋಷವಲ್ಲ.',
    },
    clinicalAssessmentTips: {
      en: 'Advise parents to speak their most fluent, emotionally natural mother tongue at home. Do not advise parents to drop Indian languages in favor of English.',
      hi: 'माता-पिता को अपनी स्वाभाविक मातृभाषा में ही बच्चे से खुलकर बात करने के लिए प्रोत्साहित करें।',
      kn: 'ಪೋಷಕರು ತಮ್ಮ ಮಾತೃಭಾಷೆಯಲ್ಲಿಯೇ ಮಗುವಿನೊಂದಿಗೆ ಪ್ರೀತಿಯಿಂದ ಸಂವಹನ ನಡೆಸಲು ಸಲಹೆ ನೀಡಿ.',
    }
  }
];

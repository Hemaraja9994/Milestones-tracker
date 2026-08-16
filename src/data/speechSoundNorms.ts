import { SpeechSoundItem, IntelligibilityNorm } from '@/types';

export const SPEECH_SOUNDS_CROWE_MCLEOD: SpeechSoundItem[] = [
  // EARLY-8
  {
    sound: 'p',
    ipa: '/p/',
    group: 'early_8',
    age75Percent: 2.0,
    age90Percent: 3.0,
    examplesEn: ['pat', 'apple', 'cup'],
    examplesHi: ['पानी (paani)', 'पापा (papa)', 'टोपी (topi)'],
    examplesKn: ['ಪಾಪು (paapu)', 'ಹಾಲು (haalu)', 'ಕಪ್ (cup)'],
    description: {
      en: 'Voiceless bilabial stop. Produced by closing both lips and releasing air pressure.',
      hi: 'द्वयोष्ठ्य स्पर्श ध्वनि। दोनों होठों को मिलाकर हवा के दबाव से बोली जाती है।',
      kn: 'ಉಭಯೋಷ್ಠ್ಯ ಸ್ಪರ್ಶ ಧ್ವನಿ. ಎರಡೂ ತುಟಿಗಳನ್ನು ಸೇರಿಸಿ ಗಾಳಿಯನ್ನು ಹೊರಹಾಕುವ ಮೂಲಕ ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ.',
    }
  },
  {
    sound: 'b',
    ipa: '/b/',
    group: 'early_8',
    age75Percent: 2.0,
    age90Percent: 3.0,
    examplesEn: ['ball', 'baby', 'tub'],
    examplesHi: ['बिल्ली (billi)', 'बाबा (baba)', 'किताब (kitaab)'],
    examplesKn: ['ಬಾಲು (baalu)', 'ಬೆಕ್ಕು (bekku)', 'ಹಬ್ಬ (habba)'],
    description: {
      en: 'Voiced bilabial stop. Produced with both lips and vocal cord vibration.',
      hi: 'सघोष द्वयोष्ठ्य स्पर्श ध्वनि। होठों के जुड़ाव और स्वरतंत्री के कंपन से बनती है।',
      kn: 'ಘೋಷ ಉಭಯೋಷ್ಠ್ಯ ಧ್ವನಿ. ತುಟಿಗಳ ಚಲನೆ ಮತ್ತು ಧ್ವನಿಪೆಟ್ಟಿಗೆಯ ಕಂಪನದೊಂದಿಗೆ ಉಚ್ಚಾರಣೆ.',
    }
  },
  {
    sound: 'm',
    ipa: '/m/',
    group: 'early_8',
    age75Percent: 2.0,
    age90Percent: 3.0,
    examplesEn: ['mom', 'monkey', 'drum'],
    examplesHi: ['मम्मी (mummy)', 'मामा (mama)', 'आम (aam)'],
    examplesKn: ['ಅಮ್ಮ (amma)', 'ಮನೆ (mane)', 'ಮಗು (magu)'],
    description: {
      en: 'Voiced bilabial nasal. Produced by closing lips while air flows through the nose.',
      hi: 'अनुनासिक द्वयोष्ठ्य ध्वनि। होंठ बंद करके नाक से हवा निकालकर बोली जाती है।',
      kn: 'ಅನುನಾಸಿಕ ಉಭಯೋಷ್ಠ್ಯ ಧ್ವನಿ. ತುಟಿಗಳನ್ನು ಮುಚ್ಚಿ ಮೂಗಿನ ಮೂಲಕ ಗಾಳಿ ಹೊರಹಾಕಿ ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ.',
    }
  },
  {
    sound: 'd',
    ipa: '/d/',
    group: 'early_8',
    age75Percent: 2.0,
    age90Percent: 3.0,
    examplesEn: ['dog', 'daddy', 'bed'],
    examplesHi: ['दादी (daadi)', 'दूध (doodh)', 'दरवाजा (darwaza)'],
    examplesKn: ['ದೋಸೆ (dose)', 'ದೇವಸ್ಥಾನ (devasthana)', 'ಹಾಡು (haadu)'],
    description: {
      en: 'Voiced alveolar stop. Produced with tongue tip touching the alveolar ridge.',
      hi: 'दंत्य/वर्त्स्य सघोष स्पर्श ध्वनि। जीभ की नोक को तालु/दांतों पर लगाकर बोला जाता है।',
      kn: 'ದಂತ್ಯ/ಮೂರ್ಧನ್ಯ ಘೋಷ ಧ್ವನಿ. ನಾಲಿಗೆಯ ತುದಿಯನ್ನು ಹಲ್ಲು ಅಥವಾ ವಸಡಿಗೆ ಸ್ಪರ್ಶಿಸಿ ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ.',
    }
  },
  {
    sound: 'n',
    ipa: '/n/',
    group: 'early_8',
    age75Percent: 2.0,
    age90Percent: 3.0,
    examplesEn: ['no', 'banana', 'sun'],
    examplesHi: ['नाक (naak)', 'नाना (naana)', 'पानी (paani)'],
    examplesKn: ['ನಾಯಿ (naayi)', 'ನನ್ನ (nanna)', 'ಮನೆ (mane)'],
    description: {
      en: 'Voiced alveolar nasal. Produced with tongue tip at alveolar ridge and nasal airflow.',
      hi: 'अनुनासिक दंत्य/वर्त्स्य ध्वनि।',
      kn: 'ಅನುನಾಸಿಕ ದಂತ್ಯ ಧ್ವನಿ. ನಾಲಿಗೆಯ ತುದಿಯನ್ನು ವಸಡಿಗೆ ಮುಟ್ಟಿಸಿ ಮೂಗಿನ ಮೂಲಕ ಗಾಳಿ ಹೊರಹಾಕಲಾಗುತ್ತದೆ.',
    }
  },
  {
    sound: 'w',
    ipa: '/w/',
    group: 'early_8',
    age75Percent: 2.0,
    age90Percent: 3.0,
    examplesEn: ['water', 'wind', 'away'],
    examplesHi: ['वाह (waah)', 'हवा (hawa)'],
    examplesKn: ['ವರುಷ (varusha)', 'ಹೂವು (hoovu)'],
    description: {
      en: 'Voiced labio-velar approximant. Lips rounded with back of tongue raised.',
      hi: 'ओष्ठ्य-कंठ्य ध्वनि।',
      kn: 'ತುಟಿಗಳನ್ನು ದುಂಡಾಗಿಸಿ ಉಚ್ಚರಿಸುವ ಅರೆ-ಸ್ವರ ಧ್ವನಿ.',
    }
  },
  {
    sound: 'h',
    ipa: '/h/',
    group: 'early_8',
    age75Percent: 2.0,
    age90Percent: 3.0,
    examplesEn: ['hat', 'home', 'happy'],
    examplesHi: ['हाथ (haath)', 'हाथी (haathi)', 'हाँ (haan)'],
    examplesKn: ['ಹಾಲು (haalu)', 'ಹಕ್ಕಿ (hakki)', 'ಹಣ್ಣು (hannu)'],
    description: {
      en: 'Voiceless glottal fricative. Breath sound generated at the vocal folds.',
      hi: 'काकल्य संघर्षी ध्वनि। गले से सीधे हवा छोड़कर बोली जाती है।',
      kn: 'ಕಂಠ್ಯ ಮಹಾಪ್ರಾಣ ಧ್ವನಿ. ಗಂಟಲಿನಿಂದ ಉಸಿರನ್ನು ಸರಾಗವಾಗಿ ಹೊರಬಿಟ್ಟು ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ.',
    }
  },
  {
    sound: 'j (y)',
    ipa: '/j/',
    group: 'early_8',
    age75Percent: 2.5,
    age90Percent: 3.5,
    examplesEn: ['yes', 'yellow', 'toy'],
    examplesHi: ['यह (yeh)', 'याद (yaad)', 'गाड़ी (gaadi)'],
    examplesKn: ['ಯಾರು (yaaru)', 'ಯಾವಾಗ (yaavaaga)'],
    description: {
      en: 'Voiced palatal glide/approximant.',
      hi: 'तालव्य अंतस्थ ध्वनि।',
      kn: 'ತಾಲವ್ಯ ಅರೆ-ಸ್ವರ ಧ್ವನಿ.',
    }
  },

  // MIDDLE-8
  {
    sound: 't',
    ipa: '/t/',
    group: 'middle_8',
    age75Percent: 3.0,
    age90Percent: 4.0,
    examplesEn: ['toy', 'water', 'cat'],
    examplesHi: ['तोता (tota)', 'टोपी (topi)', 'हाथ (haath)'],
    examplesKn: ['ತಾಯಿ (taayi)', 'ತೋಟ (thota)', 'ಊಟ (oota)'],
    description: {
      en: 'Voiceless alveolar stop (Note: Dental in Hindi/Kannada /t̪/ and retroflex /ʈ/).',
      hi: 'अघोष स्पर्श ध्वनि (हिंदी में त /t̪/ और ट /ʈ/)।',
      kn: 'ಅಘೋಷ ಸ್ಪರ್ಶ ಧ್ವನಿ (ಕನ್ನಡದಲ್ಲಿ \'ತ\' ಮತ್ತು \'ಟ\').',
    }
  },
  {
    sound: 'k',
    ipa: '/k/',
    group: 'middle_8',
    age75Percent: 3.0,
    age90Percent: 4.0,
    examplesEn: ['cat', 'cookie', 'book'],
    examplesHi: ['केला (kela)', 'किताब (kitaab)', 'एक (ek)'],
    examplesKn: ['ಕಾಗೆ (kaage)', 'ಕುರಿ (kuri)', 'ಮಕ್ಕಳು (makkalu)'],
    description: {
      en: 'Voiceless velar stop. Produced by raising back of tongue against soft palate.',
      hi: 'कंठ्य अघोष स्पर्श ध्वनि। जीभ के पिछले हिस्से को कोमल तालु से छूकर बोली जाती है।',
      kn: 'ಕಂಠ್ಯ ಅಘೋಷ ಸ್ಪರ್ಶ ಧ್ವನಿ. ನಾಲಿಗೆಯ ಹಿಂಭಾಗವನ್ನು ಮೃದು ಅಂಗಳಕ್ಕೆ ಮುಟ್ಟಿಸಿ ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ.',
    }
  },
  {
    sound: 'g',
    ipa: '/g/',
    group: 'middle_8',
    age75Percent: 3.0,
    age90Percent: 4.0,
    examplesEn: ['go', 'doggy', 'big'],
    examplesHi: ['गाय (gaay)', 'गाना (gaana)', 'आग (aag)'],
    examplesKn: ['ಗುಬ್ಬಿ (gubbi)', 'ಗಿಳಿ (gili)', 'ಮಗು (magu)'],
    description: {
      en: 'Voiced velar stop.',
      hi: 'कंठ्य सघोष स्पर्श ध्वनि।',
      kn: 'ಕಂಠ್ಯ ಘೋಷ ಸ್ಪರ್ಶ ಧ್ವನಿ.',
    }
  },
  {
    sound: 'f',
    ipa: '/f/',
    group: 'middle_8',
    age75Percent: 3.5,
    age90Percent: 4.5,
    examplesEn: ['fish', 'coffee', 'leaf'],
    examplesHi: ['फूल (phool)', 'सफ़ेद (safed)', 'साफ (saaf)'],
    examplesKn: ['ಫಲ (phala)', 'ಕಾಫಿ (coffee)'],
    description: {
      en: 'Voiceless labiodental fricative. Top teeth placed lightly on bottom lip with continuous airflow.',
      hi: 'दंतोष्ठ्य संघर्षी ध्वनि। ऊपर के दांतों को नीचे के होंठ पर रखकर हवा निकाली जाती है।',
      kn: 'ದಂತೋಷ್ಠ್ಯ ಸಂಘರ್ಷಿ ಧ್ವನಿ. ಮೇಲಿನ ಹಲ್ಲುಗಳನ್ನು ಕೆಳಗಿನ ತುಟಿಗೆ ತಾಗಿಸಿ ಗಾಳಿ ಹೊರಹಾಕಲಾಗುತ್ತದೆ.',
    }
  },
  {
    sound: 'v',
    ipa: '/v/ or /ʋ/',
    group: 'middle_8',
    age75Percent: 4.0,
    age90Percent: 5.0,
    examplesEn: ['van', 'every', 'glove'],
    examplesHi: ['वह (voh)', 'हवा (hawa)', 'दीवार (deewar)'],
    examplesKn: ['ವಾಹನ (vaahana)', 'ದೇವತೆ (devathe)'],
    description: {
      en: 'Voiced labiodental fricative / labiodental approximant (common in Indian English and Indian languages).',
      hi: 'दंतोष्ठ्य सघोष ध्वनि।',
      kn: 'ದಂತೋಷ್ಠ್ಯ ಘೋಷ ಧ್ವನಿ.',
    }
  },
  {
    sound: 'tʃ (ch)',
    ipa: '/tʃ/',
    group: 'middle_8',
    age75Percent: 4.0,
    age90Percent: 5.0,
    examplesEn: ['chair', 'kitchen', 'watch'],
    examplesHi: ['चम्मच (chammach)', 'चाचा (chaacha)', 'बच्चा (bachha)'],
    examplesKn: ['ಚಮಚ (chamacha)', 'ಚೆಂಡು (chendu)', 'ಹಚ್ಚು (hacchu)'],
    description: {
      en: 'Voiceless postalveolar affricate.',
      hi: 'तालव्य अघोष स्पर्श-संघर्षी ध्वनि।',
      kn: 'ತಾಲವ್ಯ ಅಘೋಷ ಸ್ಪರ್ಶ-ಸಂಘರ್ಷಿ ಧ್ವನಿ.',
    }
  },
  {
    sound: 'dʒ (j)',
    ipa: '/dʒ/',
    group: 'middle_8',
    age75Percent: 4.0,
    age90Percent: 5.0,
    examplesEn: ['jump', 'juice', 'bridge'],
    examplesHi: ['जल (jal)', 'जूता (joota)', 'राजा (raaja)'],
    examplesKn: ['ಜೇನು (jenu)', 'ಜನ (jana)', 'ಹೂಜ (huuja)'],
    description: {
      en: 'Voiced postalveolar affricate.',
      hi: 'तालव्य सघोष स्पर्श-संघर्षी ध्वनि।',
      kn: 'ತಾಲವ್ಯ ಘೋಷ ಸ್ಪರ್ಶ-ಸಂಘರ್ಷಿ ಧ್ವನಿ.',
    }
  },
  {
    sound: 'ŋ (ng)',
    ipa: '/ŋ/',
    group: 'middle_8',
    age75Percent: 3.5,
    age90Percent: 4.5,
    examplesEn: ['ring', 'singing', 'long'],
    examplesHi: ['रंग (rang)', 'पतंग (patang)'],
    examplesKn: ['ಬಣ್ಣ (banna)', 'ಸಿಂಗಾರ (singaara)'],
    description: {
      en: 'Voiced velar nasal.',
      hi: 'कंठ्य अनुनासिक ध्वनि।',
      kn: 'ಕಂಠ್ಯ ಅನುನಾಸಿಕ ಧ್ವನಿ.',
    }
  },

  // LATE-8
  {
    sound: 's',
    ipa: '/s/',
    group: 'late_8',
    age75Percent: 4.0,
    age90Percent: 5.5,
    examplesEn: ['sun', 'bicycle', 'bus'],
    examplesHi: ['साइकिल (bicycle)', 'सेब (seb)', 'बस (bus)'],
    examplesKn: ['ಸೂರ್ಯ (soorya)', 'ಸೇಬು (sebu)', 'ಬಸ್ಸು (bassu)'],
    description: {
      en: 'Voiceless alveolar fricative. High frequency hiss produced with narrow tongue groove.',
      hi: 'दंत्य अघोष संघर्षी ध्वनि। जीभ को दांतों के पीछे रखकर सीटी जैसी ध्वनि बनाना।',
      kn: 'ದಂತ್ಯ ಅಘೋಷ ಸಂಘರ್ಷಿ ಧ್ವನಿ. ಹಲ್ಲಿನ ಹಿಂದೆ ನಾಲಿಗೆ ಇಟ್ಟು ಸೀಟಿಯಂತಹ ಧ್ವನಿ ಹೊರಡಿಸುವುದು.',
    }
  },
  {
    sound: 'z',
    ipa: '/z/',
    group: 'late_8',
    age75Percent: 4.5,
    age90Percent: 6.0,
    examplesEn: ['zoo', 'music', 'nose'],
    examplesHi: ['ज़ेबरा (zebra)', 'दरवाज़ा (darwaza)', 'मेज़ (mez)'],
    examplesKn: ['ಝೀಬ್ರಾ (zebra)', 'ಮ್ಯೂಸಿಕ್ (music)'],
    description: {
      en: 'Voiced alveolar fricative. Like /s/ with vocal fold vibration (buzzing sound).',
      hi: 'दंत्य सघोष संघर्षी ध्वनि।',
      kn: 'ದಂತ್ಯ ಘೋಷ ಸಂಘರ್ಷಿ ಧ್ವನಿ.',
    }
  },
  {
    sound: 'ʃ (sh)',
    ipa: '/ʃ/',
    group: 'late_8',
    age75Percent: 4.0,
    age90Percent: 5.5,
    examplesEn: ['shoe', 'washing', 'fish'],
    examplesHi: ['शेर (sher)', 'शक्कर (shakkar)', 'खुशी (khushi)'],
    examplesKn: ['ಶಾಲೆ (shaale)', 'ಶಂಖ (shankha)', 'ಖುಷಿ (khushi)'],
    description: {
      en: 'Voiceless postalveolar fricative.',
      hi: 'तालव्य अघोष संघर्षी ध्वनि।',
      kn: 'ತಾಲವ್ಯ ಅಘೋಷ ಸಂಘರ್ಷಿ ಧ್ವನಿ.',
    }
  },
  {
    sound: 'l',
    ipa: '/l/',
    group: 'late_8',
    age75Percent: 4.0,
    age90Percent: 5.0,
    examplesEn: ['lion', 'yellow', 'ball'],
    examplesHi: ['लाल (laal)', 'लड़का (ladka)', 'फूल (phool)'],
    examplesKn: ['ಹಾಲು (haalu)', 'ಕಾಲ (kaala)', 'ಬೆಳಕು (belaku - retroflex ಳ)'],
    description: {
      en: 'Voiced alveolar lateral liquid (Note retroflex /ɭ/ in Kannada).',
      hi: 'पार्श्विक ध्वनि।',
      kn: 'ಪಾರ್ಶ್ವಿಕ ದ್ರವ ಧ್ವನಿ (ಕನ್ನಡದಲ್ಲಿ ಸರಳ \'ಲ\' ಮತ್ತು ಮೂರ್ಧನ್ಯ \'ಳ\').',
    }
  },
  {
    sound: 'r',
    ipa: '/r/ or /ɹ/',
    group: 'late_8',
    age75Percent: 4.5,
    age90Percent: 6.0,
    examplesEn: ['rabbit', 'carrot', 'star'],
    examplesHi: ['रोटी (roti)', 'रंग (rang)', 'घर (ghar)'],
    examplesKn: ['ರೈಲು (railu)', 'ರಾತ್ರಿ (raatri)', 'ಮರ (mara)'],
    description: {
      en: 'Rhotic liquid (tap /r/ in Hindi/Kannada; retroflex /r/ or bunched in English). Late developing due to high motor precision.',
      hi: 'लुंठित ध्वनि (र)। अत्यधिक सूक्ष्म पेशीय नियंत्रण की आवश्यकता होती है।',
      kn: 'ಕಂಪಿತ ಧ್ವನಿ (\'ರ\'). ಸೂಕ್ಷ್ಮ ನಾಲಿಗೆಯ ನಿಯಂತ್ರಣ ಬೇಕಾಗುವುದರಿಂದ ತಡವಾಗಿ ಕಲಿಯಲಾಗುತ್ತದೆ.',
    }
  },
  {
    sound: 'θ (th voiceless)',
    ipa: '/θ/',
    group: 'late_8',
    age75Percent: 4.5,
    age90Percent: 6.0,
    examplesEn: ['thumb', 'bathtub', 'mouth'],
    examplesHi: ['थर्मस (thermos)', 'हाथ (haath)'],
    examplesKn: ['ಥ್ಯಾಂಕ್ಸ್ (thanks)'],
    description: {
      en: 'Voiceless interdental fricative. Tongue tip between teeth with airflow.',
      hi: 'दंत्य अंतर्दंत्य संघर्षी ध्वनि।',
      kn: 'ದಂತ ಸಂಘರ್ಷಿ ಧ್ವನಿ. ಹಲ್ಲುಗಳ ಮಧ್ಯೆ ನಾಲಿಗೆ ಇಟ್ಟು ಉಚ್ಚಾರಣೆ.',
    }
  },
  {
    sound: 'ð (th voiced)',
    ipa: '/ð/',
    group: 'late_8',
    age75Percent: 5.0,
    age90Percent: 6.5,
    examplesEn: ['this', 'feather', 'breathe'],
    examplesHi: ['यह (yah)', 'वे (ve)'],
    examplesKn: ['ದಿಸ್ (this)'],
    description: {
      en: 'Voiced interdental fricative.',
      hi: 'सघोष अंतर्दंत्य संघर्षी ध्वनि।',
      kn: 'ಘೋಷ ದಂತ ಸಂಘರ್ಷಿ ಧ್ವನಿ.',
    }
  },
  {
    sound: 'ʒ (measure)',
    ipa: '/ʒ/',
    group: 'late_8',
    age75Percent: 5.5,
    age90Percent: 6.5,
    examplesEn: ['treasure', 'television', 'garage'],
    examplesHi: ['टेलीविज़न (television)', 'गैराज (garage)'],
    examplesKn: ['ಟೆಲಿವಿಷನ್ (television)'],
    description: {
      en: 'Voiced postalveolar fricative.',
      hi: 'तालव्य सघोष संघर्षी ध्वनि।',
      kn: 'ತಾಲವ್ಯ ಘೋಷ ಸಂಘರ್ಷಿ ಧ್ವನಿ.',
    }
  }
];

export const INTELLIGIBILITY_NORMS: IntelligibilityNorm[] = [
  {
    ageYears: 1.5,
    expectedToCaregivers: '25%–50%',
    expectedToUnfamiliar: '10%–25%',
    description: {
      en: 'Mostly single words, jargon, and vocalizations. Parents understand familiar routines, but strangers understand very little.',
      hi: 'अधिकतर एकल शब्द और अपनी भाषा। माता-पिता दिनचर्या के संकेत समझते हैं, बाहरी लोग बहुत कम समझते हैं।',
      kn: 'ಹೆಚ್ಚಾಗಿ ಒಂದೊಂದು ಪದಗಳು ಮತ್ತು ಸನ್ನೆಗಳು. ಪೋಷಕರು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತಾರೆ, ಆದರೆ ಅಪರಿಚಿತರಿಗೆ ಅರ್ಥವಾಗುವುದು ಕಡಿಮೆ.',
    },
    citation: 'Lynch, Oller, & Steffens (1993); ASHA Intelligibility Guidelines',
  },
  {
    ageYears: 2.0,
    expectedToCaregivers: '50%–75%',
    expectedToUnfamiliar: '25%–50%',
    description: {
      en: '2-word combinations emerge. Parents understand at least half of the child\'s speech.',
      hi: '2 शब्दों के जोड़े बनते हैं। माता-पिता बच्चे की कम से कम आधी बातें समझ लेते हैं।',
      kn: '2 ಪದಗಳ ಪುಟ್ಟ ವಾಕ್ಯಗಳು ಆರಂಭವಾಗುತ್ತವೆ. ಪೋಷಕರು ಕನಿಷ್ಠ 50% ರಿಂದ 75% ಮಾತನ್ನು ಸುಲಭವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತಾರೆ.',
    },
    citation: 'Flipsen (2006); McLeod & Crowe (2018); ASHA',
  },
  {
    ageYears: 3.0,
    expectedToCaregivers: '75%–90%',
    expectedToUnfamiliar: '50%–75%',
    description: {
      en: '3-to-4 word sentences. Close family understands almost everything; unfamiliar listeners understand at least half to three-quarters.',
      hi: '3-4 शब्दों के वाक्य। परिवार लगभग सब कुछ समझ लेता है; अनजान लोग 50-75% समझ पाते हैं।',
      kn: '3-4 ಪದಗಳ ವಾಕ್ಯಗಳು. ಮನೆಯವರಿಗೆ ಸಂಪೂರ್ಣ ಅರ್ಥವಾಗುತ್ತದೆ; ಹೊರಗಿನವರಿಗೆ ಕನಿಷ್ಠ 50-75% ಸ್ಪಷ್ಟವಾಗಿ ತಿಳಿಯುತ್ತದೆ.',
    },
    citation: 'Flipsen (2006); Hustad et al. (2021); ASHA',
  },
  {
    ageYears: 4.0,
    expectedToCaregivers: '90%–100%',
    expectedToUnfamiliar: '75%–90%',
    description: {
      en: 'Complex sentences and storytelling. Strangers and educators understand the vast majority of what the child says.',
      hi: 'जटिल वाक्य और कहानियां। शिक्षक और अनजान लोग बच्चे की अधिकांश बातें आसानी से समझ जाते हैं।',
      kn: 'ಸಂಪೂರ್ಣ ವಾಕ್ಯಗಳು ಮತ್ತು ಕಥೆಗಳು. ಶಿಕ್ಷಕರು ಮತ್ತು ಹೊಸಬರು ಬಹುತೇಕ ಎಲ್ಲಾ ಮಾತನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತಾರೆ.',
    },
    citation: 'Flipsen (2006); ASHA Practice Portal for Speech Sound Disorders',
  },
  {
    ageYears: 5.0,
    expectedToCaregivers: '100%',
    expectedToUnfamiliar: '90%–100%',
    description: {
      en: 'Speech is fully intelligible in connected conversation to anyone, with only minor late-sound lisps or distortions acceptable.',
      hi: 'बातचीत में बोली पूरी तरह स्पष्ट होती है। केवल कुछ कठिन ध्वनियों में हल्का बदलाव हो सकता है।',
      kn: 'ಮಾತು ಸಂಪೂರ್ಣವಾಗಿ ಸ್ಪಷ್ಟವಾಗಿರುತ್ತದೆ ಮತ್ತು ಯಾರಿಗಾದರೂ ಸುಲಭವಾಗಿ ಅರ್ಥವಾಗುತ್ತದೆ.',
    },
    citation: 'Crowe & McLeod (2020); ASHA Intelligibility Benchmarks',
  }
];

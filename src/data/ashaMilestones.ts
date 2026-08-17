/**
 * ASHA Communication Milestones — verbatim from the four parent handouts
 * (Birth to 6 Months, 7 to 12 Months, 13 to 18 Months, 19 to 24 Months).
 *
 * ⚠️ COPYRIGHT. Every source handout carries the line "Copyrighted by the
 * American Speech-Language-Hearing Association". The milestone and tip strings
 * below are reproduced word for word. Confirm ASHA's redistribution terms
 * before publishing this on a public site, and keep ASHA_ATTRIBUTION visible
 * wherever this content is shown.
 *
 * ⚠️ ENGLISH ONLY. These are ASHA's own words, so they are not translated
 * here. `hi` and `kn` are deliberately absent rather than machine-translated —
 * a clinical string nobody reviewed is worse than an untranslated one. The UI
 * must show the English text with a "translation pending" note when another
 * language is active.
 *
 * Bands here are ASHA's, and do not map onto AGE_BANDS in ageBands.ts. Keep
 * this list separate from COMPREHENSIVE_MILESTONES / MILESTONE_EXPANSION.
 */

export interface AshaBand {
  id: string;
  /** ASHA's own band title, as printed on the handout. */
  label: string;
  /** Inclusive month range this band covers. */
  minMonths: number;
  maxMonths: number;
  /** The handout this band was printed in. */
  handout: AshaHandoutId;
  /** "What should my child be able to do?" — verbatim. */
  milestones: { id: string; text: string }[];
}

export type AshaHandoutId =
  | 'birth-to-6-months'
  | '7-to-12-months'
  | '13-to-18-months'
  | '19-to-24-months';

export interface AshaHandout {
  id: AshaHandoutId;
  title: string;
  /** "What can I do to help?" — verbatim. */
  tips: string[];
  /** The "TIP TO HELP!" callout printed on the back. */
  highlightedTip: string;
  sourceUrl: string;
}

/** Printed on the front of every handout. */
export const ASHA_PREAMBLE =
  'Each child develops uniquely, even within the same family, and may meet certain milestones earlier or later than others. If your child does not meet many of the milestones within their age range, visit www.asha.org/profind to find an ASHA-certified audiologist or speech-language pathologist (SLP) for an assessment.';

/** Printed under the "Communication Milestones" masthead. */
export const ASHA_SCOPE_NOTE =
  'These communication milestones cover hearing, speech, and language development in children.';

export const ASHA_ATTRIBUTION = {
  source: 'American Speech-Language-Hearing Association (ASHA)',
  publication: 'Communication Milestones',
  copyright: 'Copyrighted by the American Speech-Language-Hearing Association',
  findProfessional: 'https://www.asha.org/profind',
  allAgeRanges: 'https://on.asha.org/dev-milestones',
} as const;

export const ASHA_HANDOUTS: AshaHandout[] = [
  {
    id: 'birth-to-6-months',
    title: 'Birth to 6 Months',
    tips: [
      'Pay attention to your child’s hearing. See if they turn to noise or look at you when you talk. Look for signs like crying while they are pulling on their ears, which could mean ear problems or infections. If you are concerned, see your doctor.',
      'Make silly faces with them. Laugh when they do.',
      'Talk about where you go, what you do there, and who and what you see. Say things like, “We are going to Grandma’s house. Grandma has a dog. You can pet the dog.”',
      'Teach animal sounds, like “A cow says ‘moo.’”',
      'Sing, tell stories, or read to your child every day.',
      'Talk to your child in the languages you are most comfortable using. Early exposure helps your child learn language best.',
    ],
    highlightedTip:
      'Respond to your child. Look at them when they make noises. Talk to them. Imitate the sounds they make.',
    sourceUrl: 'https://on.asha.org/dev-milestones',
  },
  {
    id: '7-to-12-months',
    title: '7 to 12 Months',
    tips: [
      'Pay attention to your child’s hearing. See if they turn to noise or look at you when you talk. Look for signs like crying while they are pulling on their ears, which could mean ear problems or infections. If you are concerned, see your doctor.',
      'Respond to your child. Look at them when they make noises. Talk to them. Imitate the sounds they make.',
      'Make silly faces with them. Laugh when they do.',
      'Teach your baby to copy actions, like peek-a-boo, clapping, blowing kisses, and waving bye-bye. This teaches them how to take turns and use gestures.',
      'Talk about what you do during the day. Say things like “Mommy is washing your hair”; “You are eating peas”; and “Oh, these peas are good!”',
      'Teach animal sounds, like “A cow says ‘moo.’”',
      'Sing, tell stories, or read to your child every day.',
      'Talk to your child in the languages you are most comfortable using. Early exposure helps your child learn language best.',
    ],
    highlightedTip:
      'Talk about where you go, what you do there, and who and what you see. Say things like, “We are going to Grandma’s house. Grandma has a dog. You can pet the dog.”',
    sourceUrl: 'https://on.asha.org/dev-milestones',
  },
  {
    id: '13-to-18-months',
    title: '13 to 18 Months',
    tips: [
      'Talk about sounds around your house. Listen to the clock tick, and say “t-t-t.” Make car or plane sounds, like “v-v-v-v.”',
      'Play with sounds at bath time. Blow bubbles, and make the sound “b-b-b-b.” Pop bubbles, and make a “p-p-p-p” sound.',
      'Talk to your child as you do things and go places. For example, when taking a walk, point to and name what you see. Say things like, “I see a dog. The dog says ‘woof.’ This is a big dog. This dog is brown.”',
      'Give your child two-step directions, like “Get the ball and put it in the box.”',
      'Use short words and sentences that your child can repeat. Add to words your child says. For example, if they say car, you can say, “You’re right! That is a big red car.”',
      'Tell stories or read to your child every day. Try to find books with large pictures and a few words on each page. Talk about the pictures on each page or things you see around you.',
      'Have your child point to pictures, body parts, or objects that you name.',
      'Talk to your child in the languages you are most comfortable using. If your family is multilingual, give your child many chances to hear and practice your languages daily. Learning multiple languages will not cause speech or language problems.',
    ],
    highlightedTip:
      'Ask your child to name pictures. They may not answer at first. Just name the pictures for them. One day, they will surprise you by telling you the name.',
    sourceUrl: 'https://on.asha.org/dev-milestones',
  },
  {
    id: '19-to-24-months',
    title: '19 to 24 Months',
    tips: [
      'Talk about sounds around your house. Listen to the clock tick, and say “t-t-t.” Make car or plane sounds, like “v-v-v-v.”',
      'Play with sounds at bath time. Blow bubbles, and make the sound “b-b-b-b.” Pop bubbles, and make a “p-p-p-p” sound.',
      'Talk to your child as you do things and go places. For example, when taking a walk, point to and name what you see. Say things like, “I see a dog. The dog says ‘woof.’ This is a big dog. This dog is brown.”',
      'Give your child two-step directions, like “Get the ball and put it in the box.”',
      'Use short words and sentences that your child can repeat. Add to words your child says. For example, if they say car, you can say, “You’re right! That is a big red car.”',
      'Tell stories or read to your child every day. Try to find books with large pictures and a few words on each page. Talk about the pictures on each page or things you see around you.',
      'Ask your child to name pictures. They may not answer at first. Just name the pictures for them. One day, they will surprise you by telling you the name.',
      'Talk to your child in the languages you are most comfortable using. If your family is multilingual, give your child many chances to hear and practice your languages daily. Learning multiple languages will not cause speech or language problems.',
    ],
    highlightedTip:
      'Have your child point to pictures, body parts, or objects that you name.',
    sourceUrl: 'https://on.asha.org/dev-milestones',
  },
];

export const ASHA_BANDS: AshaBand[] = [
  {
    id: 'asha_0_3',
    label: 'Birth to 3 Months',
    minMonths: 0,
    maxMonths: 3,
    handout: 'birth-to-6-months',
    milestones: [
      { id: 'asha_0_3_1', text: 'Alerts to sound.' },
      { id: 'asha_0_3_2', text: 'Quiets or smiles when you talk.' },
      { id: 'asha_0_3_3', text: 'Makes sounds back and forth with you.' },
      {
        id: 'asha_0_3_4',
        text: 'Makes sounds that differ depending on whether they are happy or upset.',
      },
      { id: 'asha_0_3_5', text: 'Coos, makes sounds like ooooo, aahh, and mmmmm.' },
      { id: 'asha_0_3_6', text: 'Recognizes loved ones and some common objects.' },
      { id: 'asha_0_3_7', text: 'Turns or looks toward voices or people talking.' },
    ],
  },
  {
    id: 'asha_4_6',
    label: '4 to 6 Months',
    minMonths: 4,
    maxMonths: 6,
    handout: 'birth-to-6-months',
    milestones: [
      { id: 'asha_4_6_1', text: 'Giggles and laughs.' },
      { id: 'asha_4_6_2', text: 'Responds to facial expressions.' },
      {
        id: 'asha_4_6_3',
        text: 'Looks at objects of interest and follows objects with their eyes.',
      },
      {
        id: 'asha_4_6_4',
        text: 'Reacts to toys that make sounds, like those with bells or music.',
      },
      { id: 'asha_4_6_5', text: 'Vocalizes during play or with objects in mouth.' },
      {
        id: 'asha_4_6_6',
        text: 'Vocalizes different vowel sounds—sometimes combined with a consonant—like uuuuuummm, aaaaaaagoo, or daaaaaaaaaa.',
      },
      { id: 'asha_4_6_7', text: 'Blows “raspberries.”' },
    ],
  },
  {
    id: 'asha_7_9',
    label: '7 to 9 Months',
    minMonths: 7,
    maxMonths: 9,
    handout: '7-to-12-months',
    milestones: [
      { id: 'asha_7_9_1', text: 'Looks at you when you call their name.' },
      { id: 'asha_7_9_2', text: 'Stops for a moment when you say, “No.”' },
      {
        id: 'asha_7_9_3',
        text: 'Babbles long strings of sounds, like mamamama, upup, or babababa.',
      },
      { id: 'asha_7_9_4', text: 'Looks for loved ones when upset.' },
      { id: 'asha_7_9_5', text: 'Raises arms to be picked up.' },
      { id: 'asha_7_9_6', text: 'Recognizes the names of some people and objects.' },
      { id: 'asha_7_9_7', text: 'Pushes away unwanted objects.' },
    ],
  },
  {
    id: 'asha_10_12',
    label: '10 to 12 Months',
    minMonths: 10,
    maxMonths: 12,
    handout: '7-to-12-months',
    milestones: [
      { id: 'asha_10_12_1', text: 'By age 10 months, reaches for objects.' },
      { id: 'asha_10_12_2', text: 'Points, waves, and shows or gives objects.' },
      {
        id: 'asha_10_12_3',
        text: 'Imitates and initiates gestures for engaging in social interactions and playing games, like blowing kisses or playing peek-a-boo.',
      },
      { id: 'asha_10_12_4', text: 'Tries to copy sounds that you make.' },
      { id: 'asha_10_12_5', text: 'Enjoys dancing.' },
      {
        id: 'asha_10_12_6',
        text: 'Responds to simple words and phrases like “Go bye-bye” and “Look at Mommy.”',
      },
      { id: 'asha_10_12_7', text: 'Says one or two words—like mama, dada, hi, and bye.' },
    ],
  },
  {
    id: 'asha_13_18',
    label: '13 to 18 Months',
    minMonths: 13,
    maxMonths: 18,
    handout: '13-to-18-months',
    milestones: [
      {
        id: 'asha_13_18_1',
        text: 'Looks around when asked “where” questions—like “Where’s your blanket?”',
      },
      {
        id: 'asha_13_18_2',
        text: 'Follows directions—like “Give me the ball,” “Hug the teddy bear,” “Come here,” or “Show me your nose.”',
      },
      {
        id: 'asha_13_18_3',
        text: 'Points to make requests, to comment, or to get information.',
      },
      { id: 'asha_13_18_4', text: 'Shakes head for “no” and nods head for “yes.”' },
      {
        id: 'asha_13_18_5',
        text: 'Understands and uses words for common objects, some actions, and people in their lives.',
      },
      { id: 'asha_13_18_6', text: 'Identifies one or more body parts.' },
      {
        id: 'asha_13_18_7',
        text: 'Uses gestures when excited, like clapping or giving a high-five, or when being silly, like sticking out their tongue or making funny faces.',
      },
      {
        id: 'asha_13_18_8',
        text: 'Uses a combination of long strings of sounds, syllables, and real words with speech-like inflection.',
      },
    ],
  },
  {
    id: 'asha_19_24',
    label: '19 to 24 Months',
    minMonths: 19,
    maxMonths: 24,
    handout: '19-to-24-months',
    milestones: [
      {
        id: 'asha_19_24_1',
        text: 'Uses and understands at least 50 different words for food, toys, animals, and body parts. Speech may not always be clear—like du for “shoe” or dah for “dog.”',
      },
      {
        id: 'asha_19_24_2',
        text: 'Puts two or more words together—like more water or go outside.',
      },
      {
        id: 'asha_19_24_3',
        text: 'Follows two-step directions—like “Get the spoon, and put it on the table.”',
      },
      { id: 'asha_19_24_4', text: 'Uses words like me, mine, and you.' },
      { id: 'asha_19_24_5', text: 'Uses words to ask for help.' },
      { id: 'asha_19_24_6', text: 'Uses possessives, like Daddy’s sock.' },
    ],
  },
];

/** The handout a band was printed in. */
export function ashaHandoutFor(band: AshaBand): AshaHandout {
  return ASHA_HANDOUTS.find((h) => h.id === band.handout) || ASHA_HANDOUTS[0];
}

/** The band covering a given age, or null past 24 months (2–5 years pending). */
export function ashaBandForAge(months: number): AshaBand | null {
  return ASHA_BANDS.find((b) => months >= b.minMonths && months <= b.maxMonths) || null;
}

export const ASHA_TOTAL_MILESTONES = ASHA_BANDS.reduce(
  (n, b) => n + b.milestones.length,
  0
);

/** Coverage stops at 24 months until the 2–5 year handouts are added. */
export const ASHA_COVERAGE_MAX_MONTHS = 24;

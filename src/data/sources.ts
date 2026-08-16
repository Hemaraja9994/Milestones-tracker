export interface SourceReference {
  id: string;
  name: string;
  organization: string;
  year?: string;
  description: string;
  officialUrl?: string;
  citationString: string;
  keyContributions: string[];
}

export const OFFICIAL_SOURCES: SourceReference[] = [
  {
    id: 'cdc_act_early',
    name: 'CDC "Learn the Signs. Act Early." Developmental Milestones',
    organization: 'Centers for Disease Control and Prevention (CDC) & American Academy of Pediatrics (AAP)',
    year: '2022 Revised Edition',
    description: 'Evidence-based surveillance milestone checklists for ages 2, 4, 6, 9, 12, 15, 18, 24, 30 months, 3, 4, and 5 years representing skills achieved by ≥75% of children.',
    officialUrl: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    citationString: 'Zubler, J. M., et al. (2022). Evidence-Informed Milestones for Developmental Surveillance. Pediatrics, 149(3), e2021052138.',
    keyContributions: [
      'Evidence-based ≥75% consensus milestones',
      'Removal of ambiguous warning signs and standardized 15m/30m checks',
      'Open-access surveillance resources for parents and primary healthcare providers'
    ]
  },
  {
    id: 'asha_communication',
    name: 'ASHA Communication Milestones (Birth to 5 Years)',
    organization: 'American Speech-Language-Hearing Association (ASHA)',
    year: 'Current Practice Portal',
    description: 'Gold-standard clinical benchmarks for hearing, speech sound acquisition, receptive language, and expressive language from infancy through school entry.',
    officialUrl: 'https://www.asha.org/public/speech/development/chart/',
    citationString: 'American Speech-Language-Hearing Association. (2023). How Does Your Child Hear and Talk? Speech, Language, and Hearing Milestones.',
    keyContributions: [
      'Hearing sensitivity and listening behavior benchmarks',
      'Receptive vs. expressive language breakdowns',
      'Evidence-based referral triggers for speech-language pathologists'
    ]
  },
  {
    id: 'northern_downs_auditory',
    name: 'Hearing in Children: Auditory Behavioral Development & Localization Norms',
    organization: 'Northern & Downs (Lippincott Williams & Wilkins / Plural Publishing)',
    year: '2002 / 2014 (6th Edition)',
    description: 'Foundational pediatric audiology reference establishing the seven stages of behavioral auditory maturation and spatial sound localization from birth to 24 months.',
    citationString: 'Northern, J. L., & Downs, M. P. (2014). Hearing in Children (6th ed.). Plural Publishing, San Diego, CA.',
    keyContributions: [
      '7-stage sound localization developmental hierarchy (Startle -> Lateral -> Downward -> Upward -> 3D)',
      'Minimum Response Levels (MRL) by age in dB HL sound field',
      'Auropalpebral and Moro reflex acoustic thresholds'
    ]
  },
  {
    id: 'aiish_mysuru',
    name: 'AIISH Early Auditory & Speech-Language Screening Checklists',
    organization: 'All India Institute of Speech and Hearing (AIISH), Mysuru, Ministry of Health & Family Welfare, Govt. of India',
    year: 'Standardized Clinical Protocols',
    description: 'Authoritative Indian clinical research and screening tools for infant hearing screening, high-risk registry indicators, and communication milestones adapted for Indian linguistic diversity.',
    officialUrl: 'https://aiishmysore.in',
    citationString: 'All India Institute of Speech and Hearing (AIISH). Clinical Protocols for Early Identification of Hearing and Communication Disorders. AIISH, Mysuru.',
    keyContributions: [
      'High-risk registry markers for South Asian infants (consanguinity, hyperbilirubinemia)',
      'Erber auditory hierarchy implementation in Indian early intervention centers',
      'Culturally and linguistically tailored communication checklists'
    ]
  },
  {
    id: 'crowe_mcleod_2020',
    name: 'Children\'s English & Cross-Linguistic Consonant Acquisition Norms',
    organization: 'American Journal of Speech-Language Pathology / Charles Sturt University',
    year: '2020 Meta-Analysis',
    description: 'Comprehensive cross-linguistic meta-analysis synthesizing data from 27 studies and over 18,000 children to establish the Early-8, Middle-8, and Late-8 consonant acquisition windows.',
    officialUrl: 'https://doi.org/10.1044/2020_AJSLP-19-00168',
    citationString: 'Crowe, K., & McLeod, S. (2020). Children\'s English Consonant Acquisition in the United States: A Review. American Journal of Speech-Language Pathology, 29(4), 2155–2169.',
    keyContributions: [
      'Early-8: /m, b, j, n, w, d, p, h/ (ages 2;0–3;0)',
      'Middle-8: /t, ŋ, k, g, f, v, tʃ, dʒ/ (ages 3;0–4;6)',
      'Late-8: /ʃ, θ, s, z, ð, l, r, ʒ/ (ages 4;6–6;0+)',
      'Clinical percentile benchmarks (75% and 90% mastery criteria)'
    ]
  },
  {
    id: 'lest_trivandrum',
    name: 'Language Evaluation Scale Trivandrum (LEST 0–3 Years)',
    organization: 'Child Development Centre (CDC), Government Medical College, Thiruvananthapuram, Kerala, India',
    year: 'Standardized Indian Validation',
    description: 'Standardized and validated screening tool specifically designed to assess receptive and expressive language development in Indian infants and young children in community and clinical settings.',
    citationString: 'Nair, M. K. C., et al. (2013). Language Evaluation Scale Trivandrum (LEST 0–3 Years) – Development and Validation. Indian Pediatrics, 50(5), 463–467.',
    keyContributions: [
      'Validated against Bayley Scales of Infant Development (BSID-II)',
      'High sensitivity (96%) and specificity (89%) for early language delay detection in Indian children',
      'Culturally appropriate items for bilingual Indian households'
    ]
  },
  {
    id: 'pathways_org',
    name: 'Pathways.org Milestone Materials & Receptive/Expressive Checklists',
    organization: 'Pathways.org (Endorsed by American Academy of Pediatrics)',
    year: 'Current Educational Series',
    description: 'Parent-friendly, clinically verified developmental tracking tools with clear distinction between understanding (receptive) and speaking/gesturing (expressive) skills.',
    officialUrl: 'https://pathways.org',
    citationString: 'Pathways.org. (2023). Baby Milestones & Abilities by Age. Pathways.org Medical Advisory Team.',
    keyContributions: [
      'Clear, accessible receptive vs expressive language categorization',
      'Actionable parent play activities and early stimulation games',
      'Non-alarmist communication frameworks for caregivers'
    ]
  }
];

# MilestonePath – Child Developmental & Speech-Language Tracker

A production-ready, full-stack web application designed for **Speech-Language Pathologists (SLPs), Pediatricians, Early Interventionists, Educators, and Parents/Caregivers** to monitor, track, and document evidence-based child developmental milestones from birth to 6 years with deep clinical rigor in speech, language, auditory development, and high-risk pediatric surveillance.

---

## 🌟 Key Highlights & Core Features

### 1. Dedicated High Risk Register (HRR) & Clinical Triage
- **Evidence-Based Grounding**: Built on **Joint Committee on Infant Hearing (JCIH)** risk indicators, **RBSK (Rashtriya Bal Swasthya Karyakram, Govt. of India)** developmental surveillance priorities, and **AIISH (Mysuru)** protocols.
- **6 Core Categories**:
  - *Perinatal & Neonatal*: Prematurity (<37w), Very Low Birth Weight (<1500g), NICU stay >5 days, Severe Hyperbilirubinemia (Exchange transfusion/intensive phototherapy), Birth Asphyxia / Low APGAR / Delayed Birth Cry (>5 min), Ototoxic Aminoglycosides.
  - *Family & Genetic*: Family history of permanent childhood hearing loss or speech-language delay, Consanguineous marriage.
  - *Prenatal & Maternal*: Maternal in utero TORCH infections (cCMV, Rubella, Toxoplasmosis, Syphilis, Herpes).
  - *Physical & Craniofacial*: Craniofacial anomalies, cleft lip/palate, microtia, preauricular tags/pits, syndromic features (Down syndrome, Treacher Collins).
  - *Postnatal & Ongoing*: Confirmed bacterial/viral meningitis or encephalitis, head trauma, recurrent otitis media with effusion (>3 months).
  - *Caregiver Concerns*: Direct parent concern regarding hearing or communication milestones.
- **Dual Audience Interface**:
  - *Parent Mode*: Empathetic, plain-language questions with tooltip explanations.
  - *Clinician Mode*: Source of information selector (*Parent report*, *Hospital record*, *Observation*, *Screening test*) and clinical documentation fields.
- **Automated Triage Stratification Engine**: Categorizes risk into **No Elevated Risk**, **Elevated Risk**, and **High Risk** with specific recommended clinical actions and follow-up timelines.
- **Exportable / Printable Triage PDF Report** (`/high-risk-register/[childId]/report`).

### 2. Dual Tailored Workflows
- **Professional Clinician Portal**:
  - Longitudinal child profile management with **Chronological Age** and **Gestational Corrected Age** (for premature infants born < 37 weeks).
  - 4-Tier Assessment System: `Observed by Clinician`, `Reported by Parent`, `Emerging / Inconsistent`, `Not Yet Observed`.
  - **Developmental Age Surveillance Estimator**: Computes approximate **Receptive Language Age**, **Expressive Language Age**, and **Auditory Behavioral Age** based on ceiling mastery benchmarks.
  - Subsystem evaluation across **Phonology, Articulation, Resonance, Voice, Semantics, Syntax, and Pragmatics**.
  - **Printable & Downloadable Clinical PDF Reports** formatted with client-side CSS print engines.
- **Parent / Caregiver Tracker**:
  - Gentle, non-alarmist milestone checklists organized by exact age bands (2m through 6y).
  - "Why it matters" and "Try this at home!" playful activity prompts from CDC & ASHA parent resources.
  - Celebratory confetti micro-interactions upon milestone achievement.
  - Indian household reassurance on multilingual growth (Hindi, Kannada, English code-switching).

### 3. Authoritative Scientific Basis
- **CDC "Learn the Signs. Act Early."** (2022 revised surveillance checklists).
- **ASHA (American Speech-Language-Hearing Association)** Communication Milestones.
- **Northern & Downs (2002/2014) Behavioral Auditory Development**: 7-stage sound localization maturation and dB HL thresholds.
- **AIISH (All India Institute of Speech and Hearing, Mysuru)**: Standardized early auditory screening milestones.
- **Crowe & McLeod (2020)**: Cross-linguistic consonant acquisition norms (Early-8, Middle-8, Late-8) and Speech Intelligibility percentiles by age.
- **LEST (Language Evaluation Scale Trivandrum)**: Standardized Indian developmental language framework.
- **JCIH (Joint Committee on Infant Hearing)** Position Statement & High Risk Register.

### 4. Trilingual Internationalization (i18n)
- **English (`en`)**: Complete clinical & caregiver UI.
- **हिन्दी - Hindi (`hi`)**: Fully translated UI, domain names, milestones, clinical rationales, HRR questions, and parent tips.
- **ಕನ್ನಡ - Kannada (`kn`)**: Culturally and linguistically verified Kannada translations.
- Persistent header language switcher.

---

## 🚀 Getting Started Locally

```bash
# Clone or open the project folder in your IDE
cd "c:\Priyanka\Antigravity _Projects\Milestones_Tracker"

# Start the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deployment to Vercel

```bash
npm i -g vercel
vercel
```

---

## 📜 Clinical Disclaimer
*MilestonePath is an educational and developmental surveillance aid. It does not replace standardized diagnostic assessments by certified Speech-Language Pathologists, Pediatric Audiologists, or Developmental Pediatricians.*

'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, AlertTriangle, FileText, ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/Primitives';

export default function PrivacyTermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          Clinical Disclaimer, Terms of Use & Privacy Statement
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Last Updated: February 2025 • MilestonePath Clinical Advisory
        </p>
      </div>

      {/* Prominent Clinical Disclaimer */}
      <Card className="border-amber-300 bg-amber-50/50 p-6 dark:border-amber-900/60 dark:bg-amber-950/20 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-sm">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <span>IMPORTANT CLINICAL & EDUCATIONAL DISCLAIMER</span>
        </div>
        <p className="text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
          MilestonePath is an educational surveillance, developmental tracking, and clinical documentation aid designed to assist parents, educators, and healthcare providers. <strong>MilestonePath is NOT a diagnostic medical or psychological instrument</strong> and does not provide formal diagnoses of Autism Spectrum Disorder (ASD), Childhood Apraxia of Speech (CAS), Developmental Language Disorder (DLD), or Hearing Impairment.
        </p>
        <p className="text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
          Any calculated developmental age snapshots (Receptive Age, Expressive Age, Auditory Age) represent qualitative estimates based on surveillance checklist mastery and must NOT be used as standardized diagnostic quotients. Always consult licensed Speech-Language Pathologists (SLPs), Pediatric Audiologists, and Developmental Pediatricians for formal evaluations.
        </p>
      </Card>

      {/* Privacy & Local-First Security Statement */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
          <Lock className="h-5 w-5 text-brand-600" />
          <span>Data Privacy & Local-First Architecture</span>
        </div>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          1. <strong>Local Storage by Default:</strong> All child names, initials, dates of birth, clinical notes, and assessment session records entered in this version of MilestonePath are stored exclusively in your local browser's secure client storage (IndexedDB / localStorage).
        </p>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          2. <strong>Patient Confidentiality & HIPAA/DISHA Awareness:</strong> Clinicians are encouraged to use initials or de-identified patient identifiers (e.g., "Patient #1042") when tracking records on shared devices.
        </p>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          3. <strong>Zero Third-Party Data Selling:</strong> We do not track, collect, sell, or transmit any protected health information (PHI) or developmental records to third-party advertising networks.
        </p>
      </Card>

      {/* Terms of Use */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
          <FileText className="h-5 w-5 text-brand-600" />
          <span>Terms of Use</span>
        </div>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          By utilizing MilestonePath, you acknowledge that you have read, understood, and agreed to use the information solely as a supportive screening tool. Parents with developmental concerns are strongly advised to contact their local early intervention center, pediatrician, or speech and hearing institute (such as AIISH Mysuru in India or ASHA-certified clinics globally).
        </p>
      </Card>

    </div>
  );
}

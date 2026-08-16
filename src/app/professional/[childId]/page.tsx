'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Printer, 
  FileText, 
  Calendar, 
  Brain, 
  Ear, 
  MessageSquare, 
  Activity, 
  Sparkles, 
  AlertTriangle,
  CheckCircle2,
  Save,
  Filter,
  Layers
} from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { computeClinicalSnapshot } from '@/lib/calculationEngine';
import { COMPREHENSIVE_MILESTONES } from '@/data/milestones';
import { AGE_BANDS } from '@/data/ageBands';
import { MilestoneStatus, MilestoneDomain, AssessmentRecord } from '@/types';
import { Card, Badge, Button } from '@/components/ui/Primitives';
import DevelopmentalAgeGauge from '@/components/professional/DevelopmentalAgeGauge';
import MilestoneAssessmentRow from '@/components/professional/MilestoneAssessmentRow';

export default function ChildAssessmentWorkspace() {
  const params = useParams();
  const router = useRouter();
  const childId = params?.childId as string;

  const { childrenList, assessments, saveCurrentAssessment } = useChild();
  const { language, t } = useLanguage();

  const child = childrenList.find(c => c.id === childId) || childrenList[0];

  // Age calculation
  const ageResult = calculateChildAges(
    child?.dateOfBirth || '2023-01-01',
    child?.gestationalWeeks
  );

  // Filter states
  const [selectedAgeBand, setSelectedAgeBand] = useState<number>(ageResult.recommendedAgeBandMonths);
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  
  // Find or initialize assessment for this child
  const existingAssessment = assessments.find(a => a.childId === childId);
  const [sessionRecord, setSessionRecord] = useState<AssessmentRecord>(() => {
    if (existingAssessment) return existingAssessment;
    return {
      id: `sess_${childId}_${Date.now()}`,
      childId: childId,
      sessionDate: new Date().toISOString().split('T')[0],
      sessionNumber: (assessments.filter(a => a.childId === childId).length || 0) + 1,
      examinerName: 'Dr. S. Nayak (SLP)',
      examinerRole: 'Speech-Language Pathologist',
      milestoneStatuses: {},
      milestoneNotes: {},
      overallClinicalNotes: '',
      recommendations: '',
    };
  });

  const [savedAlert, setSavedAlert] = useState(false);

  // Compute live clinical snapshot
  const snapshot = computeClinicalSnapshot(
    ageResult.effectiveAgeMonths,
    sessionRecord.milestoneStatuses,
    child
  );

  const handleStatusChange = (milestoneId: string, status: MilestoneStatus) => {
    const updated: AssessmentRecord = {
      ...sessionRecord,
      milestoneStatuses: {
        ...sessionRecord.milestoneStatuses,
        [milestoneId]: status,
      }
    };
    setSessionRecord(updated);
    saveCurrentAssessment(updated);
  };

  const handleNoteChange = (milestoneId: string, note: string) => {
    const updated: AssessmentRecord = {
      ...sessionRecord,
      milestoneNotes: {
        ...sessionRecord.milestoneNotes,
        [milestoneId]: note,
      }
    };
    setSessionRecord(updated);
    saveCurrentAssessment(updated);
  };

  const handleSaveAll = () => {
    saveCurrentAssessment(sessionRecord);
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);
  };

  if (!child) {
    return (
      <div className="p-8 text-center text-xs">
        <p>Child profile not found.</p>
        <Link href="/professional" className="text-brand-600 font-bold mt-2 inline-block">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  // Filtered milestones
  const filteredMilestones = COMPREHENSIVE_MILESTONES.filter(m => {
    const matchAge = selectedAgeBand === 0 || m.ageBandMonths === selectedAgeBand;
    const matchDomain = selectedDomain === 'all' || m.domain === selectedDomain;
    return matchAge && matchDomain;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <Link
            href="/professional"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Clinical Assessment: <span className="text-brand-600 dark:text-brand-400">{child.nameOrInitials}</span>
            </h1>
            <p className="text-xs text-slate-500">
              Session #{sessionRecord.sessionNumber} • Chronological: {ageResult.chronologicalText[language] || ageResult.chronologicalText.en}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleSaveAll}>
            <Save className="h-4 w-4 text-brand-600" />
            <span>{savedAlert ? 'Saved ✓' : t.common.save}</span>
          </Button>

          <Link href={`/professional/${child.id}/report`}>
            <Button variant="primary" size="sm">
              <Printer className="h-4 w-4" />
              <span>{t.common.export_pdf}</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Live Developmental Age Snapshot Gauge */}
      <DevelopmentalAgeGauge ageResult={ageResult} snapshot={snapshot} />

      {/* Checklist Filter Controls */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Age Band Selector Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 mr-1">
              Age Band:
            </span>
            <button
              onClick={() => setSelectedAgeBand(0)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                selectedAgeBand === 0
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              All Ages
            </button>
            {AGE_BANDS.map((band) => (
              <button
                key={band.months}
                onClick={() => setSelectedAgeBand(band.months)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                  selectedAgeBand === band.months
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {band.months}m
              </button>
            ))}
          </div>

          {/* Domain Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Domain:</span>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option value="all">All Domains</option>
              <option value="auditory_hearing">Auditory & Hearing (Northern & Downs / AIISH)</option>
              <option value="language_receptive">Receptive Language (Understanding)</option>
              <option value="language_expressive">Expressive Language (Speaking)</option>
              <option value="speech_articulation">Speech & Articulation (Crowe & McLeod)</option>
              <option value="social_pragmatic">Social & Pragmatic</option>
            </select>
          </div>

        </div>

      </div>

      {/* Milestone Assessment Checklist List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="h-4 w-4 text-brand-600" />
            Checklist Items ({filteredMilestones.length} milestones)
          </h3>
          <span className="text-xs text-slate-400">
            Click status to record observation
          </span>
        </div>

        {filteredMilestones.length === 0 ? (
          <Card className="text-center py-8 text-xs text-slate-500">
            No milestones found for selected age band & domain filter.
          </Card>
        ) : (
          filteredMilestones.map((milestone) => (
            <MilestoneAssessmentRow
              key={milestone.id}
              milestone={milestone}
              status={sessionRecord.milestoneStatuses[milestone.id] || 'not_observed'}
              clinicalNote={sessionRecord.milestoneNotes[milestone.id] || ''}
              onStatusChange={(newStatus) => handleStatusChange(milestone.id, newStatus)}
              onNoteChange={(newNote) => handleNoteChange(milestone.id, newNote)}
            />
          ))
        )}
      </div>

      {/* Overall Clinical Impressions & Recommendations Box */}
      <Card className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="h-4 w-4 text-brand-600" />
          Overall Clinical Impressions & Action Plan
        </h3>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Clinical Impressions / Session Summary:
          </label>
          <textarea
            rows={3}
            value={sessionRecord.overallClinicalNotes || ''}
            onChange={(e) => {
              const updated = { ...sessionRecord, overallClinicalNotes: e.target.value };
              setSessionRecord(updated);
              saveCurrentAssessment(updated);
            }}
            placeholder={t.professional.clinical_notes_placeholder}
            className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 placeholder-slate-400 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Recommendations & Follow-up Plan:
          </label>
          <textarea
            rows={2}
            value={sessionRecord.recommendations || ''}
            onChange={(e) => {
              const updated = { ...sessionRecord, recommendations: e.target.value };
              setSessionRecord(updated);
              saveCurrentAssessment(updated);
            }}
            placeholder={t.professional.recommendation_placeholder}
            className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 placeholder-slate-400 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>

        <div className="flex justify-end pt-2">
          <Button variant="primary" size="sm" onClick={handleSaveAll}>
            <Save className="h-4 w-4" />
            <span>Save Assessment Session</span>
          </Button>
        </div>
      </Card>

    </div>
  );
}

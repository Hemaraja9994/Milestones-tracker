'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Users, 
  UserPlus, 
  Calendar, 
  Search, 
  Filter, 
  Sparkles, 
  FileText, 
  Stethoscope, 
  ArrowRight,
  Ear,
  Brain,
  AlertTriangle,
  Plus
} from 'lucide-react';
import { useChild } from '@/context/ChildContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateChildAges } from '@/lib/correctedAge';
import { ChildProfile } from '@/types';
import { Card, Badge, Button } from '@/components/ui/Primitives';

export default function ProfessionalDashboard() {
  const router = useRouter();
  const { childrenList, createOrUpdateChild, setActiveChild, assessments } = useChild();
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  // New Child Form State
  const [nameOrInitials, setNameOrInitials] = useState('');
  const [dob, setDob] = useState('2023-01-01');
  const [gestationalWeeks, setGestationalWeeks] = useState(40);
  const [languagesStr, setLanguagesStr] = useState('Kannada, English');
  const [medicalNotes, setMedicalNotes] = useState('');
  const [hearingStatus, setHearingStatus] = useState<'passed' | 'referred' | 'pending' | 'unknown'>('passed');

  const filteredChildren = childrenList.filter((child) =>
    child.nameOrInitials.toLowerCase().includes(searchQuery.toLowerCase()) ||
    child.primaryLanguages?.some(l => l.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCreateChild = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameOrInitials.trim()) return;

    const newChild: ChildProfile = {
      id: `child_${Date.now()}`,
      nameOrInitials: nameOrInitials.trim(),
      dateOfBirth: dob,
      gestationalWeeks: Number(gestationalWeeks),
      primaryLanguages: languagesStr.split(',').map(s => s.trim()).filter(Boolean),
      medicalNotes,
      hearingScreeningStatus: hearingStatus,
      riskFactors: Number(gestationalWeeks) < 37 ? [`Prematurity (${gestationalWeeks} wks)`] : [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    createOrUpdateChild(newChild);
    setShowModal(false);
    // Reset form
    setNameOrInitials('');
    setMedicalNotes('');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
              <Stethoscope className="h-5 w-5" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              {t.professional.dashboard_title}
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Clinical developmental surveillance, gestational age adjustment, and receptive-expressive age calculations
          </p>
        </div>

        <Button onClick={() => setShowModal(true)} variant="primary" size="md">
          <Plus className="h-4 w-4" />
          <span>{t.professional.new_patient}</span>
        </Button>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.professional.total_patients}</span>
            <p className="text-2xl font-black text-slate-900 dark:text-white">{childrenList.length}</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.professional.sessions_logged}</span>
            <p className="text-2xl font-black text-slate-900 dark:text-white">{assessments.length}</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
            <Calendar className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.professional.last_session}</span>
            <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">
              {assessments.length > 0 ? assessments[0].sessionDate : 'No sessions recorded'}
            </p>
          </div>
        </Card>
      </div>

      {/* Patient Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder={t.common.search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
      </div>

      {/* Patient Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChildren.map((child) => {
          const ageResult = calculateChildAges(child.dateOfBirth, child.gestationalWeeks);
          const childAssessments = assessments.filter(a => a.childId === child.id);

          return (
            <Card key={child.id} className="flex flex-col justify-between hover:border-brand-400 hover:shadow-elevated transition-all">
              
              <div>
                {/* Header: Name, Prematurity Badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {child.nameOrInitials}
                    </h3>
                    <p className="text-xs text-slate-500">
                      DOB: {child.dateOfBirth}
                    </p>
                  </div>
                  {ageResult.isPremature && (
                    <Badge variant="warning" className="text-[10px]">
                      Preterm ({child.gestationalWeeks}w)
                    </Badge>
                  )}
                </div>

                {/* Age & Languages Box */}
                <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2 text-xs mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.common.chronological_age}:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {ageResult.chronologicalText[language] || ageResult.chronologicalText.en}
                    </span>
                  </div>
                  {ageResult.isPremature && (
                    <div className="flex justify-between">
                      <span className="text-amber-600 dark:text-amber-400 font-medium">{t.common.corrected_age}:</span>
                      <span className="font-semibold text-amber-700 dark:text-amber-300">
                        {ageResult.correctedText[language] || ageResult.correctedText.en}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.common.primary_languages}:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {child.primaryLanguages?.join(', ') || 'English'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.common.hearing_status}:</span>
                    <span className={`font-semibold uppercase text-[11px] ${
                      child.hearingScreeningStatus === 'passed' ? 'text-emerald-600' : 'text-amber-600'
                    }`}>
                      {child.hearingScreeningStatus || 'Passed'}
                    </span>
                  </div>
                </div>

                {/* Medical / Risk notes */}
                {child.medicalNotes && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 italic line-clamp-2 mb-4">
                    "{child.medicalNotes}"
                  </p>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {childAssessments.length} sessions logged
                </span>

                <Link
                  href={`/professional/${child.id}`}
                  onClick={() => setActiveChild(child)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  <span>{t.professional.view_profile}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </Card>
          );
        })}
      </div>

      {/* New Child Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-150">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800 mb-4">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-brand-600" />
                {t.professional.new_patient}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateChild} className="space-y-4 text-xs">
              
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.common.child_name} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav K. or Patient #1042"
                  value={nameOrInitials}
                  onChange={(e) => setNameOrInitials(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.common.dob} *
                  </label>
                  <input
                    type="date"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.common.gestational_age} (Weeks)
                  </label>
                  <input
                    type="number"
                    min="24"
                    max="42"
                    value={gestationalWeeks}
                    onChange={(e) => setGestationalWeeks(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-200 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.common.primary_languages} (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kannada, English, Hindi"
                  value={languagesStr}
                  onChange={(e) => setLanguagesStr(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.common.hearing_status}
                </label>
                <select
                  value={hearingStatus}
                  onChange={(e: any) => setHearingStatus(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-brand-500 focus:outline-none"
                >
                  <option value="passed">Passed (OAE / ABR normal)</option>
                  <option value="referred">Referred / Follow-up Needed</option>
                  <option value="pending">Pending</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Medical / Developmental History Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. NICU history, family history of speech delay, otitis media history..."
                  value={medicalNotes}
                  onChange={(e) => setMedicalNotes(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                <Button type="button" variant="outline" size="sm" onClick={() => setShowModal(false)}>
                  {t.common.cancel}
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  {t.common.save}
                </Button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

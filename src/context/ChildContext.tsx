'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChildProfile, AssessmentRecord, MilestoneStatus, UserRole } from '@/types';
import { 
  getStoredChildren, 
  saveChild as persistChild, 
  deleteChild as removeChild, 
  getStoredAssessments, 
  saveAssessment as persistAssessment,
  removeSampleChildren as purgeSamples,
  clearAllStoredData,
  loadSampleChildren,
} from '@/lib/storage';

interface ChildContextValue {
  childrenList: ChildProfile[];
  activeChild: ChildProfile | null;
  setActiveChild: (child: ChildProfile | null) => void;
  createOrUpdateChild: (child: ChildProfile) => void;
  deleteChildProfile: (childId: string) => void;
  assessments: AssessmentRecord[];
  activeAssessment: AssessmentRecord | null;
  setActiveAssessment: (assessment: AssessmentRecord | null) => void;
  saveCurrentAssessment: (assessment: AssessmentRecord) => void;
  updateMilestoneStatus: (milestoneId: string, status: MilestoneStatus) => void;
  updateMilestoneNote: (milestoneId: string, note: string) => void;
  activeRole: UserRole;
  setActiveRole: (role: UserRole) => void;
  refreshData: () => void;
  removeSamples: () => void;
  loadSamples: () => void;
  clearAllData: () => void;
}

const ChildContext = createContext<ChildContextValue | undefined>(undefined);

export function ChildProvider({ children }: { children: React.ReactNode }) {
  const [childrenList, setChildrenList] = useState<ChildProfile[]>([]);
  const [activeChild, setActiveChild] = useState<ChildProfile | null>(null);
  const [assessments, setAssessments] = useState<AssessmentRecord[]>([]);
  const [activeAssessment, setActiveAssessment] = useState<AssessmentRecord | null>(null);
  const [activeRole, setActiveRole] = useState<UserRole>('professional');

  const refreshData = () => {
    const list = getStoredChildren();
    setChildrenList(list);
    const storedAssessments = getStoredAssessments();
    setAssessments(storedAssessments);

    if (!activeChild && list.length > 0) {
      setActiveChild(list[0]);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const createOrUpdateChild = (child: ChildProfile) => {
    persistChild(child);
    refreshData();
    setActiveChild(child);
  };

  const deleteChildProfile = (childId: string) => {
    removeChild(childId);
    refreshData();
    if (activeChild?.id === childId) {
      const remaining = getStoredChildren();
      setActiveChild(remaining.length > 0 ? remaining[0] : null);
    }
  };

  const saveCurrentAssessment = (assessment: AssessmentRecord) => {
    persistAssessment(assessment);
    refreshData();
    setActiveAssessment(assessment);
  };

  const updateMilestoneStatus = (milestoneId: string, status: MilestoneStatus) => {
    if (!activeAssessment) return;
    const updated: AssessmentRecord = {
      ...activeAssessment,
      milestoneStatuses: {
        ...activeAssessment.milestoneStatuses,
        [milestoneId]: status,
      }
    };
    setActiveAssessment(updated);
    persistAssessment(updated);
    setAssessments(getStoredAssessments());
  };

  const updateMilestoneNote = (milestoneId: string, note: string) => {
    if (!activeAssessment) return;
    const updated: AssessmentRecord = {
      ...activeAssessment,
      milestoneNotes: {
        ...activeAssessment.milestoneNotes,
        [milestoneId]: note,
      }
    };
    setActiveAssessment(updated);
    persistAssessment(updated);
    setAssessments(getStoredAssessments());
  };

  const removeSamples = () => {
    purgeSamples();
    setActiveChild(null);
    refreshData();
  };

  const loadSamples = () => {
    loadSampleChildren();
    refreshData();
  };

  const clearAllData = () => {
    clearAllStoredData();
    setActiveChild(null);
    setActiveAssessment(null);
    setChildrenList([]);
    setAssessments([]);
  };

  return (
    <ChildContext.Provider
      value={{
        childrenList,
        activeChild,
        setActiveChild,
        createOrUpdateChild,
        deleteChildProfile,
        assessments,
        activeAssessment,
        setActiveAssessment,
        saveCurrentAssessment,
        updateMilestoneStatus,
        updateMilestoneNote,
        activeRole,
        setActiveRole,
        refreshData,
        removeSamples,
        loadSamples,
        clearAllData,
      }}
    >
      {children}
    </ChildContext.Provider>
  );
}

export function useChild() {
  const context = useContext(ChildContext);
  if (!context) {
    throw new Error('useChild must be used within a ChildProvider');
  }
  return context;
}

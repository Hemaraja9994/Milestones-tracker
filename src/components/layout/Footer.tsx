'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import BrandMark from '@/components/ui/BrandMark';
import { Attribution } from '@/components/layout/Attribution';

export default function Footer() {
  const { t } = useLanguage();

  const clinicalLinks = [
    { href: '/auditory-development', label: 'Auditory Maturation & AIISH' },
    { href: '/speech-sound-matrix', label: 'Crowe & McLeod Sound Chart' },
    { href: '/clinical-reference', label: 'Speech & Language Subsystems' },
    { href: '/high-risk-register', label: 'High Risk Register (HRR)' },
    { href: '/sources', label: 'Sources & Citations' },
  ];

  const workspaceLinks = [
    { href: '/professional', label: 'Clinician Portal (SLP & Pediatric)' },
    { href: '/parent', label: 'Parent / Caregiver Tracker' },
    { href: '/privacy-terms', label: 'Clinical Disclaimer & Privacy' },
  ];

  return (
    <footer className="border-t border-line-rule bg-surface-raised">
      <div className="mx-auto max-w-[1240px] px-[18px] py-10 sm:px-6 lg:px-8">
        {/* Caution panel — warm, never a status hue */}
        <div className="mb-8 rounded-card border border-emerging/25 bg-emerging-tint px-5 py-4 text-[13px] leading-[1.65] text-emerging-ink">
          <span className="font-semibold">{t.app.disclaimer_short}</span> {t.app.disclaimer_long}
        </div>

        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div className="space-y-3.5 md:col-span-2">
            <span className="flex items-center gap-2.5">
              <BrandMark size={24} />
              <span className="font-display text-[19px] font-extrabold text-ink">MilestonePath</span>
            </span>
            <p className="max-w-md text-[13px] leading-[1.65] text-ink-muted">
              Evidence-based developmental surveillance combining CDC 2022 revised milestones, ASHA
              communication standards (≥75% criteria), Northern &amp; Downs auditory maturation
              levels, AIISH Mysuru screening guidelines, and Crowe &amp; McLeod (2020) speech sound
              norms.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['English', 'हिन्दी (Hindi)', 'ಕನ್ನಡ (Kannada)'].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-line-warm px-2.5 py-1 text-[11px] font-medium text-ink-body"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <FooterColumn title="Clinical Reference" links={clinicalLinks} />
          <FooterColumn title="Workspaces" links={workspaceLinks} />
        </div>

        <Attribution />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-line-rule pt-6 text-xs text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} MilestonePath – Child Developmental &amp; Speech-Language Tracker.</p>
          <p>Built for clinical excellence &amp; family empowerment</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="eyebrow font-sans tracking-[0.06em] text-ink-warm">{title}</h4>
      <ul className="mt-3.5 space-y-2.5 text-[13px]">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-ink-body transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

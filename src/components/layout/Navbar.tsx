'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useChild } from '@/context/ChildContext';
import { Language } from '@/types';
import BrandMark from '@/components/ui/BrandMark';

/**
 * Header cut to four links: Home, Professional Portal, Parent Tracker, Clinical
 * Hub. The High Risk Register, Speech Sound Matrix, Auditory and Sources
 * destinations are reached from the module grids inside the portal they belong
 * to rather than from the top bar.
 */
export default function Navbar() {
  const pathname = usePathname() || '/';
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { setActiveRole } = useChild();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t.nav.home, match: (p: string) => p === '/' },
    {
      href: '/professional',
      label: t.nav.professional_portal,
      match: (p: string) => p.startsWith('/professional') || p.startsWith('/high-risk-register'),
      role: 'professional' as const,
    },
    {
      href: '/parent',
      label: t.nav.parent_tracker,
      match: (p: string) => p.startsWith('/parent'),
      role: 'parent' as const,
    },
    {
      href: '/clinical-reference',
      label: t.nav.clinical_reference,
      match: (p: string) =>
        p.startsWith('/clinical-reference') ||
        p.startsWith('/auditory-development') ||
        p.startsWith('/speech-sound-matrix') ||
        p.startsWith('/sources'),
    },
  ];

  // Pathway is implied by the destination — one colour per pathway, everywhere.
  useEffect(() => {
    if (pathname.startsWith('/parent')) setActiveRole('parent');
    else if (pathname.startsWith('/professional') || pathname.startsWith('/high-risk-register')) {
      setActiveRole('professional');
    }
  }, [pathname, setActiveRole]);

  const languages: { code: Language; short: string; label: string }[] = [
    { code: 'en', short: 'EN', label: 'English' },
    { code: 'hi', short: 'हिं', label: 'हिन्दी' },
    { code: 'kn', short: 'ಕನ್ನ', label: 'ಕನ್ನಡ' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line-rule bg-surface-raised">
      <div className="mx-auto flex h-[60px] max-w-[1240px] items-center justify-between gap-8 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <BrandMark size={26} />
          <span className="font-display text-[19px] font-extrabold tracking-[-0.01em] text-ink lg:text-[21px]">
            MilestonePath
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-body lg:flex">
          {navLinks.map((link) => {
            const active = link.match(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => link.role && setActiveRole(link.role)}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'border-b-2 border-brand-600 pb-0.5 font-semibold text-ink dark:border-brand-400'
                    : 'border-b-2 border-transparent pb-0.5 transition-colors hover:text-ink'
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* Segmented language switcher — always visible, never behind a menu */}
          <div
            role="group"
            aria-label={t.nav.select_language}
            className="hidden rounded-full border border-line-warm bg-surface-sunken p-[3px] text-xs font-semibold sm:flex"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLanguage(l.code)}
                aria-pressed={language === l.code}
                title={l.label}
                lang={l.code}
                className={`focus-ring rounded-full px-3 py-1.5 transition-colors ${
                  language === l.code
                    ? 'bg-ink text-surface-raised'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.nav.toggle_theme}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-line-warm text-ink-body transition-colors hover:text-ink lg:h-9 lg:w-9"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl border border-line-warm text-ink-body lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Phone drawer — all actions ≥50px */}
      {mobileMenuOpen && (
        <div className="border-t border-line-rule bg-surface-raised px-4 pb-4 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const active = link.match(pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    link.role && setActiveRole(link.role);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex min-h-[52px] items-center rounded-xl px-3 text-[15px] ${
                    active ? 'font-semibold text-ink' : 'text-ink-body'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-2 flex gap-2 border-t border-line-rule pt-3 sm:hidden">
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLanguage(l.code)}
                aria-pressed={language === l.code}
                lang={l.code}
                className={`focus-ring min-h-[46px] flex-1 rounded-xl border text-sm font-semibold transition-colors ${
                  language === l.code
                    ? 'border-ink bg-ink text-surface-raised'
                    : 'border-line-warm text-ink-body'
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

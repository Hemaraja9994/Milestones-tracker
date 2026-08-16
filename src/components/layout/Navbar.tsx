'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Stethoscope, 
  Heart, 
  Globe, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles, 
  BookOpen, 
  Ear, 
  ShieldAlert, 
  FileText,
  Activity
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useChild } from '@/context/ChildContext';
import { Language, UserRole } from '@/types';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { activeRole, setActiveRole } = useChild();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const toggleRole = (newRole: UserRole) => {
    setActiveRole(newRole);
    if (newRole === 'professional') {
      router.push('/professional');
    } else {
      router.push('/parent');
    }
  };

  const navLinks = [
    {
      href: activeRole === 'professional' ? '/professional' : '/parent',
      label: activeRole === 'professional' ? t.nav.professional_portal : t.nav.parent_tracker,
      icon: activeRole === 'professional' ? Stethoscope : Heart,
      active: pathname.startsWith('/professional') || pathname.startsWith('/parent'),
    },
    {
      href: '/high-risk-register',
      label: t.nav.hrr,
      icon: ShieldAlert,
      active: pathname.startsWith('/high-risk-register'),
    },
    {
      href: '/auditory-development',
      label: t.nav.auditory_guide,
      icon: Ear,
      active: pathname.startsWith('/auditory-development'),
    },
    {
      href: '/speech-sound-matrix',
      label: t.nav.speech_matrix,
      icon: Activity,
      active: pathname.startsWith('/speech-sound-matrix'),
    },
    {
      href: '/clinical-reference',
      label: t.nav.clinical_reference,
      icon: BookOpen,
      active: pathname.startsWith('/clinical-reference'),
    },
    {
      href: '/sources',
      label: t.nav.sources,
      icon: FileText,
      active: pathname.startsWith('/sources'),
    },
  ];

  const languages: { code: Language; label: string; script: string }[] = [
    { code: 'en', label: 'English', script: 'EN' },
    { code: 'hi', label: 'हिन्दी', script: 'HI' },
    { code: 'kn', label: 'ಕನ್ನಡ', script: 'KN' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/90 transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-teal-400 text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Milestone<span className="text-brand-600 dark:text-brand-400">Path</span>
              </span>
              <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60">
                CDC • JCIH • AIISH
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
              {t.app.subtitle}
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                  link.active
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/70 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Role Switcher, Language Switcher, Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Role Toggle Pill */}
          <div className="flex items-center rounded-full bg-slate-100 p-1 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => toggleRole('professional')}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                activeRole === 'professional'
                  ? 'bg-white text-brand-700 shadow-sm dark:bg-slate-700 dark:text-brand-300 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
              title={t.roles.professional_desc}
            >
              <Stethoscope className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Clinician</span>
            </button>
            <button
              onClick={() => toggleRole('parent')}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                activeRole === 'parent'
                  ? 'bg-white text-rose-600 shadow-sm dark:bg-slate-700 dark:text-rose-400 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
              title={t.roles.parent_desc}
            >
              <Heart className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Parent</span>
            </button>
          </div>

          {/* Persistent Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700/60 transition-colors"
              aria-label="Select Language"
            >
              <Globe className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
              <span className="font-semibold">{languages.find(l => l.code === language)?.script}</span>
            </button>

            {langDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-36 rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-800 z-50 animate-in fade-in zoom-in-95 duration-100"
                onMouseLeave={() => setLangDropdownOpen(false)}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs transition-colors ${
                      language === l.code
                        ? 'bg-brand-50 font-bold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-[10px] text-slate-400 uppercase">{l.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700/60 transition-colors"
            aria-label={t.nav.toggle_theme}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-slate-600" />
            )}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 xl:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pt-2 pb-4 dark:border-slate-800 dark:bg-slate-900 xl:hidden space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
                  link.active
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

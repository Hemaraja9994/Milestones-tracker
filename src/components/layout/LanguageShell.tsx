'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Keeps <html lang> and the font-stack class in sync with the active language.
 *
 * `lang-hi` / `lang-kn` reorder the `font-sans` stack in globals.css so
 * Devanagari and Kannada lead, and give Indic body copy its 1.7 line-height.
 */
export default function LanguageShell() {
  const { language } = useLanguage();

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.classList.remove('lang-en', 'lang-hi', 'lang-kn');
    root.classList.add(`lang-${language}`);
  }, [language]);

  return null;
}

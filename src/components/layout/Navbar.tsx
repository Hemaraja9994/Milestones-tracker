'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useChild } from '@/context/ChildContext';
import { Language } from '@/types';
import BrandMark from '@/components/ui/BrandMark';
import { ACTIVE_PATHWAY, DESTINATIONS } from '@/components/layout/NavDestinations';

/**
 * Signal top bar — 66px of ink, four pill destinations, no hamburger.
 *
 * Below 768px this bar keeps only the wordmark and the controls; the four
 * destinations move to the fixed BottomNav, which is easier to reach one-handed
 * than a menu behind a tap.
 */
export default function Navbar() {
  const pathname = usePathname() || '/';
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { setActiveRole } = useChild();

  // Pathway follows the destination — one colour per pathway, everywhere.
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
    <header className="sticky top-0 z-40 w-full bg-ink">
      <div className="mx-auto flex h-[58px] max-w-[1240px] items-center justify-between gap-6 px-[18px] sm:px-6 md:h-[66px] lg:px-10">
        <Link href="/" className="focus-ring flex shrink-0 items-center gap-2.5 rounded-chip">
          <BrandMark size={26} onInk />
          <span className="font-display text-[18px] font-bold tracking-[-0.03em] text-canvas">
            MilestonePath
          </span>
        </Link>

        {/* Four pills — hidden below 768, where BottomNav takes over */}
        <nav aria-label="Primary" className="hidden items-center gap-1.5 md:flex">
          {DESTINATIONS.map((d) => {
            const active = d.matches(pathname);
            return (
              <Link
                key={d.href}
                href={d.href}
                aria-current={active ? 'page' : undefined}
                className={`focus-ring flex h-9 items-center rounded-[9px] px-3.5 text-[13px] transition-colors duration-150 ease-out ${
                  active
                    ? `${ACTIVE_PATHWAY[d.pathway]} font-bold`
                    : 'font-semibold text-clinician-dim hover:text-canvas'
                }`}
              >
                {d.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div
            role="group"
            className="flex rounded-[9px] border border-ink-soft p-[3px] text-[12px] font-semibold"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLanguage(l.code)}
                aria-pressed={language === l.code}
                title={l.label}
                lang={l.code}
                className={`focus-ring sig-chip rounded-[7px] px-2.5 py-1.5 transition-colors duration-150 ease-out ${
                  language === l.code
                    ? 'bg-canvas text-ink'
                    : 'text-clinician-dim hover:text-canvas'
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
            className="focus-ring sig-press flex h-9 w-9 items-center justify-center rounded-[9px] border border-ink-soft text-clinician-dim transition-colors duration-150 ease-out hover:text-canvas"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" strokeWidth={1.9} />
            ) : (
              <Moon className="h-4 w-4" strokeWidth={1.9} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

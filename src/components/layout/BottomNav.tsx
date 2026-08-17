'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useChild } from '@/context/ChildContext';
import { ACTIVE_PATHWAY, DESTINATIONS } from '@/components/layout/NavDestinations';

/**
 * Replaces the hamburger below 768px.
 *
 * Fixed, never hides on scroll, and clears the home indicator on notched
 * phones via env(safe-area-inset-bottom). Labels are the same four, in the same
 * order, as the desktop bar — a destination never changes name with width.
 */
export default function BottomNav() {
  const pathname = usePathname() || '/';
  const { setActiveRole } = useChild();

  return (
    <nav
      aria-label="Primary"
      className="sig-bottom-nav fixed inset-x-0 bottom-0 z-40 flex justify-between gap-1 border-t-2 border-ink bg-canvas px-2 pt-2 md:hidden"
    >
      {DESTINATIONS.map((d) => {
        const active = d.matches(pathname);
        const Icon = d.icon;
        return (
          <Link
            key={d.href}
            href={d.href}
            aria-current={active ? 'page' : undefined}
            onClick={() => {
              if (d.pathway === 'clinician' && d.href === '/professional') setActiveRole('professional');
              if (d.pathway === 'parent') setActiveRole('parent');
            }}
            className={`focus-ring flex h-[52px] w-full max-w-[84px] flex-1 flex-col items-center justify-center gap-1 rounded-control transition-colors duration-150 ease-out ${
              active ? ACTIVE_PATHWAY[d.pathway] : 'text-muted-nav'
            }`}
          >
            <Icon className="h-[21px] w-[21px]" strokeWidth={active ? 2.1 : 1.9} />
            <span
              className={`text-center text-[10px] leading-[1.2] ${
                active ? 'font-bold' : 'font-semibold'
              }`}
            >
              {d.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

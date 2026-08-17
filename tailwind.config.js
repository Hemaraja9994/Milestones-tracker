/** @type {import('tailwindcss').Config} */

/*
 * MilestonePath — "Signal".
 *
 * Two deliberate differences from code/tailwind.config.js in the handoff bundle:
 *
 * 1. Colours resolve through CSS custom properties rather than literal hex, so
 *    the `.dark` class can flip the whole palette. The bundle ships static hex,
 *    which would have left dark mode half-applied — the app already had a
 *    working dark mode and this keeps it.
 * 2. A `legacy` alias block maps the previous scale onto Signal values. The
 *    bundle's header comment says aliases are kept "so nothing breaks
 *    mid-migration" but the block was not in the file; without it every screen
 *    breaks at once. Delete the block once `grep` finds no references.
 */

const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ---------- Signal tokens ---------- */
        ink: {
          DEFAULT: token('ink'),
          soft: token('ink-soft'),
        },
        canvas: token('canvas'),
        page: token('page'),
        line: {
          DEFAULT: token('line'),
          soft: token('line-soft'),
        },
        body: token('body'),
        muted: {
          DEFAULT: token('muted'),
          nav: token('muted-nav'),
        },

        /* pathway — teal is clinician, coral is parent. Never swapped, never status. */
        clinician: {
          DEFAULT: token('clinician'),
          tint: token('clinician-tint'),
          ink: token('clinician-ink'),
          dim: token('clinician-dim'),
          soft: token('clinician-soft'),
        },
        parent: {
          DEFAULT: token('parent'), // FILL ONLY — labels on coral are ink
          tint: token('parent-tint'),
          ink: token('parent-ink'),
          deep: token('parent-deep'),
        },

        /* status — reserved. Never decorative, never a pathway. */
        achieved: {
          DEFAULT: token('achieved'),
          tint: token('achieved-tint'),
          ink: token('achieved-ink'),
        },
        emerging: {
          DEFAULT: token('emerging'),
          tint: token('emerging-tint'),
          ink: token('emerging-ink'),
        },
        risk: {
          DEFAULT: token('risk'),
          tint: token('risk-tint'),
          ink: token('risk-ink'),
        },

        /* ---------- legacy aliases · DELETE once nothing references them ----------
           Maps the previous "Warm Playroom Clinic" scale onto Signal values so the
           app stays shippable at every commit during the migration. */
        surface: {
          canvas: token('page'),
          raised: token('canvas'),
          sunken: token('page'),
          tint: token('canvas'),
        },
        brand: {
          50: token('clinician-tint'),
          100: token('clinician-tint'),
          200: token('clinician-soft'),
          300: token('clinician-dim'),
          400: token('clinician-dim'),
          500: token('clinician'),
          600: token('clinician'),
          700: token('clinician-ink'),
          800: token('clinician-ink'),
          900: token('ink'),
          950: token('ink'),
        },
        teal: {
          100: token('clinician-tint'),
          400: token('clinician-dim'),
          600: token('clinician'),
          700: token('clinician-ink'),
          900: token('ink'),
        },
        slate: {
          50: token('canvas'),
          100: token('page'),
          200: token('line'),
          300: token('line-soft'),
          400: token('muted-nav'),
          500: token('muted'),
          600: token('muted'),
          700: token('body'),
          800: token('ink-soft'),
          900: token('ink'),
          950: token('ink'),
        },
        clinical: {
          50: token('canvas'),
          100: token('page'),
          200: token('line'),
          300: token('line-soft'),
          400: token('muted-nav'),
          500: token('muted'),
          600: token('muted'),
          700: token('body'),
          800: token('ink-soft'),
          900: token('ink'),
          950: token('ink'),
        },
        emerald: { 50: token('achieved-tint'), 100: token('achieved-tint'), 500: token('achieved'), 600: token('achieved'), 700: token('achieved-ink'), 900: token('achieved-ink') },
        green: { 50: token('achieved-tint'), 500: token('achieved'), 600: token('achieved'), 700: token('achieved-ink') },
        amber: { 50: token('emerging-tint'), 100: token('emerging-tint'), 400: token('emerging'), 500: token('emerging'), 600: token('emerging'), 700: token('emerging-ink'), 900: token('emerging-ink') },
        rose: { 50: token('risk-tint'), 100: token('risk-tint'), 400: token('risk'), 500: token('risk'), 600: token('risk'), 700: token('risk-ink'), 900: token('risk-ink') },
        red: { 50: token('risk-tint'), 500: token('risk'), 600: token('risk'), 700: token('risk-ink') },
        orange: { 100: token('parent-tint'), 500: token('parent'), 600: token('parent'), 700: token('parent-ink') },
        sky: { 50: token('clinician-tint'), 500: token('clinician'), 600: token('clinician'), 700: token('clinician-ink') },
        indigo: { 50: token('clinician-tint'), 500: token('clinician'), 600: token('clinician'), 700: token('clinician-ink') },
        purple: { 50: token('clinician-tint'), 500: token('clinician'), 600: token('clinician'), 700: token('clinician-ink') },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['var(--font-plex)', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        serif: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
        kn: ['var(--font-kannada)', 'Noto Sans Kannada', 'sans-serif'],
        hi: ['var(--font-devanagari)', 'Noto Sans Devanagari', 'sans-serif'],
      },
      borderRadius: {
        chip: '8px',
        control: '12px',
        card: '16px',
        panel: '18px',
        shell: '28px',
      },
      borderWidth: { 3: '3px' },
      transitionTimingFunction: {
        fill: 'cubic-bezier(.2,.7,.3,1)',
        ring: 'cubic-bezier(.22,.85,.28,1)',
      },
      keyframes: {
        'sig-enter': {
          from: { opacity: '0', transform: 'translateY(9px) scale(.985)' },
          to: { opacity: '1', transform: 'none' },
        },
        'sig-glow': {
          '0%': { opacity: '0', transform: 'scale(.86)' },
          '40%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'scale(1.28)' },
        },
        'sig-toast': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'sig-enter': 'sig-enter 220ms ease-out both',
        'sig-glow': 'sig-glow 700ms ease-out',
        'sig-toast': 'sig-toast 180ms ease-out both',
      },
      // Signal has NO shadows. These neutralise any that survive migration.
      boxShadow: { subtle: 'none', card: 'none', elevated: 'none', frame: 'none' },
    },
  },
  plugins: [],
};

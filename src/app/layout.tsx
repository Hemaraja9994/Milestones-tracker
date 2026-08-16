import type { Metadata } from 'next';
import { Nunito, Instrument_Sans, Noto_Sans_Devanagari, Noto_Sans_Kannada } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { ChildProvider } from '@/context/ChildContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LanguageShell from '@/components/layout/LanguageShell';

/* Nunito 700/800 carries display type; Instrument Sans carries all UI.
   Noto Sans Devanagari and Noto Sans Kannada cover Hindi and Kannada. */
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '600'],
  variable: '--font-devanagari',
  display: 'swap',
});

const notoKannada = Noto_Sans_Kannada({
  subsets: ['kannada'],
  weight: ['400', '600'],
  variable: '--font-kannada',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MilestonePath – Child Developmental & Speech-Language Tracker',
  description: 'Evidence-based developmental surveillance and speech-language tracker for clinicians and parents based on CDC, ASHA, Northern & Downs, AIISH, and Crowe & McLeod norms.',
  keywords: [
    'Child Developmental Milestones',
    'Speech and Language Tracker',
    'CDC Milestones',
    'ASHA Communication Milestones',
    'Auditory Milestones Northern Downs',
    'AIISH Mysuru Screening',
    'Speech Sound Acquisition Crowe McLeod',
    'Bilingual Child Development Hindi Kannada',
    'Speech Therapy Assessment'
  ],
  authors: [{ name: 'MilestonePath Clinical Development Team' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`lang-en ${nunito.variable} ${instrumentSans.variable} ${notoDevanagari.variable} ${notoKannada.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-surface-canvas text-ink-body antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <ChildProvider>
              <LanguageShell />
              <Navbar />
              <main className="flex-1 w-full">{children}</main>
              <Footer />
            </ChildProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

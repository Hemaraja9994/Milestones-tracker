import type { Metadata } from 'next';
import {
  Space_Grotesk,
  IBM_Plex_Sans,
  Noto_Sans_Devanagari,
  Noto_Sans_Kannada,
} from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { ChildProvider } from '@/context/ChildContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LanguageShell from '@/components/layout/LanguageShell';

/* Space Grotesk carries every heading and numeral; IBM Plex Sans carries all
   UI copy. Noto covers Devanagari and Kannada. next/font self-hosts, so there
   is no <link> to Google Fonts and no layout shift. */
const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '600'],
  variable: '--font-devanagari',
  display: 'swap',
});

const kannada = Noto_Sans_Kannada({
  subsets: ['kannada'],
  weight: ['400', '600', '700'],
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
      className={`lang-en ${display.variable} ${plex.variable} ${devanagari.variable} ${kannada.variable}`}
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

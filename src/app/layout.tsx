import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { ChildProvider } from '@/context/ChildContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Noto+Sans+Devanagari:wght@400;600;700&family=Noto+Sans+Kannada:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface-canvas text-ink-body antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <ChildProvider>
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

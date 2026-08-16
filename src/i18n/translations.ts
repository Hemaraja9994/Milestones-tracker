import en from './en.json';
import hi from './hi.json';
import kn from './kn.json';
import { Language } from '@/types';

export const translations = {
  en,
  hi,
  kn,
};

export type TranslationSchema = typeof en;

export function getTranslation(lang: Language): TranslationSchema {
  return translations[lang] || translations.en;
}

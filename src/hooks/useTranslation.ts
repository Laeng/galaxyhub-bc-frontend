'use client'

import { useState, useEffect } from 'react';
import koTranslations from '@/locales/ko.json';
import enTranslations from '@/locales/en.json';
import type { TranslationSchema } from '@/locales/types';

export type Locale = 'ko' | 'en';

const translations: Record<Locale, TranslationSchema> = {
  ko: koTranslations as TranslationSchema,
  en: enTranslations as TranslationSchema
};

export function useTranslation(initialLocale: Locale = 'ko') {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    // Load saved locale from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'ko' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = translations[locale];

  return { t, locale, changeLocale };
}

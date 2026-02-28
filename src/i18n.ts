import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';

import en from './languages/en.json';
import ru from './languages/ru.json';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
      cookieMinutes: 60 * 24 * 365, // 1 year
      lookupCookie: 'lang',
    },
  });

// Handle language change and save to cookie
export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  Cookies.set('lang', lng, { expires: 365 });
};

export default i18n;
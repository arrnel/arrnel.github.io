import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import yaml from 'yaml';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        supportedLngs: ['en', 'ru'],
        ns: ['common'],
        defaultNS: 'common',

        backend: {
            loadPath: `/locales/{{lng}}/{{ns}}.yaml`,

            parse: (data: string) => yaml.parse(data),
        },

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: false,
        },
    });

export const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
};

export default i18n;
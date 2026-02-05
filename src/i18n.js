import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to FAS Consultants",
      "expertise": "Tax Expertise in KSA & India",
      "description": "Leading financial advisory for growth-stage companies."
    }
  },
  ar: {
    translation: {
      "welcome": "مرحباً بكم في FAS للمشاريع",
      "expertise": "خبرة ضريبية في المملكة العربية السعودية والهند",
      "description": "الاستشارات المالية الرائدة للشركات في مرحلة النمو."
    }
  }
};

i18n
  .use(LanguageDetector) // Automatically detects user language
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
import en from './en.json';
import es from './es.json';

export const translations = { en, es };

export const supportedLanguages = ['en', 'es'];

export const getBrowserLanguage = () => {
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  return supportedLanguages.includes(browserLang) ? browserLang : 'en';
};

// Helper to get nested translation by dot notation key
export const getTranslation = (translations, key) => {
  return key.split('.').reduce((obj, k) => obj?.[k], translations) || key;
};

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, getBrowserLanguage, getTranslation } from '../i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        // Check localStorage first, then browser language
        const saved = localStorage.getItem('rescathena-lang');
        return saved || getBrowserLanguage();
    });

    useEffect(() => {
        localStorage.setItem('rescathena-lang', language);
        document.documentElement.lang = language;
    }, [language]);

    const t = useCallback((key) => {
        return getTranslation(translations[language], key);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

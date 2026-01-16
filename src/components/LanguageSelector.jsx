import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-1 ml-4">
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-l-full transition-all duration-200 border-none cursor-pointer ${language === 'en'
                        ? 'bg-accent text-dark'
                        : 'bg-transparent text-muted hover:text-light'
                    }`}
                aria-label="English"
            >
                EN
            </button>
            <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 text-sm font-medium rounded-r-full transition-all duration-200 border-none cursor-pointer ${language === 'es'
                        ? 'bg-accent text-dark'
                        : 'bg-transparent text-muted hover:text-light'
                    }`}
                aria-label="Español"
            >
                ES
            </button>
        </div>
    );
}

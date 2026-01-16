import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function ContactSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subscribe: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const { t } = useLanguage();
    const { theme } = useTheme();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, this would send to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className={`section ${theme === 'dark'
                    ? 'bg-gradient-to-b from-dark to-[#1a1d21]'
                    : 'bg-gradient-to-b from-light to-[#e0e0e0]'
                }`}
        >
            <div className="max-w-4xl mx-auto px-4 w-full">
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">
                        {t('contact.tagline')}
                    </span>

                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 ${theme === 'dark' ? 'text-light' : 'text-dark'
                        }`}>
                        {t('contact.headline1')}<br />
                        <span className="gradient-text">{t('contact.headline2')}</span>
                    </h2>

                    <p className="text-xl text-muted max-w-xl mx-auto">
                        {t('contact.description')}
                    </p>
                </div>

                <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {submitted ? (
                        <div className="glass rounded-3xl p-12 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 text-accent mb-6">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>{t('contact.success.title')}</h3>
                            <p className="text-muted text-lg">
                                {t('contact.success.message')}
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                                        {t('contact.form.nameLabel')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t('contact.form.namePlaceholder')}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                                        {t('contact.form.emailLabel')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={t('contact.form.emailPlaceholder')}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                                    {t('contact.form.messageLabel')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder={t('contact.form.messagePlaceholder')}
                                />
                            </div>

                            <div className="mb-8">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        name="subscribe"
                                        checked={formData.subscribe}
                                        onChange={handleChange}
                                        className="w-5 h-5 rounded border-2 border-muted bg-transparent checked:bg-accent checked:border-accent cursor-pointer"
                                    />
                                    <span className={`group-hover:text-accent transition-colors ${theme === 'dark' ? 'text-muted' : 'text-muted'
                                        }`}>
                                        {t('contact.form.subscribe')}
                                    </span>
                                </label>
                            </div>

                            <button type="submit" className="btn-primary w-full text-lg py-4">
                                {t('contact.form.submit')}
                            </button>
                        </form>
                    )}
                </div>

                {/* Footer */}
                <footer className={`mt-16 pt-8 text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } ${theme === 'dark' ? 'border-t border-light/10' : 'border-t border-dark/10'}`}>
                    <div className="flex justify-center gap-6 mb-6">
                        <a
                            href="https://github.com/rescathena"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors"
                            aria-label="GitHub"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="https://rescathena.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors"
                            aria-label="Website"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </a>
                    </div>

                    <p className="text-muted text-sm">
                        © {new Date().getFullYear()} {t('contact.footer.copyright')}
                    </p>
                </footer>
            </div>
        </section>
    );
}

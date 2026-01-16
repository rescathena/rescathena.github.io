import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function HeroSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
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

    const scrollToNext = () => {
        const nextSection = document.getElementById('motivation');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="section relative overflow-hidden"
        >
            {/* Background gradient */}
            <div className={`absolute inset-0 opacity-90 ${theme === 'dark'
                ? 'bg-gradient-to-br from-dark via-dark to-[#1a2a2b]'
                : 'bg-gradient-to-br from-light via-light to-[#d8e8e9]'
                }`} />

            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-coral/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-accent uppercase tracking-[0.3em] text-sm mb-6 font-medium">
                        {t('hero.tagline')}
                    </p>

                    <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${theme === 'dark' ? 'text-light' : 'text-dark'
                        }`}>
                        {t('hero.headline1')}<br />
                        <span className="gradient-text">{t('hero.headline2')}</span>
                    </h1>

                    <div className={`space-y-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            {t('hero.question1')}
                        </p>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            {t('hero.question2')}
                        </p>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            {t('hero.question3')} <span className={theme === 'dark' ? 'text-light' : 'text-dark'}>{t('hero.question3Highlight')}</span>
                        </p>
                    </div>

                    <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* <button className="btn-primary text-lg px-8 py-4">
                            {t('hero.ctaDiscover')}
                        </button> */}
                        <button className="btn-secondary text-lg px-8 py-4" onClick={scrollToNext}>
                            {t('hero.ctaLearn')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <button
                    onClick={scrollToNext}
                    className="text-muted hover:text-accent transition-colors cursor-pointer bg-transparent border-none"
                    aria-label="Scroll to next section"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

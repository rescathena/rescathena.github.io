import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function CollaborationSection() {
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

    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            title: t('collaboration.features.openSource.title'),
            description: t('collaboration.features.openSource.description'),
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: t('collaboration.features.communityValidated.title'),
            description: t('collaboration.features.communityValidated.description'),
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: t('collaboration.features.trustScores.title'),
            description: t('collaboration.features.trustScores.description'),
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            title: t('collaboration.features.radicalTransparency.title'),
            description: t('collaboration.features.radicalTransparency.description'),
        },
    ];

    const roles = [
        { emoji: '💻', title: t('collaboration.roles.developers.title'), desc: t('collaboration.roles.developers.desc') },
        { emoji: '🎨', title: t('collaboration.roles.designers.title'), desc: t('collaboration.roles.designers.desc') },
        { emoji: '📢', title: t('collaboration.roles.marketers.title'), desc: t('collaboration.roles.marketers.desc') },
        { emoji: '🏛️', title: t('collaboration.roles.ngoExperts.title'), desc: t('collaboration.roles.ngoExperts.desc') },
        { emoji: '❤️', title: t('collaboration.roles.anyone.title'), desc: t('collaboration.roles.anyone.desc') },
    ];

    return (
        <section
            ref={sectionRef}
            id="collaboration"
            className={theme === 'dark' ? 'section bg-dark' : 'section bg-light'}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">
                        {t('collaboration.tagline')}
                    </span>

                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 ${theme === 'dark' ? 'text-light' : 'text-dark'
                        }`}>
                        {t('collaboration.headline1')} <span className="gradient-text">{t('collaboration.headline2')}</span>{t('collaboration.headlineEnd')}
                    </h2>

                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        {t('collaboration.description')}
                    </p>
                </div>

                <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-6 text-center hover:border-accent/30 transition-all duration-300 hover:transform hover:-translate-y-2"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                                {feature.icon}
                            </div>
                            <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                                {feature.title}
                            </h3>
                            <p className="text-muted text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={`glass rounded-3xl p-8 md:p-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className={`text-2xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                        {t('collaboration.rolesTitle')} <span className="text-accent">{t('collaboration.rolesTitleHighlight')}</span>
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {roles.map((role, index) => (
                            <div
                                key={index}
                                className={`rounded-xl px-6 py-4 text-center hover:bg-accent/10 transition-all duration-300 cursor-default ${theme === 'dark' ? 'bg-dark/50' : 'bg-light/50'
                                    }`}
                            >
                                <span className="text-3xl mb-2 block">{role.emoji}</span>
                                <p className={`font-semibold ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>{role.title}</p>
                                <p className="text-sm text-muted">{role.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

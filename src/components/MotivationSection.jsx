import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function MotivationSection() {
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

    const stats = [
        { value: t('motivation.stats.stat1Value'), label: t('motivation.stats.stat1Label') },
        { value: t('motivation.stats.stat2Value'), label: t('motivation.stats.stat2Label') },
        { value: t('motivation.stats.stat3Value'), label: t('motivation.stats.stat3Label') },
    ];

    return (
        <section
            ref={sectionRef}
            id="motivation"
            className={`section ${theme === 'dark'
                    ? 'bg-gradient-to-b from-dark to-[#1a1d21]'
                    : 'bg-gradient-to-b from-light to-[#e0e0e0]'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">
                        {t('motivation.tagline')}
                    </span>

                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-8 ${theme === 'dark' ? 'text-light' : 'text-dark'
                        }`}>
                        {t('motivation.headline1')}<br />
                        <span className="gradient-text">{t('motivation.headline2')}</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-lg text-muted leading-relaxed">
                            {t('motivation.para1')}
                        </p>

                        <p className="text-lg text-muted leading-relaxed">
                            {t('motivation.para2')}
                            <span className="text-coral font-semibold"> {t('motivation.para2Highlight')}</span> {t('motivation.para2End')}
                        </p>

                        <p className={`text-lg leading-relaxed font-medium ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                            {t('motivation.para3Start')} <span className="text-accent">{t('motivation.para3Brand')}</span>{t('motivation.para3End')}
                        </p>

                        <div className="pt-4">
                            <p className={`text-xl font-semibold ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                                {t('motivation.taglineEnd')} <span className="gradient-text">{t('motivation.taglineEndHighlight')}</span>.
                            </p>
                        </div>
                    </div>

                    <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
                            >
                                <div className="text-4xl font-bold text-accent mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-muted">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

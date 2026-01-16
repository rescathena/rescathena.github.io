import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useLanguage();
    const { theme } = useTheme();

    useEffect(() => {
        // Find the scrollable main container
        const mainElement = document.querySelector('main');

        const handleScroll = () => {
            if (mainElement) {
                setIsScrolled(mainElement.scrollTop > 50);
            }
        };

        if (mainElement) {
            mainElement.addEventListener('scroll', handleScroll);
            // Check initial scroll position
            handleScroll();
        }

        return () => {
            if (mainElement) {
                mainElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const navLinks = [
        { href: '#hero', label: t('nav.home') },
        { href: '#motivation', label: t('nav.why') },
        { href: '#collaboration', label: t('nav.collaborate') },
        { href: '#contact', label: t('nav.contact') },
    ];

    const scrollTo = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-blur py-3' : 'py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => scrollTo(e, '#hero')}
                    className="text-xl font-bold tracking-tight"
                >
                    <span className="text-accent">RESC</span>
                    <span className={theme === 'dark' ? 'text-light' : 'text-dark'}>ATHENA</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollTo(e, link.href)}
                            className="text-muted hover:text-accent transition-colors font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => scrollTo(e, '#contact')}
                        className="btn-primary py-2 px-4 text-sm"
                    >
                        {t('nav.joinUs')}
                    </a>
                    <LanguageSelector />
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    <LanguageSelector />
                    <ThemeToggle />
                    <button
                        className={`bg-transparent border-none cursor-pointer ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollTo(e, link.href)}
                            className="text-muted hover:text-accent transition-colors font-medium py-2"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => scrollTo(e, '#contact')}
                        className="btn-primary py-2 px-4 text-center"
                    >
                        {t('nav.joinUs')}
                    </a>
                </div>
            </div>
        </nav>
    );
}

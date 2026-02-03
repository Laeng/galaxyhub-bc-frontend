'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Locale } from '@/hooks/useTranslation';

export interface NavigationProps {
  brandName: string;
  backLink?: string;
  badge?: string;
  menuItems: {
    label: string;
    href: string;
  }[];
  variant?: 'solid' | 'blur' | 'minimal';
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  brandName,
  backLink,
  badge,
  menuItems,
  variant = 'blur',
  locale = 'ko',
  onLocaleChange
}) => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Find active section
      const sections = menuItems.map(item =>
        document.querySelector(item.href)
      ).filter(Boolean);

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section.id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navClasses = {
    solid: 'bg-base-100 shadow-md',
    blur: 'bg-base-100/80 backdrop-blur-lg',
    minimal: 'bg-transparent'
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navClasses[variant]} ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand & Back Link */}
          <div className="flex items-center gap-4">
            {backLink && (
              <Link href={backLink} className="btn btn-ghost btn-sm">
                ←
              </Link>
            )}
            <div className="font-bold text-lg lg:text-xl">{brandName}</div>
            {badge && (
              <span className="badge badge-primary hidden md:inline-flex">{badge}</span>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href ? 'text-primary' : 'text-base-content/70'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Language Switcher */}
            {onLocaleChange && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onLocaleChange('ko')}
                  className={`text-sm font-medium transition-colors ${
                    locale === 'ko' ? 'text-primary' : 'text-base-content/50 hover:text-base-content'
                  }`}
                >
                  한국어
                </button>
                <span className="text-base-content/30">/</span>
                <button
                  onClick={() => onLocaleChange('en')}
                  className={`text-sm font-medium transition-colors ${
                    locale === 'en' ? 'text-primary' : 'text-base-content/50 hover:text-base-content'
                  }`}
                >
                  English
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden btn btn-ghost btn-square"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.href
                    ? 'bg-primary text-primary-content'
                    : 'hover:bg-base-200'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Language Switcher */}
            {onLocaleChange && (
              <div className="flex items-center gap-3 px-4 py-2 pt-4 border-t border-base-content/10">
                <button
                  onClick={() => onLocaleChange('ko')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    locale === 'ko'
                      ? 'bg-primary text-primary-content'
                      : 'bg-base-200 hover:bg-base-300'
                  }`}
                >
                  한국어
                </button>
                <button
                  onClick={() => onLocaleChange('en')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    locale === 'en'
                      ? 'bg-primary text-primary-content'
                      : 'bg-base-200 hover:bg-base-300'
                  }`}
                >
                  English
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

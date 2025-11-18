
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import LanguageSwitch from './LanguageSwitch';
import AsamaLogo from './icons/AsamaLogo';
import { siteContent } from '../content';
import { CloseIcon, MenuIcon } from './icons/UiIcons';

interface HeaderProps {
  onNavClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const content = siteContent[language].nav;
  const navItems = [
    { label: content.about, section: 'about' },
    { label: content.projects, section: 'projects' },
    { label: content.services, section: 'services' },
    { label: content.contact, section: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = (section: string) => {
    onNavClick(section);
    setIsMobileMenuOpen(false);
  };

  const navLinks = (
    <>
      {navItems.map((item) => (
        <a
          key={item.section}
          href={`#${item.section}`}
          onClick={(e) => { e.preventDefault(); handleMobileNavClick(item.section); }}
          className="block px-4 py-3 text-lg text-slate-200 transition-colors hover:text-teal-300 md:text-sm md:py-2"
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-xl border-b border-white/5' : 'pt-4'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="#hero" onClick={(e) => { e.preventDefault(); onNavClick('hero'); }} aria-label="Asama Home">
                <AsamaLogo className="h-8 w-8 text-slate-200 hover:text-teal-300 transition-colors" />
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.section}
                  href={`#${item.section}`}
                  onClick={(e) => { e.preventDefault(); onNavClick(item.section); }}
                  className="px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-teal-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:block">
              <LanguageSwitch />
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : (language === 'fa' ? 'translate-x-full' : '-translate-x-full')}`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`relative w-64 h-full bg-[#0a0a0a]/80 backdrop-blur-2xl border-white/10 ${language === 'fa' ? 'border-l' : 'border-r'}`}>
          <nav className="pt-24 px-2 space-y-1">
            {navLinks}
          </nav>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;


import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
// Fix: The useLanguage hook is defined in and should be imported from hooks/useLanguage.
import { useLanguage } from './hooks/useLanguage';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';
import { siteContent } from './content';

const AppContent: React.FC = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');

  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [language]);

  const content = siteContent[language];

  const handleNavClick = (section: string) => {
    let ref;
    switch (section) {
      case 'about': ref = aboutRef; break;
      case 'projects': ref = projectsRef; break;
      case 'services': ref = servicesRef; break;
      case 'contact': ref = contactRef; break;
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Font family logic based on language
  const fontFamilyClass = language === 'fa' ? 'font-fa' : 'font-en';

  return (
    <div className={`bg-[#0a0a0a] text-slate-200 ${fontFamilyClass}`}>
      <GrainOverlay />
      <Header onNavClick={handleNavClick} />
      <main>
        <Hero content={content.hero} />
        <div id="about" ref={aboutRef} className="pt-24 -mt-24"><About /></div>
        <div id="projects" ref={projectsRef} className="pt-24 -mt-24"><Projects /></div>
        <div id="services" ref={servicesRef} className="pt-24 -mt-24"><Services /></div>
        <div id="contact" ref={contactRef} className="pt-24 -mt-24"><Contact /></div>
      </main>
      <Footer onNavClick={handleNavClick}/>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;


import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../types';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleSwitch = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center text-sm font-medium text-slate-400">
      <button
        onClick={() => handleSwitch('fa')}
        className={`px-2 py-1 transition-colors duration-300 ${language === 'fa' ? 'text-teal-300' : 'hover:text-slate-200'}`}
        aria-label="Switch to Farsi"
        lang="fa"
      >
        FA
      </button>
      <span className="text-slate-600">|</span>
      <button
        onClick={() => handleSwitch('en')}
        className={`px-2 py-1 transition-colors duration-300 ${language === 'en' ? 'text-teal-300' : 'hover:text-slate-200'}`}
        aria-label="Switch to English"
        lang="en"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;

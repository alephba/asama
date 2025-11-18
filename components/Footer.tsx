
import React from 'react';
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '../hooks/useLanguage';
import { siteContent } from '../content';

interface FooterProps {
  onNavClick: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
    const { language } = useLanguage();
    const content = siteContent[language].footer;

    return (
        <footer className="bg-black/20 backdrop-blur-xl border-t border-white/5 mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between h-20">
                    <p className="text-sm text-slate-400 order-2 sm:order-1 mt-4 sm:mt-0">
                       &copy; {new Date().getFullYear()} {content.copyright}
                    </p>
                    <div className="order-1 sm:order-2">
                        <LanguageSwitch />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

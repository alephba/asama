
import React from 'react';
import VimeoEmbed from './VimeoEmbed';
import { ChevronDownIcon } from './icons/UiIcons';
import { SiteContent } from '../types';

interface HeroProps {
    content: SiteContent['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  // Placeholder Vimeo ID for the showreel
  const showreelVimeoId = '76979871';

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <VimeoEmbed 
          vimeoId={showreelVimeoId} 
          background={true} 
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <div className="bg-black/10 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white/90" style={{ fontFamily: 'var(--font-en-heading), var(--font-fa-heading)' }}>
            {content.headline}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
            {content.subcopy}
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-teal-300/10 text-teal-300 border border-teal-300/20 hover:bg-teal-300/20 hover:border-teal-300/30 transition-all duration-300 px-8 py-3 rounded-lg text-lg font-medium motion-safe:hover:scale-105"
            >
              {content.cta}
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll down">
          <ChevronDownIcon className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

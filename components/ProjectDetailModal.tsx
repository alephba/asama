
import React, { useEffect, useState, useRef } from 'react';
import { Project } from '../types';
import VimeoEmbed from './VimeoEmbed';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './icons/UiIcons';
import useFocusTrap from '../hooks/useFocusTrap';
import { useLanguage } from '../hooks/useLanguage';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { language } = useLanguage();
  const modalRef = useFocusTrap<HTMLDivElement>(!isClosing);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-block bg-teal-300/10 text-teal-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{children}</span>
  );

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose}></div>
      <div
        ref={modalRef}
        className={`relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c0c]/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-y-auto shadow-2xl shadow-black/40 transition-transform duration-300 ${isClosing ? 'scale-95' : 'scale-100'}`}
      >
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex justify-between items-start">
            <div className="pe-4">
              <h2 id="project-title" className="text-2xl md:text-3xl font-bold text-white/90" style={{ fontFamily: 'var(--font-en-heading), var(--font-fa-heading)' }}>{project.title}</h2>
              <p className="text-slate-400 mt-1">{project.client} - {project.year}</p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 -m-2 text-slate-400 hover:text-white transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              aria-label="Close project details"
            >
              <CloseIcon />
            </button>
          </div>
          
          <div className="mt-6 aspect-video rounded-lg overflow-hidden border border-white/10">
            <VimeoEmbed vimeoId={project.vimeoId} />
          </div>

          <p className="mt-6 text-slate-300 leading-relaxed">{project.description}</p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-200 mb-3">{language === 'en' ? 'Tools' : 'ابزارها'}</h3>
            <div>{project.tools.map(tool => <Tag key={tool}>{tool}</Tag>)}</div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-slate-200 mb-3">{language === 'en' ? 'AI Pipeline' : 'پایپ‌لاین هوش مصنوعی'}</h3>
            <div>{project.aiPipeline.map(step => <Tag key={step}>{step}</Tag>)}</div>
          </div>
          
          {project.images.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-3">{language === 'en' ? 'Gallery' : 'گالری'}</h3>
              <div className="relative">
                <img src={project.images[currentImage]} alt={`Breakdown ${currentImage + 1}`} className="w-full rounded-lg border border-white/10" loading="lazy" />
                {project.images.length > 1 && (
                  <>
                  <button onClick={prevImage} className="absolute top-1/2 start-2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors" aria-label="Previous image">
                    {language === 'fa' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </button>
                  <button onClick={nextImage} className="absolute top-1/2 end-2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors" aria-label="Next image">
                    {language === 'fa' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </button>
                  </>
                )}
              </div>
            </div>
          )}

          {project.aiPrompts && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-3">{language === 'en' ? 'AI Prompts' : 'پرامپت‌های هوش مصنوعی'}</h3>
              <pre className="bg-black/50 border border-white/10 rounded-lg p-4 text-sm text-slate-300 whitespace-pre-wrap font-mono">{project.aiPrompts}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;


import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { projects as allProjects } from '../content';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';
import { siteContent } from '../content';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const projects = allProjects[language];
  const content = siteContent[language].projects;

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight" style={{ fontFamily: 'var(--font-en-heading), var(--font-fa-heading)' }}>{content.title}</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        {/* Desktop: Masonry Layout */}
        <div className="hidden md:block columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map(project => (
            <ProjectCard key={project.slug} project={project} onClick={() => openModal(project)} />
          ))}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div className={`flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 ${language === 'fa' ? 'flex-row-reverse' : 'flex-row'}`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`.snap-x::-webkit-scrollbar { display: none; }`}</style>
            {projects.map(project => (
              <div key={project.slug} className="snap-center flex-shrink-0 w-4/5">
                <ProjectCard project={project} onClick={() => openModal(project)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;

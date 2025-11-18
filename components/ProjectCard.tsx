
import React from 'react';
import { Project } from '../types';
import useTilt from '../hooks/useTilt';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const tiltRef = useTilt<HTMLButtonElement>(true);

  return (
    <button
      ref={tiltRef}
      onClick={onClick}
      className="w-full block text-left bg-white/5 border border-white/[0.06] rounded-2xl overflow-hidden group transition-all duration-300 ease-out motion-safe:hover:scale-102 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
      style={{
        boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.04)',
        breakInside: 'avoid-column'
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
        <p className="text-slate-400 mt-1">{project.client}</p>
      </div>
    </button>
  );
};

export default ProjectCard;

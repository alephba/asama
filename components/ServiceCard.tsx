
import React from 'react';
import { Service } from '../types';
import useTilt from '../hooks/useTilt';
import { CheckIcon } from './icons/UiIcons';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const tiltRef = useTilt<HTMLDivElement>(true);

  return (
    <div
      ref={tiltRef}
      className="bg-black/10 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 shadow-2xl shadow-black/20 h-full flex flex-col transition-all duration-300 motion-safe:hover:border-white/10 motion-safe:hover:scale-102"
    >
      <h3 className="text-xl font-bold text-slate-100">{service.title}</h3>
      <p className="mt-3 text-slate-300 flex-grow">{service.short}</p>
      <ul className="mt-6 space-y-3 text-slate-400">
        {service.bullets.map((bullet, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="flex-shrink-0 mt-1 me-2 text-teal-300" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;

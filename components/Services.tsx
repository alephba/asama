
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { services as allServices } from '../content';
import { Service } from '../types';
import ServiceCard from './ServiceCard';
import { siteContent } from '../content';

const Services: React.FC = () => {
    const { language } = useLanguage();
    const services = allServices[language];
    const content = siteContent[language].services;

    return (
        <section className="py-20 md:py-32 bg-white/[0.02]">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight" style={{ fontFamily: 'var(--font-en-heading), var(--font-fa-heading)' }}>{content.title}</h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">{content.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

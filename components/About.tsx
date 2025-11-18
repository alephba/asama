
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { teamMembers, siteContent } from '../content';
import useTilt from '../hooks/useTilt';
import { TeamMember } from '../types';

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    const tiltRef = useTilt<HTMLDivElement>(true);
    return (
        <div
            ref={tiltRef}
            className="bg-white/5 border border-white/[0.06] rounded-2xl p-6 text-center transition-transform duration-300 ease-out motion-safe:hover:scale-102"
            style={{boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.04)'}}
        >
            <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white/10" />
            <h3 className="text-lg font-bold text-slate-100">{member.name}</h3>
            <p className="text-teal-300 text-sm">{member.role}</p>
            <p className="mt-3 text-sm text-slate-400">{member.shortBio}</p>
        </div>
    )
}

const About: React.FC = () => {
    const { language } = useLanguage();
    const members = teamMembers[language];
    const content = siteContent[language].about;

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight" style={{ fontFamily: 'var(--font-en-heading), var(--font-fa-heading)' }}>{content.title}</h2>
                    <div className="mt-10 bg-black/10 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/20">
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                            {content.mission}
                        </p>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto mt-20 md:mt-28">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-white/90 tracking-tight mb-12">{content.teamTitle}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {members.map(member => <TeamCard key={member.name} member={member} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

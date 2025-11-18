
import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { siteContent } from '../content';
import { VimeoIcon, LinkedInIcon, InstagramIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const content = siteContent[language].contact;
    const [formState, setFormState] = useState({ submitting: false, success: false, error: false });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormState({ submitting: true, success: false, error: false });
        const form = event.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormState({ submitting: false, success: true, error: false });
                form.reset();
            } else {
                setFormState({ submitting: false, success: false, error: true });
            }
        } catch (error) {
            setFormState({ submitting: false, success: false, error: true });
        }
    };
    
    const SocialLink: React.FC<{ href: string; children: React.ReactNode, label: string }> = ({ href, children, label }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-slate-400 hover:text-teal-300 transition-colors">
            {children}
        </a>
    )

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight" style={{ fontFamily: 'var(--font-en-heading), var(--font-fa-heading)' }}>{content.title}</h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">{content.subtitle}</p>
                </div>
                <div className="max-w-3xl mx-auto bg-black/10 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/20">
                    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">{content.form.name}</label>
                                <input type="text" name="name" id="name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-300" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">{content.form.email}</label>
                                <input type="email" name="email" id="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-300" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">{content.form.company}</label>
                            <input type="text" name="company" id="company" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-300" />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">{content.form.message}</label>
                            <textarea name="message" id="message" rows={5} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-300"></textarea>
                        </div>
                        {/* Honeypot field for spam protection */}
                        <input type="text" name="_gotcha" style={{ display: 'none' }} />
                        <div className="mt-8 text-center">
                            <button type="submit" disabled={formState.submitting} className="inline-block bg-teal-300/10 text-teal-300 border border-teal-300/20 hover:bg-teal-300/20 hover:border-teal-300/30 transition-all duration-300 px-8 py-3 rounded-lg text-lg font-medium motion-safe:hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                                {formState.submitting ? 'Sending...' : content.form.submit}
                            </button>
                        </div>
                        {formState.success && <p className="mt-4 text-center text-green-400">{content.form.success}</p>}
                        {formState.error && <p className="mt-4 text-center text-red-400">{content.form.error}</p>}
                    </form>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-400">Or reach us on</p>
                    <div className="flex justify-center items-center gap-6 mt-4">
                       <SocialLink href="#" label="Vimeo"><VimeoIcon /></SocialLink>
                       <SocialLink href="#" label="Instagram"><InstagramIcon /></SocialLink>
                       <SocialLink href="#" label="LinkedIn"><LinkedInIcon /></SocialLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

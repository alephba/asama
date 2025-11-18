
export type Language = 'en' | 'fa';

export interface Project {
  slug: string;
  featured: boolean;
  coverImage: string;
  title: string;
  client: string;
  year: number;
  description: string;
  tools: string[];
  aiPipeline: string[];
  vimeoId: string;
  images: string[];
  aiPrompts?: string;
}

export interface Service {
  title: string;
  short: string;
  bullets: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  shortBio: string;
  photo: string;
}

export interface SiteContent {
  nav: {
    about: string;
    projects: string;
    services: string;
    contact: string;
  };
  hero: {
    headline: string;
    subcopy: string;
    cta: string;
  };
  about: {
    title: string;
    mission: string;
    teamTitle: string;
  },
  projects: {
    title: string;
    subtitle: string;
  },
  services: {
    title: string;
    subtitle: string;
  },
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    }
  },
  footer: {
    copyright: string;
  }
}

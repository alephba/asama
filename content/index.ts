
import { projects as enProjects } from './en/projects';
import { projects as faProjects } from './fa/projects';
import { services as enServices } from './en/services';
import { services as faServices } from './fa/services';
import { teamMembers as enTeamMembers } from './en/team';
import { teamMembers as faTeamMembers } from './fa/team';
import { siteContent as enSiteContent } from './en/site';
import { siteContent as faSiteContent } from './fa/site';
import { Project, Service, SiteContent, TeamMember } from '../types';

type ContentCollection<T> = {
  en: T[];
  fa: T[];
};

type SiteContentCollection = {
  en: SiteContent;
  fa: SiteContent;
}

export const projects: ContentCollection<Project> = {
  en: enProjects,
  fa: faProjects,
};

export const services: ContentCollection<Service> = {
  en: enServices,
  fa: faServices,
};

export const teamMembers: ContentCollection<TeamMember> = {
  en: enTeamMembers,
  fa: faTeamMembers,
};

export const siteContent: SiteContentCollection = {
  en: enSiteContent,
  fa: faSiteContent,
}

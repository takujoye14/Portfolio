import type { LucideIcon } from 'lucide-react';

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
}

export interface Item {
  role?: string;
  company?: string;
  years: string;
  description?: string;
  degree?: string;
  institution?: string;
}

export interface SkillContent {
  languages: string[];
  frontend: string[];
  backend: string[];
  ai: string[];
}

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  content?: string | SkillContent;
  items?: Item[];
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  image: string;
  contact: Contact;
  sections: Section[];
}

export interface SocialLinkProps {
  Icon: LucideIcon;
  href: string;
  label: string;
}

export interface HeaderProps {
  profile: ProfileData;
  scrollToSection: (id: string) => void;
}

export interface SectionCardProps {
  section: Section;
}

export interface SkillGroupProps {
  title: string;
  skills: string[];
  Icon: LucideIcon;
}
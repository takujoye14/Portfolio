import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from './SocialLink';
import type { HeaderProps } from '../types';
import CVImage from '../assets/CVimage.png';

interface ExtendedHeaderProps extends HeaderProps {
    viewExperienceLabel: string;
}

const Header: React.FC<ExtendedHeaderProps> = ({ profile, scrollToSection, viewExperienceLabel }) => (
  <header className="header-container">
    <img
      src={CVImage}
      alt={profile.name}
      className="profile-image"
    />
    <h1 className="header-name">{profile.name}</h1>
    <h2 className="header-title">{profile.title}</h2>
    <p className="header-tagline">"{profile.tagline}"</p>

    <div className="social-links">
      <SocialLink Icon={Mail} href={`mailto:${profile.contact.email}`} label="Email" />
      <SocialLink Icon={Github} href={profile.contact.github} label="GitHub" />
      <SocialLink Icon={Linkedin} href={profile.contact.linkedin} label="LinkedIn" />
    </div>

    <button
      onClick={() => scrollToSection('experience')}
      className="header-button"
    >
      {viewExperienceLabel}
      <ArrowRight />
    </button>
  </header>
);

export default Header;
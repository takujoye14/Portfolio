import React from 'react';
import type { SocialLinkProps } from '../types';

const SocialLink: React.FC<SocialLinkProps> = ({ Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="social-link"
  >
    <Icon />
  </a>
);

export default SocialLink;
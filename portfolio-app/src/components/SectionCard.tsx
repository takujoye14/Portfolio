import React from 'react';
import { Code, Layers, Rss, Zap, ExternalLink } from 'lucide-react';
import type { SectionCardProps, SkillContent } from '../types';
import SkillGroup from './SkillGroup';

const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
  const IconComponent = section.icon;

  return (
    <div id={section.id} className="section-card">
      <h3 className="section-title">
        <IconComponent />
        {section.title}
      </h3>

      {section.id === 'about' && typeof section.content === 'string' && (
        <p className="about-content">{section.content}</p>
      )}

      {(section.id === 'experience' || section.id === 'projects') && section.items && (
        <div className="timeline-container">
          {section.items.map((item, index) => (
            <div key={index} className="timeline-item">
              <p className="item-role">
                {item.role}
                {/* Add external link icon for projects */}
                {section.id === 'projects' && (
                  <a href={item.company} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                    <ExternalLink size={16} />
                  </a>
                )}
              </p>
              
              {/* For projects, item.company is the GitHub URL, so we display it here */}
              {(item.company && section.id === 'projects') && <p className="item-company project-url">{item.company}</p>}
              
              {/* For experience, item.company is the company name, shown here */}
              {(item.company && section.id === 'experience') && <p className="item-company">{item.company}</p>}

              <p className="item-years">{item.years}</p>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {section.id === 'education' && section.items && (
        <div className="education-list">
          {section.items.map((item, index) => (
            <div key={index} className="education-item">
              <span className="item-degree">{item.degree}</span>
              <span className="item-institution">{item.institution} ({item.years})</span>
            </div>
          ))}
        </div>
      )}

      {section.id === 'skills' && section.content && typeof section.content !== 'string' && (
        <div className="skill-group-container">
          <SkillGroup title="Core Languages" skills={(section.content as SkillContent).languages} Icon={Code} />
          <SkillGroup title="Frontend Stack" skills={(section.content as SkillContent).frontend} Icon={Layers} />
          <SkillGroup title="Backend & Deployment" skills={(section.content as SkillContent).backend} Icon={Rss} />
          <SkillGroup title="AI & ML" skills={(section.content as SkillContent).ai} Icon={Zap} />
        </div>
      )}
    </div>
  );
};

export default SectionCard;
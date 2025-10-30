import React from 'react';
import type { SkillGroupProps } from '../types';

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills, Icon }) => (
  <div>
    <h4 className="skill-title">
      <Icon /> {title}
    </h4>
    <div className="skill-tags">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="skill-tag"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillGroup;
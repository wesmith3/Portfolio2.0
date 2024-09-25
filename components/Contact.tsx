import React from 'react';
import { SiLinkedin, SiGithub, SiMedium } from 'react-icons/si';

const Contact = () => {
  const technologies = [
    { icon: SiLinkedin, name: 'LinkedIn', color: '#0A66C2' },
    { icon: SiGithub, name: 'GitHub', color: '#181717' },
    { icon: SiMedium, name: 'Medium', color: '#FFFFFF' },
  ];

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {technologies.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center">
          <tech.icon 
            className="text-3xl" 
            style={{ color: tech.color }}
          />
          <span className="text-xs mt-1 dark:text-gray-300">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Contact;
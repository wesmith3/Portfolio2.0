import React from 'react';
import { IconType } from 'react-icons';
import { SiLinkedin, SiGithub, SiMedium, SiCalendly } from 'react-icons/si';

interface Technology {
  icon: IconType;
  name: string;
  color: string;
  url: string;
}

const Contact: React.FC = () => {
  const technologies: Technology[] = [
    { icon: SiLinkedin, name: 'LinkedIn', color: '#0A66C2', url: 'https://www.linkedin.com/in/wesmith314/' },
    { icon: SiGithub, name: 'GitHub', color: '#FFFFFF', url: 'https://github.com/wesmith3' },
    { icon: SiMedium, name: 'Medium', color: '#FFFFFF', url: 'https://medium.com/@wesmith314' },
    { icon: SiCalendly, name: 'Calendly', color: '#006BFF', url: 'https://calendly.com/wesmith3/30min' },
  ];

  return (
    <div className="flex justify-center space-x-4 mt-10">
      {technologies.map((tech) => (
        <a
          key={tech.name}
          href={tech.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center no-underline"
        >
          <tech.icon
            className="text-3xl transition-transform hover:scale-110"
            style={{ color: tech.color }}
          />
          <span className="text-xs mt-1 dark:text-gray-300">{tech.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Contact;
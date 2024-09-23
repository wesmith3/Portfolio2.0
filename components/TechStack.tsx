import React from 'react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiNodedotjs } from 'react-icons/si';

const TechStack = () => {
  const technologies = [
    { icon: SiReact, name: 'React' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiTailwindcss, name: 'Tailwind CSS' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiNodedotjs, name: 'Node.js' },
  ];

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {technologies.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center">
          <tech.icon className="text-3xl text-gray-600 dark:text-gray-300" />
          <span className="text-xs mt-1">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
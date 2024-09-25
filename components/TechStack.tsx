import React from 'react';
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiAmazonwebservices, SiExpress } from 'react-icons/si';

const TechStack = () => {
  const technologies = [
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express', color: '#FFFFFF' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiAmazonwebservices, name: 'AWS', color: '#FF9900' },
  ];

  return (
    <div className="flex justify-center space-x-4 mt-4 mb-5">
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

export default TechStack;
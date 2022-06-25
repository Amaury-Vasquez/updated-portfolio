import { FaReact } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

export interface ProjectData {
  description: string;
  imageLink: string;
  link?: string;
  powered: { color: string; Icon: React.FC; tool: string };
  repositorie: string;
  title: string;
}

export const useProjects = () => {
  // Once the backend is ready to be used
  // The links won't be static

  const projects: ProjectData[] = [
    {
      description:
        'Final project of college subject "Análisis y diseño de algortimos".',
      imageLink: 'https://i.imgur.com/GYutGbF.jpg',
      link: 'https://algoritmo-corte-varillas.netlify.app/',
      powered: { color: '#5fd3f3', Icon: FaReact, tool: 'React' },
      repositorie: 'https://github.com/Amaury-Vasquez/corte-varillas',
      title: 'Rod cutting problem',
    },
    {
      description: 'Classic snake game created for Linux based OS',
      imageLink: 'https://i.imgur.com/7q8sc4h.jpg',
      powered: { color: '#007cc7', Icon: SiCplusplus, tool: '' },
      repositorie: 'https://github.com/Amaury-Vasquez/Cpp-snake-game',
      title: 'C++ snake game',
    },
    {
      description: 'Checkers offline game for two players. ',
      imageLink: 'https://i.imgur.com/IqRUoXm.png',
      link: 'https://tscheckers.netlify.app/',
      powered: { color: '#5fd3f3', Icon: FaReact, tool: 'React' },
      repositorie: 'https://github.com/Amaury-Vasquez/checkers',
      title: 'Checkers',
    },
    {
      description:
        'Project created to recolect some basic games I created previously into a single page.',
      imageLink: 'https://i.imgur.com/ZPIRzDJ.jpg',
      link: 'https://amvasgamestation.netlify.app/',
      powered: { color: '#5fd3f3', Icon: FaReact, tool: 'React' },
      repositorie: 'https://github.com/Amaury-Vasquez/game-station',
      title: 'Game station',
    },
  ];

  return projects;
};

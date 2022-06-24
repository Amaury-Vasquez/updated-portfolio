import { Helmet } from 'react-helmet-async';

import { CardsContainer } from './styles';
import { useProjects } from '../../hooks/useProjects';
import { ProjectCard } from '../../components/ProjectCard';

export const Projects = () => {
  const projects = useProjects();

  return (
    <>
      <Helmet>
        <title> {`Projects | Amaury Vasquez`} </title>
      </Helmet>
      <CardsContainer>
        {projects.map((item, i) => (
          <ProjectCard data={item} key={item.title + i} />
        ))}
      </CardsContainer>
    </>
  );
};

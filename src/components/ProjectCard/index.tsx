import { useEffect, useState } from 'react';

import { Card, IconSpan, Image, LinkSpan, ProjectInfo } from './styles';
import { ProjectData } from '../../hooks/useProjects';

export const ProjectCard = (props: { data: ProjectData }) => {
  const [loaded, setLoaded] = useState(false);
  const { data } = props;
  const { color, Icon, tool } = data.powered;

  const onImageLoad = () => setLoaded(true);
  useEffect(() => {
    console.log(loaded);
  }, [loaded]);

  return (
    <Card loaded={loaded}>
      <Image
        height={'200px'}
        width="200px"
        src={data.imageLink}
        alt="game station"
        onLoad={() => onImageLoad()}
      />
      <ProjectInfo>
        <h3> {data.title} </h3>
        <p> {data.description} </p>
        <IconSpan color={color}>
          {`Powered by: ${tool}`}
          {<Icon />}
        </IconSpan>
        {data.link && (
          <LinkSpan>
            {'Link: '}
            <a href={data.link} target="_blank" rel="noreferrer">
              {data.link}
            </a>
          </LinkSpan>
        )}
        <LinkSpan>
          {'Repositorie: '}
          <a href={data.link} target="_blank" rel="noreferrer">
            {data.repositorie}
          </a>
        </LinkSpan>
      </ProjectInfo>
    </Card>
  );
};

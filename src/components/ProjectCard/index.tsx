import { useState } from 'react';

import { Loader } from '../Loader';
import { ProjectData } from '../../hooks/useProjects';
import { useImageLoad } from '../../hooks/useImageLoad';
import {
  Card,
  IconSpan,
  Image,
  LinkSpan,
  Loading,
  ProjectInfo,
} from './styles';
import { useLinkClick } from '../../hooks/useLinkClick';

export const ProjectCard = (props: { data: ProjectData }) => {
  const { data } = props;
  const { color, Icon, tool } = data.powered;
  const { img, loaded } = useImageLoad(data.imageLink);
  const handleClick = useLinkClick();

  return (
    <>
      {!loaded && (
        <Loading>
          <Loader />
        </Loading>
      )}
      <Card loaded={loaded}>
        <Image height={'200px'} width="200px" src={img} alt="game station" />
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
              <a
                onClick={(e) => handleClick(e)}
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                {data.link}
              </a>
            </LinkSpan>
          )}
          <LinkSpan>
            {'Repositorie: '}
            <a
              onClick={(e) => handleClick(e)}
              href={data.repositorie}
              target="_blank"
              rel="noreferrer"
            >
              {data.repositorie}
            </a>
          </LinkSpan>
        </ProjectInfo>
      </Card>
    </>
  );
};

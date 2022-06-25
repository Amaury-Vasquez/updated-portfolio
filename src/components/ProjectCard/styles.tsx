import styled from 'styled-components';

import { fadeIn } from '../../styles/animation';

export const Card = styled.div<{ loaded: boolean }>`
  display: ${(props) => (props.loaded ? 'grid' : 'none')};
  ${fadeIn()};
  width: 100%;
  min-height: 200px;
  height: auto;
  grid-template-columns: 1fr 3fr;
  padding: 30px;
  border: 1px solid var(--gray);
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  color: var(--gray-text);

  &:hover {
    box-shadow: var(--shadow);
    opacity: 0.8;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    padding: 10px 5px;
    border: none;
    box-shadow: var(--shadow);
  }
`;

export const IconSpan = styled.span<{ color: string }>`
  & > svg {
    margin-left: 5px;
    color: ${(props) => props.color};
  }
`;

export const Image = styled.img`
  box-sizing: border-box;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  justify-self: center;
`;

export const LinkSpan = styled.span`
  font-style: italic;
  & > a {
    color: var(--blue);
  }
`;

export const ProjectInfo = styled.article`
  height: 100%;
  text-align: left;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  /* border: 1px solid black; */
  padding: 0 30px;
  text-align: center;
  line-height: 2rem;

  & > h3 {
    text-align: center;
    font-weight: 400;
    font-size: 1.1rem;
  }

  & > p,
  span {
    font-weight: 300;
    font-size: 1rem;
  }

  @media screen and (max-width: 500px) {
    padding: 0 5px;
  }
`;

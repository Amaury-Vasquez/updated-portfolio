import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';
import { fadeIn } from '../../styles/animation';

export const Card = styled.div<{ loaded: boolean }>`
  ${fadeIn()};
  display: ${(props) => (props.loaded ? 'grid' : 'none')};
  width: 100%;
  min-height: 200px;
  height: auto;
  border: 1px solid var(--gray);
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  color: var(--gray-text);

  &:hover,
  :focus {
    outline: none;
    box-shadow: var(--shadow);
    opacity: 0.8;
  }

  @media (min-width: ${DeviceSize.laptop}) {
    grid-template-columns: 1fr 3fr;
    padding: 30px;
  }

  @media (max-width: ${DeviceSize.tablet}) and (min-width: ${DeviceSize.smallTablet}) {
    grid-template-columns: 1fr 2fr;
    padding: 10px;
  }

  @media (max-width: ${DeviceSize.smallTablet}) and (min-width: ${DeviceSize.mobile}) {
    padding: 10px;
  }

  @media (max-width: ${DeviceSize.mobile}) {
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
    &:focus {
      outline: none;
      border-bottom: 1px solid var(--blue);
      opacity: 0.9;
      padding: 0 4px;
      border-radius: 3px;
    }
    color: var(--blue);
  }
`;

export const Loading = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  line-height: var(--line-height);

  & > h3 {
    text-align: center;
    font-weight: 500;
    font-size: 1.1rem;
  }

  & > p,
  span {
    font-weight: 300;
    font-size: 1rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    padding: 5px;
  }
`;

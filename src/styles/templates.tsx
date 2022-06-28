import styled from 'styled-components';

import { fadeIn } from './animation';
import { DeviceSize } from '../DeviceSize';

export const Article = styled.article`
  width: 100%;
  height: auto;
  line-height: var(--line-height);
  color: var(--gray-text);
  text-align: center;

  & > p {
    font-size: 1.1rem;
    font-weight: 300;
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    margin-top: 10px;
  }
`;

export const BoldText = styled.h4`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Page = styled.div`
  min-height: 100vh;
  height: auto;
  margin: 0 auto;

  @media (min-width: ${DeviceSize.laptop}) {
    width: 1024px;
    max-width: 1024px;
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    width: 100vw;
  }
`;

export const TextContent = styled.div`
  ${fadeIn()};
  margin: 0 auto;
  height: auto;
  background: var(--white-rgba);
  color: var(--gray-text);
  border-radius: 5px;
  text-align: center;
  line-height: var(--line-height);

  @media (min-width: ${DeviceSize.laptop}) {
    width: 98%;
    padding: 30px 50px;
    margin-top: 30px;
  }

  @media (max-width: ${DeviceSize.tablet}) and (min-width: ${DeviceSize.mobile}) {
    padding: 40px 50px;
    min-height: 90vh;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    padding: 25px 20px;
  }
`;

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

  @media (${DeviceSize.mobile}) {
    margin-top: 20px;
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

  @media (${DeviceSize.laptop}) {
    width: 1024px;
    max-width: 1024px;
  }

  @media (${DeviceSize.mobile}) {
    width: 100vw;
  }
`;

export const TextContent = styled.div`
  ${fadeIn()};
  margin: 0 auto;
  height: auto;
  background: rgba(200, 200, 200, 0.1);
  color: var(--gray-text);
  border-radius: 5px;
  text-align: center;
  line-height: var(--line-height);

  @media (${DeviceSize.laptop}) {
    width: 98%;
    padding: 30px 50px;
    margin-top: 30px;
  }

  @media (${DeviceSize.mobile}) {
    width: 100%;
    padding: 20px 20px;
  }
`;

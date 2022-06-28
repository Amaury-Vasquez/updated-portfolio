import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';

export const Hello = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  & > svg {
    color: gold;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${DeviceSize.tablet}) {
    display: block;
    & > article:nth-child(1) {
      margin-bottom: 30px;
    }
  }
`;

export const Text = styled.span`
  font-size: 1rem;
  font-weight: 300;
`;

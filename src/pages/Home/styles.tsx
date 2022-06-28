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

  @media (${DeviceSize.mobile}) {
    display: block;
  }
`;

export const Text = styled.span`
  font-size: 1rem;
  font-weight: 300;
`;

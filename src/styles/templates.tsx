import styled from 'styled-components';

import { DeviceSize } from '../DeviceSize';

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

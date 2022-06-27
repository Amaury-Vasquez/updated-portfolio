import styled from 'styled-components';

import { DeviceSize } from '../DeviceSize';

export const Page = styled.div`
  min-height: 100vh;
  height: auto;
  margin: 0 auto;

  @media (min-width: ${DeviceSize.laptop}) {
    width: 1024px;
    max-width: 1024px;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100vw;
  }
`;

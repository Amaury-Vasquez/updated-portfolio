import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';

export const Screen = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${DeviceSize.laptop}) {
    height: 500px;
  }

  @media (max-width: ${DeviceSize.tablet}) {
    height: 60vh;
  }
`;

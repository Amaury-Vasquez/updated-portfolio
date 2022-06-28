import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';

export const InfoSection = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (${DeviceSize.laptop}) {
    display: grid;
    height: auto;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Quote = styled.p`
  font-style: italic;
`;

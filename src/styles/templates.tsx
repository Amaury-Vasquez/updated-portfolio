import styled from 'styled-components';

import { fadeIn } from './animation';

export const Page = styled.div`
  ${fadeIn()};
  min-height: 100vh;
  height: auto;
  width: 1024px;
  max-width: 1024px;
  margin: 0 auto;
`;

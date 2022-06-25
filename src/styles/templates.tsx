import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  height: auto;
  width: 1024px;
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

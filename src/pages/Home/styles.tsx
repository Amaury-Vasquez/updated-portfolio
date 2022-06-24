import styled from 'styled-components';

import { fadeIn } from '../../styles/animation';

export const Greeting = styled.div`
  ${fadeIn()};
  margin-top: 30px;
  width: 100%;
  padding: 30px 50px;
  height: auto;
  background: rgba(200, 200, 200, 0.1);
  color: var(--gray-text);
  border-radius: 3px;
  text-align: center;
  line-height: 2rem;
`;

export const Hello = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  & > svg {
    color: gold;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Section = styled.article`
  width: 100%;
  height: auto;
  margin-top: 50px;

  & > p {
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
    color: var(--gray-text);
  }
`;

export const Text = styled.span`
  font-size: 1rem;
  font-weight: 300;
`;

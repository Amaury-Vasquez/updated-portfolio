import styled, { css, keyframes } from 'styled-components';

const placeHolderKeyframes = keyframes`
  from {
    background-position: -800px 0;
  }
  to {
    background-position: 800px 0;
  }
`;

const skeleton = ({ time = '2s' } = {}) => css`
  animation-duration: ${time};
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${placeHolderKeyframes};
`;

//Height and width is expected to be given by the father
export const Skeleton = styled.div`
  padding: 10px;
  /* background-color: var(--gray); */
`;

export const Animated = styled.div`
  ${skeleton({ time: '5s' })}
  border-radius: inherit;
  background: linear-gradient(
    to right,
    #ffffff 8%,
    var(--white-rgba) 18%,
    #ffffff 33%
  );
  background-size: 800px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    color: var(--gray-text);
    font-size: 1.2rem;
  }
`;

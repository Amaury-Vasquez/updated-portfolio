import { Link as Anchor } from 'react-router-dom';
import styled from 'styled-components';

import { fadeIn } from '../../styles/animation';

export const Head = styled.header`
  ${fadeIn()};
  margin-top: 30px;
  height: 180px;
  width: 100%;
  padding: 25px 15px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(10, 1fr);
  grid-column-gap: 30px;
  justify-content: center;
  text-align: left;
  align-items: center;
  border-radius: 5px;
  color: var(--gray-text);
  border-bottom: 1px solid var(--gray);

  &:hover {
    box-shadow: var(--shadow);
    border-bottom: none;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    height: 140px;
    margin-top: 0;
    grid-column-gap: 0px;
    box-sizing: border-box;
  }
`;

export const Image = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 100%;
  grid-row-start: 1;
  grid-row-end: 3;
  @media screen and (max-width: 500px) {
    grid-row-end: 2;
    height: 60px;
    width: 60px;
  }
`;

export const Link = styled(Anchor)<{ fill: number }>`
  color: var(--gray-text);
  font-weight: 300;
  text-transform: capitalize;
  padding: 10px 30px;
  transition: transform 0.2s;
  ${(props) => props.fill === 1 && 'color: var(--blue)'};

  &:hover {
    color: var(--blue);
    transform: scale(1.1);
  }
`;

export const Name = styled(Anchor)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: capitalize;
  color: var(--gray-text);
  transition: transform 0.2s;
  grid-column-start: 3;
  grid-column-end: 10;
  border-bottom: 1px solid var(--gray);
  height: 100%;

  &:hover {
    color: var(--blue);
    transform: scale(1.1);
  }
  @media screen and (max-width: 500px) {
    border: none;
    grid-column-start: 2;
    grid-column-end: 5;
  }
`;

export const Nav = styled.nav`
  grid-column-start: 3;
  grid-column-end: 10;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 5;
    margin-top: 10px;
  }
`;

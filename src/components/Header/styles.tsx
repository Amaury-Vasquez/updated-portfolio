import { Link as Anchor } from 'react-router-dom';
import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';
import { fadeIn } from '../../styles/animation';

export const Head = styled.header`
  ${fadeIn()};
  display: grid;
  justify-content: center;
  text-align: left;
  align-items: center;
  border-radius: 5px;
  color: var(--gray-text);
  border-bottom: 1px solid var(--gray);
  grid-template-rows: 1fr 1fr;

  &:hover,
  :focus {
    box-shadow: var(--shadow);
    border-bottom: none;
  }

  @media (${DeviceSize.laptop}) {
    width: 100%;
    margin-top: 30px;
    height: auto;
    padding: 20px 15px;
    grid-template-columns: repeat(10, 1fr);
    grid-column-gap: 30px;
  }

  @media (${DeviceSize.mobile}) {
    width: 100vw;
    grid-template-columns: repeat(4, 1fr);
    height: 140px;
    grid-column-gap: 0px;
    padding: 25px 15px;
  }
`;

export const Image = styled.img`
  border-radius: 100%;
  grid-row-start: 1;
  grid-row-end: 3;

  @media (${DeviceSize.laptop}) {
    height: 100px;
    width: 100px;
  }

  @media (${DeviceSize.mobile}) {
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

  &:hover,
  :focus {
    outline: none;
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

  &:hover,
  :focus {
    outline: none;
    color: var(--blue);
    transform: scale(1.1);
  }

  @media (${DeviceSize.mobile}) {
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

  @media (${DeviceSize.laptop}) {
    align-items: flex-end;
  }

  @media (${DeviceSize.mobile}) {
    grid-column-start: 1;
    grid-column-end: 5;
    margin-top: 10px;
  }
`;

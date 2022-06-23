import styled from 'styled-components';

export const Head = styled.header`
  margin-top: 30px;
  min-height: 150px;
  height: auto;
  width: 100%;
  padding: 30px var(--padding);
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 9fr;
  grid-gap: 30px;
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
`;

export const Image = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 100%;
  grid-row-start: 1;
  grid-row-end: 3;
`;

export const Name = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: capitalize;
  text-align: center;
  & > a {
    color: var(--gray-text);
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;

  & > a {
    color: var(--gray-text);
    font-weight: 300;
    text-transform: capitalize;

    &:hover {
    }
  }
`;

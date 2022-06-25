import styled from 'styled-components';

export const CardsContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px;
  display: grid;
  grid-gap: 30px;
  & > :last-child {
    margin-bottom: 20px;
  }
`;

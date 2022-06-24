import styled from 'styled-components';

export const Text = styled.span<{ color?: string }>`
  font-size: 1rem;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    ${(props) => (props.color ? `color: ${props.color}` : '')};
    margin-left: 10px;
  }
`;

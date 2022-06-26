import styled from 'styled-components';

export const ContactInfo = styled.div`
  width: 98%;
  height: auto;
  padding: 50px 20%;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 3px;

  &:hover {
    box-shadow: var(--shadow);
  }

  & > p {
    text-align: center;
    line-height: 2rem;
    font-size: 1rem;
    color: var(--gray-text);
  }
`;

export const Email = styled.p`
  font-weight: 500;
  font-style: italic;
`;

export const Icons = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  height: auto;
`;

export const Link = styled.a<{ color: string }>`
  font-size: 1.6rem;

  & > svg {
    color: ${(props) => props.color};
    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Message = styled.p`
  font-weight: 300;
`;

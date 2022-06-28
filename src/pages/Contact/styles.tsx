import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';

export const ContactInfo = styled.div`
  height: auto;
  margin: 0 auto;
  border-radius: 3px;

  & > p {
    text-align: center;
    line-height: 2rem;
    font-size: 1rem;
    color: var(--gray-text);
  }

  @media (min-width: ${DeviceSize.laptop}) {
    margin-top: 30px;
    width: 98%;
    padding: 50px 20%;
  }

  @media (max-width: ${DeviceSize.tablet}) and (min-width: ${DeviceSize.smallTablet}) {
    /* margin-top: 200px; */
    padding: 100px 150px;
  }

  @media (max-width: ${DeviceSize.smallTablet}) and (min-width: ${DeviceSize.mobile}) {
    padding: 50px;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    padding: 30px;
    margin-top: 50px;
    & p:nth-child(3) {
      margin-top: 20px;
    }
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
  }

  &:hover,
  :focus {
    outline: none;
    opacity: 0.5;
  }
`;

export const Message = styled.p`
  font-weight: 300;
`;

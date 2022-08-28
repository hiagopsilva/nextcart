import styled from 'styled-components';

type PropsButton = {
  withoutBackground?: boolean
}

export const Wrapper = styled.button<PropsButton>`
  width: 12.31rem;
  height: 3.43rem;

  border-radius: 8px;
  border: none;
  border: ${props => props.withoutBackground ? '2px solid #50E485' : 'none'};

  background-color: ${props => props.withoutBackground ? 'transparent' : '#50E485'};

  a {
    color: #fff;
    font-weight: 700;
    font-size: 1.10rem;
  }

  &:hover {
    filter: ${props => props.withoutBackground ? 'brightness(1)' : 'brightness(0.8)'}
  }
`;

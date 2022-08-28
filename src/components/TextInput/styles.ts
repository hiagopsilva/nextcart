import styled from 'styled-components';

type PropsWrapperInput = {
  small: boolean;
}

export const WrapperInput = styled.div<PropsWrapperInput>`
  width: ${props => props.small ? '18.75rem' : '100%'};

  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 2rem;
  }
`;

export const Label = styled.a`
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;

  margin-bottom: 0.50rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.62rem;
  border-radius: 8px;
  border: none;

  padding: 0 8px;  
`;


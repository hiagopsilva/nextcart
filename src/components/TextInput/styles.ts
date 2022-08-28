import styled from 'styled-components';

type PropsWrapperInput = {
  small: boolean;
}

export const WrapperInput = styled.div<PropsWrapperInput>`
  width: ${props => props.small ? '18.75rem' : '100%'};

  display: flex;
  flex-direction: column;
`;

export const Label = styled.a`
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;

  margin-bottom: 0.50rem;
`;

export const Input = styled.input`
  height: 3.62rem;
  width: ${props => props.type === 'date' ? '90%' : '100%'};

  border: none;

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const ContentInput = styled.div`
  width: 100%;
  height: 3.62rem;
  border-radius: 8px;
  border: none;

  padding: 0 8px;  
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconDate = styled.img.attrs({
  src: './calendar.svg'
})``;


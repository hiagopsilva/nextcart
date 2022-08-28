import styled from 'styled-components';
import Button from '../Button';

export const Wrapper = styled.div`
  width: 40.25rem;

  display: flex;
  align-items: center;
`;

export const WrapperText = styled.div`
  display: flex;
  align-items: center;

  span.title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
  }

  span.content-text {
    font-size: 1.5rem;
    font-weight: 200;
    color: #fff;

    margin-left: 10px;
  }
`;

export const ButtonStyled = styled(Button)`
  margin-left: auto;
`;


import styled from 'styled-components';
import SubHeader from '../../components/SubHeader';
import TextInput from '../../components/TextInput';

export const Wrapper = styled.div`
  width: 100%;

  background: #2F3A58;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 6rem;
`;

export const WrapperForm = styled.div`
  width: 40.25rem;
  
  div.line {
    display:flex;
    justify-content:space-between;
    align-items: center;
  }
`;


export const TextInputStyled = styled(TextInput)`
  margin-top: 2rem;
`;

export const WrapperButtons = styled.div`
  width: 100%;

  margin-top: 2.37rem;

  display: flex;
  justify-content: flex-end;

  button + button {
    margin-left: 1.68rem;
  }
`;

export const SubHeaderStyled = styled(SubHeader)`
  margin: 5.18rem 0 1rem;

  width: 40.25rem;
  background-color: red;
`;
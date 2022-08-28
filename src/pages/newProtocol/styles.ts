import styled from 'styled-components';
import Avatar from '../../components/Avatar';
import SubHeader from '../../components/SubHeader';
import TextInput from '../../components/TextInput';

type PropsAvatar = {
  active?: boolean
}

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

export const Text = styled.a`
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
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
`;

export const WrapperAvatars = styled.div`
  width: 100%;
  height: 7rem;
  margin-top: 2rem;

  div.content-avatars {
    display: flex;
  
    justify-content: space-between;
    align-items: center;

    margin-top: 0.5rem;
  }
`;

export const AvatarStyled = styled(Avatar)`
  cursor: pointer;

  &:hover {
    border: 5px solid #ffff;
  }

  &.active {
    border: 5px solid #ffff;
  }
`;

export default Wrapper;
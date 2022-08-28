import styled from 'styled-components';
import SubHeader from '../components/SubHeader';

export const Wrapper = styled.div`
  background: #2F3A58;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 5rem;
`;

export const SubHeaderStyled = styled(SubHeader)`
  width: 35rem;
  margin: 3.75rem 0 1rem;
`;

export const Content = styled.div`
  width: 35rem;

  margin-top: 2rem;
`;

export default Wrapper;
import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  background-color: rgba(0,0,0,0.2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingComponent = styled(ReactLoading).attrs(props => ({
  color: '#fff',
}))`
  width: 100%;
`;

export const Title = styled.span`
  margin-top: 1.25rem;
  font-size: 1.25rem;
  font-weight: bold;

  color: #fff
`;

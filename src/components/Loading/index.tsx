import React from 'react';
import { Container, LoadingComponent, Title } from './styles';

const Loading: React.FC = ({...rest}) => {
  return (
    <Container {...rest}>
      <LoadingComponent type="spin" />
      <Title>Carregando...</Title>
    </Container>
  )
}

export default Loading;
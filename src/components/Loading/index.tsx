import React from 'react';
import { Container, LoadingComponent, Title } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <LoadingComponent type="spin" />
      <Title>Carregando...</Title>
    </Container>
  )
}

export default Loading;
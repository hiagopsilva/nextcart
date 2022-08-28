import React from 'react';

import { Arrow, Name, TextHeader, Wrapper } from './styles';

export default function ModalInfo() {
  return (
    <Wrapper className="modal">
      <TextHeader>Informações adicionais</TextHeader>
      <Name>Hiago Prates</Name>
      <Name>123456789</Name>
      <Arrow />
    </Wrapper>
  )
}

import React from 'react';

import { Arrow, Name, TextHeader, Wrapper } from './styles';

type Props = {
  apresentante: string
  typeProtocol: string
}

export default function ModalInfo({apresentante ,typeProtocol}: Props) {
  return (
    <Wrapper className="modal">
      <TextHeader>Informações adicionais</TextHeader>
      <Name>{apresentante}</Name>
      <Name>{typeProtocol}</Name>
      <Arrow />
    </Wrapper>
  )
}

import React, { FC } from 'react';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

import { TextInputStyled, Wrapper, WrapperButtons, WrapperForm } from './styles'; 

export default function NewProtocol() {
  return (
    <Wrapper>
      <WrapperForm>
        <TextInputStyled label="Protocolo"  />

        <div className="line">
          <TextInputStyled label="Data de Entrada" small date  />
          <TextInputStyled label="Data de Vencimento" small date />
        </div>

        <TextInputStyled label="Apresentante"  />
        <TextInputStyled label="Tipo do Protocolo"  />

        <WrapperButtons>
          <Button label="Cancelar" withoutBackground />
          <Button label="Salvar" />
        </WrapperButtons>
      </WrapperForm>
    </Wrapper>
  )
};


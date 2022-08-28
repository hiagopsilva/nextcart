import React, { FC } from 'react';
import Button from '../../components/Button';
import { SubHeaderStyled } from '../styles';

import { TextInputStyled, Wrapper, WrapperButtons, WrapperForm } from './styles'; 

export default function NewProtocol() {
  return (
    <Wrapper>
      <SubHeaderStyled title="Formulário" text="novos pedidos e edição" />
      
      <WrapperForm>
        <TextInputStyled label="Protocolo"  />

        <div className="line">
          <TextInputStyled label="Data de Entrada" small date  />
          <TextInputStyled label="Data de Vencimento" small date />
        </div>

        <TextInputStyled label="Apresentante"  />
        <TextInputStyled label="Tipo do Protocolo"  />

        <WrapperButtons>
          <Button label="Cancelar" withoutBackground onClick={() => window.location.href = './'} />
          <Button label="Salvar" />
        </WrapperButtons>
      </WrapperForm>
    </Wrapper>
  )
};


import React, { FC } from 'react';
import Button from '../../components/Button';
import { SubHeaderStyled } from '../styles';
import Router from 'next/router';

import { AvatarStyled, Text, TextInputStyled, Wrapper, WrapperAvatars, WrapperButtons, WrapperForm } from './styles'; 
import { FormikProps, useFormikContext } from 'formik';
import Loading from '../../components/Loading';
import { Avatars } from '../../utils/enum';

type Props = {
  loading: boolean;
  avatar: string;
  handleSelectAvatar: (avatar: string) => void;
}

export default function NewProtocol({loading, handleSelectAvatar, avatar}: Props) {
  const {
    values,
    submitForm,
    handleChange,
    errors,
    touched,
  }: FormikProps<Protocol.Create> = useFormikContext();

  return (
    <Wrapper>
      <SubHeaderStyled title="Formulário" text="novos pedidos e edição" />

      {loading && (<Loading />)}
      
      <WrapperForm>
        <TextInputStyled 
          label="Protocolo"  
          value={values.protocolo}
          onChange={handleChange('protocolo')}
          error={touched.protocolo ? !!errors.protocolo : false}
          name="protocolo"
        />

        <div className="line">
          <TextInputStyled 
            label="Data de Entrada" 
            small 
            date
            value={values.entrada}
            onChange={handleChange('entrada')}
            error={touched.entrada ? !!errors.entrada : false}
            name="entrada"

          />

          <TextInputStyled 
            label="Data de Vencimento" 
            small 
            date
            value={values.vencimento}
            onChange={handleChange('vencimento')}
            error={touched.vencimento ? !!errors.vencimento : false}
            name="vencimento"
          />
        </div>

        <TextInputStyled 
          label="Apresentante"
          value={values.apresentante}
          onChange={handleChange('apresentante')}
          error={touched.apresentante ? !!errors.apresentante : false}
          name="apresentante"
        />

        <TextInputStyled 
          label="Tipo do Protocolo" 
          value={values.tipo}
          onChange={handleChange('tipo')}
          error={touched.tipo ? !!errors.tipo : false}
          name="tipo"
        />

        <WrapperAvatars>
          <Text>Selecione o avatar</Text>
          <div className="content-avatars">
            {Avatars.map((item: string) => (
              <AvatarStyled key={item} src={item} onClick={() => handleSelectAvatar(item)} className={avatar === item ? 'active' : ''} />
            ))}
          </div>
        </WrapperAvatars>

        <WrapperButtons>
          <Button 
            label="Cancelar" 
            withoutBackground 
            onClick={() => Router.back()}
          />
            
          <Button 
            label="Salvar" 
            onClick={submitForm}
            type="submit"
          />
        </WrapperButtons>
      </WrapperForm>
    </Wrapper>
  )
};


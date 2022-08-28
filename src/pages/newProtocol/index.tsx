import React, { useState } from 'react';

import { Formik } from 'formik';
import { initialValues } from './form';
import NewProtocol from './newProtocol';
import ProtocolAPI from '../../services/api';
import Router from 'next/router';
import { transformDateToUnix } from '../../utils/helpers';

export default function NewProtocolContainer() {
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState('');

  const submitFormValues = async (values: Protocol.Create) => {
    setLoading(true)
    await ProtocolAPI.create({
      protocolo: values.protocolo,
      tipo: values.tipo,
      entrada: transformDateToUnix(values.entrada),
      vencimento: transformDateToUnix(values.vencimento),
      apresentante: values.apresentante
    })

    Router.push('/')
    setLoading(false)
  }

  const handleSelectAvatar = (avatar: string) => {
    setAvatar(avatar);
  }

  return (
    <Formik 
      initialValues={initialValues}
      // validationSchema={validationForm}
      onSubmit={submitFormValues}
    >
      <NewProtocol 
        loading={loading}
        avatar={avatar}
        handleSelectAvatar={handleSelectAvatar}
      />
    </Formik>
  )
};


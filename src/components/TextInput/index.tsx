import React from 'react';

import { Input, Label, WrapperInput } from './styles';

type Props = {
  label: string;
  small?: boolean
}

export default function TextInput({label, small}: Props) {
  return (
    <WrapperInput small={small}>
      <Label>{label}</Label>
      <Input />
    </WrapperInput>
  )
};


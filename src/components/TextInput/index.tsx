import React from 'react';

import { ContentInput, IconDate, Input, Label, WrapperInput } from './styles';

type Props = {
  label: string;
  small?: boolean;
  date?: boolean;
}

export default function TextInput({label, small, date, ...rest}: Props) {
  return (
    <WrapperInput small={small} {...rest}>
      <Label>{label}</Label>

      <ContentInput>
        <Input type={date && 'date'} />
        {date && <IconDate />}
      </ContentInput>
    </WrapperInput>
  )
};


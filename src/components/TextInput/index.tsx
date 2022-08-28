import React from 'react';

import { ContentInput, IconDate, Input, Label, WrapperInput } from './styles';

type Props = {
  label: string;
  small?: boolean;
  date?: boolean;
  value: any;
  onChange: (values: any) => void
  error: boolean;
  name: string;

}

export default function TextInput({
  label, 
  small, 
  date, 
  value, 
  onChange, 
  error, 
  name,
  ...rest
}: Props) {
  return (
    <WrapperInput small={small} {...rest}>
      <Label htmlFor={label} name={name}>{label}</Label>

      <ContentInput>
        <Input type={date && 'date'} value={value} onChange={onChange} name={name} />
        {date && <IconDate />}
      </ContentInput>
    </WrapperInput>
  )
};


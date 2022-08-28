import React from 'react';

import { Wrapper } from './styles'; 

type Props = {
  label?: string;
  withoutBackground?: boolean;
  onClick?: (values: any) => void;
  type?: string
};


export default function Button({label, withoutBackground, onClick, type, ...rest}: Props) {
  return (
    <Wrapper withoutBackground={withoutBackground} onClick={onClick} type={type} {...rest}>
      <a>{label}</a>
    </Wrapper>
  )
};

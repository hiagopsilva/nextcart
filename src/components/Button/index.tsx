import React from 'react';

import { Wrapper } from './styles'; 

type Props = {
  label?: string;
  withoutBackground?: boolean;
  onClick?: () => void;
};


export default function Button({label, withoutBackground, onClick, ...rest}: Props) {
  return (
    <Wrapper withoutBackground={withoutBackground} onClick={onClick} {...rest}>
      <a>{label}</a>
    </Wrapper>
  )
};

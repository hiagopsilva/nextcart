import React from 'react';

import { Wrapper } from './styles'; 

type Props = {
  label?: string;
  withoutBackground?: boolean;
};

export default function Button({label, withoutBackground, ...rest}: Props) {
  return (
    <Wrapper withoutBackground={withoutBackground} {...rest}>
      <a>{label}</a>
    </Wrapper>
  )
};

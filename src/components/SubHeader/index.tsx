import React from 'react';
import {isEmpty} from 'lodash'

import { ButtonStyled, Text, Wrapper } from './styles'; 

type Props = {
  title: string;
  text: string;
  labelButton?: string;
};

export default function SubHeader({title, text, labelButton, ...rest}: Props) {
  return (
    <Wrapper {...rest}>
      <Text>
        <span className="title">{title} </span>
        <span className="content-text"> | {text}</span>
      </Text>

    {!isEmpty(labelButton) && (
      <ButtonStyled label={labelButton} />
    )}
    </Wrapper>
  )
};

 SubHeader;

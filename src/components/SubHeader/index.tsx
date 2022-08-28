import React from 'react';
import {isEmpty} from 'lodash'

import { ButtonStyled, Text, Wrapper } from './styles'; 

type Props = {
  title: string;
  text: string;
  labelButton?: string;
  onClick?: () => void;
};

export default function SubHeader({title, text, labelButton, onClick, ...rest}: Props) {
  return (
    <Wrapper {...rest}>
      <Text>
        <span className="title">{title} </span>
        <span className="content-text"> | {text}</span>
      </Text>

    {!isEmpty(labelButton) && (
      <ButtonStyled label={labelButton} onClick={onClick} />
    )}
    </Wrapper>
  )
};

 SubHeader;

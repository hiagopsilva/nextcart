import React, { FC } from 'react';
import Button from '../Button';
import {isEmpty} from 'lodash'

import { Text, Wrapper } from './styles'; 

type Props = {
  title: string;
  text: string;
  labelButton?: string;
};

export default function SubHeader({title, text, labelButton}: Props) {
  return (
    <Wrapper>
      <Text>
        <span className="title">{title} </span>
        <span className="content-text"> | {text}</span>
      </Text>

    {!isEmpty(labelButton) && (
      <Button label={labelButton} />
    )}
    </Wrapper>
  )
};

 SubHeader;

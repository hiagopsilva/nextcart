import React, { FC } from 'react';

import { Avatar, ContentCard, IconUpdate, TextCard, TitleCard, Wrapper } from './styles'; 

type Props = {
  name: string;
  inputDate: string;
  finalDate: string;
  avatar: string;
};

const Card: FC<Props> = ({name, inputDate, finalDate, avatar}) => {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <ContentCard>
        <TitleCard>{name}</TitleCard>
        <TextCard>{inputDate}</TextCard>
        <TextCard>{finalDate}</TextCard>
      </ContentCard>
      <IconUpdate className="logo" />
    </Wrapper>
  )
};

export default Card;

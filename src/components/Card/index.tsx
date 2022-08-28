import React, { FC } from 'react';
import ModalInfo from '../ModalInfo';

import { Arrow, Avatar, ContentCard, IconUpdate, Name, TextCard, TextHeader, TitleCard, Wrapper, WrapperModal } from './styles'; 

type Props = {
  name: string;
  inputDate: number;
  finalDate: number;
  avatar: string;
  apresentante: string;
  typeProtocol: string;
};

const Card: FC<Props> = ({name, apresentante, typeProtocol, inputDate, finalDate, avatar}) => {
  return (
    <Wrapper>
      <ModalInfo apresentante={apresentante} typeProtocol={typeProtocol} />
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

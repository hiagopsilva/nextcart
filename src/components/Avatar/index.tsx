import React from 'react';

import { Container } from './styles';

type Props = {
  src: string
}

const Avatar: React.FC<Props> = ({src}) => {
  return <Container src={src} />;
}

export default Avatar;
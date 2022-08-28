import React from 'react';

import { Container } from './styles';

type Props = {
  src: string;
  onClick: (value?: any) => void;
  className?: string;
}

const Avatar: React.FC<Props> = ({src, onClick, className, ...rest}) => {
  return <Container src={src} {...rest} onClick={onClick} className={className} />;
}

export default Avatar;
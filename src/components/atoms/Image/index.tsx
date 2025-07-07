import React from 'react';
import * as S from './styles';

interface ImageProps {
  src: string;
  alt: string;
  variant?: 'card' | 'preview';
}

const Image: React.FC<ImageProps> = ({ src, alt, variant = 'card' }) => {
  return (
    <S.Image variant={variant} src={src} alt={alt} />
  );
};

export default Image;

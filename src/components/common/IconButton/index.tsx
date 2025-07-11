import React from 'react';
import * as S from './styles';
import { type ClickHandler } from '@/components';

interface IconButtonProps {
  children: React.ReactNode;
  onClick: ClickHandler;
}

const IconButton = ({children, onClick}: IconButtonProps) => {
  return (
    <S.IconButton onClick={onClick}>
      {children}
    </S.IconButton>
  );
};

export default IconButton;


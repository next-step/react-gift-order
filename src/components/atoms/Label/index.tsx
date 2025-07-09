import React from 'react';
import * as S from './styles';

interface LabelProps {
  children: React.ReactNode;
  minWidth?: string;
  variant?: 'regular' | 'bold';
}

const Label = ({ children, minWidth, variant = 'regular' }: LabelProps) => {
  return (
    <S.Label minWidth={minWidth} variant={variant}>
      {children}
    </S.Label>
  );
};

export default Label; 
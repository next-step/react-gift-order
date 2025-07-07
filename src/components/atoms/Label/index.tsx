import React from 'react';
import * as S from './styles';

interface LabelProps {
  children: React.ReactNode;
  minWidth?: string;
  variant?: 'regular' | 'bold';
}

const Label: React.FC<LabelProps> = ({ children, minWidth, variant = 'regular' }) => {
  return (
    <S.Label minWidth={minWidth} variant={variant}>
      {children}
    </S.Label>
  );
};

export default Label; 
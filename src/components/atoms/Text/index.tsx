import React from 'react';
import * as S from './styles';

interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'caption' | 'description';
  style?: React.CSSProperties;
}

const Text = ({ children, variant = 'body', style }: TextProps) => {
  return (
    <S.Text variant={variant} style={style}>
      {children}
    </S.Text>
  );
};

export default Text; 
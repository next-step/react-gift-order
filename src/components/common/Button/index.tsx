import React from 'react';
import * as S from './styles';

interface ButtonProps {
  type?: 'submit';
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  children,
  disabled = false,
  type = 'submit',
}: ButtonProps) => {
  return (
    <S.Button type={type} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button; 
import React from 'react';
import * as S from './styles';

interface ButtonProps {
  type?: 'submit';
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'submit',
  disabled = false,
  children
}) => {
  return (
    <S.Button type={type} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button; 
import React from 'react';
import * as S from './styles';

interface InputProps {
  type?: 'text' | 'number' | 'tel';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  style,
}: InputProps) => {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
    />
  );
};

export default Input; 
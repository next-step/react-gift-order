import React from 'react';
import { type InputChangeHandler } from '@/components';
import * as S from './styles';

interface InputProps {
  type?: 'text' | 'number' | 'tel';
  placeholder?: string;
  value: string;
  onChange: InputChangeHandler;
  style?: React.CSSProperties;
  hasError?: boolean;
}

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  style,
  hasError = false,
}: InputProps) => {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
      hasError={hasError}
    />
  );
};

export default Input; 
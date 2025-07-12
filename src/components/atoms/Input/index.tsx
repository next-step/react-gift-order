import React from 'react';
import * as S from './styles';
import { type InputChangeHandler, type InputBlurHandler } from '../..';

interface InputProps {
  type?: 'text' | 'number' | 'tel' | 'password' | 'email';
  placeholder?: string;
  style?: React.CSSProperties;
  hasError?: boolean;
  name?: string;
  onChange?: InputChangeHandler;
  onBlur?: InputBlurHandler;
  value?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  placeholder,
  style,
  hasError = false,
  name,
  onChange,
  onBlur,
  value,
}, ref) => {
  return (
    <S.Input
      ref={ref}
      type={type}
      placeholder={placeholder}
      style={style}
      hasError={hasError}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
});

Input.displayName = 'Input';

export default Input; 
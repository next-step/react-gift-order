import React from 'react';
import { type InputChangeHandler } from '@/components';
import * as S from './styles';

interface LoginInputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: InputChangeHandler;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string; //hasError삭제 
}

const LoginInputField = ({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error
}: LoginInputFieldProps) => {
  return (
    <S.InputContainer>
      <S.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default LoginInputField;

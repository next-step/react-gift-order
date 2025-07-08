import React from 'react';
import * as S from './styles';

interface LoginInputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string; //hasError삭제 
}

const LoginInputField: React.FC<LoginInputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error
}) => {
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

import React from 'react';
import * as S from './styles';

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  hasError?: boolean;
}

const TextArea = ({ value, onChange, placeholder, hasError = false }: TextAreaProps) => {
  return (
    <S.TextArea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      hasError={hasError}
    />
  );
};

export default TextArea;

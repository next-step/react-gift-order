import React from 'react';
import * as S from './styles';

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea = ({ value, onChange, placeholder }: TextAreaProps) => {
  return (
    <S.TextArea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextArea;

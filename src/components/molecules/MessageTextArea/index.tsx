import React from 'react';
import { TextArea } from '@/components';
import * as S from './styles';

interface MessageTextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
}

const MessageTextArea = ({ value, onChange, placeholder, error }: MessageTextAreaProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <TextArea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          hasError={!!error}
        />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.Wrapper>
    </S.Container>
  );
};

export default MessageTextArea;

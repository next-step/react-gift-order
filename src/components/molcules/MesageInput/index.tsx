import React from 'react';
import TextArea from '@/components/atoms/TextArea';
import * as S from './styles';

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ value, onChange, placeholder, error }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <TextArea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.Wrapper>
    </S.Container>
  );
};

export default MessageInput;

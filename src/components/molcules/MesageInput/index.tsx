import React from 'react';
import TextArea from '@/components/atoms/TextArea';
import * as S from './styles';

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <TextArea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default MessageInput;

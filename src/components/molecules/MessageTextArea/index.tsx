import { TextArea, type TextAreaChangeHandler } from '@/components';
import * as S from './styles';

interface MessageTextAreaProps {
  value: string;
  onChange: TextAreaChangeHandler;
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

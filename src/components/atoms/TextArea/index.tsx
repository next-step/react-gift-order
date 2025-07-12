import * as S from './styles';
import { type TextAreaChangeHandler } from '@/components';

interface TextAreaProps {
  value: string;
  onChange: TextAreaChangeHandler;
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

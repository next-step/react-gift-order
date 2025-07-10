import styled from '@emotion/styled';

interface TextInputBoxProps {
  title?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  marginBottom?: string;
  errorMessage?: string;
}

const TextInputBox = ({
  title,
  placeholder,
  value,
  onChange,
  marginBottom = '16px',
  errorMessage,
}: TextInputBoxProps) => {
  return (
    <Wrapper marginBottom={marginBottom}>
      {title && <Title>{title}</Title>}
      <InputWrapper>
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          hasError={!!errorMessage}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputWrapper>
    </Wrapper>
  );
};

export default TextInputBox;

const Wrapper = styled.div<{ marginBottom: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${({ marginBottom }) => marginBottom};
`;

const Title = styled.label`
  min-width: 70px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.text.default};
  padding-bottom: 4px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea<{ hasError?: boolean }>`
  height: 20px;
  padding: 12px;
  font-size: 14px;
  border-radius: 8px;
  resize: none;
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.color.state.critical : theme.color.border.default)};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.kakaoYellow};
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.color.state.critical};
  font-size: 12px;
  margin-top: 4px;
`;

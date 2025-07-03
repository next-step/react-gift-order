import styled from '@emotion/styled';

interface InputFieldProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
}

const InputField = ({
  type,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
}: InputFieldProps) => {
  return (
    <Wrapper>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        hasError={!!error}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
};

export default InputField;

const Wrapper = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const StyledInput = styled.input<{ hasError: boolean }>`
  border: none;
  border-bottom: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.color.red[500] : theme.color.gray[400]};
  padding: ${({ theme }) => theme.spacing[3]} 0;
  color: ${({ theme }) => theme.color.semantic.text.default};
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.color.semantic.text.sub};
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.color.gray[500]};
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.color.red[500]};
  ${({ theme }) => theme.typography.body.body2Regular};
  margin: 0;
`;

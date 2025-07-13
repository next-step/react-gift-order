import styled from "@emotion/styled";
import FormErrorMessage from "@/pages/LoginPage/components/FormErrorMessage";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  width: 100%;
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  box-sizing: border-box;

  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.status.critical : theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  background-color: ${({ theme }) => theme.colors.background.default};
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  color: ${({ theme }) => theme.colors.text.default};

  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) =>
      hasError
        ? theme.colors.status.critical
        : theme.components.form.focusBorderColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.sub};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.disabled};
    color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
  }
`;

const Input = ({ errorMessage, ...props }: InputProps) => {
  const hasError = !!errorMessage;

  return (
    <InputContainer>
      <StyledInput hasError={hasError} {...props} />
      {errorMessage && <FormErrorMessage errorMessage={errorMessage} />}
    </InputContainer>
  );
};

export default Input;

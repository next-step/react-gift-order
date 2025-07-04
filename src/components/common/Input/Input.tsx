import styled from "@emotion/styled";

const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  background-color: ${({ theme }) => theme.colors.background.default};
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  color: ${({ theme }) => theme.colors.text.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.components.form.focusBorderColor};
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

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <StyledInput {...props} />
);

export default Input;

import styled from '@emotion/styled';

const ErrorText = styled.p`
  ${({ theme }) => theme.typography.label.label2Regular};
  color: ${({ theme }) => theme.color.semantic.critical};
  margin-top: 4px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const InputField = styled.input<{ hasError: boolean }>`
  ${({ theme }) => theme.typography.body.body1Regular};
  width: 100%;
  max-width: 320px;
  padding: 12px;
  border: none;
  border-bottom: 1px solid ${({ theme, hasError }) => hasError ? theme.color.semantic.critical : theme.color.semantic.borderDefault};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray.gray700};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) => hasError ? theme.color.semantic.critical : theme.color.gray.gray700};
  }
`;

export default function Input({ error, ...props }: InputProps) {
  return (
    <>
      <InputField {...props} hasError={!!error} />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
}

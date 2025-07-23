import styled from '@emotion/styled';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | null;
}

export function Input({ error, ...props }: InputProps) {
  return (
    <InputWrapper>
      <StyledInput {...props} min={props.type === 'number' ? 1 : undefined} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 10px 0;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray400};

  &:focus,
  &:focus-visible {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray800};
    outline: none;
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red.red600};
  font-size: 12px;
  margin-top: 4px;
`;

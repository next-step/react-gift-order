import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return <StyledInput {...props} />;
}

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

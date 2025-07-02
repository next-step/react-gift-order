import React from 'react';
import styled from '@emotion/styled';

interface InputProps {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  hasError?: boolean;
}

const Input = ({
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  hasError = false,
}: InputProps) => (
  <Layout>
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      hasError={hasError}
    />
  </Layout>
);

export default Input;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  max-width: 388px;
  width: 100%;
`;

const StyledInput = styled.input<{ hasError: boolean }>`
  padding: 12px 16px;
  border: none;
  border-bottom: 1.2px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.red700 : theme.colors.borderDefault};
  font-size: ${({ theme }) => theme.typography.fontSizes.title2};
  outline: none;

  &:focus {
    border-bottom: 1.2px solid ${({ theme }) => theme.colors.gray700};
  }

  &::placeholder {
    color: #999999;
  }
`;

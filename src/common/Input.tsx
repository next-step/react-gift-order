import React from 'react';
import styled from '@emotion/styled';

interface InputProps {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
}: InputProps) => (
  <Layout>
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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

const StyledInput = styled.input`
  padding: 12px 16px;
  border: none;
  border-bottom: 1.2px solid ${({ theme }) => theme.colors.borderDefault};
  font-size: ${({ theme }) => theme.typography.fontSizes.title2};
  outline: none;

  &:focus {
    border-bottom: 1.2px solid ${({ theme }) => theme.colors.gray700};
  }

  &::placeholder {
    color: #999999;
  }
`;

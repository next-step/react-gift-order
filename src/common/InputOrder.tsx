import React from 'react';
import styled from '@emotion/styled';

type InputOrderProps = {
  label?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
};

const InputOrder = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
}: InputOrderProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasError={!!error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default InputOrder;

const Container = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input<{ hasError: boolean }>`
  width: 95%;
  padding: 12px;
  border: 1px solid ${(props) => (props.hasError ? '#ff4757' : '#ddd')};
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? '#ff4757' : '#fee500')};
  }
`;

const ErrorMessage = styled.p`
  color: #ff4757;
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 0;
`;

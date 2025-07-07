import React from 'react';
import styled from '@emotion/styled';

interface InputOrderProps {
  label: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputOrder: React.FC<InputOrderProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
}) => {
  return (
    <Row>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </Row>
  );
};

export default InputOrder;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
`;

const Label = styled.label`
  width: 80px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: #000;
  }

  &::placeholder {
    color: #bbb;
  }
`;

import React from 'react';
import { Input, Label, Text } from '@/components';
import * as S from './styles';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number' | 'tel';
  description?: string;
  labelMinWidth?: string;
  layout?: 'vertical' | 'horizontal';
  error?: string;
  showError?: boolean;
}

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  description,
  labelMinWidth,
  layout = 'vertical',
  error,
  showError = true,
}: InputFieldProps) => {
  return (
    <S.Container layout={layout}>
      {label && (
        <Label minWidth={labelMinWidth}>
          {label}
        </Label>
      )}
      <S.InputWrapper>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ width: '100%' }}
          hasError={!!error}
        />
      </S.InputWrapper>
      {description && (
        <Text variant="description" style={{ marginLeft: '0.5rem' }}>
          {description}
        </Text>
      )}
      {error && showError && (
        <S.ErrorMessage>
          {error}
        </S.ErrorMessage>
      )}
    </S.Container>
  );
};

export default InputField; 
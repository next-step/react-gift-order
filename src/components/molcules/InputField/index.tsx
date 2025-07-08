import React from 'react';
import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import Text from '@/components/atoms/Text';
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
        />
      </S.InputWrapper>
      {description && (
        <Text variant="description" style={{ marginLeft: '0.5rem' }}>
          {description}
        </Text>
      )}
      {error && (
        <S.ErrorMessage>
          {error}
        </S.ErrorMessage>
      )}
    </S.Container>
  );
};

export default InputField; 
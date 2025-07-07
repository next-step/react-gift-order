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
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  description,
  labelMinWidth,
  layout = 'vertical',
}) => {
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
    </S.Container>
  );
};

export default InputField; 
import React from 'react';
import { Input, Label, Text } from '@/components';
import { type InputChangeHandler, type InputBlurHandler } from '@/components';
import * as S from './styles';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'tel' | 'password' | 'email';
  description?: string;
  labelMinWidth?: string;
  layout?: 'vertical' | 'horizontal';
  error?: string;
  showError?: boolean;
  name?: string;
  onChange?: InputChangeHandler;
  onBlur?: InputBlurHandler;
  value?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(({
  label,
  placeholder,
  type = 'text',
  description,
  labelMinWidth,
  layout = 'vertical',
  error,
  showError = true,
  name,
  onChange,
  onBlur,
  value,
}, ref) => {
  return (
    <S.Container layout={layout}>
      <S.InputRow layout={layout}>
        {label && (
          <Label minWidth={labelMinWidth}>
            {label}
          </Label>
        )}
        <S.InputWrapper>
          <Input
            ref={ref}
            type={type}
            placeholder={placeholder}
            style={{ width: '100%' }}
            hasError={!!error}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        </S.InputWrapper>
      </S.InputRow>
      {description && (
        <Text variant="description" style={{ marginLeft: '0.5rem' }}>
          {description}
        </Text>
      )}
      {error && showError && (
        <S.ErrorMessage layout={layout} labelMinWidth={labelMinWidth}>
          {error}
        </S.ErrorMessage>
      )}
    </S.Container>
  );
});

InputField.displayName = 'InputField';

export default InputField; 
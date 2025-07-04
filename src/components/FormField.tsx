import React from 'react';
import styled from '@emotion/styled';

interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  helpText?: string;
  children: React.ReactNode;
  direction?: 'row' | 'column';
  className?: string;
}

const FieldWrapper = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => (props.direction === 'row' ? 'center' : 'stretch')};
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  min-width: 72px;
  font-size: 15px;
  font-weight: 700;
  color: #222;
  margin-right: 16px;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 13px;
  margin-top: 4px;
`;

const HelpText = styled.div`
  color: #888;
  font-size: 12px;
  margin-top: 4px;
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  error,
  helpText,
  children,
  direction = 'row',
  className,
}) => (
  <FieldWrapper direction={direction} className={className}>
    {label && <Label htmlFor={htmlFor}>{label}</Label>}
    <InputWrapper>
      {children}
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        helpText && <HelpText>{helpText}</HelpText>
      )}
    </InputWrapper>
  </FieldWrapper>
);

export default FormField;

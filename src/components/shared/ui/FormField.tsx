import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  helpText?: string;
  children: React.ReactNode;
  direction?: 'row' | 'column';
  className?: string;
}

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

const FieldWrapper = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => (props.direction === 'row' ? 'center' : 'stretch')};
  margin-bottom: ${theme.spacing.spacing3};
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  min-width: 72px;
  font-size: ${theme.typography.body2Bold.fontSize};
  font-weight: ${theme.typography.body2Bold.fontWeight};
  color: ${theme.colors.textDefault};
  margin-right: ${theme.spacing.spacing4};
`;

const ErrorMessage = styled.div`
  color: ${theme.colors.critical};
  font-size: ${theme.typography.body2Regular.fontSize};
  margin-top: ${theme.spacing.spacing1};
`;

const HelpText = styled.div`
  color: ${theme.colors.textSub};
  font-size: ${theme.typography.label1Regular.fontSize};
  margin-top: ${theme.spacing.spacing1};
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default FormField;

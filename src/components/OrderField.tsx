import styled from '@emotion/styled';
import ErrorMessage from './ErrorMessage';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

const ReceiverTab = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const FieldLabel = styled.label`
  width: ${({ theme }) => theme.spacing.spacing16};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
`;

const FieldInputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  resize: vertical;
  min-height: 100px;
`;

type CommonProps = {
  label: string;
  placeholder?: string;
  error?: string;
};

type InputProps = CommonProps &
  InputHTMLAttributes<HTMLInputElement> & {
    as?: 'input';
  };

type TextAreaProps = CommonProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: 'textarea';
  };

type OrderFieldProps = InputProps | TextAreaProps;

const OrderField = ({ label, placeholder, error, as = 'input', ...rest }: OrderFieldProps) => {
  return (
    <ReceiverTab>
      <FieldLabel>{label}</FieldLabel>
      <FieldInputWrapper>
        {as === 'textarea' ? (
          <Textarea
            placeholder={placeholder}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <Input placeholder={placeholder} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
        )}
        <ErrorMessage message={error} />
      </FieldInputWrapper>
    </ReceiverTab>
  );
};

export default OrderField;

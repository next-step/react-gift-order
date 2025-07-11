import { useState } from 'react';
import { ERROR_MESSAGES } from '@/constants/validation';

export type FormValues = {
  senderName: string;
  textMessage: string;
};

export type FormField = keyof FormValues;
export type FormErrors = Record<FormField, string>;

const DEFAULT_FORM_VALUES: FormValues = {
  senderName: '',
  textMessage: '',
};

const DEFAULT_FORM_ERRORS: FormErrors = {
  senderName: '',
  textMessage: '',
};

const getFieldError = (field: FormField, value: string): string => {
  const text = value.trim();

  switch (field) {
    case 'senderName':
      return text ? '' : ERROR_MESSAGES.EMPTY_SENDER;

    case 'textMessage':
      return text ? '' : ERROR_MESSAGES.EMPTY_MESSAGE;

    default:
      return '';
  }
};

export const useOrderForm = () => {
  const [formValues, setFormValues] = useState<FormValues>(DEFAULT_FORM_VALUES);
  const [formErrors, setFormErrors] = useState<FormErrors>(DEFAULT_FORM_ERRORS);

  const handleChange = (field: FormField, value: string | number) => {
    setFormValues(prev => ({
      ...prev,
      [field]: String(value),
    }));
  };

  const validateField = (field: FormField): boolean => {
    const value = formValues[field];
    const error = getFieldError(field, value);

    setFormErrors(prev => ({
      ...prev,
      [field]: error,
    }));

    return !error;
  };

  const validateForm = (): boolean => {
    const fields: FormField[] = Object.keys(formValues) as FormField[];
    const results = fields.map(validateField);
    return results.every(Boolean);
  };

  return {
    formValues,
    formErrors,
    handleChange,
    validateField,
    validateForm,
  };
};

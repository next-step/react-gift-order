import { useState } from 'react';
import {
  PHONE_REGEX,
  MIN_QUANTITY,
  ERROR_MESSAGES,
} from '@/constants/validation';

export type FormValues = {
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: number;
  textMessage: string;
};

export type FormErrors = Record<FormField, string>;
export type FormField = keyof FormValues;

const DEFAULT_FORM_VALUES: FormValues = {
  senderName: '',
  receiverName: '',
  receiverPhone: '',
  quantity: 1,
  textMessage: '',
};

const DEFAULT_FORM_ERRORS: FormErrors = {
  senderName: '',
  receiverName: '',
  receiverPhone: '',
  quantity: '',
  textMessage: '',
};

const getFieldError = (field: FormField, value: string | number): string => {
  const text = String(value).trim();

  switch (field) {
    case 'senderName':
      return text ? '' : ERROR_MESSAGES.EMPTY_SENDER;

    case 'receiverName':
      return text ? '' : ERROR_MESSAGES.EMPTY_RECEIVER_NAME;

    case 'receiverPhone':
      if (!text) return ERROR_MESSAGES.EMPTY_RECEIVER_PHONE;
      if (!PHONE_REGEX.test(text)) return ERROR_MESSAGES.INVALID_PHONE;
      return '';

    case 'quantity':
      return Number(value) < MIN_QUANTITY
        ? ERROR_MESSAGES.INVALID_QUANTITY
        : '';

    case 'textMessage':
      return text ? '' : ERROR_MESSAGES.EMPTY_MESSAGE;

    default:
      return '';
  }
};

export const useOrderForm = (unitPrice: number) => {
  const [formValues, setFormValues] = useState<FormValues>(DEFAULT_FORM_VALUES);
  const [formErrors, setFormErrors] = useState<FormErrors>(DEFAULT_FORM_ERRORS);

  const handleChange = (field: FormField, value: string | number) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  const validateField = (field: FormField): boolean => {
    const value = formValues[field];
    const error = getFieldError(field, value);

    setFormErrors(prev => ({ ...prev, [field]: error }));
    return !error;
  };

  const validateForm = (): boolean => {
    const fields: FormField[] = Object.keys(formValues) as FormField[];
    const results = fields.map(validateField);
    return results.every(Boolean);
  };

  const totalPrice = unitPrice * Number(formValues.quantity);

  return {
    formValues,
    formErrors,
    handleChange,
    validateField,
    validateForm,
    totalPrice,
  };
};

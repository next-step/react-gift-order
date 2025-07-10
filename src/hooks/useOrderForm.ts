import { useState } from 'react';
import {
  PHONE_REGEX,
  MIN_QUANTITY,
  ERROR_MESSAGES,
} from '@/constants/validation';

type FormValues = {
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: number;
  textMessage: string;
};

type FormErrors = Record<keyof FormValues, string>;
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

export const useOrderForm = (unitPrice: number) => {
  const [formValues, setFormValues] = useState<FormValues>(DEFAULT_FORM_VALUES);
  const [formErrors, setFormErrors] = useState<FormErrors>(DEFAULT_FORM_ERRORS);

  const handleChange = (field: FormField, value: string | number) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  const validateField = (field: FormField): boolean => {
    const value = formValues[field];

    switch (field) {
      case 'senderName':
        if (!String(value).trim()) {
          setFormErrors(prev => ({
            ...prev,
            senderName: ERROR_MESSAGES.EMPTY_SENDER,
          }));
          return false;
        }
        break;

      case 'receiverName':
        if (!String(value).trim()) {
          setFormErrors(prev => ({
            ...prev,
            receiverName: ERROR_MESSAGES.EMPTY_RECEIVER_NAME,
          }));
          return false;
        }
        break;

      case 'receiverPhone': {
        const phone = String(value).trim();
        if (!phone) {
          setFormErrors(prev => ({
            ...prev,
            receiverPhone: ERROR_MESSAGES.EMPTY_RECEIVER_PHONE,
          }));
          return false;
        } else if (!PHONE_REGEX.test(phone)) {
          setFormErrors(prev => ({
            ...prev,
            receiverPhone: ERROR_MESSAGES.INVALID_PHONE,
          }));
          return false;
        }
        break;
      }

      case 'quantity':
        if (Number(value) < MIN_QUANTITY) {
          setFormErrors(prev => ({
            ...prev,
            quantity: ERROR_MESSAGES.INVALID_QUANTITY,
          }));
          return false;
        }
        break;

      case 'textMessage':
        if (!String(value).trim()) {
          setFormErrors(prev => ({
            ...prev,
            textMessage: ERROR_MESSAGES.EMPTY_MESSAGE,
          }));
          return false;
        }
        break;
    }

    setFormErrors(prev => ({ ...prev, [field]: '' }));
    return true;
  };

  const validateForm = (): boolean => {
    const fields: FormField[] = [
      'senderName',
      'receiverName',
      'receiverPhone',
      'quantity',
      'textMessage',
    ];
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

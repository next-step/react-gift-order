import { useState } from 'react';
import {
  PHONE_REGEX,
  MIN_QUANTITY,
  ERROR_MESSAGES,
} from '@/constants/validation';

type FormFields = 'senderName' | 'receiverName' | 'receiverPhone' | 'quantity';

interface FormValues {
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: number;
}

interface FormErrors {
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: string;
}

export const useOrderForm = (unitPrice: number) => {
  const [formValues, setFormValues] = useState<FormValues>({
    senderName: '',
    receiverName: '',
    receiverPhone: '',
    quantity: 1,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    senderName: '',
    receiverName: '',
    receiverPhone: '',
    quantity: '',
  });

  const handleChange = (field: FormFields, value: string | number) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  const validateSender = () => {
    if (!formValues.senderName.trim()) {
      setFormErrors(prev => ({
        ...prev,
        senderName: ERROR_MESSAGES.EMPTY_SENDER,
      }));
      return false;
    }
    setFormErrors(prev => ({ ...prev, senderName: '' }));
    return true;
  };

  const validateReceiverName = () => {
    if (!formValues.receiverName.trim()) {
      setFormErrors(prev => ({
        ...prev,
        receiverName: ERROR_MESSAGES.EMPTY_RECEIVER_NAME,
      }));
      return false;
    }
    setFormErrors(prev => ({ ...prev, receiverName: '' }));
    return true;
  };

  const validateReceiverPhone = () => {
    const phone = formValues.receiverPhone.trim();
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
    setFormErrors(prev => ({ ...prev, receiverPhone: '' }));
    return true;
  };

  const validateQuantity = () => {
    if (formValues.quantity < MIN_QUANTITY) {
      setFormErrors(prev => ({
        ...prev,
        quantity: ERROR_MESSAGES.INVALID_QUANTITY,
      }));
      return false;
    }
    setFormErrors(prev => ({ ...prev, quantity: '' }));
    return true;
  };

  const validateForm = () => {
    const s = validateSender();
    const n = validateReceiverName();
    const p = validateReceiverPhone();
    const q = validateQuantity();
    return s && n && p && q;
  };

  const totalPrice = unitPrice * formValues.quantity;

  return {
    formValues,
    formErrors,
    handleChange,

    validateSender,
    validateReceiverName,
    validateReceiverPhone,
    validateQuantity,
    validateForm,

    totalPrice,
  };
};

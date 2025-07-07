import { useState } from 'react';
import {
  PHONE_REGEX,
  MIN_QUANTITY,
  ERROR_MESSAGES,
} from '@/constants/validation';

export const useOrderForm = (unitPrice: number) => {
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [quantity, setQuantity] = useState(1);

  const [senderError, setSenderError] = useState('');
  const [receiverNameError, setReceiverNameError] = useState('');
  const [receiverPhoneError, setReceiverPhoneError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const validateSender = () => {
    if (!senderName.trim()) {
      setSenderError(ERROR_MESSAGES.EMPTY_SENDER);
      return false;
    }
    setSenderError('');
    return true;
  };

  const validateReceiverName = () => {
    if (!receiverName.trim()) {
      setReceiverNameError(ERROR_MESSAGES.EMPTY_RECEIVER_NAME);
      return false;
    }
    setReceiverNameError('');
    return true;
  };

  const validateReceiverPhone = () => {
    if (!receiverPhone.trim()) {
      setReceiverPhoneError(ERROR_MESSAGES.EMPTY_RECEIVER_PHONE);
      return false;
    } else if (!PHONE_REGEX.test(receiverPhone)) {
      setReceiverPhoneError(ERROR_MESSAGES.INVALID_PHONE);
      return false;
    }
    setReceiverPhoneError('');
    return true;
  };

  const validateQuantity = () => {
    if (quantity < MIN_QUANTITY) {
      setQuantityError(ERROR_MESSAGES.INVALID_QUANTITY);
      return false;
    }
    setQuantityError('');
    return true;
  };

  const validateForm = () => {
    const senderValid = validateSender();
    const nameValid = validateReceiverName();
    const phoneValid = validateReceiverPhone();
    const quantityValid = validateQuantity();

    return senderValid && nameValid && phoneValid && quantityValid;
  };

  const totalPrice = unitPrice * quantity;

  return {
    senderName,
    setSenderName,
    receiverName,
    setReceiverName,
    receiverPhone,
    setReceiverPhone,
    quantity,
    setQuantity,

    senderError,
    receiverNameError,
    receiverPhoneError,
    quantityError,

    validateSender,
    validateReceiverName,
    validateReceiverPhone,
    validateQuantity,
    validateForm,

    totalPrice,
  };
};

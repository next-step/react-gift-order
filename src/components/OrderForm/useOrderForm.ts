import { useState } from 'react';
import {
  SENDER_NAME_ERROR,
  RECEIVER_NAME_ERROR,
  RECEIVER_PHONE_ERROR,
  PHONE_REGEX_ERROR,
  QUANTITY_ERROR,
  QUANTITY_MIN_ERROR,
  ORDER_SUCCESS_MESSAGE,
} from './constants';

interface IFormData {
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: number;
}

interface IFormErrors {
  senderName?: string;
  receiverName?: string;
  receiverPhone?: string;
  quantity?: string;
}

interface IUseOrderFormProps {
  productPrice: number;
  productName: string;
  message: string;
}

export const useOrderForm = ({ productName, message }: IUseOrderFormProps) => {
  const [formData, setFormData] = useState<IFormData>({
    senderName: '',
    receiverName: '',
    receiverPhone: '',
    quantity: 1,
  });

  const [errors, setErrors] = useState<IFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? Number(value) : value,
    }));
  };

  const validate = (): boolean => {
    let isValid = true;
    const newErrors: IFormErrors = {};

    if (!formData.senderName) {
      newErrors.senderName = SENDER_NAME_ERROR;
      isValid = false;
    }

    if (!formData.receiverName) {
      newErrors.receiverName = RECEIVER_NAME_ERROR;
      isValid = false;
    }

    const phoneRegex = /^010\d{8}$/;
    if (!formData.receiverPhone) {
      newErrors.receiverPhone = RECEIVER_PHONE_ERROR;
      isValid = false;
    } else if (!phoneRegex.test(formData.receiverPhone)) {
      newErrors.receiverPhone = PHONE_REGEX_ERROR;
      isValid = false;
    }

    if (!formData.quantity) {
      newErrors.quantity = QUANTITY_ERROR;
      isValid = false;
    } else if (formData.quantity < 1) {
      newErrors.quantity = QUANTITY_MIN_ERROR;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(
        ORDER_SUCCESS_MESSAGE(
          productName,
          formData.quantity,
          formData.senderName,
          message,
        ),
      );
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};

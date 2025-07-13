import { useState, useEffect } from 'react';

export interface OrderValidationParams {
  message: string;
  sender: string;
  recipientName: string;
  recipientPhone: string;
  quantity: number;
}

export interface OrderValidationErrors {
  message: boolean;
  sender: boolean;
  recipientName: boolean;
  recipientPhone: boolean;
  quantity: boolean;
}

export interface UseOrderValidationReturn {
  errors: OrderValidationErrors;
  validate: () => boolean;
}

export function useOrderValidation(params: OrderValidationParams): UseOrderValidationReturn {
  const { message, sender, recipientName, recipientPhone, quantity } = params;

  const [errors, setErrors] = useState<OrderValidationErrors>({
    message: false,
    sender: false,
    recipientName: false,
    recipientPhone: false,
    quantity: false,
  });

  const validate = (): boolean => {
    const newErrors: OrderValidationErrors = {
      message: message.trim().length === 0,
      sender: sender.trim().length === 0,
      recipientName: recipientName.trim().length === 0,
      recipientPhone: recipientPhone.trim().length === 0,
      quantity: quantity < 1,
    };

    setErrors(newErrors);

    return !(
      newErrors.message ||
      newErrors.sender ||
      newErrors.recipientName ||
      newErrors.recipientPhone ||
      newErrors.quantity
    );
  };

  useEffect(() => {
    if (errors.message && message.trim().length > 0) {
      setErrors((prev) => ({ ...prev, message: false }));
    }
  }, [message, errors.message]);

  useEffect(() => {
    if (errors.sender && sender.trim().length > 0) {
      setErrors((prev) => ({ ...prev, sender: false }));
    }
  }, [sender, errors.sender]);

  useEffect(() => {
    if (errors.recipientName && recipientName.trim().length > 0) {
      setErrors((prev) => ({ ...prev, recipientName: false }));
    }
  }, [recipientName, errors.recipientName]);

  useEffect(() => {
    if (errors.recipientPhone && recipientPhone.trim().length > 0) {
      setErrors((prev) => ({ ...prev, recipientPhone: false }));
    }
  }, [recipientPhone, errors.recipientPhone]);

  useEffect(() => {
    if (errors.quantity && quantity >= 1) {
      setErrors((prev) => ({ ...prev, quantity: false }));
    }
  }, [quantity, errors.quantity]);

  return { errors, validate };
}

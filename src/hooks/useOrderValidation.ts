import { useState } from 'react';

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

    // 모든 필드가 false여야 true
    return !(
      newErrors.message ||
      newErrors.sender ||
      newErrors.recipientName ||
      newErrors.recipientPhone
    );
  };

  return { errors, validate };
}

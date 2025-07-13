import { useState } from 'react';

export interface OrderValidationParams {
  message: string;
  sender: string;
  recipientName: string;
  recipientPhone: string;
}

export interface OrderValidationErrors {
  message: boolean;
  sender: boolean;
  recipientName: boolean;
  recipientPhone: boolean;
}

export interface UseOrderValidationReturn {
  errors: OrderValidationErrors;
  validate: () => boolean;
}

export function useOrderValidation(params: OrderValidationParams): UseOrderValidationReturn {
  const { message, sender, recipientName, recipientPhone } = params;

  const [errors, setErrors] = useState<OrderValidationErrors>({
    message: false,
    sender: false,
    recipientName: false,
    recipientPhone: false,
  });

  const validate = (): boolean => {
    const newErrors: OrderValidationErrors = {
      message: message.trim().length === 0,
      sender: sender.trim().length === 0,
      recipientName: recipientName.trim().length === 0,
      recipientPhone: recipientPhone.trim().length === 0,
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

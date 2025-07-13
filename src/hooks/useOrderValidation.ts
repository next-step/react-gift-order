import { useState, useEffect } from 'react';

// 전화번호 형식: 2~3자리-3~4자리-4자리 (예: 010-1234-5678)
const PHONE_REGEX = /^\d{2,3}-\d{3,4}-\d{4}$/;

export type PhoneError = 'EMPTY' | 'FORMAT' | null;
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
  recipientPhone: PhoneError;
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
    recipientPhone: null,
    quantity: false,
  });

  const validate = (): boolean => {
    const phoneTrim = recipientPhone.trim();
    const phoneError: PhoneError =
      phoneTrim.length === 0 ? 'EMPTY' : !PHONE_REGEX.test(phoneTrim) ? 'FORMAT' : null;

    const newErrors: OrderValidationErrors = {
      message: message.trim().length === 0,
      sender: sender.trim().length === 0,
      recipientName: recipientName.trim().length === 0,
      recipientPhone: phoneError,
      quantity: quantity < 1,
    };

    setErrors(newErrors);

    return !(
      newErrors.message ||
      newErrors.sender ||
      newErrors.recipientName ||
      newErrors.recipientPhone !== null ||
      newErrors.quantity
    );
  };

  // 실시간 입력 시 에러 해제
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
    setErrors((prev) => {
      const trimmed = recipientPhone.trim();
      if (prev.recipientPhone === 'EMPTY' && trimmed.length > 0) {
        return { ...prev, recipientPhone: null };
      }
      if (prev.recipientPhone === 'FORMAT') {
        return { ...prev, recipientPhone: null };
      }
      return prev;
    });
  }, [recipientPhone]);

  useEffect(() => {
    if (errors.quantity && quantity >= 1) {
      setErrors((prev) => ({ ...prev, quantity: false }));
    }
  }, [quantity, errors.quantity]);

  return { errors, validate };
}

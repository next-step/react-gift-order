import { useState } from 'react';
import templates from '@src/assets/mock/order_card_template';

export type OrderValues = {
  message: string;
  senderName: string;
  recipientName: string;
  recipientPhone: string;
  quantity: string;
};

type OrderErrors = Partial<Record<keyof OrderValues, string>>;

const isEmpty = (value: string): boolean => !value.trim();

const useOrderForm = () => {
  const [values, setValues] = useState<OrderValues>({
    message: templates[0].defaultTextMessage,
    senderName: '',
    recipientName: '',
    recipientPhone: '',
    quantity: '1',
  });

  const [errors, setErrors] = useState<OrderErrors>({});

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: OrderErrors = {};
    if (isEmpty(values.message)) newErrors.message = '메시지를 입력해주세요.';
    if (isEmpty(values.senderName))
      newErrors.senderName = '이름을 입력해주세요.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    values,
    errors,
    handleChange,
    validate,
  };
};

export const validateField = (name: string, value: string) => {
  switch (name) {
    case 'recipientName':
      if (!value.trim()) return '이름을 입력해주세요.';
      break;
    case 'recipientPhone':
      if (!value.trim()) return '전화번호를 입력해주세요.';
      if (!/^010\d{7,8}$/.test(value))
        return '올바른 전화번호 형식이 아닙니다.';
      break;
    case 'quantity':
      if (Number(value) < 1) return '구매수량은 1개 이상이어야 합니다.';
      break;
    default:
      return undefined;
  }
  return undefined;
};

export default useOrderForm;

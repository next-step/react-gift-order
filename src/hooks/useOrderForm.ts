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

const unitPrice = 29000;

const isEmpty = (value: string): boolean => !value.trim();

const isValidPhoneNumber = (value: string): boolean =>
  /^010\d{7,8}$/.test(value);

const isValidQuantity = (value: string): boolean => Number(value) >= 1;

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

    if (isEmpty(values.recipientName))
      newErrors.recipientName = '이름을 입력해주세요.';

    if (isEmpty(values.recipientPhone)) {
      newErrors.recipientPhone = '전화번호를 입력해주세요.';
    } else if (!isValidPhoneNumber(values.recipientPhone)) {
      newErrors.recipientPhone = '올바른 전화번호 형식이 아닙니다.';
    }
    if (!isValidQuantity(values.quantity)) {
      newErrors.quantity = '구매수량은 1개 이상이어야 합니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const totalPrice = isValidQuantity(values.quantity)
    ? unitPrice * Number(values.quantity)
    : 0;

  return {
    values,
    errors,
    totalPrice,
    handleChange,
    validate,
  };
};

export default useOrderForm;

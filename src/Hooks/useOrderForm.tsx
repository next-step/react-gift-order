import { useState } from 'react';

interface FormValues {
  sender: string;
  receiver: string;
  phone: string;
  quantity: number;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export const useOrderForm = (initialValues: FormValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: keyof FormValues, value: string | number) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!values.message.trim()) {
      newErrors.message = '메시지는 반드시 입력 되어야 해요.';
    }

    if (!values.sender.trim()) {
      newErrors.sender = '보내는 사람 이름이 반드시 입력 되어야 해요.';
    }

    if (!values.receiver.trim()) {
      newErrors.receiver = '받는 사람 이름이 반드시 입력 되어야 해요.';
    }

    if (!/^010\d{8}$/.test(values.phone)) {
      newErrors.phone =
        '받는사람 전화번호가 반드시 입력되고 전화번호 규칙에 맞아야 해요. (01012341234)';
    }

    if (values.quantity < 1) {
      newErrors.quantity = '수량은 1개 이상이어야 해요.';
    }

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

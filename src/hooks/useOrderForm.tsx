import { useState, useCallback } from 'react';

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

  const handleChange = useCallback((field: keyof FormValues, value: string | number) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }, []);

  const validate = useCallback(() => {
    const newErrors: FormErrors = {};

    if (!values.message.trim()) {
      newErrors.message = '메시지는 반드시 입력 되어야 해요.';
    }

    if (!values.sender.trim()) {
      newErrors.sender = '보내는 사람 이름이 반드시 입력 되어야 해요.';
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values]);

  return {
    values,
    errors,
    handleChange,
    validate,
  };
};

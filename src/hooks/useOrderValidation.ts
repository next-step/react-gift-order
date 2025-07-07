import { useState } from "react";

type OrderFormValues = {
  message: string;
  sender: string;
  receiver: string;
  phone: string;
  quantity: number;
};

type Errors = {
  message?: string;
  sender?: string;
  receiver?: string;
  phone?: string;
  quantity?: string;
};

const useOrderValidation = (values: OrderFormValues) => {
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const newErrors: Errors = {};

    if (!values.message.trim()) {
      newErrors.message = "메시지는 반드시 입력 되어야 해요.";
    }

    if (!values.sender.trim()) {
      newErrors.sender = "보내는 사람 이름이 반드시 입력 되어야 해요.";
    }

    if (!values.receiver.trim()) {
      newErrors.receiver = "받는 사람 이름이 반드시 입력 되어야 해요.";
    }

    if (!/^010\d{8}$/.test(values.phone)) {
      newErrors.phone = "전화번호는 010으로 시작하는 11자리 숫자여야 해요.";
    }

    if (!values.quantity || values.quantity < 1) {
      newErrors.quantity = "수량은 1개 이상이어야 해요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { validate, errors };
};

export default useOrderValidation;

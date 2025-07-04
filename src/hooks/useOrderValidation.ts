import { useState } from "react";

type Refs = {
  messageRef: React.RefObject<HTMLTextAreaElement>;
  senderRef: React.RefObject<HTMLInputElement>;
  receiverRef: React.RefObject<HTMLInputElement>;
  phoneRef: React.RefObject<HTMLInputElement>;
  quantityRef: React.RefObject<HTMLInputElement>;
};

type Errors = {
  message?: string;
  sender?: string;
  receiver?: string;
  phone?: string;
  quantity?: string;
};

const useOrderValidation = (refs: Refs) => {
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const newErrors: Errors = {};

    if (!refs.messageRef.current?.value.trim()) {
      newErrors.message = "메시지는 반드시 입력 되어야 해요.";
    }

    if (!refs.senderRef.current?.value.trim()) {
      newErrors.sender = "보내는 사람 이름이 반드시 입력 되어야 해요.";
    }

    if (!refs.receiverRef.current?.value.trim()) {
      newErrors.receiver = "받는 사람 이름이 반드시 입력 되어야 해요.";
    }

    const phone = refs.phoneRef.current?.value ?? "";
    if (!/^010\d{8}$/.test(phone)) {
      newErrors.phone = "전화번호는 010으로 시작하는 11자리 숫자여야 해요.";
    }

    const quantity = Number(refs.quantityRef.current?.value);
    if (!quantity || quantity < 1) {
      newErrors.quantity = "수량은 1개 이상이어야 해요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { validate, errors };
};

export default useOrderValidation;

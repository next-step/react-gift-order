import { useState } from 'react';

export type Receiver = {
  name: string;
  phone: string;
  quantity: number;
};

export type ReceiverError = {
  name: string;
  phone: string;
  quantity: string;
};

export const useReceivers = (initialReceivers: Receiver[]) => {
  const [receivers, setReceivers] = useState<Receiver[]>(initialReceivers);
  const [errors, setErrors] = useState<ReceiverError[]>(
    initialReceivers.map(() => ({ name: '', phone: '', quantity: '' }))
  );

  const isValidPhoneNumber = (phone: string) => /^010\d{8}$/.test(phone);
  const isDuplicatePhone = (phone: string, index: number) =>
    receivers.some((r, i) => i !== index && r.phone === phone);

  const addReceiver = () => {
    if (receivers.length >= 10) return;
    setReceivers((prev) => [...prev, { name: '', phone: '', quantity: 1 }]);
    setErrors((prev) => [...prev, { name: '', phone: '', quantity: '' }]);
  };

  const removeReceiver = (index: number) => {
    setReceivers((prev) => prev.filter((_, i) => i !== index));
    setErrors((prev) => prev.filter((_, i) => i !== index));
  };

  const updateReceiver = (index: number, field: keyof Receiver, value: string) => {
    const updated = [...receivers];
    if (field === 'quantity') {
      updated[index].quantity = Number(value);
    } else {
      updated[index][field] = value as never;
    }
    setReceivers(updated);

    const newErrors = [...errors];
    if (field === 'name') {
      newErrors[index].name = value.trim() ? '' : '이름을 입력해주세요.';
    }
    if (field === 'phone') {
      if (!value.trim()) {
        newErrors[index].phone = '전화번호를 입력해주세요.';
      } else if (!isValidPhoneNumber(value)) {
        newErrors[index].phone = '올바른 전화번호 형식이 아닙니다.';
      } else if (isDuplicatePhone(value, index)) {
        newErrors[index].phone = '중복된 전화번호입니다.';
      } else {
        newErrors[index].phone = '';
      }
    }
    if (field === 'quantity') {
      newErrors[index].quantity = Number(value) < 1 ? '수량은 1개 이상이어야 합니다.' : '';
    }
    setErrors(newErrors);
  };

  const validateAll = () => {
    let hasError = false;
    const newErrors = receivers.map((r, i) => {
      const err = { name: '', phone: '', quantity: '' };
      if (!r.name.trim()) {
        err.name = '이름을 입력해주세요.';
        hasError = true;
      }
      if (!r.phone.trim()) {
        err.phone = '전화번호를 입력해주세요.';
        hasError = true;
      } else if (!isValidPhoneNumber(r.phone)) {
        err.phone = '올바른 전화번호 형식이 아닙니다.';
        hasError = true;
      } else if (isDuplicatePhone(r.phone, i)) {
        err.phone = '중복된 전화번호입니다.';
        hasError = true;
      }
      if (r.quantity < 1) {
        err.quantity = '수량은 1개 이상이어야 합니다.';
        hasError = true;
      }
      return err;
    });

    setErrors(newErrors);
    return !hasError;
  };

  return {
    receivers,
    errors,
    addReceiver,
    removeReceiver,
    updateReceiver,
    validateAll,
  };
};

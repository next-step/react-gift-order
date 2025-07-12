import { useState } from 'react';
import { receiverListSchema, receiverSchema, type Receiver, type ReceiverError } from '../schemas/receiverSchema';

export const useReceivers = (initialReceivers: Receiver[]) => {
  const [receivers, setReceivers] = useState<Receiver[]>(initialReceivers);
  const [errors, setErrors] = useState<ReceiverError[]>([]);

  const addReceiver = () => {
    if (receivers.length >= 10) return;
    setReceivers((prev) => [...prev, { name: '', phone: '', quantity: 1 }]);
  };

  const removeReceiver = (index: number) => {
    setReceivers((prev) => prev.filter((_, i) => i !== index));
  };

  const updateReceiver = (index: number, field: keyof Receiver, value: string) => {
    const updated = [...receivers];
    const current = updated[index];

    updated[index] = {
      ...current,
      [field]: field === 'quantity' ? Number(value) : value,
    };

    setReceivers(updated);
    validate(index, updated[index]);
  };

  const validate = (index: number, receiver: Receiver) => {
    const result = receiverSchema.safeParse(receiver);
    const newErrors = [...errors];
    if (!result.success) {
      const fieldErrors: ReceiverError = {};
      for (const issue of result.error.issues) {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof Receiver] = issue.message;
        }
      }
      newErrors[index] = fieldErrors;
    } else {
      newErrors[index] = {};
    }
    setErrors(newErrors);
  };

  const validateAll = () => {
    const result = receiverListSchema.safeParse(receivers);

    if (!result.success) {
      const newErrors = receivers.map(() => ({} as ReceiverError));

      result.error.issues.forEach((issue) => {
        const { path, message } = issue;

        if (path.length === 2) {
          const [index, field] = path;
          if (typeof index === 'number' && typeof field === 'string') {
            newErrors[index][field as keyof Receiver] = message;
          }
        } else if (message.includes('전화번호가 중복')) {
          newErrors.forEach((err) => {
            err.phone = '중복된 전화번호입니다.';
          });
        }
      });

      setErrors(newErrors);
      return false;
    }

    setErrors(receivers.map(() => ({})));
    return true;
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

export type { Receiver, ReceiverError };

import { useState, useEffect } from 'react';
import type { RecieverType } from '@/pages/Order/Order';
import type { UseFieldArrayRemove, UseFieldArrayAppend } from 'react-hook-form';
import type { FormValues } from '@/pages/Order/Order';

type FieldError = {
  name?: string;
  phone?: string;
  count?: string;
};

type useRecieverProps = {
  open: boolean;
  onComplete: (list: RecieverType[]) => void;
  initialList: RecieverType[];
  append: UseFieldArrayAppend<FormValues, 'reciever'>;
  remove: UseFieldArrayRemove;
};
const validators = {
  name: (value: string): string => {
    return !value.trim() ? '이름을 입력해주세요.' : '';
  },
  phone: (value: string, allPhones: string[], currentIndex: number): string => {
    if (!value.trim()) return '전화번호를 입력해주세요.';
    const cleanPhone = value.replace(/-/g, '');
    if (!/^01[016789][0-9]{3,4}[0-9]{4}$/.test(cleanPhone)) {
      return '올바른 전화번호 형식이 아닙니다.';
    }
    const phones = allPhones.map((phone, idx) => (idx === currentIndex ? value : phone));
    if (phones.filter((phone) => phone === value).length > 1) {
      return '동일한 전화번호는 입력할 수 없습니다.';
    }
    return '';
  },
  count: (value: number): string => {
    return !value || value < 1 ? '수량은 1개 이상이어야 합니다.' : '';
  },
};

function useReciever({ open, onComplete, initialList, append, remove }: useRecieverProps) {
  const [newList, setNewList] = useState<RecieverType[]>([]);
  const [fieldErrors, setFieldErrors] = useState<FieldError[]>([]);
  const handleChange = (idx: number, key: keyof RecieverType, value: string | number) => {
    setNewList((prev) => prev.map((item, i) => (i === idx ? { ...item, [key]: value } : item)));
    setFieldErrors((prev) => {
      const next = [...prev];
      if (!next[idx]) next[idx] = {};
      let err = '';
      const phones = newList.map((r, i) => (i === idx ? String(value) : r.phone));
      switch (key) {
        case 'name':
          err = validators.name(String(value));
          break;
        case 'phone':
          err = validators.phone(String(value), phones, idx);
          break;
        case 'count':
          err = validators.count(Number(value));
          break;
        default:
          next[idx] = { ...next[idx], [key]: err };
      }
      next[idx] = { ...next[idx], [key]: err };
      return next;
    });
  };

  const handleAdd = () => {
    setNewList([...newList, { name: '', phone: '', count: 1 }]);
    setFieldErrors([...fieldErrors, {}]);
  };

  const handleRemove = (idx: number) => {
    setNewList((prev) => prev.filter((_, i) => i !== idx));
    setFieldErrors((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleComplete = () => {
    const errors: FieldError[] = [];
    let hasError = false;
    const phones = newList.map((r) => r.phone);
    newList.forEach((item, idx) => {
      const err: FieldError = {};
      err.name = validators.name(item.name.trim());
      err.phone = validators.phone(item.phone.trim(), phones, idx);
      err.count = validators.count(item.count);
      if (err.name !== '' || err.phone !== '' || err.count !== '') hasError = true;
      errors[idx] = err;
    });

    setFieldErrors(errors);
    if (hasError) return;

    for (let i = initialList.length - 1; i >= 0; i--) {
      remove(i);
    }

    newList.forEach((item) => {
      append(item);
    });
    onComplete(newList);
  };

  useEffect(() => {
    if (open) {
      setNewList([...initialList]);
      setFieldErrors(new Array(initialList.length).fill({}));
    }
  }, [open, initialList]);

  return {
    newList,
    fieldErrors,
    setNewList,
    setFieldErrors,
    handleChange,
    handleAdd,
    handleRemove,
    handleComplete,
  };
}

export default useReciever;

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

function useReciever({ open, onComplete, initialList, append, remove }: useRecieverProps) {
  const [newList, setNewList] = useState<RecieverType[]>([]);
  const [fieldErrors, setFieldErrors] = useState<FieldError[]>([]);
  const handleChange = (idx: number, key: keyof RecieverType, value: string | number) => {
    setNewList((prev) => prev.map((item, i) => (i === idx ? { ...item, [key]: value } : item)));
    setFieldErrors((prev) => {
      const next = [...prev];
      if (!next[idx]) next[idx] = {};
      let err = '';
      if (key === 'name') {
        if (!String(value).trim()) err = '이름을 입력해주세요.';
      } else if (key === 'phone') {
        if (!String(value).trim()) err = '전화번호를 입력해주세요.';
        else if (!/^01[016789][0-9]{3,4}[0-9]{4}$/.test(String(value).replace(/-/g, '')))
          err = '올바른 전화번호 형식이 아닙니다.';
        else {
          const phones = newList.map((r, i) => (i === idx ? value : r.phone));
          if (phones.filter((p) => p === value).length > 1)
            err = '동일한 전화번호는 입력할 수 없습니다.';
        }
      } else if (key === 'count') {
        if (!value || Number(value) < 1) err = '수량은 1개 이상이어야 합니다.';
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
      if (!item.name.trim()) {
        err.name = '이름을 입력해주세요.';
        hasError = true;
      }
      if (!item.phone.trim()) {
        err.phone = '전화번호를 입력해주세요.';
        hasError = true;
      } else if (!/^01[016789][0-9]{3,4}[0-9]{4}$/.test(item.phone.replace(/-/g, ''))) {
        err.phone = '올바른 전화번호 형식이 아닙니다.';
        hasError = true;
      } else if (phones.filter((p) => p === item.phone).length > 1) {
        err.phone = '동일한 전화번호는 입력할 수 없습니다.';
        hasError = true;
      }
      if (!item.count || item.count < 1) {
        err.count = '수량은 1개 이상이어야 합니다.';
        hasError = true;
      }
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

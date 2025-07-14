import { useFieldArray, useForm } from 'react-hook-form';
import { useRef } from 'react';
import type { Receiver } from '@/types/order.ts';

export default function useReceiverForm() {
  // 받는 사람 정보를 저장할 배열 ref
  const submittedRef = useRef<Receiver[] | null>(null);
  // 취소 시 되돌릴 이전 배열 저장 ref
  const beforeRef = useRef<{ receiverInfo: Receiver[] } | null>(null);

  const {
    register,
    control,
    reset,
    getValues,
    handleSubmit, watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      receiverInfo: [{ name: "", phone: "", count: 1 }],
    },
    mode: 'onChange',
  });

  const { fields , append, remove } = useFieldArray({
    control,
    name: "receiverInfo",
  });

  // 현재 모든 입력 값들을 watch
  const values = watch("receiverInfo");

  return {
    register,
    reset,
    getValues,
    handleSubmit,
    errors,
    fields,
    append,
    remove,
    values,
    submittedRef,
    beforeRef,
  };
}

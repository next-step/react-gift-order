import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import type { Receiver } from '@/types/receiver';

interface FormValues {
  receivers: Receiver[];
}

export const useReceiverForm = (initialValues: Receiver[] = []) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      receivers: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'receivers',
    control,
  });

  const values = watch('receivers');

  useEffect(() => {
    if (initialValues.length > 0) {
      reset({ receivers: initialValues });
    }
  }, [initialValues, reset]);

  const isDuplicate = (phone: string, index: number) => {
    return values.some(
      (receiver, i) => receiver.phone === phone && i !== index
    );
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    fields,
    append,
    remove,
    isDuplicate,
  };
};

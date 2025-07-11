import { useForm, useFieldArray } from 'react-hook-form';

export type Receiver = {
  name: string;
  phone: string;
  quantity: number;
};

export interface ReceiverFormValues {
  receivers: Receiver[];
}

export const useReceiverForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<ReceiverFormValues>({
    defaultValues: { receivers: [] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  });

  const watchPhones = watch('receivers');

  const isDuplicate = (phone: string, index: number): boolean => {
    return (
      watchPhones.filter((r, i) => r.phone === phone && i !== index).length > 0
    );
  };

  return {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    errors,
    fields,
    append,
    remove,
    watchPhones,
    isDuplicate,
  };
};

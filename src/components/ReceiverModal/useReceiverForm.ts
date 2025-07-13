import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  MAX_RECEIVERS,
  DEFAULT_RECEIVER,
} from './constants';
import { FormSchema, type FormValues, type Receivers } from './schema';

interface UseReceiverFormProps {
  initialReceivers?: Receivers;
  onComplete: (receivers: Receivers) => void;
  onClose: () => void;
}

export const useReceiverForm = ({
  initialReceivers = [],
  onComplete,
  onClose,
}: UseReceiverFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      receivers:
        initialReceivers.length > 0
          ? initialReceivers
          : [DEFAULT_RECEIVER],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  });

  const handleAddReceiver = () => {
    if (fields.length < MAX_RECEIVERS) {
      append(DEFAULT_RECEIVER);
    }
  };

  const handleRemoveReceiver = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const onSubmit = (data: FormValues) => {
    onComplete(data.receivers);
    onClose();
  };

  return {
    control,
    register,
    handleSubmit,
    errors,
    fields,
    handleAddReceiver,
    handleRemoveReceiver,
    onSubmit,
  };
};

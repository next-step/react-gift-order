// hooks/useOrderForm.ts
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderFormSchema, type OrderFormData } from '../schemas/orderSchema';

export function useOrderForm(initialMessage: string = '축하해요.') {
  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      message: initialMessage,
      senderName: '',
      recipients: [{ name: '', phone: '', quantity: 1 }],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'recipients',
  });

  const addRecipient = () => {
    if (fields.length < 10) {
      append({ name: '', phone: '', quantity: 1 });
    }
  };

  const removeRecipient = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const setMessage = (message: string) => {
    form.setValue('message', message);
  };

  return {
    form,
    fields,
    addRecipient,
    removeRecipient,
    setMessage,
  };
}

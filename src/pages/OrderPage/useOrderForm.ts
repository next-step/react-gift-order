import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SENDER_NAME_ERROR } from '@/components/SenderForm/constants';
import { ORDER_SUCCESS_MESSAGE } from '@/components/SenderForm/constants';
import { RECEIVER_REQUIRED_MESSAGE } from './constants';

interface ReceiverFormInput {
  name: string;
  phone: string;
  quantity: number;
}

const OrderFormSchema = z.object({
  senderName: z.string().nonempty(SENDER_NAME_ERROR),
  message: z.string().optional(),
});

type OrderFormValues = z.infer<typeof OrderFormSchema>;
type Receivers = ReceiverFormInput[];

export function useOrderForm(product: { name: string; price: number }) {
  const [receivers, setReceivers] = useState<Receivers>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(OrderFormSchema),
    defaultValues: { senderName: '', message: '' },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<OrderFormValues> = (data) => {
    if (receivers.length === 0) {
      alert(RECEIVER_REQUIRED_MESSAGE);
      return;
    }

    const totalQuantity = receivers.reduce((sum, r) => sum + r.quantity, 0);

    alert(
      ORDER_SUCCESS_MESSAGE(
        product.name,
        totalQuantity,
        data.senderName,
        data.message
      )
    );
  };

  const handleReceiverModalComplete = (selectedReceivers: ReceiverFormInput[]) => {
    setReceivers(selectedReceivers);
  };

  const totalQuantity = receivers.reduce((sum, r) => sum + r.quantity, 0);

  return {
    register,
    handleSubmit,
    setValue,
    errors,
    onSubmit,
    receivers,
    handleReceiverModalComplete,
    totalQuantity,
  };
}

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useReceiver } from '@/contexts/ReceiverContext';
import { receiversModalSchema, orderFormSchema} from '@/utils/validation/orderFormSchema';

type ReceiversFormData = z.infer<typeof receiversModalSchema>;

export const useReceiverForm = () => {
  const { receiverList, updateReceiverList } = useReceiver();

  const form = useForm<ReceiversFormData>({
    resolver: zodResolver(receiversModalSchema),
    defaultValues: { receivers: receiverList },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'receivers',
  });

  const addReceiver = () => {
    append({ name: '', phone: '', quantity: 1 });
  };

  const handleFormSubmit = form.handleSubmit((data) => {
    updateReceiverList(data.receivers);
  });

  const canAddMore = fields.length < 10;

  const canOrder = () => {
    const currentReceivers = form.getValues('receivers');
    const result = orderFormSchema.shape.receivers.safeParse(currentReceivers);
    return result.success;
  };

  return {
    register: form.register,
    formState: form.formState,
    watch: form.watch,
    getValues: form.getValues,
    handleSubmit: handleFormSubmit,
    fields,
    addReceiver,
    remove,  
    canAddMore,
    canOrder,
  };
};

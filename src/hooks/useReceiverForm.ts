import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReceiversModel, type ReceiversModelType } from '@/models/OrderFormModel';
import { useOrderStore } from '@/stores/orderStore';
import { useModal } from '@/contexts/ModalContext';

export function useReceiverForm() {
  const { close } = useModal();
  const { receivers, setReceivers } = useOrderStore();

  const methods = useForm<ReceiversModelType>({
    resolver: zodResolver(ReceiversModel),
    defaultValues: {
      receivers,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'receivers',
  });

  const onSubmit = (data: ReceiversModelType) => {
    setReceivers(data.receivers);
    close();
  };

  return { methods, fields, append, remove, onSubmit };
}
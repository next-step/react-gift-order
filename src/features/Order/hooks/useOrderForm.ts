import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export interface Receiver {
  receiver: string;
  phone: string;
  quantity: number;
}

export interface Order {
  message: string;
  sender: string;
  receivers: Receiver[];
}

interface UseOrderFormParams {
  defaultMessage: string;
  productName: string;
  sellingPrice: number;
  selectedCardId: number;
  selectedCardMessage: string;
}

export const useOrderForm = ({
  defaultMessage,
  productName,
  sellingPrice,
  selectedCardId,
  selectedCardMessage,
}: UseOrderFormParams) => {
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<Order>({
    defaultValues: {
      message: defaultMessage,
      sender: '',
      receivers: [],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  });

  const order = watch();
  const totalPrice = order.receivers.reduce(
    (sum: number, r) => sum + r.quantity * sellingPrice,
    0
  );

  useEffect(() => {
    setValue('message', selectedCardMessage || '');
  }, [selectedCardId, selectedCardMessage, setValue]);

  const onSubmit = handleSubmit((data) => {
    const totalQuantity = data.receivers.reduce(
      (sum, r) => sum + Number(r.quantity),
      0
    );

    alert(`주문이 완료되었습니다.
상품명: ${productName}
총 수량: ${totalQuantity}
발신자 이름: ${data.sender}
메시지: ${data.message}`);

    navigate('/');
  });

  return {
    register,
    onSubmit,
    errors,
    order,
    totalPrice,
    fields,
    append,
    remove,
    control,
    getValues,
    trigger,
  };
};

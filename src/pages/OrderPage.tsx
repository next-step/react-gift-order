import { useForm, useFieldArray, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderSchema } from '@/schemas/orderSchema';
import type { OrderFormData } from '@/schemas/orderSchema';

import useRequireAuth from '@/hooks/useRequireAuth';
import useCustomTheme from '@/hooks/useCustomTheme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CardSelector from '@/components/order/CardSelector';
import MessageInput from '@/components/order/MessageInput';
import SenderInput from '@/components/order/SenderInput';
import RecipientSummary from '@/components/order/RecipientSummary';
import RecipientModal from '@/components/order/RecipientModal';
import PriceSummary from '@/components/order/PriceSummary';

const OrderPage = () => {
  const theme = useCustomTheme();
  const navigate = useNavigate();
  const user = useRequireAuth();
  if (!user) return null;

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      message: '',
      senderName: '',
      selectedCardId: null,
      recipients: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients',
  });

  const selectedCardId = watch('selectedCardId');
  const recipients = watch('recipients');

  const productPrice = 29000;
  const totalQuantity = recipients.reduce(
    (sum, r) => sum + Number(r.quantity || 0),
    0
  );
  const totalPrice = totalQuantity * productPrice;

  const onSubmit: SubmitHandler<OrderFormData> = (data) => {
    alert(
      `주문이 완료되었습니다.\n` +
        `상품명: BBQ 양념치킨+크림치즈볼+콜라1.5L\n` +
        `구매 수량: ${totalQuantity}개\n` +
        `발신자이름: ${data.senderName}\n` +
        `메시지: ${data.message}`
    );
    navigate('/');
  };

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      css={{
        maxWidth: '720px',
        margin: 'auto',
        padding: theme.spacing.spacing5,
      }}
    >
      <CardSelector
        selectedCardId={selectedCardId}
        setValue={setValue}
        theme={theme}
      />

      <MessageInput register={register} error={errors.message} theme={theme} />

      <SenderInput
        register={register}
        error={errors.senderName}
        theme={theme}
      />

      <RecipientSummary
        recipients={recipients}
        errors={errors.recipients}
        append={append}
        setModalOpen={setModalOpen}
        theme={theme}
      />

      {isModalOpen && (
        <RecipientModal
          fields={fields}
          register={register}
          errors={errors}
          append={append}
          remove={remove}
          theme={theme}
          setModalOpen={setModalOpen}
        />
      )}

      <PriceSummary totalPrice={totalPrice} theme={theme} />
    </form>
  );
};

export default OrderPage;

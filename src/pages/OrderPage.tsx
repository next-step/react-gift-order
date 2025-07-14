import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, useFieldArray, useWatch, type SubmitHandler } from 'react-hook-form';
import { Layout } from '@/components/Layout';
import { NavBar } from '@/components/NavBar';
import type { MessageCard } from '@/types';
import { rankingAll } from '@/data/rankings';
import { messageCardTemplates } from '@/data/messageCards';

import * as S from '@/styles/OrderPage.styles';
import { MessageCardSection } from '@/components/order/MessageCardSection';
import { ProductInfoSection } from '@/components/order/ProductInfoSection';
import { OrderPageFooter } from '@/components/order/OrderPageFooter';
import { GiftingForm } from '@/components/order/GiftingForm';
import { AddRecipientModal } from '@/components/order/AddRecipientModal';
import { RecipientList } from '@/components/order/RecipientList';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderFormSchema, type OrderFormValues } from '@/lib/schemas';

const OrderPage = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();
  const item = rankingAll.find(it => it.id === Number(itemId));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      senderName: '내 이름',
      message: messageCardTemplates[0].defaultTextMessage,
      recipients: [],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'recipients' });
  
  const recipients = useWatch({ control, name: 'recipients' });
  const messageValue = useWatch({ control, name: 'message' });

  const [selectedCard, setSelectedCard] = useState<MessageCard>(messageCardTemplates[0]);
  useEffect(() => {
    setValue('message', selectedCard.defaultTextMessage);
  }, [selectedCard, setValue]);

  const handleRecipientsUpdate = (updatedRecipients: OrderFormValues['recipients']) => {
    setValue('recipients', updatedRecipients, { shouldValidate: true });
    setIsModalOpen(false);
  };

  const onSubmit: SubmitHandler<OrderFormValues> = (data) => {
    console.log('최종 주문 데이터:', data);
    alert('주문 성공!');
    navigate('/');
  };

  if (!item) {
    return (
      <Layout>
        <NavBar />
        <div css={S.pageWrapper}>상품 정보를 찾을 수 없습니다.</div>
      </Layout>
    );
  }

  const totalPrice = (recipients || []).reduce((sum, current) => sum + (item.price.sellingPrice * current.quantity), 0);

  return (
    <Layout>
      <NavBar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={S.pageWrapper}>
          <MessageCardSection
            selectedCard={selectedCard}
            onCardSelect={setSelectedCard}
            message={messageValue || ''}
            onMessageChange={(e) => setValue('message', e.target.value, { shouldValidate: true })}
          />
          <hr css={S.divider} />
          <GiftingForm
            register={register}
            errors={errors}
          />
          <hr css={S.divider} />
          <div css={{ padding: `0 16px` }}>
            <GiftingForm register={register} errors={errors} />
            <p css={S.helperTextCss}>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</p>
            {errors.senderName && <p css={S.errorCss}>{errors.senderName.message}</p>}
          </div>
          <hr css={S.divider} />
          <div css={S.formSection}>
            <h3>받는 사람</h3>
            <RecipientList control={control} remove={remove} />
            <button type="button" onClick={() => setIsModalOpen(true)}>
              {fields.length > 0 ? '수정하기' : '+ 추가하기'}
            </button>
            {errors.recipients && <p css={S.errorCss}>{errors.recipients.message}</p>}
          </div>
          <hr css={S.divider} />
          <ProductInfoSection item={item} />
        </div>
        <OrderPageFooter totalPrice={totalPrice} onSubmit={handleSubmit(onSubmit)}/>

      </form>
      {isModalOpen && (
        <AddRecipientModal
          onClose={() => setIsModalOpen(false)}
          onComplete={handleRecipientsUpdate} 
          initialRecipients={recipients}
        />
      )}
    </Layout>
  );
};

export default OrderPage;

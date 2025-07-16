import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { messageCards } from '@/data/messageCards';
import MessageCardSelector, { type MessageCard } from './MessageCardSelector/MessageCardSelector';
import SelectedCardPreview from './SelectedCardPreview/SelectedCardPreview';
import { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import SectionDivider from '@/components/SectionDivider';
import SenderInfo from './SenderInfo/SenderInfo';
import ProductSummary from './ProductSummary/ProductSummary';
import BottomButton from '@/components/BottomButton';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { OrderFormSchema } from './schemas/orderSchema';
import type { z } from 'zod';
import ReceiverSection from './ReceiverInfo/ReceiverSection';

const OrderPage = () => {
  type OrderFormType = z.infer<typeof OrderFormSchema>;

  const methods = useForm<OrderFormType>({
    resolver: zodResolver(OrderFormSchema),
    defaultValues: {
      senderName: '',
      receivers: [],
      message: '',
    },
  });

  const { handleSubmit, setValue, watch } = methods;

  const [selectedCard, setSelectedCard] = useState<MessageCard | null>(null);

  const handleSelectCard = (card: MessageCard) => {
    setSelectedCard(card);
    setValue('message', card.defaultTextMessage, { shouldValidate: true });
  };

  const onSubmit = (data: OrderFormType) => {
    console.log('폼 제출 완료!', data);
  };

  return (
    <Layout>
      <NavigationBar />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MessageCardSelector
            cards={messageCards}
            selectedId={selectedCard?.id ?? null}
            onSelect={handleSelectCard}
          />
          <SelectedCardPreview
            card={selectedCard ?? messageCards[0]}
            message={watch('message') ?? ''}
            onChange={(val) => setValue('message', val, { shouldValidate: true })}
          />
          <SectionDivider />
          <SenderInfo />
          <SectionDivider />
          <ReceiverSection />
          <SectionDivider />
          <SectionTitle title="상품 정보" />
          <ProductSummary />

          <BottomButton type="submit">주문하기</BottomButton>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default OrderPage;

import styled from '@emotion/styled';
import { OrderFormSubmitButton } from './SubmitButton';
import { OrderFormMessageFields } from './MessageFields';
import { MOCK_MESSAGE_CARD_LIST } from './MessageFields/mock';
import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { OrderFormOrdererFields } from './OrdererFields';
import { OrderFormOrderSummary } from './OrderSummary';
import { OrderFormReceiversFields } from './ReceiversFields';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderFormSchema, type OrderFormData } from '@/schemas/orderForm';

type Props = {
  productId: string;
};

export const OrderForm = ({ productId }: Props) => {
  const formHandler = useForm<OrderFormData>({
    defaultValues: {
      message: MOCK_MESSAGE_CARD_LIST[0].defaultTextMessage,
      messageCardId: MOCK_MESSAGE_CARD_LIST[0].id.toString(),
      ordererName: '',
      receivers: [],
    },
    resolver: zodResolver(orderFormSchema),
  });

  return (
    <Wrapper>
      <OrderFormMessageFields formHandler={formHandler} />
      <HorizontalSpacing size='spacing2' color='gray200' />
      <OrderFormOrdererFields formHandler={formHandler} />
      <HorizontalSpacing size='spacing2' color='gray200' />
      <OrderFormReceiversFields formHandler={formHandler} />
      <HorizontalSpacing size='spacing2' color='gray200' />
      <OrderFormOrderSummary productId={productId} />
      <OrderFormSubmitButton productId={productId} formHandler={formHandler} />
    </Wrapper>
  );
};

const Wrapper = styled.section(({ theme }) => ({
  width: '100%',
  paddingBottom: '3.125rem',
  backgroundColor: theme.colors.semantic.background.default,
}));

import styled from '@emotion/styled';
import MessageCardSection from './components/MessageCardSection';
import MessageInput from './components/MessageInput';
import SenderInfo from './components/SenderInfo';
import ProductInfo from './components/ProductInfo';
import ReceiverField from './components/ReceiverField';
import { useParams } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

const Section = styled.section`
  width: 100%;
  max-width: 720px;
  padding-bottom: 3.125rem;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const OrderButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellowPressed};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
export interface OrderInfoValues {
  message: string;
  name: string;
  receiverInfos: { name: string; phoneNumber: string; quantity: number }[];
}

const OrderPage = () => {
  const { id } = useParams<{ id: string }>();
  const index = Number(id);

  const onSubmit = () => {
    alert('주문 성공!');
  };

  const orderForm = useForm<OrderInfoValues>({
    defaultValues: { message: '축하해요.', name: '', receiverInfos: [] },
  });

  const { watch } = orderForm;
  const watchedReceiverInfos = watch('receiverInfos');

  return (
    <>
      <Section>
        <FormProvider {...orderForm}>
          <form onSubmit={orderForm.handleSubmit(onSubmit)}>
            <MessageCardSection />
            <MessageInput />
            <SenderInfo />
            <ReceiverField watchedData={watchedReceiverInfos} />
            <ProductInfo index={index} />
            <OrderButton type="submit">
              {29000 * watchedReceiverInfos.length}원 주문하기
            </OrderButton>
          </form>
        </FormProvider>
      </Section>
    </>
  );
};

export default OrderPage;

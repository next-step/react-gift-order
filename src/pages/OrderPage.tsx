import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { messageCards } from '@/data/messageCards';
import { mockProducts } from '@/data/products';
import Navigation from '@/components/Navigation';
import CardSelector from '@/components/OrderSection/CardSelector';
import MessageInput from '@/components/OrderSection/MessageInput';
import SenderForm from '@/components/OrderSection/SenderForm';
import ReceiverForm from '@/components/ReceiverFormSection/ReceiverForm';
import ProductInfo from '@/components/OrderSection/ProductInfo';
import OrderSubmitButton from '@/components/OrderSection/OrderSubmitButton';
import { ROUTES } from '@/constants/routes';
import { ERROR_MESSAGES } from '@/constants/validation';

type FormValues = {
  senderName: string;
  textMessage: string;
};

const OrderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockProducts[Number(id) - 1];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      senderName: '',
      textMessage: messageCards[0].defaultTextMessage,
    },
  });

  const [receiverList, setReceiverList] = useState<
    { name: string; phone: string; quantity: number }[]
  >([]);

  const totalQuantity = receiverList.reduce((sum, r) => sum + r.quantity, 0);
  const totalPrice = product ? totalQuantity * product.price.sellingPrice : 0;

  const [selectedCardId, setSelectedCardId] = useState(messageCards[0].id);

  const handleCardChange = (cardId: number) => {
    setSelectedCardId(cardId);
    const card = messageCards.find(c => c.id === cardId);
    if (card) {
      setValue('textMessage', card.defaultTextMessage);
    }
  };

  const onSubmit = (data: FormValues) => {
    alert(
      `주문이 완료되었습니다.\n` +
        `상품명: ${product.name}\n` +
        `총 수량: ${totalQuantity}개\n` +
        `총 가격: ${totalPrice.toLocaleString()}원\n` +
        `발신자: ${data.senderName}`
    );
    navigate(ROUTES.HOME);
  };

  if (!product) return <div>잘못된 접근입니다.</div>;

  return (
    <>
      <Navigation />
      <Main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CardSelector
            selectedCardId={selectedCardId}
            onSelect={handleCardChange}
          />
          <MessageInput
            {...register('textMessage', {
              required: ERROR_MESSAGES.EMPTY_MESSAGE,
            })}
            error={errors.textMessage?.message}
          />
          <SenderForm
            {...register('senderName', {
              required: ERROR_MESSAGES.EMPTY_SENDER,
            })}
            error={errors.senderName?.message}
          />
          <ReceiverForm
            receiverList={receiverList}
            setReceiverList={setReceiverList}
          />
          <ProductInfo product={product} />
          <OrderSubmitButton amount={totalPrice} />
        </Form>
      </Main>
    </>
  );
};

export default OrderPage;

const Main = styled.main`
  background-color: ${({ theme }) => theme.color.semantic.background.default};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[5]};
`;

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { messageCards } from '@/data/messageCards';
import { mockProducts } from '@/data/products';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import CardSelector from '@/components/OrderSection/CardSelector';
import MessageInput from '@/components/OrderSection/MessageInput';
import SenderForm from '@/components/OrderSection/SenderForm';
import ReceiverForm from '@/components/OrderSection/ReceiverForm';
import ProductInfo from '@/components/OrderSection/ProductInfo';
import OrderSubmitButton from '@/components/OrderSection/OrderSubmitButton';

const OrderPage = () => {
  const { id } = useParams();
  const product = mockProducts[Number(id) - 1];

  const [selectedCardId, setSelectedCardId] = useState(messageCards[0].id);
  const selectedCard = messageCards.find(card => card.id === selectedCardId)!;

  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Navigation />
      <Main>
        <Section>
          <CardSelector
            selectedCardId={selectedCardId}
            onSelect={setSelectedCardId}
          />

          <MessageInput value={selectedCard.defaultTextMessage} />

          <SenderForm
            senderName={senderName}
            onChange={setSenderName}
            errorMessage={!senderName ? '이름을 입력해주세요.' : ''}
          />

          <ReceiverForm
            receiverName={receiverName}
            receiverPhone={receiverPhone}
            quantity={quantity}
            onChangeName={setReceiverName}
            onChangePhone={setReceiverPhone}
            onChangeQuantity={setQuantity}
            errorName={!receiverName ? '이름을 입력해주세요.' : ''}
            errorPhone={!receiverPhone ? '전화번호를 입력해주세요.' : ''}
          />

          <ProductInfo product={product} />

          <OrderSubmitButton amount={product.price.sellingPrice} />
        </Section>
      </Main>
    </>
  );
};

export default OrderPage;

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.semantic.background.default};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[5]};
`;
